import React from "react";
import "./Card.css";

// let carouselItems = document.querySelectorAll('.color:nth-child(1)');
// let activeIndex = 0;
// .color:nth-child(1)

const Card = () => {
  return (
    <div className="heroRow">
      <section className="numberOne">
        <h1 className="heroChild">Watch.</h1>
        <h1 className="heroChild">Learn.</h1>
        <h1 className="heroChild">Grow.</h1>
        <p>Let's help you get started !!</p>
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
