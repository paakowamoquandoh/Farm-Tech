import React, { useState, useRef  } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {  Button, Overlay, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero"
import Footer from "../Footer/Footer"
import HomeImg from "../../assets/images/homepage/back.jpg"



function WelcomePage() {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <>
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
        <div ref={ref}>
        <Button onClick={handleClick} className="signIn">
            Log In As
        </Button>
  
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Body>
              <Link to="/login" className="agentsignIn">
               Agent
               </Link>
            </Popover.Body>
            <Popover.Body>
            <Link to="/adminlogin" className="adminsignIn">
                Admin
               </Link>
            </Popover.Body>
          </Popover>
        </Overlay>
         </div>
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
              <Link to="/login" className="signIn">
               Log In
               </Link>
            </div>
          </div>
          )}
        </div>
      </div>
      <Hero 
          className="homeHero"
          textClass="heroText"
          heroImage={HomeImg}
          title="Transforming Farming Through Technology"
          text="Discover innovative solutions that revolutionize agriculture, increase yields, and ensure sustainable farming practices. Join us in shaping the future of farming with cutting-edge technology."
          btnText="Get Started"
          btnClass="homeBtn"
          url="/login"
          />
          <Footer />
        </>
    )    
}


export default WelcomePage;