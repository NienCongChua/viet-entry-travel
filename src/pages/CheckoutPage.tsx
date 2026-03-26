import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft, CreditCard, Shield, Lock, CheckCircle,
  Calendar, Users, ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const tourTitle = searchParams.get('tour') || 'Ha Long Bay Luxury Cruise — 2 Days';
  const tourPrice = Number(searchParams.get('price')) || 189;
  const participants = Number(searchParams.get('pax')) || 1;
  const dateStr = searchParams.get('date') || 'Not selected';
  const tourType = searchParams.get('type') || 'tour';

  const subtotal = tourPrice * participants;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee;

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank' | 'momo'>('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: '',
    agreeTerms: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking confirmed! (Demo) — Thank you for your reservation.');
  };

  return (
    <>
      <Navbar />
      <main className="booking-page">
        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
          {/* Back */}
          <Link to={`/${tourType}s`} className="booking-back-link" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> Back to browsing
          </Link>

          <h1 className="checkout-title">Complete Your Booking</h1>
          <p className="checkout-subtitle">You are just one step away from an amazing experience!</p>

          <form className="checkout-layout" onSubmit={handleSubmit}>
            {/* Left: Form */}
            <div className="checkout-form">
              {/* Customer Info */}
              <div className="checkout-section">
                <h2 className="checkout-section__title">
                  <span className="checkout-section__step">1</span>
                  Contact Information
                </h2>
                <div className="checkout-field-row">
                  <div className="checkout-field">
                    <label>First Name *</label>
                    <input type="text" required placeholder="John" value={formData.firstName} onChange={(e) => handleChange('firstName', e.target.value)} />
                  </div>
                  <div className="checkout-field">
                    <label>Last Name *</label>
                    <input type="text" required placeholder="Doe" value={formData.lastName} onChange={(e) => handleChange('lastName', e.target.value)} />
                  </div>
                </div>
                <div className="checkout-field-row">
                  <div className="checkout-field">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
                  </div>
                  <div className="checkout-field">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="+1 234 567 8900" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                  </div>
                </div>
                <div className="checkout-field">
                  <label>Country / Region *</label>
                  <div className="checkout-select-wrap">
                    <select required value={formData.country} onChange={(e) => handleChange('country', e.target.value)}>
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="CA">Canada</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="KR">South Korea</option>
                      <option value="SG">Singapore</option>
                      <option value="VN">Vietnam</option>
                      <option value="OTHER">Other</option>
                    </select>
                    <ChevronDown size={16} className="checkout-select-icon" />
                  </div>
                </div>
                <div className="checkout-field">
                  <label>Special Requests (optional)</label>
                  <textarea rows={3} placeholder="Any dietary requirements, mobility needs, or special occasions..." value={formData.specialRequests} onChange={(e) => handleChange('specialRequests', e.target.value)} />
                </div>
              </div>

              {/* Payment */}
              <div className="checkout-section">
                <h2 className="checkout-section__title">
                  <span className="checkout-section__step">2</span>
                  Payment Method
                </h2>

                <div className="checkout-payment-methods">
                  <button
                    type="button"
                    className={`checkout-payment-option ${paymentMethod === 'card' ? 'checkout-payment-option--active' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <CreditCard size={20} />
                    <span>Credit / Debit Card</span>
                    <div className="checkout-payment-logos">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png" alt="Mastercard" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" />
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`checkout-payment-option ${paymentMethod === 'paypal' ? 'checkout-payment-option--active' : ''}`}
                    onClick={() => setPaymentMethod('paypal')}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png" alt="PayPal" style={{ height: 20 }} />
                    <span>PayPal</span>
                  </button>
                  <button
                    type="button"
                    className={`checkout-payment-option ${paymentMethod === 'momo' ? 'checkout-payment-option--active' : ''}`}
                    onClick={() => setPaymentMethod('momo')}
                  >
                    <span className="checkout-momo-icon">M</span>
                    <span>MoMo Wallet</span>
                  </button>
                  <button
                    type="button"
                    className={`checkout-payment-option ${paymentMethod === 'bank' ? 'checkout-payment-option--active' : ''}`}
                    onClick={() => setPaymentMethod('bank')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11"/></svg>
                    <span>Bank Transfer</span>
                  </button>
                </div>

                {/* Card form */}
                {paymentMethod === 'card' && (
                  <div className="checkout-card-form">
                    <div className="checkout-field">
                      <label>Cardholder Name *</label>
                      <input type="text" required placeholder="Name on card" value={formData.cardName} onChange={(e) => handleChange('cardName', e.target.value)} />
                    </div>
                    <div className="checkout-field">
                      <label>Card Number *</label>
                      <div className="checkout-input-icon">
                        <CreditCard size={16} className="checkout-input-icon__icon" />
                        <input type="text" required placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={(e) => handleChange('cardNumber', e.target.value)} />
                      </div>
                    </div>
                    <div className="checkout-field-row">
                      <div className="checkout-field">
                        <label>Expiry Date *</label>
                        <input type="text" required placeholder="MM / YY" value={formData.cardExpiry} onChange={(e) => handleChange('cardExpiry', e.target.value)} />
                      </div>
                      <div className="checkout-field">
                        <label>CVC *</label>
                        <input type="text" required placeholder="123" value={formData.cardCvc} onChange={(e) => handleChange('cardCvc', e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="checkout-alt-payment">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" className="checkout-alt-logo" />
                    <p>You will be redirected to PayPal to complete your payment securely.</p>
                  </div>
                )}

                {paymentMethod === 'momo' && (
                  <div className="checkout-alt-payment">
                    <div className="checkout-momo-logo">MoMo</div>
                    <p>Scan the QR code or enter your MoMo phone number to pay. MoMo is Vietnam's most popular e-wallet.</p>
                    <div className="checkout-field" style={{ maxWidth: 300 }}>
                      <label>MoMo Phone Number</label>
                      <input type="tel" placeholder="09xx xxx xxx" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="checkout-alt-payment">
                    <p>Transfer to the following bank account. Your booking will be confirmed once payment is received (typically 1-2 business days).</p>
                    <div className="checkout-bank-details">
                      <div><strong>Bank:</strong> Vietcombank</div>
                      <div><strong>Account Name:</strong> Viet Entry Travel Co., Ltd</div>
                      <div><strong>Account Number:</strong> 0071 0015 86789</div>
                      <div><strong>Branch:</strong> Ho Chi Minh City</div>
                      <div><strong>SWIFT:</strong> BFTVVNVX</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terms & Submit */}
              <div className="checkout-section">
                <label className="checkout-checkbox">
                  <input type="checkbox" required checked={formData.agreeTerms} onChange={(e) => handleChange('agreeTerms', e.target.checked)} />
                  <span>I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Cancellation Policy</a></span>
                </label>

                <button type="submit" className="checkout-submit-btn">
                  <Lock size={16} /> Confirm & Pay ${total.toFixed(2)}
                </button>

                <div className="checkout-security">
                  <Shield size={14} /> <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <aside className="checkout-summary">
              <div className="checkout-summary__card">
                <h3 className="checkout-summary__title">Order Summary</h3>

                <div className="checkout-summary__tour">
                  <h4>{tourTitle}</h4>
                  <div className="checkout-summary__meta">
                    <span><Calendar size={14} /> {dateStr}</span>
                    <span><Users size={14} /> {participants} participant{participants > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="checkout-summary__breakdown">
                  <div className="checkout-summary__row">
                    <span>${tourPrice} × {participants} pax</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="checkout-summary__row">
                    <span>Service fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="checkout-summary__divider"></div>
                  <div className="checkout-summary__row checkout-summary__row--total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="checkout-summary__guarantees">
                  <div><CheckCircle size={14} /> Free cancellation up to 24h</div>
                  <div><CheckCircle size={14} /> Best price guarantee</div>
                  <div><CheckCircle size={14} /> Instant confirmation</div>
                  <div><Shield size={14} /> Secure payment</div>
                </div>
              </div>

              <div className="checkout-help">
                <h4>Need Help?</h4>
                <p>Contact our travel experts 24/7</p>
                <a href="mailto:support@vietentrytravel.com" className="checkout-help__link">support@vietentrytravel.com</a>
                <a href="tel:+84123456789" className="checkout-help__link">+84 123 456 789</a>
              </div>
            </aside>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
