import { useState } from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";

export const Similar = ({ id }) => {

  const [endpoint, setEndpoint] = useState('similar');

  const { data } = useFetchInfo({id, endpoint});

  console.log(data.results)

  return (
    <>
      {
        data.results && data.results.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <img src={item.poster_path} alt={item.title} />
            </div>
          )
        })
      }
    </>
  )
}
