import React, { useState } from "react";
import "../App.css";
import { FaGreaterThan } from "react-icons/fa6";
import Navbar from "../Components/Navbar";
import { CiCircleInfo } from "react-icons/ci";
import { MdPersonOutline } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import Footer from "../Components/Footer";

const Signup = () => {
  const [accounts, setAccounts] = useState([
    "Existing Customer Login",
    "Continue Your Application",
  ]);
  const [icons, setIcons] = useState([
    {
      icon: <CiCircleInfo color="orange" size={50} />,
      head: `Gather what you need to apply.`,
      text: `All applicants must be 18 years of age and a U.S. resident.`,
    },
    {
      icon: <MdPersonOutline color="orange" size={50} />,
      head: `Personal Info`,
      text: `Address, phone number, email, social security number.`,
    },
    {
      icon: <FaFingerprint color="orange" size={50} />,
      head: `Identification`,
      text: `Driver's license, state ID, or passport`,
    },
    {
      icon: <RiRefund2Fill color="orange" size={50} />,
      head: `Funding`,
      text: `Debit/credit card or account info for funding your new account.`,
    },
  ]);
  const paragraphText = `Opening your account is quick, easy and secure.`;
  const started = `Let's get started.`;
  return (
    <React.Fragment>
      <Navbar />
      <section
        className="section thirdImage"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="container w-full sm:w-4/5 m-auto p-4 flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 mt-2">
            <p className="text-white font-semibold text-lg sm:text-base">
              Personal
            </p>
            <h2 className="text-white text-3xl sm:text-5xl font-bold mt-5">
              Open your Equity Bank account today.
            </h2>
            <p className="mt-5 text-white text-xl sm:text-2xl">
              {paragraphText}
            </p>
            {/* <button className="mt-5 p-2 bg-yellow-600 text-black font-semibold shadow-md flex items-center justify-center text-base sm:text-lg">
              {btntext}{" "}
              <span className="pt-1 ml-2">
                <FaGreaterThan />
              </span>
            </button> */}
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
                    <FaGreaterThan color="yellow" size={20} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container w-4/5 m-auto pt-20">
          <h1 className="text-3xl text-black font-bold text-center">
            {started}
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6 form1">
            <h4 className="text-lg font-bold mb-4">
              Tell us a little about yourself.
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="form-group">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  className="form-input w-full border rounded-lg p-2"
                />
              </div>
              <div className="form-group">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="middleName"
                >
                  Middle Name <span className="text-gray-500">Optional</span>
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Enter Middle Name"
                  className="form-input w-full border rounded-lg p-2"
                />
              </div>
              <div className="form-group">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  className="form-input w-full border rounded-lg p-2"
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium mb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="MM/DD/YYYY"
                  className="form-input w-full border rounded-lg p-2"
                />
              </div>
              <div className="form-group">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="form-input w-full border rounded-lg p-2"
                />
              </div>
              <div className="form-group relative">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="primaryPhoneNumber"
                >
                  Primary Phone Number
                </label>
                <div className="flex">
                  <span className="input-prefix-box bg-gray-200 px-4 flex items-center border rounded-l-lg">
                    +1
                  </span>
                  <input
                    type="text"
                    id="primaryPhoneNumber"
                    name="primaryPhoneNumber"
                    placeholder="Enter Primary Phone Number"
                    className="form-input w-full border rounded-r-lg p-2"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="zipCode"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Enter Zip Code"
                  className="form-input w-full border rounded-lg p-2"
                />
              </div>
              <div className="form-group">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="zipCode"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="123456"
                  name="passowrd"
                  placeholder="Enter Zip Code"
                  className="form-input w-full border rounded-lg p-2"
                />
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">
                Read the: Electronic Disclosure Agreement
              </h4>
              <p className="text-sm mb-4">
                This disclosure documents your consent to conduct transactions
                electronically...
              </p>
              <div className="form-group flex items-start">
                <input
                  type="checkbox"
                  id="disclosure"
                  name="disclosure"
                  className="mt-1 mr-2"
                />
                <label htmlFor="disclosure" className="text-sm font-semibold">
                  I have read the Electronic Disclosure Agreement and agree to
                  conduct business in accordance with the terms and conditions
                  contained therein
                </label>
              </div>
            </div>
            <div className="mt-6 text-right">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section pb-10 m-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="container w-full sm:w-4/5 m-auto p-4">
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
          <p className="mt-3 font-semibold">
            By clicking CONTINUE you expressly consent to allow Equity Bank to
            contact you at the telephone, email, and/or address you have
            provided for the purpose of fulfilling your inquiry even if you have
            registered such contact information on the Do Not Call Registry or
            requested Equity Bank to not contact you by telephone, email, or
            direct mail. You are expressly allowing Equity Bank to contact you
            by text message and/or telephone which may result in charges
            assessed from your cellular/mobile carriers. Additionally,
            communication with you may include the use of automatic telephone
            dialing systems and/or the use of artificial or prerecorded messages
            to the residential or cellular number provided. You understand that
            you are not required to consent to receiving autodialed calls/text
            messages as a condition for obtaining services from Equity Bank.
          </p>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Signup;
