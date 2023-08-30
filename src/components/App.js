import React from "react";
import Signup from "../components/SignUp/Signup";
import ContactUs from "./ContactUs/ContactUs";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "../components/Login/Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import AgentForm from "../components/AddAgent/AddAgent";
import Admin from "../components/AdminDashboard/Admin";
import AdminLogin from "../components/Login/AdminLogin";
import AdminTable from "./AdminTables/AdminTable";
import Reports from "../components/Reports/Reports";
import DashboardHome from "./AdminDashboard/DashboardHome";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/agentform" element={<AgentForm />} />

            {/* Protected routes */}
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/admin/*" // This matches any route starting with /admin/
              element={<Admin />}
            >
              <Route path="" element={<DashboardHome />} />
              <Route path="admintable" element={<AdminTable />} />
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
