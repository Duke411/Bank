import React from "react";
import "../App.css";
import Image1 from "../assets/thumbnail_homepage_business-checking.jpg";
import Image2 from "../assets/thumbnail_homepage_business-lending.jpg";
import Image3 from "../assets/thumbnail_homepage_business-savings-1.jpg";
import Image4 from "../assets/thumbnail_homepage_business-savings.jpg";

const articleImages = [
  {
    image: Image1,
    header: `Business Checking >`,
  },
  {
    image: Image2,
    header: `Business Saving >`,
  },
  {
    image: Image3,
    header: `Business Lending >`,
  },
  {
    image: Image4,
    header: `Treasury Service >`,
  },
];

const Seventh = () => {
  return (
    <React.Fragment>
      <section
        className="section p-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="container w-full sm:w-4/5 m-auto">
          <div className="text-center mt-10">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Products and services for every <br />
              type of business
            </h1>
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
    </React.Fragment>
  );
};

export default Seventh;
