import React from 'react';
import './ProjectCard.css'; // Assuming you have a CSS file for card styles

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
