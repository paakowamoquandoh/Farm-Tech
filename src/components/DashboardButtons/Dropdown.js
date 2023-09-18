import React from "react";
import "./buttons.css";


const DashDropdown = ({ name, icon1, icon2, options }) => {
  return (
    <div>
      <label className="dropdown">
        <div className="dd-dropdown">
          {icon1}
          {name}
          {icon2}
        </div>

        <input type="checkbox" className="dd-input" id="test" />

        <ul className="dd-menu">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default DashDropdown;
