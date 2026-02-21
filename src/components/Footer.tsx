import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <img
                src="/icon/icon-1000x1000.png"
                alt="Viet Entry Travel"
                className="footer__logo-img"
              />
              <span>Viet Entry Travel</span>
            </a>
            <p className="footer__description">
              Your trusted partner for exploring Vietnam. We provide comprehensive travel
              services including customized tours, eVisa processing, airport transfers, and
              eSim connectivity for international travelers.
            </p>
            <div className="footer__contact-list">
              <a href="mailto:hello@vietentrytravel.com" className="footer__contact-item">
                <Mail size={14} />
                hello@vietentrytravel.com
              </a>
              <a href="tel:+84xxxxxxxxx" className="footer__contact-item">
                <Phone size={14} />
                +84 xxx xxx xxx
              </a>
              <span className="footer__contact-item">
                <MapPin size={14} />
                Ho Chi Minh City, Vietnam
              </span>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Services</h4>
            <nav className="footer__links">
              <a href="#services" className="footer__link">Tours</a>
              <a href="#services" className="footer__link">eVisa</a>
              <a href="#services" className="footer__link">Transfer</a>
              <a href="#services" className="footer__link">eSim</a>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Destinations</h4>
            <nav className="footer__links">
              <a href="#destinations" className="footer__link">Ha Long Bay</a>
              <a href="#destinations" className="footer__link">Hoi An</a>
              <a href="#destinations" className="footer__link">Sapa</a>
              <a href="#destinations" className="footer__link">Phu Quoc</a>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Company</h4>
            <nav className="footer__links">
              <a href="#" className="footer__link">About Us</a>
              <a href="#blog" className="footer__link">Blog</a>
              <a href="#contact" className="footer__link">Contact</a>
              <a href="#" className="footer__link">Privacy Policy</a>
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Viet Entry Travel. All rights reserved.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Facebook">FB</a>
            <a href="#" className="footer__social" aria-label="Instagram">IG</a>
            <a href="#" className="footer__social" aria-label="TripAdvisor">TA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
