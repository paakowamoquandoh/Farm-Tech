import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "./addagent.css"

function ProfileUpdateForm() {
  const [formData, setFormData] = useState({
    // Initialize your form data fields here
  });

  const [formErrors, setFormErrors] = useState({
    // Initialize error messages for each field
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: '' // Clear error when the user types
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields before submitting
    let errors = {};
    let hasErrors = false;

    for (const field in formData) {
      if (!formData[field]) {
        errors[field] = 'This field is required';
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    // If no errors, proceed with form submission logic
    window.location.href = '/';
  };

  return (
    <Form className='formBody' onSubmit={handleSubmit}>
      {/* Your form fields */}
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
          isInvalid={!!formErrors.name}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.name}
        </Form.Control.Feedback>
      </Form.Group>
      {/* Repeat Form.Group for other fields */}
      <Button type="submit">Update Profile</Button>
    </Form>
  );
}

export default ProfileUpdateForm;
