import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward, IoChevronDown, IoChevronUp, IoStar } from 'react-icons/io5'
import { useTheme } from 'styled-components'
import Badge from '../../components/Badge'
import CheckBox from '../../components/CheckBox'
import Header from '../../components/Header'
// import TabBar from '../../components/TabBar'
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
    PageCounter
} from './../styles/home'

interface Filter{
    id: number,
    name: string,
    category: string
    active: boolean
}
interface SearchProps{
    querySearch: string,
    movies: MovieDTO[],
    page: number,
    total_pages: number
}

export default function Search({querySearch,  movies, page, total_pages }: SearchProps) {
    const [isTabBarOpen, setIsTabBarOpen] = useState(false);
    const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

    const theme = useTheme();


    return (
    <Container>
        <Header/>
        {/* <TabBar isOpen={isTabBarOpen} setIsOpen={setIsTabBarOpen}/> */}
        <Content isTabBarOpen={isTabBarOpen} >
            <OptionsBar >
                <Title>"{querySearch}"</Title>
                <FilterButton onClick={() => {}}>
                    <FilterButtonTitle></FilterButtonTitle>
                    {/* <IoChevronDown
                        color={theme.colors.title}
                        size="1.5rem"
                    /> */}
                </FilterButton>
            </OptionsBar>
            {/* {isFilterOptionsOpen && 
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
            } */}
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
            <ContentFooter>
            {page > 1 ?
                    <Link href={`/search/${querySearch}?page=${page-1}`} >
                        <ButtonPage disabled={page === 1}>
                            <IoArrowBack 
                                size="1.25rem"
                                color={theme.colors.title}
                            />
                            <ButtonPageTitle>Prev</ButtonPageTitle>
                        </ButtonPage>
                    </Link>
                :
                    <ButtonPage disabled={page === 1}>
                        <IoArrowBack 
                            size="1.25rem"
                            color={theme.colors.title}
                        />
                        <ButtonPageTitle>Prev</ButtonPageTitle>
                    </ButtonPage>
                }
                <PageCounter>{page}/{total_pages}</PageCounter>
                {page < total_pages ?
                    <Link href={`/search/${querySearch}?page=${page+1}`}>
                        <ButtonPage disabled={page === total_pages}>
                            <ButtonPageTitle>Next</ButtonPageTitle>
                            <IoArrowForward 
                                size="1.25rem"
                                color={theme.colors.title}
                            />
                        </ButtonPage>
                    </Link>
                :
                    <ButtonPage disabled={page === total_pages}>
                        <ButtonPageTitle>Next</ButtonPageTitle>
                        <IoArrowForward 
                            size="1.25rem"
                            color={theme.colors.title}
                        />
                    </ButtonPage>
                }
            </ContentFooter>
        </Content>
    </Container>
    )
  }

  export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
    // const moviesSearch = await OmdbAPI.get('/', {
    //     params:{
    //         apikey: process.env.OMDB_API_KEY,
    //         s: 'the batman',
    //         type: 'movie',
    //         plot: 'full'
    //     }
    // });

    const { querySearch } = params;

    const { page } = query;


    const movies = await TmdbAPI.get('/search/movie', {
        params:{
            api_key: process.env.TMDB_API_KEY,
            language: 'pt-BR',
            page,
            query: querySearch
        }
    });

    return {
        props:{
            movies: movies.data.results,
            page: movies.data.page,
            total_pages: movies.data.total_pages,
            querySearch
        }
    }
  }