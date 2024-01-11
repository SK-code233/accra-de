import React from "react";
import "../fonts/fonts.css";

export default function Hero() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        /> */}
        <div class="text-center lg:w-2/3 w-full max-w-7xl">
          <h1 class="sm:text-4xsl myFont9 text-7hxl mt-7 mb-6 text-gray-900">
            Learn from home with experts
          </h1>
          <p class="mb-8 leading-relaxed myFont6 text-2xl">
            Unlock fluency in German, mentored by our seasoned experts, all from
            the convenience of your home.
          </p>
          <div class="flex justify-center">
            {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Watch Video
            </button> */}
            <button class="button2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 items-center focus:outline-none roundeds text-base mt-4 md:mt-0">
              Get Started
            </button>
            <button class="ml-4 button2 inline-flex items-center focus:outline-none roundeds text-base mt-4 md:mt-0">
              Check the Steps
            </button>
          </div>
        </div>
      </div>
      {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
    </section>

    // <section class="text-gray-600 body-font">
    //   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    //     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    //       <img
    //         class="object-cover object-center rounded"
    //         alt="hero"
    //         src="https://dummyimage.com/720x600"
    //       />
    //     </div>
    //     <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    //       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
    //         Knausgaard typewriter readymade marfa
    //       </h1>
    //       <p class="mb-8 leading-relaxed">
    //         Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
    //         swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}
