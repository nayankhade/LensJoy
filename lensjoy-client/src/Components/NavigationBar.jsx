import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from "../Style/NavigationBar.css";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/tokenUtil";

export function NavigationBar() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    logout();
    navigate("/");
  }

  return (
    <Navbar expand="lg" className="nav-navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <h4 className="logo">Lens<span>Joy</span></h4>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <LinkContainer to="/dashboard">
              <Nav.Link className="tabs">Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service">
              <Nav.Link className="tabs">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link className="tabs">Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="tabs">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="tabs">Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orders">
              <Nav.Link className="tabs">Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/userfeedback">
              <Nav.Link className="tabs">Users</Nav.Link>
            </LinkContainer>
            {!isAuthenticated() ? (
              <>
                <LinkContainer to="/">
                  <Button className="signIn registration" variant="secondary">
                    Sign In
                  </Button>
                </LinkContainer>
                <LinkContainer to="/registration" style={{ marginLeft: '5px' }}>
                  <Button className="signUp registration" variant="secondary">
                    Sign Up
                  </Button>
                </LinkContainer>
              </>
            ) : (
              <LinkContainer to="/">
                <Nav.Link className="logout-btn">
                  <button type="button" className="btn btn-outline-secondary" style={{ marginLeft: '200px' }} onClick={handleLogoutClick}>
                    Log Out
                  </button>
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
