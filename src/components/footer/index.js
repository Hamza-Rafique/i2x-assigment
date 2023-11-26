import React from "react";
import { logo } from "../../assets";
import "./style.css";
import "../header/style.css";

const Footer = () => {
  return (
    <>
      <footer class="header">
        <img class="i2c-logo" src={logo} alt="i2c logo" />
        <div class="links-container">
          <div class="links">
            <a class="link" href="#">
              FAQs
            </a>
            <a class="link" href="#">
              Privacy Policy
            </a>
            <a class="link" href="#">
              Other
            </a>
          </div>
          <button class="contact-us" aria-label="Contact us button">
            Contact us
          </button>
        </div>
      </footer>
      <span class="copy-right">
        Copyright © 2023 i2c inc. All rights reserved.
      </span>
    </>
  );
};

export default Footer;
