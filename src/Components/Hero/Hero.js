import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../images/hero_image.png";
import hero_image_back from "../../images/hero_image_back.png";
import Heart from "../../images/heart.png";
import Calories from "../../images/calories.png";

import {motion} from 'framar-motion'

function Hero() {

  const transition = {type: 'spring' , duration : 3}

  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the best ad */}
        <div className="the-best-ad">
          <motion.div>
            initial={{left: '238px'}}
            whileInView={{left: '9px'}} 
            transition={transition}         
            
          </motion.div>
          <span>the bast fitness club in the city</span>
        </div>
        {/*Hero Heading */}

        <div className="hero-text">
          <div><span className="stroke-text">Shape </span>
          <shap>Your</shap></div>
          
          <div><span>Ideal body</span></div>
          <div><span>IN HERE WE WILL HELP YOU TO SHAPE AND 
            BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST</span></div>
        </div>
        {/*figures */}
        <div className="figures">
          <div>
            <span>+140</span> 
            <span>expert coachs</span>
          </div>
          <div>
            <span>+987</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness Programs</span>
          </div>
        </div>
        {/*hero button*/}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt=""/>
          <span>Heart Rate</span>
          <sapn>116 bpm</sapn>
        </div>

        {/*hero-image */}
        <img src={hero_image} alt="" className="hero-image"/>
        <img src={hero_image_back} alt="" className="hero-image-back"/>
        {/*calories */}
        <div className="calories">
          <img src={Calories} alt=""/>
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Hero;
