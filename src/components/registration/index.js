import React from "react";
import './style.css'
import { side } from "../../assets";
const RegistrationForm = () => {
  return (
    <>
      <section class="registration">
        <div class="registration-container">
          <div class="registration-image">
            <img
              src={side}
              alt="Registration Image"
              width="505"
              height="575"
              class="hero-img"
            />
          </div>
          <div class="registration-content">
            <h1>Register</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
              tristique senectus dui pharetra sit.
            </p>
            <form id="registrationForm">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="company">Company:</label>
                <input type="text" id="company" name="company" required />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit" class="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default RegistrationForm;
