import { imageUrl } from "../constants/apiFilms";
import styles from '../styles/poster.module.css';

export const Poster = ({ poster_path, title }) => {
  return (
    <img 
    src={`${imageUrl}${poster_path}`} 
    alt={title}
    className={styles.poster}
    />
  )
}
