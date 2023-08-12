import React from "react";
import "./forms.css";
import brandImg from "../../assets/icons/brand.png"

const LoginForm = () => (
  <div className="formBody">
    <div className="logoContainer">
    <img src={brandImg} className="logo" alt=""/>
    </div>
    <div>
    <input type="email" autocomplete="off" id="email" placeholder="email" required/>
    <input type="password" autocomplete="off" id="password" placeholder="password" required/>
    <button className="submitButton"><a href="/agentadd">Log In</a></button>
    </div>
    <a href="/contact" className="loginLink">Dont have an account? Contact us for a link</a>
  </div>
);

export default LoginForm;
