import React from 'react';

const StyledText = ({ text }) => {
  const textStyle = {
    fontSize: '30px', // Adjust size as needed
    display: 'inline-block',
    fontFamily: "Poppins, serif",
    fontWeight: "550",
    fontStyle: "normal",
  };

  const spanStyle = (index) => ({
    animation: 'colorChange 2s linear infinite', // Adjust duration as needed
    display: 'inline-block',
    animationDelay: `${index * 0.3}s`,
  });

  const keyframesStyle = `
    @keyframes colorChange {
      0% { color: rgb(0, 110, 255); }
      33% { color: rgb(168, 0, 255); }
      66% { color: rgb(255, 0, 85); }
      100% { color: rgb(0, 110, 255); }
    }
  `;

  return (
    <div style={textStyle}>
      <style>{keyframesStyle}</style> {/* Inject keyframes */}
      {text.split(",").map((letter, index) => (
        <span key={index} style={spanStyle(index)}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default StyledText;