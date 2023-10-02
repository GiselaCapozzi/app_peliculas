import { CinemaList } from './CinemaList';
import { Posters } from './Posters';
import { useAuth } from '../context/authContext';
import sinfoto from '../assets/sinfoto.jpg';
import styles from '../styles/home.module.css';

export const Home = () => {

  const { usuario, user } = useAuth();

  console.log(usuario)
  console.log(user)

  return (
    <>
      <section className={styles.container}>
        <div>
          {
            user && user.isAnonymous ? <h5>Anonimo</h5> :
              user && user.displayName ? <h5>{user.displayName}</h5> : null
          }
          {
            usuario && <h5>{usuario.username}</h5>
          }
        </div>
        {
          user && user.isAnonymous ? <img className={styles.foto} src={sinfoto} alt="anonimo" /> :
            user && user.displayName ? <img className={styles.foto} src={user.photoURL} alt="fotoperfil" /> : null
        }
      </section>
      {/* <CinemaList /> */}
      <Posters />
    </>
  )
}
