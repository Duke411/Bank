import React from "react";
import "../App.css";
import { FaArrowRight } from "react-icons/fa6";
import Image1 from "../assets/Debit.png";
import Image2 from "../assets/Student.jpg";
import { Link } from "react-router-dom";

const Firstsection = () => {
  return (
    <React.Fragment>
      <section className="section bg-slate-800">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="bg-image w-full sm:w-3/5">
            <div className="text ml-4 sm:ml-16 mt-8 sm:mt-16">
              <h1 className="text-2xl sm:text-4xl font-bold">
                Give Yourself Some <br className="hidden sm:block" /> Time Back
                Today.
              </h1>
              <p className="mt-3 sm:mt-5 text-xl sm:text-2xl">
                Opening your account takes less than five minutes.
                <br className="hidden sm:block" /> No seriously, try it for
                yourself!
              </p>
              <Link to="/signup">
                <button className="bg-yellow-500 text-black px-3 py-2 rounded mt-4 sm:mt-5 shadow-md font-medium flex items-center ">
                  <span className="mr-2 sm:mr-3">Open Your Account</span>
                  <span className="pt-1">
                    <FaArrowRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="block w-full sm:w-2/5 mt-8 sm:mt-0">
            <div className="p-4 sm:p-5 debit w-full flex text-white font-semibold">
              <img
                src={Image1}
                alt="debit card"
                className="w-1/4 h-24 sm:h-auto sm:w-auto"
              />
              <div className="ml-2 sm:ml-3 p-2">
                <h1 className="text-xl sm:text-2xl mb-2 sm:mb-3">
                  Design Your Card
                </h1>
                <p className="mb-2 sm:mb-3">
                  Family photo? Your cute dog? Sunset from your trip to the
                  beach?
                </p>
                <a className="underline">Start Designing</a>
              </div>
            </div>
            <div className="p-4 sm:p-5 debit w-full flex text-white font-semibold mt-4 sm:mt-0">
              <img
                src={Image2}
                alt="student checking"
                className="w-1/4 h-24 sm:h-auto sm:w-auto"
              />
              <div className="ml-2 sm:ml-3 p-2">
                <h1 className="text-xl sm:text-2xl mb-2 sm:mb-3">
                  Student Checking
                </h1>
                <p className="mb-2 sm:mb-3">
                  Students can earn $200 when they sign up for a new Student
                  Checking account. Now that’s a lot of lattes!
                </p>
                <a className="underline">Student Checking</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Firstsection;
