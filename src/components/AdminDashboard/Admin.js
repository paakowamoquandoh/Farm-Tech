import React from "react";
import "./admin.css";
import Sidebar from "../AdminDashboard/Sidebar";
import HomeNav from "../HomeNav/HomeNav";
import { Outlet } from "react-router-dom";

function Admin() {
 
  return (
    <>
      <div className="app-container">  
        <HomeNav />
        <div className="app-content">
        <Sidebar />
        </div>
        <div className="projects-section">
          <Outlet/>
        </div>
      </div>    
    </>
  );
}

export default Admin;
