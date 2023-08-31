import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./addagent.css"
import brandImg from "../../assets/icons/brand.png"

function AddAgent() {
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
    window.location.href = '/agentdashboard';
  };

  return (
    <>
   <div className='profileBody'>
   <div className="logoContainer">
        <img src={brandImg} className="logo" alt=""/>
      </div>
   <div className="sellerUser">
    <p className="sellerHeading">become an agent</p>
    <p className="sellDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptas ullam rem cupiditate quos eum similique totam ducimus, harum consequuntur alias eligendi! Possimus aliquam incidunt beatae corrupti accusantium cum iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum placeat explicabo quos quae sint suscipit itaque iste rem, doloremque magnam corrupti autem maxime incidunt perferendis ipsa, deserunt consectetur inventore. Alias?</p>
    <h6 className="">apply below</h6>
   </div>
  
    <Form onSubmit={handleSubmit}>
      {/* Your form fields */}
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
         placeholder='enter name'
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
      <Form.Group id="password-confirm">
              <Form.Control
                type="text"                
                placeholder="business name / company name / shop name"
                onChange={handleInputChange}
                isInvalid={!!formErrors.name}
              />
              <Form.Control.Feedback type="invalid">
          {formErrors.name}
             </Form.Control.Feedback>
            </Form.Group>
            <Form.Group id="">
              <Form.Control
              as="textarea"
                type="text"
                placeholder="address"
                onChange={handleInputChange}
                isInvalid={!!formErrors.name}
              />
              <Form.Control.Feedback type="invalid">
          {formErrors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group id="">
              <Form.Control
              rows={30}
              cols={30}
              as="textarea"
                type="text"
                placeholder="about"
                onChange={handleInputChange}
                isInvalid={!!formErrors.name}
              />
              <Form.Control.Feedback type="invalid">
          {formErrors.name}
             </Form.Control.Feedback>
            </Form.Group>
      <Button className='submitButton' type="submit">Apply</Button>
    </Form>
    </div>   
    </>
  );
}

export default AddAgent;
