import { Globe, DollarSign, Shield, Zap, Target, MessageCircle } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: <Globe size={24} />,
    title: 'Local Expertise',
    description: 'Born in Vietnam, we know every hidden gem guidebooks miss.',
    stat: '8+',
    statLabel: 'Years',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Best Price',
    description: 'Direct pricing, no middleman markup. Always competitive.',
    stat: '30%',
    statLabel: 'Savings',
  },
  {
    icon: <Shield size={24} />,
    title: 'Safe & Reliable',
    description: 'Licensed, insured, with 24/7 support on every trip.',
    stat: '24/7',
    statLabel: 'Support',
  },
  {
    icon: <Zap size={24} />,
    title: 'Fast Processing',
    description: 'Quick visa approvals and instant booking confirmations.',
    stat: '1-3',
    statLabel: 'Days',
  },
  {
    icon: <Target size={24} />,
    title: 'Tailored Trips',
    description: 'Custom itineraries built around your interests and pace.',
    stat: '100%',
    statLabel: 'Custom',
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Multilingual',
    description: 'English, French, Korean, Japanese — we speak your language.',
    stat: '6+',
    statLabel: 'Languages',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose section" id="why-us">
      {/* Background decoration */}
      <div className="why-choose__bg-blob"></div>

      <div className="container">
        <div className="why-choose__header">
          <span className="section-label">✦ Why Choose Us</span>
          <h2 className="section-title">Your Trusted Vietnam<br />Travel Partner</h2>
          <p className="section-subtitle">
            Thousands of happy travelers and years of local expertise make us different.
          </p>
        </div>

        <div className="why-choose__grid">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="why-choose__card"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="why-choose__card-stat">
                <span className="why-choose__card-stat-value">{feature.stat}</span>
                <span className="why-choose__card-stat-label">{feature.statLabel}</span>
              </div>
              <div className="why-choose__card-content">
                <div className="why-choose__card-icon">{feature.icon}</div>
                <h3 className="why-choose__card-title">{feature.title}</h3>
                <p className="why-choose__card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
