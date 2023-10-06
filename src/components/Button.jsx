import styles from '../styles/button.module.css';

export const Button = ({ children, onClick, id, disabled, style, className }) => {

  return (
    <button
      className={className}
      onClick={onClick}
      id={id}
      disabled={disabled}
      style={style}
    >{children}</button>
  )
}
