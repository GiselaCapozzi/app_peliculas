import { useState } from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";
import { useFetchDetails } from '../hooks/useFetchDetails';
import { SectionMoreMovies } from "./SectionMoreMovies";

export const Similar = ({ id }) => {

  const [endpoint, setEndpoint] = useState('similar');
  const [idMovie, setIdMovie] = useState('');

  const { data } = useFetchInfo({id, endpoint});
  const { data: dataDetails } = useFetchDetails({id}); 

const getInfoMovie = (id) => {
  let idArray = [];
 console.log(data.results)
}

  return (
    <>
      <h4>Pelís Similares</h4>
      <SectionMoreMovies 
        data={data}
        dataDetails={dataDetails}
        getInfoMovie={getInfoMovie}
      />
    </>
  )
}
