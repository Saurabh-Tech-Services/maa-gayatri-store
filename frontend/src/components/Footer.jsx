import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt
} from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* 1st Column: Logo, Trust & Guarantee */}
        <div className="footer-section footer-brand-section">
          <Link to="/" onClick={scrollToTop} className="footer-logo-link">
            <img src="/full-logo.png" alt="Maa Gayatri General Store" className="footer-logo-img" />
          </Link>
          <p className="footer-trust-text">
            Trust since 1992, we build lasting trust through quality, purity, and honest service for every family.
          </p>
          <div className="footer-guarantee-badge">
            <FaShieldAlt className="guarantee-icon" />
            <div className="guarantee-text">
              <strong>100% ORIGINAL guarantee </strong>
              <span>for all products at Maa Gayatri General Store</span>
            </div>
          </div>
        </div>

        {/* 2nd Column: Get to Know Us */}
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <Link to="/about" onClick={scrollToTop}>About Us</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
        </div>

        {/* 3rd Column: Customer Support */}
        <div className="footer-section">
          <h4>Customer Support</h4>
          <Link to="/faq" onClick={scrollToTop}>FAQs</Link>
          <Link to="/help" onClick={scrollToTop}>Help Centre</Link>
          <Link to="/return-policy" onClick={scrollToTop}>Return & Refund Policy</Link>
          <Link to="/cancellation-policy" onClick={scrollToTop}>Order Cancellation Policy</Link>
        </div>

        {/* 4th Column: Legal Links */}
        <div className="footer-section">
          <h4>Legal Links</h4>
          <Link to="/terms" onClick={scrollToTop}>Terms & Conditions</Link>
          <Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link>
          <Link to="/cookie-policy" onClick={scrollToTop}>Cookie Policy</Link>
          <Link to="/about#fssai" onClick={scrollToTop}>FSSAI Food Safety</Link>
        </div>

        {/* 5th Column: Contact Details */}
        <div className="footer-section footer-contact-section">
          <h4>Contact Details</h4>
          <p className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>NH 376, Triveniganj, Supaul, Bihar, 852139</span>
          </p>
          <p className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:9006741663" className="contact-link">9006741663</a>
          </p>
          <p className="contact-item">
            <FaClock className="contact-icon" />
            <span>Monday to Sunday (8AM to 10PM)</span>
          </p>
          <p className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:support@maagayatristore.com" className="contact-link">support@maagayatristore.com</a>
          </p>

          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/MaaGayatriStore"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn facebook"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/MaaGayatriStore"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://share.google/Y6fMdrLY2E4aGRhRK"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn gmap"
              aria-label="Google Maps Location"
            >
              <SiGooglemaps />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright Left, Payment Icons Right */}
      <div className="container footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Maa Gayatri General Store. All Rights Reserved.
        </p>
        <div className="footer-payment-icons">
          <img src="/footer/visa.png" alt="Visa" title="Visa" />
          <img src="/footer/master-card.png" alt="MasterCard" title="MasterCard" />
          <img src="/footer/rupay.png" alt="RuPay" title="RuPay" />
          <img src="/footer/upi.png" alt="UPI" title="UPI" />
          <img src="/footer/google-pay.png" alt="Google Pay" title="Google Pay" />
          <img src="/footer/paytm.png" alt="Paytm" title="Paytm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
