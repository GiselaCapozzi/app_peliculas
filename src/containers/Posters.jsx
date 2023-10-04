import { Poster } from '../components/Poster';
import { useFetchCinemaList } from '../hooks/useFetchCinemaList';
import styles from '../styles/poster.module.css';
import { useNavigate } from 'react-router-dom';

export const Posters = () => {

  const { cinemaList } = useFetchCinemaList();
  const navigate = useNavigate();

  const navigateAllCinemaList = (list) => {
    navigate('/all-cinema-list', {
      state: list
    })
  }

  return (
    <>
    <div className={styles.ver_mas}>
      <p>Películas</p>
      <p 
      className={styles.cursor}
      onClick={() => navigateAllCinemaList(cinemaList)}>Ver mas{` `}<i className='bi bi-arrow-right'></i></p>
    </div>
      <div className={styles.container_posters}>
        {
          cinemaList
            .map(list => (
              <Poster
                key={list.id}
                poster_path={list.poster_path}
                title={list.title}
                vote_average={list.vote_average}
                id={list.id}
              />
            ))
        }
      </div>
    </>
  )
}
