import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import img1 from '../Img/Womens/Women1.jpg';
import img2 from '../Img/Womens/Women2.jpg';
import img3 from '../Img/Womens/Women3.jpg';
import img4 from '../Img/Womens/Women4.jpg';
import img5 from '../Img/Womens/Women5.jpg';
import img6 from '../Img/Womens/Women6.jpg';
import { LinkContainer } from 'react-router-bootstrap';


export function Womens() {
    const cardsData = [
        {
            title: 'John Jacobs',
            image: img1,
            content: 'Size : Medium | Price : ₹3000',
        },
        {
            title: 'John Jacobs',
            image: img2,
            content: 'Size : Medium | Price : ₹1200',
        },
        {
            title: 'LensJoy Air',
            image: img3,
            content: 'Size : Wide | Price : ₹1200',
        },
        {
            title: 'LensJoy Air',
            image: img4,
            content: 'Size : Extra Wide | Price : ₹2500',
        },
        {
            title: 'John Jacobs',
            image: img5,
            content: 'Size : Narrow | Price : ₹2500',
        },
        {
            title: 'LensJoy Air',
            image: img6,
            content: 'Size : Medium | Price : ₹3000',
        },
    ];

    return (
        <Row xs={1} md={3} className="g-4 mx-auto mt-4" >
            {cardsData.map((card, idx) => (
                <Col key={idx} className="mb-3">
                    <Card style={{ width: '16rem', height: 'auto', margin: '0.5rem', boxShadow: '0 8px 18px rgba(0,0,0,0.3)'}} className="mx-auto my-4">
                        <Card.Img variant="top" src={card.image} style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.content}</Card.Text>
                            <LinkContainer to="/orders">
                            <Button variant="primary">Buy Now</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
