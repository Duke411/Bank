import "../../App.css";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome, FaCcMastercard } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSackDollar } from "react-icons/fa6";
import Chart from "../../Components/Chart";
import Transaction from "../../Components/Transaction";
import { FaBitcoin } from "react-icons/fa6";

const BankDashboard = () => {
  return (
    <>
      <section className="section flex justify-between w-full h-full">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5">
          <label className="text-2xl text-yellow-600 font-bold">Bank</label>
          <ul className="text-white font-semibold mt-10">
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2 active"
              to="/bankdashboard"
            >
              <FaHome /> <span className="ml-3 ">Home</span>
            </Link>
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              to="/products"
            >
              <MdAccountBalanceWallet /> <span className="ml-3">Products</span>
            </Link>
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              to="/transactions"
            >
              <GrTransaction /> <span className="ml-3">Transactions</span>
            </Link>

            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              to="/payments"
            >
              <FaHome /> <span className="ml-3">Payments</span>
            </Link>
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              to="/cards"
            >
              <FaCcMastercard /> <span className="ml-3">Cards</span>
            </Link>

            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2"
              to="/settings"
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
          <section className="section w-full">
            <div className="ml-3">
              <h1 className="font-bold text-black">
                Account Number <span>123****5342</span>
              </h1>
            </div>
            <div className="md:flex block md:w- container">
              <div>
                <div className="md:flex justify-between block md:p-none p-2 ">
                  <div className="bg-white md:rounded-md shadow-md md:w-48  h-24 md:ml-3 mb-3 sm:mb-none p-4">
                    <FaSackDollar color="purple" />
                    <h1 className="font-bold text-2xl">$3500</h1>
                    <p className="font-semibold">A/C Balance</p>
                  </div>
                  <div className="bg-white md:rounded-md shadow-md md:w-48 h-24 md:ml-3 mb-3 sm:mb-none p-4">
                    <FaSackDollar color="orange" />
                    <h1 className="font-bold text-2xl">$400</h1>
                    <p className="font-semibold">Income</p>
                  </div>
                  <div className="bg-white md:rounded-md shadow-md md:w-48 h-24 md:ml-3 mb-3 sm:mb-none p-4">
                    <FaSackDollar color="pink" />
                    <h1 className="font-bold text-2xl">$400</h1>
                    <p className="font-semibold">Savings</p>
                  </div>
                </div>
                <h3 className="m-2 font-bold">Finances</h3>
                <div className="w-full bg-white shadow-md rounded-md">
                  <Chart />
                </div>
                <h3 className="m-2 font-semibold">Transaction History</h3>
                <div className="w-full bg-white shadow-lg rounded-md">
                  <Transaction />
                </div>
              </div>
              <div className="md:w-1/4 w-full mt-4 relative">
                <h3 className="font-bold">My Cards</h3>
                <div className="atm w-full relative z-20 ml-3">
                  <h1 className="text-white font-bold text-2xl p-2">VISA</h1>
                  <p className="p-2 text-white font-bold">123 457 2367 199</p>
                  <p className="p-2 text-white font-bold">Olivia Brown</p>
                  <p className=" text-white font-bold ml-44 ">11/24</p>
                </div>
                <div className="atm2 w-full absolute top-8 z-10 left-7"></div>
                <div className="mt-8 ml-2 font-bold">
                  <h3>Quick Transactions</h3>
                  <button className="bg-slate-800 rounded-lg text-white font-semibold shadow-lg p-4">
                    Transfer
                  </button>
                  <div className="mt-5">
                    <FaBitcoin size={50} color="orange" />
                    <h1>
                      Interested In Crypto Banking?, Click the link below for
                      more information.
                    </h1>
                    <button className="click">Click - Me</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default BankDashboard;
