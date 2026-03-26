import { useState } from 'react';
import { Send, User, Phone, Mail, MapPin, Calendar, Users, BedDouble, Plane, MessageSquare } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: connect to backend / email API
  };

  return (
    <section className="cta section" id="contact">
      <div className="container">
        <div className="cta__inner">
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=80"
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
                  {/* Row 1: Title + Name */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <User size={13} /> Your Title
                      </label>
                      <select className="quote-form__input">
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
                      <input type="text" className="quote-form__input" placeholder="e.g. John Smith" required />
                    </div>
                  </div>

                  {/* Row 2: Phone + Email */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Phone size={13} /> Mobile Number (incl. country code)
                      </label>
                      <input type="tel" className="quote-form__input" placeholder="e.g. +44 7700 900000" />
                      <span className="quote-form__hint">We only contact you on WhatsApp in case we can't reach you by email.</span>
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Mail size={13} /> E-mail Address <span className="quote-form__required">*</span>
                      </label>
                      <input type="email" className="quote-form__input" placeholder="e.g. john@email.com" required />
                    </div>
                  </div>

                  {/* Row 3: Destination + Travel time */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <MapPin size={13} /> Where would you like to visit?
                      </label>
                      <input type="text" className="quote-form__input" placeholder="Vietnam, Cambodia, Laos, or a combination?" />
                      <span className="quote-form__hint">If you'd like a specific tour, please provide the tour name below.</span>
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Calendar size={13} /> Preferred Time of Travel
                      </label>
                      <input type="text" className="quote-form__input" placeholder="e.g. April 2026" />
                    </div>
                  </div>

                  {/* Row 4: Duration + Accommodation */}
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <Calendar size={13} /> Preferred Trip Duration
                      </label>
                      <input type="text" className="quote-form__input" placeholder="e.g. 14 - 17 days" />
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">
                        <BedDouble size={13} /> Preferred Accommodation
                      </label>
                      <select className="quote-form__input">
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
                      <input type="number" className="quote-form__input" placeholder="e.g. 2" min="1" />
                    </div>
                    <div className="quote-form__field quote-form__field--checkbox">
                      <label className="quote-form__checkbox">
                        <input type="checkbox" className="quote-form__toggle-input" />
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
                    />
                  </div>

                  <div className="quote-form__submit-wrap">
                    <button type="submit" className="quote-form__submit">
                      <Send size={16} /> Send My Request
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="quote-form__success">
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1.5rem' }}>✅</span>
                <h2 className="cta__title" style={{ fontSize: '2rem' }}>Thank You!</h2>
                <p className="cta__description">
                  We've received your quote request. Our team will get back to you within 24 hours with a personalized itinerary.
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
