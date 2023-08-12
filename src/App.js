
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import AgentAddup from "./routes/AgentAddup";
import SignUp from "./routes/SignUp"
import Dashboard from "./routes/Dashboard";
import ContactUs from "./routes/Contact";
import { AuthProvider } from "./contexts/AuthContext";



function App() {
  return (
   
    <div className="App">
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agentadd" element={<AgentAddup />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactUs />} />
        
      
        {/* 
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/carrental" element={<CarRental />} />
        <Route path="/flights" element={<Flights />} /> */}
      </Routes>
      </AuthProvider>
    </div>
     
  );
}

export default App;
