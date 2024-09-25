import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adminloan = () => {
  const [formData, setFormData] = useState({
    FName: "",
    MiddleName: "",
    LastName: "",
    Addr: "",
    City: "",
    State: "",
    Zip: "",
    SSN: "",
    DOB: "",
    HighSchool: "",
    YearOfGraduation: "",
    LoanAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://equity-bqnkapp.onrender.com/bank/api/v1/loanform",
        formData
      );
      // console.log("Form submitted successfully:", response.data);

      // Show success toast
      toast.success("Form submitted successfully!");

      // Clear input fields
      setFormData({
        FName: "",
        MiddleName: "",
        LastName: "",
        Addr: "",
        City: "",
        State: "",
        Zip: "",
        SSN: "",
        DOB: "",
        HighSchool: "",
        YearOfGraduation: "",
        LoanAmount: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Equity Bank Loan Application Form
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">First Name:</label>
          <input
            type="text"
            name="FName"
            value={formData.FName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Middle Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Middle Name:
          </label>
          <input
            type="text"
            name="MiddleName"
            value={formData.MiddleName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Last Name:</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Address:</label>
          <input
            type="text"
            name="Addr"
            value={formData.Addr}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">City:</label>
          <input
            type="text"
            name="City"
            value={formData.City}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">State:</label>
          <input
            type="text"
            name="State"
            value={formData.State}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Zip */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Zip Code:</label>
          <input
            type="text"
            name="Zip"
            value={formData.Zip}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* SSN */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">SSN:</label>
          <input
            type="text"
            name="SSN"
            value={formData.SSN}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Date of Birth (MM/DD/YYYY):
          </label>
          <input
            type="text"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* High School */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            High School:
          </label>
          <input
            type="text"
            name="HighSchool"
            value={formData.HighSchool}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Year of Graduation */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Year of Graduation:
          </label>
          <input
            type="text"
            name="YearOfGraduation"
            value={formData.YearOfGraduation}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Loan Amount</label>
          <input
            type="text"
            name="LoanAmount"
            value={formData.LoanAmount}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
        <Link to="/bankdashboard" className="p-2 bg-amber-500 text-black">
          Dashboard
        </Link>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Adminloan;
