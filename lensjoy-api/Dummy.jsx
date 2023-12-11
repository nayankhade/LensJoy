import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from "react";
import { Home } from './Home';
import { login } from '../Services/AdminService';
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginError,setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const result = await login(formData);
            localStorage.setItem("token",result.token);
            navigate("/AdminPage");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }

    return (
        <>
            <Home></Home>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-md-center mt-5">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-md-center" >
                        <Col lg={1}>
                            <Button variant="primary" type="submit">Log In</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" >
                        <Col lg={3}>
                        {loginError? <Alert variant="danger" className="mt-3">Invalid Mail or Password</Alert>:null}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}