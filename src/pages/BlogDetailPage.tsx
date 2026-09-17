import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  MapPin,
  ShieldCheck,
  Plane,
  Wifi,
  Compass
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts, type BlogPost } from '../data/blog';
import './ServicePage.css';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  // Match by id (numeric) or slug fallback
  const post: BlogPost =
    blogPosts.find((p) => p.id === Number(id) || p.slug === id) || blogPosts[0];

  const related = (post.relatedPosts || [])
    .map((rid) => blogPosts.find((p) => p.id === rid))
    .filter(Boolean) as BlogPost[];

  const headings = post.content.filter((b) => b.type === 'heading');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    if (!sectionId) return;
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="blog-detail-main">
        {/* Hero */}
        <section className="service-hero" style={{ minHeight: '520px' }}>
          <div className="service-hero__bg">
            <img src={post.heroImage} alt={post.title} />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <div className="blog-detail__hero-nav">
              <Link to="/blog" className="detail-back-link">
                <ArrowLeft size={16} /> All Travel Guides
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="blog-page__tag blog-page__tag--accent">{post.category}</span>
              <span className="blog-page__tag glass-card" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                {post.tag}
              </span>
            </div>
            <h1
              className="service-hero__title"
              style={{
                fontFamily: "'Georgia', serif",
                maxWidth: '880px',
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </h1>
            <div className="detail-hero-meta">
              <span className="detail-hero-meta__item">
                <User size={16} /> {post.author}
              </span>
              <span className="detail-hero-meta__item">
                <Calendar size={16} /> {post.date}
              </span>
              <span className="detail-hero-meta__item">
                <Clock size={16} /> {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="blog-detail section">
          <div className="container">
            <div className="blog-detail__layout">
              <article className="blog-detail__body">
                {post.content.map((block, i) => {
                  switch (block.type) {
                    case 'heading':
                      return (
                        <h2
                          key={i}
                          id={block.id}
                          className="blog-detail__heading"
                        >
                          {block.body}
                        </h2>
                      );

                    case 'text':
                      return (
                        <p key={i} className="blog-detail__text">
                          {block.body}
                        </p>
                      );

                    case 'image':
                      return (
                        <figure key={i} className="blog-detail__figure">
                          <img
                            src={block.src}
                            alt={block.caption || post.title}
                            loading="lazy"
                          />
                          {block.caption && <figcaption>{block.caption}</figcaption>}
                        </figure>
                      );

                    case 'tip':
                      return (
                        <div key={i} className="blog-detail__tip">
                          {block.body}
                        </div>
                      );

                    case 'quote':
                      return (
                        <blockquote key={i} className="blog-detail__quote">
                          <p>{block.body}</p>
                          {block.author && <cite>{block.author}</cite>}
                        </blockquote>
                      );

                    case 'callout':
                      return (
                        <div key={i} className="blog-detail__callout">
                          <div className="blog-detail__callout-content">
                            <span className="blog-detail__callout-badge">Expert Service</span>
                            <h3 className="blog-detail__callout-title">
                              {block.calloutData?.title}
                            </h3>
                            <p className="blog-detail__callout-text">
                              {block.calloutData?.text}
                            </p>
                          </div>
                          {block.calloutData?.buttonHref && (
                            <Link
                              to={block.calloutData.buttonHref}
                              className="blog-detail__callout-btn"
                            >
                              <span>{block.calloutData.buttonText}</span>
                              <ArrowRight size={16} />
                            </Link>
                          )}
                        </div>
                      );

                    case 'table':
                      return (
                        <div key={i} className="blog-detail__table-wrap">
                          <table className="blog-detail__table">
                            {block.tableData?.headers && (
                              <thead>
                                <tr>
                                  {block.tableData.headers.map((h, thIdx) => (
                                    <th key={thIdx}>{h}</th>
                                  ))}
                                </tr>
                              </thead>
                            )}
                            <tbody>
                              {block.tableData?.rows.map((row, rowIdx) => (
                                <tr key={rowIdx}>
                                  {row.map((cell, cellIdx) => (
                                    <td key={cellIdx}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );

                    default:
                      return null;
                  }
                })}

                {/* Share */}
                <div className="blog-detail__share">
                  <span>Share this guide with fellow travelers:</span>
                  <button
                    className={`blog-detail__share-btn ${copied ? 'blog-detail__share-btn--copied' : ''}`}
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check size={16} color="var(--color-primary)" /> Copied Link!
                      </>
                    ) : (
                      <>
                        <Share2 size={16} /> Copy Article Link
                      </>
                    )}
                  </button>
                </div>

                {/* Author Bio */}
                <div className="blog-detail__author">
                  <div className="blog-detail__author-avatar">{post.author.charAt(0)}</div>
                  <div>
                    <h4 className="blog-detail__author-name">{post.author}</h4>
                    <span className="blog-detail__author-role">{post.authorRole}</span>
                    <p className="blog-detail__author-bio">{post.authorBio}</p>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="blog-detail__sidebar">
                {headings.length > 0 && (
                  <div className="blog-detail__sidebar-card">
                    <h3>📌 In This Field Guide</h3>
                    <nav className="blog-detail__toc">
                      {headings.map((h, i) => (
                        <a
                          key={i}
                          href={h.id ? `#${h.id}` : '#'}
                          onClick={(e) => scrollToSection(e, h.id)}
                          className="blog-detail__toc-link"
                        >
                          <MapPin size={13} className="blog-detail__toc-pin" />
                          <span>{h.body}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Direct Travel Assistance Sidebar Widget */}
                <div className="blog-detail__sidebar-promo">
                  <div className="blog-detail__sidebar-promo-header">
                    <ShieldCheck size={20} className="blog-detail__promo-icon" />
                    <h4>Planning Your Vietnam Trip?</h4>
                  </div>
                  <p>
                    From 24-hour fast-track eVisa to airport luxury transfers and high-speed eSIMs, Viet Entry Travel handles your entry from start to finish.
                  </p>
                  <div className="blog-detail__promo-links">
                    <Link to="/evisa" className="blog-detail__promo-item">
                      <ShieldCheck size={16} />
                      <span>Vietnam eVisa (90-Day Multiple)</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link to="/transfer" className="blog-detail__promo-item">
                      <Plane size={16} />
                      <span>Airport Private Transfers</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link to="/esim" className="blog-detail__promo-item">
                      <Wifi size={16} />
                      <span>Vietnam 5G Unlimited eSIM</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link to="/tours" className="blog-detail__promo-item">
                      <Compass size={16} />
                      <span>Curated Vietnam Tours & Excursions</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="detail-related">
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span className="section-label">✦ Continue Exploring</span>
                  <h2 className="section-title">Related Vietnam Travel Guides</h2>
                </div>
                <div className="blog-page__grid">
                  {related.map((r) => (
                    <Link key={r.id} to={`/blog/${r.id}`} className="blog-page__card">
                      <div className="blog-page__card-image">
                        <img src={r.heroImage} alt={r.title} loading="lazy" />
                        <span className="blog-page__tag">{r.category}</span>
                      </div>
                      <div className="blog-page__card-body">
                        <h3 className="blog-page__card-title">{r.title}</h3>
                        <p className="blog-page__card-excerpt">{r.excerpt}</p>
                        <div className="blog-page__card-meta">
                          <span>
                            <User size={12} /> {r.author}
                          </span>
                          <span>
                            <Clock size={12} /> {r.readTime}
                          </span>
                        </div>
                        <span className="blog-page__card-link">
                          Read Guide <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
