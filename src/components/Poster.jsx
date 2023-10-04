import { imageUrl } from "../constants/apiFilms";
import styles from '../styles/poster.module.css';
import { useNavigate } from 'react-router-dom';

export const Poster = ({ poster_path, title, vote_average, id }) => {
const navigate = useNavigate();

const detailsMovie = () => {
  navigate(`/details/${title}/${id}`,
    {
      state: {
        id: id
      }
    }
  )
}

  let color;
  if (vote_average > 0 && vote_average <= 6.9) {
    color = '#ff0000'
  } else if (vote_average >= 7.0 && vote_average <= 8.0) {
    color = '#f7f745'
  } else if (vote_average > 8) {
    color = '#48fa48'
  }

  return (
    <>
      <img
        src={`${imageUrl}${poster_path}`}
        alt={title}
        className={styles.poster}
        onClick={detailsMovie}
      />
      <div style={{ position: 'relative' }}>
        {
          poster_path && <span style={{ color: color }} className={styles.puntuacion}>{vote_average}</span>
        }
      </div>
    </>
  )
}
