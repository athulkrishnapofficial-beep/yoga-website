// src/components/SparkleLeaves.jsx
// --- Alternative using PNG images ---
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Your Leaf Images (must be in /public folder) ---
const LEAF_IMAGES = [
  '/leaf-green.png',
  '/leaf-brown.png',
  '/leaf-sage.png',
];

// --- A Single Leaf Particle ---
const Leaf = ({ 
  x, 
  y, 
  imageUrl, // <-- CHANGED
  initialScale,
  xDrift,
  yDrift,
  duration
}) => {
  return (
    <motion.div
      className="absolute"
      style={{ top: y, left: x }}
      initial={{ opacity: 1, scale: initialScale }}
      animate={{ 
        opacity: 0, 
        scale: 0.3,
        y: y + yDrift,
        x: x + xDrift,
      }}
      transition={{ duration: duration, ease: 'easeOut' }}
    >
      <motion.img
        src={imageUrl} // <-- CHANGED
        alt="leaf"
        className="w-5 h-5" // 20px, same as SVG
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -20, 20, 0] }}
        transition={{
          duration: Math.random() * 1 + 0.5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
};

// --- The Main Component ---
const SparkleLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  const lastMoveTime = useRef(0);
  const throttleInterval = 50; 

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMoveTime.current < throttleInterval) return;
      lastMoveTime.current = now;

      setLeaves((prevLeaves) => [
        ...prevLeaves,
        {
          id: now,
          x: e.clientX + (Math.random() * 40 - 20),
          y: e.clientY + (Math.random() * 40 - 20),
          imageUrl: LEAF_IMAGES[Math.floor(Math.random() * LEAF_IMAGES.length)], // <-- CHANGED
          initialScale: Math.random() * 0.4 + 0.6, 
          xDrift: Math.random() * 40 - 20, 
          yDrift: Math.random() * 30 + 30, 
          duration: Math.random() * 1.0 + 1.5,
        },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-remove old leaves
  useEffect(() => {
    const interval = setInterval(() => {
      setLeaves((prevLeaves) => {
        const now = Date.now();
        return prevLeaves.filter((leaf) => now - leaf.id < 3000);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[60]"> 
      <AnimatePresence>
        {leaves.map((leaf) => (
          <Leaf
            key={leaf.id}
            x={leaf.x}
            y={leaf.y}
            imageUrl={leaf.imageUrl}
            initialScale={leaf.initialScale}
            xDrift={leaf.xDrift}
            yDrift={leaf.yDrift}
            duration={leaf.duration}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SparkleLeaves;