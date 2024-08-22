import React from "react";
import "../App.css";
import { CiLocationOn } from "react-icons/ci";
import { FaCarRear } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

const icons = [
  {
    icon: <CiLocationOn color="orange" size={50} />,
    head: `In-Person-Banking`,
    text: `Find a Location`,
  },
  {
    icon: <FaCarRear color="orange" size={50} />,
    head: `Video-Tellers`,
    text: `Go Beyond ATM`,
  },
  {
    icon: <FaFingerprint color="orange" size={50} />,
    head: `e-Fraud preventions`,
    text: `Tools to keep you safe`,
  },
  {
    icon: <RiTeamLine color="orange" size={50} />,
    head: `Join Our Team`,
    text: `We're hiring`,
  },
];

const FourthSection = () => {
  return (
    <React.Fragment>
      <section
        className="section pb-10"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="container w-full sm:w-4/5 m-auto p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mt-10 mb-16">
            Here when you need us.
          </h1>
          <div className="icons-container grid grid-cols-2 sm:grid-cols-4 gap-6 m-auto ">
            {icons.map((item, index) => {
              return (
                <article
                  key={index}
                  className="text-center flex flex-col items-center"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {item.head}
                  </h2>
                  <p className="text-base sm:text-lg font-normal">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FourthSection;
