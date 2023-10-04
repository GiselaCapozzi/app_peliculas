import styles from '../styles/input.module.css';

export const Input = ({ type, icono }) => {
  return (
    <div className={styles.container}>
      <input className={`${styles.input} form-control`} type={type} />
      <i className={`${styles.icono} ${icono}`}></i>
    </div>
  )
}
