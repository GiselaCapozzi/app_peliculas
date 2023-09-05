import { useEffect, useState } from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";
import {
  getVideoTrailer,
  getVideoTeaser,
  getVideoFeaturette,
  getVideoClip
} from '../services/getVideos';
import { VideoYoutube } from "../components/VideoYoutube";
import { Carousel } from "react-responsive-carousel";
import styles from '../styles/videos.module.css';

export const Videos = ({ id }) => {

  const [endpoint, setEndpoint] = useState('videos');
  const [videoTrailer, setVideoTrailer] = useState(getVideoTrailer());
  const [videoTeaser, setVideoTeaser] = useState(getVideoTeaser());
  const [videoFeaturette, setVideoFeaturette] = useState(getVideoFeaturette());
  const [videoClip, setVideoClip] = useState(getVideoClip());

  const { data } = useFetchInfo({ id, endpoint });

  const results = data.results;
  console.log(results)

  useEffect(() => {
    if (data.results) {
      setVideoTrailer(getVideoTrailer(results))
    }
  }, [results])

  console.log(videoTrailer)

  return (
    <>{
      // videoTrailer &&
      // <Carousel
      //   showThumbs={false}
      //   showStatus={false}
      //   showIndicators={false}
      //   autoPlay
      //   stopOnHover
      //   className={styles.container_carousel}
      // >
      //   {
      //     videoTrailer.map(trailer => (
      //       <VideoYoutube
      //         key={trailer.id}
      //         videoId={trailer.key}
      //       />
      //     ))
      //   }
      // </Carousel>
    }
    </>
  )
}
