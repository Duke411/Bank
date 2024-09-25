import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import AuthContext from "../../store/auth-context"; // Import AuthContext

const Settings = () => {
  const [user, setUser] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const authCtx = useContext(AuthContext); // Access the user data from context
  const userId = authCtx.user ? authCtx.user._id : null; // Extract user ID from context

  // console.log(userId);

  // Fetch user details from the API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://equity-bqnkapp.onrender.com/bank/api/v1/userprofile/${userId}`,
          { withCredentials: true }
        );
        setUser(res.data.data.user); // Assuming the response has user data
      } catch (error) {
        setError("Failed to fetch user data");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    } else {
      setError("User ID not found");
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const logOutHandler = () => {
    authCtx.logout();
    localStorage.removeItem("userData");
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="section flex justify-between w-full h-full">
      <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5">
        <label className="text-2xl text-yellow-600 font-bold">Bank</label>
        <ul className="text-white mt-10">
          <Link
            className="flex hover:bg-yellow-600 hover:text-black p-2"
            to="/bankdashboard"
          >
            <FaHome />
            <span className="ml-2">Home</span>
          </Link>
          <Link
            className="flex hover:bg-yellow-600 hover:text-black p-2"
            to="/products"
          >
            <MdAccountBalanceWallet />
            <span className="ml-2">Products</span>
          </Link>
          <Link
            className="flex hover:bg-yellow-600 hover:text-black p-2"
            to="/transactions"
          >
            <GrTransaction />
            <span className="ml-2">Transactions</span>
          </Link>
          <Link
            className="flex hover:bg-yellow-600 hover:text-black p-2"
            to="/payments"
          >
            <FaHome />
            <span className="ml-2">Payments</span>
          </Link>
          <Link className="flex hover:bg-yellow-600 hover:text-black p-2 active">
            <IoIosSettings />
            <span className="ml-2">Account Details</span>
          </Link>
          <button
            className="flex hover:bg-yellow-600 hover:text-black p-2"
            onClick={logOutHandler}
          >
            <IoLogOutOutline />
            <span className="ml-2">Logout</span>
          </button>
        </ul>
      </aside>

      <main className="md:w-3/4 w-full bg-slate-300 h-full">
        <nav className="flex justify-between w-full md:bg-transparent bg-white md:shadow-none shadow-md md:p-4 p-2">
          <div>
            <label className="text-black font-bold">Dashboard</label>
          </div>
          <ul className="md:flex hidden">
            <FaBell size={20} />
            <FaMessage className="ml-3" size={20} />
            <FaUser size={20} className="ml-3" />
          </ul>
          <div className="md:hidden block" onClick={toggleMenu}>
            <RxHamburgerMenu size={25} />
          </div>
        </nav>
        {menuOpen && (
          <aside className="md:hidden w-full bg-slate-800 pb-14 shadow-md p-5">
            <ul className="text-white font-semibold mt-10">
              <Link
                className="flex hover:bg-yellow-600 hover:text-black p-2"
                to="/bankdashboard"
              >
                <FaHome /> <span className="ml-3">Home</span>
              </Link>
              <Link
                className="flex hover:bg-yellow-600 hover:text-black p-2"
                to="/products"
              >
                <MdAccountBalanceWallet />{" "}
                <span className="ml-3">Products</span>
              </Link>
              {/* <Link
                  className="flex hover:bg-yellow-600 hover:text-black p-2"
                  to="/transactions"
                >
                  <GrTransaction /> <span className="ml-3">Transactions</span>
                </Link> */}
              <Link
                className="flex hover:bg-yellow-600 hover:text-black p-2"
                to="/payments"
              >
                <FaHome /> <span className="ml-3">Payments</span>
              </Link>
              <Link
                className="flex hover:bg-yellow-600 hover:text-black p-2"
                to="/settings"
              >
                <IoIosSettings /> <span className="ml-3">Account Details</span>
              </Link>
              <Link
                className="flex hover:bg-yellow-600 hover:text-black p-2"
                onClick={logOutHandler}
              >
                <IoLogOutOutline /> <span className="ml-3">Logout</span>
              </Link>
            </ul>
          </aside>
        )}

        <section className="section w-full p-4">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Account Details</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              {user && (
                <>
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
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={user.bankAccountNumber}
                      readOnly
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Balance
                    </label>
                    <input
                      type="text"
                      value={`$${user.accountbalance}`}
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
                      value={`$${user.accountType}`}
                      readOnly
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Gender
                    </label>
                    <input
                      type="text"
                      value={`$${user.gender}`}
                      readOnly
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      value={`$${user.residentialAddress}`}
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
                      value={`$${user.country}`}
                      readOnly
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Settings;
