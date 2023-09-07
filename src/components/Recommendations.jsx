import { useState } from "react";
import { useFetchInfo } from "../hooks/useFetchInfo";
import { useNavigate } from "react-router-dom";
import { SectionMoreMovies } from "./SectionMoreMovies";

export const Recommendations = ({ id }) => {

  const navigate = useNavigate();
  
  const [endpoint, setEndpoint] = useState('recommendations');

  const { data } = useFetchInfo({ id, endpoint });

const goToDetails = (title, id) => {
  console.log(id)
  // navigate(`/details/${title}/${id}`, {
  //   state: { data }
  // });
}
  return (
    <>
    <h4>Pelís Recomendadas</h4>
      <SectionMoreMovies 
      data={data}
      onClick={goToDetails}
    />
    </>
  )
}
