
import { imageUrl } from "../constants/apiFilms"

export const Card = ({ imagen, titulo, classNameImg }) => {

  return (
    <picture>
      <img
        src={`${imageUrl}${imagen}`}
        alt={titulo}
        className={classNameImg}
      />
    </picture>
  )
}
