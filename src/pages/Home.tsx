import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularTours from '../components/PopularTours';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Fallback: hide loader after max 2.5 seconds if network is slow
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Cross-page "Request a Quote" links land on /#contact — the browser can't
  // scroll to the section until React has mounted it, so do it manually.
  useEffect(() => {
    if (location.hash !== '#contact') return;
    const id = location.hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
    return () => clearTimeout(timer);
  }, [location.hash]);

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <main>
        <Hero onVideoReady={handleVideoReady} />
        <Services />
        <Destinations />
        <WhyChooseUs />
        <PopularTours />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
