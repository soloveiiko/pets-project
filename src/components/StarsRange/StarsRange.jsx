import React from 'react';
import { icoStars } from '@static';

const StarsRange = () => {
  return (
    <div className="stars-range__list">
      <img src={icoStars} alt="Star" />
      <img src={icoStars} alt="Star" />
      <img src={icoStars} alt="Star" />
      <img src={icoStars} alt="Star" />
      <img src={icoStars} alt="Star" />
    </div>
  );
};

export default StarsRange;