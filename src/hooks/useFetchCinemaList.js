import { useEffect, useState } from "react";
import { getCinemaList } from "../services/cinemaList.js";

export const useFetchCinemaList = () => {
  const [cinemaList, setCinemaList] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const getList = async () => {
    const result = await getCinemaList(pageNum);
    setCinemaList(result.results)
    setTotalPage(result.total_pages)
  }  
  
  useEffect(() => {
    getList()
  }, [pageNum])

  return {
    cinemaList,
    pageNum,
    setPageNum,
    totalPage,
    getList
  }
}
