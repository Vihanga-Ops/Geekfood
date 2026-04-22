import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      {/* Logo */}
      <div className="footer-logo">
        <img
          src="https://logoipsum.com/a/your-logo"
          alt="logoipsum"
          className="footer-logo-img"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="footer-logo-icon">
          <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30 Q25 18 40 30" stroke="#2a9d8f" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M6 37 Q25 22 44 37" stroke="#2a9d8f" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M14 23 Q25 14 36 23" stroke="#2a9d8f" strokeWidth="4" fill="none" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="footer-logo-text">logoipsum</span>
      </div>

      {/* Tagline */}
      <p className="footer-tagline">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
        Incidunt consequuntur amet culpa cum itaque neque.
      </p>

      {/* Nav Links */}
      <nav className="footer-links">
        {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
            {link}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="footer-socials">

        {/* Facebook */}
        <a href="#" className="social-icon" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" className="social-icon" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>

        {/* Twitter / X */}
        <a href="#" className="social-icon" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.03-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 0 1-2.04.08c.57 1.79 2.24 3.09 4.21 3.13A9.05 9.05 0 0 1 0 19.54 12.8 12.8 0 0 0 6.92 21.5c8.3 0 12.84-6.88 12.84-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 23 3z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a href="#" className="social-icon" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
          </svg>
        </a>

        {/* Dribbble */}
        <a href="#" className="social-icon" aria-label="Dribbble">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
          </svg>
        </a>

      </div>

    </footer>
  );
}

export default Footer;