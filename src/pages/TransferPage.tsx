import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Users,
  MapPin,
  Clock,
  ChevronDown,
  CheckCircle2,
  ArrowLeft,
  Send,
  Shield,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import './ServicePage.css';

const vehicles = [
  {
    name: 'Sedan',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=500&q=80',
    capacity: '1-3 passengers',
    features: ['Air-conditioned', 'WiFi available', 'Leather seats', 'Bottled water'],
  },
  {
    name: 'SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80',
    capacity: '1-4 passengers',
    features: ['Spacious interior', 'Air-conditioned', 'USB charging', 'Ample luggage space'],
  },
  {
    name: 'Minivan',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&q=80',
    capacity: '5-7 passengers',
    features: ['Sliding doors', 'Air-conditioned', 'Ample luggage', 'Family-friendly'],
  },
  {
    name: 'Luxury Bus',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&q=80',
    capacity: '15-45 passengers',
    features: ['Reclining seats', 'Entertainment system', 'Restroom', 'Premium comfort'],
  },
];

const routes = [
  { from: 'Noi Bai Airport (HAN)', to: 'Hanoi Old Quarter', duration: '45 min' },
  { from: 'Tan Son Nhat Airport (SGN)', to: 'Ho Chi Minh City Center', duration: '40 min' },
  { from: 'Da Nang Airport (DAD)', to: 'Hoi An Ancient Town', duration: '35 min' },
  { from: 'Hanoi Center', to: 'Ha Long Bay Cruise Port', duration: '2.5 hrs' },
  { from: 'Da Nang', to: 'Hue Imperial City', duration: '2.5 hrs' },
  { from: 'Ho Chi Minh City', to: 'Vung Tau Beach', duration: '2 hrs' },
];

const faqs = [
  {
    q: 'How do I book a transfer?',
    a: 'Simply message us on WhatsApp (+84 3386 49908) or submit a quote request below with your pickup/drop-off details. We confirm your driver, vehicle, and meet-and-greet point directly.',
  },
  {
    q: 'What if my flight is delayed?',
    a: 'We monitor all flights in real-time. Your driver automatically adjusts the pickup time with zero penalty or waiting surcharges.',
  },
  {
    q: 'Why do you handle bookings via WhatsApp & quote requests?',
    a: 'Flight schedules and hotel alley locations in Vietnam often require custom directions. Direct WhatsApp contact lets us share driver phone numbers, plate numbers, and exact meeting pins with zero miscommunication.',
  },
  {
    q: 'Is there a child seat option?',
    a: 'Yes, child seats are available free of charge upon request. Just mention it when chatting on WhatsApp or submitting your request.',
  },
];

const TransferPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '09:00',
    passengers: '2',
    vehicle: 'Sedan',
  });

  const getFormWhatsAppUrl = () => {
    const p = formData.pickup || 'Airport / City Center';
    const d = formData.dropoff || 'Hotel / Destination';
    const dt = formData.date || 'Upcoming';
    const tm = formData.time || 'Flexible';
    const msg = `Hello Viet Entry Travel, I would like to book a private transfer: Pickup: ${p}, Drop-off: ${d}, Date: ${dt}, Time: ${tm}, Passengers: ${formData.passengers}, Vehicle: ${formData.vehicle}. Please provide a quote & driver confirmation.`;
    return getWhatsAppUrl(msg);
  };

  const handleRouteSelect = (from: string, to: string) => {
    setFormData((prev) => ({ ...prev, pickup: from, dropoff: to }));
    const element = document.getElementById('transfer-booking-card');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img src="/images/services/service-transfer.jpg" alt="Vietnam Transfer" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <Car size={16} /> Private Transfer Service
            </span>
            <h1 className="service-hero__title">Reliable Transfers Across Vietnam</h1>
            <p className="service-hero__subtitle">
              Airport pickup, city-to-city rides, and private fleets — direct booking via WhatsApp ({WHATSAPP_DISPLAY}) or customized quote.
            </p>
          </div>
        </section>

        {/* Quick Inquiry Card */}
        <section className="sp-booking section" id="transfer-booking-card">
          <div className="container">
            <div className="sp-booking__card">
              <h2 className="sp-booking__title">Inquire & Book Your Transfer</h2>
              <p className="sp-booking__subtitle">
                Enter your journey details and connect directly with our dispatch team on WhatsApp
              </p>
              <form className="sp-booking__form" onSubmit={(e) => e.preventDefault()}>
                <div className="sp-booking__row">
                  <div className="sp-booking__field">
                    <label>
                      <MapPin size={14} /> Pickup Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Noi Bai Airport (HAN) or Hotel name"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    />
                  </div>
                  <div className="sp-booking__field">
                    <label>
                      <MapPin size={14} /> Drop-off Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Hanoi Old Quarter or Destination"
                      value={formData.dropoff}
                      onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                    />
                  </div>
                </div>

                <div className="sp-booking__row sp-booking__row--4">
                  <div className="sp-booking__field">
                    <label>
                      <Clock size={14} /> Pickup Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="sp-booking__field">
                    <label>
                      <Clock size={14} /> Pickup Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      {Array.from({ length: 48 }, (_, i) => {
                        const h = String(Math.floor(i / 2)).padStart(2, '0');
                        const m = i % 2 === 0 ? '00' : '30';
                        return (
                          <option key={i} value={`${h}:${m}`}>
                            {h}:{m}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="sp-booking__field">
                    <label>
                      <Users size={14} /> Passengers
                    </label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, '8+'].map((n) => (
                        <option key={n} value={String(n)}>
                          {n} passenger{n === 1 ? '' : 's'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sp-booking__field">
                    <label>
                      <Car size={14} /> Vehicle Type
                    </label>
                    <select
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    >
                      <option value="Sedan">Sedan (1-3 pax)</option>
                      <option value="SUV">SUV (1-4 pax)</option>
                      <option value="Minivan">Minivan (5-7 pax)</option>
                      <option value="Luxury Bus">Luxury Bus (15-45 pax)</option>
                    </select>
                  </div>
                </div>

                <div className="sp-booking__actions">
                  <a
                    href={getFormWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-btn-whatsapp"
                  >
                    <WhatsAppIcon size={20} />
                    Inquire via WhatsApp ({WHATSAPP_DISPLAY})
                  </a>
                  <a href="#contact" className="sp-btn-quote">
                    <Send size={16} />
                    Request a Quote
                  </a>
                </div>

                <p className="sp-booking__notice">
                  <Shield size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span>
                    Direct WhatsApp Driver Coordination — Real-time flight tracking & name board meet-and-greet. No online payment risks.
                  </span>
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Vehicles */}
        <section className="service-features">
          <div className="container">
            <div className="service-features__header">
              <span className="section-label">✦ Our Fleet</span>
              <h2 className="section-title">Choose Your Vehicle</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Modern, sanitized, air-conditioned vehicles with courteous drivers
              </p>
            </div>
            <div className="sp-vehicles__grid">
              {vehicles.map((v) => {
                const vehicleWhatsAppUrl = getWhatsAppUrl(
                  `Hello Viet Entry Travel, I would like to inquire about booking the ${v.name} vehicle (${v.capacity}) for a private transfer.`
                );
                return (
                  <div key={v.name} className="sp-vehicle-card">
                    <div className="sp-vehicle-card__image">
                      <img src={v.image} alt={v.name} />
                    </div>
                    <div className="sp-vehicle-card__body">
                      <h3>{v.name}</h3>
                      <p className="sp-vehicle-card__capacity">
                        <Users size={14} /> {v.capacity}
                      </p>
                      <ul className="sp-vehicle-card__features">
                        {v.features.map((f) => (
                          <li key={f}>
                            <CheckCircle2 size={12} /> {f}
                          </li>
                        ))}
                      </ul>
                      <div className="sp-vehicle-card__price">
                        <strong style={{ color: 'var(--color-primary)', fontSize: '1.05rem' }}>Quote on Request</strong>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b' }}>Customized by route & duration</span>
                      </div>
                      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <a
                          href={vehicleWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sp-btn-whatsapp"
                          style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                        >
                          <WhatsAppIcon size={16} /> Book via WhatsApp
                        </a>
                        <a
                          href="#contact"
                          className="sp-btn-quote sp-btn-quote--outline"
                          style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                        >
                          <Send size={14} /> Request a Quote
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="sp-routes section">
          <div className="container">
            <div className="service-steps__header">
              <span className="section-label">✦ Popular Routes</span>
              <h2 className="section-title">Frequently Booked Transfers</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Personalized transparent quotes — tap any route to inquire directly
              </p>
            </div>
            <div className="sp-routes__grid">
              {routes.map((r, i) => {
                const routeWhatsAppUrl = getWhatsAppUrl(
                  `Hello Viet Entry Travel, I would like to inquire about the private transfer route: ${r.from} -> ${r.to} (${r.duration}). Please provide availability & quote.`
                );
                return (
                  <div
                    key={i}
                    className="sp-route-card"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRouteSelect(r.from, r.to)}
                    title="Click to fill inquiry form"
                  >
                    <div className="sp-route-card__route">
                      <span className="sp-route-card__from">{r.from}</span>
                      <span className="sp-route-card__arrow">→</span>
                      <span className="sp-route-card__to">{r.to}</span>
                    </div>
                    <div className="sp-route-card__details">
                      <span>
                        <Clock size={13} /> {r.duration}
                      </span>
                      <span className="sp-route-card__price" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Quote on Request</span>
                    </div>
                    <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                      <a
                        href={routeWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: '#25d366',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                        }}
                      >
                        <WhatsAppIcon size={14} /> Quick WhatsApp Quote
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="service-faq">
          <div className="container">
            <div className="service-faq__header">
              <span className="section-label">✦ FAQ</span>
              <h2 className="section-title">Transfer Questions</h2>
            </div>
            <div className="service-faq__list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`service-faq__item ${openFaq === i ? 'service-faq__item--open' : ''}`}
                >
                  <button
                    className="service-faq__question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <ChevronDown size={18} />
                  </button>
                  <div className="service-faq__answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Book Your Transfer with Confidence</h2>
            <p>
              Direct communication with our local dispatch team on WhatsApp ({WHATSAPP_DISPLAY}) or customized request form.
            </p>
            <div className="service-cta__actions">
              <a
                href={getWhatsAppUrl(
                  'Hello Viet Entry Travel, I would like to book a private transfer in Vietnam. Please assist me with options & quote.'
                )}
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
        <CTA defaultTour="Vietnam Private Transfer Service" id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default TransferPage;
