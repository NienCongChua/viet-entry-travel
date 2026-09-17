import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blog';
import './Blog.css';

const Blog = () => {
  const featuredArticle = blogPosts[0];
  const sideArticles = blogPosts.slice(1, 4);

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog__header">
          <span className="section-label">✦ Travel Blog & Field Guides</span>
          <h2 className="section-title">Vietnam Travel Insights</h2>
          <p className="blog__subtitle">
            Authentic local advice, visa regulations, hidden trails, and culinary guides curated by our on-the-ground team.
          </p>
        </div>

        <div className="blog__grid">
          {/* Featured Article — large image with text overlay */}
          <Link to={`/blog/${featuredArticle.id}`} className="blog__featured">
            <img
              src={featuredArticle.heroImage}
              alt={featuredArticle.title}
              className="blog__featured-img"
              loading="lazy"
            />
            <div className="blog__featured-overlay"></div>
            <div className="blog__featured-content">
              <span className="blog__tag glass-card">{featuredArticle.tag}</span>
              <h3 className="blog__featured-title">{featuredArticle.title}</h3>
              <p className="blog__featured-description">{featuredArticle.excerpt}</p>
              <div className="blog__meta-row">
                <div className="blog__author">
                  <div className="blog__author-avatar">{featuredArticle.author.charAt(0)}</div>
                  <span className="blog__author-name">{featuredArticle.author}</span>
                  <span className="blog__divider">·</span>
                  <span className="blog__author-role">{featuredArticle.authorRole}</span>
                </div>
                <div className="blog__read-info">
                  <span><Calendar size={13} /> {featuredArticle.date}</span>
                  <span className="blog__divider">·</span>
                  <span><Clock size={13} /> {featuredArticle.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article Cards */}
          <div className="blog__articles">
            {sideArticles.map((article, idx) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="blog__article-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="blog__article-image">
                  <img src={article.heroImage} alt={article.title} loading="lazy" />
                </div>
                <div className="blog__article-info">
                  <div className="blog__article-header">
                    <span className="blog__tag blog__tag--solid">{article.tag}</span>
                    <span className="blog__article-time"><Clock size={12} /> {article.readTime}</span>
                  </div>
                  <h4 className="blog__article-title">{article.title}</h4>
                  <div className="blog__article-footer">
                    <span className="blog__article-date">{article.date}</span>
                    <span className="blog__article-arrow-wrapper">
                      Read Guide <ArrowUpRight size={15} className="blog__article-arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="blog__footer">
          <Link to="/blog" className="blog__view-all-btn">
            <span>Explore All 9 Vietnam Guides & Travel Insights</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;

