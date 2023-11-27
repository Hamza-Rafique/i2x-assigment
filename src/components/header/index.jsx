import React from "react";
import "./style.css";
import { logo } from "../../assets";
const Header = () => {
  return (
    <header class="container header">
      <img class="i2c-logo" src={logo} alt="i2c logo" />
      <div class="menu-toggle" onclick="toggleMenu()" aria-label="Toggle Menu">
        <span class="menu-icon">&#9776;</span>
      </div>
      <div class="links-container" id="linksContainer">
        <ul class="links">
          <li class="link">
            <a href="https://www.example.com">About us</a>
          </li>
          <li class="link">
            <a href="https://www.example.com">Registration</a>
          </li>
          <li class="link">
            <a href="https://www.example.com">Careers</a>
          </li>
        </ul>
        <button class="contact-us" aria-label="Contact us button">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
