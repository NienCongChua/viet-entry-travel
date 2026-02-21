import Button from './ui/Button';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section" id="contact">
      <div className="container">
        <div className="cta__inner">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=80"
            alt=""
            className="cta__bg-img"
          />
          <div className="cta__overlay"></div>

          {/* Animated blobs */}
          <div className="cta__blob cta__blob--1"></div>
          <div className="cta__blob cta__blob--2"></div>

          <div className="cta__content">
            <span className="cta__emoji">🇻🇳</span>
            <h2 className="cta__title">Ready for Your<br />Vietnam Adventure?</h2>
            <p className="cta__description">
              Contact us for a free consultation. We'll craft your perfect itinerary,
              handle your visa, and make sure every moment counts.
            </p>
            <div className="cta__actions">
              <Button href="mailto:hello@vietentrytravel.com" variant="accent" size="lg">
                Plan My Trip
              </Button>
              <Button href="https://wa.me/84xxxxxxxxx" variant="glass" size="lg">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
