import React from 'react'


// import Navi from './Navi';
import NaviB from './NaviB';
// import Hero from './Hero';
import Welcome from './Welcome';
import WeProvide from './WeProvide';
import OurTeachers from './OurTeachers'
import Steps from './Steps';
import Footer from './Footer';
import './carousels.css';
import Card from './Card';


function Home() {
  return (
    <div>
      <NaviB />
      {/* <Navi /> */}
      <Card />
      {/* <Hero /> */}
      <Welcome />
      <WeProvide />
      <OurTeachers />
      <Steps />
      <Footer /> 
      {/* <CarouselSwipes 
        className="carousels" /> */}
    </div>
  )
}

export default Home
