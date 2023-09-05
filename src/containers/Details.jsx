import { useParams, useLocation } from "react-router-dom";
import { useFetchDetails } from "../hooks/useFetchDetails";
import { imageUrl } from '../constants/apiFilms';
import styles from '../styles/details.module.css';
import { useFetchFlags } from '../hooks/useFetchFlags';
import { InfoMovie } from "../components/InfoMovie";
import ReactStars from "react-stars";
import { MoreInfo } from "./MoreInfo";

export const Details = () => {

  const location = useLocation();
  const idMovie = location.state;

  const { title } = useParams();
  const { data } = useFetchDetails(idMovie);
  const { flags } = useFetchFlags();

  const { 
    backdrop_path, 
    overview, 
    genres, 
    production_countries, 
    production_companies,
    release_date,
    vote_average,
    runtime,
    tagline 
  } = data;

const puntuacion = Number(vote_average && vote_average.toFixed(1));

  return (
    <section className={styles.container_detail}>
      <h1>{title}</h1>
      { tagline && <h3>{tagline}</h3> }
      <div className={styles.stars}>
        <ReactStars 
          count={10}
          value={puntuacion}
          edit={false}
          size={30}
        />
        <p>{puntuacion}</p>
        </div>
      <div className={styles.container_contenido}>
        <img
          src={imageUrl + backdrop_path}
          alt={data.title}
          className={styles.image_detail}
        />
        {
          overview && <p className={styles.desc_detail}>{overview}</p>
        }
      </div>
      <InfoMovie 
        genres={genres}
        production_countries={production_countries}
        production_companies={production_companies}
        release_date={release_date}
        vote_average={vote_average}
        runtime={runtime}
        flags={flags}
      />
      <MoreInfo 
        id={idMovie}
      />
    </section>
  )
}
