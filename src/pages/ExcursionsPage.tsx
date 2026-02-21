import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Star, Clock, ChevronDown, ArrowLeft, Anchor } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';

const excursions = [
  {
    id: 1,
    title: 'A Day in Paradise: Halong Bay Shore Excursion',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    port: 'Ha Long Port',
    rating: 4.9,
    reviews: 607,
    description: 'Discover the serene beauty of Halong Bay. Explore hidden coves, pristine beaches, and vibrant local culture.',
    duration: '4 hours',
    price: 100,
  },
  {
    id: 2,
    title: 'Ho Chi Minh City Shore Excursions Full Day Tour From Phu My Port',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    port: 'Phu My Port',
    rating: 4.8,
    reviews: 771,
    description: 'Explore the vibrant city of Ho Chi Minh City on a full-day shore excursion from Phu My Port.',
    duration: '9 hours',
    price: 130,
  },
  {
    id: 3,
    title: 'Hoi An Ancient Town & Cam Thanh Basket Boat Shore Excursions',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
    port: 'Da Nang Port',
    rating: 4.7,
    reviews: 892,
    description: 'Featuring a guided walk through the ancient town, a delightful basket boat ride, and immersive cultural experiences tailored for cruise travelers.',
    duration: '9 hours',
    price: 155,
  },
  {
    id: 4,
    title: 'Hanoi City Shore Excursion — Train Street & Cyclo Ride',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    port: 'Ha Long Port',
    rating: 4.9,
    reviews: 445,
    description: 'Experience Hanoi\'s famous Train Street, ride a traditional cyclo through the Old Quarter, and taste authentic street food.',
    duration: '10 hours',
    price: 132,
  },
  {
    id: 5,
    title: 'Halong Bay Shore Excursion — Day Cruise & Cave Discovery',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
    port: 'Ha Long Port',
    rating: 4.8,
    reviews: 534,
    description: 'Cruise through limestone karsts, explore Sung Sot Cave, kayak in emerald waters, and enjoy fresh seafood lunch on board.',
    duration: '6 hours',
    price: 102,
  },
  {
    id: 6,
    title: 'Hoi An Shore Excursion — Ancient Town & Basket Boat',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
    port: 'Da Nang Port',
    rating: 4.9,
    reviews: 612,
    description: 'Walk through UNESCO-listed Hoi An Ancient Town, ride a traditional basket boat in Cam Thanh, and enjoy local cuisine.',
    duration: '8 hours',
    price: 158,
  },
  {
    id: 7,
    title: 'Ho Chi Minh City Shore Excursion — History & Culture',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
    port: 'Phu My Port',
    rating: 4.7,
    reviews: 389,
    description: 'Visit the War Remnants Museum, Reunification Palace, Notre Dame Cathedral, and Ben Thanh Market.',
    duration: '9 hours',
    price: 132,
  },
  {
    id: 8,
    title: 'Nha Trang Shore Excursion — Islands & Snorkeling',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80',
    port: 'Nha Trang Port',
    rating: 4.6,
    reviews: 298,
    description: 'Island hopping adventure with snorkeling in crystal-clear waters, fresh seafood lunch, and beach relaxation.',
    duration: '7 hours',
    price: 95,
  },
  {
    id: 9,
    title: 'Da Nang Shore Excursion — Golden Bridge & Ba Na Hills',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
    port: 'Da Nang Port',
    rating: 4.8,
    reviews: 523,
    description: 'Visit the iconic Golden Bridge held by giant stone hands, ride the cable car, and explore the French Village.',
    duration: '8 hours',
    price: 145,
  },
];

const ports = [
  { label: 'All Ports', value: 'all' },
  { label: 'Ha Long', value: 'Ha Long Port' },
  { label: 'Phu My', value: 'Phu My Port' },
  { label: 'Da Nang', value: 'Da Nang Port' },
  { label: 'Nha Trang', value: 'Nha Trang Port' },
];

const faqs = [
  { q: 'What is a shore excursion?', a: 'A shore excursion is a guided tour designed for cruise passengers during port stops. We pick you up at the port and return you before the ship departs.' },
  { q: 'Will I be back to the ship on time?', a: 'Absolutely! All our shore excursions are designed with cruise schedules in mind. We guarantee you\'ll be back at the port with plenty of time.' },
  { q: 'Can I customize a shore excursion?', a: 'Yes! Contact us with your preferences and we\'ll create a custom itinerary tailored to your interests and time constraints.' },
  { q: 'How many people are in a group tour?', a: 'Our group shore excursions typically have 8-15 people. Private options are also available for a more personalized experience.' },
];

const ExcursionsPage = () => {
  const [search, setSearch] = useState('');
  const [activePort, setActivePort] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = excursions.filter((e) => {
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase());
    const matchPort = activePort === 'all' || e.port === activePort;
    return matchSearch && matchPort;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80" alt="Shore Excursions" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge"><Anchor size={16} /> Shore Excursions</span>
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              Unpack the Best of Vietnam<br />– One Port at a Time
            </h1>
            <p className="service-hero__subtitle">
              Discover Vietnam's highlights with curated shore tours at every stop.
            </p>
          </div>
        </section>

        {/* Search + Products */}
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
                {ports.map((p) => (
                  <button
                    key={p.value}
                    className={`sp-filter-pill ${activePort === p.value ? 'sp-filter-pill--active' : ''}`}
                    onClick={() => setActivePort(p.value)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sp-products__grid">
              {filtered.map((exc) => (
                <div key={exc.id} className="sp-product-card">
                  <div className="sp-product-card__image">
                    <img src={exc.image} alt={exc.title} />
                    <span className="sp-product-card__port-badge">{exc.port}</span>
                  </div>
                  <div className="sp-product-card__body">
                    <h3 className="sp-product-card__title">{exc.title}</h3>
                    <div className="sp-product-card__rating">
                      <div className="sp-product-card__stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill={i < Math.floor(exc.rating) ? '#22c55e' : 'none'} color={i < Math.floor(exc.rating) ? '#22c55e' : '#cbd5e1'} />
                        ))}
                      </div>
                      <span className="sp-product-card__reviews">{exc.reviews}</span>
                    </div>
                    <p className="sp-product-card__desc">{exc.description}</p>
                    <div className="sp-product-card__footer">
                      <span className="sp-product-card__duration"><Clock size={14} /> {exc.duration}</span>
                      <span className="sp-product-card__price">From <strong>US${exc.price.toFixed(2)}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="sp-empty">
                <p>No excursions match your search. Try a different keyword or port.</p>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="service-faq">
          <div className="container">
            <div className="service-faq__header">
              <span className="section-label">✦ FAQ</span>
              <h2 className="section-title">Shore Excursion Questions</h2>
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
            <h2>Book Your Shore Excursion</h2>
            <p>Curated cruise port tours with guaranteed on-time return.</p>
            <div className="service-cta__actions">
              <Button href="#contact" variant="accent" size="lg">Inquire Now</Button>
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

export default ExcursionsPage;
