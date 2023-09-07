import { useEffect, useState } from 'react';
import { imageUrl } from '../constants/apiFilms';
import styles from '../styles/selectpaises.module.css';

export const InfoWatchProviders = ({ paisElegido, data }) => {

  const [infoCountry, setInfoCountry] = useState([]);

  const obtenerInfoPais = (pais) => {
    let info = [];
    const mayuPais = pais && pais.toUpperCase();
    if (data.results) {
      for (const item in data.results) {
        if (mayuPais === item) {
          info.push(data.results[item]);
        }
      }
    }
    return info;
  }

  useEffect(() => {
    if (!paisElegido) {
      setInfoCountry([])
    } else {
      setInfoCountry(obtenerInfoPais(paisElegido))
    }
  }, [paisElegido])

  return (
    <div>
      {/* {
        infoCountry.length > 0 &&
        infoCountry.map(item => (
          <p>{item.link}</p>
        ))
      } */}
      {
        !paisElegido || !infoCountry ? <p>Elegí un país</p> : null
      }
      {
        infoCountry.length > 0 && infoCountry.map(item => (
          <section>
            <div>
              {
                item.buy &&
                <h4>Compra</h4>
              }
              {
                item.buy &&
                <div className={styles.container_providers}>
                  {
                    item.buy && item.buy.map(compra => (
                      <div className={styles.provider} key={compra.name}>
                        <img src={imageUrl + compra.logo_path} alt="" />
                      </div>
                    ))
                  }
                </div>
              }
            </div>
            <div>
              {
                item.rent &&
                <h4>Alquiler</h4>
              }
              {
                item.rent &&
                <div className={styles.container_providers}>
                  {
                    item.rent && item.rent.map(alquiler => (
                      <div className={styles.provider} key={alquiler.provider_id}>
                        <img src={imageUrl + alquiler.logo_path} alt="" />
                      </div>
                    ))
                  }

                </div>
              }
            </div>
            <div>
              {
                item.flatrate &&
                <h4>Stream</h4>
              }
              {
                item.flatrate &&
                <div className={styles.container_providers}>
                  {
                    item.flatrate && item.flatrate.map(stream => (
                      <div className={styles.provider} key={stream.provider_id}>
                        <img src={imageUrl + stream.logo_path} alt="" />
                      </div>
                    ))
                  }
                </div>
              }

            </div>
          </section>
        ))
      }
    </div>
  )
}