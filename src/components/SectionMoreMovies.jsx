import styles from '../styles/recommendation.module.css';
import { imageUrl } from "../constants/apiFilms";
import sin_imagen from '../assets/sin_imagen.png';

export const SectionMoreMovies = ({ data, goToDetails, getInfoMovie }) => {
  return (
    <section className={styles.container_recommendations}>
      {
        data.results && data.results.map(item => {
          return (
            <div key={item.id} onClick={() => getInfoMovie(item.id)}>
              <img
                src={item.poster_path ? imageUrl + item.poster_path : sin_imagen}
                alt={item.title}
                className={styles.card}
              />
            </div>
          )
        })
      }
    </section>
  )
}
