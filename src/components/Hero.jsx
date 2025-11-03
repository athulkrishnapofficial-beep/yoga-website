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
      className="min-h-[calc(100vh-5rem)] flex items-start" 
      style={{ backgroundColor: colors.navBg }} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* == TEXT CONTENT == */}
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
            
            {/* --- BUTTON CONTAINER - MODIFIED --- */}
            <motion.div
              // This stacks them on mobile and puts them in a row on desktop
              className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center md:items-start"
              variants={itemVariants}
            >
              {/* == BUTTON 1: OFFLINE CLASS (Google Maps) == */}
              <motion.a
                // ** REPLACE THIS with your Google Maps link **
                href="/offline-classes"
                target="_blank" 
                rel="noopener noreferrer"
                // w-full on mobile, w-auto on desktop
                className="inline-block w-full md:w-auto text-center px-10 py-4 text-base font-medium rounded-full shadow-lg transition-transform"
                style={{ 
                  backgroundColor: colors.text, 
                  color: colors.buttonText 
                }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Our Offline Class
              </motion.a>

              {/* == BUTTON 2: ONLINE CLASS (WhatsApp) == */}
              <motion.a
                // ** REPLACE THIS with your WhatsApp link **
                href="https://wa.me/919496601244?text=Hello!%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20joining%20your%20online%20yoga%20class.%20Could%20you%20please%20send%20me%20more%20details%3F"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center px-10 py-4 text-base font-medium rounded-full shadow-lg transition-transform border"
                style={{ 
                  backgroundColor: colors.navBg, 
                  color: colors.text, 
                  borderColor: colors.text 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                  backgroundColor: colors.text, 
                  color: colors.buttonText      
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Join Our Online Class
              </motion.a>

              {/* == BUTTON 3: DEMO CLASS (WhatsApp) - NEW == */}
              <motion.a
                // ** REPLACE THIS with your Demo WhatsApp link **
                href="https://wa.me/919496601244?text=Hello!%20I%27m%20interested%20in%20trying%20a%20demo%20class"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center px-10 py-4 text-base font-medium rounded-full shadow-lg transition-transform border"
                style={{ 
                  backgroundColor: colors.navBg, 
                  color: colors.text, 
                  borderColor: colors.text 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                  backgroundColor: colors.text, 
                  color: colors.buttonText      
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Try Our Demo Class
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
              src="/hero-image.png" 
              alt="Calm yoga studio"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;