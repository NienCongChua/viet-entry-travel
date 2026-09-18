import { Link } from 'react-router-dom';
import {
  Heart, Shield, Globe, Leaf, Users, MapPin,
  Award, ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';

const stats = [
  { num: '10+', label: 'Years of Experience', icon: Award },
  { num: '15,000+', label: 'Happy Travelers', icon: Users },
  { num: '200+', label: 'Unique Tours', icon: MapPin },
  { num: '50+', label: 'Destinations', icon: Globe },
];

const values = [
  {
    icon: Heart,
    title: 'Authentic Experiences',
    desc: 'We connect you with real people, real food, and real culture — not tourist traps. Every trip is designed for depth, not just sightseeing.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Travel',
    desc: 'We partner with local communities, minimize environmental impact, and ensure tourism benefits the people and places we visit.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    desc: 'Licensed and fully insured, we have safely guided thousands of travelers. Your safety and comfort are our top priorities.',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    desc: 'Our team are all Vietnamese locals who know every hidden alley, secret beach, and family-run restaurant worth visiting.',
  },
];

interface TeamMember {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Hannah Phung',
    role: 'Founder and CEO',
    image: '/images/members/hannah.jpeg',
    imagePosition: '35% 25%',
    bio: 'Born in Vinh Phuc, Hannah founded Viet Entry Travel to share Vietnam\'s authentic beauty, rich culture, and warm hospitality with travelers worldwide.',
  },
  {
    name: 'Richard Jacob',
    role: 'Head of Operations & Tour Support',
    image: '/images/members/richard.jpeg',
    imagePosition: 'center 15%',
    bio: 'Oversees daily operations and leads contingency response, providing direct backup and rapid resolution for any unexpected issues during tours.',
  },
];

const partners = [
  'Vietnam Tourism Board',
  'TripAdvisor Partner',
  'IATA Accredited',
  'Sustainable Travel Pledge',
  'PATA Member',
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero" style={{ minHeight: '500px' }}>
          <div className="service-hero__bg">
            <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80" alt="About Viet Entry Travel" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              Our Story
            </h1>
            <p className="service-hero__subtitle">
              Born from a love of Vietnam, built to share its wonders with the world.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="about-mission section">
          <div className="container">
            <div className="about-mission__inner">
              <span className="section-label">✦ Our Mission</span>
              <h2 className="about-mission__text">
                We believe travel should be <em>transformative</em> — not transactional.
                Every journey we create is designed to bring you closer to the heart of Vietnam,
                its people, its flavors, and its stories.
              </h2>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats">
          <div className="container">
            <div className="about-stats__grid">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stats__item">
                  <stat.icon size={28} className="about-stats__icon" />
                  <span className="about-stats__num">{stat.num}</span>
                  <span className="about-stats__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="about-story section">
          <div className="container">
            <div className="about-story__grid">
              <div className="about-story__images">
                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80"
                  alt="Ha Long Bay"
                  className="about-story__img about-story__img--1"
                />
                <img
                  src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80"
                  alt="Vietnam landscape"
                  className="about-story__img about-story__img--2"
                />
              </div>
              <div className="about-story__content">
                <span className="section-label">✦ How It Started</span>
                <h2 className="section-title">From Vinh Phuc to the World</h2>
                <p>
                  Viet Entry Travel was founded by Hannah Phung, a Vinh Phuc native who grew up watching
                  travelers fall in love with Vietnam's beauty — but too often missing its soul. She started
                  with a simple idea: create travel experiences that go beyond the surface.
                </p>
                <p>
                  What began as a passionate commitment to genuine hospitality has grown into a full-service travel
                  company trusted by over 15,000 travelers from 80+ countries. But our philosophy remains
                  the same: <strong>real people, real places, real stories.</strong>
                </p>
                <p>
                  Today, we offer everything from curated tours and shore excursions to eVisa processing,
                  airport transfers, and eSIM connectivity — making Vietnam accessible, seamless, and
                  unforgettable for every type of traveler.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values section">
          <div className="container">
            <div className="about-values__header">
              <span className="section-label">✦ What We Stand For</span>
              <h2 className="section-title">Our Values</h2>
            </div>
            <div className="about-values__grid">
              {values.map((v) => (
                <div key={v.title} className="about-values__card">
                  <div className="about-values__icon">
                    <v.icon size={28} />
                  </div>
                  <h3 className="about-values__card-title">{v.title}</h3>
                  <p className="about-values__card-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-team section">
          <div className="container">
            <div className="about-team__header">
              <span className="section-label">✦ Meet The Team</span>
              <h2 className="section-title">The People Behind Your Trips</h2>
              <p className="about-team__subtitle">
                We're a team of local Vietnamese travelers, guides, and dreamers who live and breathe this beautiful country every day.
              </p>
            </div>
            <div className="about-team__grid">
              {team.map((member) => (
                <div key={member.name} className="about-team__card">
                  <div className="about-team__card-image">
                    <img
                      src={member.image}
                      alt={member.name}
                      style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                    />
                  </div>
                  <div className="about-team__card-info">
                    <h3 className="about-team__card-name">{member.name}</h3>
                    <span className="about-team__card-role">{member.role}</span>
                    <p className="about-team__card-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="about-partners section">
          <div className="container">
            <div className="about-partners__header">
              <span className="section-label">✦ Partners & Certifications</span>
              <h2 className="section-title">Trusted by the Best</h2>
            </div>
            <div className="about-partners__grid">
              {partners.map((p) => (
                <div key={p} className="about-partners__badge">
                  <Award size={20} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Ready to Experience Vietnam?</h2>
            <p>Let us create a journey that's uniquely yours. Get in touch with our team today.</p>
            <div className="service-cta__actions">
              <Button href="/#contact" variant="accent" size="lg">Get Free Quote</Button>
              <Link to="/tours" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
                Browse Tours <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
