import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { IoArrowRedo, IoBookmark, IoStar } from "react-icons/io5";
import Badge from "../../components/Badge";
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import { MovieDetailDTO } from "../../DTO/MovieDetailDTO";
import { MovieDTO } from "../../DTO/MovieDTO";
import { TmdbAPI } from "../../services/apiTmdb";
import { filtersGenres } from "../../util/filters";

import {
    Container,
    Content,
    Poster,
    MovieInfo,
    MovieTitle,
    MovieYear,
    MovieOverview,
    MovieGenres,
    MovieStreamings,
    MovieAvaliation,
    Rating,
    MovieRate,
    MovieMaxRate,
    Footer,
    SaveButton,
    ImdbButton,
    ImdbButtonTitle,
} from './styles'
import 'react-circular-progressbar/dist/styles.css';
import Head from "next/head";
import { useTheme } from "styled-components";


interface MovieProps{
    movie: MovieDetailDTO
}
interface Filter{
    id: number,
    name: string,
    category: string
}

export default function Movie({movie}: MovieProps){
    const [isTabBarOpen, setTabBarOpen] = useState(false);
    const theme = useTheme();

    return(
        <>
        <Head>
            <title>{movie.title}</title>
        </Head>
        <Container>
            <Header/>
            <TabBar isOpen={isTabBarOpen} setIsOpen={setTabBarOpen}/>
            <Content isTabBarOpen={isTabBarOpen} >
                <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieYear>{new Date(movie.release_date).getFullYear()} - {Math.floor(movie.runtime/60)}:{movie.runtime%60 < 10 ?'0'+movie.runtime%60 : movie.runtime%60} hrs</MovieYear>
                    <MovieGenres>
                    {
                        movie.genres.map(genre => (
                            <Badge title={genre.name} active withouticon/>    
                        ))
                    }
                    </MovieGenres>
                    <MovieOverview>{movie.overview}</MovieOverview>
                    <MovieAvaliation>
                        <Rating>
                            <MovieRate>{movie.vote_average}</MovieRate>
                            <MovieMaxRate>/10</MovieMaxRate>
                        </Rating>
                        <IoStar
                            size='1.5rem'
                            color={theme.colors.star}
                        />
                    </MovieAvaliation>
                    <MovieStreamings></MovieStreamings>
                    <Footer>
                        <ImdbButton href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'>
                            <ImdbButtonTitle>Ver no Imdb</ImdbButtonTitle>
                            <IoArrowRedo
                                size="2rem"
                            />
                        </ImdbButton>
                        <SaveButton>
                            <IoBookmark
                                size="2rem"
                            />
                        </SaveButton>
                    </Footer>
                </MovieInfo>
            </Content>
        </Container>
        </>
    )
}

  export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    
    const {id} = params;

    const movie = await TmdbAPI.get<MovieDetailDTO>(`/movie/${id}`, {
        params:{
            api_key: process.env.TMDB_API_KEY,
            language: 'pt-BR'
        }
    });

    return {
        props:{
            movie: movie.data
        }
    }
  }