import React from "react";
import { logo } from "../../assets";
import "./style.css";
import "../header/style.css";

const Footer = () => {
  return (
    <>
      <footer class="container">
        <div className="footer">
          <img class="i2c-logo" src={logo} alt="i2c logo" />
          <div class="links-container">
            <ul class="links">
              <li class="link">
                <a href="#">FAQs</a>
              </li>
              <li class="link">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="link">
                <a href="#">Other</a>
              </li>
            </ul>
            <button class="contact-us" aria-label="Contact us button">
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
