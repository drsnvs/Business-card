import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <Scissors className="w-8 h-8 text-gold" />
            <span className="text-xl font-serif font-bold text-white">Shree Hari Creation</span>
          </a>
          {/* <a href="#home" className="flex items-center space-x-2">
            <img
              src="https://www.svgrepo.com/show/102527/clothes-rack.svg"
              alt="Clothes Rack"
              className="w-8 h-8"
            />
            <span className="text-xl font-serif font-bold text-white">Shree Hari Creation</span>
          </a> */}


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-gold transition-colors">About</a>
            <a href="#collection" className="text-white hover:text-gold transition-colors">Collection</a>
            <a href="#contact" className="text-white hover:text-gold transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-navy/95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-gold p-2 transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-white hover:text-gold p-2 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#collection" className="text-white hover:text-gold p-2 transition-colors" onClick={toggleMenu}>Collection</a>
            <a href="#contact" className="text-white hover:text-gold p-2 transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;