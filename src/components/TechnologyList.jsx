import React, { forwardRef, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import ml from "../assets/Skills/machine-learning.svg";
import reactjs from "../assets/Skills/reactjs.svg";
import java from "../assets/Skills/java.svg";
import aws from "../assets/Skills/aws.svg";
import mongodb from "../assets/Skills/mongodb.svg";
import mysql from "../assets/Skills/mysql.svg";
import JS from "../assets/Skills/javascript.svg";

const TechnologyCard = forwardRef(({ technology }, ref) => {
  return (
    <div className="col-md-3 mb-3" ref={ref}>
      <div className="card h-70" style={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)" }}>
        <img
          src={technology.image}
          className="card-img-top img-fluid"
          alt={technology.name}
          style={{ objectFit: "contain", height: "200px" }}
        />

        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{technology.name}</h5>
        </div>
      </div>
    </div>
  );
});

const TechnologyList = ({ skillsRef }) => {
  const technologies = [
    { name: "Java", image: java, link: "https://www.java.com/en/" },
    { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "JavaScript", image: JS },
    { name: "ReactJS", image: reactjs, link: "https://reactjs.org/" },
    { name: "Node.js", image: "https://www.svgrepo.com/show/303360/nodejs-logo.svg" },
    { name: "MongoDB", image: mongodb },
    { name: "MySQL", image: mysql },
    { name: "Machine Learning", image: ml },
    { name: "Deep Learning", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcDSGc2N3wDd7vvBv6cmeBOBCi3byKawzv9qa_pDvnZ1msaxKuv86cgA&s" },
    { name: "AWS", image: aws },
  ];

  return (
    <div className="container" ref={skillsRef}>
      <h2 className="text-center my-4">Skills</h2>
      <div className="row">
        {technologies.map((technology, index) => (
          <TechnologyCard key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyList;
