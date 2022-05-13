import React from "react";
import mainImg from "../../images/robo.png";
import ndImg from "../../images/roboLeft.png";
import pattern from "../../images/pattern2.png";

const TopSection = () => {
  return (
    <>
      <p className="homeTitle">WEEKEND FROM HOME</p>
      <p className="homeDescription">Stay active with a little workout.</p>
      <div className="topContainer">
        <button>Let's Go</button>
        <img className="topMainImg" src={mainImg} alt="pic banner" />
        <img className="topNdImg" src={pattern} alt="pic pattern" />
      </div>
      <div className="d-flex justify-content-end">
        <img className="leftImg" src={ndImg} alt="nd img" />
      </div>
      <div className="topContainerBottom">
        <p>
          <span>Deffinition; </span>a practice or exercise to test or improve
          one's fitness for athletic competition, ability, or performance to
          exhaust (something, such as a mine) by working to devise, arrange, or
          achieve by <br />
          resolving difficulties.
          <br />
          Merriam-Webster.com Dictionary.
        </p>
        <p className="writer">-weekend team</p>
        <div className="roundedBlue"></div>
      </div>
    </>
  );
};

export default TopSection;
