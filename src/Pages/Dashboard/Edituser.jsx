import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null); // Start with null, to wait for API data
  const navigate = useNavigate();

  // Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://equity-bqnkapp.onrender.com/bank/api/v1/user/${id}`, // Ensure this endpoint returns user by ID
          { withCredentials: true }
        );
        // console.log("Fetched user:", res.data); // Check the response structure in the console
        setUser(res.data.user); // Use optional chaining to avoid undefined errors
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  // Handle form submission to update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `https://equity-bqnkapp.onrender.com/bank/api/v1/profile/`,
        user,
        // Send the updated user object
        { withCredentials: true }
      );
      navigate("/admin"); // Redirect to admin dashboard after successful update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Ensure user data is loaded before rendering the form
  if (!user) {
    return <div>Loading...</div>; // Display loading spinner/text until user data is fetched
  }

  return (
    <section className="section flex justify-between w-full h-full">
      <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5 adminDashboard">
        <label className="text-2xl text-yellow-600 font-bold">Bank</label>
        <ul className="text-white mt-10">
          <Link className="flex hover:bg-yellow-600 hover:text-black p-2 active">
            <FaHome />
            <span className="ml-2">Home</span>
          </Link>
          <Link className="flex" to="/alluser">
            <FaUser />
            <span className="ml-2">All User</span>
          </Link>
          <Link className="flex mt-40" to="/alluser">
            <IoSettings />
            <span className="ml-2">Sign Out</span>
          </Link>
        </ul>
      </aside>
      <main className="md:w-3/4 w-full bg-slate-300">
        <nav className="flex justify-between w-full md:bg-transparent bg-white md:shadow-none shadow-md md:p-4 p-2">
          <div>
            <label className="text-black font-bold">Admin Dashboard</label>
          </div>
          <ul className="md:flex hidden ">
            <FaBell size={20} />
            {/* <FaMessage className="ml-3" size={20} /> */}
            <FaUser size={20} className="ml-3" />
          </ul>
          <div className="md:hidden  block">
            <RxHamburgerMenu size={25} />
          </div>
        </nav>
        <section className="section w-full p-4">
          <div className=" mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Edit User</h1>
            <img
              src={
                `https://equity-bqnkapp.onrender.com/images/` +
                user.profileImage
              }
              height={250}
              width={250}
            />
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName || ""}
                  onChange={handleChange} // Reflect the state change
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName || ""}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Last Name"
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  value={user.phonenumber || ""}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone Number"
                />
              </div>
              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Account Type
                </label>
                <input
                  type="text"
                  name="accountType"
                  value={user.accountType || ""}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone Number"
                />
              </div>
              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Account Balance
                </label>
                <input
                  type="text"
                  name="accountbalance"
                  value={user.accountbalance}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Income
                </label>
                <input
                  type="text"
                  name="income"
                  value={user.income}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Save Button */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={() => navigate("/admin")}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </section>
  );
};

export default EditUser;
