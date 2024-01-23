import React from "react";
import "../fonts/fontA.css";

export default function NaviB() {
  return (
    <header className="text-gray-600 body-font mt-0 mb-10">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center animate__animated animate__fadeInDown">
        <a className="flex items-center mb-4 md:mb-0" href="www.google.com">
          <img
            src={require("../Accra Deutsch logos.png")}
            alt="Accra Deutsch Logo"
            className="logo animate__animated animate__fadeInLeft"
          />
        </a>
        <nav className=" mt-3 md:ml-28 ml-0 md:mr-autoa mr-80 flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-s myFontBa text-xl hover:text-gray-900 mr-12"
            href="www.google.com"
          >
            About Us
          </a>
          <a
            className="mr-5s myFontBa text-xl hover:text-gray-900 mr-12"
            href="www.google.com"
          >
            Course
          </a>
          <a
            className="mr-5s myFontBa text-xl hover:text-gray-900 mr-12"
            href="www.google.com"
          >
            Discover
          </a>
          <a
            className="mr-5s myFontBa text-xl hover:text-gray-900"
            href="www.google.com"
          >
            Services
          </a>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          
        </button> */}
        <button className="button2 myFont inline-flex items-center focus:outline-none roundeds text-base mt-0 md:mt-0">
          Hover me
        </button>
      </div>
    </header>
  );
}
