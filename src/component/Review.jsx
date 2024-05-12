import Styles from "../css/Review.module.css";
import ReviewTemplate from "./ReviewTemplate";
import reviews from "../Json Data/Review.json";
import { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import cardImg1 from "../assets/logo-green.svg";
import cardImg2 from "../assets/logo002.svg";
import cardImg3 from "../assets/logo003.png";

const Review = () => {
  const reviewCont = useRef();
  const [element, setElement] = useState({
    elementName: "",
    outerContainer: "",
    service: "",
  });
  const cardDetails = [
    {
      id: 1,
      img: cardImg1,
      text: "2019-2022",
    },
    {
      id: 2,
      img: cardImg2,
      text: "RATING 5.0 ON CLUTCH",
    },
    {
      id: 3,
      img: cardImg3,
      text: "BUSINESS BOOTCAMP ALUMNI",
    },
  ];
  function changeStyle(currElement, parent, servicetext) {
    currElement.style.color = "#a0a0a0";
    currElement.style.setProperty("--underlineHeight", "0");
    console.log(currElement);
    parent.style.height =
      parent.offsetHeight + parent.lastChild.offsetHeight + "px";
    if (window.innerWidth >= 1024) {
      servicetext.style.display = "block";
    }
    parent.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
  function resetStyle(currElement, parent, servicetext) {
    currElement.style.color = "#fff";
    currElement.style.setProperty("--underlineHeight", "1px");
    if (window.innerWidth >= 1024) {
      servicetext.style.display = "none";
    }
    parent.style.height =
      parent.offsetHeight - parent.lastChild.offsetHeight + "px";
  }

  // useEffect(() => {
  //   if (!element.elementName) {
  //     setElement({
  //       elementName:
  //         reviewCont.current.children[0].children[0].children[1].children[1],
  //       outerContainer: reviewCont.current.children[0],
  //       service:
  //         reviewCont.current.children[0].children[0].children[0].children[1],
  //     });
  //     changeStyle(
  //       reviewCont.current.children[0].children[0].children[1].children[1],
  //       reviewCont.current.children[0],
  //       reviewCont.current.children[0].children[0].children[0].children[1]
  //     );
  //   }
  // }, []);
  const showDescription = (templateContainer, showService) => {
    if (!element.elementName) {
      setElement({
        elementName: event.target,
        outerContainer: templateContainer.current,
        service: showService.current,
      });
      changeStyle(event.target, templateContainer.current, showService.current);
    } else if (event.target === element.elementName) {
      setElement({
        elementName: "",
        outerContainer: "",
        service: "",
      });
      resetStyle(element.elementName, element.outerContainer, element.service);
    } else {
      resetStyle(element.elementName, element.outerContainer, element.service);
      setElement({
        elementName: event.target,
        outerContainer: templateContainer.current,
        service: showService.current,
      });
      changeStyle(event.target, templateContainer.current, showService.current);
    }
  };
  return (
    <div className={Styles["reviewOuterContainer"]}>
      <h2>Clients' reviews</h2>
      <hr />
      <div className="reviewContainer" ref={reviewCont}>
        {reviews.map((review) => (
          <ReviewTemplate
            key={review.id}
            review={review}
            handleRead={showDescription}
            stateName={element}
          />
        ))}
      </div>
      <div className={Styles["cards"]}>
        {cardDetails.map((card) => (
          <ReviewCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Review;
