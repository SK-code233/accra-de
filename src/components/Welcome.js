import React from "react";
import "../fonts/fonts.css";

const Welcome = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-fonts sm:text-4xl myFont8 text-4hxl mb-4 text-gray-900">
              You are Welcome
              <br class="hidden lg:inline-block" />
              to <span className="accraDe"> AccraDeutsch </span>
            </h1>
            <p class="mb-8 leading-relaxed myFont5 text-xl">
              Welcome to <span className="accraDe">AccraDeutsch,</span> where we are dedicated to
              helping you learn and master the German language. Our experienced
              teachers and comprehensive curriculum cater to various learning
              levels, from beginners to advanced students. We are excited to
              announce that we now offer a free 2-day trial course for new
              students to experience our top-notch education.
            </p>
            <div class="flex justify-center">
              <button class="myFont5 button2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 items-center focus:outline-none text-base mt-4 md:mt-0">
                Get Started
              </button>
              <button class="myFont5 ml-4 button2 inline-flex items-center focus:outline-none text-base mt-4 md:mt-0">
                Check the Steps
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded image"
              alt="hero"
              src={require("../images/good-faces-MUAjN1w9lUA-unsplash.jpg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
