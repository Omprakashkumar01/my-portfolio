// CertificatesSection.js
import React, { useEffect, useRef, useState } from "react";
import CertificateCard from "./CertificateCard";
import img1 from "./asset/udemy-certificate.png";
import img2 from "./asset/freecodecamp-certificate.png";
import "./CertificatesSection.css"; // Add styling similar to ProjectsSection.css

const certificates = [
  {
    title: "Full Stack Development with MERN",
    institution: "Udemy",
    link: "https://www.udemy.com/certificate/UC-e843031c-a1f0-469d-b622-75e1b727bd56/",
    date: "Completion Date",
    image: img1,
  },
  {
    title: "Scientific Computing with Python",
    institution: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/certification/fcc186d76e3-ff15-4c34-9f44-c42a0295e85c/scientific-computing-with-python-v7",
    date: "Completion Date",
    image: img2,
  },
];

const CertificatesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div id="certificates" className="certificates-section" ref={sectionRef}>
      <h2 className={`certificate-title ${isVisible ? "float-up" : ""}`}>Certificates</h2>
      <div className={`certificates-container ${isVisible ? "float-up" : ""}`}>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            institution={certificate.institution}
            link={certificate.link}
            date={certificate.date}
            img={certificate.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
