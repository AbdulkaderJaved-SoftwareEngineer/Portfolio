import {React,useRef,useEffect} from 'react'

import Image from 'react-bootstrap/Image';
import newImg from '../../src/assets/myImage.png'
import { gsap } from 'gsap';
function RightImage() {

  const ImageRef = useRef(null);
  
  useEffect(() => {
    // Target the text element and animate it
    gsap.fromTo(
      ImageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 3, ease: 'power3.out',
        rotate: 360,
        transformOrigin: 'center center',
      
      }
    );
  }, []);




  return (
    
<>


<Image src={newImg} ref={ImageRef} roundedCircle className="img-fluid" 
style={{
    width:'350px',
    height:'350px',
    objectFit:"cover",
    marginLeft:'10%',
    boxShadow: '10px 10px 39px 0px rgba(0,0,0,0.75)'
    }}/>



</>  )
}

export default RightImage