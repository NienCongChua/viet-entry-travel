import { ArrowRight } from 'lucide-react';
import './Destinations.css';

const destinations = [
  {
    name: 'Ha Long Bay',
    region: 'North',
    description: 'Thousands of limestone islands in emerald waters',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    size: 'large',
  },
  {
    name: 'Hoi An',
    region: 'Central',
    description: 'Lantern-lit ancient town',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    size: 'medium',
  },
  {
    name: 'Sapa',
    region: 'North',
    description: 'Breathtaking rice terraces',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
    size: 'medium',
  },
  {
    name: 'Da Nang',
    region: 'Central',
    description: 'Golden Bridge & pristine beaches',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    size: 'small',
  },
  {
    name: 'Ho Chi Minh City',
    region: 'South',
    description: 'Vibrant metropolis buzzing with energy',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
    size: 'large',
  },
  {
    name: 'Phu Quoc',
    region: 'South',
    description: 'Tropical paradise island',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    size: 'small',
  },
  {
    name: 'Ninh Binh',
    region: 'North',
    description: 'Karst landscapes & river valleys',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    size: 'small',
  },
  {
    name: 'Hanoi',
    region: 'North',
    description: 'Thousand-year capital & street food',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    size: 'medium',
  },
];

const Destinations = () => {
  return (
    <section className="destinations section" id="destinations">
      <div className="container">
        <div className="destinations__header">
          <span className="section-label">✦ Top Destinations</span>
          <h2 className="section-title">Explore Vietnam's Best</h2>
          <p className="section-subtitle">
            Diverse beauty across three unique regions — mountains, coastlines, and bustling cities.
          </p>
        </div>

        <div className="destinations__mosaic">
          {destinations.map((dest, idx) => (
            <a
              key={dest.name}
              href="#contact"
              className={`destinations__item destinations__item--${dest.size}`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <img src={dest.image} alt={dest.name} className="destinations__item-img" />
              <div className="destinations__item-overlay"></div>

              {/* Glass info card overlaying image */}
              <div className="destinations__item-info">
                <span className="destinations__item-region">{dest.region}</span>
                <h3 className="destinations__item-name">{dest.name}</h3>
                <p className="destinations__item-desc">{dest.description}</p>
              </div>

              <div className="destinations__item-explore glass-card">
                <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
