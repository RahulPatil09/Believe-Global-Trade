import React from "react";
import { motion } from "framer-motion";
import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Premium Quality Assurance",
      desc: "We maintain strict quality control to ensure every product meets international export standards. Our comprehensive quality management system covers every aspect from sourcing to delivery."
    },
    {
      number: "02",
      title: "Trusted Global Network",
      desc: "Strong relationships with verified farmers, suppliers, and international buyers. Our extensive network spans multiple continents, ensuring reliable supply chains and market access."
    },
    {
      number: "03",
      title: "Transparent Documentation",
      desc: "Complete and clear export documentation for smooth customs clearance. We handle all paperwork efficiently, ensuring compliance with international trade regulations."
    },
    {
      number: "04",
      title: "Competitive Pricing",
      desc: "Affordable pricing without compromising on product quality and service. Our strategic sourcing and efficient operations allow us to offer competitive rates."
    },
    {
      number: "05",
      title: "Timely Delivery",
      desc: "Efficient logistics management ensuring on-time global shipments. We work with trusted shipping partners to guarantee reliable delivery schedules."
    },
    {
      number: "06",
      title: "Customer-Centric Approach",
      desc: "We prioritize client satisfaction with customized solutions and dedicated support. Our team is committed to building long-term partnerships through exceptional service."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const sectionVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

  return (
    <motion.div 
      className="whyPage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="whyHeader"
        variants={headerVariants}
      >
        <h1>Why Choose Believe Global Trade?</h1>
        <p>Your Trusted Partner in Global Agricultural Exports</p>
        <div className="headerAccent"></div>
      </motion.div>

      <motion.div 
        className="whyContainer"
        variants={containerVariants}
      >
        {reasons.map((item, index) => (
          <motion.section 
            className={`whySection ${index % 2 === 0 ? 'leftAligned' : 'rightAligned'}`}
            key={index}
            variants={sectionVariants}
          >
            <div className="reasonNumber">
              <span>{item.number}</span>
            </div>
            <div className="reasonContent">
              <h2>{item.title}</h2>
              <div className="contentDivider"></div>
              <p>{item.desc}</p>
            </div>
            <div className="sectionAccent"></div>
          </motion.section>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default WhyChooseUs;