import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ml from '.././assets/Skills/machine-learning.svg';
import reactjs from '../assets/Skills/reactjs.svg'
import java from '../assets/Skills/java.svg'
import aws from '../assets/Skills/aws.svg'
import mongodb from '../assets/Skills/mongodb.svg'
import mysql from '../assets/Skills/mysql.svg'
import JS from '../assets/Skills/javascript.svg'

const TechnologyCard = ({ technology }) => {
  return (
    <div className="col-md-4 mb-4"> {/* Adjust column size as needed */}
      <div className="card h-100"> {/* h-100 for equal card heights */}
        <img
          src={technology.image}
          className="card-img-top img-fluid" // img-fluid for responsive images
          alt={technology.name}
          style={{ objectFit: 'contain', height:'200px' }} // Maintain image aspect ratio and set a fixed height
        />
  
        <div className="card-body d-flex flex-column align-items-center"> {/* Added flex column for content alignment */}
          <h5 className="card-title">{technology.name}</h5>
         
        </div>
      </div>
    </div>
  );
};

const TechnologyList = () => {
  const technologies = [
    {
      name: 'Java',
      image: `${java}`,
      description: 'A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      link: 'https://www.java.com/en/'
    },

    {
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
      description: 'A high-level, general-purpose programming language.',
      link: 'https://www.python.org/'
    },

    {
      name: 'JavaScript',
      image: `${JS}`,
   
    },

    {
      name: 'ReactJS',
      image: `${reactjs}`,
      description: 'A JavaScript library for building user interfaces.',
      link: 'https://reactjs.org/'
    },
    {
      name: 'Node.js',
      image: 'https://www.svgrepo.com/show/303360/nodejs-logo.svg',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      link: 'https://nodejs.org/en/'
    },
    {
      name: 'MongoDB',
      image: `${mongodb}`,
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      link: 'https://nodejs.org/en/'
    },
   
    {
      name: 'MySQL',
      image: `${mysql}`,
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      link: 'https://nodejs.org/en/'
    },
   
   
   
   
    
    
      {
        name: 'Machine Learning',
        image: `${ml}`,
        description: 'A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
        
      },
      {
        name: 'Deep Learning',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcDSGc2N3wDd7vvBv6cmeBOBCi3byKawzv9qa_pDvnZ1msaxKuv86cgA&s',
        description: 'A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
        
      },
      {
        name: 'AWS',
        image: `${aws}`,
        description: 'A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
        
      },
    




  ];

  return (
    <div className="container">
      <div className="row">
        {technologies.map((technology, index) => (
          <TechnologyCard key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyList;