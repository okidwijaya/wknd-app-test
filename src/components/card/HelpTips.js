import React from "react";

export default function HelpTips({ title, source }) {
  return (
    <>
      <div className="helpTipsCardContainer">
        <img src={source} alt="HnT img" />
        <div className="d-flex justify-content-center helpTipsTitleCard">
          <p>{title}</p>
          <button>
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
    </>
  );
}
