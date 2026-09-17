import { Link } from 'react-router-dom';
import { Map, FileCheck, Car, Smartphone, ArrowRight, Send } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import './Services.css';

const services = [
  {
    icon: <Map size={28} />,
    title: 'Tours',
    description: 'Customized tours across Vietnam — from heritage trails to beach escapes.',
    image: '/images/services/service-tours.jpg',
    highlights: ['Custom itineraries', 'Local guides', 'Group & private'],
    color: 'teal',
    slug: '/tours',
  },
  {
    icon: <FileCheck size={28} />,
    title: 'eVisa',
    description: 'Fast Vietnam eVisa processing with 99% approval guarantee and direct support.',
    image: '/images/services/service-evisa.jpg',
    highlights: ['1-3 day processing', 'Concierge review', '99% approval'],
    color: 'amber',
    slug: '/evisa',
  },
  {
    icon: <Car size={28} />,
    title: 'Transfer',
    description: 'Reliable airport pickup and city-to-city transfers with professional drivers.',
    image: '/images/services/service-transfer.jpg',
    highlights: ['Airport pickup', 'City-to-city', 'Private vehicles'],
    color: 'emerald',
    slug: '/transfer',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'eSim',
    description: 'Stay connected with high-speed 4G/5G data across Vietnam. Instant QR setup.',
    image: '/images/services/service-esim.jpg',
    highlights: ['Instant QR delivery', '4G/5G data', 'Flexible plans'],
    color: 'rose',
    slug: '/esim',
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">✦ Our Services</span>
          <h2 className="section-title">Everything You Need<br />for Vietnam</h2>
          <p className="section-subtitle">
            Personalized concierge bookings via WhatsApp <strong>({WHATSAPP_DISPLAY})</strong> or direct quote requests — no automated website errors.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`services__card services__card--${service.color}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="services__card-image">
                <img src={service.image} alt={service.title} />
                <div className="services__card-image-overlay"></div>
                <div className="services__card-icon-float glass-card">
                  {service.icon}
                </div>
              </div>
              <div className="services__card-body">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                <ul className="services__card-highlights">
                  {service.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Link to={service.slug} className="services__card-link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Concierge Service Banner */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #140809 0%, #220f11 60%, #4c0a0d 100%)',
          borderRadius: '16px',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              background: 'rgba(37, 211, 102, 0.15)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: '999px',
              color: '#34d399',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}>
              Direct Concierge Booking
            </span>
            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.35rem 0' }}>
              Need Help Arranging Your Services?
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', margin: 0, fontSize: '0.92rem', maxWidth: '560px' }}>
              We don't process automated transactions on the website. Chat directly with our Vietnam travel specialist on WhatsApp or request a custom quote.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={getWhatsAppUrl("Hello Viet Entry Travel, I would like to inquire about your travel services (eVisa, Transfer, eSIM, Tours).")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#25d366',
                color: '#ffffff',
                padding: '0.75rem 1.4rem',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                transition: 'transform 0.2s',
              }}
            >
              <WhatsAppIcon size={18} />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                padding: '0.75rem 1.4rem',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.25)',
              }}
            >
              <Send size={15} />
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
