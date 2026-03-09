import React from "react";
import { motion } from "framer-motion";
import "../styles/Feedback.css";

function Feedback() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Global Imports Ltd.",
      designation: "CEO",
      country: "United Kingdom",
      feedback: "Believe Global Trade has been our trusted partner for over 3 years. Their quality standards and timely deliveries have exceeded our expectations consistently. Exceptional service and reliability.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Asia Pacific Foods",
      designation: "Procurement Director",
      country: "Singapore",
      feedback: "Outstanding quality control and documentation. Believe Global Trade makes international trade seamless and hassle-free. Their team understands our requirements perfectly.",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Silva",
      company: "Brazil Exports Corp",
      designation: "Operations Manager",
      country: "Brazil",
      feedback: "Professional, reliable, and always responsive. They've helped us expand our agricultural export business significantly with their expertise and market knowledge.",
      rating: 5
    },
    {
      id: 4,
      name: "Aisha Patel",
      company: "Middle East Trading Co.",
      designation: "Supply Chain Head",
      country: "UAE",
      feedback: "Exceptional service and premium quality products. Their comprehensive approach to export logistics and documentation is unmatched in the industry. Highly recommended!",
      rating: 5
    },
    {
      id: 5,
      name: "David Thompson",
      company: "Euro Trade Solutions",
      designation: "Import Manager",
      country: "Germany",
      feedback: "Reliable shipping solutions and excellent customer support. Believe Global Trade has streamlined our import operations and reduced costs significantly.",
      rating: 4
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      company: "Americas Trading Group",
      designation: "Quality Assurance Lead",
      country: "USA",
      feedback: "Outstanding quality control and documentation. Their attention to detail and commitment to excellence sets them apart from other exporters.",
      rating: 5
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

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <motion.div 
      className="feedbackPage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="feedbackHeader"
        variants={headerVariants}
      >
        <h1>Client Testimonials</h1>
        <p>What Our Global Partners Say About Our Export Services</p>
        <div className="headerAccent"></div>
      </motion.div>

      <motion.div 
        className="testimonialsContainer"
        variants={containerVariants}
      >
        <div className="testimonialsGrid">
          {testimonials.map((testimonial) => (
            <motion.div 
              className="testimonialCard"
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 40px rgba(11, 61, 145, 0.15)"
              }}
            >
              <div className="cardHeader">
                <div className="clientInfo">
                  <h3>{testimonial.name}</h3>
                  <p className="designation">{testimonial.designation}</p>
                  <p className="company">{testimonial.company}</p>
                  <div className="countryBadge">
                    <span>{testimonial.country}</span>
                  </div>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="testimonialContent">
                <p>"{testimonial.feedback}"</p>
              </div>
              
              <div className="cardFooter">
                <div className="testimonialAccent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Feedback;