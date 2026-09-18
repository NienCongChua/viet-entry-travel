import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, User, Phone, Mail, MapPin, Calendar, Users, BedDouble, Plane, MessageSquare, Loader2 } from 'lucide-react';
import './CTA.css';

const resolveApiUrl = (): string => {
  const envUrl = (import.meta.env.VITE_API_URL || '').trim();
  if (envUrl) {
    if (/^(localhost|127\.0\.0\.1)(:\d+)?/i.test(envUrl)) {
      return `http://${envUrl}`.replace(/\/+$/, '');
    }
    if (!/^https?:\/\//i.test(envUrl)) {
      return `https://${envUrl}`.replace(/\/+$/, '');
    }
    return envUrl.replace(/\/+$/, '');
  }
  if (import.meta.env.PROD) {
    return 'https://api.vietentrytravel.com';
  }
  return 'http://localhost:4000';
};

const API_URL = resolveApiUrl();

const initialForm = {
  title: '',
  name: '',
  phone: '',
  email: '',
  destination: '',
  travelTime: '',
  duration: '',
  accommodation: '',
  people: '',
  wantsFlightQuote: false,
  message: '',
  website: '', // honeypot — hidden from real visitors, bots tend to fill every field
};

export interface CTAProps {
  defaultTour?: string;
  defaultDuration?: string;
  id?: string;
}

const CTA = ({ defaultTour = '', defaultDuration = '', id = 'contact' }: CTAProps) => {
  const location = useLocation();
  const [form, setForm] = useState(() => {
    const params = new URLSearchParams(location.search);
    const tourFromUrl = params.get('tour') || defaultTour;
    const durFromUrl = params.get('duration') || defaultDuration;
    return {
      ...initialForm,
      destination: tourFromUrl || '',
      duration: durFromUrl || '',
    };
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tourVal = params.get('tour') || defaultTour;
    const durVal = params.get('duration') || defaultDuration;
    if (tourVal) {
      setForm((prev) => ({
        ...prev,
        destination: tourVal,
        duration: durVal || prev.duration,
      }));
    }
  }, [defaultTour, defaultDuration, location.search]);

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const update = (field: keyof typeof initialForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/quote-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tourName: form.destination || defaultTour,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      if (data.referenceCode) {
        setReferenceCode(data.referenceCode);
      }
      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'We could not send your request. Please check your connection and try again, or email us directly.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta section" id={id}>
      <div className="container">
        <div className="cta__inner">
          {/* Background */}
          <img
            src="/images/tours/hoi-an-lantern-street.jpg"
            alt=""
            className="cta__bg-img"
          />
          <div className="cta__overlay"></div>
          <div className="cta__blob cta__blob--1"></div>
          <div className="cta__blob cta__blob--2"></div>

          <div className="cta__content">
            {!submitted ? (
              <>
                <img src="/icon/icon-1000x1000.png" alt="Viet Entry Travel" className="cta__logo" />
                <h2 className="cta__title">Request a Quote</h2>
                <p className="cta__description">
                  Tell us about your dream Vietnam trip and we'll craft a personalized itinerary just for you — completely free.
                </p>

                <form className="quote-form" onSubmit={handleSubmit}>
                  {/* Honeypot field — kept off-screen, real users never see or fill it */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(e) => update('website', e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                  />

                  {/* Row 1: Title + Name */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <User size={13} /> Your Title
                      </label>
                      <select className="quote-form__input" value={form.title} onChange={(e) => update('title', e.target.value)}>
                        <option value="">Select</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <User size={13} /> Your Name <span className="quote-form__required">*</span>
                      </label>
                      <input type="text" className="quote-form__input" placeholder="e.g. John Smith" required value={form.name} onChange={(e) => update('name', e.target.value)} />
                    </div>
                  </div>

                  {/* Row 2: Phone + Email */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Phone size={13} /> Mobile Number (incl. country code)
                      </label>
                      <input type="tel" className="quote-form__input" placeholder="e.g. +44 7700 900000" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                      <span className="quote-form__hint">We only contact you on WhatsApp in case we can't reach you by email.</span>
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Mail size={13} /> E-mail Address <span className="quote-form__required">*</span>
                      </label>
                      <input type="email" className="quote-form__input" placeholder="e.g. john@email.com" required value={form.email} onChange={(e) => update('email', e.target.value)} />
                    </div>
                  </div>

                  {/* Row 3: Destination + Travel time */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <MapPin size={13} /> Where would you like to visit?
                      </label>
                      <input type="text" className="quote-form__input" placeholder="Vietnam, Cambodia, Laos, or a combination?" value={form.destination} onChange={(e) => update('destination', e.target.value)} />
                      <span className="quote-form__hint">If you'd like a specific tour, please provide the tour name below.</span>
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Calendar size={13} /> Preferred Time of Travel
                      </label>
                      <input type="text" className="quote-form__input" placeholder="e.g. April 2026" value={form.travelTime} onChange={(e) => update('travelTime', e.target.value)} />
                    </div>
                  </div>

                  {/* Row 4: Duration + Accommodation */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Calendar size={13} /> Preferred Trip Duration
                      </label>
                      <input type="text" className="quote-form__input" placeholder="e.g. 14 - 17 days" value={form.duration} onChange={(e) => update('duration', e.target.value)} />
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <BedDouble size={13} /> Preferred Accommodation
                      </label>
                      <select className="quote-form__input" value={form.accommodation} onChange={(e) => update('accommodation', e.target.value)}>
                        <option value="">Select star rating</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                        <option value="mixed">Mixed</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: People + Flight checkbox */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Users size={13} /> No. of People
                      </label>
                      <input type="number" className="quote-form__input" placeholder="e.g. 2" min="1" value={form.people} onChange={(e) => update('people', e.target.value)} />
                    </div>
                    <div className="quote-form__field quote-form__field--checkbox">
                      <label className="quote-form__checkbox">
                        <input type="checkbox" className="quote-form__toggle-input" checked={form.wantsFlightQuote} onChange={(e) => update('wantsFlightQuote', e.target.checked)} />
                        <span className="quote-form__toggle-track">
                          <span className="quote-form__toggle-thumb"></span>
                        </span>
                        <Plane size={14} />
                        <span>Please tick this box if you'd like us to quote for your international flight</span>
                      </label>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="quote-form__field quote-form__field--full">
                    <label className="quote-form__label">
                      <MessageSquare size={13} /> Special Interests or Requirements
                    </label>
                    <textarea
                      className="quote-form__input quote-form__textarea"
                      rows={4}
                      placeholder="If you have any special interests or requirements, please let us know."
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                    />
                  </div>

                  {error && (
                    <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '8px', padding: '0.75rem 1rem', marginTop: '0.75rem' }}>
                      <p style={{ color: '#fca5a5', fontSize: '0.875rem', margin: 0 }}>{error}</p>
                      <p style={{ color: '#ffffff', fontSize: '0.825rem', marginTop: '0.4rem', marginBottom: 0 }}>
                        Need immediate assistance?{' '}
                        <a
                          href="https://wa.me/84338649908?text=Hello%20Viet%20Entry%20Travel%2C%20I%20would%20like%20to%20request%20a%20quote."
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#4ade80', fontWeight: 600, textDecoration: 'underline' }}
                        >
                          Chat on WhatsApp (+84 3386 49908)
                        </a>
                      </p>
                    </div>
                  )}

                  <div className="quote-form__submit-wrap">
                    <button type="submit" className="quote-form__submit" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 size={16} className="quote-form__spinner" /> : <Send size={16} />}
                      {isSubmitting ? 'Sending…' : 'Send My Request'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="quote-form__success">
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1.25rem' }}>✅</span>
                <h2 className="cta__title" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Thank You!</h2>
                {referenceCode && (
                  <div
                    style={{
                      display: 'inline-block',
                      margin: '0.5rem 0 1.25rem',
                      padding: '0.6rem 1.25rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px dashed rgba(255, 255, 255, 0.35)',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      color: '#fbbf24',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    Quote Reference: #{referenceCode}
                  </div>
                )}
                <p className="cta__description" style={{ maxWidth: '520px', margin: '0 auto 0.75rem' }}>
                  We've received your request and sent a confirmation email to <strong>{form.email}</strong>. Our team will get back to you within 24 hours with a personalized itinerary.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', margin: 0 }}>
                  (If you don't see our email in a few minutes, please check your Spam or Promotions folder.)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
