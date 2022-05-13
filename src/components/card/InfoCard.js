import React from "react";

const InfoCard = ({ title, post }) => {
  return (
    <>
      <div className="infoCard">
        <p className="infoCardTitle">{title !== null ? title : "-"}</p>
        <p className="infoCardPost">{post !== null ? post : "-"}</p>
      </div>
    </>
  );
};

export default InfoCard;
