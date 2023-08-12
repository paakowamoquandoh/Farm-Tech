import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom";
import "./forms.css";
import brandImg from "../../assets/icons/brand.png"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      // history.push("/")  // This line was removed as useHistory was not used
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
     <div className="formBody">
     <div className="logoContainer">
    <img src={brandImg} className="logo" alt=""/>
    </div>
     <div>
        
          <h2 className="text-center mb-4">Agent Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control placeholder="enter email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control placeholder="enter password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control placeholder="confirm password" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
     </div>
    </>
  )
}
