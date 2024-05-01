import React from 'react'


// import Navi from './Navi';
import NaviB from './NaviB';
// import Hero from './Hero';
import Welcome from './Welcome';
import WeProvide from './WeProvideB';
// import WeProvide from './WeProvideC';
// import OurTeachers from './OurTeachers'
// import Steps from './Steps';
import Footer from './FooterC';
// import './carousels.css';
import Card from './Card';
import Testimonials from './Testimonials';
import Questions from './Questions';
// import Video from './Video';



function Home() {
  return (
    <div>
      <NaviB />
      <Card />
      <Welcome />
      {/* <Testimonials /> */}
      <WeProvide />
      <Questions />
      <Footer /> 
      {/* <OurTeachers />
      <Steps /> */}
      {/* <Navi /> */}
      {/* <Video /> */}
      {/* <Hero /> */}
      {/* <Video /> */}
      {/* <CarouselSwipes 
        className="carousels" /> */}
    </div>
  )
}

export default Home
