import React, { useState, useRef } from 'react';
import dropdown from "../../assets/icons/chevron-down.svg";
import funnel from "../../assets/icons/filter-funnel-02.svg";
import filterlines from "../../assets/icons/filter-lines.svg";
import add from "../../assets/icons/user-plus-01.svg";
import BasicButton from '../DashboardButtons/BasicButton';
import DashDropdown from '../DashboardButtons/Dropdown';
import AddAgentModal from '../Modal/AddLecturer';
import './farmertable.css';
import FarmerTableData from './table';
import CustomModal from "../Modal/UploadModal"
import upload from "../../assets/icons/share-02.svg";



const FarmerTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const fileInputRef = useRef(null);
  const [typeError, setTypeError] = useState(null);

  const handleFile = (e) => {
    const fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        const reader = new FileReader();
        reader.readAsText(selectedFile);
        reader.onload = (e) => {
          const csvText = e.target.result;
          const lines = csvText?.split('\n');
          if (lines) {
            const headers = lines[0].split(',');
            const data = [];
  
            for (let i = 1; i < lines.length; i++) {
              const values = lines[i].split(',');
              if (values.length === headers.length) {
                const entry = {
                  firstname: values[0],
                  lastname: values[1],
                  email: values[2],
                };
                data.push(entry);
              }
            }
            
            setRows(data);
            closeModal();

          }
        };
      } else {
        setTypeError('Please select only excel file types');
      }
    } else {
      console.log('Please select your file');
    }
  };
  
    const handleUploadButtonClick = () => {
      fileInputRef.current?.click();
      setModalOpen(false);
    }
  

    const handleDeleteRow = (targetIndex) => {
    setRows((prevRows) => prevRows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    if (rowToEdit === null) {
      setRows([...rows, newRow]);
    } else {
      setRows(
        rows.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;
          return newRow;
        })
      );
    }
  };
  

  const defaultValue = rowToEdit !== null ? rows[rowToEdit] : undefined;

  const sortOptions = ['Ascending', 'Descending', 'Recently added'];
  const filterOptions = ['Lecturers', 'Students', 'Recently added'];

  return (
    <div className="adminArea">
      <div className="adminTopbar">
        <div className="buttonArea">
          <h2 className="headText">
            All Agents
          </h2>
        </div>
        <div className="dashdropdown">
        
          <DashDropdown name={'Sort by'}
            icon1={<img src={filterlines} alt='filter' />}
            icon2={<img src={dropdown} alt='dropdown' />}
            options={sortOptions}
          />
          <DashDropdown name={'Filter by'}
            icon1={<img src={funnel} alt='filter' />}
            icon2={<img src={dropdown} alt='dropdown' />}
            options={filterOptions}
          />
          <label className='uploadButton' onClick={openModal}>
            <img className='smallIcon' src={upload} alt="upload" />
            Bulk Upload
          </label>
      <CustomModal isOpen={isOpen} onRequestClose={closeModal}>
      {typeError && (
              <div className="alert alert-danger" role="alert">{typeError}</div>
            )}
      <form className="" >
            <input
              ref={fileInputRef}
              type="file"
              className=""
              style={{ display: 'none' }}
              required
              onChange={handleFile}
            />
            <label
              htmlFor="fileInput"
              className="uploadText"
              onClick={handleUploadButtonClick}
            >
              <span className='click'>Click to Upload </span>{" "} or drag and drop <br />
            </label>
            <span className='csvOnly'>CSV Files only</span>            
          </form>
      </CustomModal>
          <BasicButton onClick={() => setModalOpen(true)} name={'Add Agent'} icon1={<img className="smallIcon" src={add} alt='add' />} className={'dd-button1'} />

        </div>
      </div>
      <div className="tableArea">
  
  <FarmerTableData rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
  
  {modalOpen && (
    <AddAgentModal
      closeModal={() => {
        setModalOpen(false);
        setRowToEdit(null);
      }}
      onSubmit={handleSubmit}
      defaultValue={defaultValue}
    />
  )}
</div>

    </div>
  );
};

export default FarmerTable;
