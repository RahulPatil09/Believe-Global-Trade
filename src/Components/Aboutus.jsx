import React from 'react'
import { motion } from 'framer-motion'
import AboutUs from '../assets/AboutUs.png'
import "../styles/Aboutus.css"

function Aboutus() {
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

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='AboutUsMainDiv'>
      <motion.div 
        className='PrimaryDiv'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='SecondaryDiv'>
          <motion.div 
            className='AboutUsimgdiv'
            variants={imageVariants}
          >
            <motion.img 
              src={AboutUs} 
              alt="About Believe Global Trade" 
              className='AboutUsimg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className='TernaryDiv'
            variants={contentVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className='AboutUSText'>About Us</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className='DescriptionAboutUS'>
                Believe Global Trade is a dynamic export company driven by trust, quality, and global connectivity. 
                We specialize in sourcing and supplying premium products from India to international markets, 
                ensuring every shipment reflects reliability and excellence. With a strong focus on quality standards, 
                transparent documentation, and timely deliveries, we bridge the gap between producers and global 
                buyers. Our diverse export portfolio is carefully curated to meet international demands while 
                maintaining competitive pricing and ethical trade practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button 
                className='ReadMore'
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(11, 61, 145, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Aboutus
