// Card.js
import React from 'react';

import './Card.css'

const Card = ({ width, margin, padding, children }) => {

  const cardWrapperParamStyle = {
    width: width || '60%',
    margin: margin || '1rem',
    padding: padding || '5%'
  };

  return (
    <div className='card-container'>
      <div className='card-wrapper' style={cardWrapperParamStyle}>
        {children}
      </div>
    </div>
  );
};

export default Card;
