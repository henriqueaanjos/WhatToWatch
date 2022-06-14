import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward, IoBookmark, IoChevronDown, IoChevronUp, IoStar } from 'react-icons/io5'
import { useTheme } from 'styled-components'
import Badge from '../../components/Badge'
import CheckBox from '../../components/CheckBox'
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'
// import TabBar from '../../components/TabBar'
import { MovieDetailDTO } from '../../DTO/MovieDetailDTO'
import { MovieDTO } from '../../DTO/MovieDTO'
import { OmdbAPI } from '../../services/apiOmdb'
import { TmdbAPI } from '../../services/apiTmdb'
import { filtersGenres } from '../../util/filters'
import {
    Container,
    Content,
    OptionsBar,
    Title,
    FilterButton,
    MoviesContainer,
    FilterButtonTitle,
    OptionsModal,
    ModalContent,
    BadgeButton,
    ModalSubTitle,
    SelectedFilters,
    CategoriesContent,
    Categories, 
    OrderByContent,
    OrderBy,
    CheckBoxButton,
    CheckBoxLabel,
    MovieCard,
    Poster,
    MovieTitle,
    MovieInfo,
    MovieInfoFooter,
    StarsAvg,
    Stars,
    StarsTotals,
    ContentFooter,
    ButtonPage,
    ButtonPageTitle,
    PageCounter,
    PageType
} from './../styles/home'


export default function Saves() {
    const [isTabBarOpen, setIsTabBarOpen] = useState(false);
    const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);
    const [movies, setMovies] = useState<MovieDetailDTO[]>([]);

    const moviesKey="@whattowatch:movies";

    const theme = useTheme();
    const route = useRouter();

    async function getData(){
        const data = localStorage.getItem(moviesKey);
        console.log(JSON.parse(data));
        if(data){
            setMovies(JSON.parse(data));
        }
    }

    function handleChangeMenuVisibility(){
        setIsTabBarOpen(old => !old);
    }

    function handleGoBack(){
        route.push('/')
    }

    useEffect(() => {
        getData();
    }, []);

    return (
    <Container>
        <Header changeMenuVisibility={handleChangeMenuVisibility} isTabBarActive={isTabBarOpen}/>
        {isTabBarOpen && <TabBar />}
        <Content isTabBarOpen={isTabBarOpen} >
            <OptionsBar >
                <PageType>
                    <IoBookmark
                        size="2rem"
                        color={theme.colors.primary}
                    />
                    <Title>My save Movies</Title>
                </PageType>
                {/* <FilterButton onClick={() => {}}>
                    <FilterButtonTitle></FilterButtonTitle>
                    {/* <IoChevronDown
                        color={theme.colors.title}
                        size="1.5rem"
                    /> 
                </FilterButton> */}
            </OptionsBar>
        
            <MoviesContainer isFilterOptionsOpen={isFilterOptionsOpen}>
                {movies.map(movie => 
                    <Link href={`/movie/${movie.id}`}>
                        <MovieCard key={movie.id}>
                            <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                            <MovieInfo>
                                <MovieTitle>{movie.title}</MovieTitle>
                                <MovieInfoFooter>
                                    <StarsAvg>
                                        <Stars>{movie.vote_average}</Stars>
                                        <StarsTotals>/10</StarsTotals>
                                    </StarsAvg>
                                    <IoStar
                                        size="0.825rem"
                                        color={theme.colors.star}
                                    />
                                </MovieInfoFooter>
                            </MovieInfo>
                        </MovieCard>
                    </Link>
                )}
            </MoviesContainer>
            
        </Content>
    </Container>
    )
  }