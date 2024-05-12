import Styles from "../css/About.module.css";
import AboutContainer from "./AboutContainer.jsx";
import ExpectedAboutContainer from "./ExpectedAboutContainer.jsx";
import ApprochAbout from "./ApprochAbout.jsx";

const About = () => {
  return (
    <div className={Styles["container"]}>
      <AboutContainer />
      <hr />
      <ExpectedAboutContainer />
      <hr />
      <ApprochAbout />
    </div>
  );
};

export default About;
