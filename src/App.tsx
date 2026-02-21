import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TourPage from './pages/TourPage';
import ExcursionsPage from './pages/ExcursionsPage';
import EVisaPage from './pages/EVisaPage';
import TransferPage from './pages/TransferPage';
import ESimPage from './pages/ESimPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<TourPage />} />
        <Route path="/excursions" element={<ExcursionsPage />} />
        <Route path="/evisa" element={<EVisaPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/esim" element={<ESimPage />} />
      </Routes>
    </Router>
  );
}

export default App;
