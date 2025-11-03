// src/pages/OfflineClasses.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react'; // We'll add a map icon

// Define your colors
const colors = {
  pageBg: "#fff9ed",
  text: "#9e5423",
  buttonText: "#fff9ed",
  cardBg: "#ffffff" // White cards to stand out on the cream background
};

// Re-usable animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const OfflineClasses = () => {
  return (
    <motion.section 
      className="py-16 md:py-24" 
      style={{ backgroundColor: colors.pageBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* == TEXT CONTENT == */}
          <motion.div
            className="text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              Join Us In Person
            </motion.h1>
            
            <motion.p
              className="mt-6 text-lg"
              style={{ color: colors.text, opacity: 0.85 }}
              variants={itemVariants}
            >
              We offer offline classes at two convenient locations. Find the 
              schedule and place that works best for you.
            </motion.p>
            
            {/* --- LOCATION CARDS --- */}
            <motion.div className="mt-8 space-y-6" variants={itemVariants}>
              
              {/* Location 1: Kulathoor */}
              <div className="p-6 rounded-lg shadow-lg" style={{backgroundColor: colors.cardBg}}>
                <h3 className="text-2xl font-semibold" style={{color: colors.text}}>
                  Kulathoor Location
                </h3>
                <ul className="mt-4 space-y-2 list-disc list-inside" style={{color: colors.text}}>
                  <li><strong>Time:</strong> Evening 06:45pm</li>
                  <li><strong>Days:</strong> Monday, Wednesday, Friday</li>
                </ul>
                <motion.a
                  href="https://maps.app.goo.gl/ZBN4eN9xHwbeFhUN7" // ** REPLACE WITH YOUR KULATHOOR LINK **
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto mt-6 px-8 py-3 text-base font-medium rounded-full shadow-lg transition-transform"
                  style={{ backgroundColor: colors.text, color: colors.buttonText }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions (Kulathoor)
                </motion.a>
              </div>

              {/* Location 2: Kallummood Muttathara */}
              <div className="p-6 rounded-lg shadow-lg" style={{backgroundColor: colors.cardBg}}>
                <h3 className="text-2xl font-semibold" style={{color: colors.text}}>
                  Kallummood Muttathara Location
                </h3>
                <ul className="mt-4 space-y-2 list-disc list-inside" style={{color: colors.text}}>
                  <li><strong>Time:</strong> Evening 06:30pm</li>
                  <li><strong>Days:</strong> Tuesday, Thursday, Saturday</li>
                </ul>
                <motion.a
                  href="https://maps.app.goo.gl/cQbgevx8qTGRAsFn8" // ** REPLACE WITH YOUR KALLUMMOOD LINK **
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto mt-6 px-8 py-3 text-base font-medium rounded-full shadow-lg transition-transform"
                  style={{ backgroundColor: colors.text, color: colors.buttonText }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions (Kallummood)
                </motion.a>
              </div>

            </motion.div>
          </motion.div>
          
          {/* == IMAGE CONTENT == */}
          <motion.div 
            className="flex justify-center order-first md:order-last"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              loading="lazy"
              className="rounded-lg shadow-xl object-cover w-full max-w"
              src="/hero-image.png" // ** IMPORTANT: Add this image **
              alt="Offline yoga class"
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default OfflineClasses;