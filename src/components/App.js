import React from "react";
import Signup from "../components/SignUp/Signup";
import ContactUs from "./ContactUs/ContactUs";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import AgentForm from "../components/AddAgent/AddAgent";
import Admin from "../components/AdminDashboard/Admin";
import AdminLogin from "../components/Login/AdminLogin";
import AdminTable from "../components/AdminTable/AdminTable";
import Reports from "../components/Reports/Reports";
import Homepage from "../components/Homepage/Homepage"
import WelcomePage from "./WelcomePage/WelcomePage";
import AgentDashboard from "./AgentDashboard/AgentDashboard";
import DashboardHome from "./AdminDashboard/DashboardHome";
import AgentsTable from "./AgentsTable/AgentsTable";

function App() {
  return (
    <div>
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/agentform" element={<AgentForm />} />

          {/* Protected routes */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/agentdashboard" element={<AgentDashboard />} />
          <Route path="/admin/*" element={<Admin />}>
            <Route path="admin" element={<DashboardHome />} /> */
            <Route path="admintable" element={<AdminTable />} />
            <Route path="agentstable" element={<AgentsTable />} />
            <Route path="reports" element={<Reports />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Route>
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>
      </AuthProvider>
    </Router>
  </div>
     
  );
}

export default App;
