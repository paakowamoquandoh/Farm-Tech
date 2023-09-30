import "./admin.css";
import React from "react";
import { BsArrowUp } from 'react-icons/bs';
import { BsArrowDown } from 'react-icons/bs';
import AnalyticsCard from "../AnalyticsCard/AnalyticsCard";
import totalFarmers from "../../assets/icons/brand.png";
import totalAgents from "../../assets/icons/customer-service-agent.png"
import totalAdmins from "../../assets/icons/businessman.png"
import totalData from "../../assets/icons/database-storage.png"


function DashboardHome() {
    return(
        <>
        <div className="projects-section-header">
        <p>Admin Dashboard</p>
        <p className="time">General data</p>
      </div>
      <div className="projects-section-line">
      <div className="cardsHolder">
          <AnalyticsCard
          icon={<img src={totalAdmins} alt='card icon' />}
          title={'Total Admins'}
          total={200}
          percentage={40} icon2={<BsArrowUp className='green'/>} />
           <AnalyticsCard
          icon={<img src={totalAgents} alt='card icon' />}
          title={'Total Agents'}
          total={100}
          percentage={78} icon2={<BsArrowDown className='red'/>} />
           <AnalyticsCard
          icon={<img src={totalFarmers} alt='card icon' />}
          title={'Total Farmers'}
          total={800}
          percentage={55} icon2={<BsArrowUp className='green'/>} />
           <AnalyticsCard
          icon={<img src={totalData} alt='card icon' />}
          title={'Total Databases'}
          total={1500}
          percentage={63} icon2={<BsArrowDown className='red'/>} />
      </div>
        <div className="view-actions">
          <button className="view-btn list-view" title="List View">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </button>
          <button className="view-btn grid-view active" title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>        
      </div>
    </>
    )    
}


export default DashboardHome;