import React, { useState, useRef  } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Alert, Overlay, Popover } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/icons/profile1.png";
import LogoutButton from "../Logout/Logout";
import "../Dashboard/dashboard.css"


function AgentNav() {
    const [error] = useState("");
    const { currentUser } = useAuth();
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
        <p><a href="/homepage">Home</a></p>
          <p><a href="/agentdashboard">Dashboard</a></p>
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
          <LogoutButton />
          {/* <span className="logout" onClick={handleLogout}>
            Log Out
          </span> */}
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
          <p><a href="/homepage">Home</a></p>
          <p><a href="/agentdashboard">Dashboard</a></p>
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

        </>
    )    
}


export default AgentNav;