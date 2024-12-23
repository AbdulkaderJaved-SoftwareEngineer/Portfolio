import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import NavbarTop from './components/NavbarTop'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from 'react-bootstrap/Stack';
import RightImage from './components/RightImage';
import LeftText from './components/LeftText';


import Dropdown from 'react-bootstrap/Dropdown';
import ProjectList from './components/Projects';

import StyledText from './components/StyledText';
import Skills from './components/TechnologyList'
import TechnologyList from './components/TechnologyList';
import CertificateCarousal from './components/CertificateCarousal';
import Footer from './components/Footer';


import pdf from '/files/Qureshi Abdul Kader Javed ResumeV-28.pdf'
import { Route, Routes } from 'react-router-dom';

function App() {

  <Routes>
      
      
      <Route path='/Projects' element={<ProjectList /> } />
      <Route path='/Skills' element={<TechnologyList /> } />
      




  </Routes>

  const styles = {

    fontFamily: "Poppins, serif",
    fontWeight: "600",
    fontStyle: "normal",

  }




  const containerStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4', // Soft shadow
    borderRadius: '10px', // Rounded corners
    padding : '50px',
    background:'#D9EAFD'
    
  };

    const handleDownloadPdf = () => {
      const pdfPath = pdf

      const link = document.createElement("a");
      link.href = pdfPath; // Path to the PDF in the public folder
      link.download = "Qureshi Abdul Kader Javed ResumeV-28.pdf"; // File name for download
      link.click();
    }





  return (
    <>

      <NavbarTop />
<br/>
      <Container  style={containerStyle}>
        <Row >
{/* Left text  */}
          <Col md={6} className=" text-center py-4"  >
            <Stack>
              <LeftText />
              <Button style={{border:'none'
              } }className='btn btn-primary px-3 py-2 d-inline-block' onClick={handleDownloadPdf}>Download Resume</Button>
            </Stack>
          </Col>

{/* Right Image */}

          <Col md={6} className='align-items-center justify-content-center mx-auto'>
            <RightImage/>
          </Col>
        </Row>   
{/* Row 1 Complete */}



      </Container>




{/* Container No 2 */}




<Container>
  <br /><br />
<Dropdown.Divider />

<StyledText text="My Projects" />
<hr />

  <ProjectList />

</Container>


<Container>
  <br /><br />


<StyledText text="Skills " />
<hr />

<TechnologyList />


</Container>






<Container>
  <br /><br />
<StyledText text='My Certifications'/>
<hr/>
<CertificateCarousal />

<br/><br/>
</Container>
<Container fluid>

<Footer/>

</Container>


    </>
  )
}

export default App;