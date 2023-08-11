import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Main from "./routes/Main";
import SignUp from "./routes/SignUp"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        
      
        {/* 
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/carrental" element={<CarRental />} />
        <Route path="/flights" element={<Flights />} /> */}
      </Routes>
    </div>
  );
}

export default App;
