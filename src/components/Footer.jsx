import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
         

          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>
              Email: <a href="mailto:abdulkaderqureshi989@gmail.com" className="text-light text-decoration-none">abdulkaderqureshi989@gmail.com</a>
            </p>
            <p>Phone: +91 8591466974</p>
          
          </Col>


          <Col md={6} className="mb-3">
            <h5>Social Links</h5>
            <p>
             LinkedIn: <a href="https://www.linkedin.com/in/abdul-kader-javed-qureshi">https://www.linkedin.com/in/abdul-kader-javed-qureshi</a>
            </p>
            <p>Github: <a href="https://github.com/AbdulkaderJaved-SoftwareEngineer">https://github.com/AbdulkaderJaved-SoftwareEngineer</a></p>
          
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">Made with 🔥 by Abdul Kader Javed Qureshi..</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
