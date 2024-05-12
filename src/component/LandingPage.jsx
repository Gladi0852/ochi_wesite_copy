import Styles from "../css/LandingPage.module.css";
import contentImg from "../assets/content-image01.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollDown from "./ScrollDown";
import { easeIn, motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div
      className={Styles["landingPage"]}
      // data-scroll-section
      // data-scroll
      // data-scroll-offset="0,-100%"
      // data-scroll-speed="-0.2"
      // data-scroll-position="top"
      // data-scroll-section-inview
    >
      <div className={Styles["container"]}>
        <div className={Styles["content"]}>
          <h1>WE CREATE</h1>
          <div className={Styles["midContent"]}>
            <motion.div
              className={Styles["photo"]}
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ ease: easeIn, duration: 1, delay: 0.7 }}
            >
              <img src={contentImg} />
            </motion.div>
            {/* <div className={Styles["photo"]}>
              <img src={contentImg} />
            </div> */}
            <h1>EYE-OPENING</h1>
          </div>
          <h1>PRESENTATIONS</h1>
        </div>
        <div className="blank">
          <motion.div
            className={Styles["mark"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h6>P.B.</h6>
            <h5>First Project using React</h5>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.div
          className={Styles["hr"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
        <motion.div
          className={Styles["info"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>For public and private companies</p>
          <p>From the first pitch to IPO</p>
          <a href="#">
            <p>START THE PROJECT</p>
            <span>
              <FiArrowUpRight />
            </span>
          </a>
        </motion.div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default LandingPage;
