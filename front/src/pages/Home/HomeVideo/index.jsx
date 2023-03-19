import { useState, useRef } from "react";
import VideoBg from "../../../assets/video/videoBg.mp4";
import "../../../index.scss";

export default function HomeVideo() {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef(null);
  //videoRef.current.playbackRate = 0.7;

  const togglePlay = () => {
    if (videoRef.current.paused) {
      setIsPlay(true);
      videoRef.current.play();
    } else {
      setIsPlay(false);
      videoRef.current.pause();
    }
  };

  return (
    <section className="home-video">
      <div className="overlay"></div>
      <video
        ref={videoRef}
        autoPlay={isPlay}
        loop
        muted
        className="video-holder"
      >
        <source src={VideoBg} type="video/mp4" />
      </video>
      <div className="video-button" onClick={togglePlay}>
        {isPlay ? (
          <span class="icon-pause2"></span>
        ) : (
          <span className="icon-play3"></span>
        )}
      </div>
    </section>
  );
}
