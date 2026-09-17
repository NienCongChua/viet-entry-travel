import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
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
              <a href="mailto:info@vietentrytravel.com" className="footer__contact-item">
                <Mail size={14} />
                info@vietentrytravel.com
              </a>
              <a
                href={getWhatsAppUrl("Hello Viet Entry Travel, I would like to inquire about your travel services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-item"
                style={{ color: '#25d366' }}
              >
                <WhatsAppIcon size={14} />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <a href="tel:+84338649908" className="footer__contact-item">
                <Phone size={14} />
                (+84) 3386 49 908
              </a>
              <span className="footer__contact-item">
                <MapPin size={14} />
                Hoi Thinh, Phu Tho, Vietnam
              </span>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Services</h4>
            <nav className="footer__links">
              <Link to="/tours" className="footer__link">Tours</Link>
              <Link to="/evisa" className="footer__link">eVisa</Link>
              <Link to="/transfer" className="footer__link">Transfer</Link>
              <Link to="/esim" className="footer__link">eSim</Link>
              <Link to="/services" className="footer__link">All Services</Link>
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
              <Link to="/about" className="footer__link">About Us</Link>
              <Link to="/blog" className="footer__link">Blog</Link>
              <a href="/#contact" className="footer__link">Request a Quote</a>
              <a href="#" className="footer__link">Privacy Policy</a>
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Viet Entry Travel. All rights reserved.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/people/Viet-Entry-Travel/61587498513447/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/vietentrytravel?igsh=MWN6YnRwemQzNXYxeg==" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
