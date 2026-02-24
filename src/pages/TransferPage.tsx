import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, MapPin, Clock, ChevronDown, CheckCircle2, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';

const vehicles = [
  {
    name: 'Sedan',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=500&q=80',
    capacity: '1-3 passengers',
    features: ['Air-conditioned', 'WiFi available', 'Leather seats', 'Bottled water'],
    priceFrom: 25,
  },
  {
    name: 'SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80',
    capacity: '1-4 passengers',
    features: ['Spacious interior', 'Air-conditioned', 'USB charging', 'Luggage space'],
    priceFrom: 35,
  },
  {
    name: 'Minivan',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&q=80',
    capacity: '5-7 passengers',
    features: ['Sliding doors', 'Air-conditioned', 'Ample luggage', 'Family-friendly'],
    priceFrom: 50,
  },
  {
    name: 'Luxury Bus',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&q=80',
    capacity: '15-45 passengers',
    features: ['Reclining seats', 'Entertainment system', 'Restroom', 'Premium comfort'],
    priceFrom: 120,
  },
];

const routes = [
  { from: 'Noi Bai Airport', to: 'Hanoi Old Quarter', price: 25, duration: '45 min' },
  { from: 'Tan Son Nhat Airport', to: 'Ho Chi Minh City Center', price: 22, duration: '40 min' },
  { from: 'Da Nang Airport', to: 'Hoi An Ancient Town', price: 28, duration: '35 min' },
  { from: 'Hanoi', to: 'Ha Long Bay', price: 85, duration: '3.5 hrs' },
  { from: 'Da Nang', to: 'Hue City', price: 65, duration: '2.5 hrs' },
  { from: 'Ho Chi Minh City', to: 'Vung Tau', price: 75, duration: '2 hrs' },
];

const faqs = [
  { q: 'How do I book a transfer?', a: 'Fill in the booking form with your pickup and drop-off details. You\'ll receive instant confirmation with driver details via email.' },
  { q: 'What if my flight is delayed?', a: 'We monitor all flights in real-time. Your driver adjusts their arrival time automatically — no extra charge.' },
  { q: 'Can I book a round-trip transfer?', a: 'Yes! Round-trip bookings receive a discounted rate. Select "Round Trip" in the booking form.' },
  { q: 'Is there a child seat option?', a: 'Yes, child seats are available free of charge. Mention this in the notes when booking.' },
];

const TransferPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    passengers: '1',
    vehicle: 'sedan',
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1920&q=80" alt="Vietnam Transfer" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge"><Car size={16} /> Transfer Service</span>
            <h1 className="service-hero__title">Reliable Transfers Across Vietnam</h1>
            <p className="service-hero__subtitle">
              Airport pickup, city-to-city rides, and private transfers — always comfortable, always on time.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="sp-booking section">
          <div className="container">
            <div className="sp-booking__card">
              <h2 className="sp-booking__title">Book Your Transfer</h2>
              <p className="sp-booking__subtitle">Enter your details and get an instant quote</p>
              <form className="sp-booking__form" onSubmit={(e) => e.preventDefault()}>
                <div className="sp-booking__row">
                  <div className="sp-booking__field">
                    <label><MapPin size={14} /> Pickup Location</label>
                    <input type="text" placeholder="e.g., Noi Bai Airport" value={formData.pickup} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })} />
                  </div>
                  <div className="sp-booking__field">
                    <label><MapPin size={14} /> Drop-off Location</label>
                    <input type="text" placeholder="e.g., Hanoi Old Quarter" value={formData.dropoff} onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })} />
                  </div>
                </div>
                <div className="sp-booking__row sp-booking__row--4">
                  <div className="sp-booking__field">
                    <label><Clock size={14} /> Pickup Date</label>
                    <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                  </div>
                  <div className="sp-booking__field">
                    <label><Clock size={14} /> Pickup Time</label>
                    <select defaultValue="09:00">
                      {Array.from({ length: 48 }, (_, i) => {
                        const h = String(Math.floor(i / 2)).padStart(2, '0');
                        const m = i % 2 === 0 ? '00' : '30';
                        return <option key={i} value={`${h}:${m}`}>{h}:{m}</option>;
                      })}
                    </select>
                  </div>
                  <div className="sp-booking__field">
                    <label><Users size={14} /> Passengers</label>
                    <select value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}>
                      {[1, 2, 3, 4, 5, 6, 7].map((n) => <option key={n} value={n}>{n} passenger{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                  <div className="sp-booking__field">
                    <label><Car size={14} /> Vehicle Type</label>
                    <select value={formData.vehicle} onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="minivan">Minivan</option>
                      <option value="bus">Luxury Bus</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="sp-booking__submit">Get Instant Quote</button>
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
            </div>
            <div className="sp-vehicles__grid">
              {vehicles.map((v) => (
                <div key={v.name} className="sp-vehicle-card">
                  <div className="sp-vehicle-card__image">
                    <img src={v.image} alt={v.name} />
                  </div>
                  <div className="sp-vehicle-card__body">
                    <h3>{v.name}</h3>
                    <p className="sp-vehicle-card__capacity"><Users size={14} /> {v.capacity}</p>
                    <ul className="sp-vehicle-card__features">
                      {v.features.map((f) => <li key={f}><CheckCircle2 size={12} /> {f}</li>)}
                    </ul>
                    <div className="sp-vehicle-card__price">
                      From <strong>US${v.priceFrom}</strong><span>/trip</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="sp-routes section">
          <div className="container">
            <div className="service-steps__header">
              <span className="section-label">✦ Popular Routes</span>
              <h2 className="section-title">Most Booked Transfers</h2>
            </div>
            <div className="sp-routes__grid">
              {routes.map((r, i) => (
                <div key={i} className="sp-route-card">
                  <div className="sp-route-card__route">
                    <span className="sp-route-card__from">{r.from}</span>
                    <span className="sp-route-card__arrow">→</span>
                    <span className="sp-route-card__to">{r.to}</span>
                  </div>
                  <div className="sp-route-card__details">
                    <span><Clock size={13} /> {r.duration}</span>
                    <span className="sp-route-card__price">US${r.price}</span>
                  </div>
                </div>
              ))}
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
                <div key={i} className={`service-faq__item ${openFaq === i ? 'service-faq__item--open' : ''}`}>
                  <button className="service-faq__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDown size={18} />
                  </button>
                  <div className="service-faq__answer"><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Book Your Transfer Today</h2>
            <p>Reliable rides from door to door across Vietnam.</p>
            <div className="service-cta__actions">
              <Button href="#contact" variant="accent" size="lg">Book Transfer</Button>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
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

export default TransferPage;
