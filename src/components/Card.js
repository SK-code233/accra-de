import React from "react";
import "./Card.css";
import "../fonts/fontA.css";
import "./pattern.css";
// import 'animate.css';

// let carouselItems = document.querySelectorAll('.color:nth-child(1)');
// let activeIndex = 0;
// .color:nth-child(1)

const Card = () => {
  return (
    <div className="heroRow">
      <section className="numberOne mt-14 toFront">
        <h1 className="heroChild myFont animate__animated animate__fadeInUp">
          Join.
        </h1>
        <h1 className="heroChild myFont animate__animated animate__fadeInUp">
          Learn.
        </h1>
        <h1 className="heroChild myFont animate__animated animate__fadeInUp">
          Speak.
        </h1>
        <a href="##" className="box mt-16 animate__animated animate__fadeInUp bg-white">
          <h2 className="myFont text-2xl text-center boxA align-middle justify-center align-bottosm">
            Get started
          </h2>
          <h2 className="myFont text-center boxB patternThree"> </h2>
        </a>
      </section>
      {/* <section className="numberTwo"> */}
      <div className="containerss toBehind">
        <div className="palette animate__animated animate__fadeInLeft">
          <div className="color">
            {/* <span>264653</span> */}
            <img
              class="object-cover object-center roundeds imageCard"
              alt="hero"
              src={require("../images/image1.webp")}
            />
          </div>
          <div className="color">
            {/* <span>2A9D8F</span> */}
            <img
              class="object-cover object-center roundeds imageCard"
              alt="hero"
              src={require("../images/image2.webp")}
            />
          </div>
          <div className="color">
            {/* <span>E9C46A</span> */}
            <img
              class="object-cover object-center imageCard roundeds"
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
