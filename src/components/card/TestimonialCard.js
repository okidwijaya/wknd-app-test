import React, { useEffect, useState } from "react";
import Loading from "../additional/loading";

const TestimonialCard = ({ title, post }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ((post && title === null) || " " || undefined) setLoading(true);
  }, [post, title]);
  return (
    <>
      {loading ? (
        <div className="testimonialCard">
          <p className="infoCardTitle">{title !== null ? title : "-"}</p>
          <p className="infoCardPost">{post !== null ? post : "-"}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default TestimonialCard;
