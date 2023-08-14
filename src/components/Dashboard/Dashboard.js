import React, { useState, useRef  } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {  Button, Alert, Overlay, Popover } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css"
import Hero from "../Hero/Hero"
import Footer from "../Footer/Footer"
import AddFarmer from "../../components/AddFarmer/AddFarmer"
import HomeImg from "../../assets/images/homepage/back.jpg"
import profileIcon from "../../assets/icons/profile1.png"


export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const [toggleMenu, setToggleMenu] = useState(false);

  // Check if the user is not authenticated
  if (!currentUser) {
    return (
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
          Log In
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
          <Link to="" className="adminsignIn">
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
    );
  }

  // If user is authenticated, display the dashboard content
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
       <div className="profileIcon" ref={ref}>
        <img onClick={handleClick} src={profileIcon} alt=""/>
        {/*tooltip here  */}
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          {error && <Alert variant="danger">{error}</Alert>}  
          <Popover.Header as="h3">Agent Profile</Popover.Header>
          <Popover.Body>
            <strong>Email:</strong> {currentUser.email} 
            <Link to="/update-profile" className="btn btn-primary w-100 mt-2 mb-1">
            Update Profile
          </Link>
          <span onClick={handleLogout}>
            Log Out
          </span>
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
           <span className="profileIcon">
             <img src={profileIcon} alt=""/>
            {/*tooltip here  */}
           </span>
          </div>
        </div>
        )}
      </div>
    </div>
     {/* add farmer */}
     <AddFarmer />
     {/*  */}
    </>
  );
}
