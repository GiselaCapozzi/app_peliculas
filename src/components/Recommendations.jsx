import { useEffect, useState } from "react";
import { useFetchInfo } from "../hooks/useFetchInfo";

export const Recommendations = ({ id }) => {

  const [endpoint, setEndpoint] = useState('recommendations');

  const { data } = useFetchInfo({id, endpoint});

  useEffect(() => {

  }, [data])

  console.log(data.results)
  return (
    <>
    {
      data.results && data.results.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
          </div>
        )
      })
    }
    </>
  )
}
