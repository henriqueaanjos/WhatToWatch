import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { IoArrowBack, IoArrowRedo, IoBookmark, IoBookmarkOutline, IoBookmarkSharp, IoStar } from "react-icons/io5";
import Badge from "../../components/Badge";
import Header from "../../components/Header";
// import TabBar from "../../components/TabBar";
import { MovieDetailDTO } from "../../DTO/MovieDetailDTO";
import { MovieDTO } from "../../DTO/MovieDTO";
import { TmdbAPI } from "../../services/apiTmdb";
import { filtersGenres } from "../../util/filters";

import {
    Container,
    Content,
    BackButton,
    MovieBanner,
    Poster,
    MovieInfo,
    MovieTitle,
    MovieYear,
    MovieOverview,
    MovieGenres,
    MovieInfoFooter,
    MovieStreamings,
    StreamingLogo,
    MovieRating,
    Rating,
    MovieRate,
    MovieMaxRate,
    MovieFooter,
    SaveButton,
    ImdbButton,
    ImdbButtonTitle,
    MovieStreamingsTitle,
    StreamingsBar
} from './styles'
import 'react-circular-progressbar/dist/styles.css';
import Head from "next/head";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import TabBar from "../../components/TabBar";
import Footer from "../../components/Footer";


interface MovieProps{
    movie: MovieDetailDTO
}
interface Filter{
    id: number,
    name: string,
    category: string
}
interface Provider{
    display_priority: number,
    logo_path: string,
    provider_id: number,
    provider_name: string
}

interface Providers{
    rent?: Provider[],
    buy?: Provider[],
    flatrate?: Provider[]
}

export default function Movie({movie}: MovieProps){
    const [isTabBarOpen, setTabBarOpen] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const theme = useTheme();
    const route = useRouter();

    const moviesKey="@whattowatch:movies";

    function handleGoBack(){
        route.back();
    }
    function saveMovie(){
        const old = localStorage.getItem(moviesKey);
        const oldParsed = JSON.parse(old);
        console.log('Filmes Salvos: '+ oldParsed);
        if(oldParsed){
            if(isSaved){
                const newMovies = oldParsed.filter(oldMovie => oldMovie.id != movie.id);
                localStorage.setItem(moviesKey, JSON.stringify(newMovies));
                console.log('Filmes Salvos(1): '+ newMovies);
            }else{
                const newMovies = [...oldParsed, movie];
                localStorage.setItem(moviesKey, JSON.stringify(newMovies));
                console.log('Filmes Salvos(2): '+ newMovies);
            }
        }else{
            const newMovies = [movie];
            localStorage.setItem(moviesKey, JSON.stringify(newMovies));
            console.log('Filmes Salvos(3): '+ newMovies);
        }
        setIsSaved(old => !old);
    }
    useEffect(() => {
        const old = localStorage.getItem(moviesKey);
        const oldParsed = JSON.parse(old);
        if(oldParsed){
            if(oldParsed.find(oldMovie => oldMovie.id === movie.id))
                setIsSaved(true);
        }
        // localStorage.removeItem(moviesKey);
    }, []);

    function handleShowTabBar(){
        setTabBarOpen(old => !old);
    }

    return(
        <>
        <Head>
            <title>{movie.title}</title>
        </Head>
        <Container>
            <Header isTabBarActive={isTabBarOpen} changeMenuVisibility={handleShowTabBar}/>
            { isTabBarOpen && <TabBar />}
            <Content isTabBarOpen={isTabBarOpen}>
                {/* <BackButton
                    onClick={handleGoBack}
                >
                    <IoArrowBack
                        size="1rem"
                    />
                </BackButton> */}
                <MovieBanner img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
                    <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <MovieInfo img={movie.backdrop_path}>
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
                        <MovieInfoFooter>
                            <MovieStreamings>
                                <MovieStreamingsTitle>{movie.watch_providers.length === 0 ? "Filme Indisponível por enquanto":"Streamings Disponíveis:"} </MovieStreamingsTitle>
                                <StreamingsBar>
                                {movie.watch_providers.map(provider => 
                                    <StreamingLogo 
                                        src={`https://image.tmdb.org/t/p/w300/${provider.logo_path}`}
                                        alt={provider.provider_name}
                                    /> 
                                )}
                                </StreamingsBar>
                            </MovieStreamings>
                            <MovieRating>
                                <Rating>
                                    <MovieRate>{movie.vote_average}</MovieRate>
                                    <MovieMaxRate>/10</MovieMaxRate>
                                </Rating>
                                <IoStar
                                    size='1.5rem'
                                    color={theme.colors.star}
                                />
                            </MovieRating>
                        </MovieInfoFooter>
                        <MovieFooter>
                            <ImdbButton href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'>
                                <ImdbButtonTitle>Ver no Imdb</ImdbButtonTitle>
                                <IoArrowRedo
                                    size="2rem"
                                />
                            </ImdbButton>
                            <SaveButton onClick={saveMovie} isSaved={isSaved}>
                            { isSaved ?
                            <IoBookmark
                                    size="2rem"
                                    color={theme.colors.primary}
                            />
                            :
                            <IoBookmarkOutline
                                    size="2rem"
                                />
                                }
                            </SaveButton>
                        </MovieFooter>
                    </MovieInfo>
                </MovieBanner>
            </Content>
            <Footer/>
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
    const wp = await TmdbAPI.get(`/movie/${id}/watch/providers`, {
        params:{
            api_key: process.env.TMDB_API_KEY
        }
    })
    if(!!wp.data.results.BR){
        const p : Providers = wp.data.results.BR;
        const rent = [...(!!p.rent ? p.rent : [])];
        const buy = [...(!!p.buy ? p.buy : [])];
        const flatrate = [...(!!p.flatrate ? p.flatrate : [])];
        const providers = [...flatrate, ...rent, ...buy]
        const setProvider = new Set();
        const watch_providers = providers.filter((provider) => {
            const duplicatedProvider = setProvider.has(provider.provider_id);
            setProvider.add(provider.provider_id);
            return !duplicatedProvider;
        });

        return {
            props:{
                movie: {
                    ...movie.data,
                    watch_providers
                }
            }
        }
    }else{
        
    return {
        props:{
            movie: {
                ...movie.data,
                watch_providers: []
            }
        }
    }
    }
  }