import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

export function UserFeedback() {
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFeedback(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://127.0.0.1:8900/feedback', { feedback });
      setFeedback("");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        navigate('/userfeedback/feedbacks');
      }, 1500);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <div className="feedback">
        <h3 style={{ marginTop: '15px' }}>Empowering Improvement Through Your Feedback</h3>
        <Form>
          <Form.Group controlId="feedbackForm" style={{ boxShadow: '0 5px 18px rgba(34, 34, 34, 0.2)' }}>
            <Form.Control
              as="textarea"
              placeholder="Enter your feedback"
              style={{ height: '150px', marginTop: '20px' }}
              value={feedback}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="feedback-btn"
            type="button"
            style={{ width: '97%', margin: '15px 15px 0px 15px' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <LinkContainer to='/userfeedback/feedbacks' style={{ width: '97%', margin: '15px 15px 15px 15px' }}>
            <Button
              variant="primary"
              className="feedback-btn"
              
            >
              Go to Feedbacks
            </Button>
          </LinkContainer>
        </Form>
      </div>
    </Container>
  );
}
