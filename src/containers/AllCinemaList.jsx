import { useLocation } from "react-router-dom";
import { Card } from "../components/Card";
import styles from '../styles/cardlist.module.css';
import { usePagination } from "../hooks/usePagination";
import { Cards } from "./Cards";

export const AllCinemaList = () => {

  const location = useLocation();
  const dataCinemaList = location.state;

  const {
    handlePrevious,
    handleNext,
    cinemaList,
    pageNum,
    totalPage
  } = usePagination({ dataCinemaList });

  return (
    <>
    <Cards 
      arrayList={cinemaList}    
    />
          <div className={styles.botones}>
            {
              pageNum === 1 ?
                <button
                  onClick={handlePrevious}
                  disabled
                >Anterior</button>
                : <button
                  onClick={handlePrevious}
                  className={styles.btn}
                >Anterior</button>
            }
            <span>{pageNum}</span>
            {
              pageNum === totalPage ?
                <button disabled onClick={handleNext}>Próximo</button>
                : <button onClick={handleNext} className={styles.btn}>Próximo</button>
            }
          </div>
    </>
  )
}
