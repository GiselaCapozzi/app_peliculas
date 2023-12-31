import { imageUrl } from "../constants/apiFilms"
import sin_imagen from '../assets/sin_imagen.png';
import styles from '../styles/card.module.css';
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

export const Card = ({ imagen, titulo, classNameImg, id }) => {

  const navigate = useNavigate();
  const detailsMovie = () => {
    navigate(`/details/${titulo}/${id}`,
      {
        state: {
          id: id
        }
      }
    )
  }

  return (
    <div className={styles.container_card} onClick={detailsMovie}>
      <picture>
        <img
          src={imagen ? `${imageUrl}${imagen}` : sin_imagen}
          alt={titulo}
          className={classNameImg}
        />
      </picture>
      <div className={styles.container_text}>
        <p>{titulo}</p>
      </div>
    </div>
  )
}
