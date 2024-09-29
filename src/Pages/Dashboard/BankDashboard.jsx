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
import { FaSackDollar } from "react-icons/fa6";
import Chart from "../../Components/Chart";
import { FaBitcoin } from "react-icons/fa6";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import emailjs from "emailjs-com";
import Image from "../../assets/SAB (2).png";

const BankDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(() => {
    // Initialize from localStorage if available
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Initialize Pusher client
    const pusher = new Pusher("605210a41434fa0e16f5", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      // console.log("Received user update:", data.user.accountbalance);

      const previousBalance = userData ? userData.accountbalance : 0;
      const newBalance = data.user.accountbalance;

      if (previousBalance !== newBalance) {
        setUserData(data.user); // Update the user data in real time
        localStorage.setItem("userData", JSON.stringify(data.user));

        const templateParams = {
          to_name: `${data.user.firstName}`,
          to_email: `${data.user.email}`,
          from_name: "Equity Bank",
          message: `Your account has been successfully credited with ${newBalance}. 
             
          Details:

          Date: ${Date.now()}
          Transaction Type: Credit
          Amount:${newBalance}
          Account Number: ${user.bankAccountNumber}
          Available Balance: ${newBalance}
  
          If you have any questions or need further assistance, 
          please don't hesitate to contact us. Thank you for choosing Equity bank!.`,
        };

        emailjs
          .send(
            "service_tjrpzrb", // Replace with your Email.js service ID
            "template_wpx3ihe", // Replace with your Email.js template ID
            templateParams,
            "_WtjZmY5MwFdDHB9N" // Replace with your Email.js user ID
          )
          .then(
            (response) => {
              console.log(
                "Email sent successfully!",
                response.status,
                response.text
              );
            },
            (error) => {
              console.error("Failed to send email:", error);
            }
          );
      }
    });

    return () => {
      pusher.unsubscribe("my-channel");
    };
  }, [userData]);

  // useEffect(() => {
  //   // If no user data is found in context or localStorage, make an API call
  //   if (!userData) {
  //     const fetchUserData = async () => {
  //       try {
  //         const res = await axios.get(
  //           "https://equity-bqnkapp.onrender.com/bank/api/v1/login",
  //           {
  //             withCredentials: true, // If you're using cookies for authentication
  //           }
  //         );
  //         // setUserData(res.data.data.user);
  //         localStorage.setItem("userData", JSON.stringify(res.data.data.user)); // Save to localStorage
  //       } catch (error) {
  //         console.error("Failed to fetch user data:", error);
  //       }
  //     };
  //     fetchUserData();
  //   }
  // }, [userData]);

  useEffect(() => {
    // Simulate fetching transactions from an API or database
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(
          `https://equity-bqnkapp.onrender.com/bank/api/v1/transactions/${user._id}`
        ); // Replace with your API endpoint
        setTransactions(res.data.data);
        // console.log(`Api userdata`, res.data); // Assuming res.data is an array of transactions
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    };

    fetchTransactions();
  }, [user]);

  const logOutHandler = () => {
    logout();
    localStorage.removeItem("userData");
  };
  // if (!userData) return <div>Loading...</div>;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="section flex justify-between w-full h-full">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5">
          <label className="text-2xl text-yellow-600 font-bold">
            <img src={Image} alt="label" />
          </label>
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
            <div className="md:hidden  block" onClick={toggleMenu}>
              <RxHamburgerMenu size={25} />
            </div>
          </nav>
          {/* //! */}
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

          <section className="section w-full">
            <div className="ml-3">
              <h1 className="font-bold text-black text-2xl">
                Welcome
                <span className="ml-3">
                  {user.firstName} - {user.lastName}
                </span>
              </h1>
              <h1 className="font-bold text-black">
                Account Number <span>{user.bankAccountNumber}</span>
              </h1>
            </div>
            <img src={user.profileImage} alt="" />
            <div className="md:flex block md:w- container">
              <div>
                <div className="md:flex justify-between block md:p-none p-2 ">
                  <div className="bg-white md:rounded-md shadow-md md:w-48  h-24 md:ml-3 mb-3 sm:mb-none p-4">
                    <FaSackDollar color="purple" />
                    <h1 className="font-bold text-2xl">
                      $
                      {userData ? userData.accountbalance : user.accountbalance}
                    </h1>
                    <p className="font-semibold">A/C Balance</p>
                  </div>
                  <div className="bg-white md:rounded-md shadow-md md:w-48 h-24 md:ml-3 mb-3 sm:mb-none p-4">
                    <FaSackDollar color="orange" />
                    <h1 className="font-bold text-2xl">${user.income}</h1>
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
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-600 text-white">
                          <th className="p-3">Name</th>
                          <th className="p-3">Type</th>
                          <th className="p-3">Date</th>
                          <th className="p-3">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.length > 0 ? (
                          transactions.map((transaction, index) => (
                            <tr key={index} className="border-t">
                              <td className="py-3 px-4 text-sm">
                                {transaction.admin}
                              </td>
                              <td className="py-3 px-4 text-sm">
                                {transaction.amount}
                              </td>
                              <td className="py-3 px-4 text-sm">
                                {transaction.type}
                              </td>
                              <td className="py-3 px-4 text-sm">
                                {transaction.date}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="text-center py-3">
                              No transactions found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="md:w-1/4 w-full mt-4 relative">
                <h3 className="font-bold">My Cards</h3>
                <div className="atm w-full relative z-20 ml-3">
                  <h1 className="text-white font-bold text-2xl p-2">VISA</h1>
                  <p className="p-2 text-white font-bold">6783 5647 2367 199</p>
                  <p className="p-2 text-white font-bold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className=" text-white font-bold ml-44 ">11/24</p>
                </div>
                <div className="atm2 w-full absolute top-8 z-10 left-7"></div>
                <div className="mt-8 ml-2 font-bold">
                  <h3>Quick Transactions</h3>
                  <Link to="/moneytransfer">
                    <button className="bg-slate-800 rounded-lg text-white font-semibold shadow-lg p-4">
                      Transfer
                    </button>
                  </Link>

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
