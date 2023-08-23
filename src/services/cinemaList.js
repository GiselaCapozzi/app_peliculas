import { cinemaList } from "../constants/apiFilms";

export const getCinemaList = async (page) => {
  const result = await fetch(`${cinemaList}&page=${page}`);
  const data = await result.json();
  return data;
}