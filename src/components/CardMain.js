import React from "react";
import "./CardMain.css";
import "../fonts/fontA.css";
import "./pattern.css";

const Cards = (props) => {
  return (
    // <div className="heroRow">
      <div class="cards m-2 myFont5 button2 stext-base ">
        <p class="description">
         {props.desc}
        </p>
        <em class="link">
        { props.name }
        </em>
      </div>
    // </div>
  );
};

export default Cards;

