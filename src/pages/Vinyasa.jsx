// src/pages/Vinyasa.jsx
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
  hidden: { x: -30, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Vinyasa = () => {
  return (
    <motion.section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.pageBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* === IMAGE CONTENT === */}
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/vinyasa.jpg"
              alt="Vinyasa yoga flow"
              className="rounded-2xl shadow-2xl object-cover w-full max-w-md md:max-w-lg"
            />
          </motion.div>

          {/* === TEXT CONTENT === */}
          <motion.div
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              Vinyasa Flow
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: colors.text, opacity: 0.85 }}
              variants={itemVariants}
            >
              A dynamic and creative style of yoga where postures flow seamlessly 
              together, guided by the rhythm of your breath. Each session feels 
              unique, energizing, and deeply connecting — a moving meditation in motion.
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="mt-10 space-y-4 text-left"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-2">What to Expect:</h3>
              <ul className="list-disc list-inside space-y-3 text-base md:text-lg">
                <li>
                  <strong className="font-semibold">Continuous Movement:</strong>{" "}
                  Seamless transitions create a dance-like flow.
                </li>
                <li>
                  <strong className="font-semibold">Breath-Synchronized:</strong>{" "}
                  Each motion aligns with a deep inhale or exhale.
                </li>
                <li>
                  <strong className="font-semibold">Creative Sequencing:</strong>{" "}
                  Every class is fresh, free-flowing, and guided by intuition.
                </li>
                <li>
                  <strong className="font-semibold">Builds Heat & Strength:</strong>{" "}
                  An invigorating practice that tones the body and clears the mind.
                </li>
              </ul>
            </motion.div>

            {/* Button */}
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
                View Vinyasa Classes
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Vinyasa;
