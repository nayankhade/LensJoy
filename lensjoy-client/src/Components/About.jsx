import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import '../Style/About.css'; // Assuming your styles are in this file
import img1 from '../Img/About/Img1.jpg'


export const About = () => {
    return (
        <div className="about-us">
            <div className="carousel-container">
            </div>

            <Row className="mission-values" style={{ boxShadow: '0 2px 18px rgba(0,0,0,0.2)', margin: '0 13px' }}>
                <Col md={6} style={{ paddingTop: 13 }}>
                    <h2>Our Mission and Values</h2>
                    <p>
                        At LensJoy, our mission is to provide high-quality eyewear to our customers with innovative
                        technology and exceptional service. We believe in making eyewear accessible, affordable,
                        and fashionable for everyone.<br></br>
                        An aim to provide every Indian access to high-quality designer glasses without shelling out their pocket.
                    </p>
                    <ul className="values-list">
                        <li>Customer Satisfaction</li>
                        <li>Innovation</li>
                        <li>Accessibility</li>
                    </ul>
                </Col>

                <Col md={6} className='img'>
                    <img
                        src={img1}
                        className="img-fluid"
                        alt="LensJoy Sunglasses"
                    />
                </Col>

            </Row>


            <div className="card-container">
                <div className="sale-card"  style={{ boxShadow: '0 2px 18px rgba(0,0,0,0.2)'}}>
                    <Card>
                        <Card.Img variant="top" src="https://static1.lenskart.com/media/desktop/img/Nov22/15-Nov/d1.jpg" />
                        <Card.Body className="card-body">
                            <Card.Title>Special Offer</Card.Title>
                            <Card.Text>Get up to 60% off on the first purchase. Limited-time offer!</Card.Text>
                            <Button variant="primary">Shop Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <hr />
                <div className="closing-section">
                    <h2>Our Commitment</h2>
                    <p>At LensJoy, we are committed to giving our best services to our customers</p>
                    <p>Thank you for being part of our journey!</p>
                </div>

            </div>

        </div>
    );
};
