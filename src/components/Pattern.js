import React from 'react';

const Pattern = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none bg-black"
      style={{
        backgroundImage: `
          linear-gradient(
            -90deg,
            transparent calc(5em - 1px),
            rgba(255, 255, 255, 0.2) calc(5em - 1px),
            rgba(255, 255, 255, 0.2) 5em
          ),
          linear-gradient(
            0deg,
            transparent calc(5em - 1px),
            rgba(255, 255, 255, 0.2) calc(5em - 1px),
            rgba(255, 255, 255, 0.2) 5em
          )
        `,
        backgroundSize: '5em 5em'
      }}
    />
  );
};

export default Pattern;