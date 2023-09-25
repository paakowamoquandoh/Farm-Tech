import React, { useState} from "react";

import "../AdminTable/lecturer.css";



const AddAgentModal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      firstname: "",
      lastname: "",
      email: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.firstname && formState.lastname && formState.email) {
      setErrors("");
      return true;
    } else {
      const errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target instanceof HTMLDivElement && e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="addagentmodal">
        <form>
          <div className="form-group">
            <span>Tell us a little about the Agent you are adding</span>
            <p>Please fill the following to get started</p>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} value={formState.email}/>
          </div>
            <label htmlFor="firstname">Firstname</label>
            <input name="firstname" onChange={handleChange} value={formState.firstname} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input name="lastname" value={formState.lastname} onChange={handleChange}/>
          </div>
          
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button  className="saveButton" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAgentModal;
