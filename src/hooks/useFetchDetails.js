import { useEffect, useState } from "react";
import { getDetailsMovie } from '../services/getDetailsMovie';

export const useFetchDetails = ({ id }) => {
console.log(id)
  const [data, setData] = useState([]);

  useEffect(() => {
    getDetailsMovie(id)
      .then(res => setData(res))
  }, [])

  return {
    data
  }
}
