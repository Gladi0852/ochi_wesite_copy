import Styles from "../css/Marquee.module.css";

const Marquee = () => {
  return (
    <div
      className={Styles["container"]}
      // data-scroll-section
      // data-scroll
      // data-scroll-offset="-100%,-100%"
      // data-scroll-speed="0.5"
      // data-scroll-position="top"
      // data-scroll-section-inview
    >
      <div className={Styles["scrollerCont"]}>
        <div className={Styles["scroller"]}>
          <h1>WE</h1>
          <h1>ARE</h1>
          <h1>OCHI</h1>
        </div>
        <div className={Styles["scroller"]}>
          <h1>WE</h1>
          <h1>ARE</h1>
          <h1>OCHI</h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
