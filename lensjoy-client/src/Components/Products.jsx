import React from 'react';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';
import styles from "../Style/Product.css";
import img2 from '../Img/Img3.jpg'
import img3 from '../Img/Img5.jpg'
import img4 from '../Img/Img6.jpg'

export const Products = () => {
  return (
    <div>
      <Navbar expand="lg" className="d-flex justify-content-center align-items-center bg-light product-navbar" style={{ backgroundColor: 'white', color: 'black' }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="">
          <Nav className="mx-auto product-tabs">
            <LinkContainer to="/product/kids" className="mr-3" style={{ marginRight: 200 }}>
              <Nav.Link className='h4'>Kids</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product/womens" className="mr-3">
              <Nav.Link className='h4'>Womens</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product/mens" style={{ marginLeft: 200 }}>
              <Nav.Link className='h4'>Mens</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />

      <div className="carousel-container mb-4" style={{ maxWidth: '800px', margin: '0 auto', border: '1px solid black', marginTop: '22px' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={img3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={img4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
