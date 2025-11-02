// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ashtanga from './pages/Ashtanga';
import Hatha from './pages/Hatha';
import Iyengar from './pages/Iyengar';
import Vinyasa from './pages/Vinyasa';
import Meditation from './pages/Meditation'; // <-- 1. Import Meditation page

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const colors = {
  pageBg: "#F5F3E7",
  text: "#586d32",
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> 
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ashtanga" element={<Ashtanga />} />
        <Route path="/hatha" element={<Hatha />} />
        <Route path="/iyengar" element={<Iyengar />} />
        <Route path="/vinyasa" element={<Vinyasa />} />
        <Route path="/meditation" element={<Meditation />} /> {/* <-- 2. Add this final route */}
        
        {/* All your main yoga style pages are now complete! */}
        
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.pageBg }}>
      
      <Navbar /> 

      <main>
        <AnimatedRoutes />
      </main>
      
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;