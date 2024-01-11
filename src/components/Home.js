import React from 'react'

import { Link } from "react-router-dom";
import Navi from './Navi';
import Hero from './Hero';
import Welcome from './Welcome';
import WeProvide from './WeProvide';
import OurTeachers from './OurTeachers'
import Steps from './Steps';
import ContactUs from './ContactUs'
import Footer from './Footer';
import CarouselSwipes from './CarouselSwipes';


function Home() {
  return (
    <div>
      <Navi />
      {/* <Hero />
      <Welcome />
      <WeProvide />
      <OurTeachers />
      <Steps />
      <ContactUs /> */}
      <CarouselSwipes />
      <Footer /> 
    </div>
  )
}

export default Home

{/* <h1>Home Page</h1>
            <br />
            <ul>
                <li> */}
                    {/* Endpoint to route to Home component */}
                //     <Link to="/">Home</Link>
                // </li>
                // <li>
                    {/* Endpoint to route to About component */}
                //     <Link to="/about">About</Link>
                // </li>
                // <li>
                    {/* Endpoint to route to Contact Us component */}
                    // <Link to="/contactus">Contact Us</Link>
            //     </li>
            // </ul>