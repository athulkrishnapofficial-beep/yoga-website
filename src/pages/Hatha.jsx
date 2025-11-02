// src/pages/Hatha.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const colors = {
  pageBg: "#fff9ed", // soft cream background
  text: "#586d32", // sage green
  accent: "#8b9a46", // olive tone for hover
  buttonText: "#fff9ed", // light text
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hatha = () => {
  return (
    <motion.section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: colors.pageBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f3e2] via-transparent to-[#fff9ed] opacity-70 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* === IMAGE SECTION === */}
          <motion.div
            className="flex justify-center order-first md:order-last"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <img
                className="rounded-3xl object-cover w-full max-w"
                src="/hatha-image.png"
                alt="Hatha yoga pose"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#e4e1d0] rounded-3xl w-24 h-24 blur-3xl opacity-60"></div>
            </div>
          </motion.div>

          {/* === TEXT SECTION === */}
          <motion.div
            className="space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              Hatha Yoga
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: colors.text, opacity: 0.9 }}
              variants={itemVariants}
            >
              <span className="font-semibold">Hatha Yoga</span> is the classical
              foundation of all modern yoga forms. It focuses on balancing the
              sun (Ha) and moon (Tha) energies through physical postures, mindful
              breathing, and stillness — cultivating harmony between body and
              mind.
            </motion.p>

            {/* What to Expect */}
            <motion.div
              className="pt-4 border-t border-[#d6d3ca]"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-3">What to Expect:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>
                  <strong>Slower Pace:</strong> Poses are held longer to deepen
                  awareness and connection.
                </li>
                <li>
                  <strong>Focus on Alignment:</strong> Learn the correct
                  positioning to safely strengthen your practice.
                </li>
                <li>
                  <strong>Pranayama (Breath Control):</strong> Techniques to
                  regulate energy and calm the nervous system.
                </li>
                <li>
                  <strong>Mindful Stillness:</strong> Develop patience and inner
                  peace through steady postures.
                </li>
                <li>
                  <strong>Accessible for All Levels:</strong> Ideal for
                  beginners yet beneficial for advanced practitioners.
                </li>
              </ul>
            </motion.div>

            {/* Benefits Section */}
            <motion.div className="pt-6" variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-3">Benefits of Hatha Yoga:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>Improves posture, flexibility, and body awareness.</li>
                <li>Reduces stress and promotes deep relaxation.</li>
                <li>Enhances balance, stability, and focus.</li>
                <li>Boosts energy and supports overall well-being.</li>
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div className="pt-8" variants={itemVariants}>
              <motion.a
                href="/schedule"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full shadow-md text-lg transition-transform"
                style={{
                  backgroundColor: colors.text,
                  color: colors.buttonText,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colors.accent,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                Join Hatha Classes
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hatha;
