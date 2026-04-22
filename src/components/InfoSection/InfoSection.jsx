import React from 'react';
import './InfoSection.css';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-image">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Beautiful house with modern architecture"
          />
        </div>
        <div className="info-content">
          <h2 className="info-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
          </h2>
          <p className="info-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! 
            Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat 
            totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
          </p>
          <button className="info-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;