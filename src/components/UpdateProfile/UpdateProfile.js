import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import brandImg from "../../assets/icons/brand.png"
import "./profile.css"

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (!currentUser) {
      setError("You need to be logged in to update your profile.");
      setLoading(false);
      return;
    }

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div className="profileBody">
      
        <div className="applicationForm">
        <div className="logoContainer">
        <img src={brandImg} className="logo" alt=""/>
      </div>
          <h4 className="text-center mb-4">Update Profile</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control
              placeholder="Enter new email"
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser ? currentUser.email : ""}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same password"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Confirm password or leave blank"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control
                type="text"                
                placeholder="business name / company name / shop name"
              />
            </Form.Group>
            <Form.Group id="">
              <Form.Control
              as="textarea"
                type="text"
                placeholder="address"
              />
            </Form.Group>
            <Form.Group id="">
              <Form.Control
              as="textarea"
                type="text"
                placeholder="about"
              />
            </Form.Group>
            <Button disabled={loading} className="submitButton" type="submit">
              Update
            </Button>
          </Form>
          <div className="cancelButton">
        <Link to="/">Cancel</Link>
      </div>
        </div>
       
      </div>
      
    </>
  );
}
