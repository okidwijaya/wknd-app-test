import React from "react";
import load from "../../images/loading.gif";

const Loading = () => {
  return (
    <>
      <div>
        <img src={load} alt="loading" />
      </div>
    </>
  );
};

export default Loading;
