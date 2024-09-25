import React, { useEffect, useContext } from "react";
import Home from "./Pages/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Forgot from "./Pages/Forgot";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Location from "./Pages/Location";
import BankDashboard from "./Pages/Dashboard/BankDashboard";
import Accounts from "./Pages/Dashboard/Accounts";
import Transactions from "./Pages/Dashboard/Transactions";
import Payments from "./Pages/Dashboard/Payments";
import Cards from "./Pages/Dashboard/Cards";
import Settings from "./Pages/Dashboard/Settings";
import Admin from "./Pages/Dashboard/Admin";
import Alluser from "./Pages/Dashboard/Allusers";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AuthContext from "./store/auth-context";
import EditUser from "./Pages/Dashboard/Edituser";
import ViewProfile from "./Pages/Dashboard/ViewProfile";
import AdminRoute from "./Pages/AdminRoute";
// import ProtectedRoute from "./Pages/ProtectedRoutes";
import AuthRoute from "./Pages/AuthRoute";
import Adminloan from "./Components/Adminloan";
import AllLoan from "./Pages/Dashboard/AllLoan";
import MoneyTransfer from "./Pages/Dashboard/MoneyTransfer";

const App = () => {
  const authCxt = useContext(AuthContext);

  const isLoggedIn = authCxt.isLoggedIn;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home />} />
          {
            <Route
              path="login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
          }
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="location" element={<Location />} />
          {isLoggedIn && (
            <Route path="bankdashboard" element={<BankDashboard />} />
          )}
          {isLoggedIn && <Route path="products" element={<Accounts />} />}
          <Route path="transactions" element={<Transactions />} />
          <Route path="payments" element={<Payments />} />
          <Route path="cards" element={<Cards />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route
            path="allloan"
            element={
              <AdminRoute>
                <AllLoan />
              </AdminRoute>
            }
          />
          <Route path="alluser" element={<Alluser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="userprofile/:id" element={<ViewProfile />} />
          <Route path="adminloan" element={<Adminloan />} />
          <Route path="moneytransfer" element={<MoneyTransfer />} />

          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
