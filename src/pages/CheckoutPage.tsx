import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  Clock,
  Calendar,
  Users,
  CheckCircle2,
  Send,
  Sparkles,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import './ServicePage.css';

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const tourTitle = searchParams.get('tour') || 'Vietnam Bespoke Travel Service';
  const participants = searchParams.get('pax') || '2';
  const dateStr = searchParams.get('date') || 'Flexible / Upcoming';

  const whatsappMessage = `Hello Viet Entry Travel, I am inquiring about booking "${tourTitle}" for ${participants} traveler(s), tentative date: ${dateStr}. Please advise on custom quotation & availability.`;

  return (
    <>
      <Navbar />
      <main className="booking-page">
        <div className="container" style={{ paddingTop: '6.5rem', paddingBottom: '3rem' }}>
          {/* Back */}
          <Link
            to="/tours"
            className="booking-back-link"
            style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#b31820', textDecoration: 'none', fontWeight: 600 }}
          >
            <ArrowLeft size={16} /> Back to browsing journeys
          </Link>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
              border: '1px solid #e2e8f0',
              maxWidth: '840px',
              margin: '0 auto 3rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 1rem',
                  background: 'rgba(37, 211, 102, 0.12)',
                  color: '#059669',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}
              >
                <Sparkles size={15} /> Direct Concierge Reservation
              </span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                Handcrafted Booking & Consultation
              </h1>
              <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
                To ensure 100% verified availability, personalized itineraries, and zero online payment errors, we arrange all reservations directly via <strong>WhatsApp ({WHATSAPP_DISPLAY})</strong> or personalized <strong>Quote Requests</strong> rather than automated website checkouts.
              </p>
            </div>

            {/* Selected Journey Summary Box */}
            <div
              style={{
                background: '#f8fafc',
                borderRadius: '14px',
                padding: '1.5rem',
                border: '1px solid #e2e8f0',
                marginBottom: '2rem',
              }}
            >
              <h3 style={{ fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                Selected Experience / Service
              </h3>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                {tourTitle}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: '#475569', fontSize: '0.92rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={16} style={{ color: '#4e6e1c' }} /> Date: <strong>{dateStr}</strong>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Users size={16} style={{ color: '#4e6e1c' }} /> Party: <strong>{participants} traveler{participants === '1' ? '' : 's'}</strong>
                </span>
              </div>
            </div>

            {/* Action Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn-whatsapp"
                style={{
                  padding: '1.1rem 2rem',
                  fontSize: '1.05rem',
                  borderRadius: '14px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <WhatsAppIcon size={24} />
                <span>Chat Instantly via WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>

              <a
                href="#contact"
                className="sp-btn-quote"
                style={{
                  padding: '1.1rem 2rem',
                  fontSize: '1.05rem',
                  borderRadius: '14px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Send size={20} />
                <span>Submit a Free Quote Request Below</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid #f1f5f9',
                paddingTop: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a', display: 'block' }}>Zero Payment Risk</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>No upfront card entry on web. Hand-verified bookings.</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Clock size={18} style={{ color: '#4e6e1c', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a', display: 'block' }}>Instant WhatsApp Reply</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Our local team responds within minutes to all inquiries.</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Shield size={18} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a', display: 'block' }}>Flexible Terms</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Free rescheduling and transparent cancellation policy.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Request a Quote Form */}
        <CTA defaultTour={tourTitle} id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
