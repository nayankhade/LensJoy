import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { css } from '../Style/Login.css';
import { login } from '../Services/UserServices';
import { useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData);
      localStorage.setItem("token", result.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
  }

  return (
    <Container className="mx-auto ml-2 container" style={{ width: "500px" }}>
      <Row>
        <Col lg={10} className="mx-auto">
          <Form className="form-field" style={{backgroundColor: "#454545"}} onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Log In
            </Button>

            <Row className="" >
              <Col lg={12} style={{ marginTop: "20px" }}>
                {loginError ? <Alert variant="danger" className="mb-3">Invalid Mail or Password</Alert> : null}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
