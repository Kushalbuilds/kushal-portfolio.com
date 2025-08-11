import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import PauseMenu from './PauseMenu';
import CustomCursor from './CustomCursor';

const GameLayout = () => {
  const [isPaused, setIsPaused] = useState(false);
  const location = useLocation();
  
  // Load menu state from localStorage on mount
  useEffect(() => {
    const savedPauseState = localStorage.getItem('gamePaused');
    if (savedPauseState) {
      setIsPaused(JSON.parse(savedPauseState));
    }
  }, []);
  
  // Save menu state to localStorage when changed
  useEffect(() => {
    localStorage.setItem('gamePaused', JSON.stringify(isPaused));
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0C10] text-gray-100 font-inter">
      {/* Custom cursor effect */}
      <CustomCursor />
      
      {/* Dynamic background (we'll implement this later) */}
      <div className="fixed inset-0 z-0">
        {/* This will be replaced with Three.js or Vanta.js background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0B0C10]" />
      </div>
      
      {/* Pause Button - styled as a futuristic HUD element */}
      <button 
        onClick={togglePause}
        className="fixed top-6 right-6 z-50 px-5 py-2 bg-transparent border-2 
                  border-[#00FFF7] hover:bg-[#00FFF7]/10 text-[#00FFF7] font-orbitron 
                  text-sm tracking-wider shadow-[0_0_10px_rgba(0,255,247,0.5)] transition-all 
                  duration-300 hover:shadow-[0_0_15px_rgba(0,255,247,0.8)] rounded"
        aria-label="Menu"
      >
        {isPaused ? 'RESUME' : 'MENU'}
      </button>
      
      {/* Main Content with Page Transitions */}
      <main className={`relative z-10 min-h-screen transition-all duration-300 ${isPaused ? 'blur-sm' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Pause Menu Modal */}
      <AnimatePresence>
        {isPaused && <PauseMenu onClose={togglePause} />}
      </AnimatePresence>
    </div>
  );
};

export default GameLayout;
