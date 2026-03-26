import { Link } from 'react-router-dom';
import { Map, FileCheck, Car, Smartphone, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Map size={28} />,
    title: 'Tours',
    description: 'Customized tours across Vietnam — from heritage trails to beach escapes.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    highlights: ['Custom itineraries', 'Local guides', 'Group & private'],
    color: 'teal',
    slug: '/tours',
  },
  {
    icon: <FileCheck size={28} />,
    title: 'eVisa',
    description: 'Fast Vietnam eVisa processing. Submit online, approved in 1-3 days.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80',
    highlights: ['1-3 day processing', 'Online application', '99% approval'],
    color: 'amber',
    slug: '/evisa',
  },
  {
    icon: <Car size={28} />,
    title: 'Transfer',
    description: 'Reliable airport pickup and city-to-city transfers, always on time.',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80',
    highlights: ['Airport pickup', 'City-to-city', 'Private vehicles'],
    color: 'emerald',
    slug: '/transfer',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'eSim',
    description: 'Stay connected with affordable 4G/5G eSim plans. Instant activation.',
    image: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=600&q=80',
    highlights: ['Instant activation', '4G/5G data', 'Affordable plans'],
    color: 'rose',
    slug: 'https://card.vietentrytravel.com',
    external: true,
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
            From visa to SIM card — we handle every detail so you can focus on the adventure.
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
                {service.external ? (
                  <a href={service.slug} className="services__card-link" target="_blank" rel="noopener noreferrer">
                    Learn more <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link to={service.slug} className="services__card-link">
                    Learn more <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
