import React from "react";
import "./style.css";
import { logo } from "../../assets";
const Header = () => {
  return (
    <header class="header">
      <img class="i2c-logo" src={logo} alt="i2c logo" />
      <div class="menu-toggle" onclick="toggleMenu()" aria-label="Toggle Menu">
        <span class="menu-icon">&#9776;</span>
      </div>
      <div class="links-container" id="linksContainer">
        <div class="links">
          <a class="link" href="#">
            About us
          </a>
          <a class="link" href="#">
            Registration
          </a>
          <a class="link" href="#">
            Careers
          </a>
        </div>
        <button class="contact-us" aria-label="Contact us button">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
