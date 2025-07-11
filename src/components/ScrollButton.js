'use client';
import React from 'react';

const ScrollButton = ({ targetId = 'about-section', label = 'next section' }) => {
  const scrollToTarget = () => {
    const targetSection = document.querySelector(`#${targetId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToTarget}
      className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 group md:hidden"
      aria-label={`Scroll to ${targetId.replace('-', ' ')} section`}
    >
      <div className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors duration-300">
        <span className="text-xs font-light tracking-wider opacity-60 group-hover:opacity-80">
          {label}
        </span>
      </div>
    </button>
  );
};

export default ScrollButton;
