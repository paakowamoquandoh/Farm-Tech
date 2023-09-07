import "./report.css";
import AdminModal from "../AdminModal/AdminModal";

function Reports() {
    return(
        <>
        <div className="projects-section">
        <div>
        <div className="projects-section-header">
          <p>Admins Table</p>
          <span className="add"><AdminModal/>Add Admin</span>
        </div>
     
        </div>
        </div>
        </>
    )    
}


export default Reports;