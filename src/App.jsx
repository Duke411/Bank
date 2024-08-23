import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="location" element={<Location />} />
          <Route path="bankdashboard" element={<BankDashboard />} />
          <Route path="products" element={<Accounts />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="payments" element={<Payments />} />
          <Route path="cards" element={<Cards />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
