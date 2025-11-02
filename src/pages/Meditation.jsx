// src/pages/Meditation.jsx
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

const Meditation = () => {
  return (
    <motion.section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.pageBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Grid Layout === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* === IMAGE CONTENT === */}
          <motion.div
            className="flex justify-center order-first md:order-last"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/meditation-image.jpeg"
              alt="Person meditating peacefully"
              className="rounded-2xl shadow-2xl object-cover w-full max-w-md md:max-w-lg h-[480px]"
              loading="lazy"
            />
          </motion.div>

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
              Guided Meditation
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: colors.text, opacity: 0.85 }}
              variants={itemVariants}
            >
              Meditation is a journey inward — a way to quiet the noise of the
              mind and cultivate presence, balance, and clarity. Our guided sessions
              invite you to explore calm awareness in a nurturing environment.
            </motion.p>

            {/* === FEATURE LIST === */}
            <motion.div
              className="mt-10 space-y-4 text-left"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-2">Our Approach:</h3>
              <ul className="list-disc list-inside space-y-3 text-base md:text-lg">
                <li>
                  <strong className="font-semibold">Guided Sessions:</strong> Our
                  experienced instructors gently lead you through proven techniques.
                </li>
                <li>
                  <strong className="font-semibold">All Levels Welcome:</strong>{" "}
                  Whether you’re a beginner or have a daily practice, everyone belongs.
                </li>
                <li>
                  <strong className="font-semibold">Reduce Stress:</strong> Learn
                  tools to release tension and invite inner peace.
                </li>
                <li>
                  <strong className="font-semibold">Improve Focus:</strong> Train
                  your mind to stay centered and clear in daily life.
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
                View Meditation Sessions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Meditation;
