// ProjectsSection.js
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import diceeGameImg from './asset/dicee.png';
import weatherimg from './asset/weather.jpg';
import genai from './asset/genai.jpeg';
import objdet from './asset/objdet.jpeg';
import drum from './asset/drum.png';
import simon from './asset/simon.png';
import "./ProjectsSection.css";

const projects = [
  {
    name: "GEN-AI AWS",
    link: "https://github.com/Omprakashkumar01/GenAI-AWS-",
    image: genai,
  },
  {
    name: "Object detection model",
    link: "https://github.com/Omprakashkumar01/object-detection-model",
    image: objdet,
  },
  {
    name: "Dicee Game",
    link: "https://github.com/Omprakashkumar01/dicee_game",
    image: diceeGameImg,
  },
  {
    name: "Weather App",
    link: "https://github.com/Omprakashkumar01/weather_app",
    image: weatherimg,
  },
  {
    name: "Simon Game",
    link: "https://github.com/Omprakashkumar01/simon_game",
    image: simon,
  },
  {
    name: "Drum kit",
    link: "https://github.com/Omprakashkumar01/drum_kit",
    image: drum,
  },
];

const ProjectsSection = () => {
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
    <div className="projects-section" ref={sectionRef}>
      <h2 className={`project-title ${isVisible ? "float-up" : ""}`}>Projects</h2>
      <div className={`projects-container ${isVisible ? "float-up" : ""}`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
