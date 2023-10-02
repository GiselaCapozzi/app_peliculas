import { imageUrl } from "../constants/apiFilms";
import styles from '../styles/carousel.module.css';

export const CarouselImage = ({ item }) => {
    const { backdrop_path, title } = item;

  return (
    <div className={styles.container}>
      <img
        src={`${imageUrl}${backdrop_path}`}
        alt={item.title}
        className={styles.imagenes}
      />
      <p
        style={{
          display: 'flex',
          position: 'absolute',
          top: '75%'
        }}
        className={styles.titulo}
      >{title}</p>
    </div>
  )
}
