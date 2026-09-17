import { Link } from 'react-router-dom';
import { Clock, Users, Check, ArrowRight, Send } from 'lucide-react';
import { tours } from '../data/tours';
import './PopularTours.css';

const regionLabel: Record<string, string> = {
  north: 'Northern Vietnam',
  central: 'Central Vietnam',
  south: 'Southern Vietnam',
  all: 'Nationwide',
};

const featuredIds = [1, 10, 17];
const mostPopularId = 10;

const PopularTours = () => {
  const featured = featuredIds
    .map((id) => tours.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

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
          {featured.map((tour, idx) => (
            <Link
              key={tour.id}
              to={`/tours/${tour.id}`}
              className={`popular-tours__card ${tour.id === mostPopularId ? 'popular-tours__card--featured' : ''}`}
              style={{ animationDelay: `${idx * 0.12}s`, textDecoration: 'none', color: 'inherit' }}
            >
              {/* Image header */}
              <div className="popular-tours__card-image">
                <img src={tour.image} alt={tour.title} />
                <div className="popular-tours__card-image-overlay"></div>
                {tour.id === mostPopularId && (
                  <span className="popular-tours__tag glass-card">Most Popular</span>
                )}
                <div className="popular-tours__card-image-info">
                  <h3 className="popular-tours__card-name">{tour.title.split(' — ')[0]}</h3>
                  <p className="popular-tours__card-route">
                    {regionLabel[tour.region]} · {tour.experienceType}
                  </p>
                </div>
              </div>

              <div className="popular-tours__card-body">
                <div className="popular-tours__card-meta">
                  <span><Clock size={14} /> {tour.duration}</span>
                  <span><Users size={14} /> {tour.groupSize}</span>
                </div>

                <div className="popular-tours__price" style={{ borderBottom: 'none', paddingBottom: '0.25rem' }}>
                  <span className="popular-tours__price-value" style={{ fontSize: '1.05rem', color: 'var(--color-primary-700)' }}>
                    Bespoke Journey
                  </span>
                  <span className="popular-tours__price-note">Handcrafted itinerary</span>
                </div>

                <ul className="popular-tours__highlights">
                  {tour.highlights.slice(0, 5).map((h) => (
                    <li key={h}>
                      <Check size={14} className="popular-tours__check" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <Link
                    to={`/tours/${tour.id}#contact`}
                    className="btn btn--accent btn--md"
                    style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', textDecoration: 'none' }}
                  >
                    <Send size={13} /> Request a Quote
                  </Link>
                  <span className="btn btn--outline btn--md" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                    Details <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="popular-tours__note">
          Browse all <Link to="/tours">{tours.length} tour packages</Link> or{' '}
          <a href="/#contact">contact us</a> for a personalized itinerary.
        </p>
      </div>
    </section>
  );
};

export default PopularTours;
