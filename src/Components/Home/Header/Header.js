import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> <span className="text-danger fw-bold">Powersurge</span> Supplements</Navbar.Brand>
    <Nav className="ms-auto">
       <Nav.Link  className="text-white fw-bold" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link  className="text-white fw-bold" as={Link} to="/about">Supplements</Nav.Link>
      <Nav.Link  className="text-white fw-bold" as={Link} to="/login">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;