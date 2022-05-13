import React, { useEffect, useState } from "react";
import InfoCard from "../card/InfoCard";
import HelpTips from "../card/HelpTips";
import roboBtm from "../../images/roboBottom.png";
import { getAdditionalInfo } from "../../utils/getData";
import pattern from "../../images/pattern2.png";

const BottomSection = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getAdditionalInfo()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="btmWrapper">
        <InfoCard
          title="POV"
          post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <InfoCard
          title="RESOURCE"
          post="These cases are perfectly simple and easy to distinguish. 
          In a free hour, when our power of choice is untrammelled and when 
          nothing prevents our being able to do what we like best"
        />
        <div className="helpTipsTitle">
          <p className="infoCardTitle">HELP &amp; TIPS</p>
          <div className="row mx-auto">
            {datas.map((data, idx) => (
              <div className="col-12 col-md-4 col-lg-4 p-0" key={idx}>
                <HelpTips title={data.title} source={data.image} />
              </div>
            ))}
          </div>
          <img className="btmNdImg" src={pattern} alt="pic pattern" />
        </div>
        <InfoCard
          title="RESOURCE"
          post="The wise man therefore always holds in these matters 
          to this principle of selection."
        />
        <img className="btmMainImg" src={roboBtm} alt="btm img" />
      </div>
    </>
  );
};

export default BottomSection;
