import "../../App.css";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
// import { GrTransaction } from "react-icons/gr";
import { GiCash } from "react-icons/gi";

import { FaMessage } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useState } from "react";

const Payments = () => {
  const { logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logOutHandler = () => {
    logout();
    localStorage.removeItem("userData");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="section flex justify-between w-full min-h-screen">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5 min-h-screen">
          <label className="text-2xl text-yellow-600 font-bold">Bank</label>
          <ul className="text-white font-semibold mt-10">
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2 "
              to="/bankdashboard"
            >
              <FaHome /> <span className="ml-3 ">Home</span>
            </Link>
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2 "
              to="/products"
            >
              <MdAccountBalanceWallet /> <span className="ml-3">Products</span>
            </Link>
            {/* <Link
              to="/transactions"
              className="flex hover:bg-yellow-600 hover:text-black p-2 "
            >
              <GrTransaction /> <span className="ml-3">Transactions</span>
            </Link> */}

            <Link className="flex hover:bg-yellow-600 hover:text-black p-2 active">
              <FaHome /> <span className="ml-3">Payments</span>
            </Link>
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              to="/adminloan"
            >
              <GiCash /> <span className="ml-3">Apply For Loan</span>
            </Link>
            {/* <Link
              to="/cards"
              className="flex hover:bg-yellow-600 hover:text-black p-2"
            >
              <FaCcMastercard /> <span className="ml-3">Cards</span>
            </Link> */}

            <Link
              to="/settings"
              className="flex hover:bg-yellow-600 hover:text-black p-2"
            >
              <IoIosSettings /> <span className="ml-3">Account Details</span>
            </Link>
            <button
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              onClick={logOutHandler}
            >
              <IoLogOutOutline /> <span className="ml-3">Logout</span>
            </button>
          </ul>
        </aside>
        <main className="md:w-3/4 w-full bg-slate-300 min-h-screen">
          <nav className="flex justify-between w-full md:bg-transparent bg-white md:shadow-none shadow-md md:p-4 p-2">
            <div>
              <label className="text-black font-bold">Dashboard</label>
            </div>
            <ul className="md:flex hidden ">
              <FaBell size={20} />
              <FaMessage className="ml-3" size={20} />
              <FaUser size={20} className="ml-3" />
            </ul>
            <div className="md:hidden  block" onClick={toggleMenu}>
              <RxHamburgerMenu size={25} />
            </div>
          </nav>
          {/* Mobile menu */}
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
                  to="/adminloan"
                >
                  <GiCash /> <span className="ml-3">Apply For Loan</span>
                </Link>
                <Link
                  className="flex hover:bg-yellow-600 hover:text-black p-2"
                  to="/settings"
                >
                  <IoIosSettings />{" "}
                  <span className="ml-3">Account Details</span>
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
          <div>
            <h1 className="font-bold text-2xl ml-3">
              Always Check back for future Payments and Benefits !!
            </h1>
          </div>
        </main>
      </section>
    </>
  );
};

export default Payments;
