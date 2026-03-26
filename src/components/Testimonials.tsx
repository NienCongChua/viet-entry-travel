import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    country: 'United States',
    trip: 'Northern Explorer',
    avatar: 'SM',
    rating: 5,
    text: 'An unforgettable experience! Every detail was perfect — from the Sapa trek to the Ha Long cruise. Our guide made all the difference.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400&q=80',
  },
  {
    name: 'James Park',
    country: 'South Korea',
    trip: 'Central Heritage',
    avatar: 'JP',
    rating: 5,
    text: 'The Hoi An cooking class was incredible, and the Imperial City tour was fascinating. Best travel service we\'ve used anywhere.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80',
  },
  {
    name: 'Emma Laurent',
    country: 'France',
    trip: 'Southern Adventure',
    avatar: 'EL',
    rating: 5,
    text: 'The Mekong Delta floating market was magical. Phu Quoc island was paradise. Viet Entry Travel made everything seamless.',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=400&q=80',
  },
];

const featured = {
  name: 'David Tanaka',
  country: 'Japan',
  trip: 'Custom 14-Day Journey',
  avatar: 'DT',
  rating: 5,
  text: 'We came for two weeks and covered the whole country — from Hanoi to Phu Quoc. The team planned everything: visas, eSims, private transfers, and a tailor-made itinerary. It was seamless. Vietnam is now our favorite destination and Viet Entry Travel is the reason why.',
};

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">✦ Testimonials</span>
          <h2 className="section-title">Loved by Travelers</h2>
        </div>

        {/* Featured testimonial — large glassmorphism card */}
        <div className="testimonials__featured glass-card">
          <Quote size={40} className="testimonials__quote-icon" />
          <blockquote className="testimonials__featured-text">
            "{featured.text}"
          </blockquote>
          <div className="testimonials__featured-author">
            <div className="testimonials__avatar testimonials__avatar--lg">{featured.avatar}</div>
            <div>
              <p className="testimonials__name">{featured.name}</p>
              <p className="testimonials__meta">{featured.trip} · {featured.country}</p>
            </div>
            <div className="testimonials__stars">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        {/* Regular testimonials */}
        <div className="testimonials__grid">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="testimonials__card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Trip image behind text */}
              <div className="testimonials__card-image">
                <img src={t.image} alt={t.trip} />
                <div className="testimonials__card-image-overlay"></div>
                <div className="testimonials__card-trip-badge glass-card">
                  {t.trip}
                </div>
              </div>
              <div className="testimonials__card-body">
                <div className="testimonials__stars testimonials__stars--sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonials__card-text">"{t.text}"</p>
                <div className="testimonials__card-author">
                  <div className="testimonials__avatar">{t.avatar}</div>
                  <div>
                    <p className="testimonials__name">{t.name}</p>
                    <p className="testimonials__meta">{t.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
