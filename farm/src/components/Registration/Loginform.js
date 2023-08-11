import React from "react";
import "./forms.css";
import brandImg from "../../assets/icons/brand.png"

const LoginForm = () => (
  <div className="formBody">
    <div className="logoContainer">
    <img src={brandImg} className="logo" alt=""/>
    </div>
    <div>
    <input type="email" autocomplete="off" id="email" placeholder="email"/>
    <input type="password" autocomplete="off" id="password" placeholder="password"/>
    <button className="submitButton">Log In</button>
    </div>
    <a href="/signup" className="loginLink">Dont have an account? Create One</a>
  </div>
);

export default LoginForm;
