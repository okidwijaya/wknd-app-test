import React from "react";

const InfoCard = ({ title, post }) => {
  return (
    <>
      <div className="infoCard">
        <p className="infoCardTitle">{title}</p>
        <p className="infoCardPost">{post}</p>
      </div>
    </>
  );
};

export default InfoCard;
