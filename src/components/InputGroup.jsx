export const InputGroup = ({ 
  type, 
  placeholder, 
  icono, 
  name,
  onChange,
  onKeyUp
}) => {
  return (
    <div className={`input-group mb-1 mt-3`}>
      <input
        type={type}
        className={`form-control`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <span className={`input-group-text`}><i  className={icono}></i></span>
    </div>
  )
}
