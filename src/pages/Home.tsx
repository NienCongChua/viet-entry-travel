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

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
