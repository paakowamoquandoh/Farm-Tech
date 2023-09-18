import React from 'react';
import "./card.css";


const AnalyticsCard = ({ icon, icon2, title, total, percentage }) => {
  return (
    <div className="analytics-card">
      <div className="analytics-card-header">
        <div className="analytics-card-icon">{icon}</div>
        <div className="analytics-card-title">{title}</div>
      </div>
      <div className="analytics-card-content">
        <div className="analytics-card-total">{total}</div>
        <div className="analytics-card-percentage">{icon2}{percentage}% {" "}<span>{" "}vs last month</span></div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
