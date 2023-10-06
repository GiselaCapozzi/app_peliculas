import { API_KEY } from "../constants/EnvVariables";

export const searchAllPages = async (search, page, streaming) => {
  const result = await fetch(`https://api.themoviedb.org/3/search/${streaming}?&api_key=${API_KEY || 'a1a65561608eec5f512496b236209147'}&query=${search}&page=${page}`)
  const data = await result.json();
  return data;
}