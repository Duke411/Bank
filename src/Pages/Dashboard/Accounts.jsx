import "../../App.css";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome, FaCcMastercard } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Accounts = () => {
  return (
    <>
      <section className="section flex justify-between w-full h-full">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5">
          <label className="text-2xl text-yellow-600 font-bold">Bank</label>
          <ul className="text-white font-semibold mt-10">
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2 "
              to="/bankdashboard"
            >
              <FaHome /> <span className="ml-3 ">Home</span>
            </Link>
            <li className="flex hover:bg-yellow-600 hover:text-black p-2 active">
              <MdAccountBalanceWallet /> <span className="ml-3">Products</span>
            </li>
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              to="/transactions"
            >
              <GrTransaction /> <span className="ml-3">Transactions</span>
            </Link>

            <Link
              to="/payments"
              className="flex hover:bg-yellow-600 hover:text-black p-2"
            >
              <FaHome /> <span className="ml-3">Payments</span>
            </Link>
            <Link
              to="/cards"
              className="flex hover:bg-yellow-600 hover:text-black p-2"
            >
              <FaCcMastercard /> <span className="ml-3">Cards</span>
            </Link>

            <Link
              to="/settings"
              className="flex hover:bg-yellow-600 hover:text-black p-2"
            >
              <IoIosSettings /> <span className="ml-3">Settings</span>
            </Link>
            <li className="flex hover:bg-yellow-600 hover:text-black p-2">
              <IoLogOutOutline /> <span className="ml-3">Logout</span>
            </li>
          </ul>
        </aside>
        <main className="md:w-3/4 w-full bg-slate-300">
          <nav className="flex justify-between w-full md:bg-transparent bg-white md:shadow-none shadow-md md:p-4 p-2">
            <div>
              <label className="text-black font-bold">Dashboard</label>
            </div>
            <ul className="md:flex hidden ">
              <FaBell size={20} />
              <FaMessage className="ml-3" size={20} />
              <FaUser size={20} className="ml-3" />
            </ul>
            <div className="md:hidden  block">
              <RxHamburgerMenu size={25} />
            </div>
          </nav>
          <div className="ml-3">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="bg-slate-800 text-white p-3 shadow-xl">
              <h2 className="font-bold text-yellow-500">Loans</h2>
              <p>Click Here to apply for QuickCredit and Salary Advance</p>
              <button className="bg-yellow-600 p-2 font-semibold rounded-md shadow-xl">
                Apply For Loans
              </button>
            </div>
            <div className="bg-slate-800 text-white p-3 shadow-xl mt-3">
              <h1 className="text-2xl font-bold">More Products</h1>
              <p>Get the card that you need to suit your lifestyle</p>
              <button className="bg-yellow-600 p-2 font-semibold rounded-md shadow-xl">
                Talk with our Agent
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Accounts;
