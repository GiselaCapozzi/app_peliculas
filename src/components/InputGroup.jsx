export const InputGroup = ({ type, placeholder, icono }) => {
  return (
    <div className={`input-group mb-3`}>
      <input
        type={type}
        className={`form-control`}
        placeholder={placeholder}
      />
      <span className={`input-group-text`}><i className={icono}></i></span>
    </div>
  )
}
