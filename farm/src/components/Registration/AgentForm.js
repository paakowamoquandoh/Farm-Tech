import React from "react";
import brandImg from "../../assets/icons/brand.png"
import "./forms.css"

const AgentFrom = () => (
<div className="formBody">
<div className="logoContainer">
    <img src={brandImg} className="logo" alt=""/>
    </div>
    <div className="sellerUser">
    <p className="sellerHeading">Do you want to become an agent?</p>
    <p className="sellDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptas ullam rem cupiditate quos eum similique totam ducimus, harum consequuntur alias eligendi! Possimus aliquam incidunt beatae corrupti accusantium cum iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum placeat explicabo quos quae sint suscipit itaque iste rem, doloremque magnam corrupti autem maxime incidunt perferendis ipsa, deserunt consectetur inventore. Alias?</p>
    <a href="#form">Appy below</a>
   </div>

   
   <div id="form" class="applicationForm">
    <input type="text" name="" id="businessName" placeholder="business name / company name / shop name"/>
    <textarea cols="30" rows="10" id="addBusiness" placeholder="address"></textarea>
    <textarea cols="30" rows="10" id="about" placeholder="about"></textarea>
    <input type="text" id="number" placeholder="number"/>
    <input type="checkbox" checked class="checkBox" id="termsAndConditions"/>
    <label for="termsAndConditions">agree to our <a href="/">terms and conditions</a></label><br/>
    <input type="checkbox" checked class="checkBox" id="validInfo"/>
    <label for="validInfo">all info is valid</label>
    <button class="submitButton" id="applicationFormBtn">apply</button>
   </div>
   
</div>
);

export default AgentFrom;
