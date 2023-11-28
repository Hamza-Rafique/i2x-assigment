import React from "react";
import { logo } from "../../assets";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer class="container">
        <div className="footer">
          <a href="https://www.example.com">
            <img class="i2c-logo" src={logo} alt="i2c logo" />{" "}
          </a>
          <div class="footer-links-container">
            <ul class="footer-links">
              <li class="footer-link">
                <a href="https://www.example.com">FAQs</a>
              </li>
              <li class="footer-link">
                <a href="https://www.example.com">Privacy Policy</a>
              </li>
              <li class="footer-link">
                <a href="https://www.example.com">Other</a>
              </li>
            </ul>
            <button class="footer-contact-us" aria-label="Contact us button">
              Contact us
            </button>
          </div>
        </div>
        <span class="copy-right">
          Copyright © 2023 i2c inc. All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
