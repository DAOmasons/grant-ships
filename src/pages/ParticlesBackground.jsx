// src/ParticlesBackground.jsx
import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', null);
    }
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>;
};

export default ParticlesBackground;
