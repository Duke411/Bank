import React from "react";
import "../App.css";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const paragraphText = `Spend, save, borrow, invest and protect your money with Equity Bank. 
Our personal banking services help set you up for success.`;

const btntext = `Open an account`;

const accounts = [
  "Check Accounts",
  "Savings Accounts",
  "Health Savings Accounts",
  "Mortgage",
];

const ThirdSection = () => {
  return (
    <React.Fragment>
      <section
        className="section thirdImage"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        id="personal"
      >
        <div className="container w-full sm:w-4/5 m-auto p-4 flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 mt-8">
            <p className="text-white font-semibold text-lg sm:text-base">
              Personal
            </p>
            <h2 className="text-white text-3xl sm:text-5xl font-bold mt-5">
              Open{" "}
              <span className="text-yellow-500">
                your new <br className="hidden sm:block" />
                account.
              </span>
            </h2>
            <p className="mt-5 text-white text-xl sm:text-2xl">
              {paragraphText}
            </p>
            <Link to="/signup">
              <button className="mt-5 p-2 bg-yellow-600 text-black font-semibold shadow-md flex items-center justify-center text-base sm:text-lg">
                {btntext}{" "}
                <span className="pt-1 ml-2">
                  <FaGreaterThan />
                </span>
              </button>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 mt-8 sm:mt-0 p-4">
            {accounts.map((item, index) => {
              return (
                <div
                  className="flex  sm:flex-row rounded-md shadow-md mb-6 sm:mb-10"
                  key={index}
                >
                  <span className="w-3/4 sm:w-3/4 bg-white p-4 text-base sm:text-lg">
                    {item}
                  </span>
                  <span className="w-1/4 sm:w-1/4 bg-black p-4 flex items-center justify-center">
                    <Link to="/login">
                      <FaGreaterThan color="yellow" size={20} />{" "}
                    </Link>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ThirdSection;
