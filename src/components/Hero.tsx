import { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onVideoReady?: () => void;
}

interface HeroSlide {
  image: string;
  location: string;
  badge: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: '/images/tours/halong-bay-cruise.jpg',
    location: 'Ha Long Bay',
    badge: 'UNESCO World Heritage',
    alt: 'Ha Long Bay emerald waters and limestone karsts',
  },
  {
    image: '/images/tours/sapa-rice-terrace.jpg',
    location: 'Sapa Terraces',
    badge: 'Northwest Highlands',
    alt: 'Sapa cascading green terraced rice fields',
  },
  {
    image: '/images/tours/hoi-an-ancient-town.jpg',
    location: 'Hoi An Ancient Town',
    badge: 'Historic Heritage',
    alt: 'Hoi An lantern-lit ancient river street',
  },
  {
    image: '/images/tours/ba-na-hills-golden-bridge.jpg',
    location: 'Golden Bridge, Da Nang',
    badge: 'Modern Marvel',
    alt: 'Golden Bridge held by giant stone hands in Da Nang',
  },
];

const SLIDE_DURATION = 6500; // 6.5 seconds per slide

const Hero = ({ onVideoReady }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Preload first slide immediately and inform parent loader
  useEffect(() => {
    let isMounted = true;
    const firstImg = new Image();
    firstImg.src = HERO_SLIDES[0].image;

    const handleFirstImageLoaded = () => {
      if (isMounted && onVideoReady) {
        onVideoReady();
      }
    };

    if (firstImg.complete) {
      handleFirstImageLoaded();
    } else {
      firstImg.onload = handleFirstImageLoaded;
      firstImg.onerror = handleFirstImageLoaded;
    }

    // Preload remaining slides silently in background
    for (let i = 1; i < HERO_SLIDES.length; i++) {
      const img = new Image();
      img.src = HERO_SLIDES[i].image;
    }

    return () => {
      isMounted = false;
    };
  }, [onVideoReady]);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(goToNextSlide, SLIDE_DURATION);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPaused, goToNextSlide]);

  // Pause when browser tab is inactive to save CPU/battery
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero carousel"
    >
      {/* Background slider with Ken Burns effect */}
      <div className="hero__slider">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.image}
              className={`hero__slide hero__slide--${index} ${
                isActive ? 'hero__slide--active' : ''
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero__slide-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </div>
          );
        })}
        <div className="hero__bg-overlay"></div>
      </div>

      {/* Centered content */}
      <div className="hero__content">
        <p className="hero__brand">Viet Entry Travel</p>
        <h1 className="hero__title">
          Your Journey to Vietnam
          <br />
          Starts Here!
        </h1>
        <div className="hero__actions">
          <a href="/#contact" className="hero__btn hero__btn--filled">
            Join Us Now!
          </a>
          <a href="#services" className="hero__btn hero__btn--outline">
            Learn More
          </a>
        </div>
      </div>

      {/* Controls & Information Bar */}
      <div className="hero__controls">
        {/* Destination Tag */}
        <div className="hero__location" key={`loc-${currentIndex}`}>
          <MapPin size={15} className="hero__location-icon" />
          <span className="hero__location-name">
            {HERO_SLIDES[currentIndex].location}
          </span>
          <span className="hero__location-badge">
            {HERO_SLIDES[currentIndex].badge}
          </span>
        </div>

        {/* Slide Indicators & Navigation Arrows */}
        <div className="hero__nav">
          <button
            type="button"
            className="hero__nav-arrow"
            onClick={goToPrevSlide}
            aria-label="Previous destination"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="hero__indicators" role="tablist" aria-label="Destination slides">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.location}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to ${slide.location}`}
                className={`hero__indicator ${
                  index === currentIndex ? 'hero__indicator--active' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <span
                  key={`progress-${index}-${currentIndex === index}`}
                  className="hero__indicator-progress"
                ></span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="hero__nav-arrow"
            onClick={goToNextSlide}
            aria-label="Next destination"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
