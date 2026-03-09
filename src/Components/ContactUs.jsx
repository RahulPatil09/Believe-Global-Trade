import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";
import "../styles/ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

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

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "info@believeglobaltrade.com",
      href: "mailto:info@believeglobaltrade.com"
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#"
    },
    {
      icon: <FiGlobe />,
      label: "Website",
      value: "www.believeglobaltrade.com",
      href: "https://www.believeglobaltrade.com"
    }
  ];

  return (
    <motion.div 
      className="contactPage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="contactHeader"
        variants={headerVariants}
      >
        <h1>Contact Us</h1>
        <p>Let's Connect and Grow Your Business Globally</p>
        <div className="headerAccent"></div>
      </motion.div>

      <motion.div 
        className="contactContainer"
        variants={containerVariants}
      >
        <motion.div 
          className="contactInfoSection"
          variants={leftVariants}
        >
          <div className="infoHeader">
            <h2>Get in Touch</h2>
            <p>We're here to help you expand your global trade opportunities</p>
            <div className="infoAccent"></div>
          </div>

          <div className="contactInfoGrid">
            {contactInfo.map((info, index) => (
              <motion.a 
                href={info.href}
                className="contactInfoCard"
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(11, 61, 145, 0.15)"
                }}
              >
                <div className="infoIcon">
                  <span>{info.icon}</span>
                </div>
                <div className="infoContent">
                  <h3>{info.label}</h3>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          
        </motion.div>

        <motion.div 
          className="contactFormSection"
          variants={rightVariants}
        >
          <div className="formHeader">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you soon</p>
            <div className="formAccent"></div>
          </div>
          
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="formGroup">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="formGroup">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6" 
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(11, 61, 145, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactUs;
