import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, Calendar, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Must-Visit Places in Vietnam for 2026',
    excerpt: 'From the emerald waters of Ha Long Bay to the golden lanterns of Hoi An — here are the destinations you absolutely cannot miss this year.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80',
    category: 'Destinations',
    author: 'Minh Tran',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Complete Vietnam eVisa Guide: Everything You Need to Know',
    excerpt: 'Step-by-step instructions for obtaining your Vietnam eVisa in 2026 — eligibility, costs, processing times, and common mistakes to avoid.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80',
    category: 'Visa Guide',
    author: 'Lan Nguyen',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Best Vietnamese Street Food: A Foodie\'s Ultimate Bucket List',
    excerpt: 'Phở, bánh mì, bún chả, and beyond — discover the flavors that make Vietnamese cuisine one of the world\'s most beloved.',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    category: 'Food & Culture',
    author: 'Minh Tran',
    date: 'Feb 5, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'What to Pack for Vietnam: Season-by-Season Guide',
    excerpt: 'From the humid south to the cool mountains of the north — a comprehensive packing guide for every season and region.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
    category: 'Travel Tips',
    author: 'Hoa Le',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Hidden Gems of Northern Vietnam: Beyond Ha Long Bay',
    excerpt: 'Discover the breathtaking landscapes of Ha Giang Loop, the serene beauty of Ban Gioc Waterfall, and the terraced hills of Mu Cang Chai.',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    category: 'Destinations',
    author: 'Tuan Vo',
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'A Guide to Vietnam\'s UNESCO World Heritage Sites',
    excerpt: 'Vietnam boasts 8 UNESCO World Heritage Sites — from the ancient town of Hoi An to the spectacular Phong Nha caves. Here\'s how to visit them all.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    category: 'Destinations',
    author: 'Lan Nguyen',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 7,
    title: 'How to Get Around Vietnam: Transport Tips for Travelers',
    excerpt: 'Motorbikes, sleeper buses, trains, and domestic flights — everything you need to know about traveling within Vietnam.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    category: 'Travel Tips',
    author: 'Hoa Le',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 8,
    title: 'Vietnamese Coffee Culture: From Ca Phe Sua Da to Egg Coffee',
    excerpt: 'Vietnam is the world\'s second-largest coffee producer. Dive into its unique coffee culture — from street-side cafes to highland plantations.',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    category: 'Food & Culture',
    author: 'Minh Tran',
    date: 'Jan 2, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 9,
    title: 'Best Beaches in Vietnam: Coastal Paradise Guide',
    excerpt: 'From the turquoise waters of Phu Quoc to the dramatic coastline of Quy Nhon — discover Vietnam\'s most stunning beaches for every type of traveler.',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    category: 'Destinations',
    author: 'Tuan Vo',
    date: 'Dec 25, 2025',
    readTime: '8 min read',
    featured: false,
  },
];

const categories = ['All', 'Destinations', 'Food & Culture', 'Travel Tips', 'Visa Guide'];

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = blogPosts.find((p) => p.featured);
  const filtered = blogPosts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchSearch && matchCategory && !p.featured;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero__bg">
            <img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80" alt="Vietnam Travel Blog" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              Vietnam Travel Blog
            </h1>
            <p className="service-hero__subtitle">
              Travel tips, destination guides, and stories to inspire your next Vietnam adventure.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {featured && (
          <section className="blog-page-featured section">
            <div className="container">
              <Link to={`/blog/${featured.id}`} className="blog-page-featured__card">
                <div className="blog-page-featured__image">
                  <img src={featured.image} alt={featured.title} />
                  <div className="blog-page-featured__overlay"></div>
                </div>
                <div className="blog-page-featured__content">
                  <span className="blog-page__tag blog-page__tag--accent">{featured.category}</span>
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
            <div className="sp-search">
              <div className="sp-search__bar">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search articles..."
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
                    <img src={post.image} alt={post.title} />
                    <span className="blog-page__tag">{post.category}</span>
                  </div>
                  <div className="blog-page__card-body">
                    <h3 className="blog-page__card-title">{post.title}</h3>
                    <p className="blog-page__card-excerpt">{post.excerpt}</p>
                    <div className="blog-page__card-meta">
                      <span><User size={12} /> {post.author}</span>
                      <span><Calendar size={12} /> {post.date}</span>
                      <span><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <span className="blog-page__card-link">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="sp-empty">
                <p>No articles match your search. Try a different keyword or category.</p>
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
