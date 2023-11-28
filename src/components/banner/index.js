import React from "react";
import "./style.css";
import { sideOne, user_one, user_three, user_two } from "../../assets";

const Banner = () => {
  const userImages = [user_one, user_two, user_three];
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="text-container">
          <div className="text">
            <h1 className="heading">
              Lorem ipsum
              <span className="dollar" aria-hidden="true">
                dolor
              </span>
              sit amet yo 👋
            </h1>
          </div>
          <div className="card-container">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="card" key={index}>
                <div className="content-container">
                  <img
                    src={userImages[index]}
                    alt={`User ${index + 1}`}
                    width="64"
                    height="64"
                  />
                  <div className="para">
                    <h2 className="card-heading">Andrew Schultz</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae, in tristique senectus dui pharetra sit.
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="empty" aria-hidden="true"></div>
          </div>
        </div>
        <div>
          <img src={sideOne} alt="Hero Side" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
