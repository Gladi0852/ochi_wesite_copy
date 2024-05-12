import Styles from "../css/ScrollDown.module.css";
import { motion } from "framer-motion";
const ScrollDown = () => {
  return (
    <motion.div
      className={Styles["scroll"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <p>Scroll down</p>
    </motion.div>
  );
};

export default ScrollDown;
