import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PixelAvatar = () => {
  const [frame, setFrame] = useState(0);
  
  // Simple animation frames for the avatar
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prevFrame => (prevFrame + 1) % 4);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="relative w-48 h-48 md:w-64 md:h-64"
      initial={{ y: 10 }}
      animate={{ y: [0, -5, 0, 5, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: 5, 
        ease: "easeInOut" 
      }}
    >
      {/* Base pixel art container */}
      <div className="w-full h-full relative">
        {/* This would be replaced with your actual pixel art SVG or sprite */}
        <div className="w-full h-full bg-indigo-900 rounded-full overflow-hidden border-4 border-indigo-400 shadow-neon-blue">
          {/* SVG pixel art would go here */}
          <svg 
            viewBox="0 0 64 64" 
            className="w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Simple pixel face */}
            <rect x="0" y="0" width="64" height="64" fill="#3730A3" />
            
            {/* Face outline */}
            <rect x="16" y="14" width="32" height="40" fill="#FFDBB9" />
            
            {/* Hair - different frame animations */}
            {frame === 0 && (
              <>
                <rect x="14" y="12" width="36" height="12" fill="#333333" />
                <rect x="12" y="14" width="4" height="10" fill="#333333" />
              </>
            )}
            {frame === 1 && (
              <>
                <rect x="14" y="12" width="36" height="12" fill="#333333" />
                <rect x="12" y="15" width="4" height="9" fill="#333333" />
              </>
            )}
            {frame === 2 && (
              <>
                <rect x="14" y="12" width="36" height="12" fill="#333333" />
                <rect x="12" y="14" width="4" height="10" fill="#333333" />
                <rect x="48" y="14" width="4" height="10" fill="#333333" />
              </>
            )}
            {frame === 3 && (
              <>
                <rect x="14" y="12" width="36" height="12" fill="#333333" />
                <rect x="48" y="15" width="4" height="9" fill="#333333" />
              </>
            )}
            
            {/* Eyes - blink occasionally based on frame */}
            {frame !== 2 ? (
              <>
                <rect x="22" y="26" width="6" height="6" fill="#333333" />
                <rect x="36" y="26" width="6" height="6" fill="#333333" />
              </>
            ) : (
              <>
                <rect x="22" y="28" width="6" height="2" fill="#333333" />
                <rect x="36" y="28" width="6" height="2" fill="#333333" />
              </>
            )}
            
            {/* Mouth */}
            <rect x="28" y="38" width="8" height="4" fill="#333333" />
            
            {/* Simple shirt collar */}
            <rect x="22" y="54" width="20" height="6" fill="#38BDF8" />
          </svg>
        </div>
      </div>
      
      {/* Glow effect under the avatar */}
      <div className="absolute -bottom-4 left-0 right-0 h-8 bg-indigo-500 rounded-full filter blur-lg opacity-50"></div>
    </motion.div>
  );
};

export default PixelAvatar;
