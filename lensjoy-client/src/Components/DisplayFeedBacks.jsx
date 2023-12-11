import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, Spinner } from 'react-bootstrap';
import { Style } from '../Style/Feedback.css'

export function DisplayFeedbacks() {
  const [feedbackState, setFeedbackState] = useState([]);
  const [loading, setLoading] = useState(true);

  async function populateFeedbackState() {
    try {
      const response = await axios.get('http://127.0.0.1:8900/feedback');
      setFeedbackState(response.data);  // Use response.data, not response.feedbackState
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    populateFeedbackState();
  }, []);

  return (
    <div>
    {loading ? (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    ) : (
      <Table className="mt-4">
        <thead style={{borderBottom : '1px solid black'}} className="feedback">
          <tr>
            <th><h3 className="text-center" style={{}}>FEEDBACKS</h3></th>
          </tr>
        </thead>
        <tbody style={{borderBottom : '1px solid black', borderTop : '1px solid black'}}>
          {Array.isArray(feedbackState) && feedbackState.map((feedback, index) => (
            <tr key={index}>
              <td style={{ fontSize: '15px', textAlign: 'left' }}>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </div>
  );
}
