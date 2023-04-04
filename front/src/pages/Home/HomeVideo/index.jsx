import { useState, useEffect, useRef } from "react";
import WeatherBlock from "../../../components/WeatherBlock";
import VideoBg from "../../../assets/video/videoBg.mp4";

export default function HomeVideo() {
  const [isPlay, setIsPlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      setIsPlay(true);
      videoRef.current.play();
    } else {
      setIsPlay(false);
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="home-video">
      {!isPlay && <WeatherBlock />}
      {!isMobile && !isPlay && <div className="overlay"></div>}
      {!isMobile && (
        <video
          ref={videoRef}
          autoPlay={isPlay}
          loop
          muted
          className="video-holder"
        >
          <source src={VideoBg} type="video/mp4" />
        </video>
      )}
      {isMobile && <div className="video-bg"></div>}
      {!isMobile && (
        <div className="video-button" onClick={togglePlay}>
          {isPlay ? (
            <span className="icon-pause2"></span>
          ) : (
            <span className="icon-play3"></span>
          )}
        </div>
      )}
    </section>
  );
}
