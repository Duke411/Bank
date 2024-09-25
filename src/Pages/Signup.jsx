import React, { useState, useEffect } from "react";
import "../App.css";
import { FaGreaterThan } from "react-icons/fa6";
import Navbar from "../Components/Navbar";
import { CiCircleInfo } from "react-icons/ci";
import { MdPersonOutline } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import Footer from "../Components/Footer";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "!firstname is Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "!lastname is Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "!Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "!Password is Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "!Confirm Password is Required";
  } else if (values.confirmpassword.length > 20) {
    errors.confirmpassword = "Must be same with password";
  }
  if (!values.phonenumber) {
    errors.phonenumber = "!phonenumber  is Required";
  } else if (values.phonenumber.length > 12) {
    errors.phonenumber = "Must not be more than 11 digits";
  }

  if (!values.residentialAddress) {
    errors.residentialAddress = "residential Address is required";
  }
  if (!values.city) {
    errors.city = "city is required";
  }
  if (!values.state) {
    errors.state = "state is required";
  }
  if (!values.country) {
    errors.country = "country is required";
  }
  if (!values.typeofIdentification) {
    errors.typeofIdentification = " type Of Identification is required";
  }
  return errors;
};

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

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      phonenumber: "",
      email: "",
      confirmpassword: "",
      file: "",
      residentialAddress: "",
      city: "",
      dateOfBirth: "",
      state: "",
      gender: "",
      country: "",
      typeofIdentification: "",
      identificationNumber: "",
      accountType: "",
      occupation: "",
      accountbalance: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("password", values.password);
      formData.append("phonenumber", values.phonenumber);
      formData.append("email", values.email);
      formData.append("confirmpassword", values.confirmpassword);
      formData.append("residentialAddress", values.residentialAddress);
      formData.append("city", values.city);
      formData.append("dateOfBirth", values.dateOfBirth);
      formData.append("state", values.state);
      formData.append("gender", values.gender);
      formData.append("country", values.country);
      formData.append("typeofIdentification", values.typeofIdentification);
      formData.append("identificationNumber", values.identificationNumber);
      formData.append("accountType", values.accountType);
      formData.append("occupation", values.occupation);
      formData.append("accountbalance", values.accountbalance);
      if (values.file) {
        formData.append("file", values.file);
      }

      try {
        const res = await axios.post(
          "https://equity-bqnkapp.onrender.com/bank/api/v1/signup",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );

        console.log(res);
        toast.success("Sign Up Successfull");
        navigate("/login");
      } catch (error) {
        error ? toast.error("Duplicate Information") : error;
      }
      //..

      resetForm(values, "");
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("file", file);
  };

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
            <form onSubmit={formik.handleSubmit}>
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.firstName ? (
                  <div style={{ color: "red" }}>{formik.errors.firstName}</div>
                ) : null}

                {/*  */}

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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.middleName}
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>

                {/*  */}

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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder="Enter Last Name"
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.lastName ? (
                  <div style={{ color: "red" }}>{formik.errors.lastName}</div>
                ) : null}

                {/*  */}

                <select
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  required
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="savings">male</option>
                  <option value="current">female</option>
                </select>
                {/*  */}

                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="dateOfBirth"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="string"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dateOfBirth}
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Enter Email Address"
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}

                {/*  */}

                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="residentialAddress"
                  >
                    residentialAddress
                  </label>
                  <input
                    type="text"
                    id="residentialAddress"
                    name="residentialAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.residentialAddress}
                    placeholder="Enter residential Address"
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.residentialAddress ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.residentialAddress}
                  </div>
                ) : null}

                {/*  */}

                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="city"
                  >
                    city
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    placeholder="Enter city"
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.city ? (
                  <div style={{ color: "red" }}>{formik.errors.city}</div>
                ) : null}

                {/*  */}

                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="state"
                  >
                    state
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                    placeholder="Enter state"
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.state ? (
                  <div style={{ color: "red" }}>{formik.errors.state}</div>
                ) : null}

                {/*  */}
                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="country"
                  >
                    Counrty
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    placeholder="Enter Country"
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>

                {formik.errors.country ? (
                  <div style={{ color: "red" }}>{formik.errors.country}</div>
                ) : null}

                {/*  */}
                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="typeofIdentification"
                  >
                    Type Of Identification
                  </label>
                  <input
                    type="text"
                    id="typeofIdentification"
                    name="typeofIdentification"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.typeofIdentification}
                    placeholder="Enter type of Identification"
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>

                {formik.errors.typeofIdentification ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.typeofIdentification}
                  </div>
                ) : null}

                {/*  */}
                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="identificationNumber"
                  >
                    Identification Number:
                  </label>
                  <input
                    type="text"
                    id="identificationNumber"
                    name="identificationNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.identificationNumber}
                    placeholder="Enter identification Number: "
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.identificationNumber ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.identificationNumber}
                  </div>
                ) : null}

                {/*  */}
                <div className="form-group">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="occupation"
                  >
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.occupation}
                    placeholder="Enter occupation: "
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.occupation ? (
                  <div style={{ color: "red" }}>{formik.errors.occupation}</div>
                ) : null}
                {/*  */}

                <div className="form-group relative">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="phonenumber"
                  >
                    Primary Phone Number
                  </label>
                  <div className="flex">
                    <span className="input-prefix-box bg-gray-200 px-4 flex items-center border rounded-l-lg">
                      +1
                    </span>
                    <input
                      type="number"
                      id="phonenumber"
                      name="phonenumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phonenumber}
                      placeholder="Enter Primary Phone Number"
                      className="form-input w-full border rounded-r-lg p-2"
                    />
                  </div>
                </div>
                {formik.errors.phonenumber ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.phonenumber}
                  </div>
                ) : null}

                {/*  */}

                <select
                  name="accountType"
                  value={formik.values.accountType}
                  onChange={formik.handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Account Type
                  </option>
                  <option value="savings">Savings</option>
                  <option value="current">Current</option>
                  <option value="business">Business</option>
                </select>

                {/*  */}

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
                    className="block text-sm font-medium mb-2"
                    htmlFor="file"
                  >
                    Upload Your ID Card
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                <div className="form-group">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Set Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
                <div className="form-group">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="confirmpassword"
                  >
                    Confirm-Password
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="confirm password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmpassword}
                    className="form-input w-full border rounded-lg p-2"
                  />
                </div>
                {formik.errors.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
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
                <button
                  type="submit"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
                >
                  Continue
                </button>
              </div>
            </form>
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
