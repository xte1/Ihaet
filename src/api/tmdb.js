import axios from 'axios';

const API_KEY = '12bae60f08973cb30c741d0844769d9d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ar-SA',
  },
});

export const getImageUrl = (path, size = 'w500') => 
  path ? `https://image.tmdb.org/t/p/${size}${path}` : 'https://via.placeholder.com/500';
