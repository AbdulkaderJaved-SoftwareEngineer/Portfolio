import {React,useEffect,useRef} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";

import ScrollTrigger  from "gsap/ScrollTrigger";
import { gsap } from "gsap";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);




const education = [

  { FontAW:faSchool,title: "Dawood Bhoy Fazal Bhoy High School", year: "2018 - 2019", description: "Completed Secondary School Certificate (SSC).",score:"78.40%",Certificate:"SSC"},
  { FontAW:faBuildingColumns,title: "M.H Saboo Siddik Polytechnic", year: "2019 - 2022", description: "Earned a diploma in Information Technology.",Certificate:"Diploma in I.T",score:"88.50%"  },
  { FontAW:faGraduationCap,title: "M.H Saboo Siddik College of Engineering", year: "2022 - 2025", description: "Pursuing a Bachelor's in Engineering, focusing on software development and AI.",score:9.51,Certificate:"B.E" },
];

const EducationTimeline = () => {
    const newRef = useRef(null);




    useEffect(() => {
      // Animate the card when it enters the viewport
      gsap.fromTo(
        newRef.current,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: newRef.current, // Element to trigger animation
            start: "top 90%", // Animation starts when card enters the viewport
          },
        }
      );
    }, []);




  return (
    <Container className="my-5">
      
      <Row className="d-flex flex-column align-items-center" >
        {education.map((edu, index) => (
          <Col md={8} key={index} className="mb-4">
            <Card className="text-white bg-dark border-primary" ref={newRef}>
              <Card.Body>
              <FontAwesomeIcon icon={edu.FontAW}/>
                <h4 className="text-primary">{edu.title}</h4>
                <h6 className="text-white">Score : {edu.score}  </h6>
                <h6 className="text-white">{edu.year}</h6>
                <h6 className="text-white"> Degree : {edu.Certificate}</h6>
                <Card.Text>{edu.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EducationTimeline;
