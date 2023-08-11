import React from 'react';
import "./login.css";
import alertImg from "../../assets/icons/warning.png";
import loaderImg from "../../assets/icons/work-in-progress.png";
import logoImg from "../../assets/icons/brand.png";


function LoginForm() {
  return (
    <>
      <img src={loaderImg} className="loader" alt="" />
      <div className="alertArea">
        <img src={alertImg} className="errorIcon" alt="" />
        <p className="errorText">Error message</p>
      </div>

      <div className="logoContainer">
        <img src={logoImg} className="logo" alt="" />
        <div>
          <input type="email" autoComplete="off" id="email" placeholder="email" />
          <input type="password" autoComplete="off" id="password" placeholder="password" />

          <button className="submitButton">Log In</button>
        </div>
        <a href="/signup" className="loginLink">
          Don't have an account? Create One
        </a>
      </div>
    </>
  );
}

export default LoginForm;
