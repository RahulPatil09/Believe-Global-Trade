import React from "react";
import "../styles/ProductDetails.css";
import product1 from "../assets/Product1.png";

function ProductDetails() {
  return (
    <div className="detailsPage">
      <div className="detailsContainer">

        <div className="detailsImage">
          <img src={product1} alt="Kabuli Chana" />
        </div>

        <div className="detailsContent">
          <h1>Kabuli Chana</h1>
          <p className="detailsDescription">
            High-quality Kabuli Chana sourced from trusted farmers.
            Clean, uniform size, and export-grade quality suitable
            for international markets.
          </p>

          <div className="specifications">
            <h3>Product Specifications</h3>
            <ul>
              <li><strong>Origin:</strong> India</li>
              <li><strong>Size:</strong> 8mm / 9mm / 10mm</li>
              <li><strong>Packaging:</strong> 25kg / 50kg PP Bags</li>
              <li><strong>Moisture:</strong> Max 12%</li>
              <li><strong>Shelf Life:</strong> 12 Months</li>
            </ul>
          </div>

          <button className="enquiryBtn">Enquire Now</button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;