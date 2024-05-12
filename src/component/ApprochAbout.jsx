import Styles from "../css/About.module.css";
import cplPhoto from "../assets/Homepage-Photo.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

const ApprochAbout = () => {
  let [hovered, setHovered] = useState(false);
  let handleHoverEnter = () => {
    setHovered(true);
  };
  let handleHoverLeave = () => {
    setHovered(false);
  };
  return (
    <div className={Styles["ApprochAbout"]}>
      <div className={Styles["approchContent"]}>
        <p>Our approach:</p>
        <a
          href="#"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          <span>READ MORE</span>
          <div className={Styles["circle"]}>
            <FiArrowUpRight className={Styles["icon"]} />
          </div>
        </a>
      </div>
      <div className={Styles["photo"]}>
        <img src={cplPhoto} className={hovered ? Styles["change"] : null} />
      </div>
    </div>
  );
};

export default ApprochAbout;
