// ProjectCard.js
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ name, link, image }) => {
  return (
    <div
      className="project-card"
      onClick={() => window.open(link, "_blank")}
    >
      <img src={image} alt={`${name} screenshot`} className="project-image" />
      <h3 className="project-name">{name}</h3>
    </div>
  );
};

export default ProjectCard;
