export const InputGroup = ({ 
  type, 
  placeholder, 
  icono, 
  name,
  onChange 
}) => {
  return (
    <div className={`input-group mb-3`}>
      <input
        type={type}
        className={`form-control`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <span className={`input-group-text`}><i className={icono}></i></span>
    </div>
  )
}
