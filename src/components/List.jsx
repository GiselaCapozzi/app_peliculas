export const List = ({ children, image, name, className }) => {
  return (
    <>
      <li style={{ listStyle: 'none' }}>{children}</li>
      { 
      image == 'https://image.tmdb.org/t/p/original/null' ?
        <p style={{ width: 200, textAlign: 'center', margin: 17 }}>{name}</p> : <img className={className} src={image} alt={name} />
      }
    </>
  )
}
