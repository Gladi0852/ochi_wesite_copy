import Styles from "../css/PlayEye.module.css";
import video from "../assets/backPlayVideo.mp4";
import { useEffect, useRef, useState } from "react";

const PlayEyeFront = ({ play }) => {
  const [firstRotate, setFirstRotate] = useState(0);
  const [secondRotate, setSecondRotate] = useState(0);
  const firstEye = useRef();
  const secondEye = useRef();
  let midFirstEyeX = useRef(0);
  let midFirstEyeY = useRef(0);
  let midSecondEyeX = useRef(0);
  let midSecondEyeY = useRef(0);
  const frontSection = useRef();

  useEffect(() => {
    // first eye
    midFirstEyeX =
      firstEye.current.getBoundingClientRect().x +
      firstEye.current.getBoundingClientRect().width / 2;
    midFirstEyeY =
      firstEye.current.getBoundingClientRect().y +
      firstEye.current.getBoundingClientRect().height / 2;

    // second eye
    midSecondEyeX =
      secondEye.current.getBoundingClientRect().x +
      secondEye.current.getBoundingClientRect().width / 2;
    midSecondEyeY =
      secondEye.current.getBoundingClientRect().y +
      secondEye.current.getBoundingClientRect().height / 2;
    // let mid = midY + firstEye.current.getBoundingClientRect().width / 2;
  });
  useEffect(() => {
    frontSection.current.parentElement.addEventListener("mousemove", (e) => {
      // first eye
      let xFirstDiff = e.x - midFirstEyeX;
      let yFirstDiff = e.y - midFirstEyeY;
      var firstAngle = Math.atan2(yFirstDiff, xFirstDiff) * (180 / Math.PI);

      // second eye
      let xSecondDiff = e.x - midSecondEyeX;
      let ySecondDiff = e.y - midSecondEyeY;
      var secondAngle = Math.atan2(ySecondDiff, xSecondDiff) * (180 / Math.PI);
      setFirstRotate(firstAngle - 180);
      setSecondRotate(secondAngle - 180);

      const eyeX =
        -(
          firstEye.current.getBoundingClientRect().width -
          firstEye.current.children[1].getBoundingClientRect().width
        ) +
        (e.x / window.innerWidth) *
          (firstEye.current.getBoundingClientRect().width -
            firstEye.current.children[1].getBoundingClientRect().width -
            firstEye.current.children[1].getBoundingClientRect().width / 3);
      const eyeY =
        -(
          firstEye.current.getBoundingClientRect().height -
          firstEye.current.children[1].getBoundingClientRect().height
        ) +
        (e.y / window.innerHeight) *
          (firstEye.current.getBoundingClientRect().height -
            firstEye.current.children[1].getBoundingClientRect().height -
            firstEye.current.children[1].getBoundingClientRect().height / 3);

      firstEye.current.children[1].style.transform = `translate(${eyeX}px,${eyeY}px)`;
      secondEye.current.children[1].style.transform = `translate(${eyeX}px,${eyeY}px)`;
    });
  });
  return (
    <div
      className={Styles["frontContainer"]}
      ref={frontSection}
      // data-scroll-section
      // data-scroll
      // data-scroll-section-inview
    >
      <div className={Styles["eyes"]}>
        <div className={Styles["eyeContainer"]} ref={firstEye}>
          <h6>{play}</h6>
          <div className={Styles["eyeball"]}>
            <div
              className={Styles["eyeLine"]}
              style={{
                transform: `translate(-50%,-50%) rotate(${firstRotate}deg)`,
              }}
            >
              <div></div>
            </div>
          </div>
        </div>
        <div className={Styles["eyeContainer"]} ref={secondEye}>
          <h6>{play}</h6>
          <div className={Styles["eyeball"]}>
            <div
              className={Styles["eyeLine"]}
              style={{
                transform: `translate(-50%,-50%) rotate(${secondRotate}deg)`,
              }}
            >
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayEyeFront;
