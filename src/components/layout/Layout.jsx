import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import StarfieldBackground from './StarfieldBackground';

const Layout = () => {
  const location = useLocation();

  


  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    out: {
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Dark mode state and effect
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen bg-dark overflow-hidden ${darkMode ? 'dark' : ''}`}> // pass darkMode to Navbar
      {/* Animated background */}
      <StarfieldBackground />
      

      
      {/* Main content */}
      <div className="relative z-10">
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="min-h-[calc(100vh-80px)]"
          >
            <main className="container mx-auto px-4 pb-16">
              <Outlet />
            </main>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
