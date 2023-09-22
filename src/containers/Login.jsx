import { Link } from "react-router-dom";
import { InputGroup } from "../components/InputGroup";
import styles from '../styles/login.module.css';
import { useLogin } from "../hooks/useLogin";
import { iconSocialNetworks } from '../constants/socialNetworks';

export const Login = () => {

  const { handleSubmit, handleChange } = useLogin();

  return (
    <section className={styles.container_login}>
      <div className={styles.login_section}>
      <h3 className={styles.title_login}>Inicia Sesion</h3>
        <form onSubmit={handleSubmit}>
          <InputGroup
            type='email'
            placeholder='example@example.com'
            icono='bi bi-envelope-at'
            onChange={handleChange}
            name='email'
          />
          <InputGroup
            type='password'
            placeholder='**********'
            icono='bi bi-key'
            onChange={handleChange}
            name='password'
          />
          <input 
            type="submit" 
            value="Iniciar sesión"
            className={styles.input_submit}
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
