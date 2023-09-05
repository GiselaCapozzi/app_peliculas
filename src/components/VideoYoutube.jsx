import Youtube from 'react-youtube';

export const VideoYoutube = ({ videoId }) => {

  const onReady = e => {
    e.target.pauseVideo();
  }

  return (
    <div>
      <Youtube
        videoId={videoId}
        opts={{
          width: '420',
          height: '230',
          playerVars: {
            autoplay: 0,
            controls: 1,
            cc_load_policy: 0,
            fs: 1,
            iv_load_policy: 0,
            modestbranding: 0,
            rel: 0,
            showinfo: 0
          }
        }}
        onReady={onReady}
      />
    </div>
  )
}
