// components/AOSInitializer.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800, // duration of the animation (in ms)
      once: true,    // whether animation should happen only once - default is false
    });
  }, []);
  return null; // This component doesn't render anything
};

export default AOSInitializer;