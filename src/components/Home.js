import React from "react";

// import Navi from './Navi';
import NaviB from "./NaviB";
// import Hero from './Hero';
import Welcome from "./Welcome";
import WeProvide from "./WeProvideB";
// import WeProvide from './WeProvideC';
// import OurTeachers from './OurTeachers'
import Steps from './Steps';
import Footer from "./FooterC";
// import './carousels.css';
import Card from "./Card";
// import Cards from './CardMain';
import Testimonials from "./Testimonials";
import Questions from "./Questions";
// import Video from './Video';

function Home() {
  return (
    <div>
      <NaviB />
      <Card />
      <Welcome />
      {/* <Cards /> */}
      <Testimonials />
      {/* <Steps />  */}
      <WeProvide />
      <Questions />
      <Footer />
      {/* <OurTeachers />
      {/* <Navi /> */}
      {/* <Video /> */}
      {/* <Hero /> */}
      {/* <Video /> */}
      {/* <CarouselSwipes 
        className="carousels" /> */}
    </div>
  );
}

export default Home;
