import { useEffect } from "react";
import { useFetchCinemaList } from "./useFetchCinemaList";

export const usePagination = ({ dataCinemaList }) => {
  
  const { pageNum, setPageNum, totalPage, getList, cinemaList } = useFetchCinemaList();

  const handlePrevious = () => {
    if (dataCinemaList && pageNum > 1) {
      setPageNum(pageNum - 1)
    }
    getList()
    console.log('first')
  }

  const handleNext = () => {
    if (dataCinemaList && pageNum < totalPage) {
      setPageNum(pageNum + 1)
    }
    getList()
  }

  useEffect(() => {
    getList()
  }, [pageNum])
  
  return {
    handlePrevious,
    handleNext,
    cinemaList,
    pageNum,
    totalPage
  }
}
