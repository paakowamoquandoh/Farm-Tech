import React, { useState, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Overlay, Popover } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import avatar from "../../assets/icons/profile.png";
function HomeNav() {
    const { currentUser } = useAuth();
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    const [toggleMenu, setToggleMenu] = useState(false);
  
    const userEmail = currentUser ? currentUser.email : "";
  
    return(
        <>
          <div className="mediaNavbar">
          <div className="mediaNavbar-links">
            <div className="mediaNavbarLogo">
              <h1 className="text-white">
                Excellent<i className="goldText">Tech</i>
              </h1>
            </div>
            {/* <div className="search-wrapper">
          <input className="search-input" type="text" placeholder="Search"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-search" viewBox="0 0 24 24">
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div> */}
          </div>
          <div className="app-header-right">
            <button className="notification-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <div className="profile-btn" ref={ref}>
              <div onClick={handleClick}>
                <img src={avatar} alt="" />
                <span>Peni H.</span>
              </div>
              {/*tooltip here  */}
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Header as="h3">Admin Profile</Popover.Header>
                  <Popover.Body>
                    <strong>Email:</strong> {userEmail}
                    <Link
                      to="/admin"
                      className="btn btn-primary w-100 mt-2 mb-1"
                    >
                      Update Profile
                    </Link>
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          </div>
          <div id="mobile" className="mobileNav">
            <ion-icon
              id="mobileMenu"
              className="mobileMenu"
              size="large"
              name="menu-outline"
            ></ion-icon>
          </div>
          <div className="mediaNavbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#000"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#000"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="mediaNavbar-menu_container scale-up-center">
               <ul>
                <li><a href="/admin">Home</a></li>
                <li><a href="/admin/admintable">Tables</a></li>
                <li><a href="/admin/reports">Reports</a></li>
                <li><a href="/admin/settting">Settings</a></li>
               </ul>
              </div>
            )}
          </div>
        </div>
        </>
    )    
}


export default HomeNav;