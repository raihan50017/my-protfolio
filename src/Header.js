import { Button } from '@material-ui/core';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import raihanlogo from './logo/raihanlogo.png';

const Header = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" style={{backgroundColor:'rgb(26, 115, 232)'}} variant="dark">
            <Navbar.Brand href="#home"><img height="45" src={raihanlogo} alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <Nav.Link className="mr-3 text-white" href="#home">Home</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#about">About Me</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#contact">Contact</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#contact">Blog</Nav.Link>
                    <Nav.Link className="mr-3 text-white" target="blank" href="https://drive.google.com/file/d/1DlnqoeO7B56h68fJwUlyNGSSWG2wDfvQ/view?usp=sharing"><Button variant="contained" color="secondary">Download resume</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;