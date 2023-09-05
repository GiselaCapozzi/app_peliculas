import { useState, useEffect } from 'react';
import { getMoreInfoMovie } from '../services/getMoreInfoMovie';

export const useFetchInfo = ({ id, endpoint }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getMoreInfoMovie(id, endpoint)
      .then(res => setData(res))
  }, [endpoint])

  return {
    data,
    setData
  }
}
