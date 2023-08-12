import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import AgentAddup from "./routes/AgentAddup";
import SignUp from "./routes/SignUp"
import Dashboard from "./routes/Dashboard";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agentadd" element={<AgentAddup />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      
        {/* 
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/carrental" element={<CarRental />} />
        <Route path="/flights" element={<Flights />} /> */}
      </Routes>
    </div>
  );
}

export default App;
