import { imageUrl } from "../constants/apiFilms";
import styles from '../styles/galery.module.css';
import sin_imagen from '../assets/sin_imagen.png';

export const Galery = ({ foto, nombre, personaje }) => {
  return (
    <>
      <section className={styles.container}>
        <picture className={styles.container_image}>
          {
            foto?
              <img className={styles.image} src={imageUrl + foto} alt={nombre} /> :
              <img className={styles.image} src={sin_imagen} alt={nombre} />
          }
        </picture>
        <div className={styles.container_text}>
          <p>{nombre}</p>
          <p>{personaje}</p>
        </div>
      </section>
    </>
  )
}
