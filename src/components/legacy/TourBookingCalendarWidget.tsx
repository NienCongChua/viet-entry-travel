import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart } from 'lucide-react';

/**
 * ============================================================================
 * LEGACY BACKUP COMPONENT: TourBookingCalendarWidget
 * ============================================================================
 * Preserves the participant selection widget (JOIN-IN / PRIVATE),
 * month calendar date picker (Choose a date), and booking summary with
 * Checkout button in case direct online booking is reactivated in the future.
 * ============================================================================
 */

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Mon=0
};
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export interface TourBookingCalendarWidgetProps {
  tour: {
    id: number;
    title: string;
    price: number;
    gallery: string[];
  };
  type?: 'tour' | 'excursion';
}

export const TourBookingCalendarWidget = ({ tour, type = 'tour' }: TourBookingCalendarWidgetProps) => {
  const navigate = useNavigate();

  const [joinIn, setJoinIn] = useState(1);
  const [privateCount, setPrivateCount] = useState(0);

  const now = new Date();
  const [calYear, setCalYear] = useState(now.getFullYear());
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);
  const today = now.getDate();
  const isCurrentMonth = calYear === now.getFullYear() && calMonth === now.getMonth();

  const prevMonth = () => {
    if (calMonth === 0) {
      setCalYear(calYear - 1);
      setCalMonth(11);
    } else {
      setCalMonth(calMonth - 1);
    }
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (calMonth === 11) {
      setCalYear(calYear + 1);
      setCalMonth(0);
    } else {
      setCalMonth(calMonth + 1);
    }
    setSelectedDate(null);
  };

  const totalParticipants = joinIn + privateCount;
  const totalPrice = totalParticipants * tour.price;

  const handleCheckout = () => {
    const params = new URLSearchParams({
      tour: tour.title,
      price: String(tour.price),
      pax: String(totalParticipants),
      date: selectedDate ? `${selectedDate} ${MONTH_NAMES[calMonth]} ${calYear}` : '',
      type,
    });
    navigate(`/checkout?${params.toString()}`);
  };

  return (
    <div className="booking-widget">
      {/* Participants */}
      <div className="booking-widget__section">
        <h3 className="booking-widget__title">Participants</h3>
        <div className="booking-participant">
          <span className="booking-participant__label">JOIN-IN</span>
          <div className="booking-participant__controls">
            <button
              type="button"
              className="booking-counter-btn"
              onClick={() => setJoinIn(Math.max(0, joinIn - 1))}
              disabled={joinIn <= 0}
            >
              <Minus size={16} />
            </button>
            <span className="booking-counter-val">{joinIn}</span>
            <button
              type="button"
              className="booking-counter-btn"
              onClick={() => setJoinIn(joinIn + 1)}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        <div className="booking-participant">
          <span className="booking-participant__label">PRIVATE</span>
          <div className="booking-participant__controls">
            <button
              type="button"
              className="booking-counter-btn"
              onClick={() => setPrivateCount(Math.max(0, privateCount - 1))}
              disabled={privateCount <= 0}
            >
              <Minus size={16} />
            </button>
            <span className="booking-counter-val">{privateCount}</span>
            <button
              type="button"
              className="booking-counter-btn"
              onClick={() => setPrivateCount(privateCount + 1)}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Choose a date (Calendar) */}
      <div className="booking-widget__section">
        <h3 className="booking-widget__title">Choose a date</h3>
        <div className="booking-calendar">
          <div className="booking-calendar__nav">
            <button type="button" onClick={prevMonth} className="booking-calendar__arrow">
              <ChevronLeft size={18} />
            </button>
            <span className="booking-calendar__month">
              {MONTH_NAMES[calMonth]} {calYear}
            </span>
            <button type="button" onClick={nextMonth} className="booking-calendar__arrow">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="booking-calendar__weekdays">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="booking-calendar__days">
            {Array.from({ length: firstDay }).map((_, i) => (
              <span key={`empty-${i}`} className="booking-calendar__day booking-calendar__day--empty"></span>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isPast = isCurrentMonth && day < today;
              const isSelected = selectedDate === day;
              const isWeekend = (firstDay + i) % 7 === 5 || (firstDay + i) % 7 === 6;
              return (
                <button
                  key={day}
                  type="button"
                  className={`booking-calendar__day ${isPast ? 'booking-calendar__day--past' : ''} ${isSelected ? 'booking-calendar__day--selected' : ''} ${isWeekend ? 'booking-calendar__day--weekend' : ''}`}
                  disabled={isPast}
                  onClick={() => setSelectedDate(day)}
                >
                  <span className="booking-calendar__day-num">{day}</span>
                  {!isPast && <span className="booking-calendar__day-price">${tour.price}</span>}
                </button>
              );
            })}
          </div>
          <p className="booking-calendar__note">Showing prices in USD (US Dollars)</p>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="booking-widget__section">
        <h3 className="booking-widget__title">Booking Summary</h3>
        <div className="booking-summary">
          <div className="booking-summary__card">
            <div className="booking-summary__info">
              <h4 className="booking-summary__tour-title">{tour.title}</h4>
              {tour.gallery[0] && (
                <img src={tour.gallery[0]} alt="" className="booking-summary__thumb" />
              )}
            </div>
            <div className="booking-summary__details">
              {selectedDate && (
                <span className="booking-summary__date">
                  <Calendar size={13} /> {selectedDate} {MONTH_NAMES[calMonth]} {calYear}
                </span>
              )}
              {joinIn > 0 && <span className="booking-summary__line">JOIN-IN: {joinIn}</span>}
              {privateCount > 0 && <span className="booking-summary__line">PRIVATE: {privateCount}</span>}
            </div>
          </div>
          <div className="booking-summary__total">
            <span>Total:</span>
            <span className="booking-summary__price">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <button
        type="button"
        className="booking-checkout-btn"
        disabled={totalParticipants === 0 || !selectedDate}
        onClick={handleCheckout}
      >
        Checkout <ShoppingCart size={16} />
      </button>

      <div className="booking-widget__trust">
        <span>✓ Free cancellation available</span>
        <span>✓ Best price guarantee</span>
        <span>✓ Instant confirmation</span>
      </div>
    </div>
  );
};

export default TourBookingCalendarWidget;
