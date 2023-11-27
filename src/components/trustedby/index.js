import React from "react";
import Slider from "react-slick";
import "./style.css";
import { slider_one, slider_three, slider_two, trustedby } from "../../assets";

const TrustedBy = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="trusted">
      <div className="trustedby-text">
        <img src={trustedby} alt="Trusted By" width="205" height="54" />
        <p className="sub-heading-of-this">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img src={slider_one} alt=" 1" />
          </div>
          <div className="slide">
            <img src={slider_two} alt=" 2" />
          </div>
          <div className="slide">
            <img src={slider_three} alt="3" />
          </div>
          <div className="slide">
            <img src={slider_one} alt="1" />
          </div>
          <div className="slide">
            <img src={slider_two} alt=" 2" />
          </div>
          <div className="slide">
            <img src={slider_three} alt=" 3" />
          </div>
          <div className="slide">
            <img src={slider_one} alt=" 1" />
          </div>
          <div className="slide">
            <img src={slider_two} alt=" 2" />
          </div>
          <div className="slide">
            <img src={slider_three} alt=" 3" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TrustedBy;
