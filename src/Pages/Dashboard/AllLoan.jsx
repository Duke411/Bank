import "../../App.css";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const AllLoan = () => {
  const { logout } = useContext(AuthContext);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get(
          "https://equity-bqnkapp.onrender.com/bank/api/v1/getAllLoans"
        );
        setLoans(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching loans:", error);
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) return <div>Loading...</div>;

  const logOutHandler = () => {
    logout();
    localStorage.removeItem("token");
  };

  return (
    <>
      <section className="section flex justify-between w-full h-full min-h-screen">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5 adminDashboard min-h-screen">
          <label className="text-2xl text-yellow-600 font-bold">Bank</label>
          <ul className="text-white mt-10">
            <Link
              className="flex hover:bg-yellow-600 hover:text-black p-2 active"
              to="/admin"
            >
              <FaHome />
              <span className="ml-2">Home</span>
            </Link>
            <Link className="flex" to="/allloan">
              <FaUsers />
              <span className="ml-2">All Loan</span>
            </Link>
            <button className="flex mt-40" onClick={logOutHandler}>
              <IoSettings />
              <span className="ml-2">Sign Out</span>
            </button>
          </ul>
        </aside>
        <main className="md:w-3/4 w-full bg-slate-300">
          <nav className="flex justify-between w-full md:bg-transparent bg-white md:shadow-none shadow-md md:p-4 p-2">
            <div>
              <label className="text-black font-bold">Admin Dashboard</label>
            </div>
            <ul className="md:flex hidden ">
              <FaBell size={20} />
              <FaUser size={20} className="ml-3" />
            </ul>
            <div
              className="md:hidden block"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RxHamburgerMenu size={25} />
            </div>
          </nav>

          {/* Navbar menu for small screens */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } bg-slate-800 p-4 absolute w-full z-10`}
          >
            <ul className="text-white">
              <Link
                className="flex hover:bg-yellow-600 hover:text-black p-2"
                to="/admin"
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
              <Link
                className="flex hover:bg-yellow-600 hover:text-black p-2"
                to="/allloan"
              >
                <FaUsers />
                <span className="ml-2">All Loan</span>
              </Link>
              <button
                className="flex hover:bg-yellow-600 hover:text-black p-2 mt-5"
                onClick={logOutHandler}
              >
                <IoSettings />
                <span className="ml-2">Sign Out</span>
              </button>
            </ul>
          </div>

          <section>
            <div className="container mx-auto p-4">
              <h2 className="text-2xl font-bold mb-4">All Loan Applications</h2>
              {loans.length === 0 ? (
                <p>No loan applications available.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto bg-white">
                    <thead>
                      <tr className="bg-gray-200 text-left">
                        <th className="px-4 py-2">First Name</th>
                        <th className="px-4 py-2">Last Name</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">City</th>
                        <th className="px-4 py-2">State</th>
                        <th className="px-4 py-2">Zip</th>
                        <th className="px-4 py-2">SSN</th>
                        <th className="px-4 py-2">DOB</th>
                        <th className="px-4 py-2">High School</th>
                        <th className="px-4 py-2">Graduation Year</th>
                        <th className="px-4 py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loans.map((loan, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-2">{loan.FName}</td>
                          <td className="px-4 py-2">{loan.LastName}</td>
                          <td className="px-4 py-2">{loan.Addr}</td>
                          <td className="px-4 py-2">{loan.City}</td>
                          <td className="px-4 py-2">{loan.State}</td>
                          <td className="px-4 py-2">{loan.Zip}</td>
                          <td className="px-4 py-2">{loan.SSN}</td>
                          <td className="px-4 py-2">{loan.DOB}</td>
                          <td className="px-4 py-2">{loan.HighSchool}</td>
                          <td className="px-4 py-2">{loan.YearOfGraduation}</td>
                          <td className="px-4 py-2">{loan.LoanAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default AllLoan;
