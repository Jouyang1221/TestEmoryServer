import React from "react";

import "./userStars.css";

const Rating1 = ({ rating, numReview }) => {
  return (
    <>
      <div className="rating">
        <i
          className={
            rating >= 1
              ? "fas fa-star fa-xl str-color"
              : rating >= 0.5
              ? "fas fa-star-half-alt fa-xl str-color"
              : "far fa-star fa-xl str-color"
          }
        ></i>
        <i
          className={
            rating >= 2
              ? "fas fa-star fa-xl str-color"
              : rating >= 1.5
              ? "fas fa-star-half-alt fa-xl str-color"
              : "far fa-star fa-xl str-color"
          }
        ></i>
        <i
          className={
            rating >= 3
              ? "fas fa-star fa-xl str-color"
              : rating >= 2.5
              ? "fas fa-star-half-alt fa-xl str-color"
              : "far fa-star fa-xl str-color"
          }
        ></i>
        <i
          className={
            rating >= 4
              ? "fas fa-star fa-xl str-color"
              : rating >= 3.5
              ? "fas fa-star-half-alt fa-xl str-color"
              : "far fa-star fa-xl str-color"
          }
        ></i>
        <i
          className={
            rating >= 5
              ? "fas fa-star fa-xl fa-xl str-color"
              : rating >= 4.5
              ? "fas fa-star-half-alt fa-xl str-color"
              : "far fa-star fa-xl str-color"
          }
        ></i>

        <span>{numReview && numReview}</span>
      </div>
    </>
  );
};

export default Rating1;
