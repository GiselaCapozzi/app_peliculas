import styles from '../styles/button.module.css';

export const Button = ({ children, onClick, id }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      id={id}
    >{children}</button>
  )
}
