// import React from 'react'
import Image1 from "../assets/bank.jpg";
import "../App.css";

const ContactFirst = () => {
  return (
    <>
      <section className="section w-full contact_first">
        <div className=" sm:flex">
          <div className="w-full sm:w-1/2 sm:p-20 pt-5 pl-3">
            <h1 className="text-3xl font-bold text-black mt-4 mb-4">
              Contact Us
            </h1>
            <p className="mt-2 mb-5 text-black font-semibold sm:text-2xl">
              As your bankers, we strive to be accessible to our customers at
              all times! To send us a message, question or inquiry, please use
              the form below.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img src={Image1} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFirst;
