import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import About from './AbountComponent';

function Navigation () {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            
              <Navbar.Brand href="#home">KatyDev</Navbar.Brand>
              <Nav className="ml-auto">
                <LinkContainer to="/">
                <Nav.Link as={Link} href="#home">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                <Nav.Link as={Link} href="#home">About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                <Nav.Link as={Link} href="#home">Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                <Nav.Link as={Link} href="#home"><Button>Login</Button></Nav.Link>
                </LinkContainer>
               
              </Nav>
            </Container>
            </Navbar>
            
  
        
    )
}

export default Navigation;