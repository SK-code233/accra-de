import React from 'react'


// import Navi from './Navi';
import NaviB from './NaviB';
// import Hero from './Hero';
import Welcome from './Welcome';
import WeProvide from './WeProvideB';
// import OurTeachers from './OurTeachers'
// import Steps from './Steps';
import Footer from './FooterC';
// import './carousels.css';
import Card from './Card';
// import Video from './Video';



function Home() {
  return (
    <div>
      <NaviB />
      {/* <Navi /> */}
      <Card />
      {/* <Hero /> */}
      <Welcome />
      <WeProvide />
      {/* <OurTeachers />
      <Steps /> */}
      <Footer /> 
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <CarouselSwipes 
        className="carousels" /> */}
    </div>
  )
}

export default Home
