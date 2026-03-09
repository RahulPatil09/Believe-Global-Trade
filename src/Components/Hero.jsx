import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="backgroundimg">
          <img src="" alt="" className="Homeimg" />
        </div>

        <motion.div 
          className="herocontent"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="subtitle">GLOBAL TRADE SOLUTIONS</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="Heading">
              Connecting India to the World <br />
              Through Trusted Global Trade.
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="description">
              We specialize in seamless international trade, ensuring quality products,
              smooth logistics, and trusted global partnerships.
            </p>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            variants={buttonVariants}
          >
            <motion.button 
              className="primary-btn"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(43, 108, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="secondary-btn"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(43, 108, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;