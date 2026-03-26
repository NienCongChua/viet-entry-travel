import { Clock, MapPin, Users, Check, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import './PopularTours.css';

const tours = [
  {
    name: 'Northern Explorer',
    route: 'Hanoi → Sapa → Ha Long Bay',
    duration: '5 Days / 4 Nights',
    groupSize: 'Up to 12',
    price: '$459',
    priceNote: 'per person',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    highlights: [
      'Old Quarter walking tour',
      'Sapa rice terrace trek',
      'Ha Long overnight cruise',
      'Homestay experience',
      'All transfers included',
    ],
    featured: false,
    tag: null,
  },
  {
    name: 'Central Heritage',
    route: 'Da Nang → Hoi An → Hue',
    duration: '4 Days / 3 Nights',
    groupSize: 'Up to 10',
    price: '$389',
    priceNote: 'per person',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    highlights: [
      'Golden Bridge Ba Na Hills',
      'Hoi An night market',
      'Imperial City tour',
      'Cooking class',
      'Beach day in Da Nang',
    ],
    featured: true,
    tag: 'Most Popular',
  },
  {
    name: 'Southern Adventure',
    route: 'HCMC → Mekong → Phu Quoc',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 8',
    price: '$549',
    priceNote: 'per person',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    highlights: [
      'Cu Chi Tunnels',
      'Mekong Delta boat trip',
      'Floating markets',
      'Phu Quoc island',
      'Sunset fishing tour',
    ],
    featured: false,
    tag: null,
  },
];

const PopularTours = () => {
  return (
    <section className="popular-tours section" id="tours">
      <div className="container">
        <div className="popular-tours__header">
          <span className="section-label">✦ Popular Tours</span>
          <h2 className="section-title">Handcrafted Itineraries</h2>
          <p className="section-subtitle">
            Our most loved tour packages, designed by local experts and loved by thousands.
          </p>
        </div>

        <div className="popular-tours__grid">
          {tours.map((tour, idx) => (
            <div
              key={tour.name}
              className={`popular-tours__card ${tour.featured ? 'popular-tours__card--featured' : ''}`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {/* Image header */}
              <div className="popular-tours__card-image">
                <img src={tour.image} alt={tour.name} />
                <div className="popular-tours__card-image-overlay"></div>
                {tour.tag && (
                  <span className="popular-tours__tag glass-card">{tour.tag}</span>
                )}
                <div className="popular-tours__card-image-info">
                  <h3 className="popular-tours__card-name">{tour.name}</h3>
                  <p className="popular-tours__card-route">
                    <MapPin size={12} />
                    {tour.route}
                  </p>
                </div>
              </div>

              <div className="popular-tours__card-body">
                <div className="popular-tours__card-meta">
                  <span><Clock size={14} /> {tour.duration}</span>
                  <span><Users size={14} /> {tour.groupSize}</span>
                </div>

                <div className="popular-tours__price">
                  <span className="popular-tours__price-value">{tour.price}</span>
                  <span className="popular-tours__price-note">{tour.priceNote}</span>
                </div>

                <ul className="popular-tours__highlights">
                  {tour.highlights.map((h) => (
                    <li key={h}>
                      <Check size={14} className="popular-tours__check" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={tour.featured ? 'primary' : 'outline'}
                  fullWidth
                >
                  Book This Tour <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="popular-tours__note">
          All tours are fully customizable. <a href="#contact">Contact us</a> for a personalized itinerary.
        </p>
      </div>
    </section>
  );
};

export default PopularTours;
