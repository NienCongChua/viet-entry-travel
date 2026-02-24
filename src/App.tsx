import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TourPage from './pages/TourPage';
import TourDetailPage from './pages/TourDetailPage';
import ExcursionsPage from './pages/ExcursionsPage';
import ExcursionDetailPage from './pages/ExcursionDetailPage';
import EVisaPage from './pages/EVisaPage';
import TransferPage from './pages/TransferPage';
import ESimPage from './pages/ESimPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutPage from './pages/AboutPage';
import CheckoutPage from './pages/CheckoutPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesOverviewPage />} />
        <Route path="/tours" element={<TourPage />} />
        <Route path="/tours/:id" element={<TourDetailPage />} />
        <Route path="/excursions" element={<ExcursionsPage />} />
        <Route path="/excursions/:id" element={<ExcursionDetailPage />} />
        <Route path="/evisa" element={<EVisaPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/esim" element={<ESimPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
