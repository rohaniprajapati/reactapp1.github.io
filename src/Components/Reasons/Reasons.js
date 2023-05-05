import React from "react";
import "./Reasons.css";
import images1 from "../../images/image1.png";
import images2 from "../../images/image2.png";
import images3 from "../../images/image3.png";
import images4 from "../../images/image4.png";
import nb from "../../images/nb.png";
import adidas from "../../images/adidas.png";
import nike from "../../images/nike.png";
import tick from "../../images/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={images1} alt="" />
        <img src={images2} alt="" />
        <img src={images3} alt="" />
        <img src={images4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
         style={{
          color:"#9c9c9c",
          fontWeight:"normal",
         }}
        
        >Our partners</span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
