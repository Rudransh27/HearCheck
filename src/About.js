import React from "react";
import web from "../src/images/Senior-man-wearing-hearing-aid-smiling-up-at-someone.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
