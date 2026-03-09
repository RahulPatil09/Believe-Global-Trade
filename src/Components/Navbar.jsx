import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css"
import Logo from "../assets/Logo.png"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [menuTimeout, setMenuTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMenuEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setShowMenu(true);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setShowMenu(false);
    }, 150);
    setMenuTimeout(timeout);
  };

  const handleServiceClick = (service) => {
    navigate(`/services/${service.toLowerCase().replace(/\s+/g, '-')}`);
    setShowMenu(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="nav-container">
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={Logo} alt="Believe Global Trade" />
            <div className="logo-text">
              <span className="logo-name">Believe Global Trade</span>
              <span className="logo-tagline">Premium Export Solutions</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <motion.li 
              className="nav-item"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/">
                Home
                <motion.div className="nav-underline" />
              </Link>
            </motion.li>

            <motion.li 
              className="nav-item services-item"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/services" onClick={(e) => e.preventDefault()}>
                Services
                <motion.div className="nav-underline" />
              </Link>
              <AnimatePresence>
                {showMenu && (
                  <motion.div 
                    className="mega-menu"
                    onMouseEnter={handleMenuEnter}
                    onMouseLeave={handleMenuLeave}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="menu-column">
                      <h4>Import Solutions</h4>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Import Services')}
                      >
                        Import Services
                      </motion.p>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Customs Support')}
                      >
                        Customs Support
                      </motion.p>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Product Sourcing')}
                      >
                        Product Sourcing
                      </motion.p>
                    </div>

                    <div className="menu-column">
                      <h4>Export Solutions</h4>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Export Services')}
                      >
                        Export Services
                      </motion.p>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Documentation')}
                      >
                        Documentation
                      </motion.p>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Market Access')}
                      >
                        Market Access
                      </motion.p>
                    </div>

                    <div className="menu-column">
                      <h4>Industries</h4>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Agriculture')}
                      >
                        Agriculture
                      </motion.p>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Machinery')}
                      >
                        Machinery
                      </motion.p>
                      <motion.p 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        onClick={() => handleServiceClick('Textiles')}
                      >
                        Textiles
                      </motion.p>
                    </div>

                    <div className="menu-card">
                      <h3>Connecting markets.<br />Delivering trust.</h3>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact-us')}
                      >
                        Contact →
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li 
              className="nav-item"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/about">
                About
                <motion.div className="nav-underline" />
              </Link>
            </motion.li>

            <motion.li 
              className="nav-item"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/products">
                Products
                <motion.div className="nav-underline" />
              </Link>
            </motion.li>

            <motion.li 
              className="nav-item"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/contact-us">
                Support
                <motion.div className="nav-underline" />
              </Link>
            </motion.li>
          </ul>

          {/* CTA Button */}
          <motion.button 
            className="quote-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(11, 61, 145, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact-us')}
          >
            <FaPhoneAlt />
            Get Quote
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <FaTimes key="close" />
              ) : (
                <FaBars key="menu" />
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Cancel Button */}
            <motion.button 
              className="mobile-cancel-btn"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>

            <div className="mobile-menu-content">
              <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
              <Link to="/contact-us" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Support
              </Link>
              
              <motion.div 
                className="mobile-contact"
                custom={4}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="contact-item">
                  <FaPhoneAlt />
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>info@believeglobaltrade.com</span>
                </div>
                <div className="contact-item">
                  <FaGlobe />
                  <span>Ahmedabad, India</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
