import { Link } from "react-router-dom";
import film from './assets/icons8-carrete-de-película-96.png';
import { useWindowSize } from "./hooks/useWindowSize";
import styles from './styles/navbar.module.css';

export const Navbar = () => {

const size = useWindowSize();

  return (
    <nav className={`navbar border-bottom navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <img src={film} alt="film" />
        <Link className="navbar-brand" to='/'>Destello de Luz</Link>
        <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {
            size.width <= 991 ? 
            (
            <div className={styles.link_search_sm}>
              <Link to={'/login'}>Iniciar Sesion</Link>
              <Link>Buscar</Link>
            </div>
            ) : 
            (
              <div className={styles.link_search_xl}>
                <Link><i className="bi bi-search"></i></Link>
                <Link to={'/login'}><i className="bi bi-person"></i></Link>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}
