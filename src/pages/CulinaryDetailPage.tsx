import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, UtensilsCrossed, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';
import './CulinaryPage.css';

/* ── helpers for photo URLs ── */
const food = (id: string, w = 600) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

/* ── All dish data ── */
const dishes: Record<string, {
  name: string;
  slug: string;
  region: string;
  regionLabel: string;
  origin: string;
  heroImage: string;
  gallery: string[];
  intro: string;
  culturalHistory: string[];
  recipe: { step: number; title: string; detail: string }[];
  tips: string[];
  bestPlaces: { name: string; location: string }[];
}> = {
  'pho-ha-noi': {
    name: 'Phở Hà Nội',
    slug: 'pho-ha-noi',
    region: 'north',
    regionLabel: 'Miền Bắc',
    origin: 'Hà Nội',
    heroImage: food('1582878826629-29b7ad1cdc43', 1920),
    gallery: [
      food('1582878826629-29b7ad1cdc43'),
      food('1504674900247-0877df9cc836'),
      food('1556910103-1c02745aae4d'),
      food('1517248135467-4c7edcad34c4'),
      food('1559737558-2f5a35f4523b'),
      food('1509440159596-0249088772ff'),
      food('1447933601403-0c6688de566e'),
      food('1555921015-5532091f6026'),
      food('1528127269322-539801943592'),
      food('1583417319070-4a69db38a482'),
      food('1559592413-7cec4d0cae2b'),
      food('1573790387438-4da905039392'),
    ],
    intro: 'Phở — biểu tượng ẩm thực Việt Nam, nổi tiếng khắp thế giới. Tại Hà Nội, phở không chỉ là món ăn mà là một nghi thức buổi sáng, một phần không thể thiếu của đời sống phố cổ ngàn năm.',
    culturalHistory: [
      'Phở ra đời vào đầu thế kỷ 20 tại Hà Nội và Nam Định, chịu ảnh hưởng từ cả ẩm thực Việt Nam truyền thống lẫn ẩm thực Pháp (pot-au-feu). Ban đầu, phở được bán bởi những gánh hàng rong đi qua các con phố.',
      'Trong thời kỳ 1930-1940, phở Hà Nội phát triển thành hai trường phái: phở bò (truyền thống) và phở gà. Mỗi quán phở danh tiếng đều có bí quyết nấu nước dùng riêng, được giữ kín qua nhiều thế hệ.',
      'Phở Hà Nội khác biệt so với phở miền Nam ở nước dùng trong, thanh, ít ngọt — nhấn mạnh vào vị umami tự nhiên từ xương ống hầm kỹ. Người Hà Nội ăn phở "mộc" — không cần nhiều rau thơm, chỉ cần hành lá, hạt tiêu, và vài giọt chanh.',
      'Năm 2024, phở Việt Nam được UNESCO đưa vào danh sách Di sản Văn hóa Phi vật thể cần bảo vệ, khẳng định giá trị văn hóa to lớn của món ăn này đối với bản sắc dân tộc Việt.',
    ],
    recipe: [
      { step: 1, title: 'Hầm xương (12 tiếng)', detail: 'Xương ống bò rửa sạch, chần qua nước sôi, rửa lại thật kỹ. Cho vào nồi lớn với nước lạnh, đun nhỏ lửa suốt 12 tiếng. Liên tục vớt bọt để nước dùng trong vắt.' },
      { step: 2, title: 'Nướng gia vị', detail: 'Gừng và hành tây nướng trực tiếp trên than hoa cho cháy vỏ ngoài. Rang hoa hồi, quế, thảo quả, đinh hương trên chảo khô đến khi thơm — tạo nên hương thơm đặc trưng không lẫn vào đâu.' },
      { step: 3, title: 'Nêm nước dùng', detail: 'Cho gia vị nướng vào nồi xương. Nêm nước mắm thượng hạng, đường phèn, muối. Đun thêm 1-2 tiếng. Lọc kỹ qua rổ mịn — nước dùng phải trong, vàng nhạt, thơm nồng.' },
      { step: 4, title: 'Chuẩn bị bánh phở', detail: 'Bánh phở tươi — sợi mảnh, mềm, trắng ngần. Chần nhanh trong nước sôi 5-10 giây, vớt ra tô. Không chần lâu sẽ bở, mất độ dai.' },
      { step: 5, title: 'Thái thịt bò', detail: 'Thịt bò thăn phi-lê thả đông nhẹ rồi thái lát mỏng tang — khi đặt lên phở, nước dùng nóng sẽ làm chín tái, giữ độ mềm hồng.' },
      { step: 6, title: 'Trình bày', detail: 'Xếp bánh phở, thịt bò tái, chan nước dùng sôi bỏng. Rắc hành lá thái nhỏ, vài lát hành tây mỏng, rau mùi. Ăn kèm quẩy, chanh, ớt, tương đen — nhưng người sành phở Hà Nội thường ăn "mộc", chỉ thêm chút tiêu.' },
    ],
    tips: [
      'Phở ngon nhất vào buổi sáng sớm — khi nước dùng vừa hầm xong qua đêm',
      'Quán phở danh tiếng Hà Nội thường chỉ bán đến hết nồi nước dùng — đến muộn là hết',
      'Đừng cho quá nhiều tương ớt — để cảm nhận vị thanh tự nhiên của nước dùng',
      'Phở gà Hà Nội cũng tuyệt vời — nước dùng nhẹ nhàng, thịt gà ta dai ngọt',
    ],
    bestPlaces: [
      { name: 'Phở Thìn Bờ Hồ', location: '13 Lò Đúc, Hoàn Kiếm' },
      { name: 'Phở Bát Đàn', location: '49 Bát Đàn, Hoàn Kiếm' },
      { name: 'Phở Lý Quốc Sư', location: '10 Lý Quốc Sư, Hoàn Kiếm' },
    ],
  },
  'bun-cha': {
    name: 'Bún Chả',
    slug: 'bun-cha',
    region: 'north',
    regionLabel: 'Miền Bắc',
    origin: 'Hà Nội',
    heroImage: food('1504674900247-0877df9cc836', 1920),
    gallery: [
      food('1504674900247-0877df9cc836'),
      food('1582878826629-29b7ad1cdc43'),
      food('1556910103-1c02745aae4d'),
      food('1517248135467-4c7edcad34c4'),
      food('1559737558-2f5a35f4523b'),
      food('1509440159596-0249088772ff'),
      food('1447933601403-0c6688de566e'),
      food('1528127269322-539801943592'),
      food('1583417319070-4a69db38a482'),
      food('1555921015-5532091f6026'),
    ],
    intro: 'Bún chả — linh hồn ẩm thực vỉa hè Hà Nội. Mùi chả nướng than hoa lan tỏa khắp phố trưa, quyện với nước chấm chua ngọt — đó là hương vị khiến ai xa Hà Nội cũng nhớ.',
    culturalHistory: [
      'Bún chả là món ăn đặc trưng nhất của Hà Nội, xuất hiện từ thế kỷ 19. Khác với các vùng miền khác, người Hà Nội nướng chả trên bếp than ngay trước cửa quán, tạo nên hình ảnh và mùi hương đặc trưng.',
      'Năm 2016, bún chả trở nên nổi tiếng toàn cầu khi Tổng thống Mỹ Barack Obama thưởng thức cùng đầu bếp Anthony Bourdain tại quán Hương Liên, Lê Văn Hưu, Hà Nội.',
      'Bún chả Hà Nội được ăn vào bữa trưa — đây là truyền thống đặc biệt. Người Hà Nội tin rằng bún chả chỉ ngon nhất khi ăn giữa trưa, khi mùi than hoa và nắng hè quyện vào nhau.',
    ],
    recipe: [
      { step: 1, title: 'Làm chả viên', detail: 'Thịt ba chỉ băm thô, trộn với nước mắm, tiêu, hành khô, đường. Nặn thành viên tròn dẹt, ướp 2 tiếng cho thấm.' },
      { step: 2, title: 'Làm chả miếng', detail: 'Thịt ba chỉ thái lát mỏng, ướp nước mắm, mật ong, tỏi băm, tiêu. Ướp qua đêm trong tủ lạnh cho thấm đều.' },
      { step: 3, title: 'Nướng than hoa', detail: 'Nướng chả trên bếp than hoa — đây là bí quyết quan trọng nhất. Lửa than đều, phết dầu mỡ, lật đều tay. Chả phải cháy viền ngoài nhưng mọng nước bên trong.' },
      { step: 4, title: 'Pha nước chấm', detail: 'Nước mắm, đường, giấm, tỏi ớt băm, nước ấm — pha sao cho cân bằng chua-ngọt-mặn-cay. Cho đu đủ xanh thái sợi, cà rốt ngâm vào.' },
      { step: 5, title: 'Trình bày', detail: 'Bún trắng để riêng, chả nướng bỏ vào bát nước chấm nóng. Rau sống: xà lách, kinh giới, tía tô, húng Láng. Ăn kèm nem cua bể (nem rán) càng đúng vị Hà Nội.' },
    ],
    tips: [
      'Ăn bún chả vào buổi trưa mới đúng kiểu Hà Nội',
      'Chọn quán nướng than hoa trước mặt — không phải nướng sẵn',
      'Gọi thêm nem cua bể (nem rán) để trải nghiệm đầy đủ',
    ],
    bestPlaces: [
      { name: 'Bún Chả Hương Liên (Obama)', location: '24 Lê Văn Hưu, Hai Bà Trưng' },
      { name: 'Bún Chả Đắc Kim', location: '1 Hàng Mành, Hoàn Kiếm' },
    ],
  },
  'bun-bo-hue': {
    name: 'Bún Bò Huế',
    slug: 'bun-bo-hue',
    region: 'central',
    regionLabel: 'Miền Trung',
    origin: 'Huế',
    heroImage: food('1504674900247-0877df9cc836', 1920),
    gallery: [
      food('1504674900247-0877df9cc836'),
      food('1582878826629-29b7ad1cdc43'),
      food('1559592413-7cec4d0cae2b'),
      food('1556910103-1c02745aae4d'),
      food('1517248135467-4c7edcad34c4'),
      food('1559737558-2f5a35f4523b'),
      food('1509440159596-0249088772ff'),
      food('1447933601403-0c6688de566e'),
      food('1555921015-5532091f6026'),
      food('1528127269322-539801943592'),
      food('1583417319070-4a69db38a482'),
      food('1573790387438-4da905039392'),
    ],
    intro: 'Bún bò Huế — đỉnh cao ẩm thực xứ Huế, cay nồng, đậm đà, phức tạp trong từng muỗng nước lèo. Đây là món ăn mà người Huế tự hào nhất và cũng khó làm nhất.',
    culturalHistory: [
      'Bún bò Huế có nguồn gốc từ vùng đất cố đô, nơi ẩm thực luôn mang tính cầu kỳ, tinh tế của văn hóa cung đình. Dù là món dân dã, bún bò Huế thể hiện sự phức tạp đặc trưng Huế — nhiều tầng hương vị, nhiều nguyên liệu, nhiều công đoạn.',
      'Mắm ruốc Huế — linh hồn của bún bò — là loại mắm tôm đặc biệt được sản xuất tại vùng biển Thuận An. Vị mặn-thơm-nồng của mắm ruốc không có ở bất kỳ nơi nào khác.',
      'Gọi đúng tên phải là "bún bò giò heo" — vì ngoài thịt bò, giò heo luộc mềm rục là thành phần không thể thiếu, tạo nên độ ngọt đậm cho nước lèo.',
      'Ngày nay, bún bò Huế đã lan tỏa khắp Việt Nam và thế giới, nhưng người sành ăn luôn khẳng định: chỉ ở Huế mới có bát bún bò đúng vị — nhờ nguồn nước, sả Huế, và mắm ruốc địa phương.',
    ],
    recipe: [
      { step: 1, title: 'Hầm xương & giò heo (4 tiếng)', detail: 'Xương bò, giò heo chần kỹ. Hầm nhỏ lửa 4 tiếng với sả đập dập, gừng nướng. Vớt bọt liên tục cho nước trong.' },
      { step: 2, title: 'Phi sả & ớt', detail: 'Sả băm nhỏ phi với dầu ăn đến vàng thơm. Cho ớt bột vào tạo màu đỏ đặc trưng — đây là "linh hồn" tạo màu và hương cho bún bò.' },
      { step: 3, title: 'Nêm mắm ruốc', detail: 'Mắm ruốc Huế hòa tan trong nước ấm, lọc bỏ cặn. Cho vào nồi nước dùng cùng sả phi — tạo nên tầng hương vị umami đặc biệt.' },
      { step: 4, title: 'Chuẩn bị topping', detail: 'Thịt bò bắp luộc thái lát; giò heo cắt khoanh; chả cua (thịt cua xay trộn gia vị, hấp chín); huyết bò cắt miếng.' },
      { step: 5, title: 'Trình bày', detail: 'Bún tươi sợi to, xếp thịt bò, giò heo, chả cua, huyết. Chan nước lèo đỏ au nóng sôi. Rau sống: rau muống chẻ, bắp chuối thái, kinh giới, ớt tươi.' },
    ],
    tips: [
      'Bún bò Huế phải ăn cay mới đúng vị — nhưng có thể yêu cầu giảm cay',
      'Thêm chanh và ớt sa tế để tăng hương vị',
      'Tại Huế, bún bò được bán cả ngày — không chỉ buổi sáng',
    ],
    bestPlaces: [
      { name: 'Bún Bò Huế Bà Tuyết', location: '47A Nguyễn Công Trứ, Huế' },
      { name: 'Bún Bò O Phượng', location: '7 Nguyễn Du, Huế' },
    ],
  },
  'banh-mi-sai-gon': {
    name: 'Bánh Mì Sài Gòn',
    slug: 'banh-mi-sai-gon',
    region: 'south',
    regionLabel: 'Miền Nam',
    origin: 'Sài Gòn',
    heroImage: food('1509440159596-0249088772ff', 1920),
    gallery: [
      food('1509440159596-0249088772ff'),
      food('1504674900247-0877df9cc836'),
      food('1582878826629-29b7ad1cdc43'),
      food('1556910103-1c02745aae4d'),
      food('1517248135467-4c7edcad34c4'),
      food('1559737558-2f5a35f4523b'),
      food('1447933601403-0c6688de566e'),
      food('1555921015-5532091f6026'),
      food('1528127269322-539801943592'),
      food('1583417319070-4a69db38a482'),
      food('1559592413-7cec4d0cae2b'),
      food('1573790387438-4da905039392'),
    ],
    intro: 'Bánh mì Sài Gòn — "chiếc sandwich hoàn hảo nhất thế giới" theo nhiều tạp chí ẩm thực quốc tế. Sự kết hợp thiên tài giữa baguette Pháp và nguyên liệu Việt Nam.',
    culturalHistory: [
      'Bánh mì có nguồn gốc từ thời Pháp thuộc (cuối thế kỷ 19), khi người Pháp mang bánh baguette đến Đông Dương. Người Việt đã sáng tạo biến tấu hoàn toàn — thay đổi công thức bột để vỏ giòn hơn, nhẹ hơn, và nhồi đầy nguyên liệu bản địa.',
      'Sài Gòn là nơi bánh mì phát triển rực rỡ nhất, trở thành "fast food" quốc dân. Mỗi xe bánh mì đều có công thức pa-tê, nước sốt, và cách kết hợp nhân riêng — tạo nên hàng trăm biến thể.',
      'Năm 2011, bánh mì Việt Nam được đưa vào từ điển Oxford English Dictionary, chính thức là một từ vựng tiếng Anh. National Geographic cũng xếp hạng bánh mì là một trong những món street food ngon nhất thế giới.',
      'Tại Sài Gòn, bánh mì không chỉ là bữa sáng mà là bữa ăn mọi lúc — từ 5 giờ sáng đến 12 giờ đêm. Mỗi góc phố đều có ít nhất một xe bánh mì.',
    ],
    recipe: [
      { step: 1, title: 'Nướng bánh mì', detail: 'Baguette Việt Nam nhỏ hơn, giòn hơn baguette Pháp. Bột pha thêm bột gạo tạo vỏ mỏng giòn rụm. Nướng trong lò đạt viền vàng ươm.' },
      { step: 2, title: 'Làm pa-tê', detail: 'Gan heo xay nhuyễn, trộn bơ, hành phi, brandy, gia vị. Hấp cách thủy cho chín. Pa-tê phải mịn, béo, thơm — đây là lớp nền quan trọng nhất.' },
      { step: 3, title: 'Chuẩn bị nhân', detail: 'Chả lụa thái lát, thịt nguội, xíu mại (hoặc thịt nướng). Đồ chua: cà rốt và củ cải trắng ngâm giấm-đường-muối. Dưa leo tươi, rau mùi, ớt.' },
      { step: 4, title: 'Làm nước sốt', detail: 'Maggi (nước tương), nước mắm pha loãng, mayonnaise. Mỗi xe bánh mì có công thức sốt bí mật riêng.' },
      { step: 5, title: 'Lắp ráp', detail: 'Xẻ bánh mì, phết pa-tê dày. Xếp chả, thịt, đồ chua, dưa leo, rau mùi, ớt. Rưới nước sốt. Gói giấy kín — bánh mì phải ăn ngay khi còn giòn.' },
    ],
    tips: [
      'Bánh mì ngon nhất khi vỏ còn giòn — ăn ngay tại chỗ',
      'Nói "cho nhiều đồ chua" nếu thích vị chua ngọt',
      'Thử bánh mì ốp la (trứng chiên) cho bữa sáng',
    ],
    bestPlaces: [
      { name: 'Bánh Mì Huỳnh Hoa', location: '26 Lê Thị Riêng, Quận 1' },
      { name: 'Bánh Mì Bảy Hổ', location: '8 Huỳnh Khương Ninh, Quận 1' },
      { name: 'Bánh Mì Hòa Mã', location: '53 Cao Thắng, Quận 3' },
    ],
  },
};

/* Fallback for dishes without full detail data */
const createFallback = (name: string, slug: string, region: string, regionLabel: string, origin: string): typeof dishes[string] => ({
  name, slug, region, regionLabel, origin,
  heroImage: food('1504674900247-0877df9cc836', 1920),
  gallery: [
    food('1504674900247-0877df9cc836'),
    food('1582878826629-29b7ad1cdc43'),
    food('1556910103-1c02745aae4d'),
    food('1559592413-7cec4d0cae2b'),
    food('1517248135467-4c7edcad34c4'),
    food('1559737558-2f5a35f4523b'),
    food('1509440159596-0249088772ff'),
    food('1447933601403-0c6688de566e'),
    food('1555921015-5532091f6026'),
    food('1528127269322-539801943592'),
  ],
  intro: `${name} — một trong những đặc sản nổi tiếng nhất ${regionLabel}. Hãy khám phá hương vị và câu chuyện đằng sau món ăn truyền thống này.`,
  culturalHistory: [
    `${name} là món ăn mang đậm bản sắc văn hóa ${regionLabel}, được truyền từ đời này sang đời khác qua nhiều thế hệ.`,
    `Xuất phát từ vùng ${origin}, ${name} phản ánh đời sống, khí hậu, và nguyên liệu địa phương — tạo nên hương vị không thể nhầm lẫn.`,
    'Ngày nay, món ăn này không chỉ là niềm tự hào địa phương mà đã trở thành đại diện cho ẩm thực Việt Nam trên bản đồ ẩm thực thế giới.',
  ],
  recipe: [
    { step: 1, title: 'Chuẩn bị nguyên liệu', detail: 'Chọn nguyên liệu tươi ngon nhất, đúng theo truyền thống vùng miền.' },
    { step: 2, title: 'Sơ chế', detail: 'Sơ chế kỹ lưỡng theo đúng kỹ thuật truyền thống để giữ trọn hương vị.' },
    { step: 3, title: 'Nấu / Chế biến', detail: 'Chế biến theo bí quyết gia truyền, chú ý thời gian và nhiệt độ.' },
    { step: 4, title: 'Trình bày', detail: 'Trình bày đẹp mắt theo phong cách đặc trưng vùng miền.' },
  ],
  tips: [
    'Hãy thử món này tại địa phương gốc để có trải nghiệm chân thực nhất',
    'Hỏi người dân bản địa về quán ăn nào ngon nhất',
  ],
  bestPlaces: [
    { name: `Quán ${name} truyền thống`, location: origin },
  ],
});

/* Slug mapping for all 15 dishes */
const slugMap: Record<string, { name: string; region: string; regionLabel: string; origin: string }> = {
  'pho-ha-noi': { name: 'Phở Hà Nội', region: 'north', regionLabel: 'Miền Bắc', origin: 'Hà Nội' },
  'bun-cha': { name: 'Bún Chả', region: 'north', regionLabel: 'Miền Bắc', origin: 'Hà Nội' },
  'banh-cuon-thanh-tri': { name: 'Bánh Cuốn Thanh Trì', region: 'north', regionLabel: 'Miền Bắc', origin: 'Hà Nội' },
  'thang-co': { name: 'Thắng Cố', region: 'north', regionLabel: 'Miền Bắc', origin: 'Sapa · Tây Bắc' },
  'com-lam': { name: 'Cơm Lam', region: 'north', regionLabel: 'Miền Bắc', origin: 'Hà Giang · Tây Bắc' },
  'bun-bo-hue': { name: 'Bún Bò Huế', region: 'central', regionLabel: 'Miền Trung', origin: 'Huế' },
  'cao-lau-hoi-an': { name: 'Cao Lầu Hội An', region: 'central', regionLabel: 'Miền Trung', origin: 'Hội An' },
  'mi-quang': { name: 'Mì Quảng', region: 'central', regionLabel: 'Miền Trung', origin: 'Đà Nẵng · Quảng Nam' },
  'banh-beo-nam-loc': { name: 'Bánh Bèo, Bánh Nậm, Bánh Lọc', region: 'central', regionLabel: 'Miền Trung', origin: 'Huế' },
  'hai-san-nha-trang': { name: 'Hải Sản Nha Trang', region: 'central', regionLabel: 'Miền Trung', origin: 'Nha Trang' },
  'banh-mi-sai-gon': { name: 'Bánh Mì Sài Gòn', region: 'south', regionLabel: 'Miền Nam', origin: 'Sài Gòn' },
  'hu-tiu-nam-vang': { name: 'Hủ Tíu Nam Vang', region: 'south', regionLabel: 'Miền Nam', origin: 'Sài Gòn' },
  'ca-kho-to': { name: 'Cá Kho Tộ', region: 'south', regionLabel: 'Miền Nam', origin: 'Đồng Bằng Sông Cửu Long' },
  'banh-xeo-mien-tay': { name: 'Bánh Xèo Miền Tây', region: 'south', regionLabel: 'Miền Nam', origin: 'Cần Thơ · Miền Tây' },
  'trai-cay-cho-noi': { name: 'Trái Cây Chợ Nổi', region: 'south', regionLabel: 'Miền Nam', origin: 'Cần Thơ · Chợ Nổi' },
};

const CulinaryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const meta = slug ? slugMap[slug] : undefined;
  const dish = slug && dishes[slug]
    ? dishes[slug]
    : meta
      ? createFallback(meta.name, slug!, meta.region, meta.regionLabel, meta.origin)
      : createFallback('Món Việt Nam', 'unknown', 'north', 'Việt Nam', 'Việt Nam');

  return (
    <>
      <Navbar />
      <main className="cd-page">
        {/* Hero */}
        <section className="cd-hero">
          <div className="cd-hero__bg">
            <img src={dish.heroImage} alt={dish.name} />
            <div className="cd-hero__bg-overlay"></div>
          </div>
          <div className="cd-hero__content">
            <Link to="/culinary" className="cd-hero__back">
              <ArrowLeft size={16} /> Culinary Experiences
            </Link>
            <span className="cd-hero__region">
              <MapPin size={13} /> {dish.origin} · {dish.regionLabel}
            </span>
            <h1 className="cd-hero__title">{dish.name}</h1>
            <p className="cd-hero__intro">{dish.intro}</p>
          </div>
        </section>

        {/* Cultural History */}
        <section className="cd-section">
          <div className="container">
            <div className="cd-section__header">
              <span className="section-label">✦ Văn Hóa Ẩm Thực</span>
              <h2 className="section-title">Lịch Sử & Câu Chuyện</h2>
            </div>
            <div className="cd-history">
              {dish.culturalHistory.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="cd-section cd-section--gallery">
          <div className="container">
            <div className="cd-section__header">
              <span className="section-label">✦ Bộ Sưu Tập Ảnh</span>
              <h2 className="section-title">Hình Ảnh {dish.name}</h2>
            </div>
            <div className="cd-gallery">
              {dish.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`cd-gallery__item ${i === 0 ? 'cd-gallery__item--large' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={img} alt={`${dish.name} ${i + 1}`} />
                  <div className="cd-gallery__item-overlay">
                    <span>Xem ảnh</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="cd-lightbox" onClick={() => setLightboxIndex(null)}>
            <button className="cd-lightbox__close" onClick={() => setLightboxIndex(null)}>
              <X size={24} />
            </button>
            <button
              className="cd-lightbox__arrow cd-lightbox__arrow--left"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + dish.gallery.length) % dish.gallery.length); }}
            >
              <ChevronLeft size={32} />
            </button>
            <img
              src={dish.gallery[lightboxIndex].replace('w=600', 'w=1200')}
              alt={`${dish.name} full`}
              className="cd-lightbox__img"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="cd-lightbox__arrow cd-lightbox__arrow--right"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % dish.gallery.length); }}
            >
              <ChevronRight size={32} />
            </button>
            <span className="cd-lightbox__counter">{lightboxIndex + 1} / {dish.gallery.length}</span>
          </div>
        )}

        {/* Recipe */}
        <section className="cd-section">
          <div className="container">
            <div className="cd-section__header">
              <span className="section-label">✦ Cách Làm</span>
              <h2 className="section-title">Công Thức Truyền Thống</h2>
            </div>
            <div className="cd-recipe">
              {dish.recipe.map((s) => (
                <div key={s.step} className="cd-recipe__step">
                  <div className="cd-recipe__step-num">{s.step}</div>
                  <div className="cd-recipe__step-content">
                    <h3>{s.title}</h3>
                    <p>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips & Best Places */}
        <section className="cd-section cd-section--warm">
          <div className="container">
            <div className="cd-tips-places">
              <div className="cd-tips">
                <h3><UtensilsCrossed size={18} /> Mẹo Thưởng Thức</h3>
                <ul>
                  {dish.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div className="cd-places">
                <h3><MapPin size={18} /> Quán Nổi Tiếng</h3>
                <ul>
                  {dish.bestPlaces.map((place, i) => (
                    <li key={i}>
                      <strong>{place.name}</strong>
                      <span>{place.location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Back CTA */}
        <section className="cd-back-cta">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link to="/culinary" className="cd-back-cta__link">
              <ArrowLeft size={16} /> Khám phá thêm đặc sản Việt Nam
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CulinaryDetailPage;
