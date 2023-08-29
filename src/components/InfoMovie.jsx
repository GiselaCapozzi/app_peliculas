import { imageUrl } from "../constants/apiFilms";
import styles from '../styles/infomovie.module.css';
import { List } from "./List";

export const InfoMovie = ({
  genres,
  production_countries,
  production_companies,
  release_date,
  runtime
}) => {

  const fechaLanzamiento = release_date && release_date.split('-').reverse().join('/');

  return (
      <section className={styles.container_info}>
        <p className={styles.text_info}>Fecha de lanzamiento : {fechaLanzamiento}</p>
        <p className={styles.text_info}>Duración: {runtime} minutos</p>
        <ul className={styles.container_genres}>
          {
            genres && genres.map(genre => (
              <List 
                key={genre.id}
                children={genre.name}
              />
            ))
          }
        </ul>
        <ul className={styles.container_flags}>
          {
            production_countries && production_countries.map(country => {
              const pais = country.iso_3166_1.toLowerCase();
              return (
                <List 
                  key={country.iso_3166_1}
                  image={`https://flagcdn.com/36x27/${pais}.png`}
                  className={styles.flags}
                />
              )
            })
          }
        </ul>
        <ul className={styles.container_company}>
          {
            production_companies && production_companies.map(company => (
              <List
                key={company.id}
                image={imageUrl + company.logo_path}
                name={company.name}
                className={styles.company_image}
              />
            ))
          }
        </ul>
      </section>
  )
}
