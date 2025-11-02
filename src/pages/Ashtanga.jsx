// src/pages/Ashtanga.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const colors = {
  pageBg: "#fff9ed", // soft cream
  text: "#586d32", // sage green
  accent: "#8b9a46", // olive accent
  buttonText: "#fff9ed",
};

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

const Ashtanga = () => {
  return (
    <motion.section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: colors.pageBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f3e2] via-transparent to-[#fff9ed] opacity-70 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* === LEFT: TEXT === */}
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
              Ashtanga Vinyasa Yoga
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: colors.text, opacity: 0.9 }}
              variants={itemVariants}
            >
              <span className="font-semibold">Ashtanga Yoga</span> is a
              transformative, breath-synchronized practice that connects body,
              mind, and spirit. Through a structured flow of postures, it builds
              inner heat, improves strength and flexibility, and cultivates
              mindfulness with every inhale and exhale.
            </motion.p>

            {/* Key Elements */}
            <motion.div
              className="pt-4 border-t border-[#d6d3ca]"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-3">Key Elements:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>
                  <strong>Ujjayi Breath:</strong> The “victorious breath” that
                  builds internal heat and enhances focus.
                </li>
                <li>
                  <strong>Bandhas:</strong> Energy locks that activate core
                  stability and guide prana flow.
                </li>
                <li>
                  <strong>Drishti:</strong> Focused gaze points that encourage
                  concentration and awareness.
                </li>
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div className="pt-6" variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-3">
                Benefits of Practice:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>Enhances physical strength and endurance.</li>
                <li>Promotes mental clarity and emotional balance.</li>
                <li>Supports detoxification through deep breathing.</li>
                <li>Encourages discipline and self-awareness.</li>
              </ul>
            </motion.div>

            {/* CTA Button */}
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
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  backgroundColor: colors.accent,
                }}
              >
                Join Ashtanga Classes
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* === RIGHT: IMAGE === */}
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <img
                className="rounded-3xl object-cover w-full max-w"
                src="/ashtanga-image.png"
                alt="Ashtanga yoga pose"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#e4e1d0] rounded-3xl w-24 h-24 blur-3xl opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Ashtanga;
