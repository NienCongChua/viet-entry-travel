import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, MapPin, ArrowRight, Search, Sparkles, Compass, Flame, Leaf, Droplets, Camera } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { regions, allSpecialties, type Specialty } from '../data/food';
import './ServicePage.css';
import './CulinaryPage.css';

const CATEGORIES = [
  'All',
  'Noodles & Broths',
  'Street Grills & Rolls',
  'Steamed & Rolled',
  'Royal & Imperial',
  'Rice & Claypots',
  'Highland Hearth',
  'Crispy Crepes',
  'Pastries & Drinks',
] as const;

const CulinaryPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePhilosophy, setActivePhilosophy] = useState<number>(0);

  const filteredDishes = useMemo(() => {
    return allSpecialties.filter((dish: Specialty) => {
      // Region filter
      if (selectedRegion !== 'all') {
        const regionObj = regions.find((r) => r.id === selectedRegion);
        if (!regionObj?.specialties.some((s) => s.slug === dish.slug)) {
          return false;
        }
      }
      // Category filter
      if (selectedCategory !== 'All' && dish.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(q);
        const matchesDesc = dish.description.toLowerCase().includes(q);
        const matchesProvince = dish.province.toLowerCase().includes(q);
        const matchesIngredients = dish.keyIngredients.some((ing) => ing.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesProvince && !matchesIngredients) {
          return false;
        }
      }
      return true;
    });
  }, [selectedRegion, selectedCategory, searchQuery]);

  const currentRegionMeta = regions.find((r) => r.id === selectedRegion);

  const philosophies = [
    {
      id: 0,
      title: 'The 5 Elemental Tastes (Ngũ Hành)',
      icon: <Flame size={20} />,
      tagline: 'Balance of Wood, Fire, Earth, Metal & Water',
      description:
        'Every master Vietnamese recipe harmonizes five taste sensations: Wood (Sour/Lime), Fire (Bitter/Herbs), Earth (Sweet/Cane & Coconut), Metal (Spicy/Chili & Ginger), and Water (Salty/Fish Sauce). This cosmic equilibrium ensures food is not only delicious, but nourishes body and spirit.',
      highlights: ['Hot foods paired with cooling herbs', 'Digestive herbs balancing rich meats', 'Zero heavy dairy or excess grease'],
    },
    {
      id: 1,
      title: 'The Fresh Botanical Terroir (Rau Thơm)',
      icon: <Leaf size={20} />,
      tagline: 'A Living Herb Garden on Every Dining Table',
      description:
        'Unlike cuisines where herbs are dissolved during simmering, Vietnamese dining serves a towering bouquet of raw, freshly washed botanicals: Vietnamese balm, purple perilla, Tra Que coriander, sawtooth culantro, and wild water lily stems. Diners curate their own custom herbal profile with every single bite.',
      highlights: ['Tra Que organic village heritage', 'Uncooked botanicals preserving essential oils', 'Distinct wild herbs for each region'],
    },
    {
      id: 2,
      title: 'The Artisanal Fermented Soul (Nước Mắm)',
      icon: <Droplets size={20} />,
      tagline: 'Barrel-Aged Liquid Umami',
      description:
        'Vietnamese gastronomy is anchored by artisanal fish sauce (nước mắm) and fermented regional pastes. From wild black-anchovy barrels aged 12 months in Phu Quoc and Phan Thiet, to royal shrimp paste (mắm ruốc) in Hue and freshwater fish mắm in the Mekong floodplains, fermentation provides profound savory depth.',
      highlights: ['Pure black anchovies & sea salt only', 'Natural fermentation in wooden vats', 'Foundation of all dipping sauces (nước chấm)'],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="culinary-main">
        {/* Cinematic Hero */}
        <section className="service-hero culinary-hero">
          <div className="service-hero__bg">
            <img src="/images/food/pho-ha-noi.jpg" alt="Vietnamese Gastronomic Heritage" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <UtensilsCrossed size={15} /> Cultural Gastronomy Experience
            </span>
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              Flavors of Vietnam
            </h1>
            <p className="service-hero__subtitle">
              An extraordinary culinary voyage across 3 climate zones and 15 gastronomic provinces. Discover how indigenous herbs, ancient imperial courts, and river waters shaped one of the world's most revered cuisines.
            </p>

            {/* Quick Gastronomic Stats Bar */}
            <div className="culinary-stats-bar">
              <div className="culinary-stat-pill">
                <strong>32</strong>
                <span>Master Dishes</span>
              </div>
              <div className="culinary-stat-divider"></div>
              <div className="culinary-stat-pill">
                <strong>15</strong>
                <span>Provinces</span>
              </div>
              <div className="culinary-stat-divider"></div>
              <div className="culinary-stat-pill">
                <strong>3</strong>
                <span>Culinary Terroirs</span>
              </div>
              <div className="culinary-stat-divider"></div>
              <div className="culinary-stat-pill">
                <strong>1000+</strong>
                <span>Years Heritage</span>
              </div>
            </div>
          </div>
        </section>

        {/* The 3 Pillars of Gastronomy Philosophy */}
        <section className="culinary-philosophy-section">
          <div className="container">
            <div className="culinary-section-heading text-center">
              <span className="section-label">✦ Gastronomic Heritage</span>
              <h2 className="section-title">The Three Pillars of Vietnamese Taste</h2>
              <p className="section-subtitle">
                Rooted in ancient Taoist philosophy and rich tropical biodiversity, Vietnamese dining is an art of delicate balance rather than heavy seasoning.
              </p>
            </div>

            <div className="culinary-philosophy-grid">
              <div className="culinary-philosophy-nav">
                {philosophies.map((p, idx) => (
                  <button
                    key={p.id}
                    className={`culinary-philosophy-btn ${activePhilosophy === idx ? 'culinary-philosophy-btn--active' : ''}`}
                    onClick={() => setActivePhilosophy(idx)}
                  >
                    <div className="culinary-philosophy-btn__icon">{p.icon}</div>
                    <div className="culinary-philosophy-btn__text">
                      <h4>{p.title}</h4>
                      <span>{p.tagline}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="culinary-philosophy-display">
                <div className="culinary-philosophy-card">
                  <div className="culinary-philosophy-card__header">
                    <span className="culinary-philosophy-badge">
                      <Sparkles size={14} /> Philosophy Pillar {activePhilosophy + 1}
                    </span>
                    <h3>{philosophies[activePhilosophy].title}</h3>
                    <p className="culinary-philosophy-lead">{philosophies[activePhilosophy].description}</p>
                  </div>
                  <div className="culinary-philosophy-card__list">
                    {philosophies[activePhilosophy].highlights.map((h, i) => (
                      <div key={i} className="culinary-philosophy-item">
                        <div className="culinary-philosophy-dot"></div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Terroir Navigator & Dish Explorer */}
        <section className="culinary-explorer-section">
          <div className="container">
            <div className="culinary-section-heading text-center">
              <span className="section-label">✦ Regional Gastronomy</span>
              <h2 className="section-title">Explore Regional Specialties by Province</h2>
              <p className="section-subtitle">
                Filter by climate terroir, food style, or search your favorite ingredients. Every specialty features verified photography, traditional recipes, and local insider tasting etiquette.
              </p>
            </div>

            {/* Region Selector Tabs */}
            <div className="culinary-macro-tabs">
              <button
                className={`culinary-macro-tab ${selectedRegion === 'all' ? 'culinary-macro-tab--active' : ''}`}
                onClick={() => setSelectedRegion('all')}
              >
                <Compass size={18} /> All Vietnam ({allSpecialties.length})
              </button>
              {regions.map((r) => (
                <button
                  key={r.id}
                  className={`culinary-macro-tab ${selectedRegion === r.id ? 'culinary-macro-tab--active' : ''}`}
                  onClick={() => setSelectedRegion(r.id)}
                >
                  <img src={r.image} alt={r.name} className="culinary-macro-tab__thumb" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.provinces.length} Provinces · {r.specialties.length} Dishes</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Current Region Description Banner */}
            {currentRegionMeta && (
              <div className="culinary-region-banner">
                <div className="culinary-region-banner__text">
                  <h3>{currentRegionMeta.name} — {currentRegionMeta.subtitle}</h3>
                  <p>{currentRegionMeta.description}</p>
                </div>
                <div className="culinary-region-banner__provinces">
                  <span className="culinary-provinces-label">Key Culinary Hubs:</span>
                  {currentRegionMeta.provinces.map((prov) => (
                    <span key={prov} className="culinary-province-pill">
                      <MapPin size={11} /> {prov}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Search & Category Filter Bar */}
            <div className="culinary-filter-bar">
              <div className="culinary-search-wrap">
                <Search size={16} className="culinary-search-icon" />
                <input
                  type="text"
                  placeholder="Search by dish name, province, or ingredient (e.g. Hanoi, Crab, Turmeric, Pho)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="culinary-search-input"
                />
                {searchQuery && (
                  <button className="culinary-search-clear" onClick={() => setSearchQuery('')}>✕</button>
                )}
              </div>

              {/* Category Pills */}
              <div className="culinary-category-pills">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`culinary-cat-pill ${selectedCategory === cat ? 'culinary-cat-pill--active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter */}
            <div className="culinary-results-meta">
              <span>Showing <strong>{filteredDishes.length}</strong> authentic Vietnamese specialties</span>
              {(selectedRegion !== 'all' || selectedCategory !== 'All' || searchQuery !== '') && (
                <button
                  className="culinary-reset-btn"
                  onClick={() => {
                    setSelectedRegion('all');
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Dishes Grid */}
            {filteredDishes.length === 0 ? (
              <div className="culinary-empty-state">
                <p>No culinary specialties matched your search. Try changing the keywords or clearing active filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedRegion('all');
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  View All Specialties
                </Button>
              </div>
            ) : (
              <div className="culinary-specialties-grid">
                {filteredDishes.map((dish) => (
                  <Link key={dish.slug} to={`/culinary/${dish.slug}`} className="culinary-card">
                    <div className="culinary-card__media">
                      <img src={dish.image} alt={dish.name} loading="lazy" />
                      <div className="culinary-card__overlay"></div>
                      <div className="culinary-card__badges">
                        <span className="culinary-badge culinary-badge--province">
                          <MapPin size={11} /> {dish.province}
                        </span>
                        <span className="culinary-badge culinary-badge--photos">
                          <Camera size={11} /> {dish.gallery.length} Photos
                        </span>
                      </div>
                      <span className="culinary-card__category">{dish.category}</span>
                    </div>

                    <div className="culinary-card__body">
                      <h3 className="culinary-card__title">{dish.name}</h3>
                      <p className="culinary-card__desc">{dish.description}</p>

                      {/* Flavor Bar Miniature */}
                      <div className="culinary-card__flavors">
                        <div className="culinary-flavor-dot-group">
                          <span className="culinary-flavor-label">Savory:</span>
                          <span className="culinary-flavor-meter">{'★'.repeat(dish.flavorProfile.savory)}{'☆'.repeat(5 - dish.flavorProfile.savory)}</span>
                        </div>
                        <div className="culinary-flavor-dot-group">
                          <span className="culinary-flavor-label">Spicy:</span>
                          <span className="culinary-flavor-meter">{'★'.repeat(dish.flavorProfile.spicy)}{'☆'.repeat(5 - dish.flavorProfile.spicy)}</span>
                        </div>
                      </div>

                      <div className="culinary-card__footer">
                        <span className="culinary-card__action">
                          Explore Story & Recipe <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Gastronomic Terroir Journey Timeline */}
        <section className="culinary-journey-section">
          <div className="container">
            <div className="culinary-section-heading text-center">
              <span className="section-label">✦ The Gastronomic Journey</span>
              <h2 className="section-title">The Culinary Axis from North to South</h2>
              <p className="section-subtitle">
                Traveling down Vietnam's S-shaped coastline is an exhilarating evolution of flavor profiles and indigenous cooking methods.
              </p>
            </div>

            <div className="culinary-timeline-grid">
              <div className="culinary-timeline-step">
                <div className="culinary-timeline-step__marker">1</div>
                <div className="culinary-timeline-step__card">
                  <span className="culinary-timeline-region">Northern Vietnam</span>
                  <h4>Purity, Subtlety & Clear Broths</h4>
                  <p>
                    Influenced by cooler temperate seasons and ancient Confucian heritage, northern cooking emphasizes clean umami, crystal broths, and restrained seasoning without excessive chili or sugar.
                  </p>
                  <div className="culinary-timeline-tags">
                    <span>Charred Ginger</span>
                    <span>Dill & Galangal</span>
                    <span>Bone Broth Purity</span>
                  </div>
                </div>
              </div>

              <div className="culinary-timeline-step">
                <div className="culinary-timeline-step__marker">2</div>
                <div className="culinary-timeline-step__card">
                  <span className="culinary-timeline-region">Central Vietnam</span>
                  <h4>Royal Splendor & Unapologetic Spice</h4>
                  <p>
                    Home of the Nguyen Dynasty imperial citadel in Hue and the ancient merchant harbor of Hoi An. Central cuisine is renowned for miniature intricate presentation, fiery bird's-eye chilies, and pungent fermented shrimp essence.
                  </p>
                  <div className="culinary-timeline-tags">
                    <span>Fermented Shrimp (Mắm Ruốc)</span>
                    <span>Fiery Chilies</span>
                    <span>Royal Ceremonial Snacks</span>
                  </div>
                </div>
              </div>

              <div className="culinary-timeline-step">
                <div className="culinary-timeline-step__marker">3</div>
                <div className="culinary-timeline-step__card">
                  <span className="culinary-timeline-region">Southern Vietnam</span>
                  <h4>Abundance, Coconut & River Bounty</h4>
                  <p>
                    Basked in year-round tropical sunshine and fertile Mekong silt. Southern food is bold, sweet-savory, and lavishly enriched with fresh coconut milk, wild river flowers, and gigantic crispy street crepes.
                  </p>
                  <div className="culinary-timeline-tags">
                    <span>Fresh Coconut Milk</span>
                    <span>Wild River Flora</span>
                    <span>Giant Crispy Bánh Xèo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Culinary Consultation CTA */}
        <section className="service-cta culinary-cta">
          <div className="container">
            <h2>Experience Vietnamese Gastronomy in Person</h2>
            <p>
              Looking for a private street food safari through Hanoi's ancient guild alleys, an imperial royal dining banquet in Hue, or a sunrise boat breakfast at Cai Rang floating market? Our culinary tour specialists curate bespoke private gastronomic journeys tailored directly to your tastes.
            </p>
            <div className="service-cta__actions">
              <Button href="https://wa.me/84338649908" variant="accent" size="lg">
                Chat via WhatsApp (+84 3386 49908)
              </Button>
              <Button href="/#contact" variant="outline" size="lg" className="culinary-outline-btn">
                Request Culinary Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CulinaryPage;
