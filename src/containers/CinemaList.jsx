import { useNavigate } from "react-router-dom";
import { useFetchCinemaList } from "../hooks/useFetchCinemaList";
import { CarouselImage } from "../components/CarouselImage";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import styles from '../styles/carousel.module.css';

export const CinemaList = () => {

  const navigate = useNavigate();

  const { cinemaList } = useFetchCinemaList();

  const navigateAllCinemaList = (list) => {
    navigate('/all-cinema-list', {
      state: list
    })
  }

  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        stopOnHover
        className={styles.container_carousel}
      >
        {
          cinemaList
            .slice(0, 7)
            .map(item => (
              <CarouselImage
                item={item}
                key={item.id}
              />
            ))
        }
      </Carousel>
      <button
        className={styles.boton_mas}
        onClick={() => navigateAllCinemaList(cinemaList)}
      >Mas pelis...
      </button>
    </>
  )
}
