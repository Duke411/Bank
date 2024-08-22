// import React from 'react'

import Image1 from "../assets/Equity-Bank-CB-Photo-MW-20230523-0098.jpg";
import Image2 from "../assets/Equity2.jpg";
import Image3 from "../assets/Equity3.jpg";
import Image4 from "../assets/equity4.jpg";

const articleImages = [
  {
    image: Image1,
    header: `Leadership Team >`,
  },
  {
    image: Image2,
    header: `Culture >`,
  },
  {
    image: Image3,
    header: `Contact Us >`,
  },
  {
    image: Image4,
    header: `Media Inquiry >`,
  },
];

const AllAbout = () => {
  return (
    <>
      <section className="section full" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <div className="container w-full sm:w-4/5 m-auto">
          <div className="text-center mt-10">
            <h1 className="text-3xl sm:text-4xl font-bold">All About Bank</h1>
          </div>
          <div className="articles grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 mb-14">
            {articleImages.map((image, index) => {
              return (
                <article
                  key={index}
                  className="shadow-md bg-white flex flex-col"
                >
                  <img
                    src={image.image}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      {image.header}
                    </h2>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllAbout;
