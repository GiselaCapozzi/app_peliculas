import { Link } from "react-router-dom";
import { InputGroup } from "../components/InputGroup";
import styles from '../styles/login.module.css';

const iconSocialNetworks = [
  {
    id: 1,
    name: 'Google',
    icon: 'bi bi-google'
  },
  {
    id: 2,
    name: 'Instagram',
    icon: 'bi bi-instagram'
  },
  {
    id: 3,
    name: 'Facebook',
    icon: 'bi bi-facebook'
  }
]

export const Login = () => {
  return (
    <section className={styles.container_login}>
      <div className={styles.login_section}>
      <h3 className={styles.title_login}>Inicia Sesion</h3>
        <form>
          <InputGroup
            type='email'
            placeholder='example@example.com'
            icono='bi bi-envelope-at'
          />
          <InputGroup
            type='password'
            placeholder='**********'
            icono='bi bi-key'
          />
          <hr />
          <div className={styles.container_redes_sociales}>
            <span className={styles.cuadro_social}>
              {
                iconSocialNetworks.map(i => (
                  <i key={i.id} className={`${i.icon} ${styles.red_social}`}></i>
                ))
              }
            </span>
          </div>
          <p className={styles.sesion}>¿Aún no tienes cuenta? <Link to={'/register'}><span>Registrese</span></Link></p>
        </form>
      </div>
    </section>
  )
}
