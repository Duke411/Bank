import React from "react";
import "../App.css";
import Bank from "../assets/bank.jpg";
import { PiGreaterThanLight } from "react-icons/pi";

const text = `Our Company values are at the center of
everything we do - they truly reflect how we work
together, serve our customers, and build more
equitable communities`;

const Eight = () => {
  return (
    <React.Fragment>
      <section
        className="section w-full sectionBack"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="flex flex-col sm:flex-row">
          <div className="p-12 w-full sm:w-1/2">
            <h2 className="text-3xl sm:text-5xl font-semibold mb-5">
              Adding Value for our Customers and Communities.
            </h2>
            <p className="text-lg sm:text-2xl mb-8">{text}</p>
            <button className="p-3 bg-black text-white shadow-lg flex items-center">
              <span>Our values </span>
              <span className="pt-1 ml-3">
                <PiGreaterThanLight color="orange" />
              </span>
            </button>
          </div>
          <div className="w-full sm:w-1/2">
            <img src={Bank} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Eight;
