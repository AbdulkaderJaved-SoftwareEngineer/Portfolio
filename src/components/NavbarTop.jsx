import React from 'react'
import { NavbarText } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRef } from 'react';


function NavbarTop({ onSkillsClick,onContactClick }) {
  
  
  return (

<>

    




    <Navbar expand="lg"  style={{ backgroundColor: 'transparent',fontFamily: "Poppins, serif",
        fontWeight: "600",
        fontStyle: "normal",
        fontSize:'13px' }}
        
        >

    <Container fluid>
    
      <Navbar.Brand style={{color:'white'}}>Abdul Kader Javed Qureshi</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          <Nav.Link onClick={onSkillsClick}>Skills</Nav.Link>
          <Nav.Link onClick={onContactClick}>Contact Me</Nav.Link>
         
          
          
            
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default NavbarTop