// src/components/Background.jsx
import React from 'react';
import bgLight from '../assets/bg-light.jpg';

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat dark:hidden overflow-hidden">
      <img
        src={bgLight}
        alt="light mode background"
        className="w-full h-full object-cover opacity-50 overflow-hidden"
      />
    </div>
  );
};

export default Background;
