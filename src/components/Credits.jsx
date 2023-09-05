import { useState } from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";
import styles from '../styles/credits.module.css';

import { Galery } from "./Galery";

export const Credits = ({ id }) => {
  const [endpoint, setEndpoint] = useState('credits');

  const { data } = useFetchInfo({ id, endpoint });
  const { cast, crew } = data;

  return (
    <>
      <h4>Actores</h4>
      <div className={styles.container_galery}>
        {
          cast && cast.map(act => {
            const { profile_path, name, character } = act;
            return (
              <Galery
                key={act.id}
                foto={profile_path}
                nombre={name}
                personaje={character}
              />
            )
          })
        }
      </div>
      <h4>Dirección</h4>
      <div className={styles.container_galery}>
        {
          crew && crew.map(item => {
            const { profile_path, name, job, departament, credit_id } = item;
            return (
              <Galery
                key={credit_id}
                foto={profile_path}
                nombre={name}
                personaje={job}
                departamento={departament}
              />
            )
          })
        }
      </div>
    </>
  )
}
