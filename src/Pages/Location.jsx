// import React from 'react'

import Navbar from "../Components/Navbar";
import "../App.css";
import Footer from "../Components/Footer";

const Location = () => {
  return (
    <>
      <Navbar />
      <section className="section w-full frist">
        <div className="container mx-auto w-full p-4">
          <div className="text-white w-full sm:w-1/2 mb-4">
            <h1 className="text-3xl">Bank Location</h1>
            <p className="text-2xl">Fallbrook, California 92028, USA</p>
          </div>
          <div className="w-full">
            <iframe
              className="w-full h-96 sm:h-[600px] border-0"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Fallbrook%20Carlifornia%2092028,%20USA%20+(Bank%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Location;
