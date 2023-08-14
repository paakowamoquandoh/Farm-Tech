import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Hero from "../Hero/Hero"
import HomeImg from "../../assets/images/homepage/back2.jpg"
import Footer from "../Footer/Footer";

export default function ContactUs() {
    const [toggleMenu, setToggleMenu] = useState(false);
  

  return (
    
    <>
     {/* navbar */}
    <div className="mediaNavbar">
      <div className="mediaNavbar-links">
        <div className="mediaNavbarLogo">
          <h1>Excellent<i className='goldText'>Tech</i></h1>
        </div>
        <div className="mediaNavbar-links_container">
        <p><a href="/">Home</a></p>
          <p><a href="/contactus">Contact Us</a></p>
        </div>
      </div>
      <div className="mediaNavbar-sign">
       <span >
       </span>
      </div>
      <div className="mediaNavbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mediaNavbar-menu_container scale-up-center">
          <div className="mediaNavbar-menu_container-links">
          <p><a href="/">Home</a></p>
          <p><a href="/contactus">Contact Us</a></p>
          </div>
          <div className="mediaNavbar-menu_container-links-sign">
          </div>
        </div>
        )}
      </div>
    </div> 
    <Hero 
        className="homeHero1"
        textClass="heroText"
        heroImage={HomeImg}
        title="Our Contact Page"
        text="Get in touch with Excellent tech."
        /> 
        <Footer />    
    </>
  )
}
