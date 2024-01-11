import React from "react";
import "../fonts/fonts.css";

export default function Navi() {
  return (
    <header className="text-gray-600 body-font mt-4">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex items-center mb-4 md:mb-0" href="www.google.com">
          <img
            src={require("../AccraDeutschlogo.png")}
            alt="Accra Deutsch Logo"
            className="logo"
          />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-smyFont6 text-xl hover:text-gray-900 mr-12"
            href="www.google.com"
          >
            About Us
          </a>
          <a
            className="mr-5s myFont6 text-xl hover:text-gray-900 mr-12"
            href="www.google.com"
          >
            Course
          </a>
          <a
            className="mr-5s myFont6 text-xl hover:text-gray-900 mr-12"
            href="www.google.com"
          >
            Discover
          </a>
          <a
            className="mr-5s myFont6 text-xl hover:text-gray-900"
            href="www.google.com"
          >
            Services
          </a>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          
        </button> */}
        <button className="button2 inline-flex items-center focus:outline-none roundeds text-base mt-4 md:mt-0">
          Hover me
        </button>
      </div>
    </header>
  );
}
