import Head from 'next/head'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward, IoChevronDown, IoChevronUp, IoClose, IoOptions, IoStar } from 'react-icons/io5'
import { useTheme } from 'styled-components'
import { threadId } from 'worker_threads'
import Badge from '../components/Badge'
import Carousel from '../components/Carousel'
import CheckBox from '../components/CheckBox'
import FilterBar from '../components/FilterBar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieCardMd from '../components/MovieCardMd'
import MovieCardSm from '../components/MovieCardSm'
import OrderBar from '../components/OrderBar'
import { PageOptions } from '../components/PageOptions'
import TabBar from '../components/TabBar'
import { MovieDTO } from '../DTO/MovieDTO'
import { OmdbAPI } from '../services/apiOmdb'
import { TmdbAPI } from '../services/apiTmdb'
import { filtersGenres } from '../util/filters'
import { streamings } from '../util/streamings'
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
    StreamingContent,
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
    PageType,
    Options,
    FilterOptions,
    OptionTitle,
    SortOptions,
    SortBy,
    MovieBanners
} from '../styles/home'



export default function Home() {
    const [isTabBarOpen, setIsTabBarOpen] = useState(false);
    const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);
    const [isOrderOptionsOpen, setIsOrderOptionsOpen] = useState(false);

    const [gridLine, setGridLine] = useState(0);

    const [movies, setMovies] = useState<MovieDTO[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [orderBy, setOrderBy] = useState('Popularity');
    const [query, setQuery] = useState('');
    const [filterGenres, setFilterGenres] = useState<typeof filtersGenres>();
    const [filterStreamings, setFilterStreaming] = useState<typeof streamings>();
    const [sort, setSort] = useState<'popularity.desc' | 'vote_average.desc' | 'release_date.desc'>('popularity.desc');

    const theme = useTheme();

    function handleOpenFilterOptions(){
        setIsTabBarOpen(false);
        setIsOrderOptionsOpen(false);
        setIsFilterOptionsOpen(old => !old);
    }

    function handleChangeMenuVisibility(){
        setIsTabBarOpen(old => !old);
    }

    function handleChangeOrderOptionsVisibility(){
        setIsFilterOptionsOpen(false);
        setIsOrderOptionsOpen(old => !old);
    }

    async function handleResetData(){
        setQuery('');
        setFilterGenres([]);
        setFilterStreaming([]);
        setSort('popularity.desc');
        await getData();
    }

    function formatNameOrder(order : string){
        switch(order){
            case "popularity.desc":
                setOrderBy('Popularity');
                break;
            case "release_date.desc":
                setOrderBy('Release Date');
                break;
            case "vote_average.desc":
                setOrderBy('Vote Average');
                break;
        }
    }

    function updateParams(genres? : typeof filtersGenres, streams?: typeof streamings, order?: 'popularity.desc' | 'release_date.desc' | 'vote_average.desc'){
        genres && setFilterGenres(genres);
        streams && setFilterStreaming(streams);
        order && setSort(order);
        order && formatNameOrder(order);
        setQuery('');
    }

    const getData = useCallback(async() => {
        const movies = await TmdbAPI.get('/discover/movie', {
            params:{
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
                page,
                sort_by: sort,
                with_genres: filterGenres != undefined && filterGenres.map(item => item.id).toString(),
                with_watch_providers: filterStreamings != undefined && filterStreamings.map(item => item.provider_id).toString(),
                watch_region: 'BR'
            }
        });
        setMovies([...movies.data.results]);
        setTotalPages(movies.data.total_pages);
    }, [filterGenres, filterStreamings, sort, page]);

    const searchMovie = useCallback(async(query: string) =>{
        const movies = await TmdbAPI.get('/search/movie', {
            params:{
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
                page,
                query
            }
        });
        setQuery(query);
        setMovies([...movies.data.results]);
        setTotalPages(movies.data.total_pages);
    }, [page]);

    function getTotalItemsGridLine(){
        const ScreenWidth = window.window.innerWidth;
        const rem = ScreenWidth > 1080 ? 16 : ScreenWidth > 720 ? 15 : 14;
        const movieContainerWidth =  ScreenWidth - (6*rem);
        const count  = Math.floor(movieContainerWidth/170);
        const gap = (count-1)*0.5*rem;
        const gridCount = (movieContainerWidth-gap)/170;
        setGridLine(Math.floor(gridCount));
    }

    function setNewPage(type: 'prev' | 'next'){
        if(type === 'prev' && page > 1)
            setPage(page-1);
        if(type === 'next' && page < totalPages)
            setPage(page+1);
    }

    useEffect(() => {
        getTotalItemsGridLine();
        if(query === '') {   
            getData();
        }else
            searchMovie(query);
    },[page, getData, query, searchMovie]);

    useEffect(() => {
        getData();
    }, [filterGenres, filterStreamings, sort, getData])

    useEffect(() => {
        window.addEventListener('resize', getTotalItemsGridLine);
        return () => window.removeEventListener('resize', getTotalItemsGridLine);
    });

    return (
        <>
            <Head>
                <title>What to Watch</title>
            </Head>        
        
            <Container>
                <Header changeMenuVisibility={handleChangeMenuVisibility} isTabBarActive={isTabBarOpen} onSearch={searchMovie}/>
                { isTabBarOpen && <TabBar execute={handleOpenFilterOptions}/>}
                <Content isTabBarOpen={isTabBarOpen}>
                    <Carousel />
                    <OptionsBar>
                        <PageType>
                            <IoStar
                                color={theme.colors.primary}
                                size="2rem"
                            />
                            <Title>{query != '' ? query : orderBy}</Title>
                            {query != '' && 
                                <button
                                    onClick={handleResetData}
                                >
                                    <IoClose
                                        color={theme.colors.primary}
                                        size="1.5rem"
                                    />
                                </button>
                            }
                        </PageType>
                        <Options>
                            <FilterOptions onClick={handleOpenFilterOptions}>
                                <IoOptions
                                    color={theme.colors.title}
                                    size="1.5rem"
                                />
                                <OptionTitle>Filters</OptionTitle>
                            </FilterOptions>
                            
                            <SortOptions onClick={handleChangeOrderOptionsVisibility}>
                                <OptionTitle>Sort by:</OptionTitle>
                                <SortBy>{orderBy}</SortBy>
                            </SortOptions>
                        </Options>
                    </OptionsBar>
                    <FilterBar visibility={isFilterOptionsOpen} setVisibility={handleOpenFilterOptions} filter={updateParams} order={handleChangeOrderOptionsVisibility} orderStatus={orderBy} reset={handleResetData}/>
                    <OrderBar visibility={isOrderOptionsOpen} setVisibility={handleChangeOrderOptionsVisibility} filter={updateParams} />
                    <MovieBanners>
                    {movies.slice(0, 20%gridLine).map(movie =>
                        
                            <MovieCardMd
                                key={movie.id}
                                id={movie.id}
                                backdrop_path={movie.backdrop_path}
                                title={movie.title}
                                vote_average={movie.vote_average}
                                maxWidth={(window.window.innerWidth-(4*16))/(20%gridLine)}
                            />
                    )}
                    </MovieBanners>
                    <MoviesContainer isFilterOptionsOpen={false}>
                        
                        {movies.slice(20%gridLine, movies.length).map(movie =>
                            <MovieCardSm
                                key={movie.id}
                                id={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                vote_average={movie.vote_average}
                            />
                        )}
                    </MoviesContainer>
                    <PageOptions setNewPage={setNewPage} currentPage={page} totalPages={totalPages}/>
                </Content>
                <Footer/>
            </Container>
        </>
    )
  }

