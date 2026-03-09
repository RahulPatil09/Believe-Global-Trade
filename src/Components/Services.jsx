import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Global Sourcing",
      desc: "We source high-quality agricultural products directly from trusted farmers and suppliers across India. Our extensive network ensures consistent supply of premium products meeting international quality standards and specifications."
    },
    {
      number: "02",
      title: "Quality Inspection",
      desc: "Strict quality control processes ensure that every product meets international export standards. Our expert team conducts thorough inspections at multiple stages to guarantee product excellence and compliance."
    },
    {
      number: "03",
      title: "Export Documentation",
      desc: "Complete handling of export documentation including invoices, certificates, and customs clearance. We streamline the entire documentation process to ensure smooth international trade operations."
    },
    {
      number: "04",
      title: "Packaging & Labeling",
      desc: "Secure and export-grade packaging to maintain freshness and product safety during transit. We use industry-standard materials and techniques to protect products throughout the supply chain."
    },
    {
      number: "05",
      title: "International Logistics",
      desc: "Reliable shipping solutions with timely delivery to global destinations. Our logistics network spans multiple continents, ensuring efficient and cost-effective transportation solutions."
    },
    {
      number: "06",
      title: "Custom Orders",
      desc: "We provide customized product quantities and packaging based on buyer requirements. Our flexible approach allows us to meet specific client needs and market demands."
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
    hidden: { y: 60, opacity: 0 },
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
    hidden: { y: -40, opacity: 0 },
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
      className="servicesPage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="servicesHero"
        variants={headerVariants}
      >
        <h1>Our Export Services</h1>
        <p className="heroSubtitle">Delivering Excellence in Every Step of Global Trade</p>
        <div className="heroAccent"></div>
      </motion.div>

      <motion.div 
        className="servicesIntro"
        variants={headerVariants}
      >
        <p>
          At Believe Global Trade, we offer comprehensive export solutions designed to meet the diverse needs of international markets. 
          Our services are built on trust, quality, and reliability, ensuring seamless trade operations from sourcing to delivery.
        </p>
      </motion.div>

      <motion.div 
        className="servicesContainer"
        variants={containerVariants}
      >
        {services.map((item, index) => (
          <motion.section 
            className="serviceSection"
            key={index}
            variants={sectionVariants}
          >
            <div className="serviceHeader">
              <div className="serviceNumber">
                <span>{item.number}</span>
              </div>
              <h2>{item.title}</h2>
              <div className="serviceDivider"></div>
            </div>
            <div className="serviceContent">
              <p>{item.desc}</p>
              <motion.button 
                className="serviceBtn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(11, 61, 145, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.section>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
