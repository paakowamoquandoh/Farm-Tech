import React, { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill, BsArrowDown, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./farmertable.css";



const FarmerTableData = ({ rows, deleteRow, editRow }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const rowsPerPage = 7;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = rows.slice(startIndex, endIndex);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const toggleRowSelection = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIdx) => rowIdx !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const toggleSelectAll = () => {
    if (!selectAll) {
      const allRowIndexes = [...Array(rows.length).keys()];
      setSelectedRows(allRowIndexes);
    } else {
      setSelectedRows([]);
    }
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    setSelectAll(selectedRows.length === rows.length);
  }, [selectedRows, rows]);

  const handleDeleteRow = (rowIndex) => {
    deleteRow(rowIndex);
    if (currentRows.length === 1 && currentPage > 1) {
      handlePrevPage();
    }
    if (rows.length - selectedRows.length === 1) {
      setSelectedRows([]);
    }
  };

  const handleDeleteAll = () => {
     alert("are you sure you want to clear all data from table?")
  };

  const handleUnselectAll = () => {
    setSelectedRows([]);
  };

  return (
    <div className="table-wrapper">
      
         <div>
          <table className="admintable">
        <thead>
          {selectAll && (
            <tr className="toprow">
              <th onClick={handleUnselectAll}>
                Unselect All
              </th>
              <th>
                <button
                  className="deleteAll"
                  onClick={handleDeleteAll}
                  disabled={selectedRows.length === 0}
                >
                  <BsFillTrashFill />
                  Delete All
                </button>
              </th>
            </tr>
          )}
          <tr>
            <th className="tablerow1">
              <input
              className="custom-checkbox"
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
              Lecturers<span><BsArrowDown/></span>
            </th>
            <th className="tablerow2">Lecturer ID</th>
            <th className="tablerow3">Email address</th>
            <th className="tablerow4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, idx) => {
            const initials = `${row.firstname.charAt(0)}${row.lastname.charAt(0)}`;
            const rowIndex = startIndex + idx;

            return (
              <tr key={rowIndex}>
                <td className="gaps">
                  <input
                  className="custom-checkbox"
                    type="checkbox"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={() => toggleRowSelection(rowIndex)}
                  />
                  <span className="initials">{initials}</span>
                  {row.firstname} {row.lastname}
                </td>
                <td>LEC 0001</td>
                <td>{row.email}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => handleDeleteRow(rowIndex)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(rowIndex)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
        
      </table>   
      <div className="pagination">        
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <BsArrowLeft/>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
          <BsArrowRight/>
        </button>
      </div>    
         </div>      
    </div>
  );
};

export default FarmerTableData;
