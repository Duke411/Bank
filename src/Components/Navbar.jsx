import React, { useState, useContext } from "react";
import { IoMdContact } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Image from "../assets/SAB (2).png";

const navBar_label = ["Personal", "Business", "Mortgage", "About"];

const extraLable = ["Contact", "Location", "Open account", "login"];

const Navbar = () => {
  const authCntxt = useContext(AuthContext);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <React.Fragment>
      <nav className="p-3 shadow-lg bg-white box hidden sm:block">
        <div className="container w-4/5 m-auto flex justify-between flex-wrap">
          <Link to="/" className="text-2xl font-bold pt-2">
            <img src={Image} width={150} />
          </Link>
          <ul className="list-none font-semibold flex justify-between p-2 flex-wrap">
            {navBar_label.map((item, index) => {
              if (item === "About") {
                return (
                  <Link key={index} to="/about">
                    <li className="ml-4 hover:border-b-4 hover:border-yellow-400">
                      {item}
                    </li>
                  </Link>
                );
              } else {
                return (
                  <Link key={index}>
                    <li className="ml-4 hover:border-b-4 hover:border-yellow-400">
                      {item}
                    </li>
                  </Link>
                );
              }
            })}
          </ul>
          {!authCntxt.isLoggedIn && (
            <div className="list-none font-semibold flex justify-between p-2">
              {extraLable.map((item, index) => {
                if (item === "Open account" || item === "login") {
                  return (
                    <li
                      key={index}
                      className="ml-2 bg-yellow-500 text-black px-4 py-2 rounded "
                    >
                      <Link to="/login">{item}</Link>
                    </li>
                  );
                } else if (item === "Contact") {
                  return (
                    <Link
                      key={index}
                      to="/contact"
                      className="hover:border-b-4 hover:border-yellow-400"
                    >
                      {item}
                    </Link>
                  );
                } else if (item === "Location") {
                  return (
                    <Link
                      key={index}
                      to="/location"
                      className="hover:border-b-4 hover:border-yellow-400 ml-3"
                    >
                      {item}
                    </Link>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="ml-2 hover:border-b-4 hover:border-yellow-400 hover:cursor-pointer"
                    >
                      {item}
                    </li>
                  );
                }
              })}
            </div>
          )}

          {authCntxt.isLoggedIn && (
            <Link to="/bankdashboard">
              <IoMdContact size={25} />
            </Link>
          )}
        </div>
      </nav>
      <nav className="p-3 shadow-lg bg-white box sm:hidden flex justify-between ">
        <div className="w-3/4 flex justify-between">
          <Link to="/" className="text-2xl font-bold ">
            <img src={Image} width={150} />
          </Link>
          <Link to="/login">
            <IoMdContact size={30} className="hover:cursor-pointer" />
          </Link>
        </div>
        <div className="" onClick={handleClick}>
          {!active ? (
            <RxHamburgerMenu size={30} className="hover:cursor-pointer" />
          ) : (
            <IoMdClose size={30} className="hover:cursor-pointer" />
          )}
        </div>
        <div className={`navlink ${active ? "show" : ""}  w-full bg-black`}>
          <div>
            <div className="flex w-full justify-between bg-yellow-500 text-black font-semibold">
              <Link to="/contact" className="bord p-4 hover:cursor-pointer">
                <p>Contact</p>
              </Link>
              <Link
                to="/location"
                className="bordLeft p-4 hover:cursor-pointer"
              >
                <p>Locations</p>
              </Link>
            </div>
            <hr />
            <div className="text-center bg-yellow-500 p-4 font-semibold text-black hover:cursor-pointer">
              <Link to="/signup">Open An Account</Link>
            </div>
          </div>
          <ul className="ml-3 mt-3">
            <Link>
              <li className="mt-2 font-semibold hover:cursor-pointer">
                Personal
              </li>
            </Link>
            <li className="mt-2 font-semibold hover:cursor-pointer">
              Business
            </li>
            <li className="mt-2 font-semibold hover:cursor-pointer">
              Mortgage
            </li>
            {/* <li className="mt-2 font-semibold hover:cursor-pointer">
              Investors
            </li> */}
            <Link to="/about">
              <li className="mt-2 font-semibold hover:cursor-pointer">About</li>
            </Link>
            {/* <li className="mt-2 font-semibold hover:cursor-pointer">
              Insights
            </li> */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
