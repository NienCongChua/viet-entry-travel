import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blog';
import './ServicePage.css';

const categories = ['All', 'Destinations', 'Food & Culture', 'Travel Tips', 'Visa Guide'];

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filtered = blogPosts.filter((p) => {
    const query = search.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query);

    const matchCategory = activeCategory === 'All' || p.category === activeCategory;

    // When searching or filtering by a category different from the featured post's,
    // include all matching posts. Otherwise omit the top featured post from the grid.
    if (search || activeCategory !== 'All') {
      return matchSearch && matchCategory;
    }
    return matchSearch && matchCategory && p.id !== featured.id;
  });

  return (
    <>
      <Navbar />
      <main className="blog-page-main">
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img
              src="/images/tours/halong-bay-cruise.jpg"
              alt="Vietnam Travel Field Guides"
            />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <BookOpen size={16} /> Vietnam Field Guides & Insights
            </span>
            <h1
              className="service-hero__title"
              style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}
            >
              Vietnam Travel Journal
            </h1>
            <p className="service-hero__subtitle">
              Local expertise, entry regulations, culinary adventures, and authentic itineraries curated by licensed guides across Vietnam.
            </p>
          </div>
        </section>

        {/* Featured Article (Only show on 'All' category without search) */}
        {!search && activeCategory === 'All' && featured && (
          <section className="blog-page-featured section" style={{ paddingBottom: 0 }}>
            <div className="container">
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="section-label">✦ Featured Editorial</span>
              </div>
              <Link to={`/blog/${featured.id}`} className="blog-page-featured__card">
                <div className="blog-page-featured__image">
                  <img src={featured.heroImage} alt={featured.title} />
                  <div className="blog-page-featured__overlay"></div>
                </div>
                <div className="blog-page-featured__content">
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="blog-page__tag blog-page__tag--accent">{featured.category}</span>
                    <span className="blog-page__tag glass-card" style={{ color: '#fff' }}>{featured.tag}</span>
                  </div>
                  <h2 className="blog-page-featured__title">{featured.title}</h2>
                  <p className="blog-page-featured__excerpt">{featured.excerpt}</p>
                  <div className="blog-page-featured__meta">
                    <span><User size={14} /> {featured.author}</span>
                    <span><Calendar size={14} /> {featured.date}</span>
                    <span><Clock size={14} /> {featured.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Search + Category Filter */}
        <section className="blog-page-articles section">
          <div className="container">
            <div className="sp-search" style={{ marginBottom: '2.5rem' }}>
              <div className="sp-search__bar">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search articles, guides, eVisa rules, destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="sp-filters">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`sp-filter-pill ${activeCategory === cat ? 'sp-filter-pill--active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Article Grid */}
            <div className="blog-page__grid">
              {filtered.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="blog-page__card">
                  <div className="blog-page__card-image">
                    <img src={post.heroImage} alt={post.title} loading="lazy" />
                    <span className="blog-page__tag">{post.category}</span>
                  </div>
                  <div className="blog-page__card-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                        {post.tag}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="blog-page__card-title">{post.title}</h3>
                    <p className="blog-page__card-excerpt">{post.excerpt}</p>
                    <div className="blog-page__card-meta">
                      <span><User size={12} /> {post.author}</span>
                      <span><Calendar size={12} /> {post.date}</span>
                    </div>
                    <span className="blog-page__card-link">
                      Read Full Guide <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="sp-empty" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                  No guides found matching "{search}". Try searching for keywords like "visa", "food", "Hanoi", "Ha Long", or "packing".
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => {
                    setSearch('');
                    setActiveCategory('All');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
