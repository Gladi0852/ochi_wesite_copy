import Styles from "../css/About.module.css";

const AboutContainer = () => {
  return (
    <div className={Styles["aboutContainer"]}>
      <p>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to <a href="#">raise funds</a>, <a href="#">sell products</a>,{" "}
        <a href="#">explain complex ideas</a>, and{" "}
        <a href="#">hire great people</a>.
      </p>
    </div>
  );
};

export default AboutContainer;
