// src/components/Loading.jsx
import React from "react";
import { motion } from "framer-motion";
import { SpinnerInfinity } from "./SpinnerInfinity"; 

const colors = {
  pageBg: "#F5F3E7",
  leaf: "#7BAE7F",
  leafDark: "#5E8C61",
  text: "#586d32",
};

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.pageBg }}
    >
      {/* ♾️ Styled Infinity Spinner */}
      <SpinnerInfinity
        className="w-16" // <-- Changed this from w-24 to w-16 (4rem or 64px)
        style={{ color: colors.text }} 
        secondaryColor={colors.leaf} 
        speed={70} 
        thickness={100}
      />

      {/* 🧘 Loading text */}
      <motion.h1
        className="mt-6 text-lg font-medium tracking-wide text-center" // <-- Changed this from mt-10 to mt-6
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