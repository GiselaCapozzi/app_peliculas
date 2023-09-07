import { useEffect, useState } from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";
import { SelectPais } from "./SelectPais";
import styles from '../styles/selectpaises.module.css';

export const WatchProviders = ({ id }) => {

  const [endpoint, setEndpoint] = useState('watch/providers');
  const [listaPaises, setListaPaises] = useState();

  const { data } = useFetchInfo({id, endpoint});

  const obtenerPaises = () => {
    let paises = [];
    if(data.results) {
      for (const item in data.results) {
        const minusPais = item.toLowerCase();
        paises.push(minusPais)
      }
    }
    return paises;
  }

  useEffect(() => {
    setListaPaises(obtenerPaises())
  }, [data.results])

  return (
    <div className={styles.container_watch}>
      <SelectPais 
        listaPaises={listaPaises}
        className={styles.select_pais}
        data={data}
      />
    </div>
  )
}
