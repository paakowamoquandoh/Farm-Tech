import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HomeImg from "../assets/images/homepage/back2.jpg"


function Main() {
    return (
      <>
      <Navbar />
      <Hero 
        className="homeHero"
        textClass="heroText"
        heroImage={HomeImg}
        title="Transforming Farming Through Technology"
        text="Discover innovative solutions that revolutionize agriculture, increase yields, and ensure sustainable farming practices. Join us in shaping the future of farming with cutting-edge technology."
        btnText="Update Profile"
        btnClass="homeBtn"
        url="/signup"
        />
      <Footer />
      </>
    );
  }
  
  export default Main;
  