import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Video background */}
      <div className="hero__bg">
        <video
          className="hero__bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/video-background.mp4"
            type="video/mp4"
          />
        </video>
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
