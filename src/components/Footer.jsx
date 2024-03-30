import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="company-info">
          <h3>AccuKnox</h3>
          <p>
            AccuKnox is a leading provider of cybersecurity solutions,
            specializing in cloud security and compliance management.
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@accuknox.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Cybersecurity Street, Secure City, USA</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 AccuKnox. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
