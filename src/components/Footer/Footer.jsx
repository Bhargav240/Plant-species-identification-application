// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>Plant Identifier</h2>
          <p className="tagline">Discover Nature's Hidden Beauty</p>
          <div className="separator"></div>
        </div>

        <div className="footer-sections-wrapper">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Plant Database</a></li>
              <li><a href="#">Gardening Tips</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="social-links">
              <li><a href="#" className="facebook">Facebook</a></li>
              <li><a href="#" className="twitter">Twitter</a></li>
              <li><a href="#" className="instagram">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <div className="newsletter-content">
          <h3>Stay Updated</h3>
          <p>Join our community and receive botanical insights</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2023 Plant Identifier. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;