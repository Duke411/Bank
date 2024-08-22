import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Forgot = () => {
  const [Email, setEmail] = useState();

  return (
    <div>
      <section className="section login">
        <div className="container w-3/4 m-auto text-center form">
          <div className="text-center">
            <h1 className="text-4xl text-white font-bold pt-12">
              Bank (Forgot Password)
            </h1>
            <form
              action=""
              className="max-w-sm bg-white p-6 rounded-lg shadow-lg m-auto mt-10 space-y-4"
            >
              <h2 className="font-semibold">
                Please provide your email for password reset{" "}
              </h2>
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
                <input
                  type="submit"
                  value="Login"
                  className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300"
                />
              </div>
              <div>
                <Link to="/" className="text-blue-500">
                  Back Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forgot;
