import { useState } from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";
import { imageUrl } from "../constants/apiFilms";
import sin_avatar from '../assets/sin_avatar.png';
import styles from '../styles/reviews.module.css';
import { Button } from "./Button";

export const Reviews = ({ id }) => {

  const [endpoint, setEndpoint] = useState('reviews');
  const [show, setShow] = useState({});

  const { data } = useFetchInfo({ id, endpoint });

  const mostrarOcultarContenido = (id) => {
    setShow((prevShow) => ({
      ...prevShow,
      [id]: !prevShow[id] || false,
    }))
  }

  return (
    <>
      {
        data.results && data.results.length < 1 ? (<p>Sin reviews aún</p>) : (
          data.results && data.results.map((review) => {
            const {
              author_details: {
                avatar_path,
                username,
                raiting
              },
              author,
              content
            } = review;
            return (
              <div key={review.id} className={styles.container_review}>
                <div className={styles.container_user}>
                  {
                    !avatar_path ? <img className={styles.image} src={sin_avatar} alt={username} /> :
                      <img className={styles.image} src={imageUrl + avatar_path} alt={username} />
                  }
                  <div className={styles.container_infouser}>
                    <p>{author}</p>
                    <p>{username}</p>
                    <p>{raiting}</p>
                  </div>
                </div>
                <div className={styles.container_content}>
                  {
                    content.length <= 500 && <p>{content}</p>
                  }
                  {
                    show[review.id] ?
                      <p>{content}<Button onClick={() => mostrarOcultarContenido(review.id)}>Ocultar</Button></p> :
                      <p>{content.slice(0, 500)}<Button onClick={() => mostrarOcultarContenido(review.id)}>Mostrar</Button></p>
                  }
                </div>
              </div>
            )
          }
          )
        )
      }
    </>
  )
}
