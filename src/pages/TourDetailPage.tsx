import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, Clock, Users, MapPin, Globe, ChevronDown, ChevronRight,
  Check, X as XIcon, Calendar, Heart, Share2, ArrowLeft, Camera
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';

const allTours = [
  {
    id: 1,
    title: 'Ha Long Bay Luxury Cruise — 2 Days',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 847,
    description: 'Cruise through stunning limestone karsts, kayak in emerald waters, and sleep under the stars on a luxury junk boat. This 2-day journey through Ha Long Bay offers an unforgettable experience with onboard fine dining, tai chi at sunrise, and cave exploration.',
    duration: '2 days',
    groupSize: '12 max',
    language: 'English, Vietnamese',
    difficulty: 'Easy',
    price: 189,
    region: 'north',
    highlights: [
      'Cruise through 1,600 limestone islands',
      'Kayak in hidden lagoons',
      'Watch sunset from the sundeck',
      'Explore Sung Sot Cave',
      'Tai chi session at sunrise',
      'Fresh seafood dinner on board',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hanoi → Ha Long Bay Cruise',
        desc: 'Depart from Hanoi at 8:00 AM. Arrive at Ha Long Bay pier by noon. Board your luxury junk boat, enjoy welcome drinks and a seafood lunch. Afternoon kayaking through limestone karsts and lagoons. Evening cooking class and sunset dinner on the sundeck.',
      },
      {
        day: 2,
        title: 'Sunrise & Cave Exploration → Hanoi',
        desc: 'Early morning tai chi on the top deck. Breakfast with panoramic bay views. Visit Sung Sot (Surprise) Cave — one of the largest grottos in Ha Long. Return to the boat for brunch before disembarking. Arrive back in Hanoi by 4:30 PM.',
      },
    ],
    included: ['Luxury cabin accommodation', 'All meals on board', 'English-speaking guide', 'Kayaking equipment', 'Entrance fees', 'Round-trip transfer from Hanoi'],
    excluded: ['Travel insurance', 'Personal expenses', 'Tips & gratuities', 'Alcoholic beverages'],
    reviewsList: [
      { name: 'Sarah K.', country: 'Australia', rating: 5, text: 'Absolutely magical experience! The bay is breathtaking and the boat was incredibly luxurious.', date: 'Feb 2026' },
      { name: 'Marco R.', country: 'Italy', rating: 5, text: 'Best 2 days of our Vietnam trip. The sunrise tai chi was a highlight!', date: 'Jan 2026' },
      { name: 'Yuki T.', country: 'Japan', rating: 4, text: 'Beautiful scenery and excellent food. Would recommend the kayaking experience.', date: 'Dec 2025' },
    ],
  },
  {
    id: 2,
    title: 'Sapa Trekking & Homestay Adventure',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 623,
    description: 'Trek through terraced rice fields, visit ethnic minority villages, and stay with a local family in the mountains. Experience the authentic culture of the Hmong and Dao people while enjoying breathtaking mountain scenery.',
    duration: '3 days',
    groupSize: '8 max',
    language: 'English',
    difficulty: 'Moderate',
    price: 145,
    region: 'north',
    highlights: [
      'Trek through terraced rice fields',
      'Homestay with local Hmong family',
      'Visit Cat Cat village',
      'Panoramic mountain views',
      'Traditional cooking experience',
      'Local market visit in Sapa town',
    ],
    itinerary: [
      { day: 1, title: 'Sapa Town → Cat Cat Village', desc: 'Arrive in Sapa, meet your local H\'mong guide. Trek downhill to Cat Cat Village, learn about traditional indigo dyeing. Lunch with a local family. Continue to Y Linh Ho village. Overnight homestay.' },
      { day: 2, title: 'Rice Terrace Trek', desc: 'Full-day trek through the stunning Muong Hoa Valley rice terraces. Visit Ta Van village of the Giay people. Traditional lunch. Continue trekking with mountain panoramas. Return to homestay for cooking class and dinner.' },
      { day: 3, title: 'Morning Market → Departure', desc: 'Early morning visit to Sapa local market. Browse handicrafts and fresh produce. Final trek with photo stops. Return to Sapa town by noon. Transfer back to Hanoi.' },
    ],
    included: ['Homestay accommodation', 'All meals', 'Local H\'mong guide', 'Trekking equipment', 'Entrance fees', 'Round-trip transfer'],
    excluded: ['Travel insurance', 'Personal expenses', 'Tips & gratuities'],
    reviewsList: [
      { name: 'Emma L.', country: 'UK', rating: 5, text: 'The homestay was the highlight of our entire Vietnam trip. Our host family was so welcoming!', date: 'Jan 2026' },
      { name: 'David C.', country: 'Canada', rating: 4, text: 'Great trekking experience. The rice terraces are stunning. Pack good shoes!', date: 'Dec 2025' },
    ],
  },
  {
    id: 3,
    title: 'Hoi An Ancient Town & My Son Temples',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 912,
    description: 'Walk through lantern-lit streets, take a cooking class, and explore UNESCO My Son Hindu temples. Discover the charm of one of Vietnam\'s most atmospheric towns.',
    duration: '1 day',
    groupSize: '15 max',
    language: 'English, Vietnamese',
    difficulty: 'Easy',
    price: 75,
    region: 'central',
    highlights: ['Walk the ancient streets at sunset', 'Vietnamese cooking class', 'Explore My Son temples', 'Lantern-making workshop', 'Boat ride on Thu Bon River', 'Sample local Cao Lau noodles'],
    itinerary: [
      { day: 1, title: 'Hoi An & My Son Full Day', desc: 'Morning visit to My Son Hindu temples. Lunch at a local restaurant. Afternoon walking tour of Hoi An Ancient Town, Japanese Bridge, Assembly Halls. Cooking class. Evening free to enjoy the lantern-lit streets.' },
    ],
    included: ['Guide', 'Lunch', 'Cooking class', 'Entrance fees', 'Hotel pickup'],
    excluded: ['Travel insurance', 'Dinner', 'Personal expenses'],
    reviewsList: [
      { name: 'Lisa M.', country: 'USA', rating: 5, text: 'Hoi An is magical at night! Our guide was incredibly knowledgeable.', date: 'Feb 2026' },
    ],
  },
];

// Reusable fallback
const defaultTour = allTours[0];

const TourDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const tour = allTours.find((t) => t.id === Number(id)) || defaultTour;
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'reviews'>('overview');

  const relatedTours = allTours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero" style={{ minHeight: '480px' }}>
          <div className="service-hero__bg">
            <img src={tour.image} alt={tour.title} />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <Link to="/tours" className="detail-back-link">
              <ArrowLeft size={16} /> All Tours
            </Link>
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              {tour.title}
            </h1>
            <div className="detail-hero-meta">
              <span className="detail-hero-meta__item">
                <Star size={16} fill="#facc15" color="#facc15" /> {tour.rating} ({tour.reviews} reviews)
              </span>
              <span className="detail-hero-meta__item"><Clock size={16} /> {tour.duration}</span>
              <span className="detail-hero-meta__item"><MapPin size={16} /> Vietnam</span>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="detail-quick-bar">
          <div className="container">
            <div className="detail-quick-bar__grid">
              <div className="detail-quick-bar__item">
                <Clock size={20} />
                <div>
                  <span className="detail-quick-bar__label">Duration</span>
                  <span className="detail-quick-bar__value">{tour.duration}</span>
                </div>
              </div>
              <div className="detail-quick-bar__item">
                <Users size={20} />
                <div>
                  <span className="detail-quick-bar__label">Group Size</span>
                  <span className="detail-quick-bar__value">{tour.groupSize}</span>
                </div>
              </div>
              <div className="detail-quick-bar__item">
                <Globe size={20} />
                <div>
                  <span className="detail-quick-bar__label">Language</span>
                  <span className="detail-quick-bar__value">{tour.language}</span>
                </div>
              </div>
              <div className="detail-quick-bar__item">
                <MapPin size={20} />
                <div>
                  <span className="detail-quick-bar__label">Difficulty</span>
                  <span className="detail-quick-bar__value">{tour.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <section className="detail-content section">
          <div className="container">
            <div className="detail-layout">
              {/* Left: Main Content */}
              <div className="detail-main">
                {/* Photo Gallery */}
                <div className="detail-gallery">
                  <div className="detail-gallery__main">
                    <img src={tour.gallery[0]} alt={tour.title} />
                    <span className="detail-gallery__badge glass-card"><Camera size={14} /> {tour.gallery.length} Photos</span>
                  </div>
                  <div className="detail-gallery__thumbs">
                    {tour.gallery.slice(1).map((img, i) => (
                      <img key={i} src={img} alt={`${tour.title} ${i + 2}`} />
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <div className="detail-tabs">
                  <button className={`detail-tab ${activeTab === 'overview' ? 'detail-tab--active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
                  <button className={`detail-tab ${activeTab === 'itinerary' ? 'detail-tab--active' : ''}`} onClick={() => setActiveTab('itinerary')}>Itinerary</button>
                  <button className={`detail-tab ${activeTab === 'reviews' ? 'detail-tab--active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="detail-section">
                    <h2 className="detail-section__title">About This Tour</h2>
                    <p className="detail-section__text">{tour.description}</p>

                    <h3 className="detail-section__subtitle">Highlights</h3>
                    <ul className="detail-highlights">
                      {tour.highlights.map((h, i) => (
                        <li key={i}><Check size={16} className="detail-check-icon" /> {h}</li>
                      ))}
                    </ul>

                    <div className="detail-included-grid">
                      <div>
                        <h3 className="detail-section__subtitle" style={{ color: 'var(--color-primary)' }}>✓ What's Included</h3>
                        <ul className="detail-inc-list">
                          {tour.included.map((item, i) => (
                            <li key={i}><Check size={14} className="detail-check-icon" /> {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="detail-section__subtitle" style={{ color: '#ef4444' }}>✗ Not Included</h3>
                        <ul className="detail-inc-list detail-inc-list--excluded">
                          {tour.excluded.map((item, i) => (
                            <li key={i}><XIcon size={14} /> {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                  <div className="detail-section">
                    <h2 className="detail-section__title">Day-by-Day Itinerary</h2>
                    <div className="detail-itinerary">
                      {tour.itinerary.map((day, i) => (
                        <div key={i} className={`detail-itinerary__day ${openDay === i ? 'detail-itinerary__day--open' : ''}`}>
                          <button className="detail-itinerary__header" onClick={() => setOpenDay(openDay === i ? null : i)}>
                            <span className="detail-itinerary__num">Day {day.day}</span>
                            <span className="detail-itinerary__title">{day.title}</span>
                            <ChevronDown size={18} className="detail-itinerary__chevron" />
                          </button>
                          <div className="detail-itinerary__body">
                            <p>{day.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="detail-section">
                    <h2 className="detail-section__title">Traveler Reviews</h2>
                    <div className="detail-reviews-summary">
                      <div className="detail-reviews-score">
                        <span className="detail-reviews-score__num">{tour.rating}</span>
                        <div className="detail-reviews-score__stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={18} fill={i < Math.floor(tour.rating) ? '#facc15' : 'none'} color={i < Math.floor(tour.rating) ? '#facc15' : '#cbd5e1'} />
                          ))}
                        </div>
                        <span className="detail-reviews-score__count">{tour.reviews} reviews</span>
                      </div>
                    </div>
                    <div className="detail-reviews-list">
                      {tour.reviewsList.map((review, i) => (
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

              {/* Right: Pricing Sidebar */}
              <aside className="detail-sidebar">
                <div className="detail-pricing-card">
                  <div className="detail-pricing-card__price">
                    <span className="detail-pricing-card__from">From</span>
                    <span className="detail-pricing-card__amount">US${tour.price}</span>
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
                      <option>4 people</option>
                      <option>5+ people</option>
                    </select>
                  </div>
                  <Button variant="primary" size="lg" className="btn--full">Book Now</Button>
                  <Button variant="outline" size="md" className="btn--full">Get Free Quote</Button>
                  <div className="detail-pricing-card__actions">
                    <button className="detail-pricing-card__action"><Heart size={16} /> Save</button>
                    <button className="detail-pricing-card__action"><Share2 size={16} /> Share</button>
                  </div>
                  <div className="detail-pricing-card__trust">
                    <span>✓ Free cancellation</span>
                    <span>✓ Best price guarantee</span>
                    <span>✓ Instant confirmation</span>
                  </div>
                </div>
              </aside>
            </div>

            {/* Related Tours */}
            {relatedTours.length > 0 && (
              <div className="detail-related">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>You May Also Like</h2>
                <div className="sp-products__grid">
                  {relatedTours.map((t) => (
                    <Link key={t.id} to={`/tours/${t.id}`} className="sp-product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="sp-product-card__image">
                        <img src={t.gallery[0]} alt={t.title} />
                      </div>
                      <div className="sp-product-card__body">
                        <h3 className="sp-product-card__title">{t.title}</h3>
                        <div className="sp-product-card__rating">
                          <div className="sp-product-card__stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} size={14} fill={i < Math.floor(t.rating) ? '#facc15' : 'none'} color={i < Math.floor(t.rating) ? '#facc15' : '#cbd5e1'} />
                            ))}
                          </div>
                          <span className="sp-product-card__reviews">{t.reviews}</span>
                        </div>
                        <div className="sp-product-card__footer">
                          <span className="sp-product-card__duration"><Clock size={14} /> {t.duration}</span>
                          <span className="sp-product-card__price">From <strong>US${t.price}</strong></span>
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

export default TourDetailPage;
