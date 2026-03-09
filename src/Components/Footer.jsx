import React from "react";
import "../styles/Footer.css";
import { FcGlobe } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcCamera } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerContainer">

        {/* Company Info */}
        <div className="footerSection">
          <h2 className="footerLogo">Believe Global Trade</h2>
          <p>
            We specialize in exporting premium agricultural products 
            from India to global markets with trust, quality, and reliability.
          </p>
          <div className="socialIcons">
            <a href="#"><FcGlobe /></a>
            <a href="#"><FcAddressBook /></a>
            <a href="#"><FcCamera /></a>
            <a href="#"><FcBriefcase /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/why-choose-us">Why Choose Us</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul> 
        </div>

        {/* Services */}
        <div className="footerSection">
          <h3>Our Services</h3>
          <ul>
            <li>Global Sourcing</li>
            <li>Quality Inspection</li>
            <li>Export Documentation</li>
            <li>International Logistics</li>
            <li>Custom Orders</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footerSection">
          <h3>Contact Info</h3>
          <p>Email: info@believeglobaltrade.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Ahmedabad, Gujarat, India</p>
        </div>

      </div>

      <div className="footerBottom">
        © {new Date().getFullYear()} Believe Global Trade. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;