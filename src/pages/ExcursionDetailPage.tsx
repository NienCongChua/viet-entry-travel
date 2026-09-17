import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, Clock, MapPin, Anchor,
  ArrowLeft, Camera, Info,
  Backpack, AlertTriangle, Tag
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import './ServicePage.css';

const allExcursions = [
  {
    id: 1,
    title: 'Ha Long Bay Full-Day Shore Excursion',
    port: 'Ha Long',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 524,
    description: 'Explore Ha Long Bay in a day with kayaking through limestone karsts, cave visits, and a seafood lunch aboard a traditional junk boat.',
    longDescription: 'Experience the breathtaking beauty of Ha Long Bay on this carefully curated shore excursion designed for cruise ship passengers. From the moment you step off your ship, our expert guides will whisk you away to explore hidden grottoes, kayak through emerald waters, and enjoy the freshest seafood aboard a traditional Vietnamese junk boat.\n\n**Perfectly Timed:** Every moment of this excursion is designed to ensure you return to your ship well before departure, with no stress or rushing.\n\n**Authentic Encounters:** Unlike standard excursions, we include visits to floating fishing villages where you can meet local families and learn about their unique way of life on the water.',
    duration: '8 hours',
    groupSize: '15 max',
    language: 'English',
    difficulty: 'Easy',
    price: 129,
    experienceType: 'Shore excursion',
    bookingAdvance: 'Cut off: 24 hours',
    categories: ['Shore Excursion', 'Nature & Adventure', 'Family Friendly', 'Group Friendly'],
    schedule: [
      { time: '08:00', activity: 'Meet at cruise port, transfer to Ha Long Bay pier' },
      { time: '09:00', activity: 'Board traditional junk boat, welcome drinks and briefing' },
      { time: '10:00', activity: 'Kayaking through limestone karsts and hidden lagoons' },
      { time: '11:30', activity: 'Visit Sung Sot (Surprise) Cave exploration' },
      { time: '12:30', activity: 'Seafood lunch aboard the junk boat' },
      { time: '14:00', activity: 'Visit fishing village, meet local families' },
      { time: '15:00', activity: 'Swimming and relaxation in the bay' },
      { time: '16:00', activity: 'Return to cruise port' },
    ],
    included: ['Port transfer', 'Junk boat cruise', 'Kayaking equipment', 'Seafood lunch', 'English-speaking guide', 'Entrance fees', 'Bottled water', 'Wet towels'],
    excluded: ['Travel insurance', 'Personal expenses', 'Tips & gratuities', 'Alcoholic beverages'],
    pleaseNote: ['Guaranteed return to ship on time', 'Children under 4 travel free', 'Not wheelchair accessible', 'Life jackets provided'],
    whatToBring: 'Comfortable shoes, swimwear, sunscreen, hat, camera, and waterproof bag for electronics.',
    cancellation: [
      { percent: 75, days: '23 hours' },
      { percent: 50, days: '2 days' },
      { percent: 25, days: '3 days' },
      { percent: 0, days: '7 days' },
    ],
    reviewsList: [
      { name: 'Emily S.', country: 'USA', rating: 5, text: 'Perfectly organized for our cruise stop. We were back at the ship with plenty of time!', date: 'Feb 2026' },
      { name: 'James W.', country: 'UK', rating: 5, text: 'The kayaking was incredible! Our guide knew the best hidden spots.', date: 'Jan 2026' },
    ],
  },
  {
    id: 2,
    title: 'Da Nang & Hoi An Cultural Shore Excursion',
    port: 'Da Nang',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 412,
    description: 'Discover the beauty of Da Nang and the ancient charm of Hoi An on this comprehensive cultural shore excursion.',
    longDescription: 'From the Marble Mountains to the lantern-lit streets of Hoi An, this excursion offers a perfect blend of nature, culture, and history. Experience Vietnamese hospitality at its finest.',
    duration: '9 hours',
    groupSize: '12 max',
    language: 'English, Vietnamese',
    difficulty: 'Easy',
    price: 99,
    experienceType: 'Shore excursion',
    bookingAdvance: 'Cut off: 24 hours',
    categories: ['Shore Excursion', 'Cultural Tour', 'UNESCO Heritage', 'Group Friendly'],
    schedule: [
      { time: '07:30', activity: 'Meet at Da Nang port, transfer by minivan' },
      { time: '08:30', activity: 'Visit Marble Mountains and pagodas' },
      { time: '10:00', activity: 'Drive to Hoi An Ancient Town' },
      { time: '10:30', activity: 'Walking tour of Hoi An — Japanese Bridge, Assembly Halls' },
      { time: '12:00', activity: 'Cooking class and Vietnamese lunch' },
      { time: '14:00', activity: 'Free time for shopping and exploration' },
      { time: '15:30', activity: 'Transfer back to Da Nang port' },
      { time: '16:30', activity: 'Arrival at cruise port' },
    ],
    included: ['Port transfer', 'Guide', 'Cooking class', 'Lunch', 'Entrance fees', 'Bottled water'],
    excluded: ['Travel insurance', 'Personal expenses', 'Tips & gratuities'],
    pleaseNote: ['Guaranteed return to ship on time', 'Comfortable walking shoes recommended', 'Modest clothing for temples'],
    whatToBring: 'Comfortable shoes, hat, sunscreen, camera, and spending money for shopping in Hoi An.',
    cancellation: [
      { percent: 75, days: '23 hours' },
      { percent: 50, days: '2 days' },
      { percent: 0, days: '5 days' },
    ],
    reviewsList: [
      { name: 'Maria G.', country: 'Spain', rating: 5, text: 'Hoi An is magical! The cooking class was a wonderful surprise.', date: 'Feb 2026' },
    ],
  },
  {
    id: 3,
    title: 'Nha Trang Island Hopping & Snorkeling',
    port: 'Nha Trang',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 387,
    description: 'Hop between tropical islands, snorkel in crystal-clear waters, and enjoy a seafood lunch with stunning coastal views.',
    longDescription: 'Discover the tropical paradise of Nha Trang Bay with this island-hopping adventure. Swim in turquoise waters, snorkel over coral reefs, and relax on pristine white sand beaches.',
    duration: '7 hours',
    groupSize: '20 max',
    language: 'English',
    difficulty: 'Easy',
    price: 85,
    experienceType: 'Shore excursion',
    bookingAdvance: 'Cut off: 12 hours',
    categories: ['Shore Excursion', 'Beach & Water', 'Family Friendly'],
    schedule: [
      { time: '08:30', activity: 'Meet at Nha Trang port, transfer to marina' },
      { time: '09:00', activity: 'Board speedboat to Mun Island' },
      { time: '09:30', activity: 'Snorkeling at Mun Island coral reef' },
      { time: '11:00', activity: 'Transfer to Mot Island for swimming' },
      { time: '12:00', activity: 'Seafood BBQ lunch on the beach' },
      { time: '13:30', activity: 'Free time, swimming, sunbathing' },
      { time: '15:00', activity: 'Return to port' },
      { time: '15:30', activity: 'Arrival at cruise port' },
    ],
    included: ['Port transfer', 'Speedboat', 'Snorkeling gear', 'Seafood BBQ lunch', 'Guide', 'Bottled water'],
    excluded: ['Travel insurance', 'Personal expenses', 'Tips'],
    pleaseNote: ['Swimming ability required', 'Children must be accompanied', 'Waterproof sunscreen recommended'],
    whatToBring: 'Swimwear, towel, waterproof sunscreen, underwater camera if available.',
    cancellation: [
      { percent: 75, days: '23 hours' },
      { percent: 50, days: '2 days' },
      { percent: 0, days: '5 days' },
    ],
    reviewsList: [
      { name: 'Tom H.', country: 'Australia', rating: 5, text: 'Amazing snorkeling! The coral reefs were beautiful and the BBQ was fantastic.', date: 'Jan 2026' },
    ],
  },
];

const defaultExcursion = allExcursions[0];

const ExcursionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const exc = allExcursions.find((e) => e.id === Number(id)) || defaultExcursion;

  const [activeTab, setActiveTab] = useState<'description' | 'itinerary' | 'reviews'>('description');

  const relatedExcursions = allExcursions.filter((e) => e.id !== exc.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="booking-page">
        <div className="container" style={{ paddingTop: '5.5rem' }}>
          <Link to="/excursions" className="booking-back-link">
            <ArrowLeft size={16} /> Back to All Excursions
          </Link>
        </div>

        {/* Gallery */}
        <section className="booking-gallery">
          <div className="container">
            <div className="booking-gallery__grid">
              <div className="booking-gallery__main">
                <img src={exc.gallery[0]} alt={exc.title} />
                <span className="booking-gallery__port-badge"><Anchor size={14} /> {exc.port} Port</span>
              </div>
              <div className="booking-gallery__side">
                {exc.gallery.slice(1, 5).map((img, i) => (
                  <div key={i} className="booking-gallery__thumb">
                    <img src={img} alt={`${exc.title} ${i + 2}`} />
                    {i === exc.gallery.length - 2 && (
                      <span className="booking-gallery__more"><Camera size={14} /> View Photos</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="booking-content section">
          <div className="container">
            <div className="booking-layout">
              <div className="booking-main">
                <h1 className="booking-title">{exc.title}</h1>
                <div className="booking-meta">
                  <span className="booking-meta__item"><Clock size={15} /> {exc.duration}</span>
                  <span className="booking-meta__item"><MapPin size={15} /> {exc.difficulty}</span>
                  <span className="booking-meta__item"><Anchor size={15} /> {exc.port} Port</span>
                </div>
                <div className="booking-rating">
                  <div className="booking-rating__dots">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`booking-rating__dot ${i < Math.floor(exc.rating) ? 'booking-rating__dot--filled' : ''}`}></span>
                    ))}
                  </div>
                  <span className="booking-rating__count">{exc.reviews}</span>
                </div>
                <p className="booking-tagline">{exc.description}</p>

                <div className="booking-tabs">
                  <button className={`booking-tab ${activeTab === 'description' ? 'booking-tab--active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                  <button className={`booking-tab ${activeTab === 'itinerary' ? 'booking-tab--active' : ''}`} onClick={() => setActiveTab('itinerary')}>Itinerary</button>
                  <button className={`booking-tab ${activeTab === 'reviews' ? 'booking-tab--active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                </div>

                {activeTab === 'description' && (
                  <div className="booking-tab-content">
                    <div className="booking-desc">
                      {exc.longDescription.split('\n\n').map((p, i) => {
                        if (p.startsWith('**')) {
                          const parts = p.split('**');
                          return (
                            <p key={i}>
                              {parts.map((part, j) =>
                                j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                              )}
                            </p>
                          );
                        }
                        return <p key={i}>{p}</p>;
                      })}
                    </div>

                    <div className="booking-inc-exc">
                      <div>
                        <h3 className="booking-section-title">What's included?</h3>
                        <ul className="booking-list">
                          {exc.included.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h3 className="booking-section-title">Exclusions</h3>
                        <ul className="booking-list booking-list--muted">
                          {exc.excluded.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="booking-note-section">
                      <h3 className="booking-section-title"><AlertTriangle size={16} /> Please note</h3>
                      <ul className="booking-list">
                        {exc.pleaseNote.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </div>

                    <div className="booking-note-section">
                      <h3 className="booking-section-title"><Backpack size={16} /> What do I need to bring?</h3>
                      <p className="booking-note-text">{exc.whatToBring}</p>
                    </div>

                    <div className="booking-note-section">
                      <h3 className="booking-section-title">Cancellation policy</h3>
                      <ul className="booking-list">
                        {exc.cancellation.map((c, i) => (
                          <li key={i}>
                            We will charge a cancellation fee of <strong>{c.percent}%</strong> if booking is cancelled {c.days} or less before the event
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="booking-more-info">
                      <h3 className="booking-section-title"><Info size={16} /> More Info</h3>
                      <div className="booking-info-grid">
                        <div>
                          <span className="booking-info-label">Experience type</span>
                          <span className="booking-info-value">{exc.experienceType}</span>
                        </div>
                        <div>
                          <span className="booking-info-label">Booking in advance</span>
                          <span className="booking-info-value">{exc.bookingAdvance}</span>
                        </div>
                        <div>
                          <span className="booking-info-label">Duration</span>
                          <span className="booking-info-value">{exc.duration}</span>
                        </div>
                        <div>
                          <span className="booking-info-label">Difficulty</span>
                          <span className="booking-info-value">{exc.difficulty}</span>
                        </div>
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                        <span className="booking-info-label">Categories</span>
                        <div className="booking-tags">
                          {exc.categories.map((c) => (
                            <span key={c} className="booking-tag"><Tag size={12} /> {c}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: '0.8rem' }}>
                        <span className="booking-info-label">Live tour guide</span>
                        <div className="booking-tags">
                          <span className="booking-tag">{exc.language}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div className="booking-tab-content">
                    <div className="detail-timeline" style={{ marginTop: '1rem' }}>
                      {exc.schedule.map((item, i) => (
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
                  <div className="booking-tab-content">
                    <div className="detail-reviews-summary">
                      <div className="detail-reviews-score">
                        <span className="detail-reviews-score__num">{exc.rating}</span>
                        <div className="detail-reviews-score__stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={18} fill={i < Math.floor(exc.rating) ? '#facc15' : 'none'} color={i < Math.floor(exc.rating) ? '#facc15' : '#cbd5e1'} />
                          ))}
                        </div>
                        <span className="detail-reviews-score__count">{exc.reviews} reviews</span>
                      </div>
                    </div>
                    <div className="detail-reviews-list">
                      {exc.reviewsList.map((review, i) => (
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
            </div>

            {relatedExcursions.length > 0 && (
              <div className="detail-related" style={{ marginTop: '3.5rem' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>You May Also Like</h2>
                <div className="sp-products__grid">
                  {relatedExcursions.map((e) => (
                    <Link key={e.id} to={`/excursions/${e.id}`} className="sp-product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="sp-product-card__image">
                        <img src={e.gallery[0]} alt={e.title} />
                        <span className="sp-product-card__port-badge">{e.port}</span>
                      </div>
                      <div className="sp-product-card__body">
                        <h3 className="sp-product-card__title">{e.title}</h3>
                        <div className="sp-product-card__rating">
                          <div className="sp-product-card__stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} size={14} fill={i < Math.floor(e.rating) ? '#22c55e' : 'none'} color={i < Math.floor(e.rating) ? '#22c55e' : '#cbd5e1'} />
                            ))}
                          </div>
                          <span className="sp-product-card__reviews">{e.reviews}</span>
                        </div>
                        <div className="sp-product-card__footer">
                          <span className="sp-product-card__duration"><Clock size={14} /> {e.duration}</span>
                          <span className="sp-product-card__price" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Quote on Request</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* The Exact "Request a Quote" Section */}
        <CTA defaultTour={exc.title} defaultDuration={exc.duration} id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default ExcursionDetailPage;
