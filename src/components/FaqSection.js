import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq className="faq">
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start? </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            perspiciatis?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What Products do you offer? </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            perspiciatis?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment Method</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            perspiciatis?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedules </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            perspiciatis?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

/*we need to import the About from the styles.js */
const Faq = styled(About)`
  display: block;

  span {
    display: block; //moves to a complete new line after applying block display, which is as per our need
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    /*entire answer blcok it is 2rem top and  bottom */
    padding: 2rem 0rem;

    p {
      /*for the paragraphs within the answer block */
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
