import {React,useState} from 'react'
import { NavbarText } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRef } from 'react';
import styled from 'styled-components';

function NavbarTop({ onSkillsClick,onContactClick }) {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  
  const buttonStyle = {
    borderBottom: isHovered1 ? "3px solid white" : "transparent",
    transition: isHovered1 ? "ease-in-out 0.1s":"",
    color:"white"
    
  };

  const buttonStyle2 = {
    borderBottom: isHovered2 ? "3px solid white" : "transparent",
    transition: isHovered2 ? "ease-in-out 0.1s":"",
    color:"white"
    
  };
  return (

<>

    




    <Navbar expand="lg"  style={{ backgroundColor: 'transparent',fontFamily: "Poppins, serif",
        fontWeight: "600",
        fontStyle: "normal",
        fontSize:'13px' }}
        
        >

    <Container fluid>
    
      <Navbar.Brand style={{color:'white'}}>Abdul Kader Javed Qureshi</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{

color: "white",
backgroundColor: "white"
      }}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          <Nav.Link onClick={onSkillsClick} style={buttonStyle}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}>
            Skills
          </Nav.Link>
          <Nav.Link onClick={onContactClick} style={buttonStyle2}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          
          
          >Contact Me</Nav.Link>
         
          
          
            
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default NavbarTop