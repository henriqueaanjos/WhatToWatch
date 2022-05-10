import axios from 'axios';

export const OmdbAPI = axios.create({
    baseURL: `http://www.omdbapi.com/`
});