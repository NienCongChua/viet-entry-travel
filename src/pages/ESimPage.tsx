import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ChevronDown, CheckCircle2, ArrowLeft, Wifi, Signal, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';

const plans = [
  {
    name: 'Traveler',
    data: '3 GB',
    duration: '7 Days',
    price: 6,
    popular: false,
    features: ['3 GB 4G/5G data', '7-day validity', 'Instant QR delivery', 'Viettel network'],
  },
  {
    name: 'Explorer',
    data: '10 GB',
    duration: '15 Days',
    price: 12,
    popular: true,
    features: ['10 GB 4G/5G data', '15-day validity', 'Instant QR delivery', 'Viettel network', 'Data top-up available'],
  },
  {
    name: 'Adventurer',
    data: '30 GB',
    duration: '30 Days',
    price: 22,
    popular: false,
    features: ['30 GB 4G/5G data', '30-day validity', 'Instant QR delivery', 'Viettel + Mobifone', 'Data top-up available', 'Hotspot sharing'],
  },
  {
    name: 'Unlimited',
    data: 'Unlimited',
    duration: '30 Days',
    price: 35,
    popular: false,
    features: ['Unlimited 4G/5G data', '30-day validity', 'Instant QR delivery', 'Best network coverage', 'Data top-up available', 'Hotspot sharing', 'Priority support'],
  },
];

const steps = [
  { num: 1, title: 'Choose Your Plan', desc: 'Select data amount and duration that fits your trip.' },
  { num: 2, title: 'Pay Securely', desc: 'Quick checkout with credit card or PayPal.' },
  { num: 3, title: 'Get QR Code', desc: 'Receive your eSIM QR code instantly via email.' },
  { num: 4, title: 'Scan & Connect', desc: 'Scan the QR code on your phone — you\'re online!' },
];

const compatiblePhones = [
  'iPhone XR, XS, 11, 12, 13, 14, 15, 16 (all models)',
  'Samsung Galaxy S20, S21, S22, S23, S24 (all models)',
  'Google Pixel 3, 4, 5, 6, 7, 8, 9 (all models)',
  'Huawei P40 Pro, Mate 40 Pro+',
  'iPad Pro (2018+), iPad Air (2019+)',
  'And 300+ more devices',
];

const faqs = [
  { q: 'What is an eSIM?', a: 'An eSIM is a digital SIM embedded in your phone. You activate it by scanning a QR code — no physical SIM needed.' },
  { q: 'Is my phone eSIM compatible?', a: 'Most phones from 2019+ support eSIM. Check your phone settings for "Add eSIM" or "Add Cellular Plan".' },
  { q: 'When should I activate my eSIM?', a: 'Install it anytime, but activate when you arrive in Vietnam or just before boarding your flight.' },
  { q: 'Can I use both eSIM and physical SIM?', a: 'Yes! Most modern phones support dual SIM — use eSIM for data and physical SIM for your home number.' },
  { q: 'What if I run out of data?', a: 'You can purchase additional data through our website. The top-up is instant — no new QR code needed.' },
];

const ESimPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=1920&q=80" alt="eSIM Vietnam" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge"><Smartphone size={16} /> eSIM Service</span>
            <h1 className="service-hero__title">Stay Connected in Vietnam</h1>
            <p className="service-hero__subtitle">
              Affordable 4G/5G eSIM plans — instant activation, no physical SIM needed.
            </p>
          </div>
        </section>

        {/* Data Plan Cards */}
        <section className="service-features">
          <div className="container">
            <div className="service-features__header">
              <span className="section-label">✦ Data Plans</span>
              <h2 className="section-title">Choose Your eSIM Plan</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>Instant delivery • Works with 300+ phone models</p>
            </div>
            <div className="sp-pricing__grid sp-pricing__grid--4">
              {plans.map((plan) => (
                <div key={plan.name} className={`sp-pricing-card ${plan.popular ? 'sp-pricing-card--popular' : ''}`}>
                  {plan.popular && <span className="sp-pricing-card__badge">Best Value</span>}
                  <h3 className="sp-pricing-card__name">{plan.name}</h3>
                  <div className="sp-esim-plan__data">
                    <span className="sp-esim-plan__data-amount">{plan.data}</span>
                    <span className="sp-esim-plan__data-duration">{plan.duration}</span>
                  </div>
                  <div className="sp-pricing-card__price">
                    <span className="sp-pricing-card__amount">US${plan.price}</span>
                  </div>
                  <ul className="sp-pricing-card__features">
                    {plan.features.map((f) => (
                      <li key={f}><Check size={16} /> {f}</li>
                    ))}
                  </ul>
                  <button className={`sp-pricing-card__btn ${plan.popular ? 'sp-pricing-card__btn--primary' : ''}`}>
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="service-steps">
          <div className="container">
            <div className="service-steps__header">
              <span className="section-label">✦ How It Works</span>
              <h2 className="section-title">Get Connected in 4 Steps</h2>
            </div>
            <div className="service-steps__grid">
              {steps.map((s, i) => (
                <div key={s.num} className="service-step" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="service-step__number">{s.num}</div>
                  <h3 className="service-step__title">{s.title}</h3>
                  <p className="service-step__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Compatibility */}
        <section className="sp-compat section">
          <div className="container">
            <div className="sp-compat__inner">
              <div className="sp-compat__text">
                <span className="section-label">✦ Compatibility</span>
                <h2>Is Your Phone eSIM Ready?</h2>
                <p>Our eSIM works with most modern smartphones. Here are some of the supported devices:</p>
                <ul className="sp-compat__list">
                  {compatiblePhones.map((phone) => (
                    <li key={phone}><CheckCircle2 size={16} /> {phone}</li>
                  ))}
                </ul>
              </div>
              <div className="sp-compat__visual">
                <div className="sp-compat__phone">
                  <div className="sp-compat__phone-screen">
                    <Wifi size={40} />
                    <span>eSIM Active</span>
                    <div className="sp-compat__signal">
                      <Signal size={20} /> <span>5G</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="service-faq">
          <div className="container">
            <div className="service-faq__header">
              <span className="section-label">✦ FAQ</span>
              <h2 className="section-title">eSIM Questions</h2>
            </div>
            <div className="service-faq__list">
              {faqs.map((faq, i) => (
                <div key={i} className={`service-faq__item ${openFaq === i ? 'service-faq__item--open' : ''}`}>
                  <button className="service-faq__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDown size={18} />
                  </button>
                  <div className="service-faq__answer"><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Get Your eSIM Today</h2>
            <p>Stay connected everywhere in Vietnam — instant delivery.</p>
            <div className="service-cta__actions">
              <Button href="#contact" variant="accent" size="lg">Buy eSIM Now</Button>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ESimPage;
