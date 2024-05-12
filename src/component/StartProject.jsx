import Styles from "../css/StartProject.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import PlayEyeFront from "./PlayEyeFront";
import { useEffect, useRef, useState } from "react";

const StartProject = () => {
  const projectContainer = useRef();
  // const [isWindowSizeLess, setWindowSize] = useState(false);
  let isWindowSizeLess = useRef(false);
  const changeEyeballStyle = () => {
    projectContainer.current.children[1].children[0].children[0].style.height =
      "8rem";
    projectContainer.current.children[1].children[0].children[0].style.width =
      "8rem";
    projectContainer.current.children[1].children[0].children[1].style.height =
      "8rem";
    projectContainer.current.children[1].children[0].children[1].style.width =
      "8rem";
    projectContainer.current.children[1].style.backgroundImage = "none";
    projectContainer.current.children[1].style.paddingBottom = "3vw";
    projectContainer.current.children[1].children[0].style.position =
      "relative";
    projectContainer.current.children[1].children[0].style.transform =
      "translate(0,0)";
    projectContainer.current.children[1].children[0].style.top = "0";
    projectContainer.current.children[1].children[0].style.left = "0";
  };
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      isWindowSizeLess.current = true;
      changeEyeballStyle();
    }
  }, []);
  window.addEventListener("resize", () => {
    if (isWindowSizeLess.current == false && window.innerWidth <= 1200) {
      isWindowSizeLess.current = true;
      changeEyeballStyle();
    } else if (window.innerWidth >= 1200 && isWindowSizeLess.current == true) {
      isWindowSizeLess.current = false;
      window.location.reload();
    }
  });
  return (
    <div className={Styles["startContainer"]} ref={projectContainer}>
      <div className={Styles["content"]}>
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>
          THE PROJECT<span>?</span>
        </h1>
      </div>
      <PlayEyeFront play={""} />
      <div className={Styles["buttons"]}>
        <a href="#">
          <span>START THE PROJECT</span>
          <div className={Styles["circle"]}>
            <FiArrowUpRight className={Styles["icon"]} />
          </div>
        </a>
        <p>OR</p>
        <a href="#">
          <span>HELLO@OCHI.DESIGN</span>
          <div className={Styles["circle"]}>
            <FiArrowUpRight className={Styles["icon"]} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default StartProject;
