import { ArrowRight } from 'lucide-react';
import './Destinations.css';

const destinations = [
  {
    name: 'Ha Long Bay',
    region: 'North',
    description: 'Thousands of limestone islands in emerald waters',
    image: '/images/destinations/halong-bay.jpg',
    size: 'large',
  },
  {
    name: 'Hoi An',
    region: 'Central',
    description: 'Lantern-lit ancient town & yellow heritage streets',
    image: '/images/destinations/hoi-an.jpg',
    size: 'medium',
  },
  {
    name: 'Sapa',
    region: 'North',
    description: 'Breathtaking lush green rice terraces',
    image: '/images/destinations/sapa.jpg',
    size: 'medium',
  },
  {
    name: 'Da Nang',
    region: 'Central',
    description: 'Golden Bridge & pristine coastal vistas',
    image: '/images/destinations/da-nang.jpg',
    size: 'small',
  },
  {
    name: 'Ho Chi Minh City',
    region: 'South',
    description: 'Vibrant metropolis buzzing with energy',
    image: '/images/destinations/ho-chi-minh-city.jpg',
    size: 'large',
  },
  {
    name: 'Phu Quoc',
    region: 'South',
    description: 'Tropical paradise island & white sand beaches',
    image: '/images/destinations/phu-quoc.jpg',
    size: 'small',
  },
  {
    name: 'Ninh Binh',
    region: 'North',
    description: 'Karst landscapes & scenic river boat rides',
    image: '/images/destinations/ninh-binh.jpg',
    size: 'small',
  },
  {
    name: 'Hanoi',
    region: 'North',
    description: 'Thousand-year capital & iconic Hoan Kiem Lake',
    image: '/images/destinations/hanoi.jpg',
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
              href="/#contact"
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
