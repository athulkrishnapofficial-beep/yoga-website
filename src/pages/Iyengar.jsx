// src/pages/Iyengar.jsx
import React from "react";
import { motion } from "framer-motion";

// === Color Palette ===
const colors = {
  pageBg: "#fff9ed",
  text: "#586d32",
  buttonText: "#fff9ed",
};

// === Animation Variants ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90 },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Iyengar = () => {
  return (
    <motion.section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.pageBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8">
        {/* === Grid Layout === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          

          {/* === TEXT CONTENT === */}
          <motion.div
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              Iyengar Yoga
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: colors.text, opacity: 0.85 }}
              variants={itemVariants}
            >
              Iyengar Yoga emphasizes precision, alignment, and deep awareness in
              every pose. It is ideal for developing balance, mobility, and strength
              while nurturing mindfulness through structure and discipline.
            </motion.p>

            {/* === FEATURE LIST === */}
            <motion.div
              className="mt-10 space-y-4 text-left"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-3 text-base md:text-lg">
                <li>
                  <strong className="font-semibold">Use of Props:</strong> Blocks,
                  straps, blankets, and bolsters help you achieve proper alignment.
                </li>
                <li>
                  <strong className="font-semibold">Longer Holds:</strong> Poses are
                  held for more time to build stability and focus.
                </li>
                <li>
                  <strong className="font-semibold">Therapeutic Approach:</strong>{" "}
                  Gentle yet powerful practice for recovery and pain management.
                </li>
                <li>
                  <strong className="font-semibold">Structured Progression:</strong>{" "}
                  Sequences designed to safely deepen your practice step-by-step.
                </li>
              </ul>
            </motion.div>

            {/* === BUTTON === */}
            <motion.div className="mt-12" variants={itemVariants}>
              <motion.a
                href="/schedule"
                className="inline-block px-10 py-4 text-base font-medium rounded-full shadow-lg transition-transform"
                style={{
                  backgroundColor: colors.text,
                  color: colors.buttonText,
                }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                View Iyengar Classes
              </motion.a>
              
            </motion.div>
          </motion.div>
          {/* === IMAGE CONTENT === */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/iyengar.png"
              alt="Iyengar yoga with props"
              className="rounded-2xl object-cover w-full max-w"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Iyengar;
