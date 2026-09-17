export interface Specialty {
  name: string;
  slug: string;
  province: string;
  category: 'Noodles & Broths' | 'Street Grills & Rolls' | 'Steamed & Rolled' | 'Royal & Imperial' | 'Rice & Claypots' | 'Highland Hearth' | 'Crispy Crepes' | 'Pastries & Drinks';
  image: string;
  gallery: string[];
  description: string;
  origin: string;
  flavorProfile: {
    savory: number; // 1 to 5
    sweet: number;
    sour: number;
    spicy: number;
    herbalUmami: number;
  };
  keyIngredients: string[];
  intro: string;
  culturalHistory: string[];
  recipe: { step: number; title: string; detail: string }[];
  tips: string[];
  bestPlaces: { name: string; location: string; note?: string }[];
}

export interface FoodRegion {
  id: 'north' | 'central' | 'south';
  name: string;
  subtitle: string;
  image: string;
  description: string;
  provinces: string[];
  specialties: Specialty[];
}

const F = '/images/food';

export const regions: FoodRegion[] = [
  {
    id: 'north',
    name: 'Northern Vietnam',
    subtitle: 'Highlands & Red River Delta',
    image: `${F}/pho-ha-noi.jpg`,
    description: 'Refined, subtle, and steeped in a thousand years of culinary heritage — from Hanoi’s ancient guild streets to the misty ethnic valleys of the Northwest.',
    provinces: ['Hanoi', 'Hai Phong', 'Ninh Binh', 'Lao Cai (Sapa)', 'Ha Giang'],
    specialties: [
      {
        name: 'Hanoi Beef Pho (Phở Hà Nội)',
        slug: 'pho-ha-noi',
        province: 'Hanoi',
        category: 'Noodles & Broths',
        image: `${F}/pho-ha-noi.jpg`,
        gallery: [`${F}/pho-ha-noi.jpg`, `${F}/pho-ha-noi-2.jpg`, `${F}/pho-ha-noi-3.jpg`],
        description: 'Crystal-clear 12-hour bone broth infused with charred ginger and star anise. Flat silky rice noodles topped with tender rare beef slices, scallions, and black pepper.',
        origin: 'Hanoi · Red River Delta',
        flavorProfile: { savory: 5, sweet: 2, sour: 2, spicy: 2, herbalUmami: 5 },
        keyIngredients: ['Beef marrow bones', 'Flat rice noodles (bánh phở)', 'Charred ginger', 'Star anise & cinnamon quills', 'Artisanal fish sauce', 'Fresh scallions'],
        intro: 'Pho — the iconic soul of Vietnamese gastronomy, revered across the globe. In Hanoi, pho is not merely a morning meal, but a sacred dawn ritual woven into the thousand-year fabric of the Old Quarter.',
        culturalHistory: [
          'Originating in the early 20th century across Hanoi and Nam Dinh province, pho was born from a creative confluence of indigenous cooking traditions and French culinary technique (such as pot-au-feu). It was first carried through the mist-shrouded morning streets by street hawkers bearing wooden shoulder poles.',
          'During the 1930s and 1940s, Hanoi pho evolved into two legendary disciplines: beef pho (traditional) and chicken pho. Renowned historic broth masters guarded their simmer secrets jealously across successive generations.',
          'Hanoi pho distinguishes itself from its southern counterpart with a broth that is crystal-clear, delicate, and deeply savory — celebrating the pure umami extracted from marrow bones slowly simmered for half a day. True Hanoians take their pho unembellished: just crisp scallions, fresh herbs, cracked pepper, and a spritz of local lime.',
          'In 2024, Vietnamese Pho was inscribed onto UNESCO’s Representative List of Intangible Cultural Heritage, cementing its timeless status as a defining cultural treasure of Vietnam.'
        ],
        recipe: [
          { step: 1, title: 'Bone Simmering (12 Hours)', detail: 'Wash beef marrow and knuckle bones thoroughly, blanch vigorously in boiling water, and rinse clean. Simmer on low heat for 12 hours, continuously skimming foam to achieve a sparkling, pristine broth.' },
          { step: 2, title: 'Roasting Aromatics', detail: 'Char whole ginger and sweet yellow onions over charcoal until blistered and fragrant. Dry-toast star anise, cinnamon quills, black cardamom, cloves, and coriander seeds until aromatic oils release.' },
          { step: 3, title: 'Seasoning the Broth', detail: 'Infuse roasted aromatics into the simmering broth. Season with artisanal fish sauce, rock sugar, and sea salt. Simmer gently for 1-2 hours before straining through muslin cloth.' },
          { step: 4, title: 'Preparing Flat Rice Noodles', detail: 'Select fresh, silky flat rice noodles (bánh phở). Flash-blanch in boiling water for 5-10 seconds and drain immediately into preheated bowls to preserve elasticity.' },
          { step: 5, title: 'Slicing Beef Fillet', detail: 'Chill prime beef tenderloin slightly and slice paper-thin across the grain. When arranged atop hot noodles, boiling broth cooks the beef to tender, pink perfection.' },
          { step: 6, title: 'Assembly & Garnish', detail: 'Assemble noodles and sliced beef, ladle boiling broth generously over the top. Finish with sliced scallions, white onion rings, and cilantro. Serve with crispy fried dough sticks (quẩy), chili, and fresh lime.' }
        ],
        tips: [
          'Pho is at its absolute peak in the early morning — when the overnight broth is richest and freshest.',
          'Hanoi’s most celebrated pho establishments often sell out before mid-morning — arrive early.',
          'Savor the broth first without heavy chili sauce to appreciate the nuanced layers of roasted aromatics.',
          'Dip crispy fried dough crullers (quẩy) into the hot broth for an authentic local texture.'
        ],
        bestPlaces: [
          { name: 'Pho Thin Bo Ho', location: '13 Lo Duc, Hoan Kiem, Hanoi', note: 'Famous for flash-sautéed rare beef with mountain garlic' },
          { name: 'Pho Bat Dan', location: '49 Bat Dan, Hoan Kiem, Hanoi', note: 'Historic broth master with morning queues since the 1960s' },
          { name: 'Pho Ly Quoc Su', location: '10 Ly Quoc Su, Hoan Kiem, Hanoi', note: 'Signature tender brisket and golden broth near St. Joseph Cathedral' }
        ]
      },
      {
        name: 'Hanoi Charcoal Grilled Pork Noodles (Bún Chả)',
        slug: 'bun-cha',
        province: 'Hanoi',
        category: 'Street Grills & Rolls',
        image: `${F}/bun-cha.jpg`,
        gallery: [`${F}/bun-cha.jpg`, `${F}/bun-cha-2.jpg`, `${F}/bun-cha-3.jpg`],
        description: 'Smoky charcoal-grilled pork patties and belly slices served in warm sweet-tangy dipping broth with pickled green papaya, rice vermicelli, and fresh herbs.',
        origin: 'Hanoi · Red River Delta',
        flavorProfile: { savory: 4, sweet: 4, sour: 3, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Pork belly & shoulder', 'Artisanal fish sauce', 'Rice vermicelli (bún)', 'Green papaya & carrot pickle', 'Charcoal smoke', 'Vietnamese balm (kinh giới)'],
        intro: 'Bun Cha — the quintessential spirit of Hanoi street dining. The intoxicating scent of pork patties sizzling over open charcoal wafts through Old Quarter alleyways at midday, drawing diners to communal plastic stools.',
        culturalHistory: [
          'Bun Cha has defined Hanoi’s midday street culture since the 19th century. Unlike other regional noodle dishes, Bun Cha is grilled fresh to order directly on sidewalks over smoking charcoal embers, creating an unforgettable sensory streetscape.',
          'In 2016, Bun Cha gained worldwide fame when U.S. President Barack Obama and chef Anthony Bourdain shared a casual dinner of bun cha and cold beer at Huong Lien restaurant in Hanoi.',
          'By long-standing tradition, Bun Cha is strictly a lunch affair in Hanoi. Locals cherish eating it under the midday sun when charcoal aromas are at their most vibrant.'
        ],
        recipe: [
          { step: 1, title: 'Handcrafted Pork Meatballs', detail: 'Mince pork shoulder and pork belly with premium fish sauce, ground black pepper, shallots, and caramel syrup. Shape into flattened patties and marinate for 2 hours.' },
          { step: 2, title: 'Marinating Sliced Pork Belly', detail: 'Thinly slice pork belly and marinate with honey, crushed garlic, shallots, and fish sauce. Refrigerate overnight for deep flavor penetration.' },
          { step: 3, title: 'Grilling over Coconut Charcoal', detail: 'Arrange meat on handheld wire grilling baskets and grill over glowing coconut charcoal. Baste continuously with rendered juices until beautifully caramelized with smoky charred edges.' },
          { step: 4, title: 'Balancing Dipping Broth', detail: 'Whisk together warm water, premium fish sauce, rice vinegar, sugar, minced garlic, and bird’s-eye chili to create an addictive sweet, sour, salty, and spicy balance. Add pickled green papaya and carrots.' },
          { step: 5, title: 'Plating & Presentation', detail: 'Submerge sizzling grilled pork into warm dipping broth. Serve alongside a platter of cool rice vermicelli noodles, fresh perilla, Vietnamese balm, lettuce, and crispy crab spring rolls (nem cua bể).' }
        ],
        tips: [
          'Eat bun cha for lunch to experience authentic Hanoi dining culture.',
          'Always look for vendors grilling fresh over charcoal on the spot rather than reheating.',
          'Order a side of crispy sea crab spring rolls (nem rán / nem cua bể) for the complete culinary experience.'
        ],
        bestPlaces: [
          { name: 'Bun Cha Huong Lien (Obama Bun Cha)', location: '24 Le Van Huu, Hai Ba Trung, Hanoi', note: 'Historic location of the Obama-Bourdain dinner' },
          { name: 'Bun Cha Dac Kim', location: '1 Hang Manh, Hoan Kiem, Hanoi', note: 'Generous portions of charcoal-grilled patties in the Old Quarter' },
          { name: 'Bun Cha Ta', location: '21 Nguyen Huu Huan, Hoan Kiem, Hanoi', note: 'Refined presentation with exceptionally balanced dipping sauce' }
        ]
      },
      {
        name: 'La Vong Sizzling Turmeric Fish (Chả Cá Lã Vọng)',
        slug: 'cha-ca-la-vong',
        province: 'Hanoi',
        category: 'Street Grills & Rolls',
        image: `${F}/cha-ca-la-vong.jpg`,
        gallery: [`${F}/cha-ca-la-vong.jpg`, `${F}/cha-ca-la-vong-2.jpg`, `${F}/cha-ca-la-vong-3.jpg`],
        description: 'Fresh catfish marinated in golden turmeric and galangal, sizzled tableside in a hot pan with mountain dill and spring onions, served with roasted peanuts and rice noodles.',
        origin: 'Hanoi · Red River Delta',
        flavorProfile: { savory: 5, sweet: 1, sour: 2, spicy: 2, herbalUmami: 5 },
        keyIngredients: ['Hemibagrus catfish (cá lăng)', 'Fresh turmeric & galangal', 'Fermented rice paste (mẻ)', 'Fresh mountain dill & scallions', 'Fermented shrimp paste (mắm tôm)', 'Roasted peanuts'],
        intro: 'Chả Cá Lã Vọng is Hanoi’s most storied tableside ritual. Originating in 1871 during the French colonial era, it became so legendary that the entire street was officially renamed Chả Cá Street.',
        culturalHistory: [
          'Created by the Doan family at 14 Hang Son street in 1871, the dish was originally prepared as a secret meeting feast for patriotic revolutionaries resisting colonial rule.',
          'A statue of La Vong (Lu Shang, the patient ancient sage holding a fishing rod) stood at the doorway, giving the restaurant and dish its immortal title.',
          'Diners cook the turmeric-marinated catfish chunks tableside in bubbling oil with towering mountains of fresh dill and scallions, filling the dining room with an unmistakable herbal aroma.'
        ],
        recipe: [
          { step: 1, title: 'Marinating Catfish Fillets', detail: 'Dice fresh catfish into bite-sized medallions. Marinate with pounded turmeric root, crushed galangal, fermented rice paste, fish sauce, and shrimp paste for 3 hours.' },
          { step: 2, title: 'Charcoal Pre-Grill', detail: 'Clamp fish slices in bamboo grates and briefly grill over charcoal until golden and smoky on the exterior.' },
          { step: 3, title: 'Tableside Sizzle', detail: 'Heat lard or cooking oil in a tabletop pan. Add grilled fish along with huge handfuls of fresh dill sprigs and green scallions.' },
          { step: 4, title: 'Assembly', detail: 'Transfer hot fish and wilted greens over a bowl of cold rice vermicelli. Top with roasted peanuts and a spoonful of frothy fermented shrimp paste spiked with lime and chili.' }
        ],
        tips: [
          'Don’t be shy about fermented shrimp paste (mắm tôm) — whipped with lime juice and rice liquor, it is the authentic soul of this dish.',
          'Keep adding fresh dill into the pan continuously as it wilts down into tender, aromatic greens.'
        ],
        bestPlaces: [
          { name: 'Cha Ca La Vong (Original)', location: '14 Cha Ca, Hoan Kiem, Hanoi', note: 'The historic birthplace operating for over 150 years' },
          { name: 'Cha Ca Thang Long', location: '19-21-31 Duong Thanh, Hoan Kiem, Hanoi', note: 'Beloved by locals for tender fish and crisp herbal freshness' }
        ]
      },
      {
        name: 'Thanh Tri Steamed Rice Rolls (Bánh Cuốn)',
        slug: 'banh-cuon-thanh-tri',
        province: 'Hanoi',
        category: 'Steamed & Rolled',
        image: `${F}/banh-cuon-thanh-tri.jpg`,
        gallery: [`${F}/banh-cuon-thanh-tri.jpg`, `${F}/banh-cuon-thanh-tri-2.jpg`, `${F}/banh-cuon-thanh-tri-3.jpg`],
        description: 'Paper-thin freshly steamed rice sheets rolled with seasoned minced pork and wood-ear mushrooms, topped with crispy golden shallots and savory dipping sauce.',
        origin: 'Thanh Tri · Hanoi',
        flavorProfile: { savory: 4, sweet: 2, sour: 2, spicy: 1, herbalUmami: 4 },
        keyIngredients: ['Aged rice batter', 'Minced pork', 'Wood-ear mushrooms (mộc nhĩ)', 'Crispy shallots', 'Vietnamese pork sausage (chả lụa)', 'Light warm fish sauce dipping broth'],
        intro: 'Bánh Cuốn represents the pinnacle of Vietnamese steaming craft. Skilled street artisans pour silky fermented rice batter onto taut cotton cloth stretched over bubbling cauldrons, lifting gossamer sheets in seconds with a bamboo wand.',
        culturalHistory: [
          'Thanh Tri, an ancient craft village south of Hanoi, has supplied steamed rice rolls to the capital for centuries. Royal chronicles record that Bánh Cuốn was offered as tribute to Tran Dynasty emperors.',
          'Unlike heavier regional variants, traditional Hanoi Bánh Cuốn celebrates extreme delicacy: the steamed wrapper is translucent enough to reveal the seasoned black mushroom filling inside.'
        ],
        recipe: [
          { step: 1, title: 'Rice Batter Fermentation', detail: 'Grind soaked non-glutinous rice with water into a silken batter. Let stand overnight to achieve the signature translucent elasticity.' },
          { step: 2, title: 'Filling Preparation', detail: 'Finely mince lean pork shoulder, shallots, and wood-ear mushrooms. Sauté until fragrant and seasoned lightly with black pepper and fish sauce.' },
          { step: 3, title: 'Steaming on Stretched Cloth', detail: 'Spread a thin ladle of batter over a steaming cloth lid. Cover with a conical lid for 45 seconds.' },
          { step: 4, title: 'Rolling & Garnish', detail: 'Lift the delicate sheet with a bamboo blade onto an oiled tray, place filling, roll neatly, and shower with golden shallots.' }
        ],
        tips: [
          'Pair with cinnamon pork sausage (chả quế) or steamed egg rolls (bánh cuốn trứng) for a breakfast delight.',
          'Dip into warm, mild fish sauce flavored with fresh coriander.'
        ],
        bestPlaces: [
          { name: 'Banh Cuon Gia An', location: '25 Thai Phien, Hai Ba Trung, Hanoi', note: 'Pure unbleached rice sheets crafted using village methods' },
          { name: 'Banh Cuon Ba Xuan', location: '16 Doc Hoe Nhai, Ba Dinh, Hanoi', note: 'Famous for velvety steamed egg rice rolls' }
        ]
      },
      {
        name: 'Crispy Tofu & Noodles with Fermented Dip (Bún Đậu Mắm Tôm)',
        slug: 'bun-dau-mam-tom',
        province: 'Hanoi',
        category: 'Street Grills & Rolls',
        image: `${F}/bun-dau-mam-tom.jpg`,
        gallery: [`${F}/bun-dau-mam-tom.jpg`],
        description: 'Golden crispy deep-fried tofu squares, compressed rice noodle cakes, boiled pork, and pork sausage served with zesty fermented shrimp paste.',
        origin: 'Hanoi · Red River Delta',
        flavorProfile: { savory: 5, sweet: 2, sour: 3, spicy: 3, herbalUmami: 5 },
        keyIngredients: ['Mo tofu (đậu Mơ)', 'Fermented shrimp paste (mắm tôm)', 'Compressed rice noodle cakes (bún lá)', 'Pork belly & green rice sausage (chả cốm)', 'Vietnamese balm (kinh giới)', 'Kumquat juice & fresh chili'],
        intro: 'Bún Đậu Mắm Tôm is Hanoi’s ultimate communal street food experience. Served on round woven bamboo trays lined with banana leaves, it brings together explosive textures and bold fermented savoriness.',
        culturalHistory: [
          'Originating as humble fare for laborers, Bún Đậu became a nationwide sensation by championing the legendary tofu of Mo village (Mai Dong, Hanoi) — famous for its silkiness inside and crisp golden exterior when fried in hot oil.',
          'The centerpiece is Mắm Tôm: violet-hued fermented shrimp paste vigorously whipped with fresh kumquat juice, sugar, and chili until frothing with aromatic bubbles.'
        ],
        recipe: [
          { step: 1, title: 'Frying Mo Tofu', detail: 'Cut fresh artisan tofu into cubes. Deep-fry in bubbling oil until the outside forms a crisp golden shell while the inside remains creamy and cloud-like.' },
          { step: 2, title: 'Whipping the Dip', detail: 'In small bowls, combine fermented shrimp paste with sugar, a splash of hot cooking oil, bird’s-eye chili, and freshly squeezed kumquats. Whisk vigorously until frothy.' },
          { step: 3, title: 'Plating the Bamboo Tray', detail: 'Arrange sliced bún cakes, golden tofu, boiled pork trotters, and crispy green rice patties (chả cốm) around a forest of fresh Vietnamese balm and perilla leaves.' }
        ],
        tips: [
          'Squeeze 2 fresh kumquats into your mắm tôm and whip until it foams — this cuts the pungency and unlocks deep savory sweetness.',
          'If fermented shrimp paste is too bold for your palate, request standard fish sauce (nước mắm chua ngọt).'
        ],
        bestPlaces: [
          { name: 'Bun Dau Ngo Tram', location: '1B Ngo Tram, Hoan Kiem, Hanoi', note: 'Generous trays with golden Mo tofu and aromatic chả cốm' },
          { name: 'Bun Dau Hang Khay', location: 'Lane 31 Hang Khay, Hoan Kiem, Hanoi', note: 'Iconic alleyway vendor hidden beside Sword Lake' }
        ]
      },
      {
        name: 'Hai Phong Red Crab Brown Noodles (Bánh Đa Cua)',
        slug: 'banh-da-cua-hai-phong',
        province: 'Hai Phong',
        category: 'Noodles & Broths',
        image: `${F}/banh-da-cua-hai-phong.jpg`,
        gallery: [`${F}/banh-da-cua-hai-phong.jpg`, `${F}/banh-da-cua-hai-phong-2.jpg`, `${F}/banh-da-cua-hai-phong-3.jpg`],
        description: 'Chewy wide brown rice noodles in a rich sweet broth simmered from freshwater field crabs, accompanied by fish cakes and betel-leaf beef rolls.',
        origin: 'Hai Phong · Northern Coast',
        flavorProfile: { savory: 5, sweet: 2, sour: 3, spicy: 2, herbalUmami: 5 },
        keyIngredients: ['Sun-dried brown rice noodles (bánh đa đỏ)', 'Freshwater field crabs (cua đồng)', 'Betel leaf beef rolls (chả lá lốt)', 'Golden fish cakes (chả cá)', 'Water spinach & morning glory', 'Fried shallots & tamarind juice'],
        intro: 'Bánh Đa Cua is the pride of Hai Phong, northern Vietnam’s historic port city. The dish is instantly recognizable by its rich mahogany-brown noodles made from local sugarcane-tinted rice and its deeply savory field crab broth.',
        culturalHistory: [
          'Crafted in the ancient noodle village of Du Hang Kenh, Hai Phong’s red rice noodles obtain their chewiness and copper hue through an intricate sun-drying and natural caramel process.',
          'Pounded freshwater crabs release rich clouds of golden crab fat (gạch cua) into a broth brightened with sour tamarind, reflecting the coastal city’s rugged and bountiful maritime heritage.'
        ],
        recipe: [
          { step: 1, title: 'Crab Broth Extraction', detail: 'Pound fresh field crabs in a stone mortar. Filter through fine water multiple times to extract crab juice. Bring to a gentle simmer so the savory crab meat floats to the surface like a golden cloud.' },
          { step: 2, title: 'Broth Simmer', detail: 'Simmer pork bones with roasted shallots, dried shrimp, and sour tamarind or garcinia fruit to create a deep savory-tart foundation.' },
          { step: 3, title: 'Noodle Blanching', detail: 'Soak wide red noodles in water, then flash-blanch in boiling water for 15 seconds until chewy and elastic.' },
          { step: 4, title: 'Serving', detail: 'Assemble noodles, ladle hot crab broth, and top with fragrant betel leaf rolls, golden fish cakes, blanched morning glory, and fried shallots.' }
        ],
        tips: [
          'Add a spoonful of chili sauté (chí chương) — Hai Phong’s signature fermented garlic-chili condiment.',
          'Enjoy both "nước" (soup version) and "trộn" (dry-tossed with peanuts and tamarind dressing).'
        ],
        bestPlaces: [
          { name: 'Banh Da Cua Ba Cu', location: '179 Cau Dat, Ngo Quyen, Hai Phong', note: 'Historic 4-generation stall famous for rich crab fat broth' },
          { name: 'Banh Da Cua Da Lieu', location: '140 Tran Phu, Ngo Quyen, Hai Phong', note: 'Vibrant local favorite serving fresh coastal toppings' }
        ]
      },
      {
        name: 'Turmeric Sticky Rice with Mung Bean (Xôi Xéo)',
        slug: 'xoi-xeo',
        province: 'Hanoi',
        category: 'Rice & Claypots',
        image: `${F}/xoi-xeo.jpg`,
        gallery: [`${F}/xoi-xeo.jpg`],
        description: 'Fragrant turmeric-tinted glutinous rice topped with shaved steamed mung bean and crispy golden shallots, traditionally wrapped in lotus leaves.',
        origin: 'Hanoi · Red River Delta',
        flavorProfile: { savory: 4, sweet: 2, sour: 1, spicy: 1, herbalUmami: 4 },
        keyIngredients: ['Yellow flower sticky rice (nếp cái hoa vàng)', 'Peeled yellow mung bean', 'Fresh turmeric juice', 'Crispy fried shallots', 'Rendered shallot oil', 'Lotus leaf wrapping'],
        intro: 'Xôi Xéo is Hanoi’s ultimate comforting street breakfast. Street vendors deftly carve thin sheets from giant steamed balls of golden mung bean, layering them over steaming turmeric sticky rice before dousing with rich shallot oil.',
        culturalHistory: [
          'Originating in Tuong Mai and Hoang Mai villages, Xôi Xéo requires exceptional precision: sticky rice is soaked with fresh turmeric water for vibrant sunshine color, then steamed twice over bubbling cauldrons for chewiness that lasts all day.',
          'Wrapped in fragrant banana or lotus leaves, it remains the defining morning scent of Hanoi’s historic alleys.'
        ],
        recipe: [
          { step: 1, title: 'Turmeric Rice Steaming', detail: 'Soak prime glutinous rice with freshly crushed turmeric juice and sea salt for 6 hours. Steam twice in bamboo steamers until lustrous and chewy.' },
          { step: 2, title: 'Mung Bean Balls', detail: 'Steam hulled mung beans until tender, pound smooth, and compress into tight round balls while still warm.' },
          { step: 3, title: 'Assembly', detail: 'Spoon hot rice onto a leaf. Use a sharp knife to shave delicate ribbons of mung bean over the rice. Drizzle with warm golden shallot oil and top with crisp shallots.' }
        ],
        tips: [
          'Add a slice of cinnamon pork roll (chả quế) or sweet braised chicken for a filling meal.',
          'Best enjoyed right on street stools before 9:00 AM.'
        ],
        bestPlaces: [
          { name: 'Xoi May', location: '35 Ly Thuong Kiet, Hoan Kiem, Hanoi', note: 'Legendary sidewalk stall where hundreds queue every morning' },
          { name: 'Xoi Yen', location: '35B Nguyen Huu Huan, Hoan Kiem, Hanoi', note: 'Famous establishment offering modern toppings alongside classic Xôi Xéo' }
        ]
      },
      {
        name: 'Hanoi Legendary Hot Egg Coffee (Cà Phê Trứng)',
        slug: 'ca-phe-trung',
        province: 'Hanoi',
        category: 'Pastries & Drinks',
        image: `${F}/ca-phe-trung.jpg`,
        gallery: [`${F}/ca-phe-trung.jpg`, `${F}/ca-phe-trung-2.jpg`],
        description: 'Velvety sabayon-like whipped egg yolk and condensed milk custard floating over dark, intensely aromatic Vietnamese phin-brewed Robusta coffee.',
        origin: 'Hanoi · Red River Delta',
        flavorProfile: { savory: 2, sweet: 5, sour: 1, spicy: 1, herbalUmami: 3 },
        keyIngredients: ['Fresh organic egg yolks', 'Sweetened condensed milk', 'Vietnamese Robusta coffee beans', 'Sugar & vanilla extract', 'Boiling water bath container'],
        intro: 'Egg Coffee is Hanoi’s most poetic beverage creation. Invented in 1946 by Mr. Nguyen Van Giang when fresh milk was scarce, it transforms humble ingredients into a decadent, tiramisu-like cup of liquid velvet.',
        culturalHistory: [
          'During the First Indochina War, condensed milk and dairy were luxuries. Mr. Giang, then head bartender at the prestigious French Metropole Hotel, ingeniously whipped egg yolks with sugar to replicate dairy crema.',
          'Served floating in a small bowl of hot water to maintain optimal temperature, Egg Coffee has become a rite of passage for every traveler visiting the Old Quarter.'
        ],
        recipe: [
          { step: 1, title: 'Brewing Robusta Coffee', detail: 'Slow-drip dark-roasted Vietnamese Robusta through a traditional metal phin filter into preheated ceramic cups.' },
          { step: 2, title: 'Whipping Egg Cream', detail: 'Whip fresh egg yolks with sweetened condensed milk and vanilla at high speed for 5-7 minutes until stiff, glossy, and cloud-like.' },
          { step: 3, title: 'Pouring & Float', detail: 'Gently float the frothy egg custard over the hot black coffee. Serve nestled inside a bowl of steaming water.' }
        ],
        tips: [
          'Do not stir immediately — spoon the warm, sweet custard first before letting it merge with the bitter coffee below.',
          'Try both the classic hot version in winter and the iced egg coffee during summer months.'
        ],
        bestPlaces: [
          { name: 'Café Giảng (Original Birthplace)', location: '39 Nguyen Huu Huan, Hoan Kiem, Hanoi', note: 'The authentic birthplace operating since 1946, run by Mr. Giang’s descendants' },
          { name: 'Café Dinh', location: '13 Dinh Tien Hoang, Hoan Kiem, Hanoi', note: 'Hidden 2nd-floor vintage gem overlooking Sword Lake' }
        ]
      },
      {
        name: 'Ninh Binh Crispy Sun-Dried Rice (Cơm Cháy Ninh Bình)',
        slug: 'com-chay-ninh-binh',
        province: 'Ninh Binh',
        category: 'Rice & Claypots',
        image: `${F}/com-chay-ninh-binh.jpg`,
        gallery: [`${F}/com-chay-ninh-binh.jpg`],
        description: 'Crackle-crisp sun-dried rice cakes deep-fried golden, topped with savory pork floss and dipped in a rich slow-simmered mountain goat meat sauce.',
        origin: 'Ninh Binh · Ancient Capital',
        flavorProfile: { savory: 5, sweet: 2, sour: 2, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Sun-dried sticky rice crust (cơm cháy)', 'Mountain goat meat (thịt dê núi)', 'Pork floss (ruốc bông)', 'Scallion oil', 'Tomatoes & shallots', 'Ginger & chili'],
        intro: 'Cơm Cháy represents the rustic ingenuity of Ninh Binh’s ancient karst territory. Rice scorched against cast-iron pots is dried under the sun for days, then fried to an explosive crunch and paired with wild mountain goat gravy.',
        culturalHistory: [
          'Born near the historic temples of Hoa Lu ancient capital, Cơm Cháy originally salvaged the scorched rice crust from village hearths. Culinary artisans refined this into a specialty recognized across Vietnam.',
          'The accompanying dipping gravy is made from local mountain goats that graze on limestone herbs, producing meat that is naturally lean, fragrant, and deeply savory.'
        ],
        recipe: [
          { step: 1, title: 'Scorching the Rice', detail: 'Cook glutinous and regular rice in heavy cast-iron pots over low charcoal to develop a uniform golden crust on the bottom.' },
          { step: 2, title: 'Sun Drying', detail: 'Carefully peel the crisp rice discs and sun-dry under hot sunshine for 2 to 3 days until bone-dry.' },
          { step: 3, title: 'Flash Frying', detail: 'Drop dried rice cakes into bubbling oil for seconds — they expand instantly into airy, feather-crisp golden crackers.' },
          { step: 4, title: 'Simmering Dipping Gravy', detail: 'Stir-fry diced mountain goat meat with aromatics, tomatoes, lemongrass, and stock into a rich, savory dipping sauce.' }
        ],
        tips: [
          'Spoon the steaming hot goat sauce directly over the rice cake right before eating to enjoy the sizzling crackle.',
          'Pairs exceptionally well with local Kim Son sticky rice wine.'
        ],
        bestPlaces: [
          { name: 'Nha Hang Thang Long Ninh Binh', location: 'Trang An, Hoa Lu, Ninh Binh', note: 'Renowned for tender goat hotpot and freshly fried rice cakes' },
          { name: 'Duc De Ninh Binh', location: '29 Doan Ket, Ninh Khanh, Ninh Binh', note: 'Traditional local institution specializing in authentic goat dishes' }
        ]
      },
      {
        name: 'Northwest Mountain Herbal Cauldron (Thắng Cố)',
        slug: 'thang-co',
        province: 'Lao Cai (Sapa)',
        category: 'Highland Hearth',
        image: `${F}/thang-co.jpg`,
        gallery: [`${F}/thang-co.jpg`],
        description: 'Traditional highland hotpot slow-cooked in a giant iron cauldron with mountain cardamom, lemongrass, star anise, and ginger, savored amidst the cool mist of Sapa market days.',
        origin: 'Sapa · Northwest Highlands',
        flavorProfile: { savory: 5, sweet: 1, sour: 1, spicy: 3, herbalUmami: 5 },
        keyIngredients: ['Mountain horse meat & ribs', 'Black cardamom (thảo quả)', 'Wild mountain pepper (hạt dổi)', 'Star anise & cinnamon', 'Lemongrass & ginger', 'Corn wine (rượu ngô)'],
        intro: 'Thắng Cố is the sacred communal dish of the H’Mong and ethnic highland peoples of Northwest Vietnam. Simmered in colossal iron cauldrons over wood embers at Sunday markets, it warms travelers against the piercing mountain chill.',
        culturalHistory: [
          'Dating back over two centuries, Thắng Cố was originally concocted during long highland journeys across high mountain passes. The broth incorporates up to 12 wild forest spices gathered from Hoang Lien Son peaks.',
          'More than a meal, Thắng Cố is a social gathering: villagers sit shoulder-to-shoulder around the bubbling pot, sharing stories and sipping fragrant corn wine.'
        ],
        recipe: [
          { step: 1, title: 'Meat & Bone Preparation', detail: 'Clean and dice mountain beef, horse meat, and ribs. Marinate with crushed wild forest pepper and ginger.' },
          { step: 2, title: 'Roasting Forest Spices', detail: 'Roast black cardamom pods, star anise, cinnamon bark, and lemongrass over open coals until aromatic oils appear.' },
          { step: 3, title: 'Cauldron Simmer', detail: 'Sear the meat in a large iron wok, then submerge in mountain spring water with the roasted spices. Simmer for 3 to 4 hours, skimming continually.' }
        ],
        tips: [
          'Enjoy with a small cup of local distilled corn wine (rượu ngô Bắc Hà) to complement the wild herbal warmth.',
          'Dip meat into a paste of crushed roasted chili, wild mountain pepper, and sea salt.'
        ],
        bestPlaces: [
          { name: 'Thang Co A Quynh', location: '15 Thach Son, Sapa, Lao Cai', note: 'The most celebrated restaurant in Sapa for ethnic highland hotpot' },
          { name: 'Bac Ha Sunday Market', location: 'Bac Ha Town, Lao Cai', note: 'Authentic open-air market cauldrons bubbling in mountain mist' }
        ]
      },
      {
        name: 'Highland Roasted Bamboo-Tube Sticky Rice (Cơm Lam)',
        slug: 'com-lam',
        province: 'Ha Giang',
        category: 'Highland Hearth',
        image: `${F}/com-lam.jpg`,
        gallery: [`${F}/com-lam.jpg`, `${F}/com-lam-2.jpg`],
        description: 'Aromatic upland sticky rice stuffed into young green bamboo tubes and slow-roasted over open charcoal, infusing the rice with subtle forest fragrance.',
        origin: 'Ha Giang · Northwest Highlands',
        flavorProfile: { savory: 3, sweet: 3, sour: 1, spicy: 1, herbalUmami: 4 },
        keyIngredients: ['Upland sticky rice (gạo nếp nương)', 'Young forest bamboo internodes (nứa non)', 'Mountain spring water', 'Banana leaf plug', 'Crushed roasted peanut & sesame salt (muối vừng)'],
        intro: 'Cơm Lam is the quintessential culinary symbol of Vietnam’s highland mountain tribes. Cooked entirely inside young bamboo stems over open fire, the rice absorbs the sweet sap of the bamboo membrane, creating an unforgettable floral aroma.',
        culturalHistory: [
          'Highland farmers, hunters, and foragers carried bamboo tubes into the dense jungle for sustenance during days-long treks. By roasting rice inside natural bamboo vessels, no metal pots or utensils were needed.',
          'When cooked, the charred outer bamboo is sliced away with a machete, leaving a pristine white inner membrane encasing the fragrant cylinder of sticky rice.'
        ],
        recipe: [
          { step: 1, title: 'Harvesting Young Bamboo', detail: 'Select fresh green bamboo canes from the forest with thick sap membranes inside. Cut into single internode tubes.' },
          { step: 2, title: 'Filling with Rice & Spring Water', detail: 'Pack washed upland sticky rice loosely into the tubes, fill with fresh mountain stream water, and seal tightly with rolled banana leaves.' },
          { step: 3, title: 'Charcoal Roasting', detail: 'Lean the bamboo tubes against glowing wood embers, rotating continuously for 45 minutes until the bamboo turns golden-brown and sweet steam escapes.' },
          { step: 4, title: 'Peeling the Crust', detail: 'Shave away the scorched outer wood with a sharp knife, revealing the clean, silky inner bamboo paper.' }
        ],
        tips: [
          'Peel the thin bamboo membrane off like a candy wrapper and dip into savory roasted peanut-sesame salt.',
          'Pairs exceptionally well with wild grilled chicken or smoked upland pork.'
        ],
        bestPlaces: [
          { name: 'Dong Van Old Quarter Stalls', location: 'Dong Van Karst Plateau, Ha Giang', note: 'Freshly roasted bamboo tubes sold alongside morning mountain market fires' },
          { name: 'Sapa Night Market Food Street', location: 'Dien Bien Phu, Sapa, Lao Cai', note: 'Charcoal-grilled mountain chicken and fragrant Com Lam' }
        ]
      }
    ]
  },
  {
    id: 'central',
    name: 'Central Vietnam',
    subtitle: 'Imperial Court, Coastlines & Ancient Ports',
    image: `${F}/bun-bo-hue.jpg`,
    description: 'Celebrated for fiery chilies, intricate artistry, and royal heritage — from the imperial banquets of Hue to lantern-lit Hoi An and pristine Nha Trang shores.',
    provinces: ['Thua Thien Hue', 'Quang Nam (Hoi An)', 'Da Nang', 'Khanh Hoa (Nha Trang)', 'Binh Thuan (Phan Thiet)', 'Lam Dong (Da Lat)'],
    specialties: [
      {
        name: 'Hue Spicy Royal Beef Noodle Soup (Bún Bò Huế)',
        slug: 'bun-bo-hue',
        province: 'Thua Thien Hue',
        category: 'Noodles & Broths',
        image: `${F}/bun-bo-hue.jpg`,
        gallery: [`${F}/bun-bo-hue.jpg`, `${F}/bun-bo-hue-2.jpg`],
        description: 'Aromatic lemongrass-chili broth infused with fermented shrimp paste, thick cylindrical rice noodles, tender beef shank, pork knuckle, and crab cakes.',
        origin: 'Hue · Imperial Capital',
        flavorProfile: { savory: 5, sweet: 2, sour: 2, spicy: 5, herbalUmami: 5 },
        keyIngredients: ['Beef shin & pork knuckle', 'Hue fermented shrimp paste (mắm ruốc)', 'Fresh lemongrass stalks', 'Annatto seed oil', 'Thick cylindrical rice noodles', 'Shredded banana blossom'],
        intro: 'Bun Bo Hue — the fiery crowning jewel of imperial Hue cuisine. Bold, spicy, and layered with lemongrass and fermented shrimp essence, every spoonful delivers an unforgettable explosion of flavor.',
        culturalHistory: [
          'Originating in Vietnam’s former royal capital, Bun Bo Hue reflects the intricate culinary artistry of the imperial court combined with the bold, unapologetic spice favored in Central Vietnam.',
          'Hue fermented shrimp paste (mắm ruốc) from the coastal waters of Thuan An forms the irreplaceable soul of the broth, imparting deep umami and distinct regional character found nowhere else.',
          'Traditionally referred to as "Bún Bò Giò Heo", this soup honors tender braised beef shank alongside melt-in-the-mouth pork knuckles, providing unparalleled richness to the simmering stock.'
        ],
        recipe: [
          { step: 1, title: 'Simmering Beef & Pork Knuckle (4 Hours)', detail: 'Blanch beef marrow bones and pork knuckles thoroughly. Simmer gently for 4 hours with bruised lemongrass stalks and charred ginger, skimming continuously for clarity.' },
          { step: 2, title: 'Infusing Lemongrass & Chili Oil', detail: 'Sauté minced lemongrass and shallots in annatto seed oil until fragrant and ruby red. Add dried chili powder to forge the signature fiery hue and floral aroma.' },
          { step: 3, title: 'Dissolving Fermented Shrimp Paste', detail: 'Dissolve authentic Hue mắm ruốc in warm water, settle, and strain the aromatic liquid into the simmering cauldron to build multi-dimensional savoriness.' },
          { step: 4, title: 'Preparing Toppings', detail: 'Slice tender beef shank, divide braised pork knuckle into rounds, steam crab-and-pork meatballs (chả cua), and slice congealed pork blood pudding.' },
          { step: 5, title: 'Assembly & Serving', detail: 'Ladle fiery boiling broth over thick cylindrical rice vermicelli. Top with beef, pork knuckle, crab patties, and scallions. Serve with shredded banana blossom, split morning glory, and lime.' }
        ],
        tips: [
          'Authentic Bun Bo Hue is naturally spicy; feel free to request mild chili if preferred.',
          'Generously add shredded banana blossoms and fresh herbs to balance the rich, spicy broth.'
        ],
        bestPlaces: [
          { name: 'Bun Bo Hue Ba Tuyet', location: '47A Nguyen Cong Tru, Hue', note: 'Famous for rich lemongrass broth and tender pork knuckles' },
          { name: 'Bun Bo O Phuong', location: '7 Nguyen Du, Hue', note: 'Beloved morning spot with giant homemade crab cakes' }
        ]
      },
      {
        name: 'Hoi An Ancient Well Cao Lau Noodles (Cao Lầu)',
        slug: 'cao-lau-hoi-an',
        province: 'Quang Nam (Hoi An)',
        category: 'Noodles & Broths',
        image: `${F}/cao-lau-hoi-an.jpg`,
        gallery: [`${F}/cao-lau-hoi-an.jpg`, `${F}/cao-lau-hoi-an-2.jpg`],
        description: 'Chewy thick noodles soaked in wood-ash water, five-spice char siu pork, fresh local greens, and crisp croutons made with water from ancient Ba Le wells.',
        origin: 'Hoi An · Ancient Trading Port',
        flavorProfile: { savory: 4, sweet: 3, sour: 2, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Ba Le well water', 'Cham Island wood-ash alkaline noodles', 'Char siu pork tenderloin', 'Five-spice powder', 'Tra Que aromatic greens', 'Deep-fried noodle croutons'],
        intro: 'Cao Lầu is Hoi An’s most exclusive culinary enigma. By ancient decree, authentic Cao Lầu can only be created in Hoi An using water drawn from the thousand-year-old Cham well of Ba Le and ash from firewood harvested on the Cham Islands.',
        culturalHistory: [
          'Emerging during Hoi An’s 17th-century golden era as Southeast Asia’s bustling international trading port, Cao Lầu blends Japanese udon chewiness, Chinese char siu spices, and Vietnamese fresh herbal vitality.',
          'The name "Cao Lầu" translates to "high floor", recalling the wealthy merchants who sat on the second storeys of wooden shophouses, observing trading junks below while enjoying this exclusive noodle dish.'
        ],
        recipe: [
          { step: 1, title: 'Wood-Ash Noodle Kneading', detail: 'Soak local rice in alkaline water infused with ash from Cham Island trees and drawn from Ba Le well. Grind and knead into firm dough, cut into thick rectangular noodles, and steam thrice.' },
          { step: 2, title: 'Char Siu Braising', detail: 'Marinate pork tenderloin in five-spice, soy sauce, garlic, and cane sugar. Sear in a hot pan, then braise gently in its juices to yield intensely savory meat and rich dipping gravy.' },
          { step: 3, title: 'Assembly & Crackers', detail: 'Place fresh herbs from Tra Que village in the base of the bowl. Lay warm noodles, sliced char siu pork, and a ladle of concentrated braising reduction. Crown with crunchy deep-fried noodle squares.' }
        ],
        tips: [
          'Toss the bowl thoroughly from bottom to top so the rich reduction coats every strand of chewy noodle.',
          'Never eat Cao Lầu as a soupy dish — it is traditionally served semi-dry with concentrated reduction.'
        ],
        bestPlaces: [
          { name: 'Cao Lau Ba Be', location: 'Hoi An Central Market, Tran Phu, Hoi An', note: 'Iconic market counter serving the authentic well-water recipe for decades' },
          { name: 'Cao Lau Thanh', location: '26 Thai Phien, Hoi An', note: 'Generous pork slices and house-made crispy crackers in a vintage shophouse' }
        ]
      },
      {
        name: 'Quang Nam Turmeric Noodles (Mì Quảng)',
        slug: 'mi-quang',
        province: 'Da Nang · Quang Nam',
        category: 'Noodles & Broths',
        image: `${F}/mi-quang.jpg`,
        gallery: [`${F}/mi-quang.jpg`, `${F}/mi-quang-2.jpg`],
        description: 'Wide turmeric-dyed flat rice noodles in a concentrated pork-shrimp broth, garnished with quail eggs, roasted peanuts, and toasted sesame crackers.',
        origin: 'Da Nang · Quang Nam',
        flavorProfile: { savory: 5, sweet: 2, sour: 2, spicy: 3, herbalUmami: 4 },
        keyIngredients: ['Turmeric flat rice noodles', 'Wild river prawns', 'Pork belly slices', 'Shallot oil (dầu nén)', 'Crushed roasted peanuts', 'Toasted sesame rice crackers (bánh tráng mè)'],
        intro: 'Mì Quảng is the beloved gastronomic ambassador of Central Vietnam. Unlike ordinary noodle soups, it is served with only a shallow ladle of intensely savory, concentrated broth, allowing the crispy crackers and herbs to retain their crunch.',
        culturalHistory: [
          'Born along the fertile Thu Bon river valley, Mì Quảng reflects the resourceful agrarian spirit of Quang Nam people. Local cooks tint rice flour with fresh mountain turmeric, producing sunshine-yellow noodles.',
          'Crucial to authentic Mì Quảng is "củ nén" (white shallots native to Central Vietnam) fried in peanut oil, which imparts a pungent, intoxicating aroma distinct from ordinary garlic or onions.'
        ],
        recipe: [
          { step: 1, title: 'Infusing White Shallot Oil', detail: 'Crush native Quang Nam white shallots (củ nén) and sauté gently in peanut oil until golden and deeply aromatic.' },
          { step: 2, title: 'Simmering Concentrated Gravy', detail: 'Stir-fry fresh wild prawns and pork ribs with turmeric, fish sauce, and shallot oil. Add a small volume of pork bone broth and simmer into a thick, concentrated gravy.' },
          { step: 3, title: 'Assembly', detail: 'Layer fresh shredded banana blossom, mint, and watercress. Top with wide yellow noodles, prawns, pork, and boiled quail eggs. Pour just a ladle of hot concentrated gravy.' },
          { step: 4, title: 'Garnish', detail: 'Scatter roasted peanuts and break generous pieces of crispy toasted sesame rice cracker directly over the bowl.' }
        ],
        tips: [
          'Crumble the sesame cracker into the bowl with your hands and mix before taking your first bite.',
          'Add pickled green chili and a squeeze of lime for the authentic Central flavor punch.'
        ],
        bestPlaces: [
          { name: 'Mi Quang 1A Da Nang', location: '1A Hai Phong, Hai Chau, Da Nang', note: 'Celebrated for traditional river prawn and pork gravy' },
          { name: 'Mi Quang Ba Mua', location: '19 Tran Binh Trong, Hai Chau, Da Nang', note: 'Multiple branch institution with rich indigenous flavor profiles' }
        ]
      },
      {
        name: 'Hue Imperial Savory Rice Cakes (Bánh Bèo - Nậm - Lọc)',
        slug: 'banh-beo-nam-loc',
        province: 'Thua Thien Hue',
        category: 'Royal & Imperial',
        image: `${F}/banh-beo-nam-loc.jpg`,
        gallery: [`${F}/banh-beo-nam-loc.jpg`, `${F}/banh-beo-nam-loc-2.jpg`],
        description: 'A refined trio of royal snacks: steamed rice cakes in tiny ceramic dishes, banana-leaf parcels, and crystal-clear tapioca dumplings filled with river shrimp.',
        origin: 'Hue · Imperial Capital',
        flavorProfile: { savory: 4, sweet: 2, sour: 2, spicy: 3, herbalUmami: 4 },
        keyIngredients: ['Rice & tapioca flour', 'Dried river shrimp powder', 'Crispy pork crackling (tóp mỡ)', 'Scallion oil', 'Banana leaves', 'Sweetened light fish sauce with green chili'],
        intro: 'Hue’s royal steamed cakes showcase the pinnacle of Nguyen Dynasty royal snacking. Created to please emperors who demanded dishes that were visually delicate, small in portion, and bursting with multi-textured refinement.',
        culturalHistory: [
          'In the 19th-century imperial court, Nguyen Dynasty monarchs were served up to 50 distinct delicate snacks at banquet tables. Royal concubines and palace chefs competed to craft the thinnest rice cakes.',
          'Bánh Bèo is steamed in miniature shallow terracotta bowls, indented in the center to cradle bright orange dried shrimp crumble, scallion oil, and crisp pork cracklings.'
        ],
        recipe: [
          { step: 1, title: 'Steaming Bánh Bèo', detail: 'Pour smooth rice-and-tapioca batter into preheated miniature ceramic dishes. Steam for 6 minutes until dimpled in the center.' },
          { step: 2, title: 'Shrimp Floss Preparation', detail: 'Simmer fresh shrimp in fish sauce, drain, and pound in a stone mortar over low heat until fluffy, dry, and glowing orange.' },
          { step: 3, title: 'Finishing & Saucing', detail: 'Brush warm scallion oil over the steamed cakes, sprinkle with shrimp floss and crispy pork crackling. Serve with sweet-savory dipping fish sauce.' }
        ],
        tips: [
          'Use a small flat spoon or bamboo paddle to trace the perimeter of the ceramic dish and lift the cake in one fluid bite.',
          'Drizzle a spoonful of sweet chili fish sauce directly into each cup before lifting.'
        ],
        bestPlaces: [
          { name: 'Quan Hanh Hue', location: '11 Pho Duc Chinh, Hue', note: 'Renowned for sampling platters of all royal Hue savory cakes' },
          { name: 'Banh Beo Ba Do', location: '8 Nguyen Binh Khiem, Hue', note: 'Historic local favorite serving freshly steamed ceramic bowls since 1970' }
        ]
      },
      {
        name: 'Nha Trang Pristine Bay Fresh Seafood (Hải Sản)',
        slug: 'hai-san-nha-trang',
        province: 'Khanh Hoa (Nha Trang)',
        category: 'Noodles & Broths',
        image: `${F}/hai-san-nha-trang.jpg`,
        gallery: [`${F}/hai-san-nha-trang.jpg`],
        description: 'Live sea lobsters grilled with scallion oil, sweet jumping sea snails, and sour cobia fish hotpot — caught fresh at dawn along the turquoise coastline.',
        origin: 'Nha Trang · South Central Coast',
        flavorProfile: { savory: 5, sweet: 3, sour: 3, spicy: 3, herbalUmami: 5 },
        keyIngredients: ['Live spiny sea lobster', 'Sweet jumping snails (ốc hương)', 'Cobia & red snapper', 'Green chili milk dipping sauce (muối ớt xanh)', 'Lemongrass & lime leaves'],
        intro: 'Nha Trang Bay is celebrated as one of the world’s most pristine marine habitats. With deep, clean ocean currents, its seafood is prized for unmatched natural sweetness and firm texture, best savored right by the crashing surf.',
        culturalHistory: [
          'Centuries of fishing village culture on Hon Tre and Van Phong Bay developed a seafood cuisine that relies on minimal intervention: live catch is simply steamed with lemongrass or grilled over beach coals.',
          'The defining condiment is "Muối Ớt Xanh Nha Trang" — an addictive emerald-green dipping sauce made by blending green bird’s-eye chilies, sea salt, lime juice, and condensed milk.'
        ],
        recipe: [
          { step: 1, title: 'Charcoal Grilling', detail: 'Split live spiny lobsters or fresh sea snails. Brush with scallion oil and grill directly over hot mangrove charcoal until the shells turn scarlet.' },
          { step: 2, title: 'Emerald Dipping Sauce', detail: 'Blend freshly picked green bird’s-eye chilies with sea salt, sugar, condensed milk, and fresh lime juice into a vibrant, thick dipping emulsion.' }
        ],
        tips: [
          'Always select live seafood from bubbling aerated tanks by weight before having it prepared.',
          'Dip generously into the green chili milk sauce (muối ớt xanh) — it cuts richness and enhances sweet ocean flavors.'
        ],
        bestPlaces: [
          { name: 'Hai San Bo Ke Nha Trang', location: '42 Cu Huan, Vinh Tho, Nha Trang', note: 'Waterfront terrace overlooking the Cai River estuary' },
          { name: 'Quan Oc Xuan Anh', location: '9C Thap Ba, Nha Trang', note: 'Famous street-side snail and shell feast near Po Nagar Towers' }
        ]
      },
      {
        name: 'Hue Crispy Royal Yellow Crepes (Bánh Khoái)',
        slug: 'banh-khoai-hue',
        province: 'Thua Thien Hue',
        category: 'Crispy Crepes',
        image: `${F}/banh-khoai-hue.jpg`,
        gallery: [`${F}/banh-khoai-hue.jpg`, `${F}/banh-khoai-hue-2.jpg`],
        description: 'Deep-fried golden rice pancakes loaded with wild shrimp, pork, and bean sprouts, paired with an intensely savory sesame-liver dipping sauce.',
        origin: 'Hue · Imperial Capital',
        flavorProfile: { savory: 5, sweet: 3, sour: 2, spicy: 2, herbalUmami: 5 },
        keyIngredients: ['Rice flour & egg yolk batter', 'River shrimp', 'Pork belly slices', 'Fresh bean sprouts', 'Pork liver & sesame-peanut dipping sauce (nước lèo)', 'Green starfruit & green banana'],
        intro: 'Bánh Khoái is the richer, thicker, and crunchier royal cousin of Southern Bánh Xèo. Fried in miniature cast-iron pans until deeply golden, its name comes from "khoái" (joyous delight) and the aromatic smoke ("khói") rising from royal stoves.',
        culturalHistory: [
          'Developed during Emperor Tu Duc’s reign in Hue, Bánh Khoái was served hot from the stove directly to royal guests during rainy autumn evenings in the Citadel.',
          'Unlike ordinary crepes dipped in fish sauce, Bánh Khoái must be dipped in "Nước Lèo" — a thick, warm, deeply savory sauce simmered from pork liver, fermented soybean paste, sesame, and ground peanuts.'
        ],
        recipe: [
          { step: 1, title: 'Crispy Batter Mix', detail: 'Blend rice flour, water, a touch of turmeric, and egg yolk into a thick batter that puffs into a crunch upon contacting hot oil.' },
          { step: 2, title: 'Iron Pan Sizzle', detail: 'Heat deep cast-iron pans with oil. Add shrimp and pork, pour batter, top with bean sprouts, and fry until the outer rim turns deeply golden and crisp.' },
          { step: 3, title: 'Royal Liver Sauce', detail: 'Purée simmered pork liver with toasted sesame, ground roasted peanuts, garlic, and soybean paste. Simmer until thick, glossy, and aromatic.' }
        ],
        tips: [
          'Wrap a piece of the crispy pancake with fresh figs, green starfruit, and green banana slices to balance the rich fried crunch.',
          'Dip heavily into the warm peanut-liver sauce.'
        ],
        bestPlaces: [
          { name: 'Banh Khoai Hong Mai', location: '110 Dinh Tien Hoang, Hue', note: 'Historic eatery inside the Citadel walls renowned for crisp pancakes' },
          { name: 'Banh Khoai Lac Thien', location: '6 Dinh Tien Hoang, Hue', note: 'Decades-old family shop famous for delicious homemade dipping sauce' }
        ]
      },
      {
        name: 'Hue Charcoal Lemongrass Pork Skewers (Nem Lụi)',
        slug: 'nem-lui-hue',
        province: 'Thua Thien Hue',
        category: 'Street Grills & Rolls',
        image: `${F}/nem-lui-hue.jpg`,
        gallery: [`${F}/nem-lui-hue.jpg`, `${F}/nem-lui-hue-2.jpg`],
        description: 'Seasoned minced pork patties grilled over charcoal on lemongrass stalks, wrapped tableside with herbs in delicate rice paper and dipped in warm peanut sauce.',
        origin: 'Hue · Imperial Capital',
        flavorProfile: { savory: 4, sweet: 3, sour: 2, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Pork shoulder & pork paste (giò sống)', 'Fresh lemongrass stalks', 'Honey & fish sauce', 'Rice paper (bánh tráng)', 'Green banana, starfruit & herbs', 'Peanut-liver dipping sauce'],
        intro: 'Nem Lụi is Hue’s signature interactive grill feast. Minced pork is molded directly around thick stalks of fresh fragrant lemongrass, then grilled over glowing charcoal embers so the citrus-herbal oils infuse the meat from within.',
        culturalHistory: [
          'Created as palace street food outside the Imperial City, the clever use of lemongrass skewers served both as functional grilling handles and as an aromatic internal basting core.',
          'Diners wrap the sizzling skewer inside rice paper with herbs, then pull the wooden lemongrass stalk out with one smooth motion before rolling.'
        ],
        recipe: [
          { step: 1, title: 'Pork Paste Seasoning', detail: 'Pound lean pork shoulder with pork paste, garlic, shallots, honey, and fish sauce until tacky and springy.' },
          { step: 2, title: 'Molding onto Lemongrass', detail: 'Wrap portions of pork paste around trimmed fresh lemongrass stalks, leaving a sturdy handle.' },
          { step: 3, title: 'Charcoal Grilling', detail: 'Grill over hot charcoal, turning frequently and basting with shallot oil until deeply browned and caramelized.' }
        ],
        tips: [
          'Place the meat inside the rice paper wrap, hold the roll tightly with one hand, and slide the lemongrass skewer out cleanly with the other.'
        ],
        bestPlaces: [
          { name: 'Quan Tai Phu', location: '2 Dien Bien Phu, Hue', note: 'Celebrated across Hue for juicy Nem Lui and royal pancakes' },
          { name: 'Nem Lui Nguyen Hue', location: '89 Nguyen Hue, Hue', note: 'Local favorite serving mountain lemongrass skewers with rich sauce' }
        ]
      },
      {
        name: 'Perfume River Baby Clam Rice (Cơm Hến)',
        slug: 'com-hen-hue',
        province: 'Thua Thien Hue',
        category: 'Rice & Claypots',
        image: `${F}/com-hen-hue.jpg`,
        gallery: [`${F}/com-hen-hue.jpg`],
        description: 'Rice tossed with savory stir-fried river clams, crunchy pork crackling, roasted peanuts, starfruit, and spicy fermented shrimp paste — a beloved Hue classic.',
        origin: 'Hen Islet · Hue',
        flavorProfile: { savory: 5, sweet: 1, sour: 3, spicy: 5, herbalUmami: 5 },
        keyIngredients: ['Perfume River baby clams (hến)', 'Cool cooked rice', 'Crisp pork crackling (bóng bì)', 'Spicy Hue chili sauté', 'Taro stems & shredded banana blossom', 'Warm clam broth bowl'],
        intro: 'Cơm Hến is Hue’s most complex symphony of rustic textures and intense fiery flavors. Originating on Hen Islet (Cồn Hến) in the middle of the Perfume River, it combines over 15 distinct culinary elements in a single bowl.',
        culturalHistory: [
          'Discovered by poor river clam fishermen on Hen Islet over 200 years ago, this dish was eventually introduced to Emperor Thanh Thai, who was so captivated by its sharp, honest rustic flavors that he made it an official imperial court meal.',
          'Unique among Vietnamese rice dishes, Cơm Hến uses cooled cooked rice paired with a steaming side bowl of clam broth, creating an exhilarating hot-and-cool temperature contrast.'
        ],
        recipe: [
          { step: 1, title: 'Clam Harvesting & Boiling', detail: 'Rinse fresh river clams thoroughly. Boil in mountain spring water until shells open. Sift the tiny tender clam meats and reserve the sweet, clear clam broth.' },
          { step: 2, title: 'Sautéing Clam Meats', detail: 'Flash-fry clam meats with shallots, chili, minced garlic, and fish sauce.' },
          { step: 3, title: 'Assembly', detail: 'Place cool rice in bowls, top with sautéed clams, crisp pork crackling, roasted peanuts, shredded taro stems, starfruit, and mint. Serve with a separate bowl of piping-hot clam broth.' }
        ],
        tips: [
          'Be prepared for authentic Hue spice — locals eat Cơm Hến extraordinarily fiery.',
          'Spoon a little warm clam broth into the rice or drink it alternately between spicy mouthfuls.'
        ],
        bestPlaces: [
          { name: 'Com Hen Hoa Dong', location: '64 Kiet 7 Ung Binh, Con Hen, Hue', note: 'The historical home of baby clam rice right on Hen Islet' },
          { name: 'Com Hen Ba Cam', location: '49 Tung Thien Vuong, Hue', note: 'Beloved morning spot serving authentic fiery bowls' }
        ]
      },
      {
        name: 'Hoi An Turmeric Shredded Chicken Rice (Cơm Gà Hội An)',
        slug: 'com-ga-hoi-an',
        province: 'Quang Nam (Hoi An)',
        category: 'Rice & Claypots',
        image: `${F}/com-ga-hoi-an.jpg`,
        gallery: [`${F}/com-ga-hoi-an.jpg`],
        description: 'Golden turmeric-infused rice cooked in rich chicken broth, topped with shredded free-range chicken, pickled green papaya, and Vietnamese coriander.',
        origin: 'Hoi An · Ancient Trading Port',
        flavorProfile: { savory: 4, sweet: 2, sour: 3, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Free-range chicken (gà ta)', 'Fragrant upland rice', 'Fresh turmeric juice & chicken fat', 'Vietnamese coriander (rau răm)', 'Pickled green papaya & onions', 'Chili garlic dipping sauce'],
        intro: 'Cơm Gà Hội An is a masterclass in yellow-and-green visual harmony. Golden grains of rice glistening with chicken fat and turmeric are topped with shredded local chicken tossed in lime juice, black pepper, and fragrant Vietnamese coriander.',
        culturalHistory: [
          'Developed in the 1950s by talented culinary matriarchs in Hoi An shophouses, this dish adapted Hainanese chicken rice into an unmistakably Vietnamese delicacy by using firm, free-range chicken and pungent local herbs from Tra Que village.',
          'The rice is sautéed with chicken fat and bruised turmeric root before simmering in rich poultry broth over charcoal embers.'
        ],
        recipe: [
          { step: 1, title: 'Poaching Free-Range Chicken', detail: 'Poach whole free-range chicken with ginger and shallots until tender and springy. Plunge into ice water to crisp the golden skin, then shred by hand.' },
          { step: 2, title: 'Sautéing & Cooking Rice', detail: 'Sauté rice in chicken fat and fresh turmeric juice until translucent. Simmer in chicken poaching broth until each grain is dry, fluffy, and gleaming yellow.' },
          { step: 3, title: 'Tossing the Chicken Salad', detail: 'Toss shredded chicken with crushed black pepper, lime juice, sea salt, sliced sweet onions, and chopped Vietnamese coriander.' },
          { step: 4, title: 'Plating', detail: 'Pack yellow rice onto plates, top with the seasoned chicken salad, pickled green papaya, and serve with chicken giblet gravy.' }
        ],
        tips: [
          'Mix the tender chicken salad, pickled onions, and yellow rice thoroughly, adding a dab of house-made chili jam.',
          'Savor the accompanying bowl of rich broth garnished with chicken heart and liver.'
        ],
        bestPlaces: [
          { name: 'Com Ga Ba Buoi', location: '22 Phan Chu Trinh, Hoi An', note: 'Historic matriarch stall operating since the 1950s in Hoi An Old Town' },
          { name: 'Com Ga Xi', location: '47/2 Tran Hung Dao, Hoi An', note: 'Hidden alley favorite adored by locals for extra succulent chicken' }
        ]
      },
      {
        name: 'Phan Thiet Terracotta Claypot Cakes (Bánh Căn)',
        slug: 'banh-can-phan-thiet',
        province: 'Binh Thuan (Phan Thiet)',
        category: 'Crispy Crepes',
        image: `${F}/banh-can-phan-thiet.jpg`,
        gallery: [`${F}/banh-can-phan-thiet.jpg`, `${F}/banh-can-phan-thiet-2.jpg`],
        description: 'Crispy rice flour cakes baked in miniature unglazed terracotta pans, topped with quail eggs or tender squid, dipped in sweet-sour fish sauce.',
        origin: 'Phan Thiet · South Central Coast',
        flavorProfile: { savory: 4, sweet: 3, sour: 2, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Fermented rice flour batter', 'Fresh baby squid & ocean shrimp', 'Quail eggs', 'Terracotta cooking hearths', 'Scallion oil', 'Sweet-tangy fish sauce with pork meatballs (xíu mại)'],
        intro: 'Bánh Căn is the coastal treasure of South Central Vietnam. Cooked in multi-socket unglazed terracotta clay pots over glowing charcoal with no oil, the cakes bake into delightfully spongy pucks with a crackling bottom.',
        culturalHistory: [
          'Adapted from ancient Cham pottery and baking traditions, Bánh Căn thrives in coastal fishing villages where fresh morning squid and ocean shrimp are folded directly into the batter.',
          'Unlike other rice pancakes, Bánh Căn is submerged completely into individual bowls of warm, fragrant fish sauce enriched with tiny steamed meatballs (xíu mại) and mango shreds.'
        ],
        recipe: [
          { step: 1, title: 'Heating Terracotta Pans', detail: 'Fire charcoal under a custom terracotta stove fitted with 10-12 miniature clay saucers until smoking hot.' },
          { step: 2, title: 'Baking Without Oil', detail: 'Pour rice batter into the ungreased clay cups, crack a quail egg or place fresh baby squid on top, and cover with clay lids for 3 minutes.' },
          { step: 3, title: 'Serving', detail: 'Pair two cakes face-to-face with a brush of scallion oil. Submerge directly into individual bowls of sweet fish sauce and meatballs.' }
        ],
        tips: [
          'Submerge the whole warm cake completely into your dipping bowl so it absorbs the broth like a sponge.',
          'Order a mix of quail egg (trứng cút) and fresh squid (mực trứng) toppings.'
        ],
        bestPlaces: [
          { name: 'Banh Can Ba Ba', location: '56 Ngu Ong, Phan Thiet', note: 'Famous coastal corner bustling every evening with claypot ovens' },
          { name: 'Banh Can Lanh', location: '40 Pham Hong Thai, Phan Thiet', note: 'Beloved local gem serving sweet braised meatball broth' }
        ]
      },
      {
        name: 'Da Lat Grilled Rice Paper "Vietnamese Pizza" (Bánh Tráng Nướng)',
        slug: 'banh-trang-nuong-da-lat',
        province: 'Lam Dong (Da Lat)',
        category: 'Crispy Crepes',
        image: `${F}/banh-trang-nuong-da-lat.jpg`,
        gallery: [`${F}/banh-trang-nuong-da-lat.jpg`, `${F}/banh-trang-nuong-da-lat-2.jpg`],
        description: 'Crispy thin rice paper grilled over glowing charcoal, topped with quail eggs, butter, scallions, minced pork, and spicy chili sauce — Da Lat’s iconic street snack.',
        origin: 'Da Lat · Central Highlands',
        flavorProfile: { savory: 4, sweet: 3, sour: 1, spicy: 3, herbalUmami: 4 },
        keyIngredients: ['Thin rice paper (bánh tráng)', 'Quail eggs', 'Chopped scallions in butter', 'Dried shrimp powder', 'Pork sausage & dried beef', 'Chili mayonnaise drizzle'],
        intro: 'Bánh Tráng Nướng — dubbed the "Vietnamese Pizza" by international travelers — was born in the cool mountain mist of Da Lat. Grilled directly over a wire grate on street corners, it delivers an intoxicating crunchy, buttery warmth.',
        culturalHistory: [
          'Emerging around Da Lat’s chilly central lake and night market in the 2000s, street vendors transformed plain dry rice paper into a quick, sizzling mountain comfort food.',
          'Using miniature fans to keep charcoal embers glowing, vendors rotate the delicate rice sheet with lightning speed so the egg custard sets without burning the wafer.'
        ],
        recipe: [
          { step: 1, title: 'Charcoal Grate Setup', detail: 'Place a sheet of thin rice paper directly over gentle charcoal heat.' },
          { step: 2, title: 'Custard Layer', detail: 'Brush with scallion butter, crack 2 quail eggs directly on the sheet, and whisk rapidly with a spoon across the surface.' },
          { step: 3, title: 'Toppings & Sizzle', detail: 'Sprinkle with dried shrimp, minced pork, cheese, and sausage slices. Rotate continuously until the paper is golden-crisp.' },
          { step: 4, title: 'Saucing & Folding', detail: 'Drizzle with chili sauce and creamy mayonnaise, fold in half, and serve in paper sleeves.' }
        ],
        tips: [
          'Eat immediately on small plastic street stools while the night mountain air is cool and the rice paper is blazing hot.',
          'Pair with a hot cup of Da Lat sweet soy milk (sữa đậu nành nóng).'
        ],
        bestPlaces: [
          { name: 'Banh Trang Nuong Di Dinh', location: '26 Hoang Dieu, Da Lat', note: 'The legendary birthplace of Da Lat crispy grilled rice paper' },
          { name: 'Da Lat Night Market Stalls', location: 'Nguyen Thi Minh Khai, Da Lat', note: 'Dozens of glowing charcoal braziers welcoming mountain travelers' }
        ]
      }
    ]
  },
  {
    id: 'south',
    name: 'Southern Vietnam',
    subtitle: 'Saigon Metropolis & Mekong River Delta',
    image: `${F}/banh-mi-sai-gon.jpg`,
    description: 'Bountiful, sweet-savory, and kissed by tropical sunshine — blending Khmer, French, and Chinese influences across Saigon and the lush Mekong waterways.',
    provinces: ['Ho Chi Minh City (Saigon)', 'Can Tho', 'Soc Trang', 'An Giang'],
    specialties: [
      {
        name: 'Saigon Crispy Artisanal Baguette (Bánh Mì Sài Gòn)',
        slug: 'banh-mi-sai-gon',
        province: 'Ho Chi Minh City (Saigon)',
        category: 'Street Grills & Rolls',
        image: `${F}/banh-mi-sai-gon.jpg`,
        gallery: [`${F}/banh-mi-sai-gon.jpg`, `${F}/banh-mi-sai-gon-2.jpg`],
        description: 'Airy glass-crisp baguette overflowing with rich liver pâté, Vietnamese cold cuts, crunchy pickled daikon and carrots, fresh cucumber, and savory sauce.',
        origin: 'Saigon · Southern Hub',
        flavorProfile: { savory: 5, sweet: 3, sour: 3, spicy: 3, herbalUmami: 5 },
        keyIngredients: ['Airy Vietnamese baguette', 'Artisanal pork liver pâté', 'Vietnamese pork charcuterie (chả lụa, giò thủ)', 'Pickled daikon & carrots (đồ chua)', 'Cucumber spears & cilantro', 'Maggi savory dressing & fresh chili'],
        intro: 'Banh Mi Saigon — heralded worldwide as one of the greatest sandwiches ever created. A brilliant fusion of French colonial baking technique and vibrant Vietnamese street-food ingenuity.',
        culturalHistory: [
          'Introduced during the French colonial period in the late 19th century, the classic baguette was reinvented by Saigon street vendors who blended rice flour into the dough, creating a whisper-thin, crackling crust with an airy, cloud-like crumb.',
          'Saigon became the creative epicenter of Banh Mi, transforming it into the ultimate fast food where each mobile cart crafts proprietary liver pâté, savory butter spreads, and artisanal pork charcuterie.',
          'In 2011, the word "banh mi" was officially inducted into the Oxford English Dictionary, celebrated internationally as a culinary masterpiece in its own right.'
        ],
        recipe: [
          { step: 1, title: 'Baking the Airy Baguette', detail: 'Bake customized baguettes blending wheat and rice flours in high-steam ovens to achieve an ultra-crisp golden shell and light, fluffy interior.' },
          { step: 2, title: 'Crafting House Pâté', detail: 'Purée fresh pork liver with shallots, butter, five-spice, and cognac. Gently steam until silky, rich, and fragrant to create the sandwich’s savory foundation.' },
          { step: 3, title: 'Prepping Savory Fillings', detail: 'Prepare Vietnamese ham (chả lụa), roasted red pork (xa xiu), pork terrine, alongside crunchy pickled carrots and daikon, crisp cucumber spears, and fresh cilantro sprigs.' },
          { step: 4, title: 'Signature Seasoning Sauce', detail: 'Whisk rich artisanal mayonnaise, savory Maggi soy seasoning, and slow-simmered pork jus into a balanced umami dressing.' },
          { step: 5, title: 'Assembly', detail: 'Slit the warm baguette lengthwise, coat with generous layers of pâté and mayonnaise. Layer meats, pickled vegetables, cucumber, fresh cilantro, and chili slices. Drizzle with seasoning sauce and serve warm.' }
        ],
        tips: [
          'Eat your banh mi fresh immediately after preparation while the crust is at its crispiest.',
          'Ask for extra pickled daikon and carrots (đồ chua) for a refreshing sweet-and-tangy contrast.',
          'Try a Banh Mi Op La (sunny-side-up fried eggs with soy sauce) for a classic morning comfort meal.'
        ],
        bestPlaces: [
          { name: 'Banh Mi Huynh Hoa', location: '26 Le Thi Rieng, District 1, Saigon', note: 'Legendary heavyweight sandwich packed with over 8 varieties of cold cuts' },
          { name: 'Banh Mi Bay Ho', location: '8 Huynh Khuong Ninh, District 1, Saigon', note: 'Heritage sidewalk vendor operating since the 1930s with world-class liver pâté' },
          { name: 'Banh Mi Hoa Ma', location: '53 Cao Thang, District 3, Saigon', note: 'Iconic street spot famous for skillet fried eggs, pâté, and warm baguettes' }
        ]
      },
      {
        name: 'Saigon Broken Rice with Pork Chop (Cơm Tấm Sài Gòn)',
        slug: 'com-tam-sai-gon',
        province: 'Ho Chi Minh City (Saigon)',
        category: 'Rice & Claypots',
        image: `${F}/com-tam-sai-gon.jpg`,
        gallery: [`${F}/com-tam-sai-gon.jpg`, `${F}/com-tam-sai-gon-2.jpg`],
        description: 'Fragrant broken rice paired with a charcoal-grilled lemongrass pork chop, steamed egg meatloaf, shredded pork skin, and sweet garlic-chili fish sauce.',
        origin: 'Saigon · Southern Hub',
        flavorProfile: { savory: 5, sweet: 4, sour: 2, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Fractured broken rice (gạo tấm)', 'Lemongrass-marinated pork chop (sườn nướng)', 'Steamed pork egg meatloaf (chả trứng)', 'Shredded pork skin with toasted rice powder (bì)', 'Scallion oil (mỡ hành)', 'Sweet garlic fish sauce'],
        intro: 'Cơm Tấm is the beating heartbeat of Saigon street gastronomy. The smoky, sweet aroma of pork chops grilling over coconut charcoal sidewalk stoves is the eternal backdrop to daily life across the metropolis.',
        culturalHistory: [
          'Originally eaten by working-class families who collected broken rice grains discarded during the industrial milling process, Cơm Tấm developed a distinct nutty, fluffy texture that holds sauces better than whole grains.',
          'Over decades, Saigon chefs elevated this humble staple into a culinary icon, crowning the plate with marinated grilled chops, savory egg-pork meatloaf, shredded pork skin, and glistening scallion oil.'
        ],
        recipe: [
          { step: 1, title: 'Steaming Broken Rice', detail: 'Soak fractured rice grains, then steam in wooden steamers until tender, separate, and delightfully nutty.' },
          { step: 2, title: 'Marinating Pork Chops', detail: 'Marinate bone-in pork chops with crushed lemongrass, shallots, condensed milk, honey, soy sauce, and fish sauce for 4 hours.' },
          { step: 3, title: 'Coconut Charcoal Grilling', detail: 'Grill chops over open coconut charcoal embers, basting with marinade until caramelized with smoky grill marks.' },
          { step: 4, title: 'Plating', detail: 'Scoop steaming broken rice onto a flat plate. Add the sizzling pork chop, egg meatloaf, shredded skin, a fried sunny egg, cucumber slices, and spoon generous scallion oil over the top.' }
        ],
        tips: [
          'Order the "Sườn Bì Chả Trứng" combo for the complete, authentic Saigon experience.',
          'Drizzle the sweet garlic-chili fish sauce generously across both rice and pork before eating.'
        ],
        bestPlaces: [
          { name: 'Com Tam Ba Ghien', location: '84 Dang Van Ngu, Phu Nhuan, Saigon', note: 'Famous for colossal charcoal-grilled pork chops that overflow the plate' },
          { name: 'Com Tam Moc', location: '85 Ly Tu Trong, District 1, Saigon', note: 'Refined heritage atmosphere in downtown Saigon' }
        ]
      },
      {
        name: 'Saigon Clear Noodle Soup (Hủ Tíu Nam Vang)',
        slug: 'hu-tiu-nam-vang',
        province: 'Ho Chi Minh City (Saigon)',
        category: 'Noodles & Broths',
        image: `${F}/hu-tiu-nam-vang.jpg`,
        gallery: [`${F}/hu-tiu-nam-vang.jpg`, `${F}/hu-tiu-nam-vang-2.jpg`],
        description: 'Chewy tapioca noodles in a clear pork-bone broth, crowned with minced pork, fresh prawns, quail eggs, and garlic oil — served soup-style or dry.',
        origin: 'Saigon · Southern Hub',
        flavorProfile: { savory: 4, sweet: 3, sour: 2, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Chewy clear tapioca noodles', 'Pork bone & dried squid broth', 'Minced pork & pork liver', 'Fresh ocean prawns & quail eggs', 'Golden fried garlic oil', 'Chinese celery & chives'],
        intro: 'Hủ Tíu Nam Vang reflects the vibrant multicultural tapestry of Southern Vietnam. Originating from Cambodian and Teochew Chinese trade routes along the Mekong, it was embraced and perfected by Saigon street cooks.',
        culturalHistory: [
          'Named after "Nam Vang" (the Vietnamese historical name for Phnom Penh), this dish evolved in Saigon into two distinct disciplines: "nước" (in piping-hot clear broth) and "khô" (dry-tossed with a sweet, dark house sauce and soup on the side).',
          'The broth achieves natural sweetness through slow simmering of pork bones, dried squid, and daikon, crowned by crunchy golden fried garlic.'
        ],
        recipe: [
          { step: 1, title: 'Sweet Bone Broth Simmer', detail: 'Simmer pork bones, dried squid, dried shrimp, and daikon for 5 hours until shimmering and naturally sweet.' },
          { step: 2, title: 'Toppings Preparation', detail: 'Flash-boil tiger prawns, slice pork liver and heart, boil quail eggs, and simmer seasoned minced pork in garlic oil.' },
          { step: 3, title: 'Dry Style (Hủ Tíu Khô)', detail: 'Blanch chewy noodles, toss with dark soy seasoning sauce and fried garlic oil. Arrange toppings and serve accompanied by a steaming bowl of broth.' }
        ],
        tips: [
          'Locals overwhelmingly prefer the "Khô" (dry) version — the savory-sweet soy sauce coating the chewy noodles is unmatched.',
          'Garnish generously with Chinese celery and fresh chives.'
        ],
        bestPlaces: [
          { name: 'Hu Tiu Nam Vang Nhan Quan', location: '72 Nguyen Trai, District 1, Saigon', note: 'Iconic Saigon chain serving rich dry-tossed bowls round the clock' },
          { name: 'Hu Tiu Nam Vang Quoc Ky', location: '52 Ngo Duc Ke, District 1, Saigon', note: 'Historic shophouse famous for sweet squid broth and fresh prawns' }
        ]
      },
      {
        name: 'Fresh Rice Paper Summer Rolls (Gỏi Cuốn)',
        slug: 'goi-cuon',
        province: 'Ho Chi Minh City (Saigon)',
        category: 'Street Grills & Rolls',
        image: `${F}/goi-cuon.jpg`,
        gallery: [`${F}/goi-cuon.jpg`, `${F}/goi-cuon-2.jpg`],
        description: 'Translucent rice paper freshly hand-rolled with boiled tiger prawns, tender pork belly, rice vermicelli, and mint, dipped in rich peanut-hoisin sauce.',
        origin: 'Saigon · Southern Hub',
        flavorProfile: { savory: 4, sweet: 4, sour: 2, spicy: 1, herbalUmami: 4 },
        keyIngredients: ['Translucent rice paper (bánh tráng)', 'Boiled tiger prawns', 'Pork belly slices', 'Rice vermicelli (bún)', 'Fresh mint & chives', 'Creamy peanut-hoisin dipping sauce with crushed peanuts'],
        intro: 'Gỏi Cuốn is the purest embodiment of Vietnamese freshness. Light, uncooked, and completely refreshing, it highlights the natural sweetness of ocean prawns and crisp herbs rolled inside translucent rice paper.',
        culturalHistory: [
          'A staple of Southern family dinners and afternoon snack stalls, Gỏi Cuốn provides a guilt-free, nutritious contrast to fried spring rolls.',
          'Crucial to the presentation is showing the vibrant pink tiger prawns and bright green garlic chives clearly through the gossamer rice paper wrap.'
        ],
        recipe: [
          { step: 1, title: 'Prepping Proteins', detail: 'Gently poach fresh prawns and pork belly with shallots. Halve the prawns lengthwise to reveal their bright coral hue.' },
          { step: 2, title: 'Rolling with Care', detail: 'Dampen rice paper lightly. Lay lettuce, mint, and vermicelli, followed by sliced pork. Place prawns pink-side down with chives protruding, then roll tightly into a neat cylinder.' },
          { step: 3, title: 'Peanut Hoisin Dip', detail: 'Simmer hoisin sauce with peanut butter, coconut milk, and garlic. Top with roasted crushed peanuts and chili paste.' }
        ],
        tips: [
          'Dip generously into the warm peanut sauce — the nutty richness elevates the crisp fresh herbs.',
          'Eat immediately while the rice paper remains tender and soft.'
        ],
        bestPlaces: [
          { name: 'Goi Cuon Le Van Sy', location: '359 Le Van Sy, District 3, Saigon', note: 'Famous street cart rolling hundreds of fresh rolls every afternoon' },
          { name: 'Quan An Ngon Saigon', location: '138 Nam Ky Khoi Nghia, District 1, Saigon', note: 'Courtyard dining showcasing artisanal southern rolling traditions' }
        ]
      },
      {
        name: 'Charcoal Grilled Beef in Wild Betel Leaves (Bò Cuốn Lá Lốt)',
        slug: 'bo-la-lot',
        province: 'Ho Chi Minh City (Saigon)',
        category: 'Street Grills & Rolls',
        image: `${F}/bo-la-lot.jpg`,
        gallery: [`${F}/bo-la-lot.jpg`],
        description: 'Seasoned minced beef wrapped in wild lolot (wild betel) leaves, grilled over open charcoal until fragrant and glistening with scallion oil.',
        origin: 'Saigon · Southern Hub',
        flavorProfile: { savory: 5, sweet: 2, sour: 2, spicy: 2, herbalUmami: 5 },
        keyIngredients: ['Minced beef & pork fat', 'Wild lolot leaves (lá lốt)', 'Lemongrass & garlic', 'Fine woven rice noodle sheets (bánh hỏi)', 'Fermented anchovy sauce (mắm nêm)', 'Scallion oil & roasted peanuts'],
        intro: 'Bò Lá Lốt releases one of the most intoxicating aromas in the entire culinary world. When fresh wild betel leaves hit hot charcoal, they perfume the street with an earthy, peppery, incense-like fragrance that draws crowds from blocks away.',
        culturalHistory: [
          'Originally hailing from the historic seven-course beef feast (Bò 7 Món), Bò Lá Lốt became a beloved standalone evening street delicacy in Saigon.',
          'Wild lolot leaves contain essential aromatic oils that lock moisture inside the beef, ensuring each grilled cylinder remains succulent and deeply smoky.'
        ],
        recipe: [
          { step: 1, title: 'Beef Marinade', detail: 'Mince beef with a small portion of pork fat for juiciness. Season with minced lemongrass, shallots, garlic, fish sauce, and five-spice.' },
          { step: 2, title: 'Wrapping in Lolot Leaves', detail: 'Place a spoonful of beef onto the dull underside of a fresh lolot leaf. Roll into a tight cylinder and tuck the leaf stem to secure.' },
          { step: 3, title: 'Charcoal Grill', detail: 'Grill skewers over moderate coals for 5-7 minutes, turning frequently until the leaves blister and darken.' },
          { step: 4, title: 'Assembly', detail: 'Serve atop delicate sheets of woven rice noodles (bánh hỏi), shower with scallion oil and crushed peanuts, and dip in fermented anchovy-pineapple sauce (mắm nêm).' }
        ],
        tips: [
          'Dip into fermented pineapple-anchovy sauce (mắm nêm) for the authentic Southern flavor balance.',
          'Wrap the grilled beef in lettuce leaves with starfruit and green banana for added crunch.'
        ],
        bestPlaces: [
          { name: 'Bo La Lot Co Lieng', location: '321 Vo Van Tan, District 3, Saigon', note: 'Legendary institution celebrated for decades for fragrant beef rolls' },
          { name: 'Bo La Lot Hoang Yen', location: '121 Co Giang, District 1, Saigon', note: 'Bustling downtown street stall with charcoal smoke filling the alley' }
        ]
      },
      {
        name: 'Mekong Giant Crispy Turmeric Crepe (Bánh Xèo Miền Tây)',
        slug: 'banh-xeo-mien-tay',
        province: 'Can Tho · Mekong Delta',
        category: 'Crispy Crepes',
        image: `${F}/banh-xeo-mien-tay.jpg`,
        gallery: [`${F}/banh-xeo-mien-tay.jpg`, `${F}/banh-xeo-mien-tay-2.jpg`, `${F}/banh-xeo-mien-tay-3.jpg`],
        description: 'A massive golden turmeric and coconut milk crepe stuffed with river shrimp, pork, coconut shoots, and bean sprouts, wrapped in wild mustard leaves.',
        origin: 'Can Tho · Mekong River Delta',
        flavorProfile: { savory: 5, sweet: 3, sour: 3, spicy: 2, herbalUmami: 4 },
        keyIngredients: ['Rice flour & fresh coconut milk', 'Turmeric powder & scallions', 'Fresh river shrimp & pork belly', 'Tender coconut shoots (củ hũ dừa)', 'Wild forest mustard leaves & herbs', 'Sweet-sour garlic chili fish sauce'],
        intro: 'Bánh Xèo Miền Tây is the giant, celebratory crepe of the Mekong Delta. Sizzling loudly ("xèo xèo") as batter hits the fiery cast-iron wok, it spans the size of a bicycle wheel, packed with river bounty and wrapped in wild leaves.',
        culturalHistory: [
          'In the lush orchards of the Mekong Delta, families harvest wild herbs from riverbanks to accompany this communal weekend feast. The southern variant uses sweet coconut milk in the batter, giving it a rich, aromatic crunch unlike any other crepe.',
          'Specialty Delta versions feature tender coconut palm heart shoots (củ hũ dừa), creating a refreshing sweet crispness inside.'
        ],
        recipe: [
          { step: 1, title: 'Coconut Turmeric Batter', detail: 'Whisk stone-ground rice flour with fresh coconut milk, water, turmeric powder, and sliced scallions. Rest for 1 hour.' },
          { step: 2, title: 'Wok Sizzle', detail: 'Heat a huge cast-iron wok with pork lard. Sauté river shrimp and pork slices. Swirl a generous ladle of batter around the entire wok rim.' },
          { step: 3, title: 'Filling & Crisp', detail: 'Cover with bean sprouts and coconut shoots. Place lid for 3 minutes, then remove and drizzle oil along the edge until glass-crisp.' },
          { step: 4, title: 'Folding', detail: 'Fold the giant golden half-moon and slide onto banana leaves.' }
        ],
        tips: [
          'Never use fork or knife! Tear off a piece of the crispy crepe with your hands, wrap it tightly in mustard greens and herbs, and dunk into fish sauce.'
        ],
        bestPlaces: [
          { name: 'Banh Xeo 7 Toi Can Tho', location: '45 Hoang Quoc Viet, An Binh, Can Tho', note: 'Famous Mekong Delta garden eatery celebrated for giant coconut crepes' },
          { name: 'Banh Xeo Dinh Cong Trang', location: '46A Dinh Cong Trang, District 1, Saigon', note: 'Historic Saigon location serving traditional giant southern crepes' }
        ]
      },
      {
        name: 'Mekong Claypot Caramelized River Fish (Cá Kho Tộ)',
        slug: 'ca-kho-to',
        province: 'Can Tho · Mekong Delta',
        category: 'Rice & Claypots',
        image: `${F}/ca-kho-to.jpg`,
        gallery: [`${F}/ca-kho-to.jpg`],
        description: 'Freshwater river fish slowly braised in an earthenware claypot with dark palm sugar caramel, fish sauce, garlic, and cracked black pepper.',
        origin: 'Mekong River Delta',
        flavorProfile: { savory: 5, sweet: 4, sour: 1, spicy: 3, herbalUmami: 5 },
        keyIngredients: ['Freshwater catfish or snakehead fish', 'Vietnamese caramel sauce (nước màu)', 'Coconut water', 'Artisanal fish sauce', 'Pork belly cubes', 'Cracked black pepper & bird’s-eye chili'],
        intro: 'Cá Kho Tộ is the soul of Vietnamese family comfort food. Braised inside unglazed earthenware clay pots, freshwater fish caramelizes slowly into tender, glistening steaks coated in a sticky, sweet-savory reduction.',
        culturalHistory: [
          'For centuries, Mekong Delta households used earthenware clay pots (tộ) that retain heat gently and distribute flavors evenly over wood stoves. The sauce relies on "nước màu" — cane sugar slow-cooked until it turns dark amber and nutty.',
          'Paired with steaming jasmine rice and sour fish soup (canh chua), it forms the quintessential holy trinity of southern home cooking.'
        ],
        recipe: [
          { step: 1, title: 'Caramel Base', detail: 'Melt sugar with oil in the claypot until it foams into a deep mahogany caramel. Stir in shallots, garlic, and fish sauce.' },
          { step: 2, title: 'Sealing the Fish', detail: 'Add thick cutlets of river fish and pork belly. Coat both sides in the bubbling caramel sauce.' },
          { step: 3, title: 'Claypot Braise', detail: 'Pour fresh coconut water, add chilies, and simmer gently with the lid ajar for 45 minutes until the sauce reduces to a thick glaze.' }
        ],
        tips: [
          'Spoon the dark, sticky caramel reduction directly over fluffy white rice.',
          'Pairs perfectly with a bowl of Southern sweet-and-sour fish soup (canh chua cá lóc).'
        ],
        bestPlaces: [
          { name: 'Com Que Muoi Kho', location: '27 Tran Quoc Thao, District 3, Saigon', note: 'Authentic regional claypot fish and family meal feasts' },
          { name: 'Song Que Restaurant Can Tho', location: '42 Le Loi, Can Tho', note: 'Waterfront Mekong Delta cuisine serving fresh caramelized river catch' }
        ]
      },
      {
        name: 'Cai Rang Floating Market Tropical Harvest (Trái Cây Chợ Nổi)',
        slug: 'trai-cay-cho-noi',
        province: 'Can Tho · Mekong Delta',
        category: 'Pastries & Drinks',
        image: `${F}/trai-cay-cho-noi.jpg`,
        gallery: [`${F}/trai-cay-cho-noi.jpg`, `${F}/trai-cay-cho-noi-2.jpg`, `${F}/trai-cay-cho-noi-3.jpg`],
        description: 'Tree-ripened durian, sweet mangosteen, rambutan, milk fruit, and pomelo bought directly from wooden sampans at the bustling Cai Rang sunrise market.',
        origin: 'Cai Rang · Can Tho · Mekong Delta',
        flavorProfile: { savory: 1, sweet: 5, sour: 3, spicy: 1, herbalUmami: 2 },
        keyIngredients: ['Ri6 Durian', 'Mangosteen (măng cụt)', 'Rambutan (chôm chôm)', 'Star apple (vú sữa)', 'Nam Roi pomelo', 'Chili-salt dip (muối ớt)'],
        intro: 'The Mekong River Delta is Vietnam’s fruit basket, producing millions of tons of luscious tropical fruits fed by alluvial waters. At dawn on the Cai Rang river, hundreds of wooden boats assemble in a vibrant floating orchard.',
        culturalHistory: [
          'Each boat hangs its cargo from a tall bamboo pole ("cây bẹo") so buyers can identify produce from afar across the misty river. Eating tree-ripened fruit freshly peeled right on a wooden sampan is an unforgettable sensory adventure.'
        ],
        recipe: [
          { step: 1, title: 'Morning River Harvest', detail: 'Fruits are picked at sunset in delta orchards, loaded onto sampans, and ferried directly to the floating market before dawn.' },
          { step: 2, title: 'Fresh Preparation', detail: 'Boat vendors slice sweet pomelos and crack fresh rambutan and mangosteen to order, served with spicy chili-salt.' }
        ],
        tips: [
          'Dip sweet fruits like green mango and pomelo into spicy sea salt (muối ớt) — the contrast enhances natural sweetness.',
          'Visit between 5:30 AM and 7:00 AM for the most vibrant trading atmosphere.'
        ],
        bestPlaces: [
          { name: 'Cai Rang Floating Market', location: 'Can Tho River, Can Tho', note: 'The largest and most historic wholesale floating fruit market in the Delta' },
          { name: 'Phong Dien Ecotourism Orchards', location: 'Phong Dien, Can Tho', note: 'Lush fruit gardens where visitors can harvest tropical fruits directly from trees' }
        ]
      },
      {
        name: 'Mekong Fermented Fish Hotpot (Lẩu Mắm Miền Tây)',
        slug: 'lau-mam-mien-tay',
        province: 'An Giang · Mekong Delta',
        category: 'Noodles & Broths',
        image: `${F}/lau-mam-mien-tay.jpg`,
        gallery: [`${F}/lau-mam-mien-tay.jpg`],
        description: 'Rich Delta hotpot simmered from aromatic fermented river fish broth, loaded with seafood, tender meats, and a colorful bouquet of wild edible river flowers.',
        origin: 'Chau Doc · An Giang · Mekong Delta',
        flavorProfile: { savory: 5, sweet: 3, sour: 2, spicy: 3, herbalUmami: 5 },
        keyIngredients: ['Chau Doc fermented fish (mắm cá linh & cá sặc)', 'Fresh coconut water & lemongrass', 'River fish steaks, shrimp & squid', 'Crisp pork belly', 'Eggplant & water lily stems', 'Sesbania flowers (bông điên điển) & water hyacinth'],
        intro: 'Lẩu Mắm is the crowning culinary masterpiece of the Mekong Delta flood season. Simmered from artisanal fermented fish preserved in Chau Doc, it presents an extraordinary botanical garden of over 20 wild edible river vegetables.',
        culturalHistory: [
          'Chau Doc in An Giang province, near the Cambodian border, is hailed as the "Kingdom of Mắm" (fermented fish). When the annual monsoon floods arrive, local fishermen preserve millions of tiny linh fish in terracotta urns with sea salt and roasted rice bran.',
          'Lẩu Mắm celebrates this flood bounty, bringing together river fish, prawns, and wild blooming flowers into a bubbling, fragrant cauldron.'
        ],
        recipe: [
          { step: 1, title: 'Boiling the Fermented Fish', detail: 'Simmer fermented linh and sặc fish in water until the meat dissolves completely. Strain through a fine sieve to retain only the rich, fragrant essence.' },
          { step: 2, title: 'Aromatics & Broth Base', detail: 'Sauté minced lemongrass, garlic, and chili in oil. Add the fish broth, fresh coconut water, and purple eggplant chunks. Simmer gently.' },
          { step: 3, title: 'Hotpot Table Banquet', detail: 'Place the bubbling pot on a table stove. Add fresh river fish, squid, prawns, and pork. Submerge bundles of wild river flowers and herbs for just seconds before enjoying with rice vermicelli.' }
        ],
        tips: [
          'Swirl the wild river flowers (bông điên điển, bông súng) into the boiling broth for only 5-10 seconds so they stay wonderfully crisp.',
          'Do not be intimidated by the fermented aroma — the cooked broth is remarkably sweet, mellow, and deeply comforting.'
        ],
        bestPlaces: [
          { name: 'Lau Mam Da Giang Chau Doc', location: 'Quang Trung, Chau Doc, An Giang', note: 'The authentic heartland of Mekong fermented fish hotpot' },
          { name: 'Lau Mam Ba Dua Can Tho', location: 'Kiet 122/3 Duong 3/2, Ninh Kieu, Can Tho', note: 'Celebrated institution with towering platters of wild river flora' }
        ]
      },
      {
        name: 'Soc Trang Flaky Durian Pastry (Bánh Pía)',
        slug: 'banh-pia-soc-trang',
        province: 'Soc Trang',
        category: 'Pastries & Drinks',
        image: `${F}/banh-pia-soc-trang.jpg`,
        gallery: [`${F}/banh-pia-soc-trang.jpg`, `${F}/banh-pia-soc-trang-2.jpg`],
        description: 'Delicate multi-layered flaky pastry filled with sweet mung bean paste, creamy fresh durian, and rich salted egg yolk — a renowned Teochew-heritage confection.',
        origin: 'Vung Thom · Soc Trang',
        flavorProfile: { savory: 2, sweet: 5, sour: 1, spicy: 1, herbalUmami: 4 },
        keyIngredients: ['Multi-layered flaky wheat dough', 'Mashed sweet yellow mung bean', 'Fresh ripe durian pulp', 'Cured duck egg yolk', 'Pork lard or butter', 'Red stamp of good fortune'],
        intro: 'Bánh Pía is the celebrated heritage pastry of Soc Trang. Created by Teochew Chinese immigrants in the 17th century in Vung Thom village, it features hundreds of whisper-thin flaky pastry layers encasing a rich, creamy core of fresh durian and salted egg.',
        culturalHistory: [
          'The pastry was originally carried by seafaring traders as an energizing, long-lasting voyage ration. Over centuries in Soc Trang, bakers incorporated the lush tropical durians of Southern orchards, inventing one of Vietnam’s most famous confections.',
          'Each golden cake is stamped on top with red edible ink bearing Chinese and Vietnamese characters wishing prosperity and happiness.'
        ],
        recipe: [
          { step: 1, title: 'Laminating Flaky Dough', detail: 'Knead water dough and oil dough separately. Roll and fold multiple times into micro-thin concentric layers.' },
          { step: 2, title: 'Crafting the Filling', detail: 'Cook sweet mung bean paste until silky smooth, fold in creamy ripe durian pulp, and wrap around a cured salted egg yolk.' },
          { step: 3, title: 'Baking & Stamping', detail: 'Encase filling inside the laminated pastry, stamp with red auspicious dye, brush with egg yolk glaze, and bake until golden-brown.' }
        ],
        tips: [
          'Pair with a hot pot of fragrant jasmine or lotus tea — the clean tannin cuts through the rich durian and salted egg sweetness.'
        ],
        bestPlaces: [
          { name: 'Banh Pia Tan Hue Vien', location: 'National Route 1A, Chau Thanh, Soc Trang', note: 'The most prestigious heritage bakery workshop in Soc Trang' },
          { name: 'Lo Banh Pia Cong Lap Thanh', location: 'Vung Thom, Chau Thanh, Soc Trang', note: 'Historic ancestral village bakery maintaining handcrafted wood-fired baking' }
        ]
      }
    ]
  }
];

export interface DishMeta {
  name: string;
  slug: string;
  region: 'north' | 'central' | 'south';
  regionLabel: string;
  province: string;
  category: string;
  origin: string;
  image: string;
  gallery: string[];
}

export const dishMetaBySlug: Record<string, DishMeta> = regions.reduce((acc, region) => {
  for (const s of region.specialties) {
    acc[s.slug] = {
      name: s.name,
      slug: s.slug,
      region: region.id,
      regionLabel: region.name,
      province: s.province,
      category: s.category,
      origin: s.origin,
      image: s.image,
      gallery: s.gallery,
    };
  }
  return acc;
}, {} as Record<string, DishMeta>);

export const allSpecialties: Specialty[] = regions.flatMap((r) => r.specialties);

export const getSpecialtyBySlug = (slug: string): Specialty | undefined => {
  return allSpecialties.find((s) => s.slug === slug);
};
