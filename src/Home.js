import React from "react";
import web from "../src/images/ear-medical-care-in-brain-india-hear-the-world-foundation-19.jpg"
import Common from "./Common"
const Home = () => {
  return (
    <Common
    name="Welcome to Hear Check "
    imgsrc={web}
    visit="/services"
    btname="Our Tests"
  />             
  );
};

export default Home;
