import "./agentdashboard.css";
import React from "react";
import Footer from "../Footer/Footer";
import AddFarmer from "../AddFarmer/AddFarmer";
import AgentNav from "../AgentNav/AgentNav";

function AgentDashboard() {
  return (
    <>
      <AgentNav />
      <AddFarmer />
      <Footer />
      {/*  */}
    </>
  );
}

export default AgentDashboard;
