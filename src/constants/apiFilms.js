import { API_KEY } from "./EnvVariables";
console.log(API_KEY)

// API
// Películas en cartelera
const api_base = `https://api.themoviedb.org/3`;
export const cinemaList = `${api_base}/movie/now_playing?api_key=${API_KEY || a1a65561608eec5f512496b236209147}&language=es-ES`;

// IMAGEN
export const imageUrl =  'https://image.tmdb.org/t/p/original/';