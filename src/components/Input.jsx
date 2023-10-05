import styles from '../styles/input.module.css';
import { Button } from '../components/Button';

export const Input = ({ type, icono, value, onChange, onClick }) => {
  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} form-control`}
        type={type}
        value={value}
        onChange={onChange}
      />
      {/* <i
        className={`${styles.icono} ${icono}`}
        onSubmit={onSubmit}
      ></i> */}
      <Button onClick={onClick}>buscar</Button>
    </div>
  )
}
