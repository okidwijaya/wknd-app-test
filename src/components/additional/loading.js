import React from "react";
import load from "../../images/loading.gif";

const Loading = () => {
  return (
    <>
      <div className="col-12 col-lg-12 mx-auto">
        <img src={load} alt="loading" />
      </div>
    </>
  );
};

export default Loading;
