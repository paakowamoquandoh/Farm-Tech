import React, { useState, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Alert, Overlay, Popover } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/icons/profile.png";

function HomeNav() {
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
        navigate.push("/");
      } catch {
        setError("Failed to log out");
      }
    }
  
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
            <button className="add-btn" title="Add New Project">
              <svg
                className="btn-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
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
                <span>Admin D. Name</span>
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
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Popover.Header as="h3">Admin Profile</Popover.Header>
                  <Popover.Body>
                    <strong>Email:</strong> {userEmail}
                    <Link
                      to="/admin"
                      className="btn btn-primary w-100 mt-2 mb-1"
                    >
                      Update Profile
                    </Link>
                    <span className="logout" onClick={handleLogout}>
                      Log Out
                    </span>
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
                <div className="search-wrapper">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="feather feather-search"
                    viewBox="0 0 24 24"
                  >
                    <defs></defs>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
        </>
    )    
}


export default HomeNav;