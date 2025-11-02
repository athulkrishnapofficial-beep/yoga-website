import React from 'react';
import { motion } from 'framer-motion';

// Define your colors right in the component or import them
const colors = {
  navBg: "#fff9ed",
  text: "#9e5423",
  buttonText: "#fff9ed"
};

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Makes children animate in one by one
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Hero = () => {
  return (
    <section 
      className="min-h-[calc(100vh-5rem)] flex items-start" // <-- 1. CHANGED items-center to items-start
      style={{ backgroundColor: colors.navBg }} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-24"> {/* <-- 2. ADDED padding-top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* == TEXT CONTENT == */}
          {/* 'order-last' on mobile, 'order-first' on desktop */}
          <motion.div
            className="text-center md:text-left order-last md:order-first"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              Breathe, Move, and Find Your Center.
            </motion.h1>
            
            <motion.p
              className="mt-6 text-lg md:text-xl"
              style={{ color: colors.text, opacity: 0.85 }} // Slightly lighter text
              variants={itemVariants}
            >
              Discover peace, strength, and community at our yoga sanctuary. 
              All levels are welcome to join our journey.
            </motion.p>
            
            <motion.div
              className="mt-10"
              variants={itemVariants}
            >
              <motion.a
                href="/new-students" // Link to your "New Student Offer" page
                className="inline-block px-10 py-4 text-base font-medium rounded-full shadow-lg transition-transform"
                style={{ 
                  backgroundColor: colors.text, 
                  color: colors.buttonText 
                }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Try Our Intro Offer
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* == IMAGE CONTENT == */}
          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              className="rounded-lg object-cover w-full max-w-md md:max-w-full"
              src="/hero-image.png" // **IMPORTANT: Add an image here**
              alt="Calm yoga studio"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;