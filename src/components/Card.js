import React from "react";
import "./Card.css";
import "../fonts/fontA.css";
import "./pattern.css";

// let carouselItems = document.querySelectorAll('.color:nth-child(1)');
// let activeIndex = 0;
// .color:nth-child(1)

const Card = () => {
  return (
    <div className="heroRow">
      <section className="numberOne mt-14">
        <h1 className="heroChild myFont">Watch.</h1>
        <h1 className="heroChild myFont">Learn.</h1>
        <h1 className="heroChild myFont">Grow.</h1>
        <span className="box mt-16">
          <h2 className="myFont text-2xl text-center boxA align-middle justify-center align-bottosm">Get started</h2>
          <h2 className="myFont text-center boxB pattern"> </h2>
        </span>
      </section>
      {/* <section className="numberTwo"> */}
      <div className="containerss">
        <div className="palette">
          <div className="color">
            {/* <span>264653</span> */}
            <img
              class="object-cover object-center rounded image"
              alt="hero"
              src={require("../images/image1.webp")}
            />
          </div>
          <div className="color">
            {/* <span>2A9D8F</span> */}
            <img
              class="object-cover object-center rounded image"
              alt="hero"
              src={require("../images/image2.webp")}
            />
          </div>
          <div className="color">
            {/* <span>E9C46A</span> */}
            <img
              class="object-cover object-center rounded image"
              alt="hero"
              src={require("../images/image3.webp")}
            />
          </div>
        </div>
      </div>
      {/* </section> */}
      {/* <section></section> */}
    </div>
  );
};

export default Card;
