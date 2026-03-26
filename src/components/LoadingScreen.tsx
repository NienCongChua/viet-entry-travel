import './LoadingScreen.css';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <div className={`loading-screen ${!isLoading ? 'loading-screen--hidden' : ''}`}>
      <img
        className="loading-screen__logo"
        src="/icon/icon-1000x1000.png"
        alt="Viet Entry Travel"
      />
      <div className="loading-screen__spinner"></div>
      <p className="loading-screen__text">
        Loading<span className="loading-screen__dots"></span>
      </p>
    </div>
  );
};

export default LoadingScreen;
