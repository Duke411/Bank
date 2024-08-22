import React from "react";
import "../App.css";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { PiGreaterThan } from "react-icons/pi";

import Image from "../assets/app_download_app_store.png";
import Image2 from "../assets/app_download_google_play.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="section foot">
        <div className="container w-full sm:w-4/5 m-auto p-4">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col sm:w-1/2 mb-6 sm:mb-0">
              <ul className="mb-4">
                <li className="font-semibold">Personal Banking</li>
                <li>Business Banking</li>
                <li>Mortgage</li>
                <li>Trust</li>
              </ul>
              <ul className="mb-4">
                <li className="font-semibold">Rates</li>
                <li>Investor Relations</li>
                <li>Open an Account</li>
                <li>Locations</li>
              </ul>
              <ul>
                <li className="font-semibold">Contact Us</li>
                <li>Online Banking Login</li>
                <li>Join Our Team</li>
              </ul>
            </div>
            <div className="flex flex-col sm:w-1/2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                <p className="font-semibold mr-4">Download The App</p>
                <div className="flex flex-wrap gap-2">
                  <img src={Image} alt="App Store" className="w-32" />
                  <img src={Image2} alt="Google Play" className="w-32" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-6">
                <p className="font-semibold mr-4">Stay up to date</p>
                <div className="flex gap-2">
                  <CiFacebook className="ml-1" size={20} />
                  <TiSocialTwitterCircular className="ml-1" size={20} />
                  <CiLinkedin className="ml-1" size={20} />
                  <CiYoutube className="ml-1" size={20} />
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">Sign Up for our Newsletter</p>
                <div className="flex  sm:flex-row rounded-md shadow-md">
                  <span className="w-3/4 sm:w-3/4 bg-white p-4 text-black mb-2 sm:mb-0">
                    Email
                  </span>
                  <span className="w-1/4 sm:w-1/4 bg-black p-4 flex items-center justify-center">
                    <PiGreaterThan color="yellow" size={25} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="ml-4 font-semibold text-2xl">Policy</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
