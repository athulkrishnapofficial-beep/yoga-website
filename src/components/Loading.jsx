// src/components/Loading.jsx
import React from "react";
import { motion } from "framer-motion";

const colors = {
  pageBg: "#F5F3E7",
  leaf: "#7BAE7F",
  leafDark: "#5E8C61",
  text: "#586d32",
};

const leaves = 8; // number of leaves in the circle

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen overflow-hidden relative"
      style={{ backgroundColor: colors.pageBg }}
    >
      {/* 🌿 Rotating Leaf Circle */}
      <motion.div
        className="relative w-16 h-16 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
      >
        {[...Array(leaves)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute origin-center"
            style={{
              transform: `rotate(${(360 / leaves) * i}deg) translate(25px)`,
            }}
          >
            <motion.div
              className="w-2 h-4 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${colors.leaf} 0%, ${colors.leafDark} 100%)`,
                boxShadow: `0 0 6px ${colors.leaf}60`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ✨ Inner glow aura */}
      <motion.div
        className="absolute w-10 h-10 rounded-full blur-xl"
        style={{
          background: `${colors.leaf}30`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* 🧘 Loading text */}
      <motion.h1
        className="mt-10 text-lg font-medium tracking-wide text-center"
        style={{ color: colors.text }}
        animate={{
          opacity: [0.6, 1, 0.6],
          y: [0, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        }}
      >
      </motion.h1>
    </div>
  );
};

export default Loading;
