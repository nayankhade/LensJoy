import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import styles from "../Style/Dashboard.css";
import img1 from '../Img/DashBoard/Img1.jpg';
import img2 from '../Img/DashBoard/Img2.jpg';
import img3 from '../Img/DashBoard/Img3.jpg';
import img4 from '../Img/DashBoard/Img4.jpg';
import img5 from '../Img/DashBoard/Img5.jpg';

import kids from '../Img/Kids/Kid5.jpg';
import womens from '../Img/Womens/Women6.jpg';
import mens from '../Img/Mens/Men4.jpg';
import { Link } from 'react-router-dom';





const cardData = [
    { image: img1, text: 'Eyeglasses' },
    { image: img2, text: 'Sunglasses' },
    { image: img3, text: 'Computer Glasses' },
    { image: img4, text: 'Power Sunglasses' },
    { image: img5, text: 'Progressive Lenses' },
];

const cardsData = [
    {
        title: 'Kids Eyeglasses',
        image: kids,
        content: 'Durable, plastic frames with polycarbonate or high-index Trivex lenses are the best type of glasses for kids.',
    },
    {
        title: 'Womens Eyeglasses',
        image: womens,
        content: 'For square-shaped faces, use curved frames to soften your faces sharper angles and give it a thinner appearance.',
    },
    {
        title: 'Mens Eyeglasses',
        image: mens,
        content: 'The best mens glasses of the year include the biggest brands in eyewear, including Costa, XXL, and Oakley.',
    },
];


export const Dashboard = () => {
    return (
        <div>
            <div className={`d-flex ${styles.cardContainer}`}>
                {cardData.map((card, index) => (
                    <Card key={index} className={`${styles.card} mx-3`} style={{ width: '18rem', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                        <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Text className="cards-text">{card.text}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-3 mx-auto" style={{ maxWidth: '1300px', margin: '0 auto', boxShadow: '0 8px 18px rgba(0,0,0,0.3)' }}>
                <a href="https://www.lenskart.com/the-eyeconic-sale">
                    <img src="https://static5.lenskart.com/media/uploads/Home-Web-hero-banner3.gif" style={{ marginBottom: '15px', width: '100%' }} />
                </a>
            </div>
            <Row xs={1} md={3} className="g-4 mx-auto mt-4 dashboardcards">
                {cardsData.map((card, idx) => (
                    <Col key={idx} className="mb-3">
                        <Card style={{ width: '16rem', height: 'auto', margin: '0.5rem', boxShadow: '0 5px 18px rgba(0,0,0,0.3)' }} className="mx-auto my-4">
                            <Card.Img variant="top" src={card.image} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text className='content'>{card.content}</Card.Text>
                                <Link to={"/product"}>
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div style={{ textAlign: 'center' , maxWidth: '1300px', margin: '0 auto', boxShadow: '0 8px 18px rgba(0,0,0,0.3)' }}>
                <h4>As Seen On Karan Johar</h4>
                <a href="/eyewear/collections/karan-johar-favorites.html">
                    <img src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif" style={{ marginBottom: '15px', width: '100%' }}/>
                </a>
            </div>
        </div>
    );
};
