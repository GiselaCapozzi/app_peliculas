import { Link } from 'react-router-dom';
import { InputGroup } from '../components/InputGroup';
import styles from '../styles/register.module.css';

export const Register = () => {
  return (
    <section className={styles.container_register}>
      <div className={styles.register_section}>
        <h3 className={styles.title_register}>Registrese</h3>
        <form>
          <div className={styles.group_register}>
            <InputGroup
              type='text'
              placeholder='Nombre'
              icono='bi bi-person-vcard'
            />
            <InputGroup
              type='text'
              placeholder='Apellido'
              icono='bi bi-person-vcard'
            />
          </div>
          <div className={styles.group_register}>
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
          </div>
          <p className={styles.sesion}>¿Ya tienes cuenta? <Link to={'/login '}><span>Inicie Sesion</span></Link></p>
        </form>
      </div>
    </section>
  )
}