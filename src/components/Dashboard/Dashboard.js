import React from "react";
import "./dashboard.css"
import Homepage from "../Homepage/Homepage";
import WelcomePage from "../WelcomePage/WelcomePage";
import { useAuth } from "../../contexts/AuthContext";


export default function Dashboard() {
  const { currentUser } = useAuth();

  // Check if the user is not authenticated
  if (!currentUser) {
    return (
      <>
      <WelcomePage />
      </>
    );
  }

  // If user is authenticated, display the dashboard content
  return (
    <>
     <Homepage />
    </>
  );
}
