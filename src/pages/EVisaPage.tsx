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
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import "./ServicePage.css";

const plans = [
  {
    name: "Standard",
    processing: "1-3 Business Days",
    price: 39,
    popular: false,
    features: [
      "Single/Multiple entry",
      "90-day validity",
      "Email delivery",
      "Full support",
      "Free correction",
    ],
  },
  {
    name: "Rush",
    processing: "24 Hours",
    price: 69,
    popular: true,
    features: [
      "Single/Multiple entry",
      "90-day validity",
      "Email delivery",
      "Priority support 24/7",
      "Free correction",
      "Application tracking",
    ],
  },
  {
    name: "Super Rush",
    processing: "4-8 Hours",
    price: 99,
    popular: false,
    features: [
      "Single/Multiple entry",
      "90-day validity",
      "Email delivery",
      "VIP support 24/7",
      "Free correction",
      "Real-time tracking",
      "Dedicated agent",
    ],
  },
];

const steps = [
  {
    num: 1,
    title: "Fill Out the Form",
    desc: "Enter your passport details, travel dates, and upload a photo.",
  },
  {
    num: 2,
    title: "Choose Your Plan",
    desc: "Select Standard, Rush, or Super Rush processing speed.",
  },
  {
    num: 3,
    title: "Review & Pay",
    desc: "We verify your application. Pay securely with card or PayPal.",
  },
  {
    num: 4,
    title: "Receive Your eVisa",
    desc: "eVisa delivered to your email. Print it and fly!",
  },
];

const faqs = [
  {
    q: "Who is eligible for a Vietnam eVisa?",
    a: "Citizens from 80+ countries are eligible, including the US, UK, Australia, Canada, and most EU countries.",
  },
  {
    q: "How long is the eVisa valid?",
    a: "The Vietnam eVisa is valid for 90 days from the date of issue, with single or multiple entry options.",
  },
  {
    q: "What documents do I need?",
    a: "A valid passport (at least 6 months validity), passport-sized photo, and travel dates. No invitation letter required.",
  },
  {
    q: "What if my eVisa is rejected?",
    a: "Rejections are rare (less than 1%). If rejected, we provide a full refund of our service fee.",
  },
];

const EVisaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nationality: "",
    arrivalDate: "",
    visaType: "single",
  });

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
              <FileCheck size={16} /> eVisa Service
            </span>
            <h1 className="service-hero__title">Vietnam eVisa Made Simple</h1>
            <p className="service-hero__subtitle">
              Fast, reliable eVisa processing. Submit online and get approved in
              as little as 4 hours.
            </p>
          </div>
        </section>

        {/* Quick Application Form */}
        <section className="sp-booking section">
          <div className="container">
            <div className="sp-booking__card">
              <h2 className="sp-booking__title">
                Start Your eVisa Application
              </h2>
              <p className="sp-booking__subtitle">
                Check eligibility and begin your application
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
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="au">Australia</option>
                      <option value="ca">Canada</option>
                      <option value="de">Germany</option>
                      <option value="fr">France</option>
                      <option value="jp">Japan</option>
                      <option value="kr">South Korea</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="sp-booking__field">
                    <label>
                      <Clock size={14} /> Arrival Date
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
                      <option value="single">Single Entry</option>
                      <option value="multiple">Multiple Entry</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="sp-booking__submit">
                  Check Eligibility & Continue
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="service-features">
          <div className="container">
            <div className="service-features__header">
              <span className="section-label">✦ Pricing Plans</span>
              <h2 className="section-title">Choose Your Processing Speed</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                All plans include our 99% approval guarantee
              </p>
            </div>
            <div className="sp-pricing__grid">
              {plans.map((plan) => (
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
                  <div className="sp-pricing-card__price">
                    <span className="sp-pricing-card__amount">
                      US${plan.price}
                    </span>
                    <span className="sp-pricing-card__per">/person</span>
                  </div>
                  <ul className="sp-pricing-card__features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <Check size={16} /> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`sp-pricing-card__btn ${plan.popular ? "sp-pricing-card__btn--primary" : ""}`}
                  >
                    Apply Now
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
              <h2 className="section-title">Get Your eVisa in 4 Steps</h2>
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
                <h4>99% Approval</h4>
                <p>Expert review to maximize your chances</p>
              </div>
              <div className="sp-trust__item">
                <Clock size={28} />
                <h4>Fast Processing</h4>
                <p>As quick as 4 hours for urgent cases</p>
              </div>
              <div className="sp-trust__item">
                <CheckCircle2 size={28} />
                <h4>Money-Back Guarantee</h4>
                <p>Full refund if your visa is rejected</p>
              </div>
              <div className="sp-trust__item">
                <Globe size={28} />
                <h4>80+ Countries</h4>
                <p>We serve travelers from around the world</p>
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

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Apply for Your eVisa Now</h2>
            <p>Get your Vietnam eVisa fast and hassle-free.</p>
            <div className="service-cta__actions">
              <Button href="#contact" variant="accent" size="lg">
                Apply Now
              </Button>
              <Link
                to="/"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 500,
                }}
              >
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

export default EVisaPage;
