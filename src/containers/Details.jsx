import { useParams } from "react-router-dom"

export const Details = () => {

const { title } = useParams();

  return (
    <section>
      <h1>{title}</h1>
    </section>
  )
}
