import { useState } from 'react';
import WhatsAppIcon from './ui/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import './FloatingWhatsApp.css';

export const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);

  const defaultUrl = getWhatsAppUrl(
    'Hello Viet Entry Travel, I am browsing your website and would like to inquire about your travel services & custom itineraries.'
  );

  return (
    <aside
      className="floating-whatsapp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp__btn"
        title={`Chat with Viet Entry Travel on WhatsApp (${WHATSAPP_DISPLAY})`}
      >
        <span className="floating-whatsapp__pulse"></span>
        <span className="floating-whatsapp__icon-wrap">
          <WhatsAppIcon size={28} color="#ffffff" />
        </span>
        <span className="floating-whatsapp__label">
          <span className="floating-whatsapp__status-dot"></span>
          <span className="floating-whatsapp__text">Chat via WhatsApp</span>
          <span className="floating-whatsapp__phone">{WHATSAPP_DISPLAY}</span>
        </span>
      </a>

      {hovered && (
        <div className="floating-whatsapp__tooltip">
          <strong>Need instant help?</strong>
          <span>Chat directly with our travel concierge on WhatsApp!</span>
        </div>
      )}
    </aside>
  );
};

export default FloatingWhatsApp;
