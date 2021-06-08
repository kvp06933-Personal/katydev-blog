import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';


function Navigation () {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            
              <Navbar.Brand href="#home">KatyDev</Navbar.Brand>
              <Nav className="ml-auto">
                <LinkContainer to={{pathname: "/"}}>
                <Nav.Link as={Link}  href="#home">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={{pathname: "/about"}}>
                <Nav.Link as={Link} href="#home">About</Nav.Link>
                </LinkContainer>
                <LinkContainer to={{pathname: "/contact"}}>
                <Nav.Link as={Link} href="#home">Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to={{pathname: "/login"}}>
                <Nav.Link as={Link} href="#home"><Button>Login</Button></Nav.Link>
                </LinkContainer>
               
              </Nav>
            </Container>
            </Navbar>
            
  
        
    )
}

export default Navigation;