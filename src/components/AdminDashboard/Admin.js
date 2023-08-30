import React from "react";
import "./admin.css";
import Sidebar from "../AdminDashboard/Sidebar";
import HomeNav from "../HomeNav/HomeNav";
import DashboardHome from "./DashboardHome";

function Admin() {
 
  return (
    <>
      <div className="app-container">  
        <HomeNav />
        <div className="app-content">
        <Sidebar />
        <DashboardHome />
        </div>    
      </div>
    </>
  );
}

export default Admin;
