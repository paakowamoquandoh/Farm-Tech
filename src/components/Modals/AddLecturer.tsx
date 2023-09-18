import React, { useState, ChangeEvent, FormEvent } from "react";

import "../LecturerTable/lecturer.css";

interface ModalProps {
  closeModal: () => void;
  onSubmit: (data: FormData) => void;
  defaultValue?: FormData;
}

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
}

const Modal: React.FC<ModalProps> = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState<FormData>(
    defaultValue || {
      firstname: "",
      lastname: "",
      email: "",
    }
  );
  const [errors, setErrors] = useState<string>("");

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
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
      <div className="modal">
        <form>
          <div className="form-group">
            <span>Tell us a little about the Lecturer you are adding</span>
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

export default Modal;
