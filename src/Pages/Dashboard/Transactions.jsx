import "../../App.css";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome, FaCcMastercard } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Transaction from "../../Components/Transaction";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Transactions = () => {
  const { logout } = useContext(AuthContext);

  const logOutHandler = () => {
    logout();
    localStorage.removeItem("userData");
  };

  return (
    <>
      <section className="section flex justify-between w-full min-h-screen">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5 transactionheight min-h-screen">
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
            <Link className="flex hover:bg-yellow-600 hover:text-black p-2 active">
              <GrTransaction /> <span className="ml-3">Transactions</span>
            </Link>

            <Link
              to="/payments"
              className="flex hover:bg-yellow-600 hover:text-black p-2"
            >
              <FaHome /> <span className="ml-3">Payments</span>
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
            <div className="md:hidden  block">
              <RxHamburgerMenu size={25} />
            </div>
          </nav>
          <div>
            <Transaction />
          </div>
        </main>
      </section>
    </>
  );
};

export default Transactions;
