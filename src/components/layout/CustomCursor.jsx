import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setLinkHovered(true);
      }
    };
    
    const handleMouseLeaveLink = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnterLink);
    document.addEventListener('mouseout', handleMouseLeaveLink);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnterLink);
      document.removeEventListener('mouseout', handleMouseLeaveLink);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Create an array for trailing dots
  const cursorTrail = [...Array(6)].map((_, i) => {
    const trailDelay = (i + 1) * 0.05;
    return (
      <motion.div
        key={i}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#00FFF7] opacity-70
                  ${i === 0 ? 'h-[5px] w-[5px]' : 'h-[3px] w-[3px]'}`}
        animate={{
          x: position.x - (i === 0 ? 2.5 : 1.5),
          y: position.y - (i === 0 ? 2.5 : 1.5),
          opacity: hidden ? 0 : 0.7 - (i * 0.1)
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
          delay: trailDelay,
        }}
      />
    );
  });

  // Main cursor variants
  const cursorVariants = {
    default: {
      height: 20,
      width: 20,
      x: position.x - 10,
      y: position.y - 10,
      backgroundColor: "rgba(0, 255, 247, 0)",
      border: "2px solid rgba(0, 255, 247, 0.6)",
      boxShadow: "0 0 8px rgba(0, 255, 247, 0.5)",
    },
    clicked: {
      height: 15,
      width: 15,
      x: position.x - 7.5,
      y: position.y - 7.5,
      backgroundColor: "rgba(0, 255, 247, 0.3)",
    },
    hovered: {
      height: 40,
      width: 40,
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: "rgba(0, 255, 247, 0.1)",
      mixBlendMode: "difference",
    }
  };

  return (
    <>
      {/* Cursor trails */}
      {cursorTrail}
      
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={cursorVariants}
        animate={linkHovered ? "hovered" : clicked ? "clicked" : "default"}
        transition={{ 
          type: "spring", 
          mass: 0.2, 
          stiffness: 400, 
          damping: 20,
          duration: 0.1
        }}
        style={{
          opacity: hidden ? 0 : 1
        }}
      />
    </>
  );
};

export default CustomCursor;
