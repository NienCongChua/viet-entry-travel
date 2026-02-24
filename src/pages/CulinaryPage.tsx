import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, MapPin, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import './ServicePage.css';
import './CulinaryPage.css';

/* ── Region data ── */
const regions = [
  {
    id: 'north',
    name: 'Miền Bắc',
    subtitle: 'Đồi núi & Đồng bằng Bắc Bộ',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
    description: 'Ẩm thực miền Bắc tinh tế, thanh nhã với hương vị truyền thống ngàn năm từ Hà Nội đến những vùng cao Tây Bắc.',
    specialties: [
      {
        name: 'Phở Hà Nội',
        slug: 'pho-ha-noi',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
        description: 'Nước dùng trong vắt, vị ngọt thanh từ xương ống hầm qua đêm. Bánh phở mềm mướt, thịt bò tái hồng, rắc hành lá và hạt tiêu — tinh hoa ẩm thực Hà thành.',
        origin: 'Hà Nội',
      },
      {
        name: 'Bún Chả',
        slug: 'bun-cha',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
        description: 'Chả thịt nướng than hoa thơm lừng, bún trắng mát, nước mắm pha chua ngọt với đu đủ xanh và tỏi ớt. Hương vị đặc trưng vỉa hè phố cổ.',
        origin: 'Hà Nội',
      },
      {
        name: 'Bánh Cuốn Thanh Trì',
        slug: 'banh-cuon-thanh-tri',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
        description: 'Lớp bánh mỏng tang tráng tay, nhân thịt mộc nhĩ, chấm nước mắm cà cuống thơm nồng — món sáng huyền thoại của người Hà Nội.',
        origin: 'Hà Nội',
      },
      {
        name: 'Thắng Cố',
        slug: 'thang-co',
        image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600&q=80',
        description: 'Món lẩu đặc trưng vùng cao Tây Bắc, nấu từ nội tạng và xương ngựa với thảo quả, gừng. Thưởng thức giữa chợ phiên sương mù Sapa.',
        origin: 'Sapa · Tây Bắc',
      },
      {
        name: 'Cơm Lam',
        slug: 'com-lam',
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
        description: 'Gạo nếp nương dẻo thơm, nhồi trong ống tre non rồi nướng trên than hồng. Hương tre quyện cùng nếp mới — đặc sản đồi núi phía Bắc.',
        origin: 'Hà Giang · Tây Bắc',
      },
    ],
  },
  {
    id: 'central',
    name: 'Miền Trung',
    subtitle: 'Cung đình, ven biển & Tây Nguyên',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    description: 'Miền Trung nổi tiếng với ẩm thực cay nồng, tinh xảo — từ cung đình Huế đến phố cổ Hội An và bờ biển Nha Trang.',
    specialties: [
      {
        name: 'Bún Bò Huế',
        slug: 'bun-bo-hue',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
        description: 'Nước lèo sánh đỏ từ sả, mắm ruốc, ớt chưng — cay nồng đậm đà. Bún to sợi, thịt bò bắp, giò heo, chả cua. Hương vị xứ Huế không lẫn vào đâu.',
        origin: 'Huế',
      },
      {
        name: 'Cao Lầu Hội An',
        slug: 'cao-lau-hoi-an',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
        description: 'Sợi mì vàng dai giòn ngâm nước tro, thịt xá xíu, rau sống tươi, tóp mỡ giòn rụm. Chỉ có ở Hội An — vì nước giếng Bá Lê tạo nên sợi mì độc nhất.',
        origin: 'Hội An',
      },
      {
        name: 'Mì Quảng',
        slug: 'mi-quang',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
        description: 'Mì sợi vàng nghệ, nước lèo ít vừa tới, tôm, thịt, trứng cút, đậu phộng rang — hương vị đời thường đặc trưng Quảng Nam.',
        origin: 'Đà Nẵng · Quảng Nam',
      },
      {
        name: 'Bánh Bèo, Bánh Nậm, Bánh Lọc',
        slug: 'banh-beo-nam-loc',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
        description: 'Bộ ba bánh Huế — bánh bèo chén nhỏ xinh, bánh nậm gói lá chuối, bánh lọc trong suốt. Tinh hoa ẩm thực cung đình Nguyễn, nhỏ nhắn nhưng đầy nghệ thuật.',
        origin: 'Huế',
      },
      {
        name: 'Hải Sản Nha Trang',
        slug: 'hai-san-nha-trang',
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80',
        description: 'Tôm hùm nướng mỡ hành, ốc nhảy, cá bớp nấu lẩu — tất cả tươi sống từ thuyền đánh cá buổi sáng, thưởng thức ngay bên bãi biển.',
        origin: 'Nha Trang',
      },
    ],
  },
  {
    id: 'south',
    name: 'Miền Nam',
    subtitle: 'Sài Gòn & Đồng Bằng Sông Cửu Long',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    description: 'Ẩm thực miền Nam phóng khoáng, ngọt ngào với ảnh hưởng đa văn hóa — từ phố xá Sài Gòn đến miệt vườn sông nước Cửu Long.',
    specialties: [
      {
        name: 'Bánh Mì Sài Gòn',
        slug: 'banh-mi-sai-gon',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
        description: 'Vỏ giòn tan, nhân đầy ú ụ — pa-tê, chả, dưa leo, đồ chua, rau mùi, nước sốt đặc biệt. Món "fast food" Việt Nam chinh phục thế giới.',
        origin: 'Sài Gòn',
      },
      {
        name: 'Hủ Tíu Nam Vang',
        slug: 'hu-tiu-nam-vang',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        description: 'Nước lèo xương heo trong veo, sợi hủ tíu dai mềm, tôm, thịt băm, gan. Ăn khô hay nước — đặc sản bình dân Sài Gòn từ ảnh hưởng Hoa-Khmer.',
        origin: 'Sài Gòn',
      },
      {
        name: 'Cá Kho Tộ',
        slug: 'ca-kho-to',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
        description: 'Cá lóc đồng kho trong tộ đất, nước màu đường thốt nốt, tiêu, tỏi, ớt — mặn ngọt đậm đà, ăn với cơm trắng nóng hổi. Món nhà quê miền Tây.',
        origin: 'Đồng Bằng Sông Cửu Long',
      },
      {
        name: 'Bánh Xèo Miền Tây',
        slug: 'banh-xeo-mien-tay',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
        description: 'Bánh to bự bằng chảo gang, nhân tôm, thịt, giá đậu, nấm. Cuốn với rau rừng đủ loại, chấm nước mắm pha — tiếng "xèo" khi đổ bánh là nhạc hiệu miền Tây.',
        origin: 'Cần Thơ · Miền Tây',
      },
      {
        name: 'Trái Cây Chợ Nổi',
        slug: 'trai-cay-cho-noi',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80',
        description: 'Sầu riêng, măng cụt, chôm chôm, vú sữa, mãng cầu — trái cây nhiệt đới tươi mọng mua thẳng từ ghe trên chợ nổi Cái Răng lúc bình minh.',
        origin: 'Cần Thơ · Chợ Nổi',
      },
    ],
  },
];

const CulinaryPage = () => {
  const [activeRegion, setActiveRegion] = useState('north');
  const currentRegion = regions.find((r) => r.id === activeRegion) || regions[0];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="service-hero culinary-hero">
          <div className="service-hero__bg">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80" alt="Vietnamese Cuisine" />
            <div className="service-hero__bg-overlay"></div>
          </div>
          <div className="service-hero__content">
            <span className="service-hero__badge"><UtensilsCrossed size={16} /> Culinary Experiences</span>
            <h1 className="service-hero__title" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
              Hương Vị Việt Nam
            </h1>
            <p className="service-hero__subtitle">
              Khám phá ẩm thực Việt từ đồi núi Tây Bắc đến sông nước Cửu Long — mỗi vùng miền, một câu chuyện trên bàn ăn.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="culinary-highlights">
          <div className="container">
            <div className="culinary-highlights__grid">
              <div className="culinary-highlights__item">
                <div className="culinary-highlights__icon">🍜</div>
                <h4>Street Food</h4>
                <p>Phở, bún chả, bánh mì — huyền thoại vỉa hè</p>
              </div>
              <div className="culinary-highlights__item">
                <div className="culinary-highlights__icon">🏔️</div>
                <h4>Highland Cuisine</h4>
                <p>Thắng cố, cơm lam — hương vị núi rừng</p>
              </div>
              <div className="culinary-highlights__item">
                <div className="culinary-highlights__icon">👑</div>
                <h4>Royal Cuisine</h4>
                <p>Ẩm thực cung đình Huế tinh xảo</p>
              </div>
              <div className="culinary-highlights__item">
                <div className="culinary-highlights__icon">🦐</div>
                <h4>Coastal & Delta</h4>
                <p>Hải sản tươi sống, trái cây nhiệt đới</p>
              </div>
            </div>
          </div>
        </section>

        {/* Region Selector */}
        <section className="culinary-regions section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <span className="section-label">✦ Chọn Vùng Miền</span>
              <h2 className="section-title">Khám Phá Đặc Sản Từng Vùng</h2>
            </div>

            {/* Region tabs */}
            <div className="culinary-region-tabs">
              {regions.map((r) => (
                <button
                  key={r.id}
                  className={`culinary-region-tab ${activeRegion === r.id ? 'culinary-region-tab--active' : ''}`}
                  onClick={() => setActiveRegion(r.id)}
                >
                  <img src={r.image} alt={r.name} className="culinary-region-tab__img" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Region intro */}
            <div className="culinary-region-intro">
              <p>{currentRegion.description}</p>
            </div>

            {/* Specialties grid */}
            <div className="culinary-specialties">
              {currentRegion.specialties.map((dish) => (
                <Link key={dish.name} to={`/culinary/${dish.slug}`} className="culinary-dish-card">
                  <div className="culinary-dish-card__image">
                    <img src={dish.image} alt={dish.name} />
                    <div className="culinary-dish-card__image-overlay"></div>
                    <span className="culinary-dish-card__origin">
                      <MapPin size={11} /> {dish.origin}
                    </span>
                  </div>
                  <div className="culinary-dish-card__body">
                    <h3 className="culinary-dish-card__name">{dish.name}</h3>
                    <p className="culinary-dish-card__desc">{dish.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta culinary-cta">
          <div className="container">
            <h2>Trải Nghiệm Ẩm Thực Việt Nam</h2>
            <p>Hãy để chúng tôi đưa bạn đi qua những hương vị đặc sắc nhất ba miền.</p>
            <div className="service-cta__actions">
              <Button href="#contact" variant="accent" size="lg">Liên Hệ Tư Vấn</Button>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
                <ArrowLeft size={16} /> Trang Chủ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CulinaryPage;
