import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import img1 from '../Img/Mens/Men1.jpg';
import img2 from '../Img/Mens/Men2.jpg';
import img3 from '../Img/Mens/Men3.jpg';
import img4 from '../Img/Mens/Men4.jpg';
import img5 from '../Img/Mens/Men5.jpg';
import img6 from '../Img/Mens/Men6.jpg';
import { LinkContainer } from 'react-router-bootstrap';

export function Mens() {
  const cardsData = [
    {
        title: 'Vincent Chase',
        image: img1,
        content: 'Size : Wide Sleek Steel    | Price : ₹1700',
    },
    {
        title: 'John Jacobs',
        image: img2,
        content: 'Size : Extra Wide Air Essentials | Price : ₹1500',
    },
    {
        title: 'LensJoy Air',
        image: img3,
        content: 'Size : Narrow blend edit | Price : ₹1800',
    },
    {
        title: 'LensJoy Air',
        image: img4,
        content: 'Size : Medium Sleek Steel | Price : ₹1900',
    },
    {
        title: 'Vincent Chase',
        image: img5,
        content: 'Size : Medium Air fusion | Price : ₹1700',
    },
    {
        title: 'John Jacobs',
        image: img6,
        content: 'Size : Narrow John Jacobs | Price : ₹1500',
    },
  ];

  return (
    <Row xs={1} md={3} className="g-4 mx-auto mt-4" >
      {cardsData.map((card, idx) => (
        <Col key={idx} className="mb-3">
          <Card style={{ width: '16rem', height: 'auto', margin: '0.5rem',  boxShadow: '0 8px 18px rgba(0,0,0,0.3)' }} className="mx-auto my-4">
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
