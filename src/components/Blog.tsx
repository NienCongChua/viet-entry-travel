import { ArrowUpRight } from 'lucide-react';
import './Blog.css';

const featuredArticle = {
  title: 'Top 10 Must-Visit Places in Vietnam for 2026',
  description: 'From the emerald waters of Ha Long Bay to the golden lanterns of Hoi An — our curated list of destinations you cannot miss this year.',
  tag: 'Must Read',
  author: 'Minh Tran',
  role: 'Travel Expert',
  image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80',
};

const articles = [
  {
    title: 'Complete Vietnam eVisa Guide: Everything You Need to Know',
    tag: 'Visa Guide',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80',
  },
  {
    title: 'Best Vietnamese Street Food: A Foodie\'s Ultimate Bucket List',
    tag: 'Food & Culture',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600&q=80',
  },
  {
    title: 'What to Pack for Vietnam: Season-by-Season Packing Tips',
    tag: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80',
  },
];

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog__header">
          <span className="section-label">✦ Travel Blog</span>
          <h2 className="section-title">Vietnam Travel Insights</h2>
        </div>

        <div className="blog__grid">
          {/* Featured Article — large image with text overlay */}
          <a href="#" className="blog__featured">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="blog__featured-img" />
            <div className="blog__featured-overlay"></div>
            <div className="blog__featured-content">
              <span className="blog__tag glass-card">{featuredArticle.tag}</span>
              <h3 className="blog__featured-title">{featuredArticle.title}</h3>
              <p className="blog__featured-description">{featuredArticle.description}</p>
              <div className="blog__author">
                <div className="blog__author-avatar">{featuredArticle.author.charAt(0)}</div>
                <span className="blog__author-name">{featuredArticle.author}</span>
                <span className="blog__divider">·</span>
                <span className="blog__author-role">{featuredArticle.role}</span>
              </div>
            </div>
          </a>

          {/* Article Cards */}
          <div className="blog__articles">
            {articles.map((article, idx) => (
              <a
                key={article.title}
                href="#"
                className="blog__article-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="blog__article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="blog__article-info">
                  <span className="blog__tag blog__tag--solid">{article.tag}</span>
                  <h4 className="blog__article-title">{article.title}</h4>
                  <ArrowUpRight size={16} className="blog__article-arrow" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
