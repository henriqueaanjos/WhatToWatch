import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward, IoChevronDown, IoChevronUp, IoStar } from 'react-icons/io5'
import { useTheme } from 'styled-components'
import Badge from '../components/Badge'
import CheckBox from '../components/CheckBox'
import Header from '../components/Header'
import TabBar from '../components/TabBar'
import { MovieDTO } from '../DTO/MovieDTO'
import { OmdbAPI } from '../services/apiOmdb'
import { TmdbAPI } from '../services/apiTmdb'
import { filtersGenres } from '../util/filters'
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
    PageCounter
} from './styles/home'

interface Filter{
    id: number,
    name: string,
    category: string
    active: boolean
}

export default function Home() {
    const [isTabBarOpen, setIsTabBarOpen] = useState(false);
    const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

    const [filters, setFilters] = useState<Filter[]>(filtersGenres.map(f => {return ({...f, active: false })}));

    const [movies, setMovies] = useState<MovieDTO[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const theme = useTheme();

    function handleOpenFilterOptions(){
        setIsFilterOptionsOpen(old => !old);
    }

    async function handleSelectFilter(id: number){
        const filtersChanged = filters.map(filter => filter);
        const selectedFilter = filtersChanged.find(filter => filter.id === id);
        if(selectedFilter){
            selectedFilter.active = !selectedFilter.active;
        } 
        setFilters([...filtersChanged]);
        await filterMovies();
    }

    async function handleSelectOrder(id: number){
        const updatedFilters = filters.map(filter => filter);
        const updateFilter = updatedFilters.find(filter => filter.id === id);
        if(updateFilter){
            updateFilter.active = !updateFilter.active;
            updatedFilters.map(filter => {
                if(filter.category === 'order' && filter.id != id){
                    filter.active = false;
                }
            })
        }
        setFilters([...updatedFilters]);
        await orderMovies();
    }
    async function handleNextPage(){
        setPage(old => old+1);
        await getData();
    }
    async function handlePrevPage(){
        setPage(old => old-1);
        await getData();
    }

    async function filterMovies(){
        const genresSelected = filters.filter(filter => filter.category === 'genre').map(filter => filter.id).toString();
        const movies = await TmdbAPI.get('/discover/movie', {
            params:{
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
                with_genres: genresSelected,
                page: 1
            }
        });
        console.log(movies.data);
        setMovies(movies.data.results);
        setTotalPages(movies.data.total_pages)
    }

    async function orderMovies(){
        setPage(1);
        const orderFilter = filters.find(order => order.category === 'order').id;
        const param = orderFilter === 1 ? 'vote_average.desc' : orderFilter === 2 ? 'popularity.desc' : 'release_date.desc';
        const movies = await TmdbAPI.get('/discover/movie', {
            params:{
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
                sort_by: param,
                page: 2
            }
        });
        console.log('Vai teia...');
        setMovies(movies.data.results);
        setTotalPages(movies.data.total_pages)
    }

    async function getData(){
        const movies = await TmdbAPI.get('/movie/popular', {
            params:{
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
                page,
            }
        });
        setMovies(movies.data.results);
        setTotalPages(movies.data.total_pages)
    }
    useEffect(() => {
        getData();
    })

    return (
    <Container>
        <Header/>
        <TabBar isOpen={isTabBarOpen} setIsOpen={setIsTabBarOpen}/>
        <Content isTabBarOpen={isTabBarOpen} >
            <OptionsBar >
                <Title>Movies</Title>
                <FilterButton onClick={handleOpenFilterOptions}>
                    <FilterButtonTitle>Filters</FilterButtonTitle>
                    <IoChevronDown
                        color={theme.colors.title}
                        size="1.5rem"
                    />
                </FilterButton>
            </OptionsBar>
            {isFilterOptionsOpen && 
                <OptionsModal  isTabBarOpen={isTabBarOpen}>
                    <OptionsBar >
                        <Title>Movies</Title>
                        <FilterButton onClick={handleOpenFilterOptions}>
                            <FilterButtonTitle>Filters</FilterButtonTitle>
                            <IoChevronUp
                                color={theme.colors.title}
                                size="1.5rem"
                            />
                        </FilterButton>
                    </OptionsBar>
                    <SelectedFilters>
                        {filters.filter(filter => filter.active).map(filter =>
                            <BadgeButton onClick={() => handleSelectFilter(filter.id)}>
                                <Badge 
                                    title={filter.name}
                                    active={filter.active}
                                />
                            </BadgeButton>
                        )}
                    </SelectedFilters>
                    <ModalContent>
                        <CategoriesContent>
                            <ModalSubTitle>Genres</ModalSubTitle>
                            <Categories>
                                {
                                    filters.filter(filter => filter.category==='genre' && filter.active === false).map(filter =>
                                        <BadgeButton onClick={() => handleSelectFilter(filter.id)}>
                                            <Badge 
                                                title={filter.name} 
                                                active={filter.active}/> 
                                        </BadgeButton>   
                                    )
                                }
                            </Categories>
                        </CategoriesContent>
                        <OrderByContent>
                            <ModalSubTitle>Order By</ModalSubTitle>
                            <OrderBy>
                                {filters.filter(filter => filter.category === 'order').map(filter =>
                                    <CheckBoxButton onClick={() => handleSelectOrder(filter.id)}>
                                        <CheckBox active={filter.active} />
                                        <CheckBoxLabel>{filter.name}</CheckBoxLabel>
                                    </CheckBoxButton>
                                )}
                            </OrderBy>
                        </OrderByContent>
                    </ModalContent>
                </OptionsModal>
            }
            <MoviesContainer isFilterOptionsOpen={isFilterOptionsOpen}>
                {movies.map(movie => 
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
                )}
            </MoviesContainer>
            <ContentFooter>
                <ButtonPage disabled={page === 1} onClick={handlePrevPage}>
                    <IoArrowBack 
                        size="1.25rem"
                        color={theme.colors.title}
                    />
                    <ButtonPageTitle>Prev</ButtonPageTitle>
                </ButtonPage>
                <PageCounter>{page}/{totalPages}</PageCounter>
                <ButtonPage disabled={page === totalPages} onClick={handleNextPage}>
                    <ButtonPageTitle>Next</ButtonPageTitle>
                    <IoArrowForward 
                        size="1.25rem"
                        color={theme.colors.title}
                    />
                </ButtonPage>
            </ContentFooter>
        </Content>
    </Container>
    )
  }

//   export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
//     // const moviesSearch = await OmdbAPI.get('/', {
//     //     params:{
//     //         apikey: process.env.OMDB_API_KEY,
//     //         s: 'the batman',
//     //         type: 'movie',
//     //         plot: 'full'
//     //     }
//     // });
//     const movies = await TmdbAPI.get('/movie/popular', {
//         params:{
//             api_key: process.env.TMDB_API_KEY,
//             language: 'pt-BR',
//             page: 1,
//         }
//     });

//     return {
//         props:{
//             movies: movies.data.results,
//             page: movies.data.page,
//             total_pages: movies.data.total_pages
//         }
//     }
//   }