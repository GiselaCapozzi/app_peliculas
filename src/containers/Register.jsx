import { Link } from 'react-router-dom';
import { InputGroup } from '../components/InputGroup';
import styles from '../styles/register.module.css';
import { useRegister } from '../hooks/useRegister';

export const Register = () => {

  const {
    handleChange,
    handleChangeImage,
    handleSubmit,
    errorMessage,
    mostrarOcultarPassword,
    show
  } = useRegister();

  return (
    <section className={styles.container_register}>
      <div className={styles.register_section}>
        <h3 className={styles.title_register}>Registrese</h3>
        <form onSubmit={handleSubmit}>
        {
            errorMessage &&
            <p className={styles.error}>{errorMessage}</p>
          }
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
              type='text'
              placeholder='Nombre de usuario'
              icono='bi bi-person'
              name='username'
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
          </div>
          <div className={styles.group_register}>
            <InputGroup
              type='email'
              placeholder='example@example.com'
              icono='bi bi-envelope-at'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <InputGroup
              type={show ? 'text' : 'password'}
              placeholder='**********'
              icono='bi bi-key'
              name='password'
              onChange={handleChange}
              // onKeyUp={validatePassword}
            />
            <i style={{
              position: 'absolute',
              top: 9,
              right: 45,
              zIndex: 2
            }} className={show ? 'bi bi-eye-slash' : 'bi bi-eye'}
            id='password'
            onClick={mostrarOcultarPassword}
            ></i>
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