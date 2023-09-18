import { Link } from 'react-router-dom';
import { InputGroup } from '../components/InputGroup';
import styles from '../styles/register.module.css';
import { useAuth } from '../context/authContext';
import { useRegister } from '../hooks/useRegister';

export const Register = () => {

  const { handleChange, handleChangeImage, handleSubmit } = useRegister();

  return (
    <section className={styles.container_register}>
      <div className={styles.register_section}>
        <h3 className={styles.title_register}>Registrese</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.group_register}>
            <InputGroup
              type='text'
              placeholder='Nombre'
              icono='bi bi-person-vcard'
              name='name'
              onChange={handleChange}              
            />
            <InputGroup
              type='text'
              placeholder='Apellido'
              icono='bi bi-person-vcard'
              name='lastname'
              onChange={handleChange}
            />
          </div>
          <div className={styles.group_register}>
            <InputGroup
              type='file'
              icono='bi bi-camera'
              name='photouser'
              onChange={handleChangeImage}
            />
            <InputGroup
              type='text'
              placeholder='Nombre de usuario'
              icono='bi bi-person'
              name='username'
              onChange={handleChange}
            />
          </div>
          <div className={styles.group_register}>
          <InputGroup
            type='email'
            placeholder='example@example.com'
            icono='bi bi-envelope-at'
            name='email'
            onChange={handleChange}
          />
          <InputGroup
            type='password'
            placeholder='**********'
            icono='bi bi-key'
            name='password'
            onChange={handleChange}
          />
          </div>
          <input 
            type="submit" 
            value="Registrarse"
            className={styles.input_submit}
          />
          <p className={styles.sesion}>¿Ya tienes cuenta? <Link to={'/login '}><span>Inicie Sesion</span></Link></p>
        </form>
      </div>
    </section>
  )
}