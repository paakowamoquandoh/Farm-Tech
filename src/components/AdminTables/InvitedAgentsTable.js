import "./adminTable.css";
import AgentModal from "../AgentModal/AgentModal"
import { useState } from "react";
import { Table } from "../Table/InvitedAdmins";
import {Modal} from "../Modal/InviteAgent"

function AdminTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      name: "Peni Hotor",
      location: "Accra, Ghana",
      commodities: "Grains",
      phone: "0244123123",
      identity: "Ghana Card",
      status: "live",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };
  return (
    <>
      <div className="admintable">
        <div className="projects-section">
          <div>
            <div className="projects-section-header">
              <p>Agents Table</p>
              <button onClick={() => setModalOpen(true)} className="btn">
                Add new farmer
              </button>
              <span className="add">
                <AgentModal />
                Invite Agent
              </span>
            </div>
            <div>
              <Table
                rows={rows}
                deleteRow={handleDeleteRow}
                editRow={handleEditRow}
              />
              {modalOpen && (
                <Modal
                  closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                  }}
                  onSubmit={handleSubmit}
                  defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminTable;
