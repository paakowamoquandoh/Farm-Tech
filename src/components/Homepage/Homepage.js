import {  } from "./homepage.css";
import React from "react";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import HomeImg from "../../assets/images/homepage/back2.jpg"
import AgentNav from "../AgentNav/AgentNav";

function Homepage() {  
    return(
        <>
       <AgentNav />
     <Hero 
        className="homeHero"
        textClass="heroText"
        heroImage={HomeImg}
        title="Transforming Farming Through Technology"
        text="Discover innovative solutions that revolutionize agriculture, increase yields, and ensure sustainable farming practices. Join us in shaping the future of farming with cutting-edge technology."
        btnText="Get Started"
        btnClass="homeBtn"
        url="/dashboard"
        />
     <Footer/>
     {/*  */}
        </>
    )    
}


export default Homepage;