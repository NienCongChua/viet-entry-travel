import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  ChevronDown,
  CheckCircle2,
  ArrowLeft,
  Wifi,
  Signal,
  Check,
  Send,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import './ServicePage.css';

const plans = [
  {
    name: 'Traveler',
    data: '3 GB',
    duration: '7 Days',
    popular: false,
    features: [
      '3 GB high-speed 4G/5G data',
      '7-day validity from activation',
      'Instant QR delivery via WhatsApp/email',
      'Viettel top-tier network',
      'Hotspot tethering supported',
    ],
  },
  {
    name: 'Explorer',
    data: '10 GB',
    duration: '15 Days',
    popular: true,
    features: [
      '10 GB high-speed 4G/5G data',
      '15-day validity from activation',
      'Instant QR delivery via WhatsApp/email',
      'Viettel top-tier network',
      'Data top-up available anytime',
      'Hotspot tethering supported',
    ],
  },
  {
    name: 'Adventurer',
    data: '30 GB',
    duration: '30 Days',
    popular: false,
    features: [
      '30 GB high-speed 4G/5G data',
      '30-day validity from activation',
      'Instant QR delivery via WhatsApp/email',
      'Dual Viettel + Vinaphone coverage',
      'Data top-up available anytime',
      'Hotspot tethering supported',
    ],
  },
  {
    name: 'Unlimited',
    data: 'Unlimited',
    duration: '30 Days',
    popular: false,
    features: [
      'Unlimited 4G/5G high-speed data',
      '30-day validity from activation',
      'Instant QR delivery via WhatsApp/email',
      'Widest nationwide 5G coverage',
      'Hotspot tethering supported',
      'Priority 24/7 technical setup support',
    ],
  },
];

const steps = [
  {
    num: 1,
    title: 'Choose Your Data Plan',
    desc: 'Select data amount and validity period matching your travel itinerary in Vietnam.',
  },
  {
    num: 2,
    title: 'Order via WhatsApp or Quote',
    desc: 'Connect directly with our support team on WhatsApp (+84 3386 49908) or submit a quote request.',
  },
  {
    num: 3,
    title: 'Instant QR Delivery',
    desc: 'Receive your personalized eSIM installation QR code directly via WhatsApp or email in minutes.',
  },
  {
    num: 4,
    title: 'Scan & Connect',
    desc: 'Scan the QR code in your phone settings upon landing in Vietnam — you are instantly online!',
  },
];

const compatiblePhones = [
  'iPhone XR, XS, 11, 12, 13, 14, 15, 16 (all models)',
  'Samsung Galaxy S20, S21, S22, S23, S24, Z Flip & Fold series',
  'Google Pixel 3, 4, 5, 6, 7, 8, 9 (all models)',
  'Huawei P40 Pro, Mate 40 Pro+',
  'iPad Pro (cellular), iPad Air (cellular)',
  'And 300+ more modern eSIM-capable devices',
];

const faqs = [
  {
    q: 'What is an eSIM?',
    a: 'An eSIM is a digital SIM embedded in your phone. You activate it simply by scanning a QR code — no physical plastic SIM card or store visit needed.',
  },
  {
    q: 'Why order via WhatsApp rather than website checkout?',
    a: 'eSIM profiles require device compatibility verification and timely activation. By ordering directly on WhatsApp (+84 3386 49908), our support team sends your QR code immediately, walks you through quick installation, and ensures your data is active without automated checkout issues.',
  },
  {
    q: 'When should I install my eSIM?',
    a: 'You can scan the QR code before flying to Vietnam or right upon landing at the airport. The validity begins when it connects to a Vietnamese cellular network.',
  },
  {
    q: 'Can I keep my WhatsApp and primary phone number?',
    a: 'Yes! Your phone will use the Vietnam eSIM strictly for fast local mobile data while keeping your home physical SIM active for incoming SMS or two-factor authentication.',
  },
  {
    q: 'What if I need more data during my trip?',
    a: 'Simply message our WhatsApp support (+84 3386 49908) anytime and we will top up your existing eSIM profile instantly without needing a new QR code.',
  },
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
            <img src="/images/services/service-esim.jpg" alt="eSIM Vietnam" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <Smartphone size={16} /> Vietnam High-Speed eSIM
            </span>
            <h1 className="service-hero__title">Stay Connected in Vietnam</h1>
            <p className="service-hero__subtitle">
              Instant 4G/5G mobile data across all regions. Order directly via WhatsApp ({WHATSAPP_DISPLAY}) with instant QR delivery.
            </p>
          </div>
        </section>

        {/* Data Plan Cards */}
        <section className="service-features">
          <div className="container">
            <div className="service-features__header">
              <span className="section-label">✦ Data Plans</span>
              <h2 className="section-title">Choose Your eSIM Plan</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Instant QR delivery • Nationwide 4G/5G • Direct concierge support
              </p>
            </div>
            <div className="sp-pricing__grid sp-pricing__grid--4">
              {plans.map((plan) => {
                const planWhatsAppUrl = getWhatsAppUrl(
                  `Hello Viet Entry Travel, I would like to order the ${plan.name} eSIM plan (${plan.data}, ${plan.duration}). Please provide a quote and QR code delivery details.`
                );
                return (
                  <div
                    key={plan.name}
                    className={`sp-pricing-card ${plan.popular ? 'sp-pricing-card--popular' : ''}`}
                  >
                    {plan.popular && <span className="sp-pricing-card__badge">Best Value</span>}
                    <h3 className="sp-pricing-card__name">{plan.name}</h3>
                    <div className="sp-esim-plan__data">
                      <span className="sp-esim-plan__data-amount">{plan.data}</span>
                      <span className="sp-esim-plan__data-duration">{plan.duration}</span>
                    </div>
                    <div className="sp-pricing-card__price" style={{ padding: '0.6rem 0' }}>
                      <span className="sp-pricing-card__amount" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                        Quote on Request
                      </span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                        Direct QR activation via WhatsApp
                      </span>
                    </div>
                    <ul className="sp-pricing-card__features">
                      {plan.features.map((f) => (
                        <li key={f}>
                          <Check size={16} /> {f}
                        </li>
                      ))}
                    </ul>

                    <div className="sp-pricing-card__actions">
                      <a
                        href={planWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sp-btn-whatsapp"
                      >
                        <WhatsAppIcon size={16} /> Order on WhatsApp
                      </a>
                      <a
                        href="#contact"
                        className="sp-btn-quote sp-btn-quote--outline"
                      >
                        <Send size={14} /> Request a Quote
                      </a>
                    </div>
                  </div>
                );
              })}
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
                <div
                  key={s.num}
                  className="service-step"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
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
                <p>Our eSIM works seamlessly with most unlocked smartphones made since 2019:</p>
                <ul className="sp-compat__list">
                  {compatiblePhones.map((phone) => (
                    <li key={phone}>
                      <CheckCircle2 size={16} /> {phone}
                    </li>
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
              <h2 className="section-title">eSIM Questions Answered</h2>
            </div>
            <div className="service-faq__list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`service-faq__item ${openFaq === i ? 'service-faq__item--open' : ''}`}
                >
                  <button
                    className="service-faq__question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <ChevronDown size={18} />
                  </button>
                  <div className="service-faq__answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Get Your Vietnam eSIM in Minutes</h2>
            <p>
              Direct delivery and instant activation guidance via WhatsApp ({WHATSAPP_DISPLAY}) or quote inquiry.
            </p>
            <div className="service-cta__actions">
              <a
                href={getWhatsAppUrl(
                  'Hello Viet Entry Travel, I would like to order an eSIM for my upcoming trip to Vietnam. Please advise on available data packages.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn-whatsapp"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
              >
                <WhatsAppIcon size={20} />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <a
                href="#contact"
                className="sp-btn-quote"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
              >
                <Send size={18} />
                Request a Quote
              </a>
              <Link
                to="/"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 500,
                  marginLeft: '0.5rem',
                }}
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Embedded Request a Quote Form */}
        <CTA defaultTour="Vietnam Travel eSIM" id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default ESimPage;
