import {useState,React} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from 'react-bootstrap/Stack';
import RightImage from './RightImage';
import LeftText from './LeftText';
import ConfettiExplosion from 'react-confetti-explosion';

import pdf from '/files/Qureshi Abdul Kader Javed ResumeV-39.pdf'


function Hero() {
    const [isExploding, setIsExploding] = useState(false);


    const containerStyle = {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4', // Soft shadow
        borderRadius: '10px', // Rounded corners
        padding : '50px',
        background:'#D9EAFD'
        
      };



      const triggerExplosion = () => {
        setIsExploding(true);
    
        // Reset state after a short delay to allow re-triggering
        setTimeout(() => {
          setIsExploding(false);
        }, 100); // Adjust the duration to match the animation length
      };
    
        const handleDownloadPdf = () => {
          triggerExplosion();
          
          
    
          const pdfPath = pdf
    
          const link = document.createElement("a");
          link.href = pdfPath; // Path to the PDF in the public folder
          link.download = "Qureshi Abdul Kader Javed ResumeV-39.pdf"; // File name for download
          
          link.click();
          
        }
    


  return (
    <Container  style={containerStyle}>
    <Row >
{/* Left text  */}
      <Col md={6} className=" text-center py-4"  >
        <Stack>
          <LeftText />
          <Button style={{border:'none'
          }}className='btn btn-primary px-3 py-2 d-inline-block' onClick={handleDownloadPdf}>Download Resume</Button>
      
      {isExploding && <ConfettiExplosion force={0.5} particleCount={1000} width={1700}/>}
      
        </Stack>
      </Col>
      

{/* Right Image */}

      <Col md={6} className='align-items-center justify-content-center mx-auto'>
        <RightImage/>
      </Col>
    </Row>   
{/* Row 1 Complete */}



  </Container>

  )
}

export default Hero