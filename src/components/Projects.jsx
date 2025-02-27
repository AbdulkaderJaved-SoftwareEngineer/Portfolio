import {React,useRef,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import exam from '.././assets/ProjectImages/exam_cell.jpg'
import Button from 'react-bootstrap/Button'
import text from '.././assets/ProjectImages/text.png'
import open from '.././assets/ProjectImages/open.png'
import face from '../assets/ProjectImages/face.jpg'
import web from '../assets/ProjectImages/web.png'
import jewel from '../assets/ProjectImages/jewelry.png'

import ScrollTrigger  from "gsap/ScrollTrigger";
import { gsap } from "gsap";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);






const projectData = [

  {
    id: 1,
    imgsrc: web,
    ProjectTitle: "Portfolio Website",
    ProjectDescription: "Portfolio website containing all the details of my profile",
    Technologies: ["MERN Stack", "React.js", "Node.js"],
    GithubLink: "https://github.com/AbdulkaderJaved-SoftwareEngineer/Portfolio",
    CreatedDate: "December 2024",
  },
  {
    id: 2,
    imgsrc: face,
    ProjectTitle: "Smart Attendance System with Face Recognition and Anti-Spoofing Detection",
    ProjectDescription: "Developed an advanced face recognition system with integrated anti-spoofing deep learning to ensure secure attendance tracking.",
    Technologies: ["Deep Learning", "Computer Vision", "Python", "TensorFlow"],
    GithubLink: "https://github.com/AbdulkaderJaved-SoftwareEngineer/Smart_Attendance_System_using_Face_Recognition_with_Anti_Spoofing",
    CreatedDate: "August 2024",
  },
  {
    id: 3,
    imgsrc: text,
    ProjectTitle: "Text Summarization with NLP, Cosine Similarity, and Word2Vec",
    ProjectDescription: "Implemented an extractive text summarization application using NLP techniques, improving summary relevance and coherence.",
    Technologies: ["NLP", "Python", "Word2Vec", "Cosine Similarity"],
    GithubLink: "https://github.com/AbdulkaderJaved-SoftwareEngineer/Text-Summarization-with-NLP-Cosine-Similarity-and-Word2Vec",
    CreatedDate: "September 2024",
  },
  {
    id: 4,
    imgsrc: open,
    ProjectTitle: "Open Share - File Sharing Application",
    ProjectDescription: "Created a secure web application for file sharing with high-end encryption, ensuring data privacy and protection.",
    Technologies: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    GithubLink: "https://github.com/AbdulkaderJaved-SoftwareEngineer/OpenShareApp",
    CreatedDate: "June 2024",
  },
 
  {
    id: 6,
    imgsrc: exam,
    ProjectTitle: "E-Exam Cell",
    ProjectDescription: "Developed a system for seamless examination form submission, fee payment, and approval, streamlining administrative workflows.",
    Technologies: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    GithubLink: "https://github.com/AbdulkaderJaved-SoftwareEngineer/E_Exam_Cell",
    CreatedDate: "December 2023",
  },

  {
    id: 7,
    imgsrc: jewel,
    ProjectTitle: "Online Ecommerce Jewellery Website",
    ProjectDescription: "Developed an online ecommerce jewelry website",
    Technologies: ["HTML5","CSS3","JavaScript","JQuery","PHP","MySQL","Bootstrap"],
    GithubLink: "https://github.com/AbdulkaderJaved-SoftwareEngineer/Internship-Jewellery-Website",
    CreatedDate: "December 2023",
  },
 
];





// ... (projectData remains the same)

function Projects({ project}) {

  const cardRef = useRef(null);




  useEffect(() => {
    // Animate the card when it enters the viewport
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current, // Element to trigger animation
          start: "top 80%", // Animation starts when card enters the viewport
        },
      }
    );
  }, []);

  return (
    <Card className="mb-3"   style = {{
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
      zIndex:'3',
      background:'linear-gradient(to bottom, rgb(26, 30, 61), rgb(31, 17, 30))',
      backdropFilter: "blur(10px) brightness(80%)",
    }} 
    ref={cardRef}>
      <Row className="g-0">
        <Col xs={12} md={8} className="p-3"> {/* Changed Col structure here */}
          <Row className="g-0 align-items-center"> {/* Added g-0 to remove gutter */}
            <Col xs={12} md={3} className="d-flex justify-content-center mb-3 mb-md-0"> {/* Image column */}
              <img
                src={project.imgsrc}
                alt={project.ProjectTitle}
                style={{
                  maxWidth: "150px", // Set a maximum width
                  maxHeight: "150px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Col>
            <Col xs={12} md={9} style={{color:'white'}}
            > {/* Text content column */}
              <h5 style={{color:'#E0E0E0'}}>{project.ProjectTitle}</h5>
              <b ><label className="small" >Project Description:</label></b>
              <p className=" mb-2" style={{color:'#B0B0B0'}}>{project.ProjectDescription}</p>
              <b><small className="" >Created: {project.CreatedDate}</small></b>
            </Col>
          </Row>
        </Col>

        {/* Right Section (Technologies and GitHub Button) */}
        <Col xs={12} md={4} className="d-flex flex-column justify-content-center align-items-center p-3 border-start">
          <div className="mb-2 text-center">
            <label className="small text-white" ><span>Technologies Used:</span></label>
            <div className="d-flex flex-wrap justify-content-center">
              {project.Technologies.map((tech, index) => (
                <Badge key={index} 
                
                style={{backgroundColor:"#1E90FF"}}
                className='mx-1 mb-1'>{tech}</Badge>
                 


              ))}
            </div>
          </div>
          {/* <Button
            variant="dark"
            href={project.GithubLink}
            target="_blank"
            rel="noopener noreferrer"
            value="View on Github"
            >
         
            </Button> */}
           <Button style={{background:"#D32F2F",border:'none'}}
            href={project.GithubLink}
            target="_blank"
            rel="noopener noreferrer"> View On Github</Button>
        </Col>
      </Row>
    </Card>
  );
}

const ProjectList = () => {
  return (
    <div className="container mt-4">
      {projectData.map((project, index) => (
        <Projects key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
