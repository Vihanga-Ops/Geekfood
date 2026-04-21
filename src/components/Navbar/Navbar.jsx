import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('Home');

  const navLinks = ['Home', 'Quote', 'Resturants', 'Foods', 'Contact'];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          alt="GeekFoods Logo"
          className="logo-img"
        />
        <span className="logo-text">GeekFoods</span>
      </div>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={active === link ? 'active' : ''}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="navbar-btn">Get started</button>
    </nav>
  );
}

export default Navbar;