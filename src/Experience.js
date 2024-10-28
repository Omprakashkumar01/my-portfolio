import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

const experiences = [
  {
    title: "DevOps Engineer Intern",
    company: "Presear Softwares Pvt. Ltd.",
    duration: "January 2024 - March 2024",
    description: "Gained hands-on experience deploying websites using AWS EC2 and AWS Amplify. Learned about AWS Load Balancer and its workings.",
  },
  {
    title: "Full Stack Intern",
    company: "IEEE Bombay Section",
    duration: "March 2024 - May 2024",
    description: "Worked on building web applications using SvelteKit, focusing on user experience and responsive design.",
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStates, setAnimationStates] = useState(Array(experiences.length).fill(false));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger h2 animation
            experiences.forEach((_, index) => {
              setTimeout(() => {
                setAnimationStates((prev) => {
                  const newStates = [...prev];
                  newStates[index] = true;
                  return newStates;
                });
              }, index * 300); // Delay for staggered effect
            });
          } else {
            setIsVisible(false); // Reset h2 animation
            setAnimationStates(Array(experiences.length).fill(false)); // Reset cards
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="experience-section" ref={sectionRef}>
      <h2 className={`exp ${isVisible ? "animate" : ""}`}>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div
            className={`experience-card ${animationStates[index] ? "animate-left" : ""}`}
            key={index}
          >
            <h3>{exp.title}</h3><br></br>
            <h4>{exp.company}</h4><br></br>
            <p>{exp.duration}</p><br></br>
            <p>{exp.description}</p><br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
