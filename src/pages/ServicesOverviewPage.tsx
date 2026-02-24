import { Link } from 'react-router-dom';
import {
  Car,
  FileCheck,
  Smartphone,
  Zap,
  Map,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  Star,
  Headphones,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicesOverviewPage.css';

const services = [
  {
    id: 'transfer',
    title: 'Private Transfer',
    icon: Car,
    badge: 'Most Popular',
    image:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    description:
      'Door-to-door airport pickups and city-to-city rides across Vietnam. Always comfortable, always on time.',
    highlights: [
      'Airport pickup & drop-off',
      'City-to-city private rides',
      'Professional English-speaking drivers',
      'Real-time flight monitoring',
    ],
    price: 'From US$22',
    cta: 'Book Transfer',
    href: '/transfer',
  },
  {
    id: 'fasttrack',
    title: 'Fast Track',
    icon: Zap,
    badge: 'VIP Service',
    image:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
    description:
      'Skip the queues at Vietnamese airports. Our VIP fast track service gets you through immigration and customs in minutes.',
    highlights: [
      'Priority immigration clearance',
      'Meet & greet at gate',
      'Luggage assistance',
      'Available at all major airports',
    ],
    price: 'From US$35',
    cta: 'Book Fast Track',
    href: '#contact',
  },
  {
    id: 'visa',
    title: 'Vietnam eVisa',
    icon: FileCheck,
    badge: 'Fast Approval',
    image:
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80',
    description:
      'Hassle-free eVisa processing with 99% approval rate. Get approved in as little as 4 hours.',
    highlights: [
      '99% approval guarantee',
      'As fast as 4-hour processing',
      'Single & multiple entry',
      'Full refund if rejected',
    ],
    price: 'From US$39',
    cta: 'Apply for eVisa',
    href: '/evisa',
  },
  {
    id: 'sim',
    title: 'Vietnam eSIM',
    icon: Smartphone,
    badge: 'Instant Delivery',
    image:
      'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=80',
    description:
      'Stay connected with affordable 4G/5G eSIM plans. Instant QR code delivery — no physical SIM needed.',
    highlights: [
      'Instant QR code delivery',
      '4G/5G high-speed data',
      'Works with 300+ devices',
      'Plans from 7 to 30 days',
    ],
    price: 'From US$6',
    cta: 'Buy eSIM',
    href: '/esim',
  },
  {
    id: 'tour',
    title: 'Tailor-made Tour',
    icon: Map,
    badge: 'Custom Experience',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    description:
      'Create your dream Vietnam journey. Our travel experts design a personalized itinerary tailored to your interests, pace, and budget — from hidden gems to iconic destinations.',
    highlights: [
      'Fully customized itinerary',
      'Local expert guides',
      'Flexible schedule & pacing',
      'All-inclusive packages available',
      'Private tours for groups & families',
    ],
    price: 'From US$99',
    cta: 'Design My Tour',
    href: '/tours',
    featured: true,
  },
];

const trustItems = [
  {
    icon: Shield,
    title: '100% Secure',
    desc: 'Verified providers and secure payment processing.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Our team is available around the clock for assistance.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    desc: 'Trusted by 10,000+ travelers with excellent reviews.',
  },
  {
    icon: Headphones,
    title: 'Local Experts',
    desc: 'Vietnam-based team with deep local knowledge.',
  },
];

const ServicesOverviewPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="services-hero">
          <div className="services-hero__bg">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80"
              alt="Vietnam Services"
            />
            <div className="services-hero__bg-overlay"></div>
          </div>
          <div className="services-hero__content">
            <span className="services-hero__badge">
              <Briefcase size={16} /> Premium Services
            </span>
            <h1 className="services-hero__title">
              Everything You Need for Vietnam
            </h1>
            <p className="services-hero__subtitle">
              From airport fast track to tailor-made tours — we handle every
              detail so you can enjoy the journey.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="services-intro">
          <div className="container">
            <span className="services-intro__label">✦ Our Services</span>
            <h2 className="services-intro__heading">
              Travel Made Effortless
            </h2>
            <p className="services-intro__desc">
              Choose from our curated range of travel services designed to make
              your Vietnam trip seamless, comfortable, and unforgettable.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="services-grid">
          <div className="container">
            <div className="services-grid__list">
              {services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className={`svc-card ${svc.featured ? 'svc-card--featured' : ''}`}
                  >
                    <div className="svc-card__image">
                      <img src={svc.image} alt={svc.title} />
                      <div className="svc-card__image-overlay"></div>
                      <span className="svc-card__badge">
                        <Icon size={14} /> {svc.badge}
                      </span>
                      <span className="svc-card__price-tag">{svc.price}</span>
                    </div>
                    <div className="svc-card__body">
                      <h3 className="svc-card__title">{svc.title}</h3>
                      <p className="svc-card__desc">{svc.description}</p>
                      <ul className="svc-card__highlights">
                        {svc.highlights.map((h) => (
                          <li key={h}>
                            <CheckCircle2 size={14} /> {h}
                          </li>
                        ))}
                      </ul>
                      <Link to={svc.href} className="svc-card__cta">
                        {svc.cta} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="services-trust">
          <div className="container">
            <div className="services-trust__header">
              <span className="section-label">✦ Why Choose Us</span>
              <h2 className="section-title">Trusted by Thousands</h2>
            </div>
            <div className="services-trust__grid">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="services-trust__item">
                    <Icon size={32} />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="services-cta">
          <div className="container">
            <h2>Ready to Explore Vietnam?</h2>
            <p>
              Let us handle the details — you focus on making memories.
            </p>
            <div className="services-cta__actions">
              <Button href="#contact" variant="accent" size="lg">
                Get in Touch
              </Button>
              <Link
                to="/"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 500,
                }}
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesOverviewPage;
