import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





function NavbarTop() {
  return (

<>

    




    <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand >Abdul Kader Javed Qureshi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          <Nav.Link href="/Skills">Skills</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          
            
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default NavbarTop