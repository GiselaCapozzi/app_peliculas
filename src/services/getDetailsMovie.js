import { api_base } from '../constants/apiFilms';
import { API_KEY } from "../constants/EnvVariables";

export const getDetailsMovie = async (id) => {
  const result = await fetch(`${api_base}/${id}?api_key=${API_KEY || 'a1a65561608eec5f512496b236209147'}&language=es-ES`);
  const data = await result.json();
  return data;
}