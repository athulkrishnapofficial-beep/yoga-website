// src/components/Loading.jsx
import React from "react";
import { motion } from "framer-motion";

const colors = {
  text: "#586d32",
  pageBg: "#F5F3E7",
  accent: "#B2C58B", // soft green accent
};

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen space-y-6"
      style={{ backgroundColor: colors.pageBg }}
    >
      {/* Spinner animation */}
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-3 h-3 rounded-full"
            style={{
              backgroundColor: colors.accent,
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 45}deg) translate(24px)`,
              transformOrigin: "center center",
            }}
            animate={{
              opacity: [1, 0.4, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Text animation */}
      <motion.h1
        className="text-2xl font-semibold tracking-wide"
        style={{ color: colors.text }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
      </motion.h1>
    </div>
  );
};

export default Loading;
