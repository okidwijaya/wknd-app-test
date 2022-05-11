import React from "react";

const TestimonialCard = ({ title, post }) => {
  return (
    <>
      <div className="testimonialCard">
        <p className="infoCardTitle">{title}</p>
        <p className="infoCardPost">{post}</p>
      </div>
    </>
  );
};
export default TestimonialCard;
