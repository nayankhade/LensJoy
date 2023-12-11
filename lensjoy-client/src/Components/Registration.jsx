import { Alert, Button, Container, Form } from "react-bootstrap";
import { registration } from '../Style/Registration.css';
import { useState } from "react";
import {signup} from "../Services/UserSignUp"
import { useNavigate } from "react-router-dom";

export function Registration() {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({name:"",phone:"",email:"",password:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result= await signup(formData);
           setFormData({name:"",phone:"",email:"",password:""});
           setIsSubmitted(true);
           setTimeout(()=>{
            setIsSubmitted(false);
           },1500);
           navigate("/");
           console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <Container className="mx-auto ml-2 container" style={{ width: "500px"}}>
        <Form className="rg-form-field" style={{backgroundColor: "#454545"}} onSubmit={handleSubmit}>
          <h2>REGISTRATION</h2>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="name" onKeyUp={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone" name="phone" onKeyUp={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter your email" name="email" onKeyUp={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter your password" name="password" onKeyUp={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>

          
        </Form>
      </Container>
    </>
  );
}
