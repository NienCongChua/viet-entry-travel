import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Star, Clock, Sparkles, ChevronDown, ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import CTA from '../components/CTA';
import { tours } from '../data/tours';
import './ServicePage.css';

const destinations = [
  { name: 'Ha Long Bay', image: '/images/tours/halong-bay-cruise.jpg', count: 'Luxury Cruises & Karsts' },
  { name: 'Sapa Highlands', image: '/images/tours/sapa-rice-terrace.jpg', count: 'Rice Terraces & Trekking' },
  { name: 'Ha Giang', image: '/images/tours/ha-giang-ma-pi-leng.jpg', count: 'Extreme North Frontier' },
  { name: 'Ninh Binh', image: '/images/tours/ninh-binh-trang-an.jpg', count: 'River Caves & Dragon Peak' },
  { name: 'Hoi An & Hue', image: '/images/tours/hoi-an-lantern-street.jpg', count: 'Ancient Imperial Heritage' },
  { name: 'Mekong Delta', image: '/images/tours/cai-rang-floating-market.jpg', count: 'Floating Markets & Orchards' },
];

const regionFilters = [
  { label: 'All Regions (24)', value: 'all' },
  { label: 'Northern Vietnam (9)', value: 'north' },
  { label: 'Central Heritage (7)', value: 'central' },
  { label: 'Southern & Islands (7)', value: 'south' },
  { label: 'Nationwide Grand Tour (1)', value: 'nationwide' },
];

const faqs = [
  {
    q: 'Can every tour itinerary be tailored and customized?',
    a: 'Absolutely! Every single tour in our collection is 100% customizable. You can adjust duration, select boutique or luxury hotels, add specific photo stops, or combine multiple regions into one seamless journey.'
  },
  {
    q: 'How far in advance should I plan my Vietnam tour?',
    a: 'We recommend planning at least 2 to 4 weeks ahead, especially during peak seasons (October to April), for boutique cruise staterooms and high-demand mountain homestays.'
  },
  {
    q: 'What is included in each tour package?',
    a: 'Our tours typically include all private ground transportation, verified local English-speaking specialist guides, comprehensive entrance and national park permits, authentic meals specified, and handpicked boutique accommodations.'
  },
  {
    q: 'Do you cater to dietary restrictions and allergies?',
    a: 'Yes! Vegetarian, vegan, pescatarian, gluten-free, halal, and specific food allergies are fully accommodated throughout all meals, cruises, and cooking masterclasses.'
  },
];

const TourPage = () => {
  const [search, setSearch] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      const q = search.toLowerCase();
      const matchSearch =
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.highlights.some((h) => h.toLowerCase().includes(q)) ||
        (t.startEndLocation && t.startEndLocation.toLowerCase().includes(q));

      const matchRegion =
        activeRegion === 'all'
          ? true
          : activeRegion === 'nationwide'
          ? t.region === 'all'
          : t.region === activeRegion;

      return matchSearch && matchRegion;
    });
  }, [search, activeRegion]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      const timer = setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img src="/images/tours/halong-bay-cruise.jpg" alt="Vietnam Tours" />
            <div className="service-hero__bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(12,25,41,0.75) 0%, rgba(14,50,60,0.65) 100%)' }}></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <Sparkles size={14} /> Curated Experiential Travel
            </span>
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'normal' }}>
              Handcrafted Vietnam Journeys
            </h1>
            <p className="service-hero__subtitle">
              Immerse yourself in authentic landscapes, deep cultural heritage, and sensory adventures from North to South.
            </p>
          </div>
        </section>

        {/* Destination Showcase Strip */}
        <section className="sp-destinations section" style={{ paddingTop: '3rem', paddingBottom: '1.5rem' }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-label">✦ Iconic Destinations</span>
              <h2 className="section-title">Where Will Your Journey Take You?</h2>
            </div>
            <div className="sp-destinations__grid">
              {destinations.map((d) => (
                <div
                  key={d.name}
                  className="sp-destination-card"
                  onClick={() => setSearch(d.name.split(' ')[0])}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={d.image} alt={d.name} />
                  <div className="sp-destination-card__overlay"></div>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', zIndex: 3 }}>
                    <span className="sp-destination-card__name" style={{ display: 'block', marginBottom: '0.2rem' }}>
                      {d.name}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 500 }}>
                      {d.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="sp-products section" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div className="sp-search" style={{ marginBottom: '2rem' }}>
              <div className="sp-search__bar" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search by destination, pass, cave, or keyword..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Region Filter Pills */}
              <div className="sp-filters" style={{ justifyContent: 'center' }}>
                {regionFilters.map((f) => (
                  <button
                    key={f.value}
                    className={`sp-filter-pill ${activeRegion === f.value ? 'sp-filter-pill--active' : ''}`}
                    onClick={() => setActiveRegion(f.value)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tour Cards Grid (NO PRICES) */}
            <div className="sp-products__grid">
              {filtered.map((tour) => (
                <Link
                  key={tour.id}
                  to={`/tours/${tour.id}`}
                  className="sp-product-card"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
                >
                  <div className="sp-product-card__image" style={{ position: 'relative' }}>
                    <img src={tour.gallery[0] || tour.image} alt={tour.title} />
                    <span
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: 'rgba(15, 23, 42, 0.75)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {tour.experienceType}
                    </span>
                  </div>

                  <div className="sp-product-card__body">
                    <h3 className="sp-product-card__title">{tour.title}</h3>

                    <div className="sp-product-card__rating">
                      <div className="sp-product-card__stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i < Math.floor(tour.rating) ? '#facc15' : 'none'}
                            color={i < Math.floor(tour.rating) ? '#facc15' : '#cbd5e1'}
                          />
                        ))}
                      </div>
                      <span className="sp-product-card__reviews" style={{ fontWeight: 600 }}>
                        {tour.rating}
                      </span>
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                        ({tour.reviews} reviews)
                      </span>
                    </div>

                    <p className="sp-product-card__desc">{tour.description}</p>

                    {/* Top Highlights Bullets */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {tour.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: '#475569', lineHeight: 1.4 }}>
                          <span style={{ color: '#4e6e1c', fontWeight: 'bold' }}>✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="sp-product-card__footer" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', marginTop: 'auto' }}>
                      <span className="sp-product-card__duration">
                        <Clock size={14} /> {tour.duration}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#b31820', fontWeight: 600, fontSize: '0.85rem' }}>
                        Explore Journey <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="sp-empty" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <Compass size={40} style={{ color: '#94a3b8', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>No journeys match your search</h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Try searching a different location or reset the filters to explore our full collection.</p>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => {
                    setSearch('');
                    setActiveRegion('all');
                  }}
                >
                  Show All 24 Tours
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FAQs */}
        <section className="service-faq">
          <div className="container">
            <div className="service-faq__header">
              <span className="section-label">✦ Planning Your Journey</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
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

        {/* Consultation CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Looking for a Tailor-Made Vietnam Journey?</h2>
            <p>Tell us your dates, interests, and preferred style. Our local travel specialists will craft your bespoke itinerary.</p>
            <div className="service-cta__actions">
              <Button href="#contact" variant="accent" size="lg">Request Bespoke Proposal</Button>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Embedded Request a Quote Form */}
        <CTA defaultTour="Custom Vietnam Tour Package" id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default TourPage;
