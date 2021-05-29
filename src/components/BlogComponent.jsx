import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';


class BlogComponent extends Component {
   
    
    render() { 
        return ( 
            <div className="blog"> 
                <NavbarComponent/>
                

            </div>
         );
    }
}

class NavbarComponent extends Component {
    
    render() { 
        return ( 
            
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand href="#">KatyDev</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
         );
    }
}


 

 

 

 
export default BlogComponent;