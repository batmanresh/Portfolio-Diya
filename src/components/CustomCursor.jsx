import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-pink-400 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    />
  );
}