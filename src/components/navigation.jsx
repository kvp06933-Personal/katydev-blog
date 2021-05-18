import React from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap';

function Navigation () {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            
              <Navbar.Brand href="#home">KatyDev</Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Container>
            </Navbar>
            
  
        
    )
}

export default Navigation;