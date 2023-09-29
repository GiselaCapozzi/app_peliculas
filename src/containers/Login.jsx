import { Link } from "react-router-dom";
import { InputGroup } from "../components/InputGroup";
import styles from '../styles/login.module.css';
import { useLogin } from "../hooks/useLogin";
import { iconSocialNetworks } from '../constants/socialNetworks';
import { ToastContainer, Flip } from 'react-toastify';

export const Login = () => {

  const {
    handleSubmit,
    handleChange,
    error,
    loading,
    user,
    loginWithSocialNetwork,
    handleResetPassword
  } = useLogin();

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
          {
            error.message === 'No es un email válido'
            && <p className={styles.error}>{error.error}</p>
          }
          {
            error.message === 'Firebase: Error (auth/invalid-email).'
            && <p className={styles.error}>{error.error}</p>
          }
          {
            error.message === 'Firebase: Error (auth/user-not-found).'
            && <p className={styles.error}>{error.error}</p>
          }
          {
            error.message === 'Por favor ingresa tu email'
            && <p className={styles.error}>{error.message}</p>
          }
          <InputGroup
            type='password'
            placeholder='**********'
            icono='bi bi-key'
            onChange={handleChange}
            name='password'
          />
          {
            error.message === 'Firebase: Error (auth/missing-password).'
            && <p className={styles.error}>{error.error}</p>
          }
          {
            error.message === 'Firebase: Error (auth/wrong-password).'
            && <p className={styles.error}>{error.error}</p>
          }
          <button className={styles.input_submit}>
            {
              !user || loading && <i className={`${styles.carga} bi bi-hourglass-bottom`}></i>
            } Iniciar sesión
          </button>
          <hr />
          <div className={styles.container_redes_sociales}>
            <span className={styles.cuadro_social}>
              {
                iconSocialNetworks.map(i => (
                  <i
                    onClick={() => loginWithSocialNetwork(i.name)}
                    id={i.name}
                    key={i.id}
                    className={`${i.icon} ${styles.red_social}`}></i>
                ))
              }
            </span>
          </div>
          <p className={styles.sesion}>¿Aún no tienes cuenta?
            <Link className={styles.registro} to={'/register'}><span>Registrese</span></Link>
          </p>
          <Link className={styles.link} onClick={handleResetPassword}>
            <p id='link' className={styles.sesion}>¿Olvidaste tu contraseña?</p>
          </Link>
          {
            error.message === 'Te hemos enviado un email con un enlace para resetear tu contraseña'
            && <p className={styles.message}>{error.message}</p>
          }
        </form>
        <ToastContainer
          transition={Flip}
        />
      </div>
    </section>
  )
}
