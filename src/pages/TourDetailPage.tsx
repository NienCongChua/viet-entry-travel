import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star, Clock, MapPin, Calendar,
  Check, ArrowLeft, Camera,
  ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, Info,
  Backpack, AlertTriangle, Tag
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
    longDescription: 'Experience the vibrant essence of Ha Long Bay with our immersive cruise designed to tantalize your senses and enrich your understanding of Vietnam\'s most iconic natural wonder. Our curated experience offers a journey through limestone pillars, each revealing hidden caves and lagoons that define this UNESCO World Heritage Site.\n\n**Explore the Wonders:** Our seasoned guides will unveil the fascinating history of Ha Long Bay, from its geological formation millions of years ago to the legends of the dragon that created these magnificent karsts.\n\n**Master the Experience:** Kayak through hidden caves, swim in emerald waters, and learn tai chi as the sun rises over the bay. Every moment is designed to create lasting memories.',
    duration: '2 days',
    groupSize: '12 max',
    language: 'English',
    difficulty: 'Easy',
    price: 189,
    region: 'north',
    experienceType: 'Multi-day tour',
    bookingAdvance: 'Cut off: 24 hours',
    categories: ['Luxury Experience', 'Nature & Adventure', 'Cultural Tour', 'Family Friendly'],
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
        title: 'Hanoi to Ha Long Bay Cruise',
        desc: 'Depart from Hanoi at 8:00 AM. Arrive at Ha Long Bay pier by noon. Board your luxury junk boat, enjoy welcome drinks and a seafood lunch. Afternoon kayaking through limestone karsts and lagoons. Evening cooking class and sunset dinner on the sundeck.',
      },
      {
        day: 2,
        title: 'Sunrise & Cave Exploration to Hanoi',
        desc: 'Early morning tai chi on the top deck. Breakfast with panoramic bay views. Visit Sung Sot (Surprise) Cave. Return to the boat for brunch before disembarking. Arrive back in Hanoi by 4:30 PM.',
      },
    ],
    included: ['Luxury cabin accommodation', 'All meals on board', 'English-speaking guide', 'Kayaking equipment', 'Entrance fees', 'Round-trip transfer from Hanoi', 'Welcome drinks', 'Cooking class'],
    excluded: ['Travel insurance', 'Personal expenses', 'Tips & gratuities', 'Alcoholic beverages'],
    pleaseNote: ['Children under 4 travel free', 'Not wheelchair accessible', 'Service animals allowed', 'Public transportation nearby'],
    whatToBring: 'Comfortable shoes, swimwear, sunscreen, camera, and a sense of adventure!',
    cancellation: [
      { percent: 75, days: '23 hours' },
      { percent: 50, days: '2 days' },
      { percent: 25, days: '3 days' },
      { percent: 0, days: '7 days' },
    ],
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
    description: 'Trek through terraced rice fields, visit ethnic minority villages, and stay with a local family in the mountains.',
    longDescription: 'Experience the authentic culture of the Hmong and Dao people while enjoying breathtaking mountain scenery. Trek through terraced rice fields that have been carved into the mountains over centuries.',
    duration: '3 days',
    groupSize: '8 max',
    language: 'English',
    difficulty: 'Moderate',
    price: 145,
    region: 'north',
    experienceType: 'Multi-day trek',
    bookingAdvance: 'Cut off: 48 hours',
    categories: ['Adventure', 'Trekking', 'Cultural Tour', 'Homestay'],
    highlights: ['Trek through terraced rice fields', 'Homestay with local Hmong family', 'Visit Cat Cat village', 'Panoramic mountain views', 'Traditional cooking experience', 'Local market visit'],
    itinerary: [
      { day: 1, title: 'Sapa Town to Cat Cat Village', desc: 'Arrive in Sapa, meet your local Hmong guide. Trek downhill to Cat Cat Village. Lunch with a local family. Continue to Y Linh Ho village. Overnight homestay.' },
      { day: 2, title: 'Rice Terrace Trek', desc: 'Full-day trek through the stunning Muong Hoa Valley rice terraces. Visit Ta Van village. Traditional lunch. Continue trekking with mountain panoramas. Cooking class and dinner.' },
      { day: 3, title: 'Morning Market to Departure', desc: 'Early morning visit to Sapa local market. Browse handicrafts and fresh produce. Final trek with photo stops. Return to Sapa town by noon.' },
    ],
    included: ['Homestay accommodation', 'All meals', 'Local Hmong guide', 'Trekking equipment', 'Entrance fees', 'Round-trip transfer'],
    excluded: ['Travel insurance', 'Personal expenses', 'Tips & gratuities'],
    pleaseNote: ['Moderate fitness required', 'Not suitable for young children', 'Rain gear recommended'],
    whatToBring: 'Sturdy hiking shoes, layers for cold weather, rain jacket, water bottle, and a headlamp.',
    cancellation: [
      { percent: 75, days: '23 hours' },
      { percent: 50, days: '2 days' },
      { percent: 0, days: '5 days' },
    ],
    reviewsList: [
      { name: 'Emma L.', country: 'UK', rating: 5, text: 'The homestay was the highlight of our entire Vietnam trip!', date: 'Jan 2026' },
      { name: 'David C.', country: 'Canada', rating: 4, text: 'Great trekking experience. The rice terraces are stunning.', date: 'Dec 2025' },
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
    description: 'Walk through lantern-lit streets, take a cooking class, and explore UNESCO My Son Hindu temples.',
    longDescription: 'Discover the charm of one of Vietnam\'s most atmospheric towns. Walk through centuries-old streets, learn traditional cooking, and visit the ancient Cham temples of My Son.',
    duration: '1 day',
    groupSize: '15 max',
    language: 'English, Vietnamese',
    difficulty: 'Easy',
    price: 75,
    region: 'central',
    experienceType: 'Day tour / activity',
    bookingAdvance: 'Cut off: 1 hour',
    categories: ['Cultural Tour', 'UNESCO Heritage', 'Family Friendly', 'Group Friendly'],
    highlights: ['Walk the ancient streets at sunset', 'Vietnamese cooking class', 'Explore My Son temples', 'Lantern-making workshop', 'Boat ride on Thu Bon River', 'Sample local Cao Lau noodles'],
    itinerary: [
      { day: 1, title: 'Hoi An & My Son Full Day', desc: 'Morning visit to My Son Hindu temples. Lunch at a local restaurant. Afternoon walking tour of Hoi An Ancient Town, Japanese Bridge, Assembly Halls. Cooking class. Evening free to enjoy the lantern-lit streets.' },
    ],
    included: ['Guide', 'Lunch', 'Cooking class', 'Entrance fees', 'Hotel pickup'],
    excluded: ['Travel insurance', 'Dinner', 'Personal expenses'],
    pleaseNote: ['Comfortable walking shoes recommended', 'Sunscreen advised', 'Modest clothing for temples'],
    whatToBring: 'Comfortable walking shoes, hat, sunscreen, and a camera for the lantern-lit streets!',
    cancellation: [
      { percent: 75, days: '23 hours' },
      { percent: 50, days: '2 days' },
      { percent: 0, days: '5 days' },
    ],
    reviewsList: [
      { name: 'Lisa M.', country: 'USA', rating: 5, text: 'Hoi An is magical at night! Our guide was incredibly knowledgeable.', date: 'Feb 2026' },
    ],
  },
];

const defaultTour = allTours[0];

// Calendar helper
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Mon=0
};
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const TourDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour = allTours.find((t) => t.id === Number(id)) || defaultTour;

  const [activeTab, setActiveTab] = useState<'description' | 'itinerary' | 'reviews'>('description');
  const [joinIn, setJoinIn] = useState(1);
  const [privateCount, setPrivateCount] = useState(0);

  const now = new Date();
  const [calYear, setCalYear] = useState(now.getFullYear());
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);
  const today = now.getDate();
  const isCurrentMonth = calYear === now.getFullYear() && calMonth === now.getMonth();

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(calYear - 1); setCalMonth(11); }
    else setCalMonth(calMonth - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(calYear + 1); setCalMonth(0); }
    else setCalMonth(calMonth + 1);
    setSelectedDate(null);
  };

  const totalParticipants = joinIn + privateCount;
  const totalPrice = totalParticipants * tour.price;

  const relatedTours = allTours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="booking-page">
        {/* Back */}
        <div className="container" style={{ paddingTop: '5.5rem' }}>
          <Link to="/tours" className="booking-back-link">
            <ArrowLeft size={16} /> Back to All Tours
          </Link>
        </div>

        {/* Gallery Grid */}
        <section className="booking-gallery">
          <div className="container">
            <div className="booking-gallery__grid">
              <div className="booking-gallery__main">
                <img src={tour.gallery[0]} alt={tour.title} />
              </div>
              <div className="booking-gallery__side">
                {tour.gallery.slice(1, 5).map((img, i) => (
                  <div key={i} className="booking-gallery__thumb">
                    <img src={img} alt={`${tour.title} ${i + 2}`} />
                    {i === tour.gallery.length - 2 && (
                      <span className="booking-gallery__more"><Camera size={14} /> View Photos</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Title + Content + Sidebar */}
        <section className="booking-content section">
          <div className="container">
            <div className="booking-layout">
              {/* Left: Content */}
              <div className="booking-main">
                <h1 className="booking-title">{tour.title}</h1>
                <div className="booking-meta">
                  <span className="booking-meta__item"><Clock size={15} /> {tour.duration}</span>
                  <span className="booking-meta__item"><MapPin size={15} /> {tour.difficulty}</span>
                </div>
                <div className="booking-rating">
                  <div className="booking-rating__dots">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`booking-rating__dot ${i < Math.floor(tour.rating) ? 'booking-rating__dot--filled' : ''}`}></span>
                    ))}
                  </div>
                  <span className="booking-rating__count">{tour.reviews}</span>
                </div>
                <p className="booking-tagline">{tour.description}</p>

                {/* Tabs */}
                <div className="booking-tabs">
                  <button className={`booking-tab ${activeTab === 'description' ? 'booking-tab--active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                  <button className={`booking-tab ${activeTab === 'itinerary' ? 'booking-tab--active' : ''}`} onClick={() => setActiveTab('itinerary')}>Itinerary</button>
                  <button className={`booking-tab ${activeTab === 'reviews' ? 'booking-tab--active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                </div>

                {/* Description Tab */}
                {activeTab === 'description' && (
                  <div className="booking-tab-content">
                    <div className="booking-desc">
                      {tour.longDescription.split('\n\n').map((p, i) => {
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

                    <div className="booking-highlights">
                      <ul>
                        {tour.highlights.map((h, i) => (
                          <li key={i}><Check size={16} className="booking-check" /> <strong>{h}</strong></li>
                        ))}
                      </ul>
                    </div>

                    {/* What's Included / Exclusions */}
                    <div className="booking-inc-exc">
                      <div>
                        <h3 className="booking-section-title">What's included?</h3>
                        <ul className="booking-list">
                          {tour.included.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h3 className="booking-section-title">Exclusions</h3>
                        <ul className="booking-list booking-list--muted">
                          {tour.excluded.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    </div>

                    {/* Please Note */}
                    <div className="booking-note-section">
                      <h3 className="booking-section-title"><AlertTriangle size={16} /> Please note</h3>
                      <ul className="booking-list">
                        {tour.pleaseNote.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </div>

                    {/* What to Bring */}
                    <div className="booking-note-section">
                      <h3 className="booking-section-title"><Backpack size={16} /> What do I need to bring?</h3>
                      <p className="booking-note-text">{tour.whatToBring}</p>
                    </div>

                    {/* Cancellation Policy */}
                    <div className="booking-note-section">
                      <h3 className="booking-section-title">Cancellation policy</h3>
                      <ul className="booking-list">
                        {tour.cancellation.map((c, i) => (
                          <li key={i}>
                            We will charge a cancellation fee of <strong>{c.percent}%</strong> if booking is cancelled {c.days} or less before the event
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* More Info */}
                    <div className="booking-more-info">
                      <h3 className="booking-section-title"><Info size={16} /> More Info</h3>
                      <div className="booking-info-grid">
                        <div>
                          <span className="booking-info-label">Experience type</span>
                          <span className="booking-info-value">{tour.experienceType}</span>
                        </div>
                        <div>
                          <span className="booking-info-label">Booking in advance</span>
                          <span className="booking-info-value">{tour.bookingAdvance}</span>
                        </div>
                        <div>
                          <span className="booking-info-label">Duration</span>
                          <span className="booking-info-value">{tour.duration}</span>
                        </div>
                        <div>
                          <span className="booking-info-label">Difficulty</span>
                          <span className="booking-info-value">{tour.difficulty}</span>
                        </div>
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                        <span className="booking-info-label">Categories</span>
                        <div className="booking-tags">
                          {tour.categories.map((c) => (
                            <span key={c} className="booking-tag"><Tag size={12} /> {c}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: '0.8rem' }}>
                        <span className="booking-info-label">Live tour guide</span>
                        <div className="booking-tags">
                          <span className="booking-tag">{tour.language}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                  <div className="booking-tab-content">
                    <div className="detail-timeline" style={{ marginTop: '1rem' }}>
                      {tour.itinerary.map((day, i) => (
                        <div key={i} className="detail-timeline__item">
                          <span className="detail-timeline__time">Day {day.day}</span>
                          <div className="detail-timeline__dot"></div>
                          <div>
                            <div className="detail-timeline__day">{day.title}</div>
                            <span className="detail-timeline__activity">{day.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="booking-tab-content">
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

              {/* Right: Booking Sidebar */}
              <aside className="booking-sidebar">
                <div className="booking-widget">
                  {/* Participants */}
                  <div className="booking-widget__section">
                    <h3 className="booking-widget__title">Participants</h3>
                    <div className="booking-participant">
                      <span className="booking-participant__label">JOIN-IN</span>
                      <div className="booking-participant__controls">
                        <button className="booking-counter-btn" onClick={() => setJoinIn(Math.max(0, joinIn - 1))} disabled={joinIn <= 0}><Minus size={16} /></button>
                        <span className="booking-counter-val">{joinIn}</span>
                        <button className="booking-counter-btn" onClick={() => setJoinIn(joinIn + 1)}><Plus size={16} /></button>
                      </div>
                    </div>
                    <div className="booking-participant">
                      <span className="booking-participant__label">PRIVATE</span>
                      <div className="booking-participant__controls">
                        <button className="booking-counter-btn" onClick={() => setPrivateCount(Math.max(0, privateCount - 1))} disabled={privateCount <= 0}><Minus size={16} /></button>
                        <span className="booking-counter-val">{privateCount}</span>
                        <button className="booking-counter-btn" onClick={() => setPrivateCount(privateCount + 1)}><Plus size={16} /></button>
                      </div>
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="booking-widget__section">
                    <h3 className="booking-widget__title">Choose a date</h3>
                    <div className="booking-calendar">
                      <div className="booking-calendar__nav">
                        <button onClick={prevMonth} className="booking-calendar__arrow"><ChevronLeft size={18} /></button>
                        <span className="booking-calendar__month">{MONTH_NAMES[calMonth]} {calYear}</span>
                        <button onClick={nextMonth} className="booking-calendar__arrow"><ChevronRight size={18} /></button>
                      </div>
                      <div className="booking-calendar__weekdays">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                          <span key={d}>{d}</span>
                        ))}
                      </div>
                      <div className="booking-calendar__days">
                        {Array.from({ length: firstDay }).map((_, i) => (
                          <span key={`empty-${i}`} className="booking-calendar__day booking-calendar__day--empty"></span>
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const isPast = isCurrentMonth && day < today;
                          const isSelected = selectedDate === day;
                          const isWeekend = ((firstDay + i) % 7 === 5) || ((firstDay + i) % 7 === 6);
                          return (
                            <button
                              key={day}
                              className={`booking-calendar__day ${isPast ? 'booking-calendar__day--past' : ''} ${isSelected ? 'booking-calendar__day--selected' : ''} ${isWeekend ? 'booking-calendar__day--weekend' : ''}`}
                              disabled={isPast}
                              onClick={() => setSelectedDate(day)}
                            >
                              <span className="booking-calendar__day-num">{day}</span>
                              {!isPast && <span className="booking-calendar__day-price">${tour.price}</span>}
                            </button>
                          );
                        })}
                      </div>
                      <p className="booking-calendar__note">Showing prices in USD (US Dollars)</p>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div className="booking-widget__section">
                    <h3 className="booking-widget__title">Booking Summary</h3>
                    <div className="booking-summary">
                      <div className="booking-summary__card">
                        <div className="booking-summary__info">
                          <h4 className="booking-summary__tour-title">{tour.title}</h4>
                          <img src={tour.gallery[0]} alt="" className="booking-summary__thumb" />
                        </div>
                        <div className="booking-summary__details">
                          {selectedDate && (
                            <span className="booking-summary__date">
                              <Calendar size={13} /> {selectedDate} {MONTH_NAMES[calMonth]} {calYear}
                            </span>
                          )}
                          {joinIn > 0 && <span className="booking-summary__line">JOIN-IN: {joinIn}</span>}
                          {privateCount > 0 && <span className="booking-summary__line">PRIVATE: {privateCount}</span>}
                        </div>
                      </div>
                      <div className="booking-summary__total">
                        <span>Total:</span>
                        <span className="booking-summary__price">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout */}
                  <button
                    className="booking-checkout-btn"
                    disabled={totalParticipants === 0 || !selectedDate}
                    onClick={() => {
                      const params = new URLSearchParams({
                        tour: tour.title,
                        price: String(tour.price),
                        pax: String(totalParticipants),
                        date: selectedDate ? `${selectedDate} ${MONTH_NAMES[calMonth]} ${calYear}` : '',
                        type: 'tour',
                      });
                      navigate(`/checkout?${params.toString()}`);
                    }}
                  >
                    Checkout <ShoppingCart size={16} />
                  </button>

                  <div className="booking-widget__trust">
                    <span>✓ Free cancellation available</span>
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
