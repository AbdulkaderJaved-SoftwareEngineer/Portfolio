import React from 'react'

import Image from 'react-bootstrap/Image';
import newImg from '../../src/assets/myImage.png'

function RightImage() {


  

  return (
    
<>


<Image src={newImg} roundedCircle className="img-fluid" 
style={{
    width:'350px',
    height:'350px',
    objectFit:'cover',
    marginLeft:'10%'
    }}/>



</>  )
}

export default RightImage