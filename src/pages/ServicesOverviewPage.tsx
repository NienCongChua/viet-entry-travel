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
  CreditCard,
  RotateCcw,
  Timer,
  CalendarClock,
  Send,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import './ServicesOverviewPage.css';

const services = [
  {
    id: 'transfer',
    title: 'Private Transfer',
    icon: Car,
    badge: 'Most Popular',
    image: '/images/services/service-transfer.jpg',
    description:
      'Door-to-door airport pickups and city-to-city rides across Vietnam with professional English-speaking drivers.',
    highlights: [
      'Airport pickup & drop-off',
      'City-to-city private rides',
      'Professional English-speaking drivers',
      'Real-time flight monitoring',
    ],
    price: 'Quote on Request',
    href: '/transfer',
    whatsappMessage:
      'Hello Viet Entry Travel, I would like to inquire about Private Transfer services across Vietnam.',
  },
  {
    id: 'fasttrack',
    title: 'Airport VIP Fast Track',
    icon: Zap,
    badge: 'VIP Service',
    image:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
    description:
      'Skip the long queues at Hanoi, Da Nang, and Ho Chi Minh City airports. VIP fast track through immigration in minutes.',
    highlights: [
      'Priority immigration clearance',
      'Meet & greet at arrival gate',
      'Luggage assistance',
      'Available at all major international airports',
    ],
    price: 'Quote on Request',
    href: '#contact',
    whatsappMessage:
      'Hello Viet Entry Travel, I would like to inquire about Airport VIP Fast Track service.',
  },
  {
    id: 'visa',
    title: 'Vietnam eVisa',
    icon: FileCheck,
    badge: 'Fast Approval',
    image: '/images/services/service-evisa.jpg',
    description:
      'Hassle-free eVisa pre-check and submission with 99%+ approval rate. Receive your visa in as little as 4 hours.',
    highlights: [
      '99%+ approval guarantee',
      'Express processing (4 to 24h)',
      'Single & multiple entry 90-day',
      'Full refund if not approved',
    ],
    price: 'Quote on Request',
    href: '/evisa',
    whatsappMessage:
      'Hello Viet Entry Travel, I would like to inquire about Vietnam eVisa processing.',
  },
  {
    id: 'sim',
    title: 'Vietnam High-Speed eSIM',
    icon: Smartphone,
    badge: 'Instant Delivery',
    image: '/images/services/service-esim.jpg',
    description:
      'Stay connected anywhere in Vietnam with affordable 4G/5G data plans. Instant QR delivery directly to WhatsApp.',
    highlights: [
      'Instant QR code delivery',
      'Nationwide 4G/5G high-speed data',
      'Works with 300+ phone models',
      'Plans from 7 to 30 days',
    ],
    price: 'Quote on Request',
    href: '/esim',
    whatsappMessage:
      'Hello Viet Entry Travel, I would like to inquire about high-speed Vietnam eSIM data packages.',
  },
  {
    id: 'tour',
    title: 'Tailor-made Tours & Journeys',
    icon: Map,
    badge: 'Custom Experience',
    image: '/images/services/service-tours.jpg',
    description:
      'Personalized journeys across Vietnam designed around your interests, pace, and schedule — from hidden gems to iconic wonders.',
    highlights: [
      'Fully bespoke itineraries',
      'Curated authentic guides',
      'Flexible private schedule',
      'Zero commercial tour traps',
      'All price tags removed for true custom quoting',
    ],
    price: 'Bespoke Quote',
    href: '/tours',
    featured: true,
    whatsappMessage:
      'Hello Viet Entry Travel, I would like to design a tailor-made Vietnam tour itinerary.',
  },
];

const packageGroups = [
  {
    id: 'evisa-packages',
    title: 'Vietnam eVisa Plans',
    subtitle: 'Choose the entry type and speed that matches your trip',
    tiers: [
      { name: 'Standard Single', duration: '30-90 days validity', price: 'Quote on Request', processing: '1-3 business days', note: 'Best for standard vacation planning' },
      { name: 'Multiple Entry', duration: '90 days validity', price: 'Quote on Request', processing: '1-3 business days', note: 'Best for multi-country SE Asia trips', highlighted: true },
      { name: 'Express Rush', duration: 'Same-day turnaround', price: 'Quote on Request', processing: 'From 4 to 8 hours', note: 'Best for urgent last-minute flights' },
    ],
  },
  {
    id: 'transfer-packages',
    title: 'Airport & City Transfer Fleet',
    subtitle: 'Vehicle size suited to your party and luggage',
    tiers: [
      { name: 'Sedan (Toyota Vios / similar)', duration: '1-3 passengers', price: 'Quote on Request', processing: 'Standard city & airport', note: 'Best for solo travelers & couples' },
      { name: 'SUV (Fortuner / Innova)', duration: '1-4 passengers', price: 'Quote on Request', processing: 'Extra luggage capacity', note: 'Best for families with luggage', highlighted: true },
      { name: 'Limousine Van / Minibus', duration: '5-16 passengers', price: 'Quote on Request', processing: 'VIP leather seating', note: 'Best for groups and premium comfort' },
    ],
  },
  {
    id: 'tour-packages',
    title: 'Tailor-made Tour Services',
    subtitle: 'From authentic cultural day-trips to multi-week private grand journeys',
    tiers: [
      { name: 'Cultural Day Excursions', duration: 'Half-day or Full-day', price: 'Custom Quote', processing: 'Private local guide & vehicle', note: 'Hanoi, Hoi An, Saigon & Mekong' },
      { name: 'Signature Private Journey', duration: '5 to 14 days', price: 'Bespoke Quote', processing: 'End-to-end itinerary planning', note: 'Tailored pacing, handpicked boutique stays', highlighted: true },
      { name: 'Luxury Bespoke VIP', duration: 'Custom duration', price: 'Bespoke Quote', processing: '5-star resorts, private yachts & flights', note: 'Unmatched exclusivity and care' },
    ],
  },
];

const policies = [
  {
    icon: CreditCard,
    title: 'Direct Concierge Booking',
    desc: 'No automated web errors. All bookings are confirmed directly by your travel concierge on WhatsApp (+84 3386 49908) or formal quote invoice.',
  },
  {
    icon: RotateCcw,
    title: 'Flexible Cancellation',
    desc: 'Full refund for cancellations made 7+ days in advance. Rescheduling is free of charge whenever possible.',
  },
  {
    icon: Timer,
    title: 'Rapid Response (24/7)',
    desc: 'We reply within minutes on WhatsApp (+84 3386 49908) and within 2-4 hours for online quote submissions.',
  },
  {
    icon: CalendarClock,
    title: 'Flight Delay Guarantee',
    desc: 'Airport pickups include free live flight monitoring. Your driver adjusts automatically if your flight is delayed.',
  },
];

const trustItems = [
  {
    icon: Shield,
    title: '100% Reliable',
    desc: 'Zero risk of website checkout failures. Verified hand-confirmed reservations.',
  },
  {
    icon: Clock,
    title: '24/7 WhatsApp Concierge',
    desc: 'Live contact number +84 3386 49908 available before and throughout your stay.',
  },
  {
    icon: Star,
    title: '5-Star Rated Care',
    desc: 'Loved by thousands of global travelers for transparent, stress-free hospitality.',
  },
  {
    icon: Headphones,
    title: 'Local Vietnam Specialists',
    desc: 'Native team on the ground with deep destination knowledge and instant support.',
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
              <Briefcase size={16} /> Travel Concierge Services
            </span>
            <h1 className="services-hero__title">
              Everything You Need for Vietnam
            </h1>
            <p className="services-hero__subtitle">
              From airport fast track and eVisa to private transfers and tailor-made tours — personal support via WhatsApp ({WHATSAPP_DISPLAY}) or custom quote.
            </p>
          </div>
        </section>

        {/* Intro Advisory */}
        <section className="services-intro">
          <div className="container">
            <span className="services-intro__label">✦ Direct Concierge Support</span>
            <h2 className="services-intro__heading">
              Travel Made Effortless & Transparent
            </h2>
            <p className="services-intro__desc">
              We do not process automated checkouts on our website. Every transfer, visa, eSIM, and tour is personally managed by our travel specialists on <strong>WhatsApp (+84 3386 49908)</strong> or via customized quote request to guarantee 100% precision.
            </p>

            <div style={{
              marginTop: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}>
              <a
                href={getWhatsAppUrl("Hello Viet Entry Travel, I would like to consult about your services for my upcoming Vietnam trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn-whatsapp"
                style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
              >
                <WhatsAppIcon size={18} />
                Chat on WhatsApp ({WHATSAPP_DISPLAY})
              </a>
              <a
                href="#contact"
                className="sp-btn-quote"
                style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
              >
                <Send size={15} />
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="services-grid">
          <div className="container">
            <div className="services-grid__list">
              {services.map((svc) => {
                const Icon = svc.icon;
                const cardWhatsAppUrl = getWhatsAppUrl(svc.whatsappMessage);
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

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '1rem' }}>
                        <a
                          href={cardWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sp-btn-whatsapp"
                          style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                        >
                          <WhatsAppIcon size={16} /> WhatsApp Inquire
                        </a>
                        {svc.href.startsWith('#') ? (
                          <a
                            href={svc.href}
                            className="sp-btn-quote sp-btn-quote--outline"
                            style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                          >
                            <Send size={14} /> Request a Quote
                          </a>
                        ) : (
                          <Link
                            to={svc.href}
                            className="sp-btn-quote sp-btn-quote--outline"
                            style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                          >
                            Explore Details <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="services-packages section">
          <div className="container">
            <div className="services-trust__header">
              <span className="section-label">✦ Service Packages</span>
              <h2 className="section-title">Transparent Tier Options</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Clear specifications with direct 1-on-1 booking assistance
              </p>
            </div>

            {packageGroups.map((group) => (
              <div key={group.id} className="pkg-group">
                <div className="pkg-group__header">
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                </div>
                <div className="pkg-group__tiers">
                  {group.tiers.map((tier) => {
                    const tierWhatsAppUrl = getWhatsAppUrl(
                      `Hello Viet Entry Travel, I am interested in the ${tier.name} package under ${group.title}. Please provide details & quote.`
                    );
                    return (
                      <div
                        key={tier.name}
                        className={`pkg-tier ${tier.highlighted ? 'pkg-tier--highlighted' : ''}`}
                      >
                        {tier.highlighted && <span className="pkg-tier__badge">Popular</span>}
                        <h4 className="pkg-tier__name">{tier.name}</h4>
                        <div className="pkg-tier__price">{tier.price}</div>
                        <p className="pkg-tier__duration">{tier.duration}</p>
                        <ul className="pkg-tier__details">
                          <li>
                            <CheckCircle2 size={14} /> {tier.processing}
                          </li>
                          <li>
                            <CheckCircle2 size={14} /> {tier.note}
                          </li>
                        </ul>
                        <div style={{ marginTop: '1.2rem' }}>
                          <a
                            href={tierWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sp-btn-whatsapp"
                            style={{ width: '100%', padding: '0.55rem 0.8rem', fontSize: '0.82rem' }}
                          >
                            <WhatsAppIcon size={15} /> Inquire via WhatsApp
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Policies */}
        <section className="services-policies">
          <div className="container">
            <div className="services-trust__header">
              <span className="section-label">✦ Peace of Mind</span>
              <h2 className="section-title">Policies & Terms</h2>
            </div>
            <div className="policies-grid">
              {policies.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="policy-card">
                    <div className="policy-card__icon">
                      <Icon size={22} />
                    </div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
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
              <h2 className="section-title">Direct, Attentive Concierge Care</h2>
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
            <h2>Ready to Arrange Your Vietnam Services?</h2>
            <p>
              Connect directly with our concierge on WhatsApp ({WHATSAPP_DISPLAY}) or send us a quote inquiry.
            </p>
            <div className="services-cta__actions">
              <a
                href={getWhatsAppUrl("Hello Viet Entry Travel, I am ready to arrange my Vietnam travel services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn-whatsapp"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
              >
                <WhatsAppIcon size={20} />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <a
                href="#contact"
                className="sp-btn-quote"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
              >
                <Send size={18} />
                Request a Quote
              </a>
              <Link
                to="/"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 500,
                  marginLeft: '0.5rem',
                }}
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Embedded Request a Quote Form */}
        <CTA defaultTour="Vietnam Travel Services Concierge" id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default ServicesOverviewPage;
