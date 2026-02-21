import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const allPosts = [
  {
    id: 1,
    title: 'Top 10 Must-Visit Places in Vietnam for 2026',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80',
    category: 'Destinations',
    author: 'Minh Tran',
    authorRole: 'Travel Expert',
    authorBio: 'Minh has been exploring Vietnam for over 15 years and is passionate about sharing hidden gems and authentic local experiences with the world.',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    content: [
      {
        type: 'text',
        body: 'Vietnam is a land of staggering natural beauty and deep cultural heritage. From the misty mountains of the north to the sun-drenched beaches of the south, every region offers something unique and unforgettable. Here are our top picks for 2026.',
      },
      {
        type: 'heading',
        body: '1. Ha Long Bay — A World Wonder on Water',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80',
        caption: 'Ha Long Bay\'s iconic limestone pillars at sunrise',
      },
      {
        type: 'text',
        body: 'With over 1,600 limestone islands and islets rising dramatically from emerald waters, Ha Long Bay is Vietnam\'s crown jewel. Cruise through towering karsts, kayak into hidden caves, and watch the sunrise paint the bay in gold. Whether you choose a luxury overnight cruise or a day trip, the ethereal beauty of this UNESCO World Heritage Site will stay with you forever.',
      },
      {
        type: 'tip',
        body: '💡 Pro Tip: Visit between October and December for the best weather — clear skies, cool temperatures, and fewer crowds.',
      },
      {
        type: 'heading',
        body: '2. Hoi An Ancient Town — Lanterns & Timeless Charm',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80',
        caption: 'Hoi An\'s iconic lantern-lit streets at dusk',
      },
      {
        type: 'text',
        body: 'Step into Hoi An and you\'ll feel like you\'ve traveled back in time. This enchanting UNESCO town is a living museum of ancient architecture, colorful silk lanterns, and a vibrant food scene. Take a cooking class, get a custom-tailored suit, or simply wander the riverside streets at sunset. On full-moon nights, the entire town glows with thousands of lanterns floating on the Thu Bon River.',
      },
      {
        type: 'heading',
        body: '3. Sapa & the Northwest Highlands',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80',
        caption: 'Terraced rice fields of Sapa in the harvest season',
      },
      {
        type: 'text',
        body: 'The terraced rice fields of Sapa are one of Vietnam\'s most iconic landscapes. Carved into mountain slopes over centuries by ethnic minority communities, these emerald staircases shimmer under the mist. Trek through Hmong and Dao villages, share a meal with a local family, and experience a way of life that has remained largely unchanged for generations.',
      },
      {
        type: 'heading',
        body: '4. Ninh Binh — Ha Long Bay on Land',
      },
      {
        type: 'text',
        body: 'Often called "Ha Long Bay on land," Ninh Binh offers a similar karst landscape but surrounded by lush rice paddies and ancient temples. Ride a sampan boat through the grottoes of Tam Coc, explore the vast Trang An complex, and climb to the top of Mua Cave for a breathtaking panoramic view.',
      },
      {
        type: 'heading',
        body: '5. Phong Nha-Ke Bang National Park',
      },
      {
        type: 'text',
        body: 'Home to Son Doong — the world\'s largest cave — Phong Nha is a wonderland for adventure seekers. Even if you can\'t join the exclusive Son Doong expedition, the park offers dozens of other spectacular caves, underground rivers, and jungle treks that will leave you breathless.',
      },
      {
        type: 'quote',
        body: '"Vietnam has a way of capturing your heart. It\'s the warmth of the people, the richness of the food, and the sheer beauty of the landscapes that bring travelers back again and again."',
        author: '— Lonely Planet',
      },
      {
        type: 'heading',
        body: 'More Destinations Worth Your Time',
      },
      {
        type: 'text',
        body: 'Beyond our top 5, don\'t miss the imperial citadel of Huế, the vibrant energy of Ho Chi Minh City, the pristine beaches of Phu Quoc, the dramatic Ha Giang Loop, and the sand dunes of Mui Ne. Vietnam is vast and endlessly surprising — every corner has a story to tell.',
      },
    ],
    relatedPosts: [2, 5, 6],
  },
  {
    id: 2,
    title: 'Complete Vietnam eVisa Guide: Everything You Need to Know',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80',
    category: 'Visa Guide',
    author: 'Lan Nguyen',
    authorRole: 'Visa Specialist',
    authorBio: 'Lan is a visa specialist who has helped thousands of international travelers navigate the Vietnamese visa process smoothly.',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    content: [
      { type: 'text', body: 'Planning a trip to Vietnam? One of the first things you\'ll need is a visa. The good news: Vietnam\'s eVisa system makes the process straightforward for citizens of over 80 countries. Here\'s everything you need to know.' },
      { type: 'heading', body: 'What is a Vietnam eVisa?' },
      { type: 'text', body: 'An eVisa (Electronic Visa) is a digital visa that allows you to enter Vietnam without visiting an embassy. It\'s valid for up to 90 days with single or multiple entries. The entire application process takes about 15 minutes online, and processing typically takes 3-5 business days.' },
      { type: 'tip', body: '💡 Pro Tip: Apply at least 2 weeks before your trip to account for any delays during peak seasons.' },
      { type: 'heading', body: 'Eligibility & Requirements' },
      { type: 'text', body: 'Citizens of over 80 countries can apply for a Vietnam eVisa. You\'ll need: a passport valid for at least 6 months, a recent passport-style photo, your travel itinerary, and a valid credit or debit card for the $25 government fee.' },
      { type: 'heading', body: 'Step-by-Step Application Process' },
      { type: 'text', body: '1. Visit our eVisa service page\n2. Fill in your personal details and passport info\n3. Upload your passport photo and portrait photo\n4. Choose your processing speed (Standard, Rush, or Super Rush)\n5. Pay the fee and submit\n6. Receive your approved eVisa via email' },
    ],
    relatedPosts: [4, 7, 1],
  },
  {
    id: 3,
    title: 'Best Vietnamese Street Food: A Foodie\'s Ultimate Bucket List',
    heroImage: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=1920&q=80',
    category: 'Food & Culture',
    author: 'Minh Tran',
    authorRole: 'Travel Expert',
    authorBio: 'Minh has been exploring Vietnam for over 15 years and is passionate about sharing hidden gems and authentic local experiences with the world.',
    date: 'Feb 5, 2026',
    readTime: '10 min read',
    content: [
      { type: 'text', body: 'Vietnamese cuisine is a symphony of fresh herbs, bold flavors, and incredible textures. Every region has its own specialties, and the best way to experience them is right on the street. Here\'s your ultimate street food guide.' },
      { type: 'heading', body: 'Phở — The Soul of Vietnam' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=1200&q=80', caption: 'A steaming bowl of phở bò (beef pho) — Vietnam\'s national dish' },
      { type: 'text', body: 'No visit to Vietnam is complete without a bowl of phở. This aromatic noodle soup features a slow-simmered bone broth, silky rice noodles, and your choice of beef or chicken, finished with a burst of fresh herbs and a squeeze of lime.' },
      { type: 'heading', body: 'Bánh Mì — The Perfect Fusion' },
      { type: 'text', body: 'The Vietnamese baguette sandwich is a masterpiece of culinary fusion — crispy French bread filled with pâté, grilled meats, pickled vegetables, fresh cilantro, and chili sauce. Every city has its own legendary bánh mì stand.' },
      { type: 'tip', body: '💡 Pro Tip: In Hoi An, try Bánh Mì Phượng — once called "the world\'s best sandwich" by Anthony Bourdain.' },
    ],
    relatedPosts: [8, 1, 5],
  },
  {
    id: 4,
    title: 'What to Pack for Vietnam: Season-by-Season Guide',
    heroImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80',
    category: 'Travel Tips',
    author: 'Hoa Le',
    authorRole: 'Travel Consultant',
    authorBio: 'Hoa helps travelers prepare for their Vietnam journey with practical advice and insider knowledge.',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    content: [
      { type: 'text', body: 'Vietnam stretches over 1,600 km from north to south, so the climate varies dramatically by region and season. Packing right makes all the difference for a comfortable trip.' },
      { type: 'heading', body: 'North Vietnam (Dec–Feb): Cool & Misty' },
      { type: 'text', body: 'Temperatures can drop to 10°C in Sapa. Pack layers, a warm fleece, and waterproof jacket. Hanoi stays around 15-20°C — a light jacket suffices.' },
      { type: 'heading', body: 'Central Vietnam (Sep–Nov): Monsoon Season' },
      { type: 'text', body: 'Hue and Hoi An can experience heavy rainfall. Bring a quality rain jacket, waterproof bag for electronics, and quick-dry clothing.' },
      { type: 'heading', body: 'South Vietnam: Warm Year-Round' },
      { type: 'text', body: 'Ho Chi Minh City and the Mekong Delta are warm and humid year-round (25-35°C). Pack lightweight, breathable clothing, sunscreen, and a hat.' },
    ],
    relatedPosts: [7, 2, 1],
  },
  {
    id: 5,
    title: 'Hidden Gems of Northern Vietnam: Beyond Ha Long Bay',
    heroImage: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=1920&q=80',
    category: 'Destinations',
    author: 'Tuan Vo',
    authorRole: 'Adventure Guide',
    authorBio: 'Tuan is an adventure guide who has explored every corner of Northern Vietnam\'s mountains and valleys.',
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    content: [
      { type: 'text', body: 'Northern Vietnam is far more than Ha Long Bay. From the jaw-dropping passes of Ha Giang to the serene beauty of Ban Gioc Waterfall, the north is a paradise for those who love raw, untouched landscapes.' },
      { type: 'heading', body: 'Ha Giang Loop — Vietnam\'s Most Spectacular Drive' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=1200&q=80', caption: 'The dramatic mountain passes of Ha Giang Loop' },
      { type: 'text', body: 'The Ha Giang Loop is a 350km journey through Vietnam\'s northernmost mountains. Winding roads cut through towering limestone peaks, deep valleys, and remote ethnic minority villages. It\'s challenging, raw, and absolutely unforgettable.' },
      { type: 'heading', body: 'Mu Cang Chai — Golden Rice Terraces' },
      { type: 'text', body: 'Visit between September and October to see the rice terraces blaze in gold. The Hmong communities here have sculpted the mountainsides into intricate, layered patterns over centuries.' },
      { type: 'heading', body: 'Ban Gioc Waterfall — Asia\'s Largest Transborder Waterfall' },
      { type: 'text', body: 'Straddling the Vietnam-China border, Ban Gioc is breathtaking — sheets of white water cascading over tiers of rock into a turquoise pool. Take a bamboo raft for a close-up experience.' },
    ],
    relatedPosts: [1, 6, 9],
  },
  {
    id: 6,
    title: 'A Guide to Vietnam\'s UNESCO World Heritage Sites',
    heroImage: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80',
    category: 'Destinations',
    author: 'Lan Nguyen',
    authorRole: 'Cultural Guide',
    authorBio: 'Lan is passionate about Vietnam\'s cultural heritage and loves sharing the stories behind its most important landmarks.',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    content: [
      { type: 'text', body: 'Vietnam is home to 8 UNESCO World Heritage Sites, each offering a unique window into the country\'s natural wonders and cultural treasures. From ancient imperial cities to spectacular cave systems, here\'s your complete guide.' },
      { type: 'heading', body: 'Ha Long Bay — Natural Wonder' },
      { type: 'text', body: 'Over 1,600 limestone islands rising from emerald waters make Ha Long Bay one of the world\'s most surreal landscapes. Cruise through the karsts and explore hidden caves.' },
      { type: 'heading', body: 'Hoi An Ancient Town — Cultural Treasure' },
      { type: 'text', body: 'A perfectly preserved trading port from the 15th–19th centuries, Hoi An blends Chinese, Japanese, and European influences. Its lantern-lit streets are pure magic.' },
      { type: 'heading', body: 'Phong Nha-Ke Bang — Underground Kingdom' },
      { type: 'text', body: 'Home to Son Doong (the world\'s largest cave), Phong Nha is a karst wonderland with hundreds of caves, underground rivers, and ancient forests.' },
    ],
    relatedPosts: [1, 5, 9],
  },
  {
    id: 7,
    title: 'How to Get Around Vietnam: Transport Tips for Travelers',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80',
    category: 'Travel Tips',
    author: 'Hoa Le',
    authorRole: 'Travel Consultant',
    authorBio: 'Hoa helps travelers prepare for their Vietnam journey with practical advice.',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
    content: [
      { type: 'text', body: 'Getting around Vietnam is part of the adventure! From the iconic overnight trains to buzzing motorbikes, there are many ways to travel this diverse country.' },
      { type: 'heading', body: 'The Reunification Express' },
      { type: 'text', body: 'Vietnam\'s legendary train runs 1,726 km from Hanoi to Ho Chi Minh City. Choose a sleeper cabin for an unforgettable overnight journey through the country\'s stunning coastline.' },
    ],
    relatedPosts: [4, 2, 1],
  },
  {
    id: 8,
    title: 'Vietnamese Coffee Culture: From Ca Phe Sua Da to Egg Coffee',
    heroImage: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=1920&q=80',
    category: 'Food & Culture',
    author: 'Minh Tran',
    authorRole: 'Travel Expert',
    authorBio: 'Minh has been exploring Vietnam for over 15 years.',
    date: 'Jan 2, 2026',
    readTime: '5 min read',
    content: [
      { type: 'text', body: 'Vietnam is the world\'s second-largest coffee producer, and its coffee culture is uniquely its own. Forget espresso bars — in Vietnam, coffee is slow-dripped through a metal phin filter, sweetened with condensed milk, and enjoyed over long conversations.' },
      { type: 'heading', body: 'Ca Phe Sua Da — The Classic' },
      { type: 'text', body: 'Strong, dark coffee dripped over sweetened condensed milk and served on ice. It\'s bold, sweet, and dangerously addictive.' },
      { type: 'heading', body: 'Ca Phe Trung — Egg Coffee' },
      { type: 'text', body: 'Invented in Hanoi in 1946 when milk was scarce, egg coffee is made with whipped egg yolks and sugar, creating a creamy, dessert-like topping over strong Vietnamese coffee.' },
    ],
    relatedPosts: [3, 1, 5],
  },
  {
    id: 9,
    title: 'Best Beaches in Vietnam: Coastal Paradise Guide',
    heroImage: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=1920&q=80',
    category: 'Destinations',
    author: 'Tuan Vo',
    authorRole: 'Adventure Guide',
    authorBio: 'Tuan loves discovering Vietnam\'s hidden coastal gems.',
    date: 'Dec 25, 2025',
    readTime: '8 min read',
    content: [
      { type: 'text', body: 'Vietnam\'s 3,260 km coastline is one of Southeast Asia\'s best-kept secrets. From the turquoise bays of Phu Quoc to the dramatic cliffs of Quy Nhon, there\'s a perfect beach for every traveler.' },
      { type: 'heading', body: 'Phu Quoc — Tropical Island Paradise' },
      { type: 'text', body: 'Vietnam\'s largest island offers white-sand beaches, snorkeling, night markets, and stunning sunsets. Bai Sao beach is consistently rated as one of the most beautiful beaches in all of Asia.' },
      { type: 'heading', body: 'Quy Nhon — The Undiscovered Gem' },
      { type: 'text', body: 'Still off the tourist trail, Quy Nhon offers pristine beaches, dramatic coastal scenery, and a laid-back atmosphere. Perfect for travelers seeking an authentic and uncrowded experience.' },
    ],
    relatedPosts: [1, 5, 6],
  },
];

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = allPosts.find((p) => p.id === Number(id)) || allPosts[0];
  const related = post.relatedPosts
    .map((rid) => allPosts.find((p) => p.id === rid))
    .filter(Boolean) as typeof allPosts;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero" style={{ minHeight: '500px' }}>
          <div className="service-hero__bg">
            <img src={post.heroImage} alt={post.title} />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <div className="blog-detail__hero-nav">
              <Link to="/blog" className="detail-back-link">
                <ArrowLeft size={16} /> All Articles
              </Link>
            </div>
            <span className="blog-page__tag blog-page__tag--accent">{post.category}</span>
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic', maxWidth: '800px' }}>
              {post.title}
            </h1>
            <div className="detail-hero-meta">
              <span className="detail-hero-meta__item"><User size={16} /> {post.author}</span>
              <span className="detail-hero-meta__item"><Calendar size={16} /> {post.date}</span>
              <span className="detail-hero-meta__item"><Clock size={16} /> {post.readTime}</span>
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
                      return <h2 key={i} className="blog-detail__heading">{block.body}</h2>;
                    case 'text':
                      return <p key={i} className="blog-detail__text">{block.body}</p>;
                    case 'image':
                      return (
                        <figure key={i} className="blog-detail__figure">
                          <img src={block.src} alt={block.caption || ''} />
                          {block.caption && <figcaption>{block.caption}</figcaption>}
                        </figure>
                      );
                    case 'tip':
                      return <div key={i} className="blog-detail__tip">{block.body}</div>;
                    case 'quote':
                      return (
                        <blockquote key={i} className="blog-detail__quote">
                          <p>{block.body}</p>
                          {block.author && <cite>{block.author}</cite>}
                        </blockquote>
                      );
                    default:
                      return null;
                  }
                })}

                {/* Share */}
                <div className="blog-detail__share">
                  <span>Share this article:</span>
                  <button className="blog-detail__share-btn"><Share2 size={16} /> Copy Link</button>
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
                <div className="blog-detail__sidebar-card">
                  <h3>📌 Quick Links</h3>
                  <nav className="blog-detail__toc">
                    {post.content
                      .filter((b) => b.type === 'heading')
                      .map((h, i) => (
                        <a key={i} href="#" className="blog-detail__toc-link">
                          <MapPin size={12} /> {h.body}
                        </a>
                      ))}
                  </nav>
                </div>
              </aside>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="detail-related">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>More to Read</h2>
                <div className="blog-page__grid">
                  {related.map((r) => (
                    <Link key={r.id} to={`/blog/${r.id}`} className="blog-page__card">
                      <div className="blog-page__card-image">
                        <img src={r.heroImage} alt={r.title} />
                        <span className="blog-page__tag">{r.category}</span>
                      </div>
                      <div className="blog-page__card-body">
                        <h3 className="blog-page__card-title">{r.title}</h3>
                        <div className="blog-page__card-meta">
                          <span><User size={12} /> {r.author}</span>
                          <span><Clock size={12} /> {r.readTime}</span>
                        </div>
                        <span className="blog-page__card-link">
                          Read More <ArrowRight size={14} />
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
