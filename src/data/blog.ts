export interface BlogContentBlock {
  type: 'heading' | 'text' | 'image' | 'tip' | 'quote' | 'callout' | 'table';
  body?: string;
  src?: string;
  caption?: string;
  author?: string;
  id?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  calloutData?: {
    title: string;
    text: string;
    buttonText: string;
    buttonHref: string;
  };
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  category: string;
  tag: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  featured: boolean;
  content: BlogContentBlock[];
  relatedPosts: number[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'top-10-must-visit-places-vietnam-2026',
    title: 'Top 10 Must-Visit Places in Vietnam for 2026',
    excerpt: 'From the emerald waters of Ha Long Bay to the golden lanterns of Hoi An — our curated list of destinations you cannot miss this year.',
    heroImage: '/images/tours/halong-bay-cruise.jpg',
    category: 'Destinations',
    tag: 'Must Read',
    author: 'Minh Tran',
    authorRole: 'Travel Expert & Co-founder',
    authorBio: 'Minh has spent over 15 years guiding expeditions across Vietnam from the northern karst mountains to the southern delta canals.',
    date: 'Feb 15, 2026',
    readTime: '9 min read',
    featured: true,
    content: [
      {
        type: 'text',
        body: 'Stretching over 1,650 kilometers along the eastern edge of the Indochina Peninsula, Vietnam is a land of staggering contrasts — towering limestone pillars rising from emerald seas, millennia-old temple complexes, cascading mountain rice terraces, and electric modern metropolises. For travelers heading to Vietnam in 2026, here is our carefully curated definitive guide to the top 10 destinations that capture the soul of the country.',
      },
      {
        type: 'heading',
        id: 'halong-bay',
        body: '1. Ha Long Bay — A World Wonder of 1,969 Limestone Karsts',
      },
      {
        type: 'image',
        src: '/images/tours/halong-bay-cruise.jpg',
        caption: 'Traditional wooden junk boat sailing amidst the limestone peaks of Ha Long Bay',
      },
      {
        type: 'text',
        body: 'Recognized twice as a UNESCO World Heritage Site, Ha Long Bay features nearly 2,000 towering limestone karsts and islets rising dramatically from calm emerald waters. Exploring by an overnight boutique cruise allows you to witness sunrise and sunset over the karst formations, kayak through Luon Cave, explore the monumental chambers of Sung Sot (Surprise) Cave, and hike to the panoramic summit of Ti Top Island.',
      },
      {
        type: 'tip',
        body: '💡 Pro Tip: Book a 2-day/1-night or 3-day/2-night cruise that ventures into neighboring Lan Ha Bay or Bai Tu Long Bay to enjoy pristine sceneries with far fewer tourist vessels.',
      },
      {
        type: 'heading',
        id: 'hoi-an',
        body: '2. Hoi An Ancient Town — Timeless Lanterns & Riverside Heritage',
      },
      {
        type: 'image',
        src: '/images/destinations/hoi-an.jpg',
        caption: 'Colorful silk lanterns illuminating the ancient wooden shophouses of Hoi An',
      },
      {
        type: 'text',
        body: 'A thriving international trading port from the 15th to the 19th centuries, Hoi An’s remarkably preserved old town blends Vietnamese, Chinese, Japanese, and French colonial architecture. On the 14th evening of every lunar month, electric lights are turned off and the riverside glows entirely under candlelight and thousands of floating silk lanterns on the Hoai River.',
      },
      {
        type: 'text',
        body: 'Beyond sightseeing, Hoi An is Vietnam’s culinary capital — savor Cao Lau noodles, white rose dumplings, and world-renowned banh mi. Get bespoke suits custom-tailored in under 24 hours, or cycle through peaceful rice paddies to An Bang Beach.',
      },
      {
        type: 'heading',
        id: 'ninh-binh',
        body: '3. Ninh Binh — Ha Long Bay on Land & Royal Heritage',
      },
      {
        type: 'image',
        src: '/images/destinations/ninh-binh.jpg',
        caption: 'Rowboats gliding along the Ngo Dong River in Tam Coc, Ninh Binh',
      },
      {
        type: 'text',
        body: 'Just 90 minutes south of Hanoi, Ninh Binh boasts the UNESCO-listed Trang An Landscape Complex. Glide on traditional wooden sampans rowed skillfully by local boatmen through subterranean cave networks and submerged valleys. Climb the 500 stone steps to the dragon crest of Hang Mua for a 360-degree vista over the serpentine river below.',
      },
      {
        type: 'heading',
        id: 'ha-giang',
        body: '4. Ha Giang Loop — Vietnam’s Most Spectacular Mountain Highway',
      },
      {
        type: 'image',
        src: '/images/tours/ha-giang-loop.jpg',
        caption: 'The hairpin curves of the legendary Ma Pi Leng Pass overlooking Nho Que River',
      },
      {
        type: 'text',
        body: 'For adventure seekers, the 350-kilometer Dong Van Karst Plateau geopark in Ha Giang is peerless. Ride or be chauffeured along the jaw-dropping Ma Pi Leng Pass, take an electric boat through Tu San Canyon — the deepest canyon in Southeast Asia — and immerse yourself in weekly highland ethnic markets bustling with Hmong, Tay, and Dao communities.',
      },
      {
        type: 'tip',
        body: '💡 Pro Tip: The best months for Ha Giang are September to November (golden rice terraces and pink buckwheat flowers) or March to April (blooming peach and plum blossoms).',
      },
      {
        type: 'heading',
        id: 'sapa',
        body: '5. Sa Pa & Mount Fansipan — Roof of Indochina',
      },
      {
        type: 'image',
        src: '/images/destinations/sapa.jpg',
        caption: 'Sweeping rice terraces carved into the slopes of the Hoang Lien Son range in Sa Pa',
      },
      {
        type: 'text',
        body: 'Nestled in the misty Hoang Lien Son range, Sa Pa is famous for its monumental hand-sculpted terraced rice paddies in Muong Hoa Valley and vibrant tribal cultures. Reach the summit of Mount Fansipan (3,143m) via the world-record three-rope cable car system to stand above an ocean of clouds.',
      },
      {
        type: 'heading',
        id: 'hue',
        body: '6. Hue — The Imperial Citadel of the Nguyen Dynasty',
      },
      {
        type: 'text',
        body: 'As the feudal capital of unified Vietnam from 1802 to 1945, Hue preserves the monumental Imperial Citadel, the Forbidden Purple City, and the majestic royal mausoleums of Emperors Tu Duc, Khai Dinh, and Minh Mang along the Perfume River. Hue is also renowned for its refined royal cuisine consisting of dozens of delicate small-plate courses.',
      },
      {
        type: 'heading',
        id: 'phong-nha',
        body: '7. Phong Nha-Ke Bang — Underground Kingdom & Mega Caves',
      },
      {
        type: 'text',
        body: 'Home to Son Doong, the largest cave on Earth (with its own internal jungle and microclimate), Phong Nha is a subterranean wonderland. Travelers can easily explore Paradise Cave (Hang Thien Duong) with its 31km of cathedral-like stalactite formations, or kayak and zipline through Dark Cave (Hang Toi).',
      },
      {
        type: 'heading',
        id: 'da-nang',
        body: '8. Da Nang & Ba Na Hills — Modern Coastal Gateway',
      },
      {
        type: 'image',
        src: '/images/tours/ba-na-hills-golden-bridge.jpg',
        caption: 'The iconic Golden Bridge held aloft by giant stone hands at Ba Na Hills, Da Nang',
      },
      {
        type: 'text',
        body: 'Vietnam’s cleanest, most livable coastal city features the golden sands of My Khe Beach, the Marble Mountains, and the architectural wonder of the Golden Bridge at Ba Na Hills. On Saturday and Sunday nights at 9:00 PM, watch the famous Dragon Bridge breathe real fire and water over the Han River.',
      },
      {
        type: 'heading',
        id: 'mekong-delta',
        body: '9. The Mekong Delta — The River Realm & Floating Markets',
      },
      {
        type: 'image',
        src: '/images/tours/cai-rang-floating-market.jpg',
        caption: 'Cai Rang Floating Market bustling with wooden fruit boats at sunrise',
      },
      {
        type: 'text',
        body: 'The fertile maze of rivers, swamps, and islands in southern Vietnam is known as the "Rice Bowl" of the nation. Wake up before dawn in Can Tho to witness Cai Rang Floating Market in full swing, row small wooden sampans through narrow nipa palm canals, and taste tropical fruits freshly picked from local orchards.',
      },
      {
        type: 'heading',
        id: 'phu-quoc',
        body: '10. Phu Quoc Island — White-Sand Tropical Haven',
      },
      {
        type: 'image',
        src: '/images/destinations/phu-quoc.jpg',
        caption: 'Pristine turquoise waters and swaying coconut palms on Sao Beach, Phu Quoc',
      },
      {
        type: 'text',
        body: 'Located in the warm Gulf of Thailand, Phu Quoc is Vietnam’s premier island resort. It offers powdery white-sand beaches such as Sao Beach and Khem Beach, world-class snorkeling across the An Thoi archipelago, fresh seafood night markets, and visa-free 30-day entry for all international travelers.',
      },
      {
        type: 'quote',
        body: '"Vietnam doesn\'t just offer a vacation; it offers an awakening of the senses — the aroma of fresh mint, the roar of the mountain wind, and the unmatched warmth of its people."',
        author: 'Minh Tran, Viet Entry Travel Expert',
      },
      {
        type: 'callout',
        calloutData: {
          title: 'Planning your 2026 Vietnam Journey?',
          text: 'From customized multi-city private tours to airport pickup and fast-track immigration, Viet Entry Travel crafts seamless experiences for travelers.',
          buttonText: 'Explore Tour Packages',
          buttonHref: '/tours',
        },
      },
    ],
    relatedPosts: [2, 3, 4],
  },
  {
    id: 2,
    slug: 'complete-vietnam-evisa-guide-2026',
    title: 'Complete Vietnam eVisa Guide: Everything You Need to Know',
    excerpt: 'Step-by-step instructions for obtaining your Vietnam eVisa in 2026 — 90-day validity, eligibility, official fees, entry ports, and common refusal pitfalls.',
    heroImage: '/images/services/service-evisa.jpg',
    category: 'Visa Guide',
    tag: 'Visa Guide',
    author: 'Lan Nguyen',
    authorRole: 'Immigration & Visa Specialist',
    authorBio: 'Lan has assisted over 20,000 international visitors from 60+ countries in securing smooth, error-free entry into Vietnam.',
    date: 'Feb 10, 2026',
    readTime: '7 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'Under the landmark amendments to Vietnam\'s Law on Foreigners’ Entry and Exit, the Vietnam Electronic Visa (eVisa) system has expanded dramatically. Today, travelers from all nations can apply for a convenient electronic visa that allows stays of up to 90 days with single or multiple entries. Here is everything you need to know to guarantee a seamless entry in 2026.',
      },
      {
        type: 'heading',
        id: 'what-is-evisa',
        body: '1. Key Rules of the Vietnam eVisa (2026 Policy)',
      },
      {
        type: 'text',
        body: 'The Vietnam eVisa is an official digital authorization issued directly by the Vietnam Immigration Department. It is delivered as a PDF document bearing a verifiable QR code that you print and present directly at passport control — no visa-on-arrival approval letters, no airport queue at stamping counters, and no cash stamping fees required.',
      },
      {
        type: 'table',
        tableData: {
          headers: ['Feature', 'Single Entry', 'Multiple Entry'],
          rows: [
            ['Maximum Validity', 'Up to 90 Days', 'Up to 90 Days'],
            ['Official Govt Fee', 'US$ 25 (non-refundable)', 'US$ 50 (non-refundable)'],
            ['Standard Processing', '3 - 5 business days', '3 - 5 business days'],
            ['Rush Processing', '4h - 24h (via Viet Entry)', '4h - 24h (via Viet Entry)'],
            ['Eligible Nationalities', 'All countries & territories', 'All countries & territories'],
          ],
        },
      },
      {
        type: 'heading',
        id: 'requirements',
        body: '2. Required Documents Checklist',
      },
      {
        type: 'text',
        body: 'To prepare your application, you must have the following files ready in digital format (JPG or PNG, max 2MB):',
      },
      {
        type: 'text',
        body: '• Passport: Must have at least 6 months validity from your intended departure date from Vietnam, with at least 2 consecutive blank pages.\n• Passport Data Page Scan: A clear, uncropped color scan of your passport biographical page showing all four corners and the machine-readable zone (MRZ text lines at bottom).\n• Portrait Photo: 4x6 cm photo taken within the last 6 months, straight face, white background, no glasses, no hats or dark glasses (religious headwear permitted if face is uncovered).\n• Temporary Address: Your first night’s hotel name and full street address in Vietnam.\n• Designated Ports of Entry & Exit: The exact airport, border checkpoint, or seaport you plan to use.',
      },
      {
        type: 'tip',
        body: '💡 Pro Tip on Photos: Never take a photo of a printed paper photo on your desk with your smartphone. Use a proper digital passport photo app with a clean pure white background to prevent automatic system rejection.',
      },
      {
        type: 'heading',
        id: 'eligible-ports',
        body: '3. Where Can You Enter with an eVisa?',
      },
      {
        type: 'text',
        body: 'Vietnam eVisa is accepted at 38 international border gates across the country:',
      },
      {
        type: 'text',
        body: '• 13 International Airports: Noi Bai (Hanoi), Tan Son Nhat (Ho Chi Minh City), Da Nang, Cam Ranh (Nha Trang), Phu Quoc, Cat Bi (Hai Phong), Van Don (Quang Ninh), Can Tho, Phu Bai (Hue), Lien Khuong (Da Lat), Da Nang, Chu Lai, and Tho Xuan.\n• 16 Land Border Gates: Huu Nghi, Lao Cai, Mong Cai (with China); Cau Treo, Cha Lo, Lao Bao, Bo Y (with Laos); Moc Bai, Ha Tien, Tinh Bien (with Cambodia).\n• 9 International Seaports: Hon Gai, Hai Phong, Nha Trang, Da Nang, Quy Nhon, Vung Tau, Ho Chi Minh City, Chan May, and Duong Dong.',
      },
      {
        type: 'heading',
        id: 'common-mistakes',
        body: '4. Critical Mistakes That Cause Visa Rejections',
      },
      {
        type: 'text',
        body: 'Every month, hundreds of travelers are turned away at airport check-in desks due to avoidable eVisa data discrepancies. Pay close attention to:',
      },
      {
        type: 'text',
        body: '1. Inverted Name Order: In Vietnam, family name comes first. Always enter your Full Name matching the exact sequence of characters in the MRZ line of your passport.\n2. Date Format Confusion: Official Vietnamese forms use Day/Month/Year (DD/MM/YYYY). Entering MM/DD/YYYY can invalidate your visa by months.\n3. Missing Middle Names: Omitting a middle name that appears on your passport page is considered an identity mismatch by immigration officers.\n4. Changing Entry Port: Under current regulations, entering through a different checkpoint than stated on your approved eVisa can lead to delays or denial of boarding by airlines.',
      },
      {
        type: 'callout',
        calloutData: {
          title: 'Need Guaranteed Fast-Track eVisa Approval?',
          text: 'Viet Entry Travel reviews all passport scans, corrects formatting errors before submission, and offers express 4-hour to 24-hour turnaround with a 99% approval guarantee.',
          buttonText: 'Apply for Vietnam eVisa',
          buttonHref: '/evisa',
        },
      },
    ],
    relatedPosts: [1, 4, 7],
  },
  {
    id: 3,
    slug: 'best-vietnamese-street-food-ultimate-bucket-list',
    title: 'Best Vietnamese Street Food: A Foodie\'s Ultimate Bucket List',
    excerpt: 'Phở, bánh mì, bún chả, and beyond — discover the authentic flavors, cultural history, and legendary addresses that make Vietnamese cuisine unforgettable.',
    heroImage: '/images/food/pho-ha-noi.jpg',
    category: 'Food & Culture',
    tag: 'Food & Culture',
    author: 'Minh Tran',
    authorRole: 'Travel Expert',
    authorBio: 'Minh has spent decades exploring local street food stalls and traditional culinary masters across Vietnam\'s three distinct regions.',
    date: 'Feb 5, 2026',
    readTime: '8 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'Vietnamese cuisine is celebrated worldwide for its masterful harmony of the five fundamental taste elements: sweet, sour, salty, bitter, and spicy. Fresh herbs, vibrant aromatics, and clean broths define every meal. To eat like a true local, step away from high-end hotel dining rooms and take a low plastic stool on the sidewalk.',
      },
      {
        type: 'heading',
        id: 'pho',
        body: '1. Phở Bò — The National Culinary Symbol',
      },
      {
        type: 'image',
        src: '/images/food/pho-ha-noi.jpg',
        caption: 'A steaming bowl of Phở Bò Tái Nạm with fresh herbs, lime, and sliced chili in Hanoi',
      },
      {
        type: 'text',
        body: 'Originating in northern Vietnam in the early 20th century, Phở is built upon a delicate, crystal-clear beef bone broth simmered for 12 to 18 hours with charred ginger, shallots, star anise, cinnamon, black cardamom, and coriander seeds. Flat rice noodles (bánh phở) are topped with tender rare beef (tái), well-done flank (nạm), and heaps of scallions.',
      },
      {
        type: 'tip',
        body: '📍 Legendary Stalls: Phở Bát Đàn (49 Bát Đàn, Hoàn Kiếm, Hà Nội — wait in line for the traditional self-service bowl); Phở Thìn (13 Lò Đúc, Hà Nội — famous for flash-stir-fried beef with garlic).',
      },
      {
        type: 'heading',
        id: 'banh-mi',
        body: '2. Bánh Mì — The Masterpiece of French-Vietnamese Fusion',
      },
      {
        type: 'image',
        src: '/images/food/banh-mi-sai-gon.jpg',
        caption: 'Crisp airy Vietnamese baguette loaded with liver pâté, Vietnamese ham, and pickled vegetables',
      },
      {
        type: 'text',
        body: 'The French introduced the baguette to Indochina, but the Vietnamese perfected it into the world’s greatest sandwich. A feather-light, glass-crisp crust gives way to rich chicken liver pâté, creamy egg-yolk mayonnaise, sliced Vietnamese pork roll (chả lụa), roasted pork, crisp cucumber, crunchy pickled daikon and carrot, fresh cilantro, and a dash of savory Maggi sauce.',
      },
      {
        type: 'tip',
        body: '📍 Legendary Stalls: Bánh Mì Huỳnh Hoa (26 Lê Thị Riêng, Dist 1, HCMC — famous for monstrous portions with 8 meat layers); Bánh Mì Phượng (2B Phan Châu Trinh, Hội An — praised by Anthony Bourdain).',
      },
      {
        type: 'heading',
        id: 'bun-cha',
        body: '3. Bún Chả — Hanoi’s Charcoal-Grilled Specialty',
      },
      {
        type: 'image',
        src: '/images/food/bun-cha.jpg',
        caption: 'Charcoal-grilled pork patties and belly swimming in sweet-savory fish sauce dipping broth',
      },
      {
        type: 'text',
        body: 'Made internationally famous when President Barack Obama and chef Anthony Bourdain dined together on plastic stools in 2016, Bún Chả consists of two types of pork: minced pork patties and thinly sliced pork belly, both grilled over smoky charcoal. They are served immersed in a warm bowl of light fish sauce sweetened with sugar and tart with vinegar, accompanied by tender rice vermicelli, crispy spring rolls (nem rán), and baskets of perilla, mint, and lettuce.',
      },
      {
        type: 'tip',
        body: '📍 Legendary Stalls: Bún Chả Hương Liên (24 Lê Văn Hưu, Hà Nội — the original "Obama Bun Cha"); Bún Chả Đắc Kim (1 Hàng Mành, Hoàn Kiếm, Hà Nội).',
      },
      {
        type: 'heading',
        id: 'com-tam',
        body: '4. Cơm Tấm Sườn Bì Chả — Saigon’s Broken Rice Legend',
      },
      {
        type: 'text',
        body: 'Originally eaten by poor farmers who salvaged broken rice grains fractured during milling, Cơm Tấm is now the quintessential comfort food of Ho Chi Minh City. The fractured grains have a unique nutty chew, topped with a tender lemongrass-marinated grilled pork chop (sườn), shredded pork skin tossed in toasted rice powder (bì), a slice of steamed egg and pork meatloaf (chả trứng), a sunny-side-up egg, scallion oil, and sweet garlic-chili fish sauce.',
      },
      {
        type: 'heading',
        id: 'banh-xeo',
        body: '5. Bánh Xèo — Sizzling Crispy Turmeric Crepe',
      },
      {
        type: 'text',
        body: 'The name "Bánh Xèo" mimics the loud sizzling sound made when rice batter enriched with turmeric and coconut milk hits a red-hot skillet. Filled with river shrimp, thinly sliced pork, and bean sprouts, this golden crescent is cut into pieces, wrapped in mustard greens or rice paper with fragrant herbs, and dipped into sweet-sour chili fish sauce or rich peanut-liver dipping sauce.',
      },
      {
        type: 'quote',
        body: '"Street food in Vietnam is not just about fuel; it is a live public theater where every vendor is a master of their single, lifelong craft."',
        author: 'Minh Tran, Travel Expert',
      },
      {
        type: 'callout',
        calloutData: {
          title: 'Hungry for Vietnam\'s Culinary Secrets?',
          text: 'Check out our dedicated Vietnam Culinary Experiences page with in-depth regional guides, ingredients, and authentic recipes from north to south.',
          buttonText: 'Explore Culinary Experiences',
          buttonHref: '/culinary',
        },
      },
    ],
    relatedPosts: [1, 8, 4],
  },
  {
    id: 4,
    slug: 'what-to-pack-for-vietnam-season-guide',
    title: 'What to Pack for Vietnam: Season-by-Season Packing Tips',
    excerpt: 'From the humid tropical south to the chilly mountains of the north — our ultimate packing checklist covering weather essentials, temple etiquette, and digital gear.',
    heroImage: '/images/destinations/ho-chi-minh-city.jpg',
    category: 'Travel Tips',
    tag: 'Travel Tips',
    author: 'Hoa Le',
    authorRole: 'Senior Travel Consultant',
    authorBio: 'Hoa has prepared over 10,000 international travelers with packing checklists, customs advisories, and weather forecasts for Vietnam.',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'Packing for Vietnam can be surprisingly tricky. Because the country extends over 1,650 kilometers across diverse latitudes and topographies, it spans multiple distinct climate zones simultaneously. While Ho Chi Minh City basks in 32°C sunshine, Sa Pa and Ha Giang can hover near freezing with thick mountain fog. Here is how to pack smart for every region and season.',
      },
      {
        type: 'heading',
        id: 'climate-zones',
        body: '1. Understanding Vietnam’s Three Climate Zones',
      },
      {
        type: 'text',
        body: '• Northern Vietnam (Hanoi, Ha Long, Sa Pa, Ha Giang):\nHas four distinct seasons. Winter (December to February) is damp and cold (10°C–15°C in Hanoi, occasionally dropping to 0°C–5°C in Sa Pa mountains). Summer (May to August) is hot, humid, and rainy (30°C–38°C). Autumn (September to November) and Spring (March to April) are pleasant and ideal for travel.\n\n• Central Vietnam (Hue, Da Nang, Hoi An, Nha Trang):\nWarm and dry from February to August (temperatures up to 35°C). The rainy and monsoon season runs from September to November, with heavy downpours and occasional tropical storms.\n\n• Southern Vietnam (Ho Chi Minh City, Mekong Delta, Phu Quoc):\nTropical climate with two distinct seasons: dry season (December to April) with constant sunshine, and wet season (May to November) characterized by short, torrential afternoon showers that clear quickly.',
      },
      {
        type: 'heading',
        id: 'clothing-etiquette',
        body: '2. Clothing & Cultural Etiquette',
      },
      {
        type: 'text',
        body: '• Temple & Pagoda Dress Code: Vietnamese temples, the Imperial Citadel in Hue, and the Ho Chi Minh Mausoleum in Hanoi enforce strict modesty. Shoulders and knees MUST be covered. Tank tops, short skirts, and short shorts are strictly barred. Pack lightweight linen pants, maxi dresses, or carry a sarong/scarf in your daypack.\n• Fabrics: Choose breathable, moisture-wicking natural fabrics like linen, merino wool, or bamboo. Synthetic polyesters trap sweat in humid tropical conditions.\n• Footwear: Bring comfortable slip-on walking shoes or sandals. You will remove your shoes when entering Buddhist temples, pagoda sanctuaries, and traditional homestays.',
      },
      {
        type: 'tip',
        body: '💡 Pro Tip: Never overpack heavy clothes. Vietnam has top-quality overnight laundry services on almost every corner costing only $1–$2 per kilogram, returning fresh folded clothes within 24 hours.',
      },
      {
        type: 'heading',
        id: 'electronics',
        body: '3. Electronics & Digital Connectivity',
      },
      {
        type: 'text',
        body: '• Power Plugs: Vietnam uses 220V, 50Hz. Most modern hotel sockets are universal combination sockets that accept US Type A/B plugs, European Type C/F plugs, and British Type G plugs. A universal travel adapter is recommended.\n• Portable Power Bank: A 10,000mAh to 20,000mAh power bank is essential for long boat trips in Ha Long Bay, sleeper bus rides, and full days of photo taking.\n• eSIM / Mobile Data: Buy and pre-install a Vietnam travel eSIM QR code before your departure. The moment your plane touches down at Noi Bai or Tan Son Nhat airport, you will have instant 4G/5G data without hunting for airport SIM counters.',
      },
      {
        type: 'heading',
        id: 'health-safety',
        body: '4. Health, Toiletries & First-Aid Essentials',
      },
      {
        type: 'text',
        body: '• Sun Protection: Broad-spectrum SPF 50+ sunscreen, UV sunglasses, and a wide-brim hat are vital under intense tropical sun.\n• Insect Repellent: A high-strength DEET (20–30%) or Picaridin mosquito spray is recommended for Mekong Delta boat rides and northern jungle trekking.\n• Personal Pharmacy: Pack oral rehydration salts (electrolytes), activated charcoal / loperamide for stomach upsets, motion sickness pills for winding mountain roads in Ha Giang, and standard pain relievers.',
      },
      {
        type: 'callout',
        calloutData: {
          title: 'Stay Connected Across Vietnam from Day One',
          text: 'Get high-speed 4G/5G data with instant QR delivery and zero physical SIM swapping. Ready for Google Maps, Grab, and social sharing right on arrival.',
          buttonText: 'Get Vietnam Travel eSIM',
          buttonHref: 'https://card.vietentrytravel.com',
        },
      },
    ],
    relatedPosts: [1, 2, 7],
  },
  {
    id: 5,
    slug: 'hidden-gems-northern-vietnam',
    title: 'Hidden Gems of Northern Vietnam: Beyond Ha Long Bay',
    excerpt: 'Venture beyond tourist hotspots to discover the roaring cascades of Ban Gioc, the golden stairs of Mu Cang Chai, and the mirror lakes of Ba Be.',
    heroImage: '/images/tours/ha-giang-loop.jpg',
    category: 'Destinations',
    tag: 'Off the Beaten Path',
    author: 'Tuan Vo',
    authorRole: 'Adventure Guide',
    authorBio: 'Tuan has led over 200 trekking and motorcycle expeditions across Northern Vietnam’s most remote frontier provinces.',
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'While Ha Long Bay rightfully captures global headlines, Northern Vietnam holds some of the most breathtaking, unspoiled wilderness in Southeast Asia. For travelers seeking raw landscapes, authentic ethnic minority encounters, and genuine solitude, these northern hidden gems are nothing short of magical.',
      },
      {
        type: 'heading',
        id: 'ban-gioc',
        body: '1. Ban Gioc Waterfall — The Majestic Border Cascade',
      },
      {
        type: 'text',
        body: 'Straddling the international border between Cao Bang province in Vietnam and Guangxi in China, Ban Gioc is the fourth-largest transborder waterfall in the world. Fed by the turquoise Quay Son River, the falls cascade over multiple natural limestone terraces framed by lush bamboo groves. Board a bamboo raft to motor right up to the roaring white spray at the base of the main drop.',
      },
      {
        type: 'heading',
        id: 'mu-cang-chai',
        body: '2. Mu Cang Chai — The Masterpiece of Terraced Rice Fields',
      },
      {
        type: 'image',
        src: '/images/tours/mu-cang-chai-terrace.jpg',
        caption: 'Golden ripe rice terraces blanketing the mountains of Mu Cang Chai in harvest season',
      },
      {
        type: 'text',
        body: 'Located in Yen Bai province along the dramatic Khau Pha Pass (one of Vietnam’s "Great Four Passes"), Mu Cang Chai features 2,200 hectares of terraced fields sculpted by generations of Hmong farmers. During the golden harvest season (mid-September to mid-October), the entire mountain valley transforms into a glowing amphitheater of golden yellow.',
      },
      {
        type: 'heading',
        id: 'ba-be-lake',
        body: '3. Ba Be Lake — The Mirror Waters of the Forest',
      },
      {
        type: 'text',
        body: 'Surrounded by sheer karst mountains and ancient primeval rainforests in Bac Kan province, Ba Be is Vietnam’s largest natural freshwater lake. Stay at a traditional Tay wooden stilt homestay in Pac Ngoi village, take an electric longboat across the glassy green waters, and explore Puong Cave carved through an entire mountain.',
      },
      {
        type: 'heading',
        id: 'pu-luong',
        body: '4. Pu Luong Nature Reserve — Pristine Tranquility',
      },
      {
        type: 'text',
        body: 'Only 3.5 hours southwest of Hanoi in Thanh Hoa province, Pu Luong offers the terraced beauty of Sa Pa without the commercial tourist crowds. Hike past giant bamboo water wheels, trek through Thai and Muong minority villages, and relax in eco-lodges overlooking misty karst valleys.',
      },
      {
        type: 'tip',
        body: '💡 Pro Tip: Combine Ninh Binh, Mai Chau, and Pu Luong into a seamless 4-day private loop for the ultimate taste of northern pastoral charm without long overnight train rides.',
      },
    ],
    relatedPosts: [1, 4, 6],
  },
  {
    id: 6,
    slug: 'vietnam-unesco-world-heritage-sites-guide',
    title: 'A Guide to Vietnam\'s 8 UNESCO World Heritage Sites',
    excerpt: 'Explore all 8 UNESCO World Heritage Sites in Vietnam — from the ancient palaces of Hue to the monumental cave systems of Phong Nha-Ke Bang.',
    heroImage: '/images/tours/hoi-an-ancient-town.jpg',
    category: 'Destinations',
    tag: 'Heritage',
    author: 'Lan Nguyen',
    authorRole: 'Cultural Heritage Specialist',
    authorBio: 'Lan is a cultural historian who specializes in Indochinese architecture and traditional Southeast Asian archaeology.',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'Vietnam is privileged to preserve 8 UNESCO World Heritage Sites (5 cultural, 2 natural, and 1 mixed), reflecting thousands of years of royal dynasties, intercultural trading maritime hubs, and ancient geological phenomena. Here is your comprehensive guide to visiting all eight.',
      },
      {
        type: 'heading',
        id: 'unesco-list',
        body: 'The 8 UNESCO World Heritage Sites of Vietnam',
      },
      {
        type: 'text',
        body: '1. Ha Long Bay (Quang Ninh — Natural Heritage, inscribed 1994, 2000, 2023):\nWorld-famous marine karst ecosystem of 1,969 islands and ancient caves.\n\n2. Trang An Landscape Complex (Ninh Binh — Mixed Natural & Cultural, inscribed 2014):\nSoutheast Asia’s first dual UNESCO heritage site, featuring karst towers, archaeological caves with evidence of human occupation dating back 30,000 years, and historic temples.\n\n3. Complex of Hue Monuments (Thua Thien Hue — Cultural Heritage, inscribed 1993):\nThe former seat of the Nguyen Emperors, boasting the Citadel, Forbidden Purple City, and elaborate royal imperial tombs.\n\n4. Hoi An Ancient Town (Quang Nam — Cultural Heritage, inscribed 1999):\nAn intact Asian trading port with over 1,000 historic timber-frame houses, Chinese assembly halls, and the Japanese Covered Bridge.\n\n5. My Son Sanctuary (Quang Nam — Cultural Heritage, inscribed 1999):\nThe spiritual capital of the ancient Hindu Champa Kingdom from the 4th to 13th centuries, featuring red-brick tower temples dedicated to Shiva in a lush jungle valley.\n\n6. Phong Nha-Ke Bang National Park (Quang Binh — Natural Heritage, inscribed 2003, 2015):\nThe oldest karst mountain formation in Asia (~400 million years), harboring the world\'s largest cave Son Doong and over 300 spectacular caverns.\n\n7. Central Sector of the Imperial Citadel of Thang Long (Hanoi — Cultural Heritage, inscribed 2010):\nThe military and political center of Vietnamese power for 13 continuous centuries from Chinese Tang dynasty rule through independent Vietnamese dynasties.\n\n8. Citadel of the Ho Dynasty (Thanh Hoa — Cultural Heritage, inscribed 2011):\nA 14th-century fortress built entirely of massive, mortarless stone blocks, demonstrating a unique fusion of Confucian philosophy and defensive architecture.',
      },
      {
        type: 'tip',
        body: '💡 Itinerary Tip: A 10-day itinerary from Hanoi to Hue and Hoi An allows you to conveniently visit 5 of these 8 UNESCO sites along the classic heritage corridor.',
      },
    ],
    relatedPosts: [1, 3, 5],
  },
  {
    id: 7,
    slug: 'how-to-get-around-vietnam-transport-tips',
    title: 'How to Get Around Vietnam: Transport Tips for Travelers',
    excerpt: 'Domestic flights, sleeper trains, luxury limousines, and Grab — everything you need to navigate travel in Vietnam safely, comfortably, and efficiently.',
    heroImage: '/images/services/service-transfer.jpg',
    category: 'Travel Tips',
    tag: 'Transport',
    author: 'Hoa Le',
    authorRole: 'Senior Travel Consultant',
    authorBio: 'Hoa coordinates domestic transit logistics for thousands of tourists navigating Vietnam from mountain passes to coastal highways.',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'Getting around Vietnam is an exhilarating part of the adventure. With modern highways, high-speed domestic flights, scenic railways, and private executive transfer vans, moving between regions has never been smoother. Here is our breakdown of the best transportation options.',
      },
      {
        type: 'heading',
        id: 'trains',
        body: '1. The Reunification Express (North-South Railway)',
      },
      {
        type: 'text',
        body: 'Connecting Hanoi and Ho Chi Minh City along a 1,726-kilometer route, the legendary train offers one of Asia’s most romantic rail journeys. The 3-hour stretch between Hue and Da Nang hugs the cliffs of the Hai Van Pass and Lang Co Bay, offering dizzying ocean vistas directly from your train window. For overnight stretches (such as Hanoi to Hue or Da Nang), book a 4-berth soft-sleeper cabin or private tourist carriage (Chapa Express, Laman Express, Violette).',
      },
      {
        type: 'heading',
        id: 'private-transfers',
        body: '2. Private Airport & City-to-City Transfers',
      },
      {
        type: 'image',
        src: '/images/services/service-transfer.jpg',
        caption: 'Executive private transfer car with chauffeur greeting guests at Hanoi Noi Bai airport',
      },
      {
        type: 'text',
        body: 'For intercity hops such as Hanoi to Ha Long Bay (2 hours via the modern express tollway) or Da Nang to Hoi An (45 minutes), pre-booked private transfers offer the ultimate comfort. Modern luxury DCar Limousines feature reclining massage leather seats, onboard Wi-Fi, USB charging ports, and professional English-speaking drivers who track your flight status in real time.',
      },
      {
        type: 'heading',
        id: 'ride-hailing',
        body: '3. Grab & Electric Taxis in Cities',
      },
      {
        type: 'text',
        body: 'Inside major cities like Hanoi, Ho Chi Minh City, and Da Nang, download the Grab app or Xanh SM (VinFast electric taxis). Fares are fixed upfront, eliminating language barriers and meter-tampering scams. For solo travelers wanting a thrill, booking a GrabBike through bustling streets is fast, affordable, and safe.',
      },
    ],
    relatedPosts: [2, 4, 1],
  },
  {
    id: 8,
    slug: 'vietnamese-coffee-culture-guide',
    title: 'Vietnamese Coffee Culture: From Phin Drip to Egg Coffee & Salt Coffee',
    excerpt: 'Vietnam is the world\'s second-largest coffee producer. Dive into its unique coffee heritage — from street-corner plastic stools to velvety egg and salt coffee.',
    heroImage: '/images/services/service-esim.jpg',
    category: 'Food & Culture',
    tag: 'Coffee Culture',
    author: 'Minh Tran',
    authorRole: 'Travel Expert',
    authorBio: 'Minh is a lifelong coffee enthusiast who has traced Vietnam\'s bean trails from the basalt soils of Buon Ma Thuot to the historic cafes of Hanoi.',
    date: 'Jan 2, 2026',
    readTime: '6 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'Vietnam is the world’s second-largest coffee producer and the undisputed king of Robusta beans. But coffee in Vietnam is far more than a morning caffeine boost — it is a cherished ritual, a slow social meditation, and an art form enjoyed for hours on low sidewalks.',
      },
      {
        type: 'heading',
        id: 'phin-coffee',
        body: '1. Vietnamese Iced Milk Coffee (Ca Phe Sua Da) — The Classic Phin Drip',
      },
      {
        type: 'text',
        body: 'The quintessential Vietnamese coffee is brewed using a small stainless-steel or aluminum gravity drip filter called a "phin". Dark-roasted Robusta grounds slowly drip over a thick layer of sweetened condensed milk in a glass, then stirred and poured over a glass packed with crushed ice. It is dark, velvety, intensely chocolatey, and delightfully sweet.',
      },
      {
        type: 'heading',
        id: 'egg-coffee',
        body: '2. Egg Coffee (Ca Phe Trung) — Hanoi’s Legendary Delicacy',
      },
      {
        type: 'text',
        body: 'Invented in Hanoi in 1946 by Mr. Nguyen Van Giang (a former bartender at the Sofitel Legend Metropole Hanoi) during the First Indochina War when fresh milk was scarce, egg coffee uses whipped egg yolks, sugar, and condensed milk beaten into a frothy, sabayon-like custard floating atop hot black coffee. It tastes like liquid tiramisu in a cup.',
      },
      {
        type: 'tip',
        body: '📍 Original Address: Cafe Giang (39 Nguyen Huu Huan, Hoan Kiem, Hanoi — the birthplace of egg coffee, still run by Mr. Giang’s children).',
      },
      {
        type: 'heading',
        id: 'salt-coffee',
        body: '3. Salt Coffee (Ca Phe Muoi) — The Modern Hue Sensation',
      },
      {
        type: 'text',
        body: 'Hailing from the imperial city of Hue, salt coffee has taken the entire country by storm. A layer of sea-salt infused whipped cream is layered over robust drip coffee and condensed milk. The gentle salinity cuts through the bitterness of the Robusta bean and enhances its rich caramel notes.',
      },
    ],
    relatedPosts: [3, 1, 4],
  },
  {
    id: 9,
    slug: 'best-beaches-in-vietnam-guide',
    title: 'Best Beaches in Vietnam: Coastal Paradise Guide',
    excerpt: 'From the sapphire bays of Phu Quoc to the untouched dramatic cliffs of Quy Nhon and Con Dao — discover Vietnam\'s finest tropical shores.',
    heroImage: '/images/destinations/phu-quoc.jpg',
    category: 'Destinations',
    tag: 'Beach & Island',
    author: 'Tuan Vo',
    authorRole: 'Adventure Guide',
    authorBio: 'Tuan has sailed and surveyed over 3,000 kilometers of Vietnamese coastline and remote island archipelagos.',
    date: 'Dec 25, 2025',
    readTime: '7 min read',
    featured: false,
    content: [
      {
        type: 'text',
        body: 'Boasting a 3,260-kilometer coastline facing the East Sea and the Gulf of Thailand, Vietnam is home to hundreds of sun-drenched beaches and tropical archipelagos. Whether you seek luxury 5-star beachfront resorts, world-class kiteboarding, or secluded Robinson Crusoe coves, here are the finest coastal gems.',
      },
      {
        type: 'heading',
        id: 'phu-quoc-beaches',
        body: '1. Phu Quoc Island — The Pearl of the Gulf',
      },
      {
        type: 'image',
        src: '/images/destinations/phu-quoc.jpg',
        caption: 'Crystal-clear waters and palm trees on the south coast of Phu Quoc Island',
      },
      {
        type: 'text',
        body: 'Phu Quoc is the ultimate tropical escape. Sao Beach (Bai Sao) on the southeastern coast is famous for squeaky, fine white sand that gently slopes into tranquil turquoise waters. Further south, the An Thoi archipelago features 15 untouched islets accessible by speedboat for vibrant coral reef snorkeling and cliff jumping.',
      },
      {
        type: 'heading',
        id: 'quy-nhon',
        body: '2. Quy Nhon — The Wild Undiscovered Coastline',
      },
      {
        type: 'text',
        body: 'Often called Vietnam’s Maldives, Quy Nhon in Binh Dinh province features dramatic arid cliffs plunging directly into azure water. Ky Co Beach resembles a secluded lagoon surrounded by natural rock pools, while Eo Gio (Windy Strait) provides jaw-dropping cliffside walking paths above crashing waves.',
      },
      {
        type: 'heading',
        id: 'con-dao',
        body: '3. Con Dao Archipelago — Pristine Marine Sanctuary',
      },
      {
        type: 'text',
        body: 'A 45-minute flight from Ho Chi Minh City, Con Dao is an isolated chain of 16 mountainous islands. With over 80% of its land protected as a National Park and marine reserve, you will find nesting sea turtles at Bay Canh Island, vibrant coral reefs, and completely deserted crescent beaches like Dam Trau Beach.',
      },
    ],
    relatedPosts: [1, 5, 7],
  },
];
