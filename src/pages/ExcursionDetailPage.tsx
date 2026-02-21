import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, Clock, Users, MapPin, ChevronDown, Anchor,
  Check, X as XIcon, Calendar, Heart, Share2, ArrowLeft, Camera
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';

const allExcursions = [
  {
    id: 1,
    title: 'A Day in Paradise: Halong Bay Shore Excursion',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    ],
    port: 'Ha Long Port',
    rating: 4.9,
    reviews: 607,
    description: 'Cruise through towering limestone pillars, visit floating villages, and explore spectacular caves — all within a day designed to maximize your time in port. Enjoy a seafood lunch on board and kayak through emerald lagoons.',
    duration: '8 hours',
    groupSize: '15 max',
    pickupTime: '7:30 AM',
    price: 129,
    highlights: [
      'Cruise through Ha Long Bay limestone karsts',
      'Kayak in Luon Cave',
      'Visit Titop Island viewpoint',
      'Seafood lunch on board',
      'Explore Sung Sot Cave',
      'Guaranteed return to port on time',
    ],
    itinerary: [
      { time: '7:30 AM', activity: 'Pick-up from Ha Long Port cruise terminal' },
      { time: '8:30 AM', activity: 'Board luxury day cruise, welcome drinks' },
      { time: '9:30 AM', activity: 'Kayaking through Luon Cave & hidden lagoons' },
      { time: '11:00 AM', activity: 'Visit Titop Island — swim or hike to viewpoint' },
      { time: '12:30 PM', activity: 'Seafood lunch on board with bay views' },
      { time: '2:00 PM', activity: 'Explore Sung Sot (Surprise) Cave' },
      { time: '3:30 PM', activity: 'Return cruise with tea and fresh fruit' },
      { time: '4:30 PM', activity: 'Return to Ha Long Port' },
    ],
    included: ['Port pickup & return', 'Luxury day cruise', 'Seafood lunch', 'Kayaking', 'English guide', 'Entrance fees', 'Bottled water'],
    excluded: ['Alcoholic drinks', 'Tips', 'Personal expenses', 'Travel insurance'],
    reviewsList: [
      { name: 'Jennifer W.', country: 'USA', rating: 5, text: 'Perfect shore excursion! We were back at the ship with time to spare. The bay is absolutely stunning.', date: 'Feb 2026' },
      { name: 'Hans M.', country: 'Germany', rating: 5, text: 'Well-organized and breathtaking. The kayaking was a highlight for our family.', date: 'Jan 2026' },
    ],
  },
  {
    id: 2,
    title: 'Hue Imperial City Shore Excursion',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    ],
    port: 'Da Nang Port',
    rating: 4.8,
    reviews: 412,
    description: 'Travel from Da Nang Port to the ancient imperial capital of Hue. Explore the UNESCO-listed Citadel, visit royal tombs, and enjoy a royal-style Vietnamese lunch.',
    duration: '10 hours',
    groupSize: '12 max',
    pickupTime: '7:00 AM',
    price: 175,
    highlights: ['Explore Hue Imperial Citadel (UNESCO)', 'Visit Khai Dinh Royal Tomb', 'Dragon Boat on Perfume River', 'Royal-style Vietnamese lunch', 'Scenic Hai Van Pass views', 'Local market visit'],
    itinerary: [
      { time: '7:00 AM', activity: 'Pick-up from Da Nang Port' },
      { time: '8:30 AM', activity: 'Arrive at Hue, visit Imperial Citadel' },
      { time: '10:30 AM', activity: 'Khai Dinh Tomb exploration' },
      { time: '12:00 PM', activity: 'Royal Vietnamese lunch at local restaurant' },
      { time: '1:30 PM', activity: 'Dragon Boat ride on Perfume River' },
      { time: '3:00 PM', activity: 'Local market visit & souvenir shopping' },
      { time: '4:00 PM', activity: 'Return via Hai Van Pass scenic drive' },
      { time: '5:30 PM', activity: 'Return to Da Nang Port' },
    ],
    included: ['Port transfer', 'English guide', 'All entrance fees', 'Royal lunch', 'Dragon Boat ride', 'Water & snacks'],
    excluded: ['Alcoholic drinks', 'Tips', 'Personal expenses'],
    reviewsList: [
      { name: 'Clara B.', country: 'France', rating: 5, text: 'The Citadel was incredible! Our guide was so knowledgeable about Vietnamese history.', date: 'Jan 2026' },
    ],
  },
  {
    id: 3,
    title: 'Hoi An Ancient Town & Basket Boat Experience',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    ],
    port: 'Da Nang Port',
    rating: 4.9,
    reviews: 612,
    description: 'Walk through UNESCO-listed Hoi An Ancient Town, ride a traditional basket boat in Cam Thanh, and enjoy local cuisine. Perfect for cruise passengers wanting culture and adventure.',
    duration: '8 hours',
    groupSize: '12 max',
    pickupTime: '7:30 AM',
    price: 158,
    highlights: ['Walk through Hoi An Ancient Town', 'Traditional basket boat ride', 'Vietnamese cooking class', 'Japanese Covered Bridge', 'Local market exploration', 'Lantern-making workshop'],
    itinerary: [
      { time: '7:30 AM', activity: 'Pick-up from Da Nang Port' },
      { time: '8:30 AM', activity: 'Arrive at Hoi An, walking tour of Ancient Town' },
      { time: '10:00 AM', activity: 'Visit Japanese Covered Bridge & Assembly Halls' },
      { time: '11:00 AM', activity: 'Basket boat ride in Cam Thanh coconut village' },
      { time: '12:30 PM', activity: 'Cooking class and Vietnamese lunch' },
      { time: '2:00 PM', activity: 'Free time for shopping & lantern-making' },
      { time: '3:30 PM', activity: 'Return to Da Nang Port' },
    ],
    included: ['Port transfer', 'English guide', 'Entrance fees', 'Cooking class', 'Lunch', 'Basket boat ride'],
    excluded: ['Alcoholic drinks', 'Tips', 'Shopping expenses'],
    reviewsList: [
      { name: 'Tom S.', country: 'UK', rating: 5, text: 'Hoi An is magical! The basket boat ride was so fun and the cooking class was delicious.', date: 'Feb 2026' },
    ],
  },
];

const defaultExcursion = allExcursions[0];

const ExcursionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const excursion = allExcursions.find((e) => e.id === Number(id)) || defaultExcursion;
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'reviews'>('overview');

  const related = allExcursions.filter((e) => e.id !== excursion.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero" style={{ minHeight: '480px' }}>
          <div className="service-hero__bg">
            <img src={excursion.image} alt={excursion.title} />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <Link to="/excursions" className="detail-back-link">
              <ArrowLeft size={16} /> All Excursions
            </Link>
            <div className="detail-hero-port-badge glass-card">
              <Anchor size={14} /> {excursion.port}
            </div>
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              {excursion.title}
            </h1>
            <div className="detail-hero-meta">
              <span className="detail-hero-meta__item">
                <Star size={16} fill="#facc15" color="#facc15" /> {excursion.rating} ({excursion.reviews} reviews)
              </span>
              <span className="detail-hero-meta__item"><Clock size={16} /> {excursion.duration}</span>
              <span className="detail-hero-meta__item"><MapPin size={16} /> {excursion.port}</span>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="detail-quick-bar">
          <div className="container">
            <div className="detail-quick-bar__grid">
              <div className="detail-quick-bar__item">
                <Clock size={20} />
                <div>
                  <span className="detail-quick-bar__label">Duration</span>
                  <span className="detail-quick-bar__value">{excursion.duration}</span>
                </div>
              </div>
              <div className="detail-quick-bar__item">
                <Users size={20} />
                <div>
                  <span className="detail-quick-bar__label">Group Size</span>
                  <span className="detail-quick-bar__value">{excursion.groupSize}</span>
                </div>
              </div>
              <div className="detail-quick-bar__item">
                <Anchor size={20} />
                <div>
                  <span className="detail-quick-bar__label">Port</span>
                  <span className="detail-quick-bar__value">{excursion.port}</span>
                </div>
              </div>
              <div className="detail-quick-bar__item">
                <Calendar size={20} />
                <div>
                  <span className="detail-quick-bar__label">Pickup Time</span>
                  <span className="detail-quick-bar__value">{excursion.pickupTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <section className="detail-content section">
          <div className="container">
            <div className="detail-layout">
              <div className="detail-main">
                {/* Gallery */}
                <div className="detail-gallery">
                  <div className="detail-gallery__main">
                    <img src={excursion.gallery[0]} alt={excursion.title} />
                    <span className="detail-gallery__badge glass-card"><Camera size={14} /> {excursion.gallery.length} Photos</span>
                  </div>
                  <div className="detail-gallery__thumbs">
                    {excursion.gallery.slice(1).map((img, i) => (
                      <img key={i} src={img} alt={`${excursion.title} ${i + 2}`} />
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <div className="detail-tabs">
                  <button className={`detail-tab ${activeTab === 'overview' ? 'detail-tab--active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
                  <button className={`detail-tab ${activeTab === 'itinerary' ? 'detail-tab--active' : ''}`} onClick={() => setActiveTab('itinerary')}>Schedule</button>
                  <button className={`detail-tab ${activeTab === 'reviews' ? 'detail-tab--active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                </div>

                {activeTab === 'overview' && (
                  <div className="detail-section">
                    <h2 className="detail-section__title">About This Excursion</h2>
                    <p className="detail-section__text">{excursion.description}</p>
                    <h3 className="detail-section__subtitle">Highlights</h3>
                    <ul className="detail-highlights">
                      {excursion.highlights.map((h, i) => (
                        <li key={i}><Check size={16} className="detail-check-icon" /> {h}</li>
                      ))}
                    </ul>
                    <div className="detail-included-grid">
                      <div>
                        <h3 className="detail-section__subtitle" style={{ color: 'var(--color-primary)' }}>✓ Included</h3>
                        <ul className="detail-inc-list">
                          {excursion.included.map((item, i) => (
                            <li key={i}><Check size={14} className="detail-check-icon" /> {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="detail-section__subtitle" style={{ color: '#ef4444' }}>✗ Not Included</h3>
                        <ul className="detail-inc-list detail-inc-list--excluded">
                          {excursion.excluded.map((item, i) => (
                            <li key={i}><XIcon size={14} /> {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div className="detail-section">
                    <h2 className="detail-section__title">Schedule</h2>
                    <div className="detail-timeline">
                      {excursion.itinerary.map((item, i) => (
                        <div key={i} className="detail-timeline__item">
                          <span className="detail-timeline__time">{item.time}</span>
                          <div className="detail-timeline__dot"></div>
                          <span className="detail-timeline__activity">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="detail-section">
                    <h2 className="detail-section__title">Traveler Reviews</h2>
                    <div className="detail-reviews-summary">
                      <div className="detail-reviews-score">
                        <span className="detail-reviews-score__num">{excursion.rating}</span>
                        <div className="detail-reviews-score__stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={18} fill={i < Math.floor(excursion.rating) ? '#facc15' : 'none'} color={i < Math.floor(excursion.rating) ? '#facc15' : '#cbd5e1'} />
                          ))}
                        </div>
                        <span className="detail-reviews-score__count">{excursion.reviews} reviews</span>
                      </div>
                    </div>
                    <div className="detail-reviews-list">
                      {excursion.reviewsList.map((review, i) => (
                        <div key={i} className="detail-review-card">
                          <div className="detail-review-card__header">
                            <div className="detail-review-card__avatar">{review.name.charAt(0)}</div>
                            <div>
                              <span className="detail-review-card__name">{review.name}</span>
                              <span className="detail-review-card__meta">{review.country} · {review.date}</span>
                            </div>
                            <div className="detail-review-card__stars">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star key={j} size={14} fill={j < review.rating ? '#facc15' : 'none'} color={j < review.rating ? '#facc15' : '#cbd5e1'} />
                              ))}
                            </div>
                          </div>
                          <p className="detail-review-card__text">"{review.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="detail-sidebar">
                <div className="detail-pricing-card">
                  <div className="detail-pricing-card__price">
                    <span className="detail-pricing-card__from">From</span>
                    <span className="detail-pricing-card__amount">US${excursion.price}</span>
                    <span className="detail-pricing-card__per">/ person</span>
                  </div>
                  <div className="detail-pricing-card__field">
                    <label><Calendar size={14} /> Travel Date</label>
                    <input type="date" />
                  </div>
                  <div className="detail-pricing-card__field">
                    <label><Users size={14} /> Travelers</label>
                    <select>
                      <option>1 person</option>
                      <option>2 people</option>
                      <option>3 people</option>
                      <option>4+ people</option>
                    </select>
                  </div>
                  <Button variant="primary" size="lg" className="btn--full">Book Now</Button>
                  <Button variant="outline" size="md" className="btn--full">Get Free Quote</Button>
                  <div className="detail-pricing-card__actions">
                    <button className="detail-pricing-card__action"><Heart size={16} /> Save</button>
                    <button className="detail-pricing-card__action"><Share2 size={16} /> Share</button>
                  </div>
                  <div className="detail-pricing-card__trust">
                    <span>✓ Guaranteed ship return</span>
                    <span>✓ Free cancellation</span>
                    <span>✓ Port pickup included</span>
                  </div>
                </div>
              </aside>
            </div>

            {related.length > 0 && (
              <div className="detail-related">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>More Shore Excursions</h2>
                <div className="sp-products__grid">
                  {related.map((e) => (
                    <Link key={e.id} to={`/excursions/${e.id}`} className="sp-product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="sp-product-card__image">
                        <img src={e.gallery[0]} alt={e.title} />
                      </div>
                      <div className="sp-product-card__body">
                        <h3 className="sp-product-card__title">{e.title}</h3>
                        <div className="sp-product-card__rating">
                          <div className="sp-product-card__stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} size={14} fill={i < Math.floor(e.rating) ? '#facc15' : 'none'} color={i < Math.floor(e.rating) ? '#facc15' : '#cbd5e1'} />
                            ))}
                          </div>
                          <span className="sp-product-card__reviews">{e.reviews}</span>
                        </div>
                        <div className="sp-product-card__footer">
                          <span className="sp-product-card__duration"><Clock size={14} /> {e.duration}</span>
                          <span className="sp-product-card__price">From <strong>US${e.price}</strong></span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExcursionDetailPage;
