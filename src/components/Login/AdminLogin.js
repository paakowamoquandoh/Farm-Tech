import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import brandImg from "../../assets/icons/brand.png"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/admin/admin")
    } catch {
      setError("Failed to login an account: " + error.message);
    }

    setLoading(false)
  }

  return (
    <>
      <div className="adminformBody">
      <div className="logoContainer">
        <img src={brandImg} className="logo" alt=""/>
       </div>
        <div>
          <h2 className="text-center text-white mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control placeholder="enter email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control placeholder="password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 adminloginBtn" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center text-white mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
        <div className="loginLink text-white">
         <Link to="/contactus">Contact us</Link> for a link to <Link to="/signup">Sign Up.</Link>
      </div>
      </div>
      
    </>
  )
}
