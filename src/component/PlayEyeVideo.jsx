import { useRef } from "react";
import video from "../assets/backPlayVideo.mp4";
import Styles from "../css/PlayEye.module.css";

const PlayEyeVideo = () => {
  const pauseBtn = useRef();
  const movePausebtn = (e) => {
    pauseBtn.current.style.left = e.clientX + "px";
    pauseBtn.current.style.top = e.clientY + "px";
  };
  return (
    <div className={Styles["videoContainer"]} onMouseMove={movePausebtn}>
      <video src={video} autoPlay muted loop></video>
      <p className={Styles["pauseBtn"]} ref={pauseBtn}>
        Pause
      </p>
    </div>
  );
};

export default PlayEyeVideo;
