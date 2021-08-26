import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSections from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
  return (
    <>
      {/* incase we wish not to use the div tag to wrap the components on page then we can use fractions <> </> */}
      <AboutSection />
      <ServicesSections />
      <FaqSection />
    </>
  );
};

export default AboutUs;
