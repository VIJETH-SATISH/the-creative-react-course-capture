import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Hide, Image } from "../styles";
import styled from "styled-components";

const ServicesSections = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={clock} alt={clock} />
              <h3>Efficient</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={diaphragm} alt={diaphragm} />
              <h3>Pro Grade Gear</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={money} alt={money} />
              <h3>Affordable</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={teamwork} alt={teamwork} />
              <h3>Team Work</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <CameraImage>
        <img src={home2} alt="camera" />
      </CameraImage>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 3.9rem;
    font-weight: lighter;
    font-size: 2.8rem;
  }
  p {
    width: 71%;
    font-size: 1rem;
    padding: 1.8rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  /* display: flex;
  flex-direction: column; */
  flex-basis: 14rem;
  h3 {
    background-color: white;
    color: black;
    margin-left: 1rem;
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const CameraImage = styled(Image)`
  img {
    height: 80vh;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
export default ServicesSections;
