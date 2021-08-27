import React from "react";
import home1 from "../img/home1.png";
import { About, Hide, Description, Image } from "../styles";

const AboutSection = () => {
  return (
    <About className="about">
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams </span>come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          eligendi atque..
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a Banking experience" />
      </Image>
    </About>
  );
};

export default AboutSection;
