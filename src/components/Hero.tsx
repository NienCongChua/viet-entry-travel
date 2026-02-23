import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Video background */}
      <div className="hero__bg">
        <iframe
          className="hero__bg-video"
          src="https://www.youtube.com/embed/k8m0SaGQ_1c?si=IUHQWGr3FEyJJSHl&start=10&autoplay=1&mute=1&loop=1&playlist=k8m0SaGQ_1c&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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
