import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">
              Premium<span className="brand-highlight">IPTV</span>
            </span>
          </Link>

          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#movies" className="nav-link">Movies & Series</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-buttons">
            <button className="menu-toggle" onClick={toggleMobileMenu}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu-header">
              <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
                <span className="brand-text">
                </span>
              </Link>
              <button className="menu-toggle" onClick={toggleMobileMenu}>
                <CloseIcon />
              </button>
            </div>

            <div className="mobile-nav-links">
              <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#movies" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Movies & Series
              </a>
              <a href="#pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
