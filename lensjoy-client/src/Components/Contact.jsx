import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import styles from "../Style/Contact.css";
import pic from '../Img/img1.jpg';
import person2 from '../Img/Team Img/NK-IMG.png';
import person1 from '../Img/Team Img/AP_IMG.png';
import person3 from '../Img/Team Img/PW.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export function Contact() {

  function handleSubmit() {
    alert("Details have been submitted! Will inform you!")
  }

  const cardsData = [
    {
      title: 'Aishwarya Pusadkar',
      image: person1,
      content: 'Student at CDAC Juhu',
      instagram: 'https://www.instagram.com/instagram/',
      linkedin: 'www.linkedin.com/in/aishwarya-pusadkar-70a4b11b7',
    },
    {
      title: 'Nayan Khade',
      image: person2,
      content: 'Student at CDAC Juhu.',
      instagram: 'https://www.instagram.com/_nayankhade_/',
      linkedin: 'https://www.linkedin.com/in/thenayankhade/',
    },
    {
      title: 'Priyal Wadhwani',
      image: person3,
      content: 'Student at CDAC Kharghar.',
      instagram: 'https://www.instagram.com/instagram/',
      linkedin: 'https://www.linkedin.com/in/priyal-wadhwani-716904164/',
    },
  ];
  

  return (
    <div className="contact3 py-5">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="card-shadow" style={{boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
              <img src={pic} className="img-fluid" alt="Contact" style={{overflow : 'hidden'}}/>
            </div>
          </Col>
          <Col lg={6} style={{boxShadow: '0 5px 18px rgba(0,0,0,0.3)'}}>
            <div className="contact-box ml-3">
              <h1 className="font-weight-light mt-2">Quick Contact</h1>
              <form className="mt-4">
                <Row>
                  <Col lg={12}>
                    <div className="form-group mt-2">
                      <input className="form-control" type="text" placeholder="Name" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="form-group mt-2">
                      <input className="form-control" type="email" placeholder="Email Address" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="form-group mt-2">
                      <input className="form-control" type="text" placeholder="Phone" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="form-group mt-2">
                      <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <Button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2" style={{boxShadow: '0 5px 18px rgba(0,0,0,0.3)'}}>
                      <span onClick={handleSubmit}>SUBMIT</span>
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
          <Col lg={12}>
            <div className="card mt-4 border-0 mb-4">
              <Row>
                <Col lg={4} md={4}>
                  <div className="card-body d-flex align-items-center c-detail pl-0">
                    <div className="mr-3 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="Address" style={{ width: 50, marginTop: 10, marginRight: 10 }} />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Address</h6>
                      <p>201, CDAC<br />Mumbai</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="Phone" style={{ width: 50, marginTop: 10, marginRight: 14 }} />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Phone</h6>
                      <p>7875355740<br />7283628382</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="Email" style={{ width: 50, marginTop: 10, marginRight: 10 }} />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Email</h6>
                      <p>lensjoy@gmail.com<br />help@lensjoy.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <hr />
        <h3 className='team-h contact-text'>OUR TEAM</h3>
        <Row xs={1} md={3} className='g-4 mx-auto mt-4'>
          {cardsData.map((card, idx) => (
            <Col key={idx} className='mb-3'>
              <Card style={{ width: '16rem', height: 'auto', margin: '0.5rem' , boxShadow: '0 2px 18px rgba(0,0,0,0.2)'}} className='mx-auto my-4'>
                <Card.Img variant='top' src={card.image} style={{ height: '270px', width: '100%', objectFit: 'cover' }}/>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.content}</Card.Text>
                  <div className='d-flex justify-content-center mx-auto fab-icon'>
                    <a href={card.instagram} target='_blank' rel='noopener noreferrer' className='mx-2'>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={card.linkedin} target='_blank' rel='noopener noreferrer' className='mx-2'>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
