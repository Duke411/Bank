// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Form = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div>
      <form
        action=""
        className="max-w-sm bg-white p-6 rounded-lg shadow-lg m-auto mt-10 space-y-4"
      >
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={Email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        <div>
          <Link to="/user">
            <input
              type="submit"
              value="Login"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
            />
          </Link>
        </div>
        <Link className="font-semibold text-blue-600" to="/forgot">
          Forgot Password?
        </Link>
        <p>Or</p>
        <Link className=" font-semibold text-blue-600" to="/signup">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Form;
