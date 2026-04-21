import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Let us find your <br />
          <span className="hero-title-highlight">Forever Food.</span>
        </h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Search Now</button>
          <button className="btn-secondary">Know more</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;