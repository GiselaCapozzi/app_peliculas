import { useEffect, useState } from "react";
import { getCinemaList } from "../services/cinemaList.js";

export const useFetchCinemaList = () => {
  const [cinemaList, setCinemaList] = useState([]);

  const getList = async () => {
    const result = await getCinemaList();
    setCinemaList(result.results)
  }  

  useEffect(() => {
    getList()
  }, [])

  return {
    cinemaList
  }
}
