import "../../App.css";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios"; //
import PolarChart from "../../Components/PolarChart";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const { logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://equity-bqnkapp.onrender.com/bank/api/v1/profile",
        {
          withCredentials: true,
        }
      );
      setUsers(res.data.data.users);
      // console.log(res);
    };

    fetchUsers();
  }, []);

  // !delete function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(
          `https://equity-bqnkapp.onrender.com/bank/api/v1/userprofile/${id}`
        );
        setUsers(users.filter((user) => user._id !== id)); // Update UI by removing deleted user
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logOutHandler = () => {
    logout();
    localStorage.removeItem("token");
  };

  return (
    <>
      <section className="section flex justify-between w-full min-h-screen">
        <aside className="hidden md:block md:w-1/4 bg-slate-800 pb-14 shadow-md p-5 adminDashboard min-h-screen">
          <label className="text-2xl text-yellow-600 font-bold">Bank</label>
          <ul className="text-white mt-10">
            <Link className="flex hover:bg-yellow-600 hover:text-black p-2 active">
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
        <main className="md:w-3/4 w-full bg-slate-300 min-h-screen">
          <nav className="flex justify-between w-full md:bg-transparent bg-white md:shadow-none shadow-md md:p-4 p-2">
            <div>
              <label className="text-black font-bold">Admin Dashboard</label>
            </div>
            <ul className="md:flex hidden ">
              <FaBell size={20} />
              {/* <FaMessage className="ml-3" size={20} /> */}
              <FaUser size={20} className="ml-3" />
            </ul>
            <div
              className="md:hidden  block "
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
                to="/"
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

          <section className="section w-full p-4 min-h-screen">
            <h1 className=" ml-2 font-bold">Welcome Admin</h1>
            <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
              <PolarChart />
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              {" "}
              {/* Enable horizontal scrolling */}
              <h2 className="mt-10 font-bold">List of All The Users</h2>
              <table className="min-w-full bg-white mt-5">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">First Name</th>
                    <th className="py-2 px-4 border-b">Last Name</th>

                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td className="py-2 px-4 border-b">{user.firstName}</td>
                        <td className="py-2 px-4 border-b">{user.lastName}</td>

                        <td className="py-2 px-4 border-b">{user.email}</td>
                        <td className="py-2 px-4 border-b flex space-x-2">
                          {" "}
                          {/* Flexbox for buttons */}
                          <button className="bg-blue-500 text-white px-2 py-1 rounded">
                            <Link to={`/edit/${user._id}`}>Edit</Link>
                          </button>
                          <button className="bg-green-500 text-white px-2 py-1 rounded">
                            <Link to={`/userprofile/${user._id}`}>
                              View Profile
                            </Link>
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => handleDelete(user._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Admin;
