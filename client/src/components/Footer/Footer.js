import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium mauris eget metus eleifend, at fermentum tellus faucibus.</p>
        </div>
        <div className="footer-section">
          <h2>Services</h2>
          <ul>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Text To Speech</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: medium@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Medium. All rights reserved. | Made by Shreya</p>
      </div>
    </footer>
  );
};

export default Footer;
