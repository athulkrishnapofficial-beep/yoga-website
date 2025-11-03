// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- Static Components ---
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Footer from './components/Footer';

// --- Lazy-Loaded Page Components ---
const Home = lazy(() => import('./pages/Home'));
const Ashtanga = lazy(() => import('./pages/Ashtanga'));
const Hatha = lazy(() => import('./pages/Hatha'));
const Iyengar = lazy(() => import('./pages/Iyengar'));
const Vinyasa = lazy(() => import('./pages/Vinyasa'));
const Meditation = lazy(() => import('./pages/Meditation'));
const OfflineClasses = lazy(() => import('./pages/OfflineClasses'));


// --- Global Styles ---
const colors = {
  pageBg: "#F5F3E7", // Your earthy cream background
  text: "#586d32",
};

/**
 * Handles all animated page transitions.
 */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    // 'mode="wait"' ensures the old page animates out before the new one animates in.
    <AnimatePresence mode="wait"> 
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ashtanga" element={<Ashtanga />} />
        <Route path="/hatha" element={<Hatha />} />
        <Route path="/iyengar" element={<Iyengar />} />
        <Route path="/vinyasa" element={<Vinyasa />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/offline-classes" element={<OfflineClasses />} />
      </Routes>
    </AnimatePresence>
  );
}

/**
 * The main application component.
 * Lays out the static Navbar/Footer and the dynamic, routed page content.
 */
function App() {
  return (
    // 'flex flex-col' and 'min-h-screen' ensure the footer sticks to the bottom.
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.pageBg }}>
      
      <Navbar /> 

      {/* 'flex-grow' makes the main content area expand to fill all available space */}
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;