import React from "react";
import "./style.css";
import { more, support } from "../../assets";

const BrandCard = ({ image, heading, para }) => (
  <div className="card">
    <div className="content-container">
      <img src={image} alt={heading} width="64" height="64" />
      <div className="para">
        <h2 className="card-heading">{heading}</h2>
        <p>{para}</p>
      </div>
    </div>
  </div>
);

const Brands = () => {
  const brandData = [
    {
      image: support,
      heading: "24/7 Support",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: more,
      heading: "1000+ of reviews",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: support,
      heading: "And more!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="info">
      {brandData.map((brand, index) => (
        <BrandCard key={index} {...brand} />
      ))}
    </section>
  );
};

export default Brands;
