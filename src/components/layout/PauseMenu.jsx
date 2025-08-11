import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PauseMenu = ({ onClose }) => {
  const menuItems = [
    { title: 'Home Base', path: '/', icon: '🏠', description: 'Return to main interface' },
    { title: 'About Me', path: '/about', icon: '👤', description: 'Character stats & profile' },
    { title: 'Projects', path: '/projects', icon: '💼', description: 'View completed missions' },
    { title: 'Experience', path: '/experience', icon: '⚔️', description: 'Battle record & skills' },
    { title: 'Contact', path: '/contact', icon: '📡', description: 'Establish communication' }
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 400, 
        damping: 25,
        delay: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="bg-[#111827]/90 border border-[#00FFF7]/30 rounded-lg shadow-neon-blue 
                  w-11/12 max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Menu Header */}
        <div className="relative border-b border-[#00FFF7]/30 p-6 text-center">
          <h2 className="font-orbitron text-2xl text-[#00FFF7]">SYSTEM PAUSED</h2>
          <div className="absolute top-4 right-4">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-[#00FFF7] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Menu Items */}
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.2 + index * 0.1 }
              }}
            >
              <Link 
                to={item.path}
                onClick={onClose}
                className="group flex items-center p-3 mb-2 rounded-md hover:bg-[#00FFF7]/10 
                          transition-all duration-300 border border-transparent 
                          hover:border-[#00FFF7]/30"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-[#111827] rounded-md border border-[#00FFF7]/20 
                              flex items-center justify-center mr-4 group-hover:scale-110 
                              transition-transform duration-300">
                  <span className="text-xl">{item.icon}</span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-orbitron text-[#00FFF7] text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
                
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FFF7]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </nav>
        
        {/* Menu Footer */}
        <div className="border-t border-[#00FFF7]/30 p-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full py-3 font-orbitron text-sm bg-[#00FFF7] text-[#111827] 
                    rounded-md hover:shadow-neon-blue transition-all duration-300"
          >
            RESUME SYSTEM
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PauseMenu;
