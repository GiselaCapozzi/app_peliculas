import { VideoYoutube } from "../components/VideoYoutube";
import { Carousel } from "react-responsive-carousel";
import styles from '../styles/videos.module.css';

export const TypeOfVideos = ({ videoTrailer }) => {
  console.log(videoTrailer)
  return (
    <div>
        {
          videoTrailer && videoTrailer.map(trailer => (
            <h3>{trailer.key}</h3>
          ))
        }
      
    </div>
  )
}
