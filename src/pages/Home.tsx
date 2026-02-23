import { useState, useEffect } from 'react';
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

  // Fallback: hide loader after max 4 seconds even if iframe hasn't fired onLoad
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <main>
        <Hero onVideoLoad={handleVideoLoad} />
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
