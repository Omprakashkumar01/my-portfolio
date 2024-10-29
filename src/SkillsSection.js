import React, { useEffect, useRef, useState } from "react";
import "./SkillsSection.css";

const skills = [
  { name: "DSA with C++", level: 90 },
  { name: "Python", level: 75 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Express", level: 70 },
  { name: "SQL", level: 85 },
  { name: "Mongodb", level: 85 },
  { name: "RestAPI", level: 85 },
  { name: "PostgreSQL", level: 50 },
  { name: "Data Preprocessing", level: 80 },
  { name: "AWS", level: 60 },
  { name: "Bash Scripting", level: 60 },
  { name: "Linux", level: 80 },
  { name: "Prompt Engineering", level: 75 },
  { name: "Linear Regression Models", level: 65 },
];

const SkillsSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle the 'animate' class based on whether the section is visible
        if (entry.isIntersecting) {
          ref.current.classList.add("animate");
        } else {
          ref.current.classList.remove("animate"); // Remove the class when out of view
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section id="skills">
      <div className="skills-background">
        <div className="skills-section" ref={ref}>
          <h2>Skills</h2>
          <div className="skills-container">
            {skills.map((skill) => (
              <div key={skill.name} className="skill">
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
