import { API_KEY } from "./EnvVariables";

// API
// Películas en cartelera
const api_base = `https://api.themoviedb.org/3`;
export const cinemaList = `${api_base}/movie/now_playing?api_key=${API_KEY}&language=es-ES`;

// IMAGEN
export const imageUrl =  'https://image.tmdb.org/t/p/original/';