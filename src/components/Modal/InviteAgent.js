import React, { useState } from "react";

import "./invite.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      location: "",
      commodities: "",
      phone: "",
      identity: "",
      status: "live",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.name && formState.location && formState.commodities && formState.phone && formState.identity && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
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
      className="inviteModalContainer"
      onClick={(e) => {
        if (e.target.className === "inviteModalContainer") closeModal();
      }}
    >
      <div className="inviteModal">
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input name="location" onChange={handleChange} value={formState.location} />
          </div>
          <div className="form-group">
            <label htmlFor="commodities">Commmodities</label>
            <input name="commodities" onChange={handleChange} value={formState.commodities} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input name="phone" onChange={handleChange} value={formState.phone} />
          </div>
          <div className="form-group">
            <label htmlFor="identity">Identity</label>
            <input
              name="identity"
              onChange={handleChange}
              value={formState.identity}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="active">active</option>
              <option value="draft">draft</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
