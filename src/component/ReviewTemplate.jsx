import { useEffect, useRef, useState } from "react";
import Styles from "../css/Review.module.css";
import ReviewDetails from "./ReviewDetails";
import React from "react";

const ReviewTemplate = ({ review, handleRead }) => {
  const templateContainer = useRef();
  const service = useRef();
  return (
    <div className={Styles["template"]} ref={templateContainer}>
      <div className={Styles["shortInfo"]}>
        <div className={Styles["projectSection"]}>
          <div className={Styles["projectName"]}>
            <p className={Styles["underline"]}>{review.project}</p>
          </div>
          <div className={Styles["services"]}>
            {window.innerWidth>=1024 && <span ref={service}>Services:</span>}
          </div>
        </div>
        <div className={Styles["clientName"]}>
          {window.innerWidth>=1024 && (<div className={Styles["name"]}>
            <p>{review.name}</p>
          </div>)}
          <p
            className={Styles["underline"]}
            onClick={() => handleRead(templateContainer, service)}
          >
            READ
          </p>
        </div>
      </div>
      <ReviewDetails review={review} />
      {/* {show && <ReviewDetails review={review} />} */}
    </div>
  );
};

export default ReviewTemplate;
