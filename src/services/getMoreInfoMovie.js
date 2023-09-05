import { API_KEY } from '../constants/EnvVariables';
import { api_base } from '../constants/apiFilms';

export const getMoreInfoMovie = async ({ id }, endpoint) => {
  const response = await fetch(`${api_base}/${id}/${endpoint}?api_key=${API_KEY || 'a1a65561608eec5f512496b236209147'}&language=es-ES`);
  const data = await response.json();
  return data;
}