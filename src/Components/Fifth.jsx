import React, { useState, useEffect } from "react";
import "../App.css";
import Image1 from "../assets/IMG_0224.jpg";
import Image2 from "../assets/Open-Doors_Ellis.jpg";
import Image3 from "../assets/Chiefs-Flags-2023-37.jpeg";
import Image4 from "../assets/Student.jpg";

const images = [Image1, Image2, Image3, Image4];

const testimonyData = [
  {
    head: "Business",
    text: `Equity Bank rose to the occasion and met the needs of locally owned businesses. 
    Equity is staffed by unrecognized superheroes at all levels`,
    name: `- Randi Kay Graham, SEVA Beauty`,
  },
  {
    head: "Personal",
    text: `"I Love how personal everything feels at Equity Bank. The tellers make us feel like real people and not just number to them.
     They are always so helpful and polite!"`,
    name: `- Customer, Blue Springs, Missouri`,
  },
  {
    head: "Loans",
    text: `"The Simplest Loan I have ever processed, the loan requirements were stated accurately, and I never had to go back to get 'one last piece of information'. 
    The process was fast, done virtually all over the phone and a few emails."`,
    name: `- Customer, Hays Kansas`,
  },
  {
    head: "Personal",
    text: `"Shout out Equity Bank on Santa Fe in Salina!, Having a personal Connection is a great thing. 
    Walk in and everyone says hi using my name!".`,
    name: `- Customer, Salina, Kansas`,
  },
];

const Fifth = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prev) => (prev + 1) % testimonyData.length);
    }, 5000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <React.Fragment>
      <section
        className="section testify"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="container m-auto flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 p-10">
            <div className="testimony-head">
              <h2 className="text-2xl font-semibold">
                {testimonyData[currentTestimony].head}
              </h2>
            </div>
            <div className="testimony-text mt-4">
              <p className="text-xl sm:text-3xl font-semibold">
                {testimonyData[currentTestimony].text}
              </p>
              <p className="mt-6 italic text-lg sm:text-2xl font-normal">
                {testimonyData[currentTestimony].name}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <img
              src={images[currentTestimony]}
              alt={testimonyData[currentTestimony].head}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Fifth;
