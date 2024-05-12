import Styles from "../css/PlayEye.module.css";
import PlayEyeFront from "./PlayEyeFront";
import { useState } from "react";
import PlayEyeVideo from "./PlayEyeVideo";

const PlayEye = () => {
  const [videoBackground, setVideo] = useState(true);

  const changeScreen = () => {
    setVideo(!videoBackground);
    console.log("clicked");
  };

  return (
    <div className={Styles["playEyecontainer"]} onClick={changeScreen}>
      {videoBackground ? <PlayEyeFront play={"PLAY"} /> : <PlayEyeVideo />}
      {/* <PlayEyeVideo /> */}
    </div>
  );
};

export default PlayEye;
