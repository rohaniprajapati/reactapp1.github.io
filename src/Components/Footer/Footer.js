import React from "react";
import "./Footer.css";
import Github from "../../images/github.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="Footr-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={Github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
