import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoSettings } from "react-icons/io5";

const Allusers = () => {
  return (
    <>
      <section className="section flex justify-between w-full h-full">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5 adminDashboard">
          <label className="text-2xl text-yellow-600 font-bold">Bank</label>
          <ul className="text-white mt-10">
            <Link className="flex" to="/admin">
              <FaHome />
              <span className="ml-2">Home</span>
            </Link>
            <Link className="flex hover:bg-yellow-600 hover:text-black p-2 active">
              <FaUsers />
              <span className="ml-2">All User</span>
            </Link>
            <button className="flex mt-40">
              <IoSettings />
              <span className="ml-2">Sign Out</span>
            </button>
          </ul>
        </aside>
        <main className="md:w-3/4 w-full bg-slate-300">
          <nav className="flex justify-between w-full md:bg-transparent bg-white md:shadow-none shadow-md md:p-4 p-2">
            <div>
              <label className="text-black font-bold">All User</label>
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
          <section className="section w-full">
            <h1 className="text-2xl ml-2 font-semibold">List Of All Users</h1>
          </section>
        </main>
      </section>
    </>
  );
};

export default Allusers;
