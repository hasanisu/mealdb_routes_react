import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            {/* <NavLink to='/home'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/about'>About</NavLink> */}
             
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-3">
            <NavLink to="/home" className='text-decoration-none ms-4'>Home</NavLink>
            <NavLink to="/products" className='text-decoration-none ms-4'>Products</NavLink>
            <NavLink to="/about" className='text-decoration-none ms-4'>About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default Header;