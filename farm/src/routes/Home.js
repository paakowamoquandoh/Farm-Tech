import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HomeImg from "../assets/images/homepage/back.jpg"

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero 
        className="homeHero"
        textClass="heroText"
        heroImage={HomeImg}
        title="Transforming Farming Through Technology"
        text="Discover innovative solutions that revolutionize agriculture, increase yields, and ensure sustainable farming practices. Join us in shaping the future of farming with cutting-edge technology."
        btnText="Get Started"
        btnClass="homeBtn"
        url="/signup"
        />
      <Footer />
    </>
  );
}

export default HomePage;
