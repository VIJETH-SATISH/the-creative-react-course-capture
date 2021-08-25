import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSections from "../components/ServicesSection";

const AboutUs = () => {
  return (
    <>
      {/* incase we wish not to use the div tag to wrap the components on page then we can use fractions <> </> */}
      <AboutSection />
      <ServicesSections />
    </>
  );
};

export default AboutUs;
