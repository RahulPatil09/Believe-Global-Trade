import React from "react";
import "../styles/Process.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Product Sourcing",
      description:
        "We carefully source high-quality agricultural products directly from trusted farmers and suppliers across India."
    },
    {
      number: "02",
      title: "Quality Inspection",
      description:
        "Every product undergoes strict quality checks to ensure compliance with international export standards."
    },
    {
      number: "03",
      title: "Packaging & Labeling",
      description:
        "We provide export-grade packaging solutions to maintain freshness, safety, and durability during transit."
    },
    {
      number: "04",
      title: "Documentation & Compliance",
      description:
        "Complete export documentation and regulatory compliance handling for smooth customs clearance."
    },
    {
      number: "05",
      title: "Global Shipping",
      description:
        "Efficient logistics coordination ensures timely delivery to international markets worldwide."
    }
  ];

  return (
    <div className="processPage">

      <div className="processHeader">
        <h1>Our Export Process</h1>
        <p>Delivering Excellence at Every Step of Global Trade</p>
      </div>

      <div className="processContainer">
        {steps.map((step, index) => (
          <div className="processStep" key={index}>
            <div className="processNumber">{step.number}</div>
            <div className="processContent">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Process;