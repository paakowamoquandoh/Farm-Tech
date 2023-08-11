import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';
import { menuList } from './navlinks';

const MainNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mediaNavbar">
      <div className="mediaNavbar-links">
        <div className="mediaNavbarLogo">
          <h1>Excellent<i className='goldText'>Tech</i></h1>
        </div>
        <div className="mediaNavbar-links_container">
        {menuList.map((item, index) => (
          <p key={index}>
            <Link to={item.url} className={item.cName} activeClassName={item.active}>
              {item.title}
            </Link>
          </p>
        ))}
      </div>
      </div>
      <div className="mediaNavbar-sign">
       {/* Profile Icons here */}
      </div>
      <div className="mediaNavbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mediaNavbar-menu_container scale-up-center">
             <div className="mediaNavbar-menu_container-links">
               {menuList.map((item, index) => (
              <p key={index}>
               <Link to={item.url} className={item.cName} activeClassName={item.active}>
              {item.title}
              </Link>
               </p>
              ))}
            </div>
          <div className="mediaNavbar-menu_container-links-sign">
            {/* profile here */}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
