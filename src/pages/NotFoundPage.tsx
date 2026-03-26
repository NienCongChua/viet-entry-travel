import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__code">404</div>
        <div className="not-found__icon">🧭</div>
        <h1 className="not-found__title">Oops! Page Not Found</h1>
        <p className="not-found__message">
          The page you're looking for seems to have wandered off on its own adventure.
          Let's get you back on track to explore Vietnam!
        </p>
        <div className="not-found__actions">
          <Link to="/" className="not-found__btn not-found__btn--primary">
            ← Back to Home
          </Link>
          <Link to="/tours" className="not-found__btn not-found__btn--secondary">
            Explore Tours
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
