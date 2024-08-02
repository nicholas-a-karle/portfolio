import React from 'react';
//import './Card.css'

import { Link } from 'react-router-dom';
import './ImageTextCard.css'; 

const ImageTextCard = ({ title, image, link, children }) => {
  return (
    <div className='card-container'>
      <Link to={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="image-text-card-wrapper">
          <img src={image} alt={title} className="card-image" />
          <div className="card-content">
            {children}
          </div>
        </div>
      </Link>
      </div>
  );
};

export default ImageTextCard;
