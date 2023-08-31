import AdminsListTable from "../AgentsTable/AgentsTable";
import Table from "../Table/Table";
import "./adminTable.css"
import React from "react";

function AdminTable() {
  return (
    <>
     <div className="admintable">
     <div className="projects-section">
        <div>
        <div className="projects-section-header">
          <p>Admins Table</p>
        </div>
        <AdminsListTable />
        </div>
        <div>
        <div className="projects-section-header">
          <p>Agents Table</p>
        </div>
        <Table />
        </div>
      </div>
     </div>
    </>
  );
}

export default AdminTable;
