import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, UtensilsCrossed, ChevronLeft, ChevronRight, X, Sparkles, BookOpen, ChefHat, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { getSpecialtyBySlug, allSpecialties, type Specialty } from '../data/food';
import './ServicePage.css';
import './CulinaryPage.css';

const CulinaryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const dish: Specialty | undefined = slug ? getSpecialtyBySlug(slug) : undefined;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null || !dish) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % dish.gallery.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + dish.gallery.length) % dish.gallery.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, dish]);

  if (!dish) {
    return (
      <>
        <Navbar />
        <main className="cd-page" style={{ padding: '8rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Specialty Not Found</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              The culinary specialty you are looking for does not exist or has been relocated.
            </p>
            <Link to="/culinary">
              <Button variant="accent">← Back to All Culinary Specialties</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Related dishes from same category or province (excluding current dish)
  const relatedDishes = allSpecialties
    .filter((s) => s.slug !== dish.slug && (s.province === dish.province || s.category === dish.category))
    .slice(0, 3);

  const flavorLabels = [
    { key: 'savory', label: 'Savory Umami', val: dish.flavorProfile.savory },
    { key: 'sweet', label: 'Natural Sweetness', val: dish.flavorProfile.sweet },
    { key: 'sour', label: 'Citrus & Tang', val: dish.flavorProfile.sour },
    { key: 'spicy', label: 'Chili Heat', val: dish.flavorProfile.spicy },
    { key: 'herbalUmami', label: 'Herbal Aromatics', val: dish.flavorProfile.herbalUmami },
  ] as const;

  return (
    <>
      <Navbar />
      <main className="cd-page">
        {/* Cinematic Hero */}
        <section className="cd-hero">
          <div className="cd-hero__bg">
            <img src={dish.image} alt={dish.name} />
            <div className="cd-hero__bg-overlay"></div>
          </div>
          <div className="cd-hero__content">
            <Link to="/culinary" className="cd-hero__back">
              <ArrowLeft size={16} /> All Culinary Specialties
            </Link>
            <div className="cd-hero__pills">
              <span className="cd-hero__region">
                <MapPin size={13} /> {dish.origin}
              </span>
              <span className="cd-hero__category">
                <UtensilsCrossed size={12} /> {dish.category}
              </span>
            </div>
            <h1 className="cd-hero__title">{dish.name}</h1>
            <p className="cd-hero__intro">{dish.intro}</p>
          </div>
        </section>

        {/* Multi-Photo Mosaic Visual Gallery */}
        <section className="cd-section cd-section--gallery">
          <div className="container">
            <div className="cd-section__header">
              <span className="section-label">✦ Visual Gallery</span>
              <h2 className="section-title">Verified Photography of {dish.name}</h2>
              <p className="section-subtitle">
                Capturing authentic street cauldrons, traditional table spreads, and generational culinary craft in {dish.province}. Click any photo to view in high resolution.
              </p>
            </div>

            <div className={`cd-gallery cd-gallery--count-${dish.gallery.length}`}>
              {dish.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`cd-gallery__item ${i === 0 ? 'cd-gallery__item--hero' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={img} alt={`${dish.name} photo ${i + 1}`} loading="lazy" />
                  <div className="cd-gallery__item-overlay">
                    <span className="cd-gallery__overlay-btn">
                      View Photo {i + 1} of {dish.gallery.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="cd-lightbox" onClick={() => setLightboxIndex(null)}>
            <button className="cd-lightbox__close" onClick={() => setLightboxIndex(null)} aria-label="Close lightbox">
              <X size={26} />
            </button>
            <button
              className="cd-lightbox__arrow cd-lightbox__arrow--left"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + dish.gallery.length) % dish.gallery.length);
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={36} />
            </button>
            <div className="cd-lightbox__stage" onClick={(e) => e.stopPropagation()}>
              <img
                src={dish.gallery[lightboxIndex]}
                alt={`${dish.name} full view`}
                className="cd-lightbox__img"
              />
              <div className="cd-lightbox__caption">
                <strong>{dish.name}</strong> — {dish.origin} (Photo {lightboxIndex + 1} of {dish.gallery.length})
              </div>
            </div>
            <button
              className="cd-lightbox__arrow cd-lightbox__arrow--right"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % dish.gallery.length);
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        )}

        {/* Flavor Profile & Ingredient Anatomy */}
        <section className="cd-section cd-section--anatomy">
          <div className="container">
            <div className="cd-anatomy-grid">
              {/* Flavor Profile Meter */}
              <div className="cd-flavor-box">
                <div className="cd-box-header">
                  <Sparkles size={18} className="cd-box-icon" />
                  <h3>Flavor Profile Matrix</h3>
                </div>
                <p className="cd-box-desc">
                  Sensory breakdown of primary taste sensations measured on the traditional Vietnamese culinary scale.
                </p>
                <div className="cd-flavor-bars">
                  {flavorLabels.map((f) => (
                    <div key={f.key} className="cd-flavor-row">
                      <div className="cd-flavor-info">
                        <span className="cd-flavor-title">{f.label}</span>
                        <span className="cd-flavor-score">{f.val} / 5</span>
                      </div>
                      <div className="cd-flavor-track">
                        <div
                          className="cd-flavor-fill"
                          style={{ width: `${(f.val / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Ingredients */}
              <div className="cd-ingredients-box">
                <div className="cd-box-header">
                  <UtensilsCrossed size={18} className="cd-box-icon" />
                  <h3>Key Indigenous Ingredients</h3>
                </div>
                <p className="cd-box-desc">
                  Essential native botanical herbs, heirloom crops, and proteins defining the terroir of this specialty.
                </p>
                <div className="cd-ingredients-grid">
                  {dish.keyIngredients.map((ing, idx) => (
                    <div key={idx} className="cd-ingredient-pill">
                      <CheckCircle2 size={15} className="cd-ing-check" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Heritage & History */}
        <section className="cd-section">
          <div className="container">
            <div className="cd-section__header">
              <span className="section-label">✦ Cultural Heritage</span>
              <h2 className="section-title">History & Generational Story</h2>
              <p className="section-subtitle">
                Understanding the origin, social ritual, and cultural significance behind every bite.
              </p>
            </div>
            <div className="cd-history-card">
              <div className="cd-history-card__icon">
                <BookOpen size={24} />
              </div>
              <div className="cd-history-card__body">
                {dish.culturalHistory.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Master Recipe & Technique */}
        <section className="cd-section cd-section--recipe">
          <div className="container">
            <div className="cd-section__header">
              <span className="section-label">✦ Master Cooking Technique</span>
              <h2 className="section-title">Traditional Recipe & Kitchen Secrets</h2>
              <p className="section-subtitle">
                The generational methods passed down by master cooks across {dish.province}.
              </p>
            </div>
            <div className="cd-recipe-flow">
              {dish.recipe.map((s) => (
                <div key={s.step} className="cd-recipe-card">
                  <div className="cd-recipe-card__num">{s.step}</div>
                  <div className="cd-recipe-card__content">
                    <h3>{s.title}</h3>
                    <p>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insider Tasting Etiquette & Renowned Addresses */}
        <section className="cd-section cd-section--warm">
          <div className="container">
            <div className="cd-tips-places-grid">
              {/* Insider Tips */}
              <div className="cd-tips-column">
                <div className="cd-column-header">
                  <ChefHat size={20} />
                  <h3>Local Insider Tasting Etiquette</h3>
                </div>
                <ul className="cd-tips-list">
                  {dish.tips.map((tip, i) => (
                    <li key={i}>
                      <span className="cd-tip-check">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Renowned Authentic Addresses */}
              <div className="cd-places-column">
                <div className="cd-column-header">
                  <MapPin size={20} />
                  <h3>Renowned Authentic Addresses in {dish.province}</h3>
                </div>
                <div className="cd-places-list">
                  {dish.bestPlaces.map((place, i) => (
                    <div key={i} className="cd-place-card">
                      <div className="cd-place-badge">Address #{i + 1}</div>
                      <strong className="cd-place-name">{place.name}</strong>
                      <span className="cd-place-loc"><MapPin size={13} /> {place.location}</span>
                      {place.note && <p className="cd-place-note">{place.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Specialties */}
        {relatedDishes.length > 0 && (
          <section className="cd-section cd-section--related">
            <div className="container">
              <div className="cd-section__header">
                <span className="section-label">✦ Continue Exploring</span>
                <h2 className="section-title">More Gastronomy from {dish.province}</h2>
              </div>
              <div className="culinary-specialties-grid">
                {relatedDishes.map((rel) => (
                  <Link key={rel.slug} to={`/culinary/${rel.slug}`} className="culinary-card">
                    <div className="culinary-card__media">
                      <img src={rel.image} alt={rel.name} loading="lazy" />
                      <div className="culinary-card__overlay"></div>
                      <div className="culinary-card__badges">
                        <span className="culinary-badge culinary-badge--province">
                          <MapPin size={11} /> {rel.province}
                        </span>
                      </div>
                      <span className="culinary-card__category">{rel.category}</span>
                    </div>
                    <div className="culinary-card__body">
                      <h3 className="culinary-card__title">{rel.name}</h3>
                      <p className="culinary-card__desc">{rel.description}</p>
                      <div className="culinary-card__footer">
                        <span className="culinary-card__action">
                          Explore Dish <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Book a Private Food Tour CTA */}
        <section className="service-cta culinary-cta">
          <div className="container">
            <h2>Taste {dish.name} on a Private Culinary Tour</h2>
            <p>
              Allow Viet Entry Travel to guide you directly to the hidden alleyways, family matriarch hearths, and legendary morning stalls of {dish.province}. All tours are fully private and customized to your dietary preferences.
            </p>
            <div className="service-cta__actions">
              <Button href={`https://wa.me/84338649908?text=Hello%20Viet%20Entry%20Travel,%20I%20would%20like%20to%20experience%20${encodeURIComponent(dish.name)}%20in%20${encodeURIComponent(dish.province)}`} variant="accent" size="lg">
                <MessageSquare size={16} /> Book via WhatsApp (+84 3386 49908)
              </Button>
              <Link to="/culinary" className="cd-back-btn">
                <ArrowLeft size={16} /> Explore All Specialties
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CulinaryDetailPage;
