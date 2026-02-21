import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Star, Clock, ChevronDown, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';

const destinations = [
  { name: 'Ha Noi', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80' },
  { name: 'Ha Long', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=500&q=80' },
  { name: 'Ninh Binh', image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=500&q=80' },
  { name: 'Sa Pa', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80' },
  { name: 'Ha Giang', image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=500&q=80' },
];

const tours = [
  {
    id: 1,
    title: 'Ha Long Bay Luxury Cruise — 2 Days',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    rating: 4.9,
    reviews: 847,
    description: 'Cruise through stunning limestone karsts, kayak in emerald waters, and sleep under the stars on a luxury junk boat.',
    duration: '2 days',
    price: 189,
    region: 'north',
  },
  {
    id: 2,
    title: 'Sapa Trekking & Homestay Adventure',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    rating: 4.8,
    reviews: 623,
    description: 'Trek through terraced rice fields, visit ethnic minority villages, and stay with a local family in the mountains.',
    duration: '3 days',
    price: 145,
    region: 'north',
  },
  {
    id: 3,
    title: 'Hoi An Ancient Town & My Son Temples',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
    rating: 4.9,
    reviews: 912,
    description: 'Walk through lantern-lit streets, take a cooking class, and explore UNESCO My Son Hindu temples.',
    duration: '1 day',
    price: 75,
    region: 'central',
  },
  {
    id: 4,
    title: 'Ho Chi Minh City — Cu Chi Tunnels & Mekong Delta',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    rating: 4.7,
    reviews: 534,
    description: 'Explore wartime tunnels, cruise along the Mekong River, visit floating markets and coconut candy workshops.',
    duration: '2 days',
    price: 120,
    region: 'south',
  },
  {
    id: 5,
    title: 'Ha Giang Loop — Extreme North Motorbike Tour',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600&q=80',
    rating: 5.0,
    reviews: 389,
    description: 'Ride through Vietnam\'s most spectacular mountain passes, dramatic canyons, and remote highland villages.',
    duration: '4 days',
    price: 295,
    region: 'north',
  },
  {
    id: 6,
    title: 'Phu Quoc Island Beach Escape',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80',
    rating: 4.8,
    reviews: 456,
    description: 'Relax on pristine white-sand beaches, snorkel in crystal waters, and enjoy fresh seafood at sunset.',
    duration: '3 days',
    price: 210,
    region: 'south',
  },
  {
    id: 7,
    title: 'Ninh Binh — Tam Coc & Trang An Day Trip',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80',
    rating: 4.8,
    reviews: 701,
    description: 'Boat through stunning karst landscapes, visit ancient pagodas, and cycle through lush rice paddies.',
    duration: '1 day',
    price: 65,
    region: 'north',
  },
  {
    id: 8,
    title: 'Da Nang — Golden Bridge & Ba Na Hills',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
    rating: 4.6,
    reviews: 378,
    description: 'Visit the iconic Golden Bridge, ride the cable car to Ba Na Hills, and enjoy the French Village theme park.',
    duration: '1 day',
    price: 85,
    region: 'central',
  },
  {
    id: 9,
    title: 'Vietnam Grand Tour — North to South',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    rating: 5.0,
    reviews: 215,
    description: 'The ultimate 14-day journey from Hanoi to Saigon — covering Ha Long Bay, Hue, Hoi An, and the Mekong Delta.',
    duration: '14 days',
    price: 1250,
    region: 'all',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'North Vietnam', value: 'north' },
  { label: 'Central Vietnam', value: 'central' },
  { label: 'South Vietnam', value: 'south' },
];

const faqs = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 2-4 weeks in advance, especially during peak season (October - April). Last-minute bookings are also possible.' },
  { q: 'Can I customize a tour itinerary?', a: 'Absolutely! All our tours are fully customizable. Tell us your interests and we\'ll design the perfect trip.' },
  { q: 'What\'s included in the tour price?', a: 'Our packages typically include accommodation, transport, English-speaking guide, entrance fees, and some meals.' },
  { q: 'What is your cancellation policy?', a: 'Free cancellation up to 7 days before departure. Cancellations within 7 days may incur a fee.' },
];

const TourPage = () => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = tours.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === 'all' || t.region === activeFilter || t.region === 'all';
    return matchSearch && matchFilter;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80" alt="Vietnam Tours" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              Explore Vietnam's Hidden Trails
            </h1>
            <p className="service-hero__subtitle">
              Discover curated tour packages across Vietnam — from mountain treks to beach escapes.
            </p>
          </div>
        </section>

        {/* Destination Grid */}
        <section className="sp-destinations section">
          <div className="container">
            <div className="sp-destinations__grid">
              {destinations.map((d) => (
                <div key={d.name} className="sp-destination-card">
                  <img src={d.image} alt={d.name} />
                  <div className="sp-destination-card__overlay"></div>
                  <span className="sp-destination-card__name">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search + Filter */}
        <section className="sp-products section">
          <div className="container">
            <div className="sp-search">
              <div className="sp-search__bar">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="sp-search__filter-btn"><SlidersHorizontal size={18} /></button>
              </div>
              <div className="sp-filters">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    className={`sp-filter-pill ${activeFilter === f.value ? 'sp-filter-pill--active' : ''}`}
                    onClick={() => setActiveFilter(f.value)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards */}
            <div className="sp-products__grid">
              {filtered.map((tour) => (
                <div key={tour.id} className="sp-product-card">
                  <div className="sp-product-card__image">
                    <img src={tour.image} alt={tour.title} />
                  </div>
                  <div className="sp-product-card__body">
                    <h3 className="sp-product-card__title">{tour.title}</h3>
                    <div className="sp-product-card__rating">
                      <div className="sp-product-card__stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill={i < Math.floor(tour.rating) ? '#22c55e' : 'none'} color={i < Math.floor(tour.rating) ? '#22c55e' : '#cbd5e1'} />
                        ))}
                      </div>
                      <span className="sp-product-card__reviews">{tour.reviews}</span>
                    </div>
                    <p className="sp-product-card__desc">{tour.description}</p>
                    <div className="sp-product-card__footer">
                      <span className="sp-product-card__duration"><Clock size={14} /> {tour.duration}</span>
                      <span className="sp-product-card__price">From <strong>US${tour.price.toFixed(2)}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="sp-empty">
                <p>No tours match your search. Try a different keyword or filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="service-faq">
          <div className="container">
            <div className="service-faq__header">
              <span className="section-label">✦ FAQ</span>
              <h2 className="section-title">Common Questions</h2>
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
            <h2>Ready to Explore Vietnam?</h2>
            <p>Let us plan your perfect trip. Get a free consultation today.</p>
            <div className="service-cta__actions">
              <Button href="#contact" variant="accent" size="lg">Get Free Quote</Button>
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

export default TourPage;
