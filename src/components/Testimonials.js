import React from "react";
import "../fonts/fontA.css";
import "./WeprovB.css";
import "./pattern.css";
import Cards from "./CardMain";
// import "./pattern.css";

const Testimonials = () => {
  return (
    <div className=" pt-9 mt-10 flex">
      <section class="defos mt-5 md:w-1/3 flexing pl-20 bg-slate-200s">
        <div class="defos flex-wrapss max-w-48 max-w-80s myFont myFontBas pt-3">
          <p className=" pb-1">
            {" "}
            Testimonials <br />
          </p>
          <b className=" text-4xl pt-5s">What our students say.</b> <br />
          <p className=" mt-14s pt-3"> Always Ready To Help </p>
        </div>
      </section>

      <section class="defos mt-5 md:w-2/3">
        <Cards
          name="Mark Abrefi"
          desc=" This cheesy, juicy ultimate comforting lunch or quick and easy dinner
          recipe."
        />
        <Cards
          name="Princess Esi"
          desc=" This cheesy, juicy ultimate comforting lunch or quick and easy dinner
          recipe."
        />
        <Cards name="Gideon Ace" />
        <Cards
          name="Harold N. M."
          desc=" This cheesy, juicy ultimate comforting lunch or quick and easy dinner
          recipe."
        />
        <Cards name="Gladys A. Ackah" />

        {/* Names
        1. Harold 
        2. Gladys 
        3. Eyram
        4. Gideon
        5. Brigadier
        6. Princess
        7.  */}
      </section>
    </div>
  );
};

export default Testimonials;
