import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-md">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold">Kushal Hiremath</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/about" 
            className={`transition-colors duration-300 ${isActive('/about') ? 'text-blue-200 font-medium' : 'hover:text-blue-200'}`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`transition-colors duration-300 ${isActive('/projects') ? 'text-blue-200 font-medium' : 'hover:text-blue-200'}`}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors duration-300 ${isActive('/contact') ? 'text-blue-200 font-medium' : 'hover:text-blue-200'}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-900 px-6 py-2">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/about" 
              className={`py-2 transition-colors duration-300 ${isActive('/about') ? 'text-blue-200 font-medium' : 'hover:text-blue-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`py-2 transition-colors duration-300 ${isActive('/projects') ? 'text-blue-200 font-medium' : 'hover:text-blue-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 transition-colors duration-300 ${isActive('/contact') ? 'text-blue-200 font-medium' : 'hover:text-blue-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;