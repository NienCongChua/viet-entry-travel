import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  Clock, MapPin, Users, Globe, Compass, Calendar, ArrowLeft,
  Camera, Check, X, AlertTriangle, Backpack, Send,
  ChevronLeft, ChevronRight, Sunrise, Sun, Moon, Utensils, Bed,
  Sparkles, CheckCircle2, XCircle, ShieldCheck, Heart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { tours as allTours } from '../data/tours';
import './ServicePage.css';
import './TourDetailPage.css';

const defaultTour = allTours[0];

const regionNames: Record<string, string> = {
  north: 'Northern Vietnam',
  central: 'Central Vietnam',
  south: 'Southern Vietnam',
  all: 'Nationwide Expedition'
};

const TourDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const tour = allTours.find((t) => t.id === Number(id)) || defaultTour;

  // Lightbox modal state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // In-page section scroll spy
  const [activeNav, setActiveNav] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = window.innerWidth <= 768 ? -75 : -85;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash === '#contact') {
      const timer = setTimeout(() => {
        scrollToSection('contact');
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  // Lightbox keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') {
        setActivePhotoIdx((prev) => (prev + 1) % tour.gallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIdx((prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length);
      }
    },
    [lightboxOpen, tour.gallery.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightboxAt = (index: number) => {
    setActivePhotoIdx(index);
    setLightboxOpen(true);
  };

  const relatedTours = allTours
    .filter((t) => t.id !== tour.id && (t.region === tour.region || tour.region === 'all' || t.region === 'all'))
    .slice(0, 3);

  // Fallback if region match is under 3
  const fallbackRelated = relatedTours.length < 3
    ? [...relatedTours, ...allTours.filter((t) => t.id !== tour.id && !relatedTours.some(r => r.id === t.id))].slice(0, 3)
    : relatedTours;

  return (
    <>
      <Navbar />
      <main className="tour-detail-page">
        {/* Top Breadcrumb & Badges */}
        <div className="container">
          <div className="tour-top-bar">
            <Link to="/tours" className="tour-back-link">
              <ArrowLeft size={16} /> Back to Tour Collection
            </Link>
            <div className="tour-header-badges">
              <span className="tour-badge tour-badge--region">
                <MapPin size={12} /> {regionNames[tour.region] || 'Vietnam'}
              </span>
              <span className="tour-badge tour-badge--type">
                <Compass size={12} /> {tour.experienceType}
              </span>
              <span className="tour-badge tour-badge--difficulty">
                <ShieldCheck size={12} /> {tour.difficulty}
              </span>
            </div>
          </div>

          {/* Title & Subtitle Header */}
          <div className="tour-hero-header">
            <h1 className="tour-main-title">{tour.title}</h1>
            {tour.subtitle && <p className="tour-main-subtitle">{tour.subtitle}</p>}

            {/* Quick Facts Summary Bar (NO PRICE) */}
            <div className="tour-quick-facts">
              <div className="tour-fact-item">
                <Clock size={16} />
                <span>{tour.duration}</span>
              </div>
              <div className="tour-fact-divider" />
              <div className="tour-fact-item">
                <Users size={16} />
                <span>{tour.groupSize}</span>
              </div>
              <div className="tour-fact-divider" />
              <div className="tour-fact-item">
                <Globe size={16} />
                <span>{tour.language}</span>
              </div>
              {tour.bestSeason && (
                <>
                  <div className="tour-fact-divider" />
                  <div className="tour-fact-item">
                    <Calendar size={16} />
                    <span>Best Season: <strong>{tour.bestSeason.split('(')[0].trim()}</strong></span>
                  </div>
                </>
              )}
              {tour.startEndLocation && (
                <>
                  <div className="tour-fact-divider" />
                  <div className="tour-fact-item">
                    <MapPin size={16} />
                    <span>{tour.startEndLocation}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 5-Photo Editorial Mosaic Gallery */}
          <section className="tour-gallery-mosaic">
            <div className="tour-gallery-main" onClick={() => openLightboxAt(0)}>
              <img src={tour.gallery[0] || tour.image} alt={`${tour.title} - Main Feature`} />
            </div>
            <div className="tour-gallery-side">
              {tour.gallery.slice(1, 5).map((imgUrl, i) => (
                <div key={i} className="tour-gallery-item" onClick={() => openLightboxAt(i + 1)}>
                  <img src={imgUrl} alt={`${tour.title} - Photo ${i + 2}`} />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="tour-gallery-btn-all"
              onClick={() => openLightboxAt(0)}
            >
              <Camera size={16} /> View All {tour.gallery.length} Photos
            </button>
          </section>

          {/* In-Page Quick-Nav Bar */}
          <div className="tour-nav-pill-wrapper">
            <nav className="tour-sticky-nav">
              <button
                type="button"
                className={`tour-nav-item ${activeNav === 'overview' ? 'tour-nav-item--active' : ''}`}
                onClick={() => scrollToSection('overview')}
              >
                ✦ Overview
              </button>
              <button
                type="button"
                className={`tour-nav-item ${activeNav === 'highlights' ? 'tour-nav-item--active' : ''}`}
                onClick={() => scrollToSection('highlights')}
              >
                ★ Highlights
              </button>
              <button
                type="button"
                className={`tour-nav-item ${activeNav === 'itinerary' ? 'tour-nav-item--active' : ''}`}
                onClick={() => scrollToSection('itinerary')}
              >
                📅 Itinerary
              </button>
              <button
                type="button"
                className={`tour-nav-item ${activeNav === 'important-to-know' ? 'tour-nav-item--active' : ''}`}
                onClick={() => scrollToSection('important-to-know')}
              >
                ⚠️ Important to Know
              </button>
              <button
                type="button"
                className={`tour-nav-item ${activeNav === 'what-to-bring' ? 'tour-nav-item--active' : ''}`}
                onClick={() => scrollToSection('what-to-bring')}
              >
                🎒 What to Bring
              </button>
              <button
                type="button"
                className={`tour-nav-item ${activeNav === 'inclusions' ? 'tour-nav-item--active' : ''}`}
                onClick={() => scrollToSection('inclusions')}
              >
                ✓ Inclusions
              </button>
              <button
                type="button"
                className={`tour-nav-item ${activeNav === 'reviews' ? 'tour-nav-item--active' : ''}`}
                onClick={() => scrollToSection('reviews')}
              >
                💬 Reviews
              </button>
            </nav>
          </div>

          {/* ── Section 1: Overview & Storytelling Narrative ── */}
          <section id="overview" className="tour-section">
            <div className="tour-section-header">
              <h2 className="tour-section-title">
                <Compass size={24} /> The Journey Experience
              </h2>
            </div>
            <div className="tour-story-content">
              {tour.longDescription.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <p key={idx}>
                      {parts.map((p, j) => (j % 2 === 1 ? <strong key={j}>{p}</strong> : p))}
                    </p>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>
          </section>

          {/* ── Section 2: Iconic Highlights ── */}
          <section id="highlights" className="tour-section">
            <div className="tour-section-header">
              <h2 className="tour-section-title">
                <Sparkles size={24} /> Journey Highlights
              </h2>
            </div>
            <div className="tour-highlights-grid">
              {tour.highlights.map((h, i) => (
                <div key={i} className="tour-highlight-card">
                  <div className="tour-highlight-icon">
                    <Check size={18} />
                  </div>
                  <span className="tour-highlight-text">{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Detailed Day-by-Day Itinerary ── */}
          <section id="itinerary" className="tour-section">
            <div className="tour-section-header">
              <h2 className="tour-section-title">
                <Calendar size={24} /> Detailed Itinerary
              </h2>
            </div>
            <div className="tour-itinerary-timeline">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="tour-day-card">
                  <div className="tour-day-header">
                    <div className="tour-day-badge-wrap">
                      <span className="tour-day-number">Day {day.day}</span>
                      <h3 className="tour-day-title">{day.title}</h3>
                    </div>
                  </div>

                  <p className="tour-day-desc">{day.desc}</p>

                  {/* Morning, Afternoon, Evening Structured Time Blocks */}
                  {(day.morning || day.afternoon || day.evening) && (
                    <div className="tour-time-blocks">
                      {day.morning && (
                        <div className="tour-time-block">
                          <span className="tour-time-title">
                            <Sunrise size={16} /> Morning
                          </span>
                          <p className="tour-time-desc">{day.morning}</p>
                        </div>
                      )}
                      {day.afternoon && (
                        <div className="tour-time-block">
                          <span className="tour-time-title">
                            <Sun size={16} /> Afternoon
                          </span>
                          <p className="tour-time-desc">{day.afternoon}</p>
                        </div>
                      )}
                      {day.evening && (
                        <div className="tour-time-block">
                          <span className="tour-time-title">
                            <Moon size={16} /> Evening
                          </span>
                          <p className="tour-time-desc">{day.evening}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Day Footer with Meals and Accommodation */}
                  {(day.meals || day.accommodation || (day.highlights && day.highlights.length > 0)) && (
                    <div className="tour-day-footer">
                      {day.meals && (
                        <div className="tour-day-footer-item">
                          <Utensils size={15} />
                          <span>Meals: <strong>{day.meals}</strong></span>
                        </div>
                      )}
                      {day.accommodation && (
                        <div className="tour-day-footer-item">
                          <Bed size={15} />
                          <span>Stay: <strong>{day.accommodation}</strong></span>
                        </div>
                      )}
                      {day.highlights && day.highlights.length > 0 && (
                        <div className="tour-day-highlights-tags">
                          {day.highlights.map((tag, tIdx) => (
                            <span key={tIdx} className="tour-day-tag">#{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: Important to Know / Essential Travel Notes ── */}
          <section id="important-to-know" className="tour-section">
            <div className="tour-section-header">
              <h2 className="tour-section-title">
                <AlertTriangle size={24} /> Important to Know & Essential Guidelines
              </h2>
            </div>

            {tour.importantNotes && tour.importantNotes.length > 0 ? (
              <div className="tour-notes-grid">
                {tour.importantNotes.map((note, i) => (
                  <div key={i} className="tour-note-card">
                    <div className="tour-note-header">
                      <div className={`tour-note-icon tour-note-icon--${note.category || 'general'}`}>
                        <AlertTriangle size={18} />
                      </div>
                      <h4 className="tour-note-title">{note.title}</h4>
                    </div>
                    <p className="tour-note-detail">{note.detail}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="tour-notes-grid">
                {tour.pleaseNote.map((noteText, i) => (
                  <div key={i} className="tour-note-card">
                    <div className="tour-note-header">
                      <div className="tour-note-icon tour-note-icon--general">
                        <CheckCircle2 size={18} />
                      </div>
                      <h4 className="tour-note-title">Travel Advisory #{i + 1}</h4>
                    </div>
                    <p className="tour-note-detail">{noteText}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── Section 5: What to Bring / Packing Guide ── */}
          <section id="what-to-bring" className="tour-section">
            <div className="tour-section-header">
              <h2 className="tour-section-title">
                <Backpack size={24} /> Packing Checklist & What to Bring
              </h2>
            </div>

            {tour.whatToBringGroups && tour.whatToBringGroups.length > 0 ? (
              <div className="tour-bring-grid">
                {tour.whatToBringGroups.map((group, idx) => (
                  <div key={idx} className="tour-bring-category">
                    <h4 className="tour-bring-category-title">
                      <CheckCircle2 size={16} /> {group.category}
                    </h4>
                    <ul className="tour-bring-list">
                      {group.items.map((item, i) => (
                        <li key={i} className="tour-bring-item">
                          <Check size={15} className="tour-bring-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : tour.whatToBringList && tour.whatToBringList.length > 0 ? (
              <div className="tour-bring-grid">
                <div className="tour-bring-category" style={{ gridColumn: '1 / -1' }}>
                  <ul className="tour-bring-list">
                    {tour.whatToBringList.map((item, i) => (
                      <li key={i} className="tour-bring-item">
                        <Check size={16} className="tour-bring-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="tour-bring-category">
                <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>{tour.whatToBring}</p>
              </div>
            )}
          </section>

          {/* ── Section 6: Inclusions & Exclusions ── */}
          <section id="inclusions" className="tour-section">
            <div className="tour-section-header">
              <h2 className="tour-section-title">
                <CheckCircle2 size={24} /> Inclusions & Exclusions
              </h2>
            </div>
            <div className="tour-inc-exc-grid">
              <div className="tour-inc-column">
                <h4 className="tour-column-title">
                  <CheckCircle2 size={20} style={{ color: '#059669' }} /> What's Included
                </h4>
                <ul className="tour-check-list">
                  {tour.included.map((item, i) => (
                    <li key={i}>
                      <Check size={16} className="tour-inc-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tour-exc-column">
                <h4 className="tour-column-title">
                  <XCircle size={20} style={{ color: '#94a3b8' }} /> What's Excluded
                </h4>
                <ul className="tour-check-list">
                  {tour.excluded.map((item, i) => (
                    <li key={i}>
                      <X size={16} className="tour-exc-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 7: Reviews & Traveler Stories ── */}
          <section id="reviews" className="tour-section">
            <div className="tour-section-header">
              <h2 className="tour-section-title">
                <Heart size={24} /> Traveler Reviews ({tour.reviews})
              </h2>
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
                        <span key={j} style={{ color: '#facc15', fontSize: '1rem' }}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="detail-review-card__text">"{review.text}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8: Related Curated Journeys (NO PRICES) ── */}
          {fallbackRelated.length > 0 && (
            <div style={{ marginTop: '3.5rem', marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                You May Also Like
              </h2>
              <div className="sp-products__grid">
                {fallbackRelated.map((t) => (
                  <Link
                    key={t.id}
                    to={`/tours/${t.id}`}
                    className="sp-product-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="sp-product-card__image">
                      <img src={t.gallery[0] || t.image} alt={t.title} />
                    </div>
                    <div className="sp-product-card__body">
                      <h3 className="sp-product-card__title">{t.title}</h3>
                      <div className="sp-product-card__rating">
                        <span style={{ color: '#facc15', marginRight: '4px' }}>★</span>
                        <strong>{t.rating}</strong>
                        <span className="sp-product-card__reviews">({t.reviews} reviews)</span>
                      </div>
                      <p className="sp-product-card__desc" style={{ WebkitLineClamp: 2 }}>
                        {t.description}
                      </p>
                      <div className="sp-product-card__footer" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', marginTop: '0.75rem' }}>
                        <span className="sp-product-card__duration"><Clock size={14} /> {t.duration}</span>
                        <span style={{ color: '#b31820', fontWeight: 600, fontSize: '0.85rem' }}>
                          Explore Journey →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Section 9: Bespoke Planning / Inquire About This Tour ── */}
        <CTA defaultTour={tour.title} defaultDuration={tour.duration} id="contact" />

        {/* Fullscreen Lightbox Modal */}
        {lightboxOpen && (
          <div className="tour-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
            <div className="tour-lightbox-header" onClick={(e) => e.stopPropagation()}>
              <div>
                <span className="tour-lightbox-title">{tour.title}</span>
                <span className="tour-lightbox-counter" style={{ marginLeft: '1rem' }}>
                  Photo {activePhotoIdx + 1} of {tour.gallery.length}
                </span>
              </div>
              <button
                type="button"
                className="tour-lightbox-close"
                onClick={() => setLightboxOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="tour-lightbox-stage" onClick={(e) => e.stopPropagation()}>
              <img
                src={tour.gallery[activePhotoIdx]}
                alt={`${tour.title} - Fullscreen View ${activePhotoIdx + 1}`}
              />
            </div>

            <button
              type="button"
              className="tour-lightbox-nav-btn tour-lightbox-nav-btn--prev"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIdx((prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length);
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              className="tour-lightbox-nav-btn tour-lightbox-nav-btn--next"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIdx((prev) => (prev + 1) % tour.gallery.length);
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom thumbnail strip */}
            <div className="tour-lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
              {tour.gallery.map((thumb, idx) => (
                <div
                  key={idx}
                  className={`tour-lightbox-thumb ${idx === activePhotoIdx ? 'tour-lightbox-thumb--active' : ''}`}
                  onClick={() => setActivePhotoIdx(idx)}
                >
                  <img src={thumb} alt={`Thumbnail ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Sticky Bar (NO PRICE) */}
        <div className="tour-mobile-action-bar">
          <div className="tour-mobile-action-inner">
            <div className="tour-mobile-title-wrap">
              <span className="tour-mobile-title">{tour.title}</span>
              <span className="tour-mobile-subtitle">{tour.duration} · {tour.difficulty}</span>
            </div>
            <button
              type="button"
              className="tour-mobile-btn"
              onClick={() => scrollToSection('contact')}
            >
              <Send size={14} /> Plan Journey
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TourDetailPage;
