import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import './Navbar.css';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Culinary Experiences', href: '/culinary' },
  { label: 'Tour Packages', href: '/tours' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top and close mobile menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Auto-close mobile menu when resizing to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detect pages with white/light backgrounds (no dark hero)
  const isLightPage = /^\/(tours)\//.test(location.pathname) || location.pathname === '/checkout';
  const isRoute = (href: string) => !href.startsWith('/#');


  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isLightPage && !isScrolled ? 'navbar--light' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img
            src="/icon/icon-1000x1000.png"
            alt="Viet Entry Travel"
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">Viet Entry Travel</span>
        </Link>

        <nav className="navbar__nav">
          {navLinks.map((link) =>
            isRoute(link.href) ? (
              <Link key={link.label} to={link.href} className="navbar__link">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="navbar__actions">
          <Button href="/#contact" variant="primary" size="md">
            Request a Quote
          </Button>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isMobileMenuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navLinks.map((link) =>
            isRoute(link.href) ? (
              <Link
                key={link.label}
                to={link.href}
                className="navbar__mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <div onClick={() => setIsMobileMenuOpen(false)}>
            <Button href="/#contact" variant="primary" fullWidth>
              Request a Quote
            </Button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
