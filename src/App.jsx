import { forwardRef,useRef,useState,React } from 'react'
import Container from 'react-bootstrap/Container'
import NavbarTop from './components/NavbarTop'

import Dropdown from 'react-bootstrap/Dropdown';
import ProjectList from './components/Projects';
import StyledText from './components/StyledText';
import TechnologyList from './components/TechnologyList';
import CertificateCarousal from './components/CertificateCarousal';
import Footer from './components/Footer';
import Hero from './components/Hero';




function App() {

const skillsRef = useRef(null);
const contactRef = useRef(null);

const scrollToSkills = () => {
  if (skillsRef.current) {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const scrollToContact = () => {
  if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};





  return (
    <div style={{background: 'rgb(2,0,36)',
      background: 'linear-gradient(257deg, rgba(2,0,36,1) 0%, rgba(75,151,158,1) 70%, rgba(52,16,30,1) 100%)'}}>





      <NavbarTop onSkillsClick={scrollToSkills} onContactClick={scrollToContact} />
<br/>
      <Hero /> 



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

<TechnologyList skillsRef={skillsRef}/>


</Container>






<Container>
  <br /><br />
<StyledText text='My Certifications'/>
<hr/>
<CertificateCarousal />

<br/><br/>
</Container>
<Container fluid>

<Footer contactRef={contactRef}/>

</Container>


    </div>
  )
}

export default App;
