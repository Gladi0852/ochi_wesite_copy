import Styles from "../css/Review.module.css";
import { FiArrowUpRight } from "react-icons/fi";

import React from "react";

const ReviewDetails = ({ review }) => {
  return (
    <div className={Styles["detailsReviewContainer"]}>
      <div className={Styles["projectSection"]}>
        <div className={Styles["projectName"]}></div>
        <div className={Styles["services"]}>
          <div className={Styles["innerContainer"]}>
            {window.innerWidth < 1024 && <p>Services:</p>}
            {review.services.map((tag, index) => (
              <div className={Styles["item"]} key={index}>
                <p className={Styles["roundedBorder"]}>{tag}</p>
                <div className={Styles["icon"]}>
                  <FiArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={Styles["clientName"]}>
        <div className={Styles["name"]}>
          <div className={Styles["innerContainer"]}>
            {window.innerWidth < 1024 && <p>{review.name}</p>}
            <div className={Styles["clientImage"]}>
              <img src={review.photo} alt="clientImage" />
            </div>
            <div className={Styles["reviewDesc"]}>
              <p>{review.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
