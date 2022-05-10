import axios from 'axios';

export const TmdbAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});