import React from "react";
import "./forms.css";
import brandImg from "../../assets/icons/brand.png"

const SignupForm = () => (
  <div className="formBody">
    <div className="logoContainer">
    <img src={brandImg} className="logo" alt=""/>
    </div>
    <div>
        <input type="text" autocomplete="off" id="name" placeholder="name"/>
        <input type="email" autocomplete="off" id="email" placeholder="email"/>
        <input type="password" autocomplete="off" id="password" placeholder="password"/>
        <input type="text" autocomplete="off" id="number" placeholder="number"/>
        <input type="checkbox" checked class="checkBox" id="termsAndConditions"/>
        <label for="termsAndConditions">agree to our <a href="/">terms and conditions</a></label><br/>
        <input type="checkbox" class="checkBox" id="notification"/>
        <label for="notification"><a href="/">recieve upcoming offers or events</a></label>
        <button class="submitButton">Create Account</button>

    </div>
    <a href="/login" className="loginLink">already have an account? Log in here</a>
  
  </div>
);

export default SignupForm;
