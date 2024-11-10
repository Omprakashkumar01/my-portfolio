// CertificateCard.js
import React from "react";
import "./CertificateCard.css"; // Add styling similar to ProjectCard.css

const CertificateCard = ({ title, institution, link, date,img }) => {
  return (
    <div
      className="certificate-card"
      onClick={() => link && window.open(link, "_blank")}
    >
      <img src={img} alt="certificate" ></img>
      
      {link && (
        <p className="certificate-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            
          </a>
        </p>
      )}
    </div>
  );
};

export default CertificateCard;
