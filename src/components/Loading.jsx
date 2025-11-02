// src/components/Loading.jsx
import React from 'react';

const colors = {
  text: "#586d32",
  pageBg: "#F5F3E7",
};

const Loading = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: colors.pageBg }}
    >
      <h1 
        className="text-2xl font-semibold"
        style={{ color: colors.text }}
      >
        Loading...
      </h1>
    </div>
  );
};

export default Loading;