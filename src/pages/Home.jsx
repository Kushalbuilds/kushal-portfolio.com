import { useState, useEffect } from 'react';
import profilePhoto from '../assets/profilephoto.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnter(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white text-black dark:bg-dark dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Enhanced Glowing Background Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Primary glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 bg-gradient-to-r from-accent-blue to-accent-purple blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0], 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          style={{ left: '10%', top: '15%' }}
        />
        
        {/* Secondary glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-15 bg-gradient-to-r from-accent-purple to-accent-pink blur-3xl"
          animate={{ 
            x: [0, -25, 0], 
            y: [0, 25, 0], 
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          style={{ right: '15%', bottom: '20%' }}
        />
        
        {/* Accent glow */}
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-10 bg-gradient-to-r from-accent-pink to-accent-blue blur-3xl"
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -20, 0], 
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          style={{ left: '60%', top: '60%' }}
        />
      </div>



      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl px-6 relative">
        {/* Profile Photo */}
        <div className="flex justify-center mb-8">
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className="w-40 h-40 rounded-full object-cover border-4 border-accent-blue shadow-lg" 
          />
        </div>
        {/* Name Heading with enhanced animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="font-sans text-5xl md:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
        >
          I'm{' '}
          <span className="text-gradient bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
            KUSHAL HIREMATH
          </span>
        </motion.h1>

        {/* Enhanced Animated Roles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="font-sans text-2xl md:text-3xl text-gray-300 mb-10 min-h-[3rem]"
        >
          <TypeAnimation
            sequence={[
              'Electronics Engineer',
              2000,
              'Software Developer',
              2000,
              'Problem Solver',
              2000,
              'Innovation Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-accent-blue font-medium"
          />
        </motion.div>

        {/* Enhanced Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-gray-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Code Create Innovate Repeat.
          <br />
          <span className="text-accent-blue/80">Connecting technology with real-world applications.</span>
        </motion.p>

        {/* Enhanced Enter Button */}
        <AnimatePresence>
          {showEnter && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                type: 'spring', 
                stiffness: 200, 
                damping: 20 
              }}
            >
              <Link to="/projects">
                <motion.button
                  className="group relative px-12 py-5 text-accent-blue font-orbitron font-semibold text-xl
                             border-2 border-accent-blue/40 hover:border-accent-blue/80 
                             bg-black/20 backdrop-blur-xl rounded-lg
                             hover:bg-accent-blue/10 transition-all duration-500
                             shadow-neon-blue hover:shadow-neon-purple
                             overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(0, 230, 246, 0.6), 0 0 60px rgba(0, 230, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    [ENTER THE PORTFOLIO]
                  </span>

                  {/* Enhanced shimmer overlay */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  />

                  {/* Glitch effect on hover */}
                  <span
                    className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/10 transition-all duration-300
                               opacity-0 group-hover:opacity-100"
                    style={{ animation: 'flicker 2s infinite alternate' }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{
          opacity: { duration: 1, delay: 2.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
      >
        {/* <div className="flex flex-col items-center text-gray-400">
          <span className="font-vt323 mb-3 text-accent-blue/70">SCROLL</span>
          <motion.svg 
            width="24" 
            height="36" 
            viewBox="0 0 24 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent-blue/50"
          >
            <rect x="2" y="2" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="2" />
            <motion.circle
              cx="12" cy="12" r="4"
              fill="currentColor"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.5 }}
            />
          </motion.svg>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default Home;
