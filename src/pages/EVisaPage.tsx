import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileCheck,
  ChevronDown,
  CheckCircle2,
  ArrowLeft,
  Zap,
  Clock,
  Shield,
  Globe,
  Check,
  Send,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "../utils/whatsapp";
import "./ServicePage.css";

const plans = [
  {
    name: "Standard",
    processing: "1-3 Business Days",
    popular: false,
    features: [
      "Single / Multiple entry",
      "90-day validity",
      "Email & WhatsApp delivery",
      "Full document pre-check",
      "Free correction service",
    ],
  },
  {
    name: "Rush",
    processing: "24 Hours",
    popular: true,
    features: [
      "Single / Multiple entry",
      "90-day validity",
      "Email & WhatsApp delivery",
      "Priority 24/7 visa concierge",
      "Free correction service",
      "Real-time application tracking",
    ],
  },
  {
    name: "Super Rush",
    processing: "4-8 Hours",
    popular: false,
    features: [
      "Single / Multiple entry",
      "90-day validity",
      "Email & WhatsApp delivery",
      "VIP 24/7 dedicated agent",
      "Urgent airport coordination",
      "Free correction service",
      "Full money-back guarantee",
    ],
  },
];

const steps = [
  {
    num: 1,
    title: "Inquire & Share Details",
    desc: "Contact us via WhatsApp (+84 3386 49908) or submit a quote request with your travel dates.",
  },
  {
    num: 2,
    title: "Document Pre-Check",
    desc: "Our visa specialist reviews your passport photo and details to ensure 100% compliance.",
  },
  {
    num: 3,
    title: "Consult & Confirm",
    desc: "Choose Standard, Rush, or Super Rush. Receive formal confirmation with no automated errors.",
  },
  {
    num: 4,
    title: "Receive Your eVisa",
    desc: "Your official Vietnam eVisa is delivered to your WhatsApp & email. Print and fly!",
  },
];

const faqs = [
  {
    q: "Who is eligible for a Vietnam eVisa?",
    a: "Citizens from all countries and territories are now eligible for the 90-day Vietnam eVisa.",
  },
  {
    q: "How long is the eVisa valid?",
    a: "The Vietnam eVisa is valid for up to 90 days from your specified arrival date, with single or multiple entry options.",
  },
  {
    q: "What documents do I need to send?",
    a: "Just a clear photo/scan of your passport bio page (valid at least 6 months) and a standard passport-style portrait photo. No physical submission required.",
  },
  {
    q: "Why do you handle bookings via WhatsApp & quote requests?",
    a: "Automated website checkouts frequently fail due to misspelled names, incorrect passport numbers, or strict immigration photo guidelines. By working 1-on-1 with our visa specialists, we eliminate errors and maintain a 99%+ approval record.",
  },
  {
    q: "What if my eVisa is rejected?",
    a: "Rejections with our pre-screened service are exceptionally rare (less than 1%). In the unlikely event of rejection, we provide a full refund.",
  },
];

const EVisaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nationality: "",
    arrivalDate: "",
    visaType: "single",
  });

  const getFormWhatsAppUrl = () => {
    const nat = formData.nationality ? formData.nationality.toUpperCase() : "international";
    const arr = formData.arrivalDate || "upcoming";
    const vType = formData.visaType === "multiple" ? "Multiple Entry (90 days)" : "Single Entry (90 days)";
    const msg = `Hello Viet Entry Travel, I would like to inquire about Vietnam eVisa service. Nationality: ${nat}, Estimated Arrival: ${arr}, Visa Type: ${vType}. Please advise on requirements and quotation.`;
    return getWhatsAppUrl(msg);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80"
              alt="eVisa Vietnam"
            />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <FileCheck size={16} /> eVisa Concierge Service
            </span>
            <h1 className="service-hero__title">Vietnam eVisa Made Simple</h1>
            <p className="service-hero__subtitle">
              Fast, reliable eVisa processing with 99%+ approval rate. 1-on-1 support via WhatsApp ({WHATSAPP_DISPLAY}) or custom quote.
            </p>
          </div>
        </section>

        {/* Quick Consultation Card */}
        <section className="sp-booking section">
          <div className="container">
            <div className="sp-booking__card">
              <h2 className="sp-booking__title">
                Fast eVisa Consultation & Eligibility
              </h2>
              <p className="sp-booking__subtitle">
                Select your details below and consult directly with our visa specialist via WhatsApp or request a quote
              </p>

              <form
                className="sp-booking__form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="sp-booking__row sp-booking__row--3">
                  <div className="sp-booking__field">
                    <label>
                      <Globe size={14} /> Nationality
                    </label>
                    <select
                      value={formData.nationality}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nationality: e.target.value,
                        })
                      }
                    >
                      <option value="">Select your nationality</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Japan">Japan</option>
                      <option value="South Korea">South Korea</option>
                      <option value="India">India</option>
                      <option value="Other">Other nationality</option>
                    </select>
                  </div>
                  <div className="sp-booking__field">
                    <label>
                      <Clock size={14} /> Estimated Arrival Date
                    </label>
                    <input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          arrivalDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="sp-booking__field">
                    <label>
                      <FileCheck size={14} /> Visa Type
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={(e) =>
                        setFormData({ ...formData, visaType: e.target.value })
                      }
                    >
                      <option value="single">Single Entry (30-90 Days)</option>
                      <option value="multiple">Multiple Entry (90 Days)</option>
                    </select>
                  </div>
                </div>

                <div className="sp-booking__actions">
                  <a
                    href={getFormWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-btn-whatsapp"
                  >
                    <WhatsAppIcon size={20} />
                    Inquire via WhatsApp ({WHATSAPP_DISPLAY})
                  </a>
                  <a href="#contact" className="sp-btn-quote">
                    <Send size={16} />
                    Request a Quote
                  </a>
                </div>

                <p className="sp-booking__notice">
                  <Shield size={14} style={{ color: "#10b981", flexShrink: 0 }} />
                  <span>
                    Direct 1-on-1 Concierge Consultation — No automated checkout errors. All documents are reviewed by hand for 100% compliance.
                  </span>
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="service-features">
          <div className="container">
            <div className="service-features__header">
              <span className="section-label">✦ Processing Speed</span>
              <h2 className="section-title">Choose Your Visa Plan</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                All plans include expert pre-check & our 99%+ approval guarantee
              </p>
            </div>
            <div className="sp-pricing__grid">
              {plans.map((plan) => {
                const planWhatsAppUrl = getWhatsAppUrl(
                  `Hello Viet Entry Travel, I am interested in the ${plan.name} eVisa package (${plan.processing}). Please advise on requirements and quotation.`
                );
                return (
                  <div
                    key={plan.name}
                    className={`sp-pricing-card ${plan.popular ? "sp-pricing-card--popular" : ""}`}
                  >
                    {plan.popular && (
                      <span className="sp-pricing-card__badge">Most Popular</span>
                    )}
                    <h3 className="sp-pricing-card__name">{plan.name}</h3>
                    <p className="sp-pricing-card__processing">
                      <Zap size={14} /> {plan.processing}
                    </p>
                    <div className="sp-pricing-card__price" style={{ padding: '0.6rem 0' }}>
                      <span className="sp-pricing-card__amount" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                        Quote on Request
                      </span>
                      <span className="sp-pricing-card__per" style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                        Tailored to nationality & entry type
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
                        <WhatsAppIcon size={16} /> Inquire via WhatsApp
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
              <span className="section-label">✦ Simple Process</span>
              <h2 className="section-title">How It Works in 4 Steps</h2>
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

        {/* Trust Badges */}
        <section className="sp-trust section">
          <div className="container">
            <div className="sp-trust__grid">
              <div className="sp-trust__item">
                <Shield size={28} />
                <h4>99%+ Approval</h4>
                <p>Expert pre-screen to prevent rejections</p>
              </div>
              <div className="sp-trust__item">
                <Clock size={28} />
                <h4>Express Speed</h4>
                <p>Urgent options available from 4 to 8 hours</p>
              </div>
              <div className="sp-trust__item">
                <CheckCircle2 size={28} />
                <h4>Money-Back Guarantee</h4>
                <p>Full refund if your visa is not approved</p>
              </div>
              <div className="sp-trust__item">
                <Globe size={28} />
                <h4>Direct WhatsApp Support</h4>
                <p>Chat directly with your visa specialist anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="service-faq">
          <div className="container">
            <div className="service-faq__header">
              <span className="section-label">✦ FAQ</span>
              <h2 className="section-title">eVisa Questions Answered</h2>
            </div>
            <div className="service-faq__list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`service-faq__item ${openFaq === i ? "service-faq__item--open" : ""}`}
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

        {/* Direct Action Banner */}
        <section className="service-cta">
          <div className="container">
            <h2>Ready to Secure Your Vietnam eVisa?</h2>
            <p>
              Skip the complicated online forms. Chat directly with our visa team on WhatsApp or request a quote below.
            </p>
            <div className="service-cta__actions">
              <a
                href={getWhatsAppUrl(
                  "Hello Viet Entry Travel, I would like to inquire about getting a Vietnam eVisa. Please advise on requirements and quote."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn-whatsapp"
                style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}
              >
                <WhatsAppIcon size={20} />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <a
                href="#contact"
                className="sp-btn-quote"
                style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}
              >
                <Send size={18} />
                Request a Quote
              </a>
              <Link
                to="/"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 500,
                  marginLeft: "0.5rem",
                }}
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Embedded Request a Quote Form */}
        <CTA defaultTour="Vietnam eVisa Service" defaultDuration="1-3 Business Days" id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default EVisaPage;
