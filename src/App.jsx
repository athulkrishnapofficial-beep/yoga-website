// src/App.jsx
import React, { Suspense, lazy } from 'react'; // <-- 1. Import Suspense and lazy
import Navbar from './components/Navbar';
import Loading from './components/Loading'; // <-- 2. Import your new Loading component

// 3. Change all your page imports to use React.lazy()
const Home = lazy(() => import('./pages/Home'));
const Ashtanga = lazy(() => import('./pages/Ashtanga'));
const Hatha = lazy(() => import('./pages/Hatha'));
const Iyengar = lazy(() => import('./pages/Iyengar'));
const Vinyasa = lazy(() => import('./pages/Vinyasa'));
const Meditation = lazy(() => import('./pages/Meditation'));

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const colors = {
  pageBg: "#F5F3E7",
  text: "#586d32",
};

// Your AnimatedRoutes component stays the same
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
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.pageBg }}>
      
      <Navbar /> 

      <main>
        {/*
          4. Wrap your routes in a <Suspense> component
          This tells React what to show while it's "suspending" 
          to go fetch the lazy-loaded page file.
        */}
        <Suspense fallback={<Loading />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;