import React, { useEffect, useState } from "react";
import defImg from "../../images/default-placeholder.png";
import Loading from "../additional/loading";

export default function HelpTips({ title, source }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ((source && title === null) || " " || undefined) setLoading(true);
  }, [source, title]);
  return (
    <>
      {loading ? (
        <div className="helpTipsCardContainer">
          <img src={source ? source : defImg} alt="HnT img" />
          <div className="d-flex justify-content-center helpTipsTitleCard">
            <p>{title !== null ? title : "-"}</p>
            <button>
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
