import Styles from "../css/About.module.css";

const ExpectedAboutContainer = () => {
  return (
    <div className={Styles["ExpectedAboutContainer"]}>
      <div className={Styles["part1"]}>
        <p>What you can expect:</p>
      </div>
      <div className={Styles["part2"]}>
        <p>
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether it's live or digital, delivered for one
          or a hundred people.
        </p>
        <p>
          We believe the mix of strategy and design (with a bit of coffee) is
          what makes your message clear, convincing, and captivating.
        </p>
      </div>
      <div className={Styles["part3"]}>
        <p>S:</p>
        <a href="#">Instagram</a>
        <a href="#">Behance</a>
        <a href="#">Facebook</a>
        <a href="#">Linkedin</a>
      </div>
    </div>
  );
};

export default ExpectedAboutContainer;
