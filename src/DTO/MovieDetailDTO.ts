export interface MovieDetailDTO{
    adult: boolean,
    backdrop_path: string,
    genres: {
        id: number,
        name: string
    }[],
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    watch_providers:{
        display_priority: number,
        logo_path: string,
        provider_id: number,
        provider_name: string
    }[]
}