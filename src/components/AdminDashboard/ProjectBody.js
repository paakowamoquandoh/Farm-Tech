import Sidebar from "./Sidebar";
import "./admin.css";
import DashboardArea from "./DashboardArea";


function ProjectBody() {
    return(
        <>
        <div className="app-content">
          <Sidebar />
          <DashboardArea />
        </div>
        </>
    )    
}


export default ProjectBody;