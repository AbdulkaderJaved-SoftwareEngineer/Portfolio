import {React,useRef,useEffect } from 'react'
import { gsap } from 'gsap';
function LeftText() {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
    
  useEffect(() => {
    // Target the text element and animate it
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out'}
    );


    gsap.fromTo(
      textRef1.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 2, ease: 'power3.out' }
    );
  }, []);
  
  
  
  const styles = {

        fontFamily: "Poppins, serif",
        fontWeight: "600",
        fontStyle: "normal",
        color:'white'
    
      }
     



      const stylesRegular = {
    
        fontFamily: "Poppins, serif",
        fontWeight: "100",
        fontStyle: "normal",
        fontSize:'13px',
        color:"white"
        
      }
    
    
      const gradient = {
        background: "#121FCF",
        backgroundColor: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
        // backgroundColor: 'linear-gradient(90deg, #ff7eb3, #ff758c, #ff7eb3)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        
      }
    


  return (
    <>
    <h1 style={styles} ref={textRef}>
    Hi <span style={{fontSize:'20px'}}>👋😊 </span>I am<br/>  <span style={{color:"white"}}  >Abdul Kader Javed Qureshi</span>

    </h1>
    <p style={stylesRegular} className='text-start' ref={textRef1}>
    I am currently pursuing a Bachelor's degree in Engineering in Information Technology at M.H. Saboo Siddik College of Engineering. As a practical knowledge seeker, I am always ready and eager to apply my skills to contribute meaningfully to the growth of an organization. I have a strong perspective for learning new things and expanding my expertise in the tech domain. I am committed to work in an environment where my abilities can enhance overall progress and innovation. 
</p>
</>
  )
}

export default LeftText