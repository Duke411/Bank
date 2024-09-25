import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

const ViewProfile = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://equity-bqnkapp.onrender.com/bank/api/v1/userprofile/${id}`,
          { withCredentials: true }
        );
        setUser(res.data.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
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
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <img
                src={
                  `https://equity-bqnkapp.onrender.com/images/` +
                  user.profileImage
                }
                height={250}
                width={250}
              />
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={user.firstName}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={user.lastName}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={user.phonenumber}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="text"
                  value={user.email}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={user.city}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  value={user.dateOfBirth}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  State
                </label>
                <input
                  type="text"
                  value={user.state}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={user.country}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Account Type
                </label>
                <input
                  type="text"
                  value={user.gender}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Type of Identification
                </label>
                <input
                  type="text"
                  value={user.typeofIdentification}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Identification Number
                </label>
                <input
                  type="text"
                  value={user.identificationNumber}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  occupation
                </label>
                <input
                  type="text"
                  value={user.occupation}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Account Balance
                </label>
                <input
                  type="text"
                  value={user.accountbalance}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <Link to="/admin">
                <button className="bg-orange-500 font-semibold p-2">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ViewProfile;
