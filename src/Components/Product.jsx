import React from "react";
import { motion } from "framer-motion";
import "../styles/Product.css";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.png";
import Product6 from "../assets/Product6.png";
import Product7 from "../assets/Product7.png";
import Product8 from "../assets/Product8.png";
import Product9 from "../assets/Product9.png";
import Product10 from "../assets/Product10.png";

function Product() {
  const products = [
    {
      name: "Kabuli Chana",
      description: "High-quality Kabuli Chana for global markets. Premium grade chickpeas sourced directly from trusted farms, ensuring consistent quality and meeting international export standards.",
      image: Product1, 
    },
    {
      name: "Red Chilli Powder",
      description: "Naturally ground red chilli powder with rich flavor. Made from carefully selected red chillies, processed under strict quality control to maintain authentic taste and vibrant color.",
      image: Product2,
    },
    {
      name: "Fresh Onion",
      description: "Premium quality fresh onions for export. Hand-selected for size, quality, and shelf life, meeting international standards for global culinary markets.",
      image: Product3,
    },
    {
      name: "Dried Onion",
      description: "High-quality dehydrated onions with excellent flavor retention. Perfect for food processing industries and international culinary applications.",
      image: Product4,
    },
    {
      name: "Garlic Powder",
      description: "Premium garlic powder with strong flavor profile. Made from fresh garlic bulbs, processed to maintain natural oils and essential compounds.",
      image: Product5,
    },
    {
      name: "Onion Powder",
      description: "Fine quality onion powder with consistent flavor. Ideal for seasoning blends, food manufacturing, and international spice markets.",
      image: Product6,
    },
    {
      name: "Green Chilli",
      description: "Fresh green chillies with vibrant color and flavor. Carefully harvested and processed to maintain freshness for global markets.",
      image: Product7,
    },
    {
      name: "Red Chilli",
      description: "Naturally grown red chillies with perfect heat balance. Hand-picked from premium farms, meeting international quality standards.",
      image: Product8,
    },
    {
      name: "Turmeric Powder",
      description: "High curcumin turmeric powder with exceptional color. Sourced from premium quality turmeric, processed under strict quality control.",
      image: Product9,
    },
    {
      name: "Turmeric Fingers",
      description: "Premium quality turmeric fingers with high curcumin content. Naturally dried and processed to maintain medicinal properties and flavor.",
      image: Product10,
    },
  ];

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
      className="productPage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="productHeader"
        variants={headerVariants}
      >
        <h1>Our Export Products</h1>
        <p>Delivering Quality Agricultural Products Worldwide</p>
      </motion.div>

      <motion.div 
        className="productSections"
        variants={containerVariants}
      >
        {products.map((item, index) => (
          <motion.section 
            className={`productSection ${index % 2 === 0 ? 'imageLeft' : 'imageRight'}`}
            key={index}
            variants={sectionVariants}
          >
            <div className="productImage">
              <motion.img 
                src={item.image} 
                alt={item.name}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
              />
            </div>
            <div className="productInfo">
              <div className="productTitle">
                <h2>{item.name}</h2>
                <div className="titleAccent"></div>
              </div>
              <p className="productDescription">{item.description}</p>
              <motion.button 
                className="productBtn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(11, 61, 145, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Enquire Now
              </motion.button>
            </div>
          </motion.section>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Product;