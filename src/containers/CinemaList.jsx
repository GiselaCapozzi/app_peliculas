import { useNavigate } from "react-router-dom";
import { useFetchCinemaList } from "../hooks/useFetchCinemaList";
import { CarouselImage } from "../components/CarouselImage";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import styles from '../styles/carousel.module.css';
import { Loading } from '../components/Loading';

export const CinemaList = () => {

  const navigate = useNavigate();

  const { cinemaList } = useFetchCinemaList();

  const navigateAllCinemaList = (list) => {
    navigate('/all-cinema-list', {
      state: list
    })
  }

  return (
    <div style={{
      width: '98.7vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        className={styles.container_carousel}
        width={600}
        animationHandler={'slide'}
        dynamicHeight
        showArrows={false}
      >
        {
          !cinemaList ? (
            <Loading />
          ) :
            (
              cinemaList
                .slice(0, 7)
                .map(item => (
                  <CarouselImage
                    item={item}
                    key={item.id}
                  />
                ))
            )
        }
      </Carousel>
      <span
        className={styles.mas}
        onClick={() => navigateAllCinemaList(cinemaList)}
      >Ver mas <i className="bi bi-arrow-right-short"></i></span>
    </div>
  )
}
