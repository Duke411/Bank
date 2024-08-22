import React from "react";
import Navbar from "../Components/Navbar";
import Firstsection from "../Components/Firstsection";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import FourthSection from "../Components/FourthSection";
import Fifth from "../Components/Fifth";
import Seventh from "../Components/Seventh";
import Eight from "../Components/Eight";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Firstsection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Fifth />
      <Seventh />
      <Eight />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
