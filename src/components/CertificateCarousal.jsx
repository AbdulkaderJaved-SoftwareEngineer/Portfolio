import Carousel from 'react-bootstrap/Carousel';
import dl from '.././assets/Certificates/dl.png'
import reactjs from '.././assets/Certificates/reactjs.png'
import ms from '.././assets/Certificates/microsoft.png'
import sap from '.././assets/Certificates/sap.png'
import ml from '.././assets/Certificates/ml.png'
import iot from '.././assets/Certificates/iot.png'
import msa from '.././assets/Certificates/microsoft_array.png'
import aws from '.././assets/Certificates/aws.png'
import SIH from '.././assets/Certificates/SIH.png'
import Oracle from ".././assets/Certificates/oracle.png";
import {Datadog} from ".././assets/Certificates/dd.png"
function CertificateCarousal() {
  return (
    <Carousel data-bs-theme="dark" interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={reactjs}
          alt="Reacts"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ml}
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dl}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Datadog}
          alt="Third slide"
        />
        
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aws}
          alt="Third slide"
        />
        
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Oracle}
          alt="Third slide"
        />
        
      </Carousel.Item>


      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sap}
          alt="Third slide"
        />
        
      </Carousel.Item>


      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SIH}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iot}
          alt="Third slide"
        />
        
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ms}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={msa}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CertificateCarousal;