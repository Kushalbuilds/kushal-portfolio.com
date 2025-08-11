import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/10 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-sans text-xl font-medium tracking-wide">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              KUSHAL<span className="text-accent-blue">.IO</span>
            </motion.div>
          </Link>
          
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="mr-4 text-xl focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-1 py-2 font-sans text-sm tracking-wide text-white hover:text-white/80 transition-colors duration-300 overflow-hidden"
              >
                <span>{item.name}</span>
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform origin-left 
                  transition-transform duration-300 ease-out ${
                    location.pathname === item.path 
                    ? 'scale-x-100' 
                    : 'scale-x-0 hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-[1px] w-full bg-white transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              />
              <span 
                className={`absolute h-[1px] bg-white transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-full top-2'
                }`}
              />
              <span 
                className={`absolute h-[1px] w-full bg-white transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md bg-black/80 border-t border-white/5"
          >
            {/* Dark/Light Toggle in mobile menu */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="text-xl focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
            </div>
            <nav className="container mx-auto px-6 py-6">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="relative block py-2 px-1 font-sans text-base tracking-wide text-gray-200 hover:text-white"
                    >
                      {item.name}
                      <span 
                        className={`absolute left-0 bottom-0 h-[1px] bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out ${
                          location.pathname === item.path ? 'scale-x-100' : ''
                        }`}
                      ></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
