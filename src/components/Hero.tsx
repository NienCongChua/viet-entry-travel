import { useEffect, useRef } from 'react';
import './Hero.css';

interface HeroProps {
  onVideoReady?: () => void;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Hero = ({ onVideoReady }: HeroProps) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API script
    if (!document.getElementById('yt-iframe-api')) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }

    const createPlayer = () => {
      if (!playerRef.current || playerInstanceRef.current) return;

      playerInstanceRef.current = new window.YT.Player(playerRef.current, {
        videoId: 'k8m0SaGQ_1c',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'k8m0SaGQ_1c',
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          start: 10,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING === 1
            if (event.data === 1 && onVideoReady) {
              onVideoReady();
            }
          },
        },
      });
    };

    // If YT API is already loaded
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // Wait for API to load
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        createPlayer();
      };
    }

    return () => {
      if (playerInstanceRef.current?.destroy) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
      }
    };
  }, [onVideoReady]);

  return (
    <section className="hero">
      {/* Video background */}
      <div className="hero__bg">
        <div ref={playerRef} className="hero__bg-video"></div>
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
          <a href="#contact" className="hero__btn hero__btn--filled">
            Join Us Now!
          </a>
          <a href="#services" className="hero__btn hero__btn--outline">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
