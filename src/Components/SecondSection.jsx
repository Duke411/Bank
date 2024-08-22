import React from "react";
import "../App.css";
import Image1 from "../assets/SimplyInvest.jpg";
import Image2 from "../assets/iStock.jpg";
import Image3 from "../assets/iStock-1678740803.jpg";
import Image4 from "../assets/iStock-3.jpg";

const articleImages = [
  {
    image: Image1,
    paragraph: `A low-threshold, digital investing platform designed for everyone`,
    header: `SimplyInvest, Your Guide to Growth >`,
  },
  {
    image: Image2,
    paragraph: `Stay up to date with all things Bank.`,
    header: `Welcome Kansas land Bank! >`,
  },
  {
    image: Image3,
    paragraph: `Running a business can get expensive, your account tools shouldn't be.`,
    header: `Starting Growing with Small Business Checking >`,
  },
  {
    image: Image4,
    paragraph: `Fast funds, happy wallet: Get your paycheck sooner.`,
    header: `Active EarlyPay  >`,
  },
];

const SecondSection = () => {
  return (
    <React.Fragment>
      <section
        className="section explore p-3"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="container w-full sm:w-4/5 m-auto">
          <div className="text-center mt-10">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Explore Your Interests
            </h1>
          </div>
          <div className="articles container grid grid-cols-1 sm:flex sm:justify-between gap-6 mt-10 mb-14">
            {articleImages.map((image, index) => {
              return (
                <article
                  key={index}
                  className="mx-2 sm:ml-2 article shadow-md bg-white w-full sm:articleWidth"
                >
                  <img
                    src={image.image}
                    alt=""
                    className="w-full h-40 object-cover sm:h-auto"
                  />
                  <div className="p-4">
                    <p className="font-bold mt-3 text-base sm:text-lg">
                      {image.paragraph}
                    </p>
                    <h2 className="text-xl sm:text-2xl mt-2 font-bold">
                      {image.header}
                    </h2>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecondSection;
