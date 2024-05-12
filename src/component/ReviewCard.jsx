import Styles from "../css/Review.module.css";
const ReviewCard = ({ card }) => {
  return (
    <div
      className={`${Styles["card"]} ${
        card.id === 1 ? Styles["cardBig"] : Styles["cardSmall"]
      }`}
    >
      <img src={card.img} alt="card image" />
      <div>
        <p>{card.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
