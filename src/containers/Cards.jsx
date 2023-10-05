import { Card } from '../components/Card';
import styles from '../styles/cardlist.module.css';

export const Cards = ({ arrayList }) => {
  return (
    <section className={`${styles.container_card}`}>
            {
              !arrayList ? (<Loading />) :
                (
                  arrayList.map(item => (
                    <Card
                      key={item.id}
                      id={item.id}
                      imagen={item.poster_path}
                      titulo={item.title}
                      classNameImg={`${styles.card}`}
                    />
                  ))
                )
            }
          </section>
  )
}
