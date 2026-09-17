export interface TourItineraryDay {
  day: number;
  title: string;
  desc: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  meals?: string;
  accommodation?: string;
  highlights?: string[];
}

export interface TourImportantNote {
  category: 'weather' | 'fitness' | 'etiquette' | 'health' | 'general';
  title: string;
  detail: string;
}

export interface TourWhatToBringGroup {
  category: string;
  items: string[];
}

export interface TourCancellationTier {
  percent: number;
  days: string;
}

export interface TourReview {
  name: string;
  country: string;
  rating: number;
  text: string;
  date: string;
}

export interface Tour {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  duration: string;
  groupSize: string;
  language: string;
  difficulty: string;
  price: number;
  region: 'north' | 'central' | 'south' | 'all';
  experienceType: string;
  bookingAdvance: string;
  categories: string[];
  highlights: string[];
  itinerary: TourItineraryDay[];
  included: string[];
  excluded: string[];
  pleaseNote: string[];
  importantNotes?: TourImportantNote[];
  whatToBring: string;
  whatToBringList?: string[];
  whatToBringGroups?: TourWhatToBringGroup[];
  bestSeason?: string;
  startEndLocation?: string;
  cancellation: TourCancellationTier[];
  reviewsList: TourReview[];
}

export const standardCancellation: TourCancellationTier[] = [
  { percent: 75, days: '24 hours' },
  { percent: 50, days: '2 days' },
  { percent: 25, days: '3 days' },
  { percent: 0, days: '7 days' },
];

export const shortCancellation: TourCancellationTier[] = [
  { percent: 75, days: '12 hours' },
  { percent: 50, days: '1 day' },
  { percent: 0, days: '3 days' },
];

export const tours: Tour[] = [
  {
    "id": 1,
    "title": "Ha Long Bay Luxury Cruise — 2 Days",
    "subtitle": "Sail amidst UNESCO limestone karsts, kayak hidden lagoons & sleep under starlit skies",
    "image": "/images/tours/halong-bay-cruise.jpg",
    "gallery": [
      "/images/tours/halong-bay-cruise.jpg",
      "/images/tours/sung-sot-cave.jpg",
      "/images/tours/halong-kayak.jpg",
      "/images/tours/cat-ba-island.jpg",
      "/images/destinations/halong-bay.jpg"
    ],
    "rating": 4.9,
    "reviews": 847,
    "description": "Cruise through towering limestone karsts, paddle kayaks into secluded emerald lagoons, explore colossal Sung Sot Cave, and sleep in an ocean-view cabin on a boutique wooden cruiser.",
    "longDescription": "Ha Long Bay, a designated UNESCO World Heritage site, encompasses over 1,600 towering limestone pillars and islets rising dramatically from the emerald waters of the Gulf of Tonkin. Formed over 500 million years through tectonic shifts and marine karst erosion, this mythical seascape holds ancient legends of descending dragons who spat jade and pearls into the sea to form an impenetrable fortress protecting Vietnam from naval invaders.\n\n**A Floating Sanctuary:** On this 2-day luxury voyage, you sail deep into quieter channels aboard a handcrafted boutique vessel. Feel the tranquil maritime breeze on the open teak sundeck, slip into secluded emerald lagoons by sea kayak, ascend Sung Sot (Surprise) Cave with its soaring stalactites illuminated by soft ambient light, and greet the morning mist with a sunrise Tai Chi session.\n\n**Sensory Indulgence:** Every meal aboard is a celebration of fresh Gulf of Tonkin seafood—from grilled butter garlic prawns to steamed ocean grouper—paired with sunset cocktails as twilight transforms the limestone silhouettes into an unforgettable ink-wash landscape painting.",
    "duration": "2 days 1 night",
    "groupSize": "12 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy",
    "price": 0,
    "region": "north",
    "experienceType": "Luxury Boutique Cruise",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "October to April (cool breezes, crisp clear waters & starry skies)",
    "startEndLocation": "Hanoi – Tuan Chau Harbour – Halong Bay – Ti Top Island – Hanoi",
    "categories": [
      "Luxury Cruise",
      "Nature & Seascape",
      "UNESCO Heritage",
      "Kayaking & Caves"
    ],
    "highlights": [
      "Sail through 1,600 dramatic limestone karst towers and emerald channels",
      "Kayak through Luon Cave into a tranquil enclosed lagoon ringed by vertical cliffs",
      "Explore the colossal chambers and stalactites of Sung Sot (Surprise) Cave",
      "Hike 400 steps to Ti Top Island summit for an iconic 360-degree panoramic vista",
      "Morning sunrise Tai Chi masterclass with fresh Vietnamese drip coffee on the sundeck",
      "Multi-course fresh Gulf of Tonkin seafood dinners and evening squid fishing"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi to Ha Long Bay — Boarding & Secluded Lagoon Kayaking",
        "desc": "Depart Hanoi via the expressway across the Red River Delta to Tuan Chau Pier. Board the cruiser with a welcome drink, enjoy a fresh seafood feast gliding past iconic islets, kayak into Luon Cave lagoon, and watch sunset on deck.",
        "morning": "08:00 private limousine pickup from Hanoi Old Quarter. Drive through scenic delta countryside with a short pause at a ceramic artisan village. Reach Tuan Chau Marina at 11:45.",
        "afternoon": "Board vessel with lemongrass welcome drink and cruise safety briefing. Savor a gourmet multi-course seafood lunch as the cruiser enters Ha Long Bay. At 14:30, board sea kayaks to paddle through Luon Cave, emerging into a quiet lagoon surrounded by sheer cliffs. Swim off the boat or relax on the sundeck.",
        "evening": "17:30 sunset cocktail hour and chef-guided Vietnamese spring roll cooking demonstration. Savor a candlelit seafood banquet under the stars, followed by squid fishing with the crew or stargazing.",
        "meals": "Lunch (Seafood banquet), Dinner (Fine dining on deck)",
        "accommodation": "Deluxe Ocean-View Cabin with Private Balcony",
        "highlights": [
          "Fighting Cock Islet",
          "Luon Cave kayaking",
          "Sunset cooking class",
          "Squid fishing"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Tai Chi, Sung Sot Cave & Ti Top Panoramic Summit",
        "desc": "Greet the dawn with Tai Chi on the top deck, explore the colossal limestone halls of Sung Sot Cave, climb Ti Top Island for 360-degree vistas, and enjoy a farewell brunch buffet while cruising back to harbour.",
        "morning": "06:15 sunrise Tai Chi session on the open sundeck followed by pastries and fresh coffee. Guided walk inside Sung Sot Cave, admiring vast stalactite cathedrals. Transfer to Ti Top Island for a beach swim or summit hike.",
        "afternoon": "Return to the cruiser for check-out. Savor an international and Vietnamese brunch buffet while navigating hidden karst corridors back to Tuan Chau Pier. Disembark at 11:30 and return to Hanoi by 15:30.",
        "evening": "Drop-off at your Hanoi hotel. Evening free to explore the Old Quarter.",
        "meals": "Light Breakfast & Full Brunch Buffet",
        "accommodation": "None (Tour concludes in Hanoi)",
        "highlights": [
          "Sunrise Tai Chi",
          "Sung Sot Cave cathedral",
          "Ti Top Island summit panorama",
          "Scenic bay cruise"
        ]
      }
    ],
    "included": [
      "Round-trip luxury limousine transfer between Hanoi and Ha Long Bay",
      "Overnight accommodation in deluxe ocean-view cabin with private balcony and en-suite bathroom",
      "All gourmet meals on board: 1 lunch, 1 dinner, 1 light breakfast, 1 full brunch",
      "English-speaking professional cruise tour guide throughout",
      "High-grade sea kayaking equipment, paddles, and buoyancy vests",
      "All Ha Long Bay entrance permits, port sightseeing fees, and cave admissions",
      "Complimentary bottled water, seasonal fruit basket, welcome drink, and cooking demonstration",
      "Sunrise Tai Chi session and evening squid fishing gear"
    ],
    "excluded": [
      "Beverages, cocktails, and personal bar expenses",
      "Personal travel and medical insurance",
      "Gratuities and tips for cruise crew and private driver",
      "Personal expenses and spa treatments"
    ],
    "pleaseNote": [
      "Passport details are required at time of booking for mandatory maritime coast guard registration.",
      "Single-use plastics are banned on Ha Long Bay; complimentary filtered water stations are available.",
      "In case of sudden extreme weather or port authority harbor closures, itineraries will be safely adjusted.",
      "Vegetarian, vegan, gluten-free, and seafood-allergy meal plans are happily accommodated with prior notice."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Maritime & Weather Advisory",
        "detail": "Ha Long Bay cruise schedules are regulated strictly by the Hai Phong and Quang Ninh Maritime Port Authorities. If typhoon warnings or sudden dense sea fogs occur, alternative routes or full land transfers are implemented."
      },
      {
        "category": "fitness",
        "title": "Physical Fitness & Footwear",
        "detail": "Ascending Sung Sot Cave and Ti Top Island involves approximately 400 stone steps. Pathways are well-paved but can be moist; flat shoes or sneakers with rubber traction soles are strongly recommended."
      },
      {
        "category": "etiquette",
        "title": "Environmental Protection",
        "detail": "Ha Long Bay is an ecologically vulnerable UNESCO biosphere. Please do not dispose of any waste overboard. Single-use plastic bottles and plastic bags are not permitted on tourist boats."
      },
      {
        "category": "general",
        "title": "Luggage Storage",
        "detail": "Please pack a compact weekender bag for your night aboard. Large bulky luggage can be securely locked inside the private transport vehicle or stored free of charge at our Hanoi headquarters."
      }
    ],
    "whatToBring": "Original passport, swimwear, water-resistant sunscreen, sunglasses, comfortable walking sneakers for cave stairs, light jacket or shawl for evening sundeck breezes, and a camera or waterproof phone pouch.",
    "whatToBringList": [
      "Original passport with valid Vietnam visa (mandatory for check-in)",
      "Swimwear and quick-drying beach towel",
      "Reef-safe sunscreen, sunglasses, and wide-brim sun hat",
      "Comfortable sneakers or trail shoes with rubber grip for cave stairs",
      "Light cardigan or windbreaker jacket for breezy sundeck evenings",
      "Waterproof phone pouch or dry bag for kayaking",
      "Camera, spare memory cards, and portable power bank"
    ],
    "whatToBringGroups": [
      {
        "category": "Essential Documents & Valuables",
        "items": [
          "Original passport (mandatory for boat manifest)",
          "Credit card & small VND cash for drinks and tips"
        ]
      },
      {
        "category": "Apparel & Footwear",
        "items": [
          "Swimsuit / swim trunks",
          "Sneakers or sports shoes with traction for cave steps",
          "Light jacket or wrap for cool evening breezes",
          "Casual breathable cotton clothing"
        ]
      },
      {
        "category": "Sun & Weather Protection",
        "items": [
          "Reef-safe sunscreen (SPF 50+)",
          "Polarized UV sunglasses",
          "Wide-brimmed sun hat or cap"
        ]
      },
      {
        "category": "Electronics & Optics",
        "items": [
          "Waterproof phone case / dry bag for kayaking",
          "Camera or smartphone with wide-angle lens",
          "Power bank & charging cables"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Sarah K.",
        "country": "Australia",
        "rating": 5,
        "text": "Absolutely magical experience! The bay is breathtaking and the boat was exceptionally comfortable. Kayaking through Luon Cave was pure peace.",
        "date": "Aug 2026"
      },
      {
        "name": "Marco R.",
        "country": "Italy",
        "rating": 5,
        "text": "Best 2 days of our Vietnam trip. The sunrise Tai Chi was a profound highlight, and the seafood banquet was unforgettable.",
        "date": "Jul 2026"
      },
      {
        "name": "Yuki T.",
        "country": "Japan",
        "rating": 5,
        "text": "Stunning scenery, courteous crew, and flawless organization from Hanoi pickup to return. Worth every penny.",
        "date": "May 2026"
      }
    ]
  },
  {
    "id": 2,
    "title": "Bai Tu Long Bay Deluxe Cruise — 3 Days 2 Nights",
    "subtitle": "Explore the pristine, crowd-free wilderness of Bai Tu Long & Cat Ba Biosphere Reserve",
    "image": "/images/tours/cat-ba-island.jpg",
    "gallery": [
      "/images/tours/cat-ba-island.jpg",
      "/images/tours/halong-kayak.jpg",
      "/images/tours/sung-sot-cave.jpg",
      "/images/tours/halong-bay-cruise.jpg",
      "/images/destinations/halong-bay.jpg"
    ],
    "rating": 4.9,
    "reviews": 312,
    "description": "A tranquil, untouched sanctuary sharing the same dramatic limestone geology as Ha Long Bay but with a fraction of the boats, combining deep sea kayaking, Thien Canh Son Cave, and Cat Ba National Park.",
    "longDescription": "Bai Tu Long Bay occupies three-quarters of the greater Halong Bay geological zone, yet receives only a tiny fraction of tourist vessel traffic. Legend recounts that while the Mother Dragon descended into Halong Bay, her dragon children landed in Bai Tu Long (\"Children Dragons bowing to Mother\"). Here, the waters are remarkably calm, the limestone pinnacles stand wild and untouched, and traditional floating fishing communities still preserve their centuries-old maritime heritage.\n\n**Untouched Seascape:** Far fewer cruise boats are permitted in these protected waters, allowing you to paddle sea kayaks through hidden lagoons where the only sound is the dip of your paddle and birds overhead. Ascend to Thien Canh Son Cave, perched high above the bay, offering sweeping views across the virgin limestone forest.\n\n**Cat Ba Biosphere Integration:** This 3-day voyage pairs tranquil cruising with an expedition into Cat Ba National Park, home to dense tropical rainforests, endemic golden-headed langurs, and secluded white-sand coves accessible only by water.",
    "duration": "3 days 2 nights",
    "groupSize": "16 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "north",
    "experienceType": "Expedition Cruise",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "September to May (clear visibility and temperate sea breezes)",
    "startEndLocation": "Hanoi – Hon Gai Harbour – Bai Tu Long Bay – Cat Ba Island – Hanoi",
    "categories": [
      "Expedition Cruise",
      "Nature & Wildlife",
      "Kayaking",
      "Island Trekking"
    ],
    "highlights": [
      "Navigate the pristine, crowd-free waters of Bai Tu Long National Park",
      "Overnight stays in deluxe ocean cabins surrounded by untouched limestone karsts",
      "Deep sea kayaking through Cap La lagoons and hidden geological tunnels",
      "Explore the pristine stalactites of Thien Canh Son Cave overlooking the bay",
      "Visit Vung Vieng floating fishing village by traditional bamboo sampan",
      "Nature walk through Cat Ba National Park's lush tropical biosphere reserve"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi to Bai Tu Long Bay — Cap La Lagoon Kayaking",
        "desc": "Transfer from Hanoi to Hon Gai International Port. Board the deluxe cruiser, sail into Bai Tu Long Bay, kayak among Cap La islands, and enjoy sunset dinner on the sundeck.",
        "morning": "07:45 pickup from Hanoi Old Quarter. Scenic drive through Red River Delta. Arrive at Hon Gai Port at 11:30 for boarding and welcome briefing.",
        "afternoon": "Cruise into Bai Tu Long Bay while savoring fresh seafood lunch. Anchor at Cap La for sea kayaking through towering karst arches into secluded lagoons. Swim in clean, turquoise waters.",
        "evening": "Sunset party on the open deck with fresh tropical fruit. Savor a chef-curated seafood dinner. Evening squid fishing or board games.",
        "meals": "Lunch & Dinner",
        "accommodation": "Deluxe Balcony Stateroom on Cruiser",
        "highlights": [
          "Hon Gai Harbour departure",
          "Cap La kayaking",
          "Sunset deck gathering"
        ]
      },
      {
        "day": 2,
        "title": "Cat Ba Island & Lan Ha Bay Nature Expedition",
        "desc": "Full-day exploration aboard a dedicated day-cruiser to Cat Ba Island. Hike through lush trails in Cat Ba National Park, swim at secluded beaches, and explore hidden sea caves.",
        "morning": "06:30 sunrise yoga on sundeck. Transfer to day-boat sailing toward Cat Ba Island. Bicycle ride along shady mountain paths to Viet Hai ancient village nestled in a jungle valley.",
        "afternoon": "Guided nature trek through Cat Ba National Park forest canopy. Enjoy fresh seafood lunch in the village. Afternoon sea kayaking around Lan Ha Bay's calm coves and private beaches.",
        "evening": "Return to the main cruiser. Relax with a sunset cocktail, barbecue dinner on the deck, and stargazing.",
        "meals": "Breakfast, Lunch & BBQ Dinner",
        "accommodation": "Deluxe Balcony Stateroom on Cruiser",
        "highlights": [
          "Viet Hai village cycling",
          "Cat Ba rainforest trek",
          "Secluded beach swim"
        ]
      },
      {
        "day": 3,
        "title": "Thien Canh Son Cave & Vung Vieng Floating Village to Hanoi",
        "desc": "Explore Thien Canh Son Cave, visit Vung Vieng floating fishing community by bamboo sampan, enjoy a farewell brunch, and cruise back to port for transfer to Hanoi.",
        "morning": "Tai Chi at dawn. Ascend stone path to Thien Canh Son Cave with dramatic stalactite drapery. Visit Vung Vieng floating village where local fishermen row traditional bamboo sampans.",
        "afternoon": "Farewell brunch buffet as the cruiser navigates picturesque limestone corridors back to Hon Gai Port. Disembark at 11:45 and return to Hanoi by 15:30.",
        "evening": "Drop-off at your Hanoi hotel.",
        "meals": "Light Breakfast & Brunch Buffet",
        "accommodation": "None (Tour concludes in Hanoi)",
        "highlights": [
          "Thien Canh Son Cave",
          "Vung Vieng floating village",
          "Scenic return sail"
        ]
      }
    ],
    "included": [
      "Round-trip luxury transport between Hanoi and Hon Gai Port",
      "2 nights deluxe cabin accommodation with private balcony and sea views",
      "All gourmet meals aboard: 2 breakfasts, 2 lunches, 2 dinners, 1 brunch",
      "Dedicated day-boat for full-day Cat Ba Island exploration",
      "All kayaking gear, safety equipment, and bamboo boat excursions",
      "Sightseeing admissions for Bai Tu Long Bay, caves, and Cat Ba National Park",
      "Bicycles for Viet Hai village exploration",
      "Professional English-speaking guide throughout the journey"
    ],
    "excluded": [
      "Alcoholic beverages and personal drinks",
      "Personal travel insurance",
      "Tips for guides, crew, and drivers",
      "Personal expenses"
    ],
    "pleaseNote": [
      "Passport details are required 24 hours prior to departure for maritime coast guard manifests.",
      "Moderate walking and cycling fitness is needed for the Viet Hai village and Cat Ba excursion.",
      "Cruise itineraries may shift slightly depending on weather and port authority regulations.",
      "Plastic bags and single-use plastic water bottles are strictly prohibited in the bay."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Weather & Route Flexibility",
        "detail": "Bai Tu Long Bay offers calmer waters than outer open seas. In the rare event of severe maritime storm warnings, routes may be altered for passenger comfort and safety."
      },
      {
        "category": "fitness",
        "title": "Activity Level",
        "detail": "Day 2 includes a 5 km flat bicycle ride and a 45-minute nature walk on forest trails. Electric carts are available in Viet Hai village for travelers who prefer not to cycle."
      },
      {
        "category": "etiquette",
        "title": "Floating Village Respect",
        "detail": "When visiting Vung Vieng floating village, please respect the residential privacy of local fishing families and refrain from littering in the water."
      }
    ],
    "whatToBring": "Original passport, comfortable walking shoes or sneakers for Cat Ba, water sandals, swimwear, sunscreen, sunglasses, light rain jacket, and camera.",
    "whatToBringList": [
      "Original passport (mandatory for check-in)",
      "Comfortable sneakers or walking shoes for village cycling and national park trail",
      "Water sandals or flip-flops for boat and kayaking",
      "Swimwear (2 sets recommended for multi-day cruise)",
      "Sunscreen, wide-brim hat, and UV sunglasses",
      "Light rain jacket or windbreaker",
      "Dry bag for phones/cameras during water activities"
    ],
    "whatToBringGroups": [
      {
        "category": "Documents & Money",
        "items": [
          "Passport with valid entry visa",
          "VND cash for village crafts and drinks"
        ]
      },
      {
        "category": "Clothing & Shoes",
        "items": [
          "Sneakers for cycling & park walk",
          "Water sandals",
          "2 sets of swimwear",
          "Breathable outdoor clothes",
          "Light jacket for evenings"
        ]
      },
      {
        "category": "Sun & Bug Protection",
        "items": [
          "Reef-safe sunscreen",
          "Insect repellent for Cat Ba forest walk",
          "Sun hat and sunglasses"
        ]
      },
      {
        "category": "Gear",
        "items": [
          "Dry bag (10-20L)",
          "Camera with spare battery",
          "Power bank"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Oliver M.",
        "country": "United Kingdom",
        "rating": 5,
        "text": "Far better than Ha Long Bay! We barely saw any other boats. The scenery was breathtaking and Viet Hai village on Cat Ba was delightful.",
        "date": "Sep 2026"
      },
      {
        "name": "Anja S.",
        "country": "Germany",
        "rating": 5,
        "text": "Three peaceful days in pure nature. The food was 5-star quality and the kayak excursions into hidden lagoons were unforgettable.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 3,
    "title": "Sapa Trekking & Mountain Homestay Adventure — 3 Days",
    "subtitle": "Trek through cascading rice terraces, misty bamboo forests & authentic ethnic minority villages",
    "image": "/images/tours/sapa-rice-terrace.jpg",
    "gallery": [
      "/images/tours/sapa-rice-terrace.jpg",
      "/images/tours/sapa-cat-cat-village.jpg",
      "/images/destinations/sapa.jpg",
      "/images/tours/moc-chau-plateau.jpg"
    ],
    "rating": 4.9,
    "reviews": 512,
    "description": "Trek off-the-beaten-track through Muong Hoa Valley's cascading rice terraces, sleep in traditional Black Hmong and Giay family stilt houses, and experience highland culture beneath Mount Fansipan.",
    "longDescription": "Perched high in the Hoang Lien Son mountain range beneath Mount Fansipan—the \"Roof of Indochina\" at 3,143 meters—Sapa is an awe-inspiring highland sanctuary where clouds roll through sweeping valleys carved with centuries-old terraced rice paddies. Hand-sculpted over generations by the Black Hmong, Red Dao, and Giay ethnic minority communities, these gravity-defying terraces represent an engineering masterpiece in harmony with nature.\n\n**The Authentic Footpath:** This 3-day trek avoids paved highways, guiding you along earthen footpaths through bamboo forests, cascading mountain waterfalls, and authentic family homestays where you will share home-cooked meals by the hearth, taste corn wine, and learn traditional indigo batik dyeing techniques.\n\n**Cultural Immersion:** You don't just observe Sapa from afar—you walk alongside local indigenous guides whose ancestors built these villages, discovering herbal medicine traditions, silversmithing, and ancient animist folklore.",
    "duration": "3 days 2 nights",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Moderate",
    "price": 0,
    "region": "north",
    "experienceType": "Highland Trekking & Homestay",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "March to May (blooming flowers & lush greenery) & September to October (golden harvest terraces)",
    "startEndLocation": "Hanoi – Sapa – Y Linh Ho – Lao Chai – Ta Van – Giang Ta Chai – Hanoi",
    "categories": [
      "Highland Trekking",
      "Cultural Immersion",
      "Homestay Experience",
      "Mountain Landscapes"
    ],
    "highlights": [
      "Trek along earthen trails through the world-famous Muong Hoa Valley rice terraces",
      "Authentic overnight homestay with a Giay ethnic family in Ta Van village",
      "Second night at a scenic eco-lodge with herbal baths overlooking misty valleys",
      "Walk through bamboo groves to hidden waterfalls in Red Dao village of Giang Ta Chai",
      "Learn traditional beeswax batik dyeing and hemp textile weaving with Black Hmong craftswomen",
      "Taste authentic mountain cuisine: smoked mountain pork, bamboo sticky rice, and warm herbal tea"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi to Sapa — Descent into Muong Hoa Valley & Ta Van Homestay",
        "desc": "Morning luxury limousine transfer to Sapa town. Savor highland breakfast with panoramic valley views, begin the 12 km scenic trek through Y Linh Ho and Lao Chai, and arrive at your Giay homestay in Ta Van.",
        "morning": "06:30 limousine pickup from Hanoi Old Quarter; ascend the Hoang Lien Son mountains via the modern expressway. Arrive in Sapa town at 12:30 for lunch.",
        "afternoon": "Meet your local Black Hmong guide. Begin trekking down into Muong Hoa Valley along dirt paths. Pass through Y Linh Ho village and Lao Chai village, observing indigo dye vats and hemp looms. Continue along the river to Ta Van village.",
        "evening": "Check into an authentic Giay wooden stilt-house homestay. Relax with an herbal foot bath. Help the host family prepare a traditional dinner over an open hearth, savoring mountain pork and drinking corn wine.",
        "meals": "Lunch & Family Homestay Dinner",
        "accommodation": "Traditional Wooden Stilt Homestay in Ta Van (Private bedding with mosquito nets)",
        "highlights": [
          "Muong Hoa Valley",
          "Lao Chai Black Hmong village",
          "Traditional Giay homestay"
        ]
      },
      {
        "day": 2,
        "title": "Bamboo Forests, Red Dao Villages & Eco-Lodge Retreat",
        "desc": "Trek through dense bamboo groves to Giang Ta Chai village, cross scenic suspension bridges beside waterfalls, meet the Red Dao community, and check into an eco-lodge perched on the mountain ridge.",
        "morning": "Wake to rooster calls and mountain mist. Breakfast of warm pancakes with wild mountain honey. Trek uphill through bamboo groves into Giang Ta Chai village of the Red Dao people, famous for their embroidered scarlet headdresses.",
        "afternoon": "Cross a historic suspension bridge over a roaring mountain waterfall. Picnic lunch beside the stream. Continue through Su Pan village before checking into a boutique mountain eco-lodge with panoramic valley views.",
        "evening": "Experience a traditional Red Dao herbal bath infused with 30 forest medicinal leaves. Dinner featuring locally grown highland vegetables and grilled stream fish.",
        "meals": "Breakfast, Picnic Lunch & Dinner",
        "accommodation": "Boutique Mountain Eco-Lodge (Ta Van or Topas area)",
        "highlights": [
          "Giang Ta Chai waterfall",
          "Bamboo forest trails",
          "Red Dao herbal bath"
        ]
      },
      {
        "day": 3,
        "title": "Cat Cat Cultural Village, Sapa Town & Return to Hanoi",
        "desc": "Morning walk to Cat Cat village to see the French-era hydropower waterfall, stroll around Sapa's stone church, and take the afternoon luxury limousine back to Hanoi.",
        "morning": "Breakfast overlooking cloud-filled valleys. Transfer toward Cat Cat village, walking through traditional Black Hmong wooden houses, waterwheels, and the picturesque Cat Cat waterfall. Watch a live traditional music performance.",
        "afternoon": "Return to Sapa town for a farewell lunch at a local bistro. Free time to browse artisan handicrafts at Sapa Market and photograph the French-built Stone Church (Notre Dame Sapa). Board the afternoon limousine at 15:00.",
        "evening": "Arrive in Hanoi Old Quarter around 21:00. Drop-off at your hotel.",
        "meals": "Breakfast & Lunch",
        "accommodation": "None (Tour concludes in Hanoi)",
        "highlights": [
          "Cat Cat waterwheels & waterfall",
          "Sapa Stone Church",
          "Hanoi return drive"
        ]
      }
    ],
    "included": [
      "Round-trip luxury limousine transfer between Hanoi and Sapa town",
      "1 night authentic ethnic homestay in Ta Van (private bedding, clean shared facilities)",
      "1 night boutique mountain eco-lodge with private en-suite bathroom and valley view",
      "All meals: 2 breakfasts, 3 lunches, 2 dinners",
      "English-speaking native indigenous trekking guide throughout",
      "Luggage transfer service from Sapa town directly to your accommodations",
      "All village entry permits, national park trekking fees, and admissions",
      "Traditional Red Dao herbal foot soak and herbal bath experience"
    ],
    "excluded": [
      "Drinks, beer, and personal expenses",
      "Personal trekking travel insurance",
      "Tips for trekking guides and homestay hosts"
    ],
    "pleaseNote": [
      "Trekking trails cover approximately 10-14 km per day on uneven dirt paths, which can be slippery after rain.",
      "A moderate level of physical fitness is required; not recommended for individuals with severe knee or back issues.",
      "Respect local culture: always ask permission before taking close-up portraits of villagers and children.",
      "Do not hand out candy or cash directly to children; our agency supports local community school supply programs."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Trail Conditions & Footwear",
        "detail": "Trails can become very muddy during or after rain. Broken-in hiking boots or trail runners with deep lugged rubber soles are essential. Trekking poles provide tremendous support on steep descents."
      },
      {
        "category": "weather",
        "title": "Highland Mountain Climate",
        "detail": "Sapa is elevated at 1,500m to 1,800m. Temperatures drop significantly at night, often reaching 8-12°C in autumn/spring and below 5°C in winter. Warm layers are necessary year-round."
      },
      {
        "category": "etiquette",
        "title": "Homestay Etiquette",
        "detail": "Remove your shoes before stepping onto the wooden floors of ethnic stilt houses. Never point your feet directly at the family altar or central hearth."
      }
    ],
    "whatToBring": "Broken-in hiking boots, trekking socks, waterproof rain jacket, warm fleece/sweater for cool nights, small daypack (20-30L), sun hat, insect repellent, and cash for handmade artisan textiles.",
    "whatToBringList": [
      "Broken-in hiking shoes or trail runners with deep grip (essential)",
      "3 pairs of moisture-wicking trekking socks",
      "Waterproof rain jacket or poncho",
      "Warm fleece, sweater, or thermal base layer for cool highland nights",
      "Small daypack (20–30L) with waterproof rain cover",
      "Trekking pole (highly recommended for descents)",
      "Insect repellent, sunscreen, and lip balm",
      "Small cash (VND) for handmade handicrafts and local snacks"
    ],
    "whatToBringGroups": [
      {
        "category": "Footwear & Trekking",
        "items": [
          "Hiking boots or trail running shoes with deep grip",
          "Moisture-wicking merino/synthetic socks",
          "Trekking poles (optional but highly recommended)"
        ]
      },
      {
        "category": "Highland Clothing",
        "items": [
          "Breathable quick-dry shirts & trekking pants",
          "Waterproof rain jacket / poncho",
          "Warm fleece or down jacket for evenings",
          "Comfortable sleepwear"
        ]
      },
      {
        "category": "Health & Protection",
        "items": [
          "DEET insect repellent",
          "Sunscreen & lip balm",
          "Personal blister bandages / first aid",
          "Reusable water bottle"
        ]
      },
      {
        "category": "Personal & Cash",
        "items": [
          "Small daypack (large luggage stored in Sapa)",
          "VND cash for village artisans",
          "Power bank & charging cables"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Elena V.",
        "country": "Spain",
        "rating": 5,
        "text": "Hiking through the rice terraces with our guide May was the highlight of our 3-week Asia trip. The homestay was so warm and welcoming.",
        "date": "Sep 2026"
      },
      {
        "name": "David L.",
        "country": "Canada",
        "rating": 5,
        "text": "Incredible scenery! The trek was moderately challenging but totally doable with good shoes. Sleeping in the stilt house listening to the stream was magical.",
        "date": "Jul 2026"
      }
    ]
  },
  {
    "id": 4,
    "title": "Ha Giang Loop — Extreme North Motorbike & 4x4 Tour — 4 Days",
    "subtitle": "Conquer Vietnam's most legendary mountain frontier, Ma Pi Leng Pass & Tu San Canyon",
    "image": "/images/tours/ha-giang-loop.jpg",
    "gallery": [
      "/images/tours/ha-giang-loop.jpg",
      "/images/tours/ha-giang-ma-pi-leng.jpg",
      "/images/tours/ha-giang-nho-que.jpg",
      "/images/tours/dong-van-karst-plateau.jpg"
    ],
    "rating": 4.9,
    "reviews": 923,
    "description": "Traverse the UNESCO Dong Van Karst Plateau, ride the jaw-dropping cliffside hairpins of Ma Pi Leng Pass, cruise the turquoise Nho Que River through Tu San Canyon, and stay in authentic ethnic homestays.",
    "longDescription": "The Ha Giang Loop is celebrated by adventurous globetrotters as one of the most magnificent, heart-racing motorcycle and overland road journeys on earth. Traversing the UNESCO Dong Van Karst Plateau Geopark along Vietnam's northernmost frontier near the Chinese border, this rugged landscape is dominated by jagged dark limestone peaks that erupted from the seabed hundreds of millions of years ago.\n\n**The King of Mountain Passes:** The crowning jewel of the expedition is the legendary Ma Pi Leng Pass—known as the \"King of Vietnamese Mountain Passes\"—where the cliffside road hugs vertical rock faces thousands of feet above the turquoise ribbon of the Nho Que River carving through Tu San, Southeast Asia's deepest canyon.\n\n**Ride with Local Easy Riders or 4x4:** Whether riding pillion behind our veteran licensed local \"Easy Riders\" (allowing you to soak in the 360-degree vistas and snap photos safely) or traveling in our modern 4x4 expedition vehicles, this journey immerses you in the culture of 17 ethnic groups, village markets, and cliffside fortress palaces.",
    "duration": "4 days 3 nights",
    "groupSize": "8 max",
    "language": "English, Vietnamese",
    "difficulty": "Moderate to Challenging",
    "price": 0,
    "region": "north",
    "experienceType": "Mountain Overland Adventure",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "September to December (buckwheat flower bloom & crisp blue skies) & March to May",
    "startEndLocation": "Ha Giang City – Quan Ba – Yen Minh – Dong Van – Ma Pi Leng – Du Gia – Ha Giang City",
    "categories": [
      "Overland Adventure",
      "Motorbike Loop",
      "UNESCO Geopark",
      "Extreme Landscapes"
    ],
    "highlights": [
      "Ride the legendary Ma Pi Leng Pass hugging sheer cliffs above Tu San Canyon",
      "Boat cruise down the turquoise Nho Que River between 800-meter vertical canyon walls",
      "Explore the 100-year-old Opium King's Palace (Dinh Vua Meo) in Sa Phin Valley",
      "Gaze across the Fairy Twin Mountains from Quan Ba Heaven Gate",
      "Swim in crystalline mountain pools beneath Du Gia waterfall",
      "Immerse in frontier ethnic culture across Dong Van, Meo Vac, and Tay villages"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ha Giang City to Quan Ba Heaven Gate & Yen Minh (98 km)",
        "desc": "Meet your Easy Rider guides in Ha Giang City for gear fitting and safety briefing. Ascend the twisting hairpins of Bac Sum Pass to Quan Ba Heaven Gate, gaze over the Fairy Twin Mountains, and sleep in Yen Minh.",
        "morning": "08:30 meet your professional rider and tour leader. Helmet and protective armor fitting. Begin the ride, climbing the dramatic Bac Sum Pass. Pause at Quan Ba Heaven Gate (Cong Troi) for tea and panoramic photos of the Fairy Twin Mountains.",
        "afternoon": "Descend into Tam Son valley. Ride along winding river valleys and karst hills. Pause at a traditional Hmong linen weaving village in Lung Tam, watching natural hemp fiber extraction. Arrive in Yen Minh pine forest valley.",
        "evening": "Check into an authentic family homestay. Enjoy a communal dinner of smoked mountain chicken and stir-fried wild mustard greens, accompanied by \"Happy Water\" (corn wine).",
        "meals": "Lunch & Dinner",
        "accommodation": "Yen Minh Mountain Homestay (Private or shared rooms with hot showers)",
        "highlights": [
          "Bac Sum Pass hairpins",
          "Quan Ba Heaven Gate",
          "Lung Tam hemp weaving"
        ]
      },
      {
        "day": 2,
        "title": "Yen Minh to Tham Ma Pass, Opium King's Palace & Dong Van (85 km)",
        "desc": "Conquer the iconic Tham Ma serpentine pass, visit the historic French-Chinese fortress palace of the Hmong Opium King, and explore 100-year-old Dong Van Ancient Town.",
        "morning": "Ride through the jagged limestone landscape of the Dong Van UNESCO Karst Plateau. Conquer the famous winding curves of Tham Ma Pass. Pause in Pho Cao village with century-old clay-walled houses.",
        "afternoon": "Explore the historic Dinh Vua Meo (Hmong King's Palace), a fortress compound built in 1902 blending Chinese Qing, French colonial, and indigenous Hmong stone architecture. Continue to Dong Van town.",
        "evening": "Stroll through the lantern-lit cobblestone streets of Dong Van Old Quarter. Savor steaming Black Chicken hotpot and enjoy local coffee in a century-old clay shophouse.",
        "meals": "Breakfast, Lunch & Hotpot Dinner",
        "accommodation": "Boutique Hotel in Dong Van Ancient Town",
        "highlights": [
          "Tham Ma Pass",
          "Hmong King Palace (Dinh Vua Meo)",
          "Dong Van Old Town"
        ]
      },
      {
        "day": 3,
        "title": "The Masterpiece: Ma Pi Leng Pass, Tu San Canyon Boat & Du Gia (110 km)",
        "desc": "Conquer the world-renowned Ma Pi Leng Pass, take an electric boat down the jade-green Nho Que River through Tu San Canyon, and ride scenic backroads to Du Gia waterfall village.",
        "morning": "Ride onto the legendary Ma Pi Leng Pass. Stop at the summit panorama point overlooking the razor-sharp karst ridges. Descend the steep serpentine road to the Nho Que River for an electric boat ride through Southeast Asia's deepest canyon.",
        "afternoon": "Cross Meo Vac town into the remote wilderness of Mau Due and the dramatic M-shaped pass. Navigate breathtaking gravel and paved mountain trails with views of terraced slopes into Du Gia valley.",
        "evening": "Arrive in Du Gia, a pristine Tay ethnic village surrounded by rice paddies. Traditional Tay family feast, music, and social evening by the stilt-house hearth.",
        "meals": "Breakfast, Lunch & Tay Family Feast",
        "accommodation": "Authentic Tay Stilt Homestay in Du Gia",
        "highlights": [
          "Ma Pi Leng Pass summit",
          "Nho Que River boat cruise",
          "Tu San Canyon",
          "M-shaped pass"
        ]
      },
      {
        "day": 4,
        "title": "Du Gia Waterfall Swim & Return to Ha Giang City (75 km)",
        "desc": "Morning swim in the natural crystal pools of Du Gia waterfall, scenic ride through lush valleys, and farewell lunch before return to Ha Giang City.",
        "morning": "07:30 walk to Du Gia waterfall for a refreshing swim in crystal clear mountain pools fed by jungle streams. Hearty breakfast of banana pancakes and Vietnamese drip coffee.",
        "afternoon": "Ride along the scenic mountain pass through Duong Thuong, passing ancient French military stone outposts. Arrive back in Ha Giang City by 15:30. Shower and freshen up at our traveler lounge.",
        "evening": "Farewell dinner in Ha Giang City. Board luxury VIP sleeper limousine coach back to Hanoi (or private transfer).",
        "meals": "Breakfast & Lunch",
        "accommodation": "VIP Sleeper Coach or Hanoi transfer",
        "highlights": [
          "Du Gia waterfall swim",
          "Duong Thuong French outpost",
          "Ha Giang loop completion"
        ]
      }
    ],
    "included": [
      "Full 4-day loop transport: choice of professional Easy Rider (pillion) or 4x4 expedition vehicle",
      "High-grade DOT-approved motorcycle helmets, knee/elbow protective armor, and rain poncho gear",
      "3 nights accommodation (2 nights authentic ethnic homestays, 1 night boutique Dong Van hotel)",
      "All meals throughout: 3 breakfasts, 4 lunches, 3 hearty dinners",
      "Licensed English-speaking tour leader and certified professional drivers",
      "Boat cruise ticket on the Nho Que River through Tu San Canyon",
      "All entrance permits for UNESCO Dong Van Geopark and border zone checkpoints",
      "Luggage transfer service or secure motorbike luggage strapping with waterproof covers"
    ],
    "excluded": [
      "Drinks, beers, and personal bar expenses",
      "Personal travel and accident insurance",
      "Gratuities for your Easy Rider guides and homestay families"
    ],
    "pleaseNote": [
      "Self-driving is only permitted for travelers with a valid International Driving Permit (IDP) with Category A (motorcycle) endorsement and verified mountain riding experience.",
      "Riding pillion with our licensed local Easy Riders is overwhelmingly recommended for safety, relaxation, and unparalleled photography opportunities.",
      "Mountain roads feature steep drop-offs and hairpin turns; strict safety protocol is enforced at all times.",
      "Accommodation is clean, authentic, and memorable, with hot water showers and Wi-Fi, but embraces genuine rural village conditions."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Rider Comfort & Endurance",
        "detail": "Riding 75–110 km per day on mountain roads takes 4–6 hours of travel with frequent scenic and coffee stops. Comfortable long pants, closed-toe footwear, and sunglasses are mandatory."
      },
      {
        "category": "weather",
        "title": "Mountain Frontier Weather",
        "detail": "High-altitude mountain passes can experience sudden temperature drops, mountain mist, or showers. We provide protective wind and rain gear, but personal warm thermal layers are essential."
      },
      {
        "category": "etiquette",
        "title": "Border Region Protocols",
        "detail": "Ha Giang is a sensitive national border zone. Always carry your original passport. Do not fly drones near border markers or military installations without prior permits."
      }
    ],
    "whatToBring": "Original passport, windproof jacket, warm fleece/layers, sturdy closed-toe shoes or boots, sunglasses, swimwear for Du Gia waterfall, small backpack (30L max for the bike), and power bank.",
    "whatToBringList": [
      "Original passport (mandatory for border zone permits)",
      "Sturdy closed-toe shoes or boots (no flip-flops while riding)",
      "Windproof/waterproof jacket and comfortable long pants",
      "Warm layers or fleece for chilly mountain passes",
      "Swimwear and quick-drying towel for Du Gia waterfall",
      "UV sunglasses and bandana / neck gaiter against dust and wind",
      "High-capacity power bank (20,000mAh recommended)",
      "Small daypack (your main luggage can be stored securely in Ha Giang City)"
    ],
    "whatToBringGroups": [
      {
        "category": "Documents & Cash",
        "items": [
          "Original passport (strict requirement)",
          "VND cash (ATMs are rare on the loop)"
        ]
      },
      {
        "category": "Riding & Outdoor Apparel",
        "items": [
          "Closed-toe boots / sneakers",
          "Durable long pants / jeans",
          "Windbreaker / warm fleece",
          "Neck buff / gaiter",
          "Swimwear for waterfall"
        ]
      },
      {
        "category": "Electronics & Protection",
        "items": [
          "GoPro / camera with secure lanyard",
          "Power bank & cables",
          "Sunscreen & lip balm"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Liam W.",
        "country": "New Zealand",
        "rating": 5,
        "text": "The single greatest adventure of my life. Riding pillion with an Easy Rider let me look around at the insane canyon views without stress. The boat on Nho Que river felt like another planet.",
        "date": "Sep 2026"
      },
      {
        "name": "Chloe B.",
        "country": "France",
        "rating": 5,
        "text": "Unbelievable landscapes! Dong Van and Ma Pi Leng took my breath away. Our guides were safe, friendly, and took hundreds of great photos for us.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 5,
    "title": "Ninh Binh — Tam Coc, Trang An & Hang Mua Day Trip",
    "subtitle": "Ha Long Bay on land: glide through limestone river caves & scale the dragon peak",
    "image": "/images/tours/ninh-binh-trang-an.jpg",
    "gallery": [
      "/images/tours/ninh-binh-trang-an.jpg",
      "/images/tours/ninh-binh-hang-mua.jpg",
      "/images/tours/tam-coc-boat.jpg",
      "/images/tours/ninh-binh-bich-dong.jpg",
      "/images/destinations/ninh-binh.jpg"
    ],
    "rating": 4.8,
    "reviews": 680,
    "description": "Explore the 10th-century royal capital of Hoa Lu, glide through mystical river caves on a traditional sampan at UNESCO Trang An, and climb 500 stone steps to the iconic dragon summit of Hang Mua.",
    "longDescription": "Affectionately known as \"Ha Long Bay on Land\", Ninh Binh is a realm of dramatic limestone karst towers emerging from lush emerald rice paddies and serene, winding waterways. As the 10th-century political cradle of independent Vietnam under the Dinh and Early Le Dynasties, Hoa Lu served as the country's ancient capital, protected by towering natural rock fortresses.\n\n**Subterranean River Labyrinth:** At UNESCO-listed Trang An Grottoes, board a traditional wooden sampan rowed by local boatwomen. Glide through a network of seven mystical river caves carved through limestone mountains over thousands of years, emerging into hidden valley lagoons where historic temples stand on the water's edge.\n\n**The Dragon's Eye View:** Conclude the adventure by ascending the 500 stone stairs of Hang Mua (Mua Cave). At the summit, stand beside the ancient stone dragon perched on the jagged karst ridge, rewarded with the most famous panoramic vista in Northern Vietnam: the winding Ngo Dong River dotted with boats cutting through golden rice fields.",
    "duration": "1 full day (10 hours)",
    "groupSize": "12 max",
    "language": "English, Vietnamese",
    "difficulty": "Moderate (500 steps climb)",
    "price": 0,
    "region": "north",
    "experienceType": "Day Excursion",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "Year-round; May to June features golden ripe rice paddies in Tam Coc",
    "startEndLocation": "Hanoi – Hoa Lu – Trang An – Hang Mua – Hanoi",
    "categories": [
      "UNESCO Heritage",
      "Boat Excursion",
      "Temple Culture",
      "Scenic Viewpoints"
    ],
    "highlights": [
      "Traditional hand-rowed sampan boat ride through 7 mystical river caves at UNESCO Trang An",
      "Climb 500 stone steps of Hang Mua to the iconic stone dragon summit overlooking Tam Coc",
      "Visit the 10th-century royal shrines of Emperor Dinh Tien Hoang and Le Dai Hanh at Hoa Lu",
      "Photograph the mossy three-tiered stone cave entrance of Bich Dong Pagoda",
      "Bicycle along tranquil rural country paths flanked by lotus ponds and karst peaks",
      "Savor a traditional buffet lunch featuring Ninh Binh specialties: crispy rice and mountain herbs"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi to Hoa Lu Ancient Capital, Trang An Caves & Hang Mua Peak",
        "desc": "Morning departure from Hanoi. Explore Hoa Lu ancient temples, cycle along lotus ponds, enjoy a local specialty lunch, boat through Trang An river caves, and climb Hang Mua for panoramic views.",
        "morning": "07:30 pickup from Hanoi Old Quarter in an air-conditioned limousine. Drive 2 hours south through the countryside to Hoa Lu, Vietnam's ancient capital. Visit the 10th-century imperial temples of King Dinh and King Le. Cycle leisurely along rural lanes past duck ponds and towering karsts.",
        "afternoon": "Enjoy an authentic buffet lunch featuring local crispy rice (com chay) and mountain delicacies. At 13:30, board a traditional sampan boat at Trang An Grottoes, gliding through Sang (Light) Cave, Toi (Dark) Cave, and Ba Giot Cave. Next, transfer to Hang Mua and conquer the 500 stone steps to the summit dragon shrine.",
        "evening": "Descend Hang Mua and enjoy sunset countryside views. Relax in the limousine on the return drive to Hanoi, arriving at your hotel around 19:00.",
        "meals": "Traditional Vietnamese Buffet Lunch",
        "accommodation": "None (Day trip concludes in Hanoi)",
        "highlights": [
          "Hoa Lu temples",
          "Trang An river caves",
          "Hang Mua dragon summit",
          "Country cycling"
        ]
      }
    ],
    "included": [
      "Round-trip luxury limousine coach transfer between Hanoi and Ninh Binh",
      "2.5-hour traditional sampan boat trip through Trang An UNESCO Grottoes",
      "Bicycle rental for rural village and lotus pond exploration",
      "All entrance fees to Hoa Lu, Trang An, and Hang Mua Cave peak",
      "Authentic Vietnamese buffet lunch featuring local specialties",
      "Professional English-speaking local tour guide throughout",
      "Bottled drinking water and cold refreshing towels"
    ],
    "excluded": [
      "Beverages during lunch and personal snacks",
      "Tips for tour guide, driver, and sampan rowers",
      "Personal travel insurance"
    ],
    "pleaseNote": [
      "Modest clothing covering shoulders and knees is strictly required when entering the temples of Hoa Lu.",
      "Ascending Hang Mua involves 500 uneven, steep stone steps. Take your time, stay hydrated, and wear proper footwear.",
      "Open sampan boats do not have roofs; a sun umbrella, hat, and sunscreen are essential on sunny days."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Climbing Hang Mua",
        "detail": "The climb to the dragon shrine on Hang Mua is steep and uneven. Handrails are available on parts of the ascent. Travelers with knee injuries can rest comfortably at the garden cafe below."
      },
      {
        "category": "etiquette",
        "title": "Temple Attire",
        "detail": "Hoa Lu is a revered sacred site. Sleeveless tank tops, short shorts, or revealing tops are not permitted inside worship pavilions. Shawls can be used as cover-ups."
      },
      {
        "category": "weather",
        "title": "Sun & Heat Preparation",
        "detail": "During summer months (May–August), midday temperatures can reach 35°C. Morning scheduling for cycling and midday boat rides ensures maximum comfort."
      }
    ],
    "whatToBring": "Comfortable walking shoes/sneakers with rubber grip, temple-appropriate clothing (covered shoulders/knees), sun hat, sunglasses, sun umbrella, sunscreen, and camera.",
    "whatToBringList": [
      "Comfortable sneakers with good traction for 500 stone steps",
      "Temple-appropriate modest attire (or light scarf/sarong)",
      "Sun umbrella, wide-brim hat, and UV sunglasses",
      "High-SPF sunscreen and insect repellent",
      "Camera or smartphone with wide-angle lens",
      "Small cash (VND) for tipping boat rowers and buying fresh coconuts"
    ],
    "whatToBringGroups": [
      {
        "category": "Apparel & Shoes",
        "items": [
          "Walking sneakers with rubber grip",
          "Modest shirt covering shoulders",
          "Comfortable shorts/trousers covering knees"
        ]
      },
      {
        "category": "Sun Protection",
        "items": [
          "Sun umbrella (very useful on sampan)",
          "Broad-brim hat",
          "UV sunglasses",
          "Sunscreen (SPF 50+)"
        ]
      },
      {
        "category": "Personal & Camera",
        "items": [
          "Camera / smartphone",
          "Small cash for boat rowers tip",
          "Reusable water bottle"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "3 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Marcus B.",
        "country": "Sweden",
        "rating": 5,
        "text": "The view from Hang Mua is one of the most stunning sights I have ever seen. The boat ride through Trang An was peaceful and mystical.",
        "date": "Aug 2026"
      },
      {
        "name": "Mei L.",
        "country": "Singapore",
        "rating": 5,
        "text": "Well organized day trip. The limousine bus was very comfortable, the food was delicious, and our guide gave great historical background.",
        "date": "Jul 2026"
      }
    ]
  },
  {
    "id": 6,
    "title": "Mu Cang Chai Rice Terrace Photography Expedition — 2 Days",
    "subtitle": "Capture the world's most dramatic terraced rice staircases at Mam Xoi & Mong Ngua",
    "image": "/images/tours/mu-cang-chai-terrace.jpg",
    "gallery": [
      "/images/tours/mu-cang-chai-terrace.jpg",
      "/images/tours/sapa-rice-terrace.jpg",
      "/images/tours/dong-van-karst-plateau.jpg",
      "/images/tours/moc-chau-plateau.jpg"
    ],
    "rating": 4.9,
    "reviews": 218,
    "description": "An expedition designed for landscape lovers and photographers: witness the world-famous golden terraces of Mam Xoi Hill and Horseshoe Hill, cross majestic Khau Pha Pass, and immerse in Hmong mountain culture.",
    "longDescription": "Mu Cang Chai is globally acclaimed by landscape photographers and travelers as home to the most jaw-dropping terraced rice fields on the planet. Designated as a National Special Heritage site, these colossal green and golden staircases climb up to 1,500 meters along the slopes of the Hoang Lien Son range, meticulously engineered by the Hmong people over centuries to channel spring runoff from cloud-capped peaks down to individual earthen tiers.\n\n**The Golden Waves:** During May–June (\"Water Season\"), the flooded terraces mirror the clouds like giant shattered mirrors. In September–October (\"Harvest Season\"), the entire valley turns into an intoxicating ocean of golden grain ripe for harvest.\n\n**Photographer-Centric Pacing:** This expedition is paced around golden hour and blue hour lighting, taking you up to iconic vantage points—including Mam Xoi (Raspberry) Hill in La Pan Tan and Doi Mong Ngua (Horseshoe) Hill in Sang Nhu—to capture unforgettable sunbursts breaking through mountain mist.",
    "duration": "2 days 1 night",
    "groupSize": "8 max",
    "language": "English, Vietnamese",
    "difficulty": "Moderate",
    "price": 0,
    "region": "north",
    "experienceType": "Photography Expedition",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "May to June (Water Falling season) & September to October (Golden Harvest season)",
    "startEndLocation": "Hanoi – Khau Pha Pass – Tu Le – La Pan Tan – Doi Mong Ngua – Hanoi",
    "categories": [
      "Photography Tour",
      "Rice Terraces",
      "Highland Culture",
      "Mountain Passes"
    ],
    "highlights": [
      "Photograph the legendary circular terrace waves of Mam Xoi (Raspberry) Hill in La Pan Tan",
      "Capture sunset golden hour across the curved terraces of Doi Mong Ngua (Horseshoe Hill)",
      "Cross Khau Pha Pass—one of Vietnam's four greatest mountain passes—often veiled in clouds",
      "Taste warm Tu Le green sticky rice (com Tu Le) freshly pounded by Thai ethnic craftswomen",
      "Overnight in an authentic eco-lodge surrounded by terraced valleys and mountain streams",
      "Small group size ensuring maximum mobility, optimal shooting locations, and personal guidance"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi to Khau Pha Pass & Mam Xoi Hill Sunset Shoot",
        "desc": "Morning drive through tea hills to Yen Bai. Cross the breathtaking Khau Pha Pass, stop in Tu Le for fresh green sticky rice, and take motorbike transfers up to Mam Xoi Hill for a golden hour photography session.",
        "morning": "06:00 early departure from Hanoi Old Quarter in private transport. Drive through lush green tea plantations of Phu Tho. Arrive at Tu Le valley for lunch featuring free-range hill chicken and fragrant sticky rice.",
        "afternoon": "Ascend Khau Pha Pass, marveling at the paragliding viewpoint overlooking the vast valley. Descend into Mu Cang Chai. Transfer by local Hmong motorbike drivers up the earthen trails to Mam Xoi Hill in La Pan Tan. Set up cameras for the golden hour sunset.",
        "evening": "Check into an authentic mountain eco-lodge. Savor a home-cooked dinner of grilled mountain pork, wild bamboo shoots, and warm herbal tea. Rest for early morning shoot.",
        "meals": "Lunch & Dinner",
        "accommodation": "Mu Cang Chai Mountain Eco-Lodge",
        "highlights": [
          "Khau Pha Pass panorama",
          "Tu Le green rice",
          "Mam Xoi Hill golden hour shoot"
        ]
      },
      {
        "day": 2,
        "title": "Doi Mong Ngua Sunrise Shoot & Return to Hanoi",
        "desc": "Early morning shoot at Horseshoe Hill capturing morning rays piercing through terrace mist, visit local Hmong textile artisans, and return via scenic mountain roads to Hanoi.",
        "morning": "05:15 early transfer to Doi Mong Ngua (Horseshoe Hill) in Sang Nhu. Photograph the dramatic curved terraces as morning light illuminates the golden rice tiers. Return to lodge for breakfast.",
        "afternoon": "Visit a local Hmong village to photograph traditional hemp cloth making and blacksmithing. Enjoy an early lunch before commencing the scenic return drive across mountain passes toward Hanoi.",
        "evening": "Arrive in Hanoi Old Quarter around 20:30. Drop-off at your hotel.",
        "meals": "Breakfast & Lunch",
        "accommodation": "None (Expedition concludes in Hanoi)",
        "highlights": [
          "Doi Mong Ngua sunrise shoot",
          "Hmong artisan craft village",
          "Scenic return drive"
        ]
      }
    ],
    "included": [
      "Round-trip private air-conditioned transport between Hanoi and Mu Cang Chai",
      "1 night boutique mountain eco-lodge accommodation with en-suite facilities",
      "All meals: 1 breakfast, 2 lunches, 1 dinner",
      "Local Hmong motorbike transfers to Mam Xoi and Doi Mong Ngua hilltop viewpoints",
      "Photography-oriented English-speaking guide with deep location knowledge",
      "All heritage entrance permits, village fees, and camera location access"
    ],
    "excluded": [
      "Camera gear and personal photography accessories",
      "Beverages, beers, and personal expenses",
      "Tips for guides, drivers, and local motorbike riders"
    ],
    "pleaseNote": [
      "The steep, narrow earthen trails leading to Mam Xoi and Mong Ngua viewpoints require transfers by experienced local Hmong motorbike riders (helmets provided).",
      "Walking on narrow muddy terrace dikes requires balance; sturdy trail shoes are required.",
      "Weather in the mountains changes rapidly; bring waterproof camera covers."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Terrace Walking & Footwear",
        "detail": "Terrace paths are narrow earthen ridges (bo ruong) that can be muddy or slick. High-traction hiking boots or trail runners are strongly recommended."
      },
      {
        "category": "weather",
        "title": "Mountain Light & Weather",
        "detail": "Morning fog and evening clouds can create dramatic atmospheric photography. We pace shoots to capture light breaks."
      }
    ],
    "whatToBring": "DSLR/Mirrorless camera, wide-angle lens (16-35mm), telephoto lens (70-200mm), sturdy tripod, extra batteries, ND filters, hiking boots, warm morning jacket, and headlamp.",
    "whatToBringList": [
      "Camera body, wide-angle lens, telephoto lens, and sturdy tripod",
      "Extra camera batteries (battery drain is faster in cool mornings) and memory cards",
      "Sturdy hiking boots or trail runners with aggressive rubber lugs",
      "Windbreaker / warm jacket for pre-dawn shoot setups",
      "Headlamp or flashlight for early morning trail navigation",
      "Waterproof rain covers for your camera bag and electronics"
    ],
    "whatToBringGroups": [
      {
        "category": "Photography Equipment",
        "items": [
          "Camera body & lenses (16-35mm & 70-200mm)",
          "Sturdy tripod",
          "Spare batteries & charger",
          "ND / polarizing filters",
          "Lens cleaning kit"
        ]
      },
      {
        "category": "Apparel & Gear",
        "items": [
          "Trail running shoes / hiking boots",
          "Warm morning fleece / jacket",
          "Rain cover for bag",
          "Headlamp / flashlight"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Stefan H.",
        "country": "Switzerland",
        "rating": 5,
        "text": "A photographer's absolute dream. Mong Ngua at sunrise is something I will never forget. Our guide knew the exact rocks to stand on for the best angles.",
        "date": "Sep 2026"
      },
      {
        "name": "Kenji S.",
        "country": "Japan",
        "rating": 5,
        "text": "Spectacular golden terraces. The organization was smooth and the local Hmong drivers got us to the hilltops right on time for the golden light.",
        "date": "Sep 2026"
      }
    ]
  },
  {
    "id": 7,
    "title": "Ba Be Lake Nature & Jungle Escape — 2 Days",
    "subtitle": "Discover Vietnam's largest natural freshwater lake, mystical caves & Tay stilt houses",
    "image": "/images/tours/ba-be-lake.jpg",
    "gallery": [
      "/images/tours/ba-be-lake.jpg",
      "/images/tours/sapa-cat-cat-village.jpg",
      "/images/tours/halong-kayak.jpg",
      "/images/tours/sung-sot-cave.jpg"
    ],
    "rating": 4.8,
    "reviews": 164,
    "description": "Escape deep into Ba Be National Park's serene emerald waters, cruise through the dramatic mountain cavern of Puong Cave, paddle kayaks beneath karst cliffs, and sleep in a lakeside Tay ethnic stilt house.",
    "longDescription": "Ba Be Lake—meaning \"Three Lakes\" in the local Tay indigenous language (Pe Lam, Pe Lu, and Pe Leng)—is Vietnam's largest natural freshwater lake, nestled 145 meters above sea level within the lush primary rainforest and limestone canyons of Ba Be National Park. Designated as a UNESCO Ramsar Wetland of International Importance, Ba Be is an idyllic sanctuary where motorized road traffic gives way to the rhythmic lap of wooden longtail boats and kayaks.\n\n**The River Through the Mountain:** The centerpiece of the waterway is Puong Cave—a 300-meter limestone cavern carved straight through a mountain by the Nang River, where towering 30-meter stalactites shelter a colony of thousands of bats.\n\n**Warm Tay Hospitality:** Stay in Pac Ngoi village, an authentic settlement of wooden stilt houses built right by the water's edge. Dine on fresh lake fish, grilled river shrimp, and wild forest greens with a local Tay family, serenaded by the soothing melodies of traditional Dan Tinh lute folk songs.",
    "duration": "2 days 1 night",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "north",
    "experienceType": "Eco & Nature Retreat",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "March to May & September to November (warm days, clear waters & low rainfall)",
    "startEndLocation": "Hanoi – Bac Kan – Ba Be National Park – Pac Ngoi – Hanoi",
    "categories": [
      "Nature & Wildlife",
      "Kayaking",
      "Lakeside Homestay",
      "Jungle & Caves"
    ],
    "highlights": [
      "Private longtail wooden boat cruise across the emerald expanse of Ba Be Lake",
      "Boat through Puong Cave, a colossal 300-meter tunnel carved through a limestone mountain",
      "Kayak through peaceful secluded bays and forested karst channels",
      "Overnight in a traditional Tay ethnic wooden stilt house in Pac Ngoi lakeside village",
      "Walk along jungle trails to the roaring cascades of Dau Dang Waterfall",
      "Savor home-cooked lake fish, wild forest herbs, and mountain corn wine with your hosts"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi to Ba Be Lake — Pac Ngoi Village & Sunset Lake Kayaking",
        "desc": "Morning drive through the scenic hills of Thai Nguyen and Bac Kan. Arrive at Ba Be National Park, settle into your lakeside stilt house in Pac Ngoi, and kayak on the peaceful waters at sunset.",
        "morning": "07:30 pickup from Hanoi Old Quarter in private vehicle. Travel north along scenic mountain highways past tea plantations and limestone hills. Arrive at Ba Be National Park around 12:30.",
        "afternoon": "Welcome lunch of freshly caught lake fish and bamboo shoot soup in Pac Ngoi village. Board sea kayaks to paddle across Pe Lu and Pe Lam lakes. Stop at Fairy Pond (Ao Tien) surrounded by limestone peaks and visit An Ma Temple on a karst islet.",
        "evening": "Return to the homestay for sunset over the water. Communal dinner with the Tay host family, featuring local delicacies and an evening folk performance with the traditional Dan Tinh gourd lute.",
        "meals": "Lunch & Tay Family Dinner",
        "accommodation": "Lakeside Wooden Stilt Homestay in Pac Ngoi (Private rooms with mosquito net & hot shower)",
        "highlights": [
          "Pac Ngoi village",
          "Sunset lake kayaking",
          "Fairy Pond (Ao Tien)",
          "Tay cultural evening"
        ]
      },
      {
        "day": 2,
        "title": "Puong Cave, Dau Dang Waterfall & Return to Hanoi",
        "desc": "Morning longtail boat cruise down the Nang River, explore the colossal halls of Puong Cave, walk to Dau Dang Waterfall, and return to Hanoi.",
        "morning": "Breakfast on the stilt-house veranda overlooking the misty lake. Board a traditional motorized longtail boat cruising down the Nang River. Enter Puong Cave, marveling at soaring limestone stalactites and bat colonies. Continue downriver to Dau Dang Waterfall.",
        "afternoon": "Short jungle walk along the roaring rapids of the waterfall. Enjoy lunch at a peaceful riverside clearing. Board the boat back to the park harbour, meet your private vehicle, and begin the drive back to Hanoi.",
        "evening": "Arrive in Hanoi Old Quarter around 19:30. Drop-off at your hotel.",
        "meals": "Breakfast & Lunch",
        "accommodation": "None (Tour concludes in Hanoi)",
        "highlights": [
          "Puong Cave boat transit",
          "Dau Dang Waterfall",
          "Nang River jungle cruise"
        ]
      }
    ],
    "included": [
      "Round-trip private air-conditioned transport between Hanoi and Ba Be National Park",
      "1 night lakeside homestay in Pac Ngoi village (clean private room with en-suite or private bath)",
      "All meals: 1 breakfast, 2 lunches, 1 traditional family dinner",
      "Private motorized wooden longtail boat cruise across Ba Be Lake and Nang River",
      "High-quality sea kayaking equipment, paddles, and life vests",
      "All national park permits, cave entry fees, and environmental conservation tickets",
      "English-speaking guide dedicated throughout the journey"
    ],
    "excluded": [
      "Personal drinks, beer, and snacks",
      "Personal travel insurance",
      "Tips for tour guide, driver, and homestay family"
    ],
    "pleaseNote": [
      "Ba Be is an eco-conservation national park; life jackets are mandatory while boating or kayaking.",
      "Homestay accommodations are clean, comfortable, and charmingly rustic with hot showers and Wi-Fi.",
      "Water levels can vary according to seasonal rains, but boating operates smoothly year-round."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Water Activities & Walking",
        "detail": "Kayaking is leisurely and safe for beginners on calm lake waters. The walk to Dau Dang waterfall involves 2 km of flat, shaded forest pathways."
      },
      {
        "category": "health",
        "title": "Eco-Friendly Repellent",
        "detail": "Given the lush lakeside and jungle environment, mosquito repellent is recommended during sunset and evening hours."
      }
    ],
    "whatToBring": "Comfortable walking shoes, water sandals or flip-flops for the boat, swimwear, light rain jacket, insect repellent, sunscreen, dry bag for electronics, and camera.",
    "whatToBringList": [
      "Comfortable walking shoes and water sandals",
      "Swimwear and quick-dry microfibre towel",
      "Insect repellent (essential for lakeside evenings)",
      "Reef-safe sunscreen and sun hat",
      "Waterproof dry bag for phone/camera during kayaking",
      "Light fleece or cardigan for cool morning lake breezes"
    ],
    "whatToBringGroups": [
      {
        "category": "Water & Outdoor Gear",
        "items": [
          "Water sandals / flip-flops",
          "Swimwear & towel",
          "Dry bag for electronics",
          "Light rain jacket"
        ]
      },
      {
        "category": "Health & Sun Protection",
        "items": [
          "DEET insect repellent",
          "Sunscreen (SPF 50+)",
          "Sun hat & sunglasses"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Frederik P.",
        "country": "Denmark",
        "rating": 5,
        "text": "Such a tranquil contrast to Hanoi! Kayaking into Puong Cave was mind-blowing. The family at the homestay was incredibly gracious.",
        "date": "Jul 2026"
      },
      {
        "name": "Nathalie C.",
        "country": "Belgium",
        "rating": 5,
        "text": "Completely untouched by mass tourism. The lake is like glass and the food cooked by the Tay family was among the best we had in Vietnam.",
        "date": "Jun 2026"
      }
    ]
  },
  {
    "id": 8,
    "title": "Hanoi Old Quarter Heritage & Michelin Street Food Safari",
    "subtitle": "Immerse in 1,000 years of history & taste legendary street dishes across the 36 guild streets",
    "image": "/images/tours/hanoi-old-quarter.jpg",
    "gallery": [
      "/images/tours/hanoi-old-quarter.jpg",
      "/images/tours/hanoi-hoan-kiem-lake.jpg",
      "/images/tours/hanoi-train-street.jpg",
      "/images/food/pho-ha-noi.jpg",
      "/images/food/bun-cha.jpg",
      "/images/destinations/hanoi.jpg"
    ],
    "rating": 5.0,
    "reviews": 1042,
    "description": "A curated walking food and history adventure: taste 7 iconic Hanoi culinary specialties—including 12-hour simmered Pho, charcoal Bun Cha, and famous Egg Coffee—while uncovering hidden ancient alleys and Train Street.",
    "longDescription": "Hanoi, celebrating over a millennium of continuous history since King Ly Thai To founded Thang Long in 1010, is one of the undisputed street food capitals of the world. Its beating heart is the Old Quarter (\"36 Guild Streets\"), where each narrow lane was historically dedicated to a single artisan craft—from silver and silk to bronze and herbal medicine.\n\n**The Secret Alleys:** Beneath the French-colonial shutters and buzzing motorbikes lies a labyrinth of hidden century-old tube houses, ancient communal clan temples, and secretive culinary stalls passed down through four generations.\n\n**The Master Flavors:** Led by a passionate culinary historian, this walking safari goes far beyond the tourist bubble to taste Hanoi's most revered gastronomic treasures: steaming bowls of 12-hour simmered Phở Bò, charcoal-grilled Bún Chả with fresh herbs, delicate paper-thin Bánh Cuốn steamed on taut silk cloths, crispy sea crab spring rolls, and the city's legendary velvety Egg Coffee (Cà Phê Trứng) created in 1946.",
    "duration": "Half day (4 hours)",
    "groupSize": "8 max",
    "language": "English, French, Vietnamese",
    "difficulty": "Easy (Leisurely walking)",
    "price": 0,
    "region": "north",
    "experienceType": "Culinary & Heritage Walk",
    "bookingAdvance": "Cut off: 12 hours",
    "bestSeason": "Year-round (Autumn October–December is especially pleasant)",
    "startEndLocation": "Hoan Kiem Lake – Old Quarter 36 Streets – Dong Xuan – Train Street",
    "categories": [
      "Street Food",
      "Cultural Heritage",
      "Walking Tour",
      "Hidden Alleys"
    ],
    "highlights": [
      "Taste 7 distinct culinary specialties at family stalls recognized by local food historians",
      "Savor authentic charcoal-grilled Bun Cha and 12-hour slow-simmered Pho Bo",
      "Watch paper-thin Banh Cuon rice rolls steamed live on silk cloths at a 70-year-old shop",
      "Explore hidden narrow alleyways, century-old tube houses, and secret clan temples",
      "Sip world-famous frothy Egg Coffee (Ca Phe Trung) in a vintage shophouse overlooking Train Street",
      "Small intimate group ensuring personal interaction, cultural context, and customized food tastes"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "The 36 Guild Streets Culinary & Heritage Trail",
        "desc": "Meet by Hoan Kiem Lake, weave through hidden Old Quarter lanes tasting historic street food specialties, uncover secret temples, and conclude with egg coffee by Train Street.",
        "morning": "Morning option available on request (09:00 - 13:00).",
        "afternoon": "16:00 meet your culinary historian guide by the red The Huc Bridge at Hoan Kiem Lake. Begin with a brief history of the Old Quarter guild architecture. Stop 1: Family-run Banh Cuon eatery watching delicate rice batter steamed on silk cloths. Stop 2: Charcoal-grilled Bun Cha joint savoring smoky pork patties with fragrant herb baskets. Stop 3: Crispy Nem Cua Be (deep-fried sea crab spring rolls).",
        "evening": "Walk down a narrow historic alleyway to explore an ancient hidden communal temple. Stop 4: Traditional Phở Bò featuring clear, aromatic bone broth simmered for 12 hours. Stop 5: Green papaya salad with dried beef (Nom Bo Kho). Stop 6: Conclude at a vintage three-story cafe beside Hanoi Train Street to sip velvety Egg Coffee (Ca Phe Trung) or fresh coconut coffee as the twilight lights illuminate the rails.",
        "meals": "7 Full Food & Drink Tastings (equivalent to a generous feast)",
        "accommodation": "None (Walking tour concludes in Old Quarter)",
        "highlights": [
          "Banh Cuon live steaming",
          "Authentic Bun Cha",
          "Old Quarter hidden alley",
          "Hanoi Train Street Egg Coffee"
        ]
      }
    ],
    "included": [
      "All 7 generous food tastings, street snacks, and beverages (enough for a hearty dinner)",
      "World-famous Hanoi Egg Coffee (Ca Phe Trung) or fresh coconut coffee",
      "Expert local culinary historian and English-speaking storyteller guide",
      "Printed curated map of Hanoi's best local hidden eateries and food glossary",
      "Bottled water, wet wipes, and hand sanitizer throughout"
    ],
    "excluded": [
      "Additional alcoholic beverages outside included tastings",
      "Personal shopping purchases in the Old Quarter",
      "Gratuities for your culinary guide"
    ],
    "pleaseNote": [
      "Come hungry! We strongly advise skipping lunch or eating a very light meal before joining.",
      "Dietary requirements: Vegetarian, pescatarian, nut-free, and pork-free options are smoothly provided with advance notice.",
      "The tour involves approximately 2.5–3 km of leisurely flat walking with frequent seated food stops."
    ],
    "importantNotes": [
      {
        "category": "health",
        "title": "Hygiene & Food Safety",
        "detail": "All selected stalls are rigorously vetted for impeccable hygiene standards, fresh daily ingredients, and longstanding family reputations."
      },
      {
        "category": "fitness",
        "title": "Footwear",
        "detail": "Old Quarter sidewalks can be uneven with parked motorbikes. Comfortable flat walking shoes or sneakers are strongly recommended."
      }
    ],
    "whatToBring": "Comfortable flat walking shoes, healthy appetite, smartphone/camera for street portraits, and a light umbrella in case of a brief passing shower.",
    "whatToBringList": [
      "Comfortable flat walking sneakers or sandals",
      "An empty stomach and open culinary curiosity",
      "Camera or smartphone for vibrant night market photos",
      "Light umbrella or compact raincoat (especially in summer)",
      "Small VND cash for souvenirs or additional drinks"
    ],
    "whatToBringGroups": [
      {
        "category": "Footwear & Comfort",
        "items": [
          "Comfortable walking sneakers",
          "Breathable casual clothing",
          "Compact umbrella / raincoat"
        ]
      },
      {
        "category": "Personal & Camera",
        "items": [
          "Camera / smartphone",
          "Hand sanitizer",
          "Empty stomach!"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "2 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Jessica T.",
        "country": "United States",
        "rating": 5,
        "text": "Do this on your very first day in Hanoi! Our guide Tom was hilarious, deeply knowledgeable, and every single dish was sensational. The egg coffee at the end was perfection.",
        "date": "Sep 2026"
      },
      {
        "name": "Liam R.",
        "country": "Australia",
        "rating": 5,
        "text": "Best food tour I have taken anywhere in the world. We discovered tiny alleyways and family spots we never would have found on our own.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 9,
    "title": "Moc Chau Highland Plateau Flower & Tea Trail — 2 Days",
    "subtitle": "Breathe crisp alpine air amidst rolling green tea hills, plum valleys & cascading waterfalls",
    "image": "/images/tours/moc-chau-plateau.jpg",
    "gallery": [
      "/images/tours/moc-chau-plateau.jpg",
      "/images/tours/sapa-rice-terrace.jpg",
      "/images/tours/ba-be-lake.jpg",
      "/images/destinations/sapa.jpg"
    ],
    "rating": 4.8,
    "reviews": 182,
    "description": "Escape to the cool alpine plateau of Moc Chau: wander through heart-shaped emerald tea plantations, pick seasonal fruits in Na Ka plum valley, walk across glass bridges over Dai Yem falls, and experience Thai hill-tribe hospitality.",
    "longDescription": "Elevated 1,050 meters above sea level in Son La province, Moc Chau Plateau is celebrated as the \"Dalat of the North\", blessed with a temperate alpine microclimate, vast manicured emerald tea plantations, and orchards that burst into ethereal clouds of white plum and peach blossoms each winter.\n\n**Pastoral Serenity:** Home to the Thai, Hmong, and Muong ethnic communities, Moc Chau offers a tranquil pastoral escape from lowland heat. On this 2-day journey, wander through the famous heart-shaped tea plantation (Đồi Chè Trái Tim), hand-pluck tender young tea leaves with local harvesters, and sample organic Shan Tuyet and Oolong teas.\n\n**Canyons & Waterfalls:** Explore Na Ka Valley framed by dramatic karst cliffs, and witness Dai Yem Waterfall cascading down limestone terraces into deep emerald pools, with an optional stroll across the 5D glass suspension bridge hanging high above the forested canyon.",
    "duration": "2 days 1 night",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "north",
    "experienceType": "Highland Eco Tour",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "November to February (white plum blossoms & mustard flowers) or April to August (lush green tea)",
    "startEndLocation": "Hanoi – Thung Khe Pass – Moc Chau – Na Ka Valley – Dai Yem Falls – Hanoi",
    "categories": [
      "Highland Nature",
      "Tea Plantations",
      "Flower Seasons",
      "Waterfalls & Glass Bridge"
    ],
    "highlights": [
      "Wander through the iconic Heart-Shaped Tea Plantation and sample fresh high-mountain Oolong tea",
      "Visit Na Ka Valley, famed for white plum blossom seas in winter and juicy fruit harvests in summer",
      "Explore Dai Yem Waterfall tumbling down limestone steps in a lush jungle gorge",
      "Walk across the 5D glass suspension bridge high above the forest canyon",
      "Pause at Thung Khe (White Rock) Pass for panoramic mountain vistas and roasted corn",
      "Taste fresh highland dairy delicacies, free-range mountain chicken, and bamboo shoot dishes"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi to Thung Khe Pass, Heart Tea Plantation & Highland Bungalow",
        "desc": "Depart Hanoi across the limestone ranges. Stop at Thung Khe Pass for panoramic valley vistas. Arrive in Moc Chau for lunch, explore the Heart-shaped Tea Hill, and check into a boutique alpine bungalow.",
        "morning": "07:30 pickup from Hanoi in private transport. Wind up through Hoa Binh province. Pause at Thung Khe Pass, framed by white limestone cliffs overlooking Mai Chau valley. Savor hot roasted sweet corn and tea. Reach Moc Chau at 12:30 for lunch.",
        "afternoon": "Explore the famous Heart-shaped Tea Plantation (Doi Che Trai Tim). Walk along neat geometric rows of emerald tea bushes, photograph the rolling green landscape, and enjoy a tea-tasting ceremony at an organic tea workshop.",
        "evening": "Check into a boutique alpine garden bungalow. Dinner featuring highland specialty dishes: grilled stream fish, wild vegetables, and sticky rice. Relax by an outdoor campfire under the starry sky.",
        "meals": "Lunch & Dinner",
        "accommodation": "Boutique Alpine Garden Bungalow in Moc Chau",
        "highlights": [
          "Thung Khe White Rock Pass",
          "Heart-shaped tea hill",
          "Organic Oolong tea tasting"
        ]
      },
      {
        "day": 2,
        "title": "Na Ka Plum Valley, Dai Yem Waterfall & Return to Hanoi",
        "desc": "Morning walk in Na Ka plum orchard valley, explore the cascading tiers of Dai Yem Waterfall, cross the glass suspension bridge, and return to Hanoi.",
        "morning": "Breakfast amidst fresh mountain air. Visit Na Ka Valley, nestled in a dramatic karst basin. In winter/spring, the valley is blanketed in white plum blossoms; in summer, pick fresh red plums from the trees. Continue to Dai Yem Waterfall.",
        "afternoon": "Walk down to Dai Yem Waterfall roaring down five limestone steps. Walk across the thrilling 5D glass suspension bridge overlooking the ravine. Enjoy lunch at a highland dairy farm bistro before beginning the return drive.",
        "evening": "Arrive back in Hanoi Old Quarter around 19:30. Drop-off at your hotel.",
        "meals": "Breakfast & Lunch",
        "accommodation": "None (Tour concludes in Hanoi)",
        "highlights": [
          "Na Ka Plum Valley",
          "Dai Yem Waterfall",
          "Glass suspension bridge"
        ]
      }
    ],
    "included": [
      "Round-trip private air-conditioned transport between Hanoi and Moc Chau",
      "1 night boutique alpine bungalow accommodation with private en-suite bathroom",
      "All meals: 1 breakfast, 2 lunches, 1 dinner",
      "All entrance permits for tea plantations, Na Ka Valley, and Dai Yem Waterfall",
      "High-mountain tea tasting session at local organic plantation",
      "English-speaking professional guide throughout",
      "Bottled drinking water and vehicle tolls"
    ],
    "excluded": [
      "Dai Yem Glass Bridge admission ticket (optional on site)",
      "Beverages, beer, and personal expenses",
      "Tips for tour guide and driver"
    ],
    "pleaseNote": [
      "Moc Chau enjoys a cool highland climate; mornings and evenings are noticeably cooler than Hanoi (bring a warm layer).",
      "Plum blossom blooming dates depend on winter weather conditions (typically late December through February)."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Highland Climate",
        "detail": "Temperatures in winter can fall to 8–12°C. Even during summer, morning mist brings refreshing cool air. Layered clothing is recommended."
      },
      {
        "category": "fitness",
        "title": "Walking Activity",
        "detail": "Walking in tea plantations and Na Ka valley is mostly easy on earthen trails. Dai Yem waterfall has paved stone stairways."
      }
    ],
    "whatToBring": "Comfortable walking shoes, warm jacket or fleece for cool mornings, sunglasses, sunscreen, camera, and cash for fresh local plums, honey, and tea.",
    "whatToBringList": [
      "Comfortable walking shoes or sneakers",
      "Warm jacket or cardigan for cool morning/evening temperatures",
      "Sun hat and UV sunglasses (high UV at altitude)",
      "Camera or smartphone with wide-angle lens",
      "Small cash (VND) for fresh fruits, Shan Tuyet tea, and honey"
    ],
    "whatToBringGroups": [
      {
        "category": "Clothing & Warmth",
        "items": [
          "Warm fleece / windbreaker",
          "Comfortable walking shoes",
          "Breathable daytime clothes"
        ]
      },
      {
        "category": "Sun & Essentials",
        "items": [
          "Sun hat & sunglasses",
          "Camera / phone",
          "VND cash for farm products"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Thomas K.",
        "country": "Germany",
        "rating": 5,
        "text": "Such fresh alpine air and beautiful rolling green hills. The heart tea plantation was stunning and our bungalow was cozy and peaceful.",
        "date": "Jul 2026"
      },
      {
        "name": "Lan P.",
        "country": "Vietnam",
        "rating": 5,
        "text": "Moc Chau is serene and pristine. Great guide and very comfortable vehicle.",
        "date": "May 2026"
      }
    ]
  },
  {
    "id": 10,
    "title": "Hoi An Ancient Town & My Son Sanctuary UNESCO Heritage",
    "subtitle": "Journey from ancient Cham Hindu red-brick jungle shrines to lantern-lit maritime trading streets",
    "image": "/images/tours/hoi-an-ancient-town.jpg",
    "gallery": [
      "/images/tours/hoi-an-ancient-town.jpg",
      "/images/tours/hoi-an-lantern-street.jpg",
      "/images/tours/my-son-sanctuary.jpg",
      "/images/tours/hoi-an-basket-boat.jpg",
      "/images/destinations/hoi-an.jpg"
    ],
    "rating": 4.9,
    "reviews": 752,
    "description": "Experience two UNESCO World Heritage Sites in one day: the 8th-century mystical red-brick Hindu temples of My Son Sanctuary nestled in a jungle valley, followed by an atmospheric walking tour and twilight lantern boat ride in Hoi An Ancient Town.",
    "longDescription": "This full-day cultural odyssey bridges two of Vietnam's most prestigious UNESCO World Heritage Sites, illuminating centuries of maritime trade and spiritual devotion. Begin deep in the lush jungle valley of My Son, the spiritual capital of the ancient Champa Kingdom from the 4th to the 14th centuries. Marvel at the enigmatic red-brick towers dedicated to Lord Shiva, constructed with sophisticated mortarless brickwork that has resisted tropical weather for over a millennium.\n\n**Hoi An's Living Tapestry:** In the afternoon, step into Hoi An Ancient Town—Southeast Asia's best-preserved 16th-to-19th-century international trading port. Stroll down yellow-washed alleys past Japanese wooden covered bridges, Chinese guild assembly halls adorned with porcelain dragons, and French colonial arcades.\n\n**The Lantern Twilight:** As dusk falls, watch the ancient town transform into a fairy-tale wonderland as thousands of silk lanterns illuminate the streets and wooden boats float candlelit paper wishes down the tranquil Thu Bon River.",
    "duration": "1 full day (9 hours)",
    "groupSize": "12 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "central",
    "experienceType": "UNESCO Heritage Excursion",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "February to August (dry season, sunny and warm)",
    "startEndLocation": "Hoi An / Da Nang – My Son Sanctuary – Hoi An Ancient Town – Thu Bon River",
    "categories": [
      "UNESCO Heritage",
      "Ancient Ruins",
      "Cultural History",
      "Lantern Boat"
    ],
    "highlights": [
      "Explore the 8th-century Hindu red-brick tower temples of My Son Sanctuary in a jungle amphitheater",
      "Witness a live Cham Apsara cultural dance performance accompanied by traditional instruments",
      "Walking tour of Hoi An: Japanese Covered Bridge (Chua Cau) and 300-year-old Tan Ky Merchant House",
      "Visit the Phuc Kien (Fujian) Chinese Assembly Hall with its giant spiral incense coils",
      "Twilight wooden boat cruise on the Thu Bon River, releasing a traditional floating paper lantern",
      "Taste Hoi An culinary icons: handmade Cao Lau noodles and white rose shrimp dumplings"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "My Son Sanctuary Jungle Temples to Hoi An Twilight Lanterns",
        "desc": "Morning exploration of My Son ancient Cham temples, traditional Apsara dance performance, local lunch, afternoon walking tour of Hoi An ancient town, and sunset lantern river cruise.",
        "morning": "07:45 pickup from your hotel in Hoi An or Da Nang. Drive through rural countryside to My Son Sanctuary. Walk along shaded jungle paths exploring Tower Groups B, C, D, and G. Admire the sandstone reliefs of Hindu deities and witness a live Cham Apsara dance show.",
        "afternoon": "Return to Hoi An for a traditional lunch featuring Cao Lau noodles, white rose dumplings, and crispy wontons. Begin a walking tour of the Ancient Town: Japanese Covered Bridge, Tan Ky Old House, Fujian Assembly Hall, and an artisan silk weaving workshop.",
        "evening": "At 17:30, board a wooden sampan on the Thu Bon River as twilight falls. Release an eco-friendly floating lantern with a wish. Free time to explore the vibrant Night Market and artisan boutiques before return transfer.",
        "meals": "Traditional Hoi An Specialty Lunch",
        "accommodation": "None (Tour concludes in Hoi An / Da Nang)",
        "highlights": [
          "My Son Sanctuary",
          "Cham dance show",
          "Japanese Bridge",
          "Hoi An lantern boat release"
        ]
      }
    ],
    "included": [
      "Round-trip air-conditioned transport from Hoi An or Da Nang hotels",
      "Electric buggy shuttle and full entrance admissions to My Son Sanctuary",
      "Official Hoi An Ancient Town 5-site heritage sightseeing ticket",
      "Traditional Cham cultural music and Apsara dance performance",
      "Authentic Hoi An specialty lunch at a heritage courtyard restaurant",
      "Private wooden boat ride on Thu Bon River with floating wish lanterns",
      "English-speaking professional cultural heritage guide",
      "Bottled drinking water and cold towels throughout"
    ],
    "excluded": [
      "Drinks during lunch and personal purchases",
      "Tips for tour guide and driver",
      "Personal travel insurance"
    ],
    "pleaseNote": [
      "Modest clothing covering shoulders and knees is strictly required inside the sacred Cham temples of My Son.",
      "My Son valley can become warm around midday; morning scheduling ensures the best lighting and comfortable temperatures.",
      "The walking tour in Hoi An covers approximately 2.5 km of flat cobblestone and pedestrian-only streets."
    ],
    "importantNotes": [
      {
        "category": "etiquette",
        "title": "Sacred Temple Dress Code",
        "detail": "My Son Sanctuary is an active sacred historical site. Sleeveless shirts, crop tops, and short shorts are strictly prohibited within temple enclosures."
      },
      {
        "category": "weather",
        "title": "Sun & Hydration",
        "detail": "The valley surrounding My Son traps heat in midsummer. A sun hat, UV sunglasses, and sunscreen are strongly advised."
      }
    ],
    "whatToBring": "Modest clothing covering shoulders and knees, comfortable walking shoes/sandals, sun hat, sunglasses, sunscreen, camera, and cash for tailor shops or night market crafts.",
    "whatToBringList": [
      "Modest lightweight clothing covering shoulders and knees",
      "Comfortable walking shoes or sandals suitable for cobblestones",
      "Wide-brim sun hat, UV sunglasses, and sunscreen",
      "Camera or smartphone with plenty of storage for evening lantern photos",
      "Small cash (VND) for souvenirs and artisan street snacks"
    ],
    "whatToBringGroups": [
      {
        "category": "Modest Apparel",
        "items": [
          "Shirt covering shoulders",
          "Pants/skirt covering knees",
          "Comfortable walking shoes"
        ]
      },
      {
        "category": "Sun & Essentials",
        "items": [
          "Sun hat & sunglasses",
          "Sunscreen (SPF 50+)",
          "Camera / phone",
          "VND cash"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "3 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Charlotte D.",
        "country": "France",
        "rating": 5,
        "text": "My Son was mystical in the morning mist, and Hoi An in the evening with all the lanterns lit was pure magic. Our guide explained the Cham history so well.",
        "date": "Sep 2026"
      },
      {
        "name": "Robert M.",
        "country": "United States",
        "rating": 5,
        "text": "Superb tour! The food was delicious and releasing the lantern on the river was a moment my wife and I will never forget.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 11,
    "title": "Hue Imperial City & Perfume River Royal Heritage",
    "subtitle": "Discover the 143-year Nguyen Dynasty: royal dragon boats, imperial palaces & mosaic tombs",
    "image": "/images/tours/hue-imperial-city.jpg",
    "gallery": [
      "/images/tours/hue-imperial-city.jpg",
      "/images/tours/thien-mu-pagoda.jpg",
      "/images/tours/khai-dinh-tomb.jpg",
      "/images/tours/hai-van-pass.jpg"
    ],
    "rating": 4.9,
    "reviews": 465,
    "description": "Step into the imperial realm of the Nguyen Dynasty: cruise the Perfume River on a royal dragon boat to Thien Mu Pagoda, explore the Forbidden Purple City, and marvel at the dazzling mosaic tomb of Emperor Khai Dinh.",
    "longDescription": "Hue was the political, cultural, and spiritual capital of unified Vietnam from 1802 to 1945 under the 13 emperors of the Nguyen Dynasty. Nestled along the romantic Song Huong (Perfume River), named after the sweet aroma of blossoming orchard flowers that once drifted on its currents, Hue is a living museum of imperial grandeur and Buddhist serenity.\n\n**The Dragon Boat Pilgrimage:** Board a traditional royal dragon boat to Thien Mu Pagoda—Hue's iconic 7-storey octagonal tower overlooking the water, holding over 400 years of Buddhist lore.\n\n**Imperial Magnificence:** Pass through the imposing stone bastions of the Imperial Citadel into the Forbidden Purple City, where emperors once conducted state ceremonies. Conclude at the extraordinary Mausoleum of Emperor Khai Dinh, a striking Gothic-European and Asian fusion of concrete and dazzling porcelain and glass mosaic murals.",
    "duration": "1 full day (8 hours)",
    "groupSize": "12 max",
    "language": "English, French, Vietnamese",
    "difficulty": "Easy to Moderate (Walking in Citadel)",
    "price": 0,
    "region": "central",
    "experienceType": "Imperial Heritage Tour",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "January to April (cool and pleasant) or May to August",
    "startEndLocation": "Hue – Perfume River – Thien Mu Pagoda – Imperial Citadel – Khai Dinh Tomb – Hue",
    "categories": [
      "Imperial History",
      "UNESCO Citadel",
      "Dragon Boat Cruise",
      "Royal Architecture"
    ],
    "highlights": [
      "Traditional royal dragon boat cruise along the romantic Perfume River to Thien Mu Pagoda",
      "Explore the UNESCO Imperial Citadel, Noon Gate (Ngo Mon), and Forbidden Purple City",
      "Marvel at the porcelain and ceramic mosaic walls inside Khai Dinh's mountaintop tomb",
      "Visit the serene garden mausoleum of poet-Emperor Tu Duc set amidst pine trees and lotus lakes",
      "Photograph Thuy Xuan colorful incense-making village and try hand-rolling incense sticks",
      "Savor an authentic Hue royal lunch featuring delicate steamed rice cakes (Banh Beo, Banh Nam)"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Perfume River Dragon Boat, Imperial Citadel & Royal Mausoleums",
        "desc": "Morning dragon boat cruise to Thien Mu Pagoda, guided tour of the Imperial Citadel, royal lunch, afternoon visits to Emperor Khai Dinh and Tu Duc mausoleums, and Thuy Xuan incense village.",
        "morning": "08:00 board a dragon boat at Toa Kham Pier for a scenic cruise up the Perfume River. Disembark at Thien Mu Pagoda. Transfer by private vehicle to the Imperial Citadel (Dai Noi). Walk through the Noon Gate (Ngo Mon), Thai Hoa Palace, ancestral temples, and royal gardens.",
        "afternoon": "Enjoy a Hue royal lunch featuring refined dishes such as Banh Beo, Banh Nam, and grilled pork skewers. In the afternoon, visit the Mausoleum of Emperor Tu Duc, nestled in tranquil pine woods. Then visit the spectacular mountaintop tomb of Emperor Khai Dinh with its intricate porcelain mosaic halls.",
        "evening": "Stop at Thuy Xuan incense village for photos with colorful incense bouquets. Return to your Hue hotel by 17:00.",
        "meals": "Hue Imperial Heritage Lunch",
        "accommodation": "None (Tour concludes in Hue)",
        "highlights": [
          "Perfume River dragon boat",
          "Imperial Citadel (Dai Noi)",
          "Khai Dinh mosaic tomb",
          "Thuy Xuan incense village"
        ]
      }
    ],
    "included": [
      "Private air-conditioned transport throughout Hue",
      "Scenic royal dragon boat cruise along the Perfume River",
      "Full entrance tickets to the Imperial Citadel, Khai Dinh Tomb, and Tu Duc Tomb",
      "Multi-course Hue royal specialty lunch at a traditional garden restaurant",
      "Professional English-speaking imperial historian guide",
      "Cold bottled water and refreshing towels throughout the day"
    ],
    "excluded": [
      "Personal drinks during lunch",
      "Tips for tour guide, driver, and boat crew",
      "Personal travel insurance"
    ],
    "pleaseNote": [
      "Modest clothing covering shoulders and knees is strictly enforced inside ancestral temples and royal tombs.",
      "The Imperial Citadel is expansive (over 500 hectares); moderate walking is involved. Electric buggies can be hired on site if desired."
    ],
    "importantNotes": [
      {
        "category": "etiquette",
        "title": "Royal Temple Protocol",
        "detail": "Shoulders and knees must be covered inside the sacred ancestral worship halls of the Nguyen Dynasty. Hats and sunglasses must be removed when entering shrines."
      },
      {
        "category": "weather",
        "title": "Summer Heat Advice",
        "detail": "Hue can be intensely hot in summer (June-August). An umbrella or wide sun hat provides welcome shade across the Citadel's open stone courtyards."
      }
    ],
    "whatToBring": "Modest clothing (covering shoulders and knees), comfortable walking shoes, sun umbrella or wide-brim hat, sunglasses, sunscreen, and camera.",
    "whatToBringList": [
      "Modest clothing with covered shoulders and knees",
      "Comfortable walking shoes suitable for large courtyard grounds",
      "Sun umbrella or wide-brim hat (limited shade in citadel plazas)",
      "High-SPF sunscreen and sunglasses",
      "Camera or smartphone for stunning mosaic and palace photos"
    ],
    "whatToBringGroups": [
      {
        "category": "Attire",
        "items": [
          "Modest temple-appropriate outfit",
          "Walking sneakers / comfortable shoes"
        ]
      },
      {
        "category": "Sun Protection",
        "items": [
          "Sun umbrella",
          "Sun hat & UV sunglasses",
          "Sunscreen (SPF 50+)"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "3 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Jean-Pierre L.",
        "country": "France",
        "rating": 5,
        "text": "Khai Dinh's tomb is an absolute work of art! The porcelain mosaics are unbelievable in person. The dragon boat ride was peaceful and poetic.",
        "date": "Aug 2026"
      },
      {
        "name": "Amanda G.",
        "country": "Australia",
        "rating": 5,
        "text": "Our guide gave us such fascinating stories about the emperors and royal concubines. Excellent food and smooth pacing.",
        "date": "Jul 2026"
      }
    ]
  },
  {
    "id": 12,
    "title": "Da Nang — Golden Bridge & Ba Na Hills Mountain Resort",
    "subtitle": "Glide across cloud-capped mountains on the world's longest cable car to the iconic Golden Bridge",
    "image": "/images/tours/ba-na-hills-golden-bridge.jpg",
    "gallery": [
      "/images/tours/ba-na-hills-golden-bridge.jpg",
      "/images/tours/hai-van-pass.jpg",
      "/images/destinations/da-nang.jpg",
      "/images/tours/hoi-an-lantern-street.jpg"
    ],
    "rating": 4.8,
    "reviews": 890,
    "description": "Ascend 1,414 meters into the misty Truong Son mountains via Guinness-record cable cars to walk across the world-famous Golden Bridge held by giant stone hands, explore French gardens, and visit Linh Ung Pagoda.",
    "longDescription": "Suspended 1,414 meters above sea level amidst the mist of the Truong Son mountains, Ba Na Hills was originally established as a French colonial hill station in 1919 to escape tropical summer heat. Today, it is home to one of the world's most viral architectural marvels: the Golden Bridge (Cầu Vàng).\n\n**The Giant Stone Hands:** Supported by two colossal moss-weathered stone hands emerging directly from the mountain cliffside, the 150-meter curved pedestrian walkway appears like a shimmering golden silk ribbon held aloft amidst the clouds.\n\n**World-Class Mountain Cable Car:** Reached by one of the longest and highest non-stop single-track cable car systems in the world, Ba Na Hills blends dramatic alpine panoramas, European fantasy architecture, manicured French gardens, the historic Debay Wine Cellar built into mountain rock in 1923, and the serene mountaintop Linh Ung Pagoda.",
    "duration": "1 full day (8 hours)",
    "groupSize": "12 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy (Paved resort pathways & cable cars)",
    "price": 0,
    "region": "central",
    "experienceType": "Mountain Sightseeing Excursion",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "March to September (clear skies for panoramic mountain views)",
    "startEndLocation": "Da Nang / Hoi An – Ba Na Hills Foot Station – Golden Bridge – French Village – Return",
    "categories": [
      "Mountain Resort",
      "Iconic Landmarks",
      "Cable Car Experience",
      "Family Friendly"
    ],
    "highlights": [
      "Walk across the world-famous Golden Bridge held aloft by giant weathered stone hands",
      "Ride the Guinness-record-holding cable car soaring over virgin tropical rainforest and waterfalls",
      "Explore Le Jardin D'Amour manicured French gardens and the 1923 Debay Wine Cellar",
      "Visit the giant 27-meter white Buddha statue at Linh Ung Pagoda overlooking the coastal sea",
      "Stroll through the mountaintop French Village with its Gothic cathedral and street performers",
      "Lavish international buffet lunch featuring over 100 Vietnamese and Asian delicacies"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Da Nang to Ba Na Hills — Cable Car, Golden Bridge & French Village",
        "desc": "Morning departure from Da Nang or Hoi An, cable car ascent, walk on the Golden Bridge before peak crowds, explore gardens and wine cellar, buffet lunch in French Village, and afternoon descent.",
        "morning": "07:30 pickup from your hotel in Da Nang or Hoi An. Arrive at Ba Na Hills foot station. Board the modern cable car soaring above virgin rainforest. Step directly onto the Golden Bridge for photos while morning mist floats through the valley. Explore Le Jardin D'Amour flower gardens and Linh Ung Pagoda.",
        "afternoon": "Take the short secondary cable car up to the French Village. Enjoy an expansive international buffet lunch with over 100 choices. Free time to explore the Gothic Saint Denis church, watch street carnival performers, or ride alpine slides at Fantasy Park.",
        "evening": "15:30 board the cable car back down to the foot of the mountain. Transfer back to Da Nang or Hoi An, arriving around 17:30.",
        "meals": "International Buffet Lunch at Ba Na Hills",
        "accommodation": "None (Day trip concludes in Da Nang / Hoi An)",
        "highlights": [
          "Golden Bridge walk",
          "World-record cable car",
          "Debay wine cellar",
          "French Village buffet"
        ]
      }
    ],
    "included": [
      "Round-trip air-conditioned hotel transfers from Da Nang or Hoi An",
      "All-inclusive Ba Na Hills cable car combo ticket (all lines and funiculars)",
      "Admission to Golden Bridge, Le Jardin D'Amour gardens, and Linh Ung Pagoda",
      "Lavish international buffet lunch at the mountaintop French Village restaurant",
      "Professional English-speaking guide throughout",
      "Bottled drinking water"
    ],
    "excluded": [
      "Wax Museum admission & coin-operated arcade games in Fantasy Park",
      "Personal drinks during lunch",
      "Tips for tour guide and driver"
    ],
    "pleaseNote": [
      "The mountain summit is elevated at 1,487m and is typically 6-8°C cooler than the coastline; bring a light jacket or windbreaker.",
      "Ba Na Hills can be busy during weekends and peak holidays; our early 07:30 start ensures you reach the Golden Bridge ahead of the largest tour bus arrivals."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Alpine Weather & Temperature",
        "detail": "Weather on the mountain changes rapidly. Sudden mist or light showers can roll in and clear within minutes. A light jacket and compact umbrella are recommended."
      },
      {
        "category": "fitness",
        "title": "Cable Car Comfort",
        "detail": "The cable car cabins are modern, fully enclosed, and European-certified. Travelers with vertigo can sit facing forward for a gentle 20-minute ride."
      }
    ],
    "whatToBring": "Light jacket or sweater (cooler at altitude), comfortable walking shoes, sunscreen, sunglasses, smartphone/camera with full battery, and light umbrella.",
    "whatToBringList": [
      "Light windbreaker or sweater (6-8°C cooler at summit)",
      "Comfortable walking sneakers (resort has paved stairs and plazas)",
      "Sunscreen and sunglasses (high UV index at high elevation)",
      "Camera or smartphone with fully charged battery",
      "Light umbrella in case of mountain mist"
    ],
    "whatToBringGroups": [
      {
        "category": "Apparel",
        "items": [
          "Light jacket / cardigan",
          "Comfortable walking shoes",
          "Sun hat"
        ]
      },
      {
        "category": "Tech & Sun",
        "items": [
          "Fully charged phone / camera",
          "Power bank",
          "UV sunglasses & sunscreen"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "2 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Daniel K.",
        "country": "Germany",
        "rating": 5,
        "text": "The Golden Bridge looks even more impressive in real life than in photos. The cable car ride through the clouds was breathtaking.",
        "date": "Sep 2026"
      },
      {
        "name": "Siti N.",
        "country": "Malaysia",
        "rating": 5,
        "text": "Great day out! The early start was totally worth it because we had the bridge almost to ourselves before the crowds came.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 13,
    "title": "Phong Nha Cave Explorer — Paradise Cave & Dark Cave Adventure — 2 Days",
    "subtitle": "Immerse in the world's greatest cave kingdom: subterranean cathedrals & mud bath adventures",
    "image": "/images/tours/phong-nha-cave.jpg",
    "gallery": [
      "/images/tours/phong-nha-cave.jpg",
      "/images/tours/phong-nha-paradise-cave.jpg",
      "/images/tours/hai-van-pass.jpg",
      "/images/tours/sung-sot-cave.jpg"
    ],
    "rating": 4.9,
    "reviews": 341,
    "description": "Explore the oldest karst mountain kingdom in Asia: marvel at the colossal stalactite cathedrals of Paradise Cave, zipline across the jade Chay River into Dark Cave, and float in a natural subterranean mud bath.",
    "longDescription": "Phong Nha - Ke Bang National Park is a UNESCO World Heritage gem containing the oldest karst mountain system in Asia, formed over 400 million years ago. Beneath its dense primary jungle lies the greatest subterranean kingdom on earth, featuring hundreds of colossal river caves.\n\n**The Underground Cathedral:** On this 2-day expedition, explore Paradise Cave (Thiên Đường)—an underground limestone palace extending 31 kilometers into the mountain. Walk along 1 kilometer of elevated wooden boardwalk beneath soaring 60-meter ceilings adorned with colossal stalactites resembling frozen waterfalls and ancient pagodas.\n\n**Pure Adventure Mode:** Shift gears at Dark Cave (Hang Tối): strap into a 400-meter zipline soaring across the jade-green Chay River, swim into unlit cavern passages wearing headlamps, trek through a natural underground mineral clay chamber where you float effortlessly in buoyant liquid mud, and paddle kayaks along the emerald river.",
    "duration": "2 days 1 night",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Moderate (Ziplining & swimming)",
    "price": 0,
    "region": "central",
    "experienceType": "Speleology & Active Adventure",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "March to August (dry season, ideal for cave exploration and water sports)",
    "startEndLocation": "Dong Hoi / Phong Nha – Paradise Cave – Dark Cave – Phong Nha Cave – Return",
    "categories": [
      "Cave Exploration",
      "Active Adventure",
      "UNESCO Biosphere",
      "Zipline & Kayaking"
    ],
    "highlights": [
      "Walk inside Paradise Cave (Thien Duong), an awe-inspiring subterranean limestone cathedral",
      "400-meter zipline across the turquoise Chay River directly into the mouth of Dark Cave",
      "Swim into the unlit depths of Dark Cave with headlamps and float in natural buoyant mud baths",
      "Board a traditional wooden dragon boat cruising into the underground river of Phong Nha Cave",
      "Kayak along the crystal-clear Chay River surrounded by towering karst mountain walls",
      "Taste local jungle cuisine: charcoal-roasted mountain chicken with wild pepper and sticky rice"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Paradise Cave Grand Cathedral & Dark Cave Mud Bath Adventure",
        "desc": "Pickup from Dong Hoi or Phong Nha. Explore Paradise Cave's colossal stalactite halls, enjoy a jungle BBQ lunch, zipline into Dark Cave, float in underground mud baths, and kayak on Chay River.",
        "morning": "08:30 pickup. Drive along the historic Ho Chi Minh Trail through national park jungle canopy. Board an eco-buggy, then ascend the shaded forest trail to Paradise Cave. Walk along the 1 km elevated wooden walkway marveling at towering stalagmites lit with ambient lighting.",
        "afternoon": "Enjoy a riverside barbecue lunch of roasted chicken with wild salt and sticky rice. At 13:30, gear up at Dark Cave: zipline 400m across the Chay River, swim into the cave entrance wearing helmets and headlamps, and explore the deep mineral clay mud chambers. Float weightlessly in the buoyant mud.",
        "evening": "Wash off in the subterranean lake, kayak on the Chay River, and transfer to your riverside boutique eco-bungalow in Phong Nha village. Dinner and relaxation by the pool.",
        "meals": "Jungle BBQ Lunch & Dinner",
        "accommodation": "Riverside Boutique Eco-Bungalow in Phong Nha",
        "highlights": [
          "Paradise Cave",
          "Dark Cave zipline",
          "Natural underground mud bath",
          "Chay River kayaking"
        ]
      },
      {
        "day": 2,
        "title": "Phong Nha Water Cave River Cruise & Return",
        "desc": "Morning wooden boat cruise up the Son River into Phong Nha Cave, explore fairy chambers, enjoy lunch, and transfer to Dong Hoi airport/station.",
        "morning": "Breakfast overlooking the misty limestone peaks. Board a traditional wooden boat at Phong Nha tourism pier. Cruise 30 minutes up the emerald Son River past rural riverside villages. Enter the mouth of Phong Nha Cave; the boat engine is cut and rowed quietly through the illuminated water cavern.",
        "afternoon": "Walk through the dry chambers of Bi Ky and Tien Cave, admiring 400-million-year-old rock formations and ancient Cham inscriptions. Return to town for lunch before transfer to Dong Hoi Airport or train station.",
        "evening": "Tour concludes with drop-off at Dong Hoi by 16:30.",
        "meals": "Breakfast & Lunch",
        "accommodation": "None (Tour concludes in Dong Hoi / Phong Nha)",
        "highlights": [
          "Son River boat cruise",
          "Phong Nha water cave",
          "Ancient Cham inscriptions"
        ]
      }
    ],
    "included": [
      "Round-trip air-conditioned transfers from Dong Hoi Airport/station or Phong Nha hotels",
      "1 night boutique riverside eco-bungalow with swimming pool and mountain views",
      "All meals: 1 breakfast, 2 lunches, 1 dinner",
      "All-inclusive Dark Cave adventure package: 400m zipline, headlamp helmet, mud bath access, kayak",
      "Entrance tickets and eco-buggy transfers for Paradise Cave and Phong Nha Cave",
      "Private wooden boat for the Son River and Phong Nha Cave cruise",
      "English-speaking adventure tour guide and safety instructors throughout"
    ],
    "excluded": [
      "Drinks, beer, and personal expenses",
      "Personal adventure travel insurance",
      "Tips for tour guide, boatmen, and drivers"
    ],
    "pleaseNote": [
      "Swimwear is strictly mandatory for Dark Cave (bikinis or swim trunks only; national park regulations prohibit shorts with bulky zippers/buttons to preserve mud purity).",
      "Free secure lockers are provided at Dark Cave for all personal items, phones, and cameras.",
      "Moderate physical fitness is required; travelers must be comfortable in water (life vests provided and mandatory)."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Swimming & Water Safety",
        "detail": "Dark Cave involves swimming through cool freshwater into the cave. High-buoyancy life jackets and helmets with headlamps are provided and strictly mandatory."
      },
      {
        "category": "general",
        "title": "Dark Cave Dress Code",
        "detail": "National park rules require swimwear (bikinis or swim shorts). Cotton shirts, dresses, or pants are not permitted in the mud bath to prevent contamination."
      }
    ],
    "whatToBring": "Swimwear (dark color recommended for mud), dark towel, waterproof phone pouch, change of dry clothes, flip-flops or water shoes, sunscreen, insect repellent, and camera.",
    "whatToBringList": [
      "Swimwear (dark color recommended for mud bathing)",
      "Dark microfibre beach towel",
      "Change of dry clothes and underwear",
      "Flip-flops or water shoes",
      "Waterproof phone pouch with lanyard",
      "Sunscreen, insect repellent, and dry bag"
    ],
    "whatToBringGroups": [
      {
        "category": "Water & Mud Gear",
        "items": [
          "Swimwear (bikini / swim trunks)",
          "Dark towel",
          "Waterproof phone case",
          "Water shoes / flip-flops"
        ]
      },
      {
        "category": "Clothing & Essentials",
        "items": [
          "Change of dry clothes",
          "Insect repellent",
          "Sunscreen",
          "Plastic bag for wet gear"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Simon T.",
        "country": "Australia",
        "rating": 5,
        "text": "Paradise Cave is monumental—pictures cannot do it justice. The mud bath in Dark Cave was hilarious and so much fun. A must-do in Vietnam!",
        "date": "Sep 2026"
      },
      {
        "name": "Lisa M.",
        "country": "Netherlands",
        "rating": 5,
        "text": "Great mix of breathtaking nature and adventure. The guides were extremely safety-conscious and friendly.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 14,
    "title": "Hoi An Eco Cooking Class & Bay Mau Coconut Basket Boat Experience",
    "subtitle": "Spin round bamboo basket boats in coconut canals & cook authentic Central Vietnamese feasts",
    "image": "/images/tours/hoi-an-basket-boat.jpg",
    "gallery": [
      "/images/tours/hoi-an-basket-boat.jpg",
      "/images/tours/hoi-an-ancient-town.jpg",
      "/images/tours/hoi-an-lantern-street.jpg",
      "/images/food/goi-cuon.jpg"
    ],
    "rating": 4.9,
    "reviews": 612,
    "description": "Navigate the lush nipa palm waterways of Bay Mau Coconut Forest in a traditional round bamboo basket boat, learn circular paddling and crab fishing, followed by a hands-on organic cooking class preparing 4 classic Vietnamese dishes.",
    "longDescription": "Experience the authentic agrarian and maritime roots of Central Vietnam on this vibrant half-day cultural and culinary masterclass. Begin at Hoi An's bustling morning market, interacting with friendly local vendors to select fragrant herbs, lemongrass, and fresh seafood.\n\n**The Spinning Basket Boats:** Travel downriver to the Bay Mau Water Coconut Forest in Cam Thanh, a historic revolutionary guerrilla base. Board a traditional round bamboo basket boat (Thuyền Thúng) steered by local fishers, learning the ancient art of paddling the circular craft, watching exhilarating boat-spinning performances, and trying your hand at purple crab fishing among the nipa palms.\n\n**Master the Kitchen:** Conclude at an open-air riverside garden kitchen to prepare four classic Central Vietnamese dishes from scratch under the guidance of an expert chef: crispy Banh Xeo sizzling pancakes, fresh Goi Cuon spring rolls with peanut dipping sauce, green papaya salad with shrimp, and caramelized claypot fish.",
    "duration": "Half day (5 hours)",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy (Fun for all ages)",
    "price": 0,
    "region": "central",
    "experienceType": "Culinary & River Experience",
    "bookingAdvance": "Cut off: 12 hours",
    "bestSeason": "Year-round",
    "startEndLocation": "Hoi An Hotel – Central Market – Cam Thanh Coconut Forest – Cooking Pavilion – Return",
    "categories": [
      "Cooking Class",
      "Basket Boat",
      "Local Life",
      "Family Friendly"
    ],
    "highlights": [
      "Guided sensory walk through Hoi An's morning market to select fresh herbs and spices",
      "Scenic wooden riverboat cruise along the Thu Bon River to Cam Thanh water coconut village",
      "Ride traditional round bamboo basket boats (Thuyen Thung) through lush nipa palm canals",
      "Catch small purple crabs with bamboo rods and watch exhilarating basket boat spinning stunts",
      "Hands-on cooking class preparing 4 signature dishes in an open-air organic garden kitchen",
      "Relaxing herbal foot bath infused with lemongrass and mint before cooking"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Market Tour, Coconut Forest Basket Boat & Hands-On Cooking Feast",
        "desc": "Morning market ingredient shopping, Thu Bon River boat cruise, bamboo basket boat navigation through water coconut canals, herbal foot massage, and interactive 4-dish cooking class lunch.",
        "morning": "08:30 pickup from your Hoi An hotel. Meet your chef for a guided stroll through Hoi An's central market, learning how to identify key Vietnamese aromatics: fish sauce, star anise, lemongrass, and fresh herbs. Board a wooden riverboat for a 35-minute cruise down the Thu Bon River.",
        "afternoon": "Transfer into round bamboo basket boats in Cam Thanh. Paddle through peaceful water coconut canals, catch purple crabs, and watch energetic boat-spinning performances. Arrive at the riverside cooking pavilion. Enjoy a soothing herbal foot bath before cooking: Crispy Banh Xeo, Fresh Spring Rolls, Green Papaya Salad, and Claypot Fish. Savor your creations for lunch.",
        "evening": "Receive a printed recipe booklet to take home. Transfer back to your hotel around 13:30.",
        "meals": "Four-Course Self-Prepared Culinary Lunch with Fresh Fruit",
        "accommodation": "None (Half-day experience concludes in Hoi An)",
        "highlights": [
          "Hoi An market walk",
          "Basket boat navigation",
          "Boat spinning stunts",
          "4-course cooking masterclass"
        ]
      }
    ],
    "included": [
      "Round-trip air-conditioned hotel transfers in Hoi An area",
      "Guided local market tour with interactive food demonstrations",
      "Scenic wooden boat cruise along the Thu Bon River",
      "Bamboo basket boat ride with local fisher guides and safety vests",
      "Herbal foot massage with warm lemongrass and mint infusion",
      "Hands-on cooking class with individual cooking stations and chef guidance",
      "Generous 4-course lunch of the dishes you prepared, plus steamed rice and dessert",
      "Printed recipe booklet to recreate dishes at home"
    ],
    "excluded": [
      "Beverages outside complimentary welcome tea and water",
      "Tips for cooking chef and basket boat rowers",
      "Personal purchases"
    ],
    "pleaseNote": [
      "Suitable for all ages from young children to seniors.",
      "Dietary flexibility: Vegetarian, vegan, gluten-free, and nut-allergy menus are seamlessly accommodated with advance notice.",
      "Basket boat spinning is purely optional for entertainment; calm gentle paddling is the default."
    ],
    "importantNotes": [
      {
        "category": "general",
        "title": "Family Friendly",
        "detail": "Kids love the basket boats and crab fishing. Cooking stations are equipped with child-safe utensils and induction stoves."
      },
      {
        "category": "health",
        "title": "Dietary Customization",
        "detail": "Vegetarians and vegans can cook with organic tofu, wild mushrooms, and soy-based dipping sauces instead of fish sauce."
      }
    ],
    "whatToBring": "Comfortable casual clothes, sun hat, sunglasses, camera/phone for action photos on the basket boats, and a healthy appetite!",
    "whatToBringList": [
      "Casual, comfortable clothing",
      "Sun hat and sunglasses",
      "Camera or smartphone for fun basket boat videos",
      "Sunscreen and insect repellent",
      "A big appetite!"
    ],
    "whatToBringGroups": [
      {
        "category": "Essentials",
        "items": [
          "Casual breathable clothes",
          "Sun hat & sunglasses",
          "Camera / phone",
          "Empty stomach!"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "2 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Hannah P.",
        "country": "United Kingdom",
        "rating": 5,
        "text": "The highlight of our stay in Hoi An! The basket boat spinning made us laugh until our stomachs hurt, and the food we cooked was genuinely restaurant quality.",
        "date": "Aug 2026"
      },
      {
        "name": "Carlos M.",
        "country": "Spain",
        "rating": 5,
        "text": "Fantastic experience from the market visit to the final lunch. The chef was wonderful and patient.",
        "date": "Jul 2026"
      }
    ]
  },
  {
    "id": 15,
    "title": "Central Heritage Trail — Hue, Da Nang & Hoi An Express — 4 Days",
    "subtitle": "The definitive Central Vietnam overland journey linking 3 UNESCO World Heritage Sites",
    "image": "/images/tours/hai-van-pass.jpg",
    "gallery": [
      "/images/tours/hai-van-pass.jpg",
      "/images/tours/hue-imperial-city.jpg",
      "/images/tours/ba-na-hills-golden-bridge.jpg",
      "/images/tours/hoi-an-lantern-street.jpg",
      "/images/tours/my-son-sanctuary.jpg"
    ],
    "rating": 4.9,
    "reviews": 418,
    "description": "The ultimate 4-day private overland journey connecting Hue's Imperial Citadel, the coastal majesty of Hai Van Pass, Da Nang's Golden Bridge, and the ancient lantern-lit magic of Hoi An and My Son Sanctuary.",
    "longDescription": "Central Vietnam is the historic crossroads where imperial dynasties, Cham maritime kingdoms, and coastal nature converge along a dramatically scenic coastline. This 4-day private overland journey links three UNESCO World Heritage Sites across the Truong Son mountain range.\n\n**Imperial to Coastal:** From the royal tombs and imperial palaces of Hue, journey over the legendary Ocean Cloud Pass (Hai Van Pass) into dynamic Da Nang, marvel at the sacred cave shrines of the Marble Mountains, walk across the Golden Bridge at Ba Na Hills, and spend two enchanting evenings soaking in the lantern-lit serenity of Hoi An Ancient Town.\n\n**Seamless Comfort:** With dedicated private transport, luggage transfers, and expert cultural heritage guides throughout, this itinerary eliminates travel friction and lets you savor Central Vietnam's finest heritage.",
    "duration": "4 days 3 nights",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "central",
    "experienceType": "Heritage Overland Tour",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "February to August (sunny, dry and warm coastal weather)",
    "startEndLocation": "Hue Airport/Station – Hai Van Pass – Da Nang – Hoi An – Da Nang Airport",
    "categories": [
      "UNESCO Heritage",
      "Overland Trail",
      "Imperial History",
      "Scenic Coastal Drives"
    ],
    "highlights": [
      "Explore the Imperial Citadel (Forbidden Purple City) and Khai Dinh's mosaic tomb in Hue",
      "Dragon boat cruise along the Perfume River to 400-year-old Thien Mu Pagoda",
      "Drive over the breathtaking Hai Van Pass with panoramic vistas over Lang Co Bay and the East Sea",
      "Walk across the viral Golden Bridge held by giant stone hands at Ba Na Hills",
      "Stroll through the lantern-lit alleys and Japanese Covered Bridge of Hoi An Ancient Town",
      "Explore the 8th-century Hindu red-brick ruins of My Son Sanctuary in a lush jungle valley"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Hue — Imperial Citadel & Perfume River Dragon Boat",
        "desc": "Arrive in Hue. Dragon boat cruise to Thien Mu Pagoda, guided walking tour through the Imperial Citadel and Forbidden Purple City, and evening royal culinary banquet.",
        "morning": "Morning arrival in Hue. Meet your guide and private driver. Board a royal dragon boat on the Perfume River to Thien Mu Pagoda. Transfer to the Imperial Citadel to explore the Noon Gate (Ngo Mon), Supreme Harmony Palace, and royal courtyards.",
        "afternoon": "Enjoy a traditional Hue royal lunch. Check into your boutique riverside hotel. Afternoon visit to the spectacular mosaic tomb of Emperor Khai Dinh. Stop at Thuy Xuan incense village.",
        "evening": "Dinner featuring Hue royal specialties. Evening at leisure to stroll along the illuminated Truong Tien Bridge.",
        "meals": "Lunch & Dinner",
        "accommodation": "Boutique Riverside Hotel in Hue (e.g. Pilgrimage Village or Moonlight)",
        "highlights": [
          "Perfume River dragon boat",
          "Imperial Citadel",
          "Khai Dinh Tomb",
          "Thuy Xuan incense"
        ]
      },
      {
        "day": 2,
        "title": "Hai Van Pass to Da Nang Golden Bridge & Hoi An Lanterns",
        "desc": "Drive across the spectacular Hai Van Pass, ride the cable car to the Golden Bridge at Ba Na Hills, and arrive in Hoi An for an evening lantern walk.",
        "morning": "08:00 depart Hue. Drive south along the coast, climbing the winding curves of the Hai Van Pass. Stop at the summit French bunkers for sweeping panoramic vistas over Lang Co Bay and Da Nang coastline.",
        "afternoon": "Arrive at Ba Na Hills. Ride the world-record cable car to walk across the Golden Bridge. Explore the French gardens and enjoy an international buffet lunch. Descend the mountain and drive to Hoi An.",
        "evening": "Check into your boutique resort in Hoi An. Evening walking tour through the lantern-lit streets of the Ancient Town, followed by a riverside dinner.",
        "meals": "Breakfast, Buffet Lunch & Dinner",
        "accommodation": "Boutique Garden Resort in Hoi An (e.g. Mulberry Collection or Laluna)",
        "highlights": [
          "Hai Van Pass summit",
          "Golden Bridge walk",
          "Hoi An evening lantern streets"
        ]
      },
      {
        "day": 3,
        "title": "My Son Sanctuary Jungle Temples & Coconut Basket Boats",
        "desc": "Morning excursion to ancient Cham temples at My Son Sanctuary, afternoon basket boat ride in Cam Thanh coconut forest, and free time in Hoi An.",
        "morning": "08:00 morning drive to My Son Sanctuary. Walk along jungle trails exploring red-brick Cham towers and attend a live Apsara dance performance. Return to Hoi An for lunch.",
        "afternoon": "Afternoon visit to Cam Thanh water coconut forest for a fun round bamboo basket boat ride. Free time in the late afternoon to browse tailor shops, relax by the pool, or visit An Bang Beach.",
        "evening": "Dinner at leisure to explore Hoi An's world-class dining scene.",
        "meals": "Breakfast & Lunch",
        "accommodation": "Boutique Garden Resort in Hoi An",
        "highlights": [
          "My Son Sanctuary",
          "Cham Apsara dance",
          "Cam Thanh basket boat"
        ]
      },
      {
        "day": 4,
        "title": "Marble Mountains & Departure from Da Nang",
        "desc": "Morning visit to Marble Mountains and stone-carving village, followed by transfer to Da Nang International Airport.",
        "morning": "Breakfast at the resort. Transfer to Da Nang, stopping at the Marble Mountains (Ngu Hanh Son) to explore Huyen Khong cave temple and panoramic coastal viewpoints.",
        "afternoon": "Enjoy a farewell lunch in Da Nang before transfer to Da Nang International Airport (DAD) for your onward flight.",
        "evening": "Tour concludes with airport drop-off.",
        "meals": "Breakfast & Lunch",
        "accommodation": "None (Tour concludes in Da Nang)",
        "highlights": [
          "Marble Mountains cave shrines",
          "Non Nuoc stone carving",
          "Da Nang airport transfer"
        ]
      }
    ],
    "included": [
      "3 nights accommodation in 4-star boutique hotels/resorts (1 night Hue, 2 nights Hoi An)",
      "Private air-conditioned transport throughout the entire 4-day itinerary",
      "All entrance fees to Imperial Citadel, Khai Dinh Tomb, Hai Van Pass, Ba Na Hills, Hoi An, My Son, and Marble Mountains",
      "Ba Na Hills all-inclusive cable car and Golden Bridge ticket",
      "Perfume River dragon boat and Cam Thanh coconut basket boat rides",
      "All meals specified: 3 breakfasts, 4 lunches, 2 dinners",
      "Professional English-speaking cultural heritage guide dedicated throughout",
      "Luggage handling and airport transfers"
    ],
    "excluded": [
      "Domestic or international flights",
      "Day 3 dinner at leisure",
      "Personal drinks, spa, and laundry",
      "Tips for tour guide and driver"
    ],
    "pleaseNote": [
      "Modest clothing covering shoulders and knees is required for temples and tombs throughout the tour.",
      "Itinerary sequence can be customized for travelers arriving in Da Nang instead of Hue."
    ],
    "importantNotes": [
      {
        "category": "etiquette",
        "title": "Multi-Site Dress Code",
        "detail": "Central Vietnam contains sacred sites in every city. Carrying a lightweight scarf or wearing trousers/maxi dresses ensures easy access to all temples."
      },
      {
        "category": "general",
        "title": "Luggage Transfers",
        "detail": "Your luggage travels safely in our dedicated private vehicle while you sightsee, with zero hauling required."
      }
    ],
    "whatToBring": "Modest temple attire (sleeved shirts & long pants/dresses), comfortable walking sneakers and sandals, sun hat, sunglasses, sunscreen, swimwear (for resort pool and beach), and camera.",
    "whatToBringList": [
      "Modest clothing covering shoulders and knees for temple sites",
      "Comfortable walking shoes and casual sandals",
      "Swimwear for resort pools and beach",
      "Sun umbrella, sun hat, and UV sunglasses",
      "Sunscreen (SPF 50+) and insect repellent",
      "Camera, chargers, and power bank"
    ],
    "whatToBringGroups": [
      {
        "category": "Apparel & Footwear",
        "items": [
          "Modest temple clothing",
          "Walking sneakers / sandals",
          "Swimwear for hotel pool",
          "Light jacket for Hai Van & Ba Na"
        ]
      },
      {
        "category": "Sun & Essentials",
        "items": [
          "Sun hat & sunglasses",
          "Sunscreen (SPF 50+)",
          "Camera & chargers",
          "Passport & travel documents"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Mark & Sarah E.",
        "country": "Canada",
        "rating": 5,
        "text": "The perfect itinerary for Central Vietnam. Hai Van Pass and Hoi An were absolute highlights. Our private driver and guide were exceptional.",
        "date": "Sep 2026"
      },
      {
        "name": "Hiroshi K.",
        "country": "Japan",
        "rating": 5,
        "text": "Very comfortable and rich in culture. The hotels were wonderful boutique properties with great character.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 16,
    "title": "Hai Van Pass Motorbike Coastal Adventure — Hue to Hoi An",
    "subtitle": "Ride one of the world's most dramatic coastal mountain roads with professional Easy Riders",
    "image": "/images/tours/hai-van-pass.jpg",
    "gallery": [
      "/images/tours/hai-van-pass.jpg",
      "/images/tours/ba-na-hills-golden-bridge.jpg",
      "/images/destinations/da-nang.jpg",
      "/images/tours/hoi-an-ancient-town.jpg"
    ],
    "rating": 4.9,
    "reviews": 530,
    "description": "Turn your transfer between Hue and Hoi An into an exhilarating road trip: ride pillion behind licensed Easy Riders along Tam Giang Lagoon, swim in natural jungle waterfalls at Elephant Springs, and conquer the sweeping ocean hairpins of the Hai Van Pass.",
    "longDescription": "Hailed by Top Gear's Jeremy Clarkson as \"a deserted ribbon of perfection—one of the best coastal roads in the world\", the Hai Van Pass (\"Pass of the Ocean Mist\") spans 21 kilometers across a dramatic spur of the Truong Son range jutting directly into the East Sea.\n\n**The Open-Air Road Movie:** Climbing to an elevation of 496 meters, this historic border between ancient Dai Viet and Champa provides sweeping panoramas of crescent beaches, turquoise lagoons, and sheer forested cliffs.\n\n**Pillion Safety with Local Easy Riders:** Riding pillion behind our veteran, licensed local \"Easy Riders\", you are free to gaze at the panoramic ocean views, feel the sea breeze, and capture photos without worrying about mountain traffic. Along the way, take a refreshing swim in boulder-framed jungle pools at Elephant Springs, feast on freshly caught seafood over the water at Lang Co Bay, and explore the ancient cave shrines of the Marble Mountains.",
    "duration": "1 full day (8 hours)",
    "groupSize": "8 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate (Pillion riding)",
    "price": 0,
    "region": "central",
    "experienceType": "Motorbike Coastal Road Trip",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "March to September (dry sunny roads with dramatic ocean visibility)",
    "startEndLocation": "Hue – Tam Giang Lagoon – Elephant Springs – Lang Co Beach – Hai Van Pass – Da Nang – Hoi An",
    "categories": [
      "Motorbike Road Trip",
      "Coastal Scenery",
      "Waterfall Swim",
      "Scenic Route"
    ],
    "highlights": [
      "Conquer the winding coastal hairpins of the world-renowned Hai Van Pass",
      "Swim in crystalline natural boulder pools at Elephant Springs (Suoi Voi) in the jungle",
      "Fresh seafood lunch served directly over the turquoise waters of Lang Co Bay",
      "Ride along peaceful rural backroads past fishing stilt villages on Tam Giang Lagoon",
      "Explore historic French military bunkers and panoramic ocean viewpoints at the summit",
      "Visit the Marble Mountains cave temples and ride along Da Nang's coastal boulevard"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hue to Hoi An via Elephant Springs, Lang Co Bay & Hai Van Pass",
        "desc": "Morning departure on motorbikes from Hue. Ride through coastal fishing villages, swim at Elephant Springs, eat seafood at Lang Co Beach, climb the Hai Van Pass summit, visit Marble Mountains, and arrive in Hoi An.",
        "morning": "08:30 meet your professional Easy Rider at your Hue hotel. Helmet and safety fitting. Luggage strapped securely in waterproof bags on the bike rack. Ride along rural backroads past duck farms, fishing boats, and cemeteries on Tam Giang Lagoon. Stop at Elephant Springs (Suoi Voi) for a refreshing swim in natural mountain stream pools.",
        "afternoon": "Ride across the lagoon bridge to Lang Co Beach. Enjoy a fresh seafood lunch at a stilt restaurant over the water. At 13:00, begin ascending the legendary curves of the Hai Van Pass. Stop at the summit (496m) to explore French/American bunkers and drink Vietnamese iced coffee while taking in the 360-degree ocean view.",
        "evening": "Descend the southern curves into Da Nang. Cruise along My Khe Beach boulevard. Stop at the Marble Mountains to explore hidden cave shrines. Arrive in Hoi An by 16:30. Drop-off directly at your hotel.",
        "meals": "Fresh Coastal Seafood Lunch",
        "accommodation": "None (One-way road trip concludes in Hoi An)",
        "highlights": [
          "Tam Giang Lagoon",
          "Elephant Springs swim",
          "Lang Co Bay lunch",
          "Hai Van Pass summit",
          "Marble Mountains"
        ]
      }
    ],
    "included": [
      "Dedicated licensed professional Easy Rider driver and motorcycle throughout the journey",
      "DOT-certified full or open-face helmets, protective rain poncho, and safety gear",
      "Secure waterproof luggage strapping and transfer directly on the motorcycle",
      "Fresh multi-course coastal seafood lunch at Lang Co Beach",
      "All entrance admissions to Elephant Springs and the Marble Mountains",
      "Bottled drinking water and cold refreshments",
      "Hotel pickup in Hue and hotel drop-off in Hoi An (or Da Nang)"
    ],
    "excluded": [
      "Beverages, beers, and personal snacks during lunch",
      "Tips for your Easy Rider guides",
      "Personal travel insurance"
    ],
    "pleaseNote": [
      "You ride as a pillion passenger (riding on the back of the bike behind a licensed professional driver). This is the safest, most enjoyable way to experience the pass.",
      "Heavy suitcases and backpacks are fully waterproofed and securely strapped to the rear bike rack with zero hassle for you.",
      "In case of heavy rain, high-grade rain ponchos and protective covers are provided; alternative van transport is available if preferred."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Pillion Riding Comfort",
        "detail": "Bikes are fitted with padded passenger seats and backrests. The ride is broken up every 45-60 minutes with scenic photo stops, coffee breaks, and waterfall swims."
      },
      {
        "category": "weather",
        "title": "Summit Wind & Sun",
        "detail": "The pass summit can be breezy. Sunglasses are vital against road dust and wind. A light windbreaker jacket is advised."
      }
    ],
    "whatToBring": "Sunglasses (essential for riding), sunscreen, closed-toe shoes or strap sandals, swimwear and towel for Elephant Springs, light windbreaker jacket, and camera.",
    "whatToBringList": [
      "Sunglasses (essential against road glare and wind)",
      "Closed-toe sneakers or sturdy strap sandals (no loose flip-flops while riding)",
      "Swimwear and microfibre towel for Elephant Springs jungle pools",
      "Light windbreaker or long-sleeved shirt",
      "Sunscreen and lip balm",
      "Camera or smartphone with secure wrist lanyard"
    ],
    "whatToBringGroups": [
      {
        "category": "Riding Gear",
        "items": [
          "UV sunglasses (essential)",
          "Closed-toe shoes / strap sandals",
          "Light windbreaker jacket"
        ]
      },
      {
        "category": "Swimwear & Sun",
        "items": [
          "Swimsuit & towel",
          "Sunscreen (SPF 50+)",
          "Phone lanyard / wrist strap"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "3 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Jack B.",
        "country": "United Kingdom",
        "rating": 5,
        "text": "Do NOT take the bus or train between Hue and Hoi An! This motorbike trip was easily the coolest day of our trip. Swimming at Elephant Springs was so refreshing.",
        "date": "Sep 2026"
      },
      {
        "name": "Emma W.",
        "country": "Australia",
        "rating": 5,
        "text": "My rider was safe, gentle on the turns, and stopped whenever I wanted to take photos. The seafood lunch at Lang Co was divine.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 17,
    "title": "Ho Chi Minh City, Cu Chi Tunnels & Mekong Delta — 2 Days",
    "subtitle": "Contrast Saigon's electric pulse, subterranean wartime history & lush Mekong waterways",
    "image": "/images/tours/cu-chi-tunnels.jpg",
    "gallery": [
      "/images/tours/cu-chi-tunnels.jpg",
      "/images/tours/saigon-notre-dame.jpg",
      "/images/tours/mekong-delta-boat.jpg",
      "/images/destinations/ho-chi-minh-city.jpg",
      "/images/food/banh-mi-sai-gon.jpg"
    ],
    "rating": 4.8,
    "reviews": 810,
    "description": "Experience the resilience and contrasts of Southern Vietnam: uncover the underground labyrinth of Cu Chi Tunnels, admire French-colonial architecture in Saigon, and cruise through the fertile coconut palm canals of the Mekong Delta.",
    "longDescription": "From the roaring pulse of Saigon's French-colonial boulevards and modern skyscrapers to the somber subterranean warfare history of Cu Chi and the lush, life-giving waterways of the Mekong Delta, this 2-day experience encapsulates the resilience and vibrancy of Southern Vietnam.\n\n**The Subterranean Fortress:** Crawl into sections of the legendary 250-kilometer Cu Chi tunnel network that sheltered guerrilla fighters through decades of conflict. Discover hidden trapdoors, underground kitchens with smokeless chimneys (Bếp Hoàng Cầm), field hospitals, and weapon workshops.\n\n**The Life-Giving River:** Journey south into the \"Rice Bowl of Vietnam\" to cruise the mighty Mekong River, row through tranquil nipa palm canals in Ben Tre, taste honey tea and tropical fruits straight from orchard trees, and savor deep-fried Elephant Ear Fish at an open-air riverside garden.",
    "duration": "2 days 1 night",
    "groupSize": "12 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "south",
    "experienceType": "Historical & River Expedition",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "November to April (dry season, pleasant tropical weather)",
    "startEndLocation": "Ho Chi Minh City – Cu Chi Tunnels – My Tho – Ben Tre – Ho Chi Minh City",
    "categories": [
      "War History",
      "Mekong Delta",
      "Sampan Cruise",
      "Colonial Architecture"
    ],
    "highlights": [
      "Crawl inside the historic 250-kilometer underground Cu Chi tunnel complex and see hidden trapdoors",
      "Explore Saigon's iconic French colonial monuments: Central Post Office and Notre-Dame Basilica",
      "Private motorized boat cruise across the mighty Mekong River past floating fish farms",
      "Hand-rowed wooden sampan boat ride along peaceful, palm-shaded tributary canals in Ben Tre",
      "Savor a traditional Southern feast featuring deep-fried Elephant Ear Fish (Ca Tai Tuong)",
      "Visit a family-run honeybee farm and artisanal coconut candy workshop"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Saigon French Heritage & The Cu Chi Tunnels Underground Network",
        "desc": "Morning architectural walking tour in central Saigon, afternoon exploration of Cu Chi underground guerrilla tunnels, and evening at leisure in bustling District 1.",
        "morning": "08:30 pickup from your hotel. Tour Saigon's landmark colonial monuments: the Gustave Eiffel-designed Central Post Office, exterior of Notre-Dame Cathedral, the War Remnants Museum, and the historic Reunification Palace.",
        "afternoon": "Enjoy lunch featuring Saigon Banh Mi and broken rice (Com Tam). Drive 1.5 hours northwest to Cu Chi Tunnels. Watch historic documentary footage, inspect camouflaged trapdoors and bomb craters, and crawl through an authentic widened tunnel section. Inspect the smokeless Hoang Cam kitchen.",
        "evening": "Return to Ho Chi Minh City around 17:30. Check into your boutique hotel. Evening at leisure to stroll around Nguyen Hue walking street or visit Ben Thanh night market.",
        "meals": "Lunch & Evening at Leisure",
        "accommodation": "Boutique 4-Star Hotel in District 1, Ho Chi Minh City",
        "highlights": [
          "Central Post Office",
          "War Remnants Museum",
          "Cu Chi underground tunnels"
        ]
      },
      {
        "day": 2,
        "title": "Mekong Delta River Cruise, Coconut Canals & Ben Tre",
        "desc": "Full-day excursion to the Mekong Delta: cruise the Tien River, row through water coconut canals, taste orchard honey and coconut candy, and enjoy lunch in an orchard garden.",
        "morning": "08:00 depart Saigon for My Tho in the Mekong Delta. Board a private motorized wooden boat cruising along the Tien River past four sacred islands: Dragon, Unicorn, Phoenix, and Turtle. Visit a bee farm for warm honey tea and fresh kumquat.",
        "afternoon": "Transfer into small hand-rowed wooden sampans navigated by local villagers through narrow, lush canals shaded by water coconut palms. Stop at a rustic coconut candy workshop. Enjoy lunch in an orchard garden featuring deep-fried Elephant Ear Fish served with fresh herbs and rice paper. Relax or take a brief bicycle ride along village paths.",
        "evening": "Return by boat to the pier and drive back to Ho Chi Minh City, arriving at your hotel around 17:00.",
        "meals": "Breakfast & Mekong Garden Lunch",
        "accommodation": "None (Tour concludes in Ho Chi Minh City)",
        "highlights": [
          "Tien River boat cruise",
          "Hand-rowed palm sampan",
          "Elephant Ear fish lunch",
          "Coconut candy workshop"
        ]
      }
    ],
    "included": [
      "1 night accommodation in a 4-star boutique hotel in central Saigon (District 1)",
      "Round-trip air-conditioned private transport throughout both days",
      "All entrance admissions to War Remnants Museum, Reunification Palace, and Cu Chi Tunnels",
      "Private motorized boat and hand-rowed sampan excursions in the Mekong Delta",
      "All meals: 1 breakfast, 2 lunches",
      "Fresh tropical fruit tastings, honey tea, and coconut candy demonstrations",
      "Professional English-speaking guide throughout",
      "Bottled drinking water and cold towels"
    ],
    "excluded": [
      "Shooting range ammunition fees at Cu Chi (optional on site)",
      "Day 1 dinner and personal bar drinks",
      "Tips for tour guide, driver, and sampan rowers",
      "Personal travel insurance"
    ],
    "pleaseNote": [
      "Entering the underground tunnels at Cu Chi is completely optional; travelers with claustrophobia or limited mobility can comfortably walk on shaded forest trails above ground.",
      "Tunnels have been widened and illuminated for visitor safety, but can be warm and dusty."
    ],
    "importantNotes": [
      {
        "category": "fitness",
        "title": "Cu Chi Tunnel Activity",
        "detail": "Walking through the tunnel sections requires ducking or crawling for 20 to 100 meters. Emergency exit points are placed every 20 meters. Above-ground paths are entirely flat and shaded."
      },
      {
        "category": "weather",
        "title": "Tropical Heat in the Delta",
        "detail": "Southern Vietnam is warm year-round (28–34°C). Light, breathable cotton or linen clothing, a sun hat, and sunscreen ensure optimal comfort."
      }
    ],
    "whatToBring": "Comfortable breathable clothing, sneakers (or walking shoes you don't mind getting dusty at Cu Chi), sun hat, sunglasses, sunscreen, insect repellent, and camera.",
    "whatToBringList": [
      "Lightweight, breathable cotton or linen clothes",
      "Comfortable sneakers or walking shoes",
      "Sun hat, UV sunglasses, and sunscreen (SPF 50+)",
      "DEET insect repellent for the Mekong Delta",
      "Camera or smartphone",
      "Small VND cash for local snacks and tips"
    ],
    "whatToBringGroups": [
      {
        "category": "Clothing & Walking",
        "items": [
          "Breathable cotton shirts & shorts",
          "Walking sneakers (dust-tolerant)",
          "Sun hat & UV sunglasses"
        ]
      },
      {
        "category": "Delta Protection",
        "items": [
          "DEET insect repellent",
          "Sunscreen (SPF 50+)",
          "Hand sanitizer / wet wipes"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "James & Kelly P.",
        "country": "United States",
        "rating": 5,
        "text": "Incredible 2 days! Crawling through Cu Chi was eye-opening and sobering. The Mekong Delta row boat through the coconut palms was so peaceful.",
        "date": "Sep 2026"
      },
      {
        "name": "Liam D.",
        "country": "Ireland",
        "rating": 5,
        "text": "Our guide was fantastic, giving us both historical context and personal family stories about the war. The Elephant Ear fish was delicious!",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 18,
    "title": "Mekong Delta Floating Market & Cai Rang Dawn Safari",
    "subtitle": "Witness the vibrant dawn spectacle of wholesale river trade, noodle boats & fruit orchards",
    "image": "/images/tours/cai-rang-floating-market.jpg",
    "gallery": [
      "/images/tours/cai-rang-floating-market.jpg",
      "/images/tours/can-tho-mekong.jpg",
      "/images/tours/mekong-delta-boat.jpg",
      "/images/food/hu-tiu-nam-vang.jpg"
    ],
    "rating": 4.9,
    "reviews": 520,
    "description": "Board a private wooden boat at sunrise to experience Cai Rang, the largest wholesale floating market in the Mekong Delta: eat steaming noodle soup served from floating kitchen boats, learn rice paper making, and stroll through fruit orchards.",
    "longDescription": "Long before paved highways connected the provinces of Southern Vietnam, commerce and community flowed exclusively along the nine estuaries of the mighty Mekong (Sông Cửu Long - Nine Dragons). Cai Rang Floating Market in Can Tho is the most vibrant remaining wholesale river market in the country.\n\n**The Dawn Flotilla:** At dawn, hundreds of wooden barges and boats gather from all across the delta. Their bowsprits bear tall bamboo poles (cây bẹo) hung with pineapples, watermelons, dragon fruit, and pumpkins to advertise their cargo. Nimble wooden sampans weave through the flotilla selling piping-hot bowls of Hủ Tiếu noodle soup and iced Vietnamese milk coffee directly from boat to boat.\n\n**Cottage Industry & Orchards:** After the bustling market spectacle, turn down tranquil natural backwater canals to visit an artisanal rice noodle workshop and an organic fruit orchard where rambutan, mangoes, and pomelo hang within arm's reach.",
    "duration": "1 full day (Can Tho or early Saigon round-trip)",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy (Early morning start)",
    "price": 0,
    "region": "south",
    "experienceType": "River Culture & Market Safari",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "Year-round; fruit ripening peak is May to August",
    "startEndLocation": "Can Tho Pier (or Saigon pickup) – Cai Rang Floating Market – Ba Lang Canals – Return",
    "categories": [
      "Floating Market",
      "River Culture",
      "Street Food on Water",
      "Fruit Orchards"
    ],
    "highlights": [
      "Private wooden boat sunrise cruise along the Hau River to Cai Rang Floating Market",
      "Eat steaming Hu Tiu noodle soup and drink iced coffee served directly from floating boat kitchens",
      "Observe the traditional \"cay beo\" bamboo pole advertising system of wholesale river trade",
      "Hands-on demonstration at a family-run artisanal rice noodle and colorful rice paper workshop",
      "Stroll through a lush tropical orchard to taste ripe seasonal fruits picked fresh from trees",
      "Navigate tranquil narrow backwater canals fringed with water coconut palms"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Cai Rang Dawn Flotilla, Floating Noodles & Artisanal Workshops",
        "desc": "Early morning boat departure from Ninh Kieu Wharf, immerse in the bustling wholesale floating market, eat breakfast on the water, visit noodle workshops and orchards, and return.",
        "morning": "05:30 meet your private guide at Ninh Kieu Wharf in Can Tho. Board a private motorized wooden boat as the dawn glow illuminates the broad Hau River. Arrive at Cai Rang Floating Market at its peak trading bustle (06:00 - 07:30). Pull alongside a floating vendor boat for breakfast: enjoy steaming Hu Tiu soup and fresh coconut water on the water.",
        "afternoon": "Cruise into peaceful, shaded backwater canals. Stop at an authentic family-run rice noodle workshop to try hand-stretching and slicing rice noodle dough. Next, walk through a lush tropical fruit orchard, sampling sweet mango, rambutan, and dragon fruit. Return to Ninh Kieu Wharf by 11:00 for lunch.",
        "evening": "Free afternoon in Can Tho or return transfer to Ho Chi Minh City.",
        "meals": "Floating Noodle Breakfast & Mekong Lunch",
        "accommodation": "None (Day safari concludes in Can Tho / Saigon)",
        "highlights": [
          "Cai Rang floating market",
          "Breakfast on the water",
          "Rice noodle workshop",
          "Tropical fruit orchard"
        ]
      }
    ],
    "included": [
      "Private wooden motorized boat cruise throughout the floating market and canals",
      "Freshly prepared floating breakfast: bowl of Hu Tiu noodle soup + fresh coconut or coffee",
      "All entrance permits, orchard tasting fees, and workshop demonstrations",
      "Authentic Mekong Delta specialty lunch at a riverside restaurant",
      "Professional English-speaking river guide",
      "Life jackets and bottled drinking water"
    ],
    "excluded": [
      "Personal fruit purchases directly from wholesale barges",
      "Tips for tour guide and boat captain",
      "Transfer from Saigon (can be added as an overland round-trip combo)"
    ],
    "pleaseNote": [
      "The early 05:30 start is essential; wholesale market trading peaks between 06:00 and 07:30 and winds down rapidly by 09:00.",
      "Bring a strap or secure grip for cameras and smartphones while leaning over the boat gunwales."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Early Dawn & River Mist",
        "detail": "Mornings on the river can be breezy and fresh; a light long-sleeve layer is comfortable until the sun rises."
      },
      {
        "category": "etiquette",
        "title": "Boat Trading Interaction",
        "detail": "You are welcome to take photos of wholesale traders; smiles and polite waves are warmly reciprocated."
      }
    ],
    "whatToBring": "Camera with neck/wrist strap, sun hat, sunglasses, light windbreaker/cardigan for dawn boat ride, and small cash (VND) for fresh fruits and boat treats.",
    "whatToBringList": [
      "Camera or smartphone with secure wrist/neck strap",
      "Light long-sleeved shirt or cardigan for early morning river breezes",
      "Sun hat and UV sunglasses (sun becomes bright by 08:00)",
      "Sunscreen and insect repellent",
      "Small VND cash for buying fruits and drinks directly from boats"
    ],
    "whatToBringGroups": [
      {
        "category": "River Gear",
        "items": [
          "Camera with secure wrist strap",
          "Light morning layer",
          "Sun hat & sunglasses"
        ]
      },
      {
        "category": "Personal",
        "items": [
          "Small VND cash (bills of 10k, 20k, 50k)",
          "Hand sanitizer"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "2 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Lucas H.",
        "country": "Germany",
        "rating": 5,
        "text": "Waking up at 5am was 1000% worth it! Having hot noodle soup passed to our boat from a floating kitchen while surrounded by hundreds of fruit boats was unforgettable.",
        "date": "Sep 2026"
      },
      {
        "name": "Tara W.",
        "country": "Canada",
        "rating": 5,
        "text": "Authentic, colorful, and fascinating. Our guide made sure we got right into the action without feeling intrusive.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 19,
    "title": "Phu Quoc Island Tropical Paradise & Coral Reef Escape — 3 Days",
    "subtitle": "Relax on pristine white sands, speedboat to coral islands & savor sunset seafood",
    "image": "/images/tours/phu-quoc-sao-beach.jpg",
    "gallery": [
      "/images/tours/phu-quoc-sao-beach.jpg",
      "/images/tours/phu-quoc-fishing-village.jpg",
      "/images/destinations/phu-quoc.jpg",
      "/images/tours/con-dao-island.jpg"
    ],
    "rating": 4.9,
    "reviews": 435,
    "description": "A luxury tropical retreat: relax on the powder-white sands of Bai Sao, island-hop via private speedboat to snorkel vibrant coral reefs in the An Thoi archipelago, and taste fresh grilled seafood at traditional wooden fishing piers.",
    "longDescription": "Floating in the warm azure waters of the Gulf of Thailand off Vietnam's southern coast, Phu Quoc is the country's largest island—a tropical sanctuary of palm-fringed powder-white beaches, untouched primary rainforest, and rich marine biodiversity.\n\n**The An Thoi Coral Archipelago:** Board a private speedboat to navigate the southern An Thoi archipelago of 15 pristine islets. Snorkel over living coral gardens at Gam Ghi Island and Turtle Island, plunge into crystal-clear turquoise waters, and enjoy a private grilled seafood barbecue on the sands of May Rut Island.\n\n**Artisanal Traditions & Sunsets:** Famous for centuries for producing the world's most aromatic black pepper and traditional barrel-aged fish sauce (nước mắm), Phu Quoc balances lazy beach days with authentic local culture. Watch the sun dip below the horizon at Dinh Cau rock temple with a cocktail in hand, and explore the bustling night seafood market.",
    "duration": "3 days 2 nights",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy (Leisure & swimming)",
    "price": 0,
    "region": "south",
    "experienceType": "Tropical Beach & Snorkeling",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "November to April (dry season, calm sea, sunny skies)",
    "startEndLocation": "Phu Quoc Airport (PQC) – Bai Sao – An Thoi Archipelago – Duong Dong – Return",
    "categories": [
      "Beach Holiday",
      "Speedboat Snorkeling",
      "Island Life",
      "Seafood BBQ"
    ],
    "highlights": [
      "Private speedboat island-hopping across the southern An Thoi coral archipelago",
      "Snorkel over vibrant living coral gardens and tropical marine life at Gam Ghi Island",
      "Swim in the calm turquoise waters of Bai Sao (Starfish Beach), one of Asia's finest shores",
      "Private grilled seafood beach barbecue lunch on the uninhabited sands of May Rut Island",
      "Visit a traditional organic black pepper farm and historic barrel fish sauce distillery",
      "Sunset cocktails overlooking Dinh Cau rocky shrine and evening night market seafood feast"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Phu Quoc — Beachfront Resort & Sunset at Dinh Cau",
        "desc": "Arrive at Phu Quoc Airport; private transfer to your beachfront resort. Afternoon visit to an organic pepper plantation and Dinh Cau rock shrine, followed by seafood dinner.",
        "morning": "Morning arrival at Phu Quoc International Airport (PQC). Private luxury transfer to your 4-star beachfront resort in Long Beach or Ong Lang. Check in and relax by the ocean.",
        "afternoon": "Visit a family-run organic black pepper plantation to see pepper vines and taste wild peppercorns. Continue to a traditional fish sauce barrel house. Stroll to Dinh Cau rock temple as the sun sets over the Gulf of Thailand.",
        "evening": "Explore the vibrant Phu Quoc Night Market in Duong Dong. Enjoy dinner featuring grilled sea urchin with scallion oil, steamed squid, and coconut ice cream.",
        "meals": "Dinner",
        "accommodation": "4-Star Beachfront Resort in Phu Quoc (Private Balcony & Beach Access)",
        "highlights": [
          "Resort beach arrival",
          "Pepper plantation",
          "Dinh Cau sunset",
          "Night market seafood"
        ]
      },
      {
        "day": 2,
        "title": "An Thoi Archipelago Private Speedboat & Coral Snorkeling",
        "desc": "Full-day private speedboat expedition to the southern coral islands. Snorkel at Gam Ghi and Buom islands, relax on May Rut beach with a seafood BBQ, and swim at Bai Sao.",
        "morning": "08:30 private transfer to An Thoi Harbour. Board a high-speed private boat. Cruise past sea cable car towers to Gam Ghi Island. Put on masks and snorkels to explore vibrant living coral reefs and schools of tropical fish.",
        "afternoon": "Land on May Rut Island for a private seafood barbecue lunch: grilled barracuda, prawns, squid, and tropical fruit. Relax on hammocks under coconut palms. On the return, stop at Bai Sao (Star Beach) for swimming in powder-white sand waters.",
        "evening": "Return to your resort around 16:30. Free evening to enjoy resort spa facilities or private beachfront dining.",
        "meals": "Breakfast & Island Seafood BBQ Lunch",
        "accommodation": "4-Star Beachfront Resort in Phu Quoc",
        "highlights": [
          "Speedboat island hopping",
          "Gam Ghi coral reef",
          "May Rut beach BBQ",
          "Bai Sao white sands"
        ]
      },
      {
        "day": 3,
        "title": "Ham Ninh Fishing Village & Departure",
        "desc": "Morning visit to traditional Ham Ninh stilt fishing village, leisure beach time at the resort, and transfer to Phu Quoc Airport.",
        "morning": "Breakfast overlooking the sea. Optional morning excursion to Ham Ninh, an ancient fishing village with long wooden piers stretching into calm shallows. Photograph traditional fishing boats and local crab catch.",
        "afternoon": "Return to resort for checkout and final swim before private transfer to Phu Quoc International Airport for your departure flight.",
        "evening": "Tour concludes with airport drop-off.",
        "meals": "Breakfast",
        "accommodation": "None (Tour concludes in Phu Quoc)",
        "highlights": [
          "Ham Ninh fishing pier",
          "Resort morning swim",
          "Airport transfer"
        ]
      }
    ],
    "included": [
      "2 nights accommodation at a luxury 4-star beachfront resort (daily buffet breakfast included)",
      "Private air-conditioned vehicle for all airport transfers and land sightseeing",
      "Private modern speedboat charter for the full-day An Thoi archipelago expedition",
      "High-grade sanitized snorkeling gear (masks, snorkels, fins, and life jackets)",
      "All meals specified: 2 breakfasts, 1 island seafood BBQ lunch, 1 seafood dinner",
      "All island harbor fees, national marine park permits, and entrance tickets",
      "Professional English-speaking island guide throughout"
    ],
    "excluded": [
      "Domestic or international flights to/from Phu Quoc",
      "Beverages and bar drinks outside included meals",
      "Scuba diving gear or sea-walker underwater helmet (optional add-ons on site)",
      "Tips for tour guide, speedboat captain, and driver"
    ],
    "pleaseNote": [
      "Phu Quoc enjoys a 30-day visa exemption for international travelers entering directly by air/sea via international transit.",
      "Reef-safe sunscreen is strictly recommended to safeguard the island's delicate coral ecosystem."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Dry Season vs Monsoon",
        "detail": "The optimal season is November to April with crystal clear seas and low swells. During summer (July–September), southern islands remain accessible, while west coast beaches can experience occasional swells."
      },
      {
        "category": "health",
        "title": "Marine Conservation",
        "detail": "Please do not stand on or touch living coral reefs while snorkeling. All sea life is protected by Phu Quoc Marine Protected Area regulations."
      }
    ],
    "whatToBring": "Swimwear (2 sets), reef-safe sunscreen, sunglasses, sun hat, flip-flops, waterproof dry bag, underwater action camera (GoPro) or phone pouch, and light resort wear.",
    "whatToBringList": [
      "2 sets of swimwear and UV sun rash guard",
      "Reef-safe sunscreen (oxybenzone-free) and aloe vera gel",
      "Polarized UV sunglasses and wide-brim sun hat",
      "Waterproof phone case or underwater camera",
      "Lightweight tropical resort clothing and sandals"
    ],
    "whatToBringGroups": [
      {
        "category": "Beach & Swim",
        "items": [
          "Swimwear & rash guard",
          "Waterproof dry bag",
          "Flip-flops / beach sandals",
          "Microfibre towel"
        ]
      },
      {
        "category": "Sun & Optics",
        "items": [
          "Reef-safe sunscreen (SPF 50+)",
          "Polarized sunglasses",
          "GoPro / waterproof camera"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Matteo & Elena R.",
        "country": "Italy",
        "rating": 5,
        "text": "Paradise on earth! The private speedboat tour was worth every penny. The coral was vibrant, May Rut island was like a dream, and the food was fresh and plentiful.",
        "date": "Sep 2026"
      },
      {
        "name": "Sophie K.",
        "country": "Germany",
        "rating": 5,
        "text": "Stunning resort, white sand beaches, and excellent organization. Watching the sunset with a cocktail was unforgettable.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 20,
    "title": "Con Dao Island Remote Archipelago Retreat — 3 Days",
    "subtitle": "Immerse in secluded granite bays, green sea turtle sanctuaries & poignant national history",
    "image": "/images/tours/con-dao-island.jpg",
    "gallery": [
      "/images/tours/con-dao-island.jpg",
      "/images/tours/phu-quoc-fishing-village.jpg",
      "/images/destinations/phu-quoc.jpg",
      "/images/tours/con-dao-island.jpg"
    ],
    "rating": 4.9,
    "reviews": 195,
    "description": "A secluded paradise 180 km off the mainland: walk empty golden beaches beneath granite cliffs, explore Con Dao National Park's virgin rainforests, learn poignant colonial prison history, and witness sea turtle conservation.",
    "longDescription": "Lying 180 kilometers off the southern mainland in the East Sea, the Con Dao archipelago of 16 mountainous islands is one of Southeast Asia's most pristine, mystifying, and emotionally evocative destinations.\n\n**From \"Devil's Island\" to Sanctuary:** Once notorious as \"Devil's Island\" due to its French colonial and American-era political prisons, Con Dao has undergone an extraordinary environmental and spiritual rebirth. Today, Con Dao National Park protects dense primary rainforest, rare dugongs, and the most critical green sea turtle nesting grounds in Vietnam.\n\n**Pure Serenity:** With empty golden beaches framed by dramatic granite sea cliffs, French banyan-lined seaside boulevards, and zero mass tourism, this retreat offers pure peace. Walk along secluded Dam Trau Beach where aircraft descend directly over the shoreline, trek jungle trails beneath centuries-old trees, and pay homage at Hang Duong historical cemetery.",
    "duration": "3 days 2 nights",
    "groupSize": "8 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "south",
    "experienceType": "Eco-Retreat & Heritage",
    "bookingAdvance": "Cut off: 72 hours",
    "bestSeason": "March to September (calm seas and sea turtle nesting season)",
    "startEndLocation": "Con Son Airport (VCS) – Dam Trau Beach – National Park – Con Dao Town – Return",
    "categories": [
      "Island Sanctuary",
      "Sea Turtle Conservation",
      "National Heritage",
      "Pristine Nature"
    ],
    "highlights": [
      "Explore empty golden shores at Dam Trau Beach framed by tropical forest and granite sea cliffs",
      "Guided nature trek in Con Dao National Park observing black giant squirrels and birdlife",
      "Visit the historic colonial French Tiger Cages and the revered Vo Thi Sau memorial shrine",
      "Stroll along the tranquil seafront promenade shaded by 150-year-old French banyan trees",
      "Speedboat excursion to Bay Canh Island for pristine coral snorkeling and turtle hatchery visits",
      "Unspoiled digital-detox atmosphere with crystal-clear turquoise waters and zero commercial crowds"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Con Dao — French Colonial Heritage & Banyan Promenade",
        "desc": "Scenic flight into Con Son airport. Check into your seaside resort, embark on a historical pilgrimage of the French Tiger Cages and Hang Duong memorial, and sunset promenade walk.",
        "morning": "Fly into Con Son Airport, landing on a coastal runway flanked by mountains. Private transfer to your boutique resort in Con Dao town. Refresh and enjoy a seafood lunch.",
        "afternoon": "Guided historical tour of Con Dao's poignant past: visit the French-built colonial prison complex, the notorious underground Tiger Cages, and the Con Dao Museum detailing the island's political history.",
        "evening": "Sunset walk along Ton Duc Thang coastal promenade under the shade of massive 150-year-old banyan trees. Traditional Vietnamese dinner featuring grilled red snapper and ocean herbs.",
        "meals": "Lunch & Dinner",
        "accommodation": "Boutique Seaside Resort in Con Dao (e.g. The Secret Con Dao or Poulo Condor)",
        "highlights": [
          "Scenic island flight",
          "French Tiger Cages",
          "Banyan seafront promenade"
        ]
      },
      {
        "day": 2,
        "title": "Con Dao National Park Rainforest & Secluded Dam Trau Beach",
        "desc": "Morning rainforest nature trek observing endemic wildlife, afternoon relaxation at Dam Trau beach, and coral reef snorkeling boat trip.",
        "morning": "08:00 guided nature hike into Con Dao National Park. Walk along shaded jungle trails to So Ray or Bang beach, spotting endemic Con Dao black giant squirrels, macaques, and exotic birds.",
        "afternoon": "Drive to secluded Dam Trau Beach, famous for its golden sand, turquoise sea, and dramatic airplane landing vistas. Enjoy fresh coconut water and a seafood lunch at a beachside shack. Afternoon boat ride to Bay Canh Island for coral snorkeling and marine ranger station visit.",
        "evening": "Between June and September, optional night patrol with national park rangers to witness mother sea turtles laying eggs on Bay Canh beach. Overnight at resort.",
        "meals": "Breakfast & Seafood Beach Lunch",
        "accommodation": "Boutique Seaside Resort in Con Dao",
        "highlights": [
          "National Park rainforest trek",
          "Dam Trau beach",
          "Bay Canh coral reef",
          "Sea turtle conservation"
        ]
      },
      {
        "day": 3,
        "title": "Island Morning Fish Market & Departure",
        "desc": "Morning swim in calm waters, visit the lively local morning seafood market, and transfer to Con Son Airport for your flight.",
        "morning": "Sunrise swim in the tranquil turquoise bay. Savor breakfast on the oceanfront terrace. Visit the lively local morning market in town, watching fishermen unload fresh tuna, mackerel, and crabs.",
        "afternoon": "Checkout and private transfer to Con Son Airport (VCS) for your flight back to Ho Chi Minh City or Hanoi.",
        "evening": "Tour concludes with airport drop-off.",
        "meals": "Breakfast",
        "accommodation": "None (Tour concludes in Con Dao)",
        "highlights": [
          "Sunrise ocean swim",
          "Con Dao morning market",
          "Scenic departure flight"
        ]
      }
    ],
    "included": [
      "2 nights accommodation at a 4-star boutique seaside resort with ocean/garden view",
      "All private ground transfers between Con Son Airport, hotel, and sightseeing sites",
      "Private boat excursion to Bay Canh Island for snorkeling and marine conservation",
      "All national park permits, historical prison admissions, and conservation fees",
      "All meals specified: 2 breakfasts, 2 lunches, 1 dinner",
      "Professional English-speaking local naturalist guide",
      "Sanitized snorkeling gear and life jackets"
    ],
    "excluded": [
      "Flights to/from Con Dao (VCS)",
      "Night turtle egg-laying ranger boat permit (seasonal, payable directly to park)",
      "Day 2 dinner at leisure",
      "Tips for tour guide and driver"
    ],
    "pleaseNote": [
      "Flights to Con Dao have limited seat capacity (operated by ATR-72 / Embraer jets); booking at least 3-4 weeks ahead is advised.",
      "Respectful attire covering shoulders and knees is strictly required when visiting Hang Duong Cemetery and historical prison memorials.",
      "Strict park rules: touching turtles, disturbing nests, or taking coral is severely prohibited."
    ],
    "importantNotes": [
      {
        "category": "etiquette",
        "title": "Historical Respect",
        "detail": "Con Dao holds deep spiritual reverence in Vietnam as sacred ground. Please dress respectfully and maintain quiet contemplation at cemetery memorials."
      },
      {
        "category": "weather",
        "title": "Turtle Nesting Season",
        "detail": "Green sea turtles nest between May and October, with peak nesting from June to August on Bay Canh and Hon Cau beaches."
      }
    ],
    "whatToBring": "Reef-safe sunscreen, comfortable walking shoes for jungle trails, sandals for the beach, swimwear, modest clothing for memorial sites, insect repellent, and camera.",
    "whatToBringList": [
      "Modest clothing covering shoulders and knees for historical sites",
      "Comfortable hiking or walking shoes for national park trails",
      "Reef-safe sunscreen and eco-friendly insect repellent",
      "Swimwear and beach towel",
      "Camera or smartphone",
      "Small cash (VND) for market purchases"
    ],
    "whatToBringGroups": [
      {
        "category": "Attire & Shoes",
        "items": [
          "Modest memorial clothing",
          "Trail walking shoes",
          "Swimwear & sandals"
        ]
      },
      {
        "category": "Sun & Nature",
        "items": [
          "Reef-safe sunscreen",
          "Insect repellent",
          "Camera / phone"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Benjamin C.",
        "country": "United Kingdom",
        "rating": 5,
        "text": "Con Dao is unlike anywhere else in Southeast Asia. Completely peaceful, haunting history, and beaches that rival the Maldives. Dam Trau beach is sensational.",
        "date": "Sep 2026"
      },
      {
        "name": "Anh N.",
        "country": "Vietnam",
        "rating": 5,
        "text": "So sacred, beautiful and clean. Watching baby turtles released into the ocean was deeply moving.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 21,
    "title": "Da Lat Highlands Getaway — Pine Forests & Waterfalls — 2 Days",
    "subtitle": "Breathe mountain pine air, ride alpine coasters to waterfalls & discover French art deco villas",
    "image": "/images/tours/da-lat-highlands.jpg",
    "gallery": [
      "/images/tours/da-lat-highlands.jpg",
      "/images/tours/da-lat-tuyen-lam.jpg",
      "/images/tours/moc-chau-plateau.jpg",
      "/images/destinations/sapa.jpg"
    ],
    "rating": 4.8,
    "reviews": 320,
    "description": "Escape to the 'City of Eternal Spring' elevated 1,500m on the Lang Biang Plateau: glide on the Robin Hill cable car, stroll around misty Tuyen Lam Lake, ride self-controlled alpine coasters to Datanla Falls, and explore the surreal Crazy House.",
    "longDescription": "Perched 1,500 meters above sea level on the Lang Biang Plateau, Da Lat—the \"City of Eternal Spring\"—is a romantic mountain sanctuary blessed with a temperate alpine climate, rolling pine-clad hills, blooming flower valleys, and charming French-colonial art deco villas.\n\n**French Colonial Hill Station:** Founded by bacteriologist Alexandre Yersin in 1893 as an alpine refuge from tropical lowland heat, Da Lat has an enchanting character found nowhere else in Vietnam.\n\n**Spiritual Serenity to Alpine Thrills:** Board the Robin Hill cable car soaring above pine forests to Truc Lam Zen Monastery overlooking the misty waters of Tuyen Lam Lake. Ride thrilling alpine coasters through forest canopies down to Datanla Waterfall, explore the surreal Gaudi-inspired architectural labyrinth of the Crazy House, and wrap up in a warm jacket to savor hot soy milk and crispy \"Vietnamese pizza\" at the lively Da Lat Night Market.",
    "duration": "2 days 1 night",
    "groupSize": "10 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "south",
    "experienceType": "Highland Alpine Escape",
    "bookingAdvance": "Cut off: 24 hours",
    "bestSeason": "November to March (dry season, blooming wild sunflowers, cherry blossoms & crisp sunny days)",
    "startEndLocation": "Da Lat Airport (DLI) / Hotel – Tuyen Lam Lake – Datanla – Crazy House – Return",
    "categories": [
      "Highland Nature",
      "Pine Forests",
      "Alpine Coaster",
      "Colonial Architecture"
    ],
    "highlights": [
      "Ride the scenic Robin Hill cable car soaring above misty pine canopies",
      "Visit the serene Truc Lam Zen Monastery overlooking tranquil Tuyen Lam Lake",
      "Thrill ride on self-controlled alpine coasters through forest ravines to Datanla Waterfall",
      "Explore the whimsical Gaudi-inspired surrealist architectural labyrinth of Crazy House",
      "Savor hot soy milk, artichoke tea, and grilled rice paper (Banh Trang Nuong) at the Night Market",
      "Tour a high-altitude Arabica coffee plantation and lush strawberry greenhouse"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Robin Hill Cable Car, Truc Lam Monastery & Datanla Falls",
        "desc": "Morning arrival in Da Lat. Cable car ride over pine forests to Truc Lam Monastery, boat ride on Tuyen Lam Lake, alpine coaster descent to Datanla Waterfall, and evening Night Market stroll.",
        "morning": "08:30 meet your guide in Da Lat. Board the Robin Hill cable car for a panoramic ride above pine forests. Arrive at Truc Lam Zen Monastery, surrounded by manicured bonsai gardens. Walk down to tranquil Tuyen Lam Lake for a brief wooden boat cruise.",
        "afternoon": "Enjoy lunch featuring highland artichoke soup and grilled pork skewers. In the afternoon, head to Datanla Waterfall. Board the self-controlled alpine coaster winding through pine ravines to the roaring waterfall base. Check into your boutique colonial villa hotel.",
        "evening": "Wrap up warm for an evening stroll through the buzzing Da Lat Night Market. Taste local street food: Banh Trang Nuong (\"Vietnamese pizza\"), grilled corn, avocado ice cream, and steaming hot soy milk.",
        "meals": "Highland Specialty Lunch & Dinner",
        "accommodation": "Boutique French-Colonial Villa Hotel in Da Lat (e.g. Ana Mandara or Du Parc)",
        "highlights": [
          "Robin Hill cable car",
          "Truc Lam Zen Monastery",
          "Datanla alpine coaster",
          "Da Lat Night Market"
        ]
      },
      {
        "day": 2,
        "title": "The Surreal Crazy House, Coffee Plantation & Return",
        "desc": "Morning exploration of the fairy-tale Crazy House, visit historic French railway station, tour an Arabica coffee farm, and transfer to airport/station.",
        "morning": "Breakfast amidst crisp mountain air. Explore the whimsical architectural wonderland of Crazy House (Hang Nga Guesthouse), navigating branch-like bridges, spiderweb windows, and animal-themed rooms. Visit the French-built 1938 Da Lat Railway Station.",
        "afternoon": "Visit a specialty high-altitude Arabica coffee plantation overlooking green valleys. Learn about bean cultivation in volcanic soil and enjoy a pour-over tasting. Stroll through a high-tech strawberry garden before transfer to Lien Khuong Airport (DLI) or bus station.",
        "evening": "Tour concludes with airport drop-off by 16:30.",
        "meals": "Breakfast & Lunch",
        "accommodation": "None (Tour concludes in Da Lat)",
        "highlights": [
          "Crazy House surreal architecture",
          "Historic Da Lat Railway Station",
          "Arabica coffee farm tasting"
        ]
      }
    ],
    "included": [
      "1 night accommodation in a boutique French-colonial villa hotel in Da Lat",
      "Private air-conditioned vehicle for all transfers and sightseeing",
      "Robin Hill cable car ticket and Datanla Waterfall round-trip alpine coaster pass",
      "All entrance admissions: Truc Lam, Tuyen Lam Lake boat, Datanla, Crazy House, and Station",
      "All meals: 1 breakfast, 2 lunches, 1 dinner",
      "Artisanal Arabica coffee tasting and strawberry farm visit",
      "Professional English-speaking guide throughout"
    ],
    "excluded": [
      "Flights to/from Da Lat (Lien Khuong Airport DLI)",
      "Personal drinks, cocktails, and night market purchases",
      "Tips for tour guide and driver"
    ],
    "pleaseNote": [
      "Da Lat is 10-15°C cooler than Saigon and coastal cities; nighttime temperatures often drop to 12-15°C. A warm jacket or fleece is mandatory.",
      "Moderate walking and stair climbing at Crazy House and Datanla waterfall."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Chilly Alpine Evenings",
        "detail": "Nights are crisp and cold. Pack sweaters, scarves, and warm jackets, especially if visiting between November and February."
      },
      {
        "category": "fitness",
        "title": "Crazy House Navigation",
        "detail": "Crazy House features narrow winding staircases and open suspension bridges without high railings. Watch your step and wear comfortable flat shoes."
      }
    ],
    "whatToBring": "Warm jacket, sweater or cardigan (essential for evenings), comfortable walking sneakers, sunglasses, camera, and cash for night market street food.",
    "whatToBringList": [
      "Warm jacket, fleece, or sweater for crisp evenings (12-15°C)",
      "Comfortable sneakers with rubber grip for stairs and paths",
      "Sun hat and UV sunglasses (high UV at 1,500m elevation)",
      "Camera or smartphone with plenty of storage",
      "Small cash (VND) for night market snacks and coffee"
    ],
    "whatToBringGroups": [
      {
        "category": "Warm Apparel",
        "items": [
          "Warm jacket / fleece",
          "Sweater / cardigan",
          "Walking sneakers"
        ]
      },
      {
        "category": "Sun & Essentials",
        "items": [
          "Sunglasses & sunscreen",
          "Camera / phone",
          "VND cash"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Emilie R.",
        "country": "France",
        "rating": 5,
        "text": "Da Lat feels so wonderfully different from the rest of Vietnam! The pine trees, the cool air, the alpine coaster... Crazy House was bizarre and fascinating.",
        "date": "Sep 2026"
      },
      {
        "name": "Minh T.",
        "country": "Vietnam",
        "rating": 5,
        "text": "Great pacing, lovely boutique hotel, and our guide knew the best coffee spots.",
        "date": "Jul 2026"
      }
    ]
  },
  {
    "id": 22,
    "title": "Mui Ne Sand Dunes & Coastal Fishing Village — 1 Day",
    "subtitle": "Ride 4x4 Jeeps across sunrise dunes, wade the red canyon of Fairy Stream & visit fishing bays",
    "image": "/images/tours/mui-ne-dunes.jpg",
    "gallery": [
      "/images/tours/mui-ne-dunes.jpg",
      "/images/tours/mui-ne-white-dunes.jpg",
      "/images/tours/phu-quoc-fishing-village.jpg",
      "/images/destinations/da-nang.jpg"
    ],
    "rating": 4.8,
    "reviews": 476,
    "description": "Experience Vietnam's remarkable miniature desert: watch the sunrise over the vast White Sand Dunes in an open-top vintage Jeep, wade barefoot through the crimson waters of the Fairy Stream canyon, and photograph hundreds of colorful fishing boats.",
    "longDescription": "Mui Ne is an astonishing geological anomaly on Vietnam's southeastern coast: a miniature Sahara of colossal shifting sand dunes set directly beside the roaring waves of the East Sea.\n\n**The Sunrise Desert Safari:** On this exhilarating open-air 4x4 vintage Jeep safari, arrive at the vast White Sand Dunes (Bàu Trắng) just before dawn. As the first golden rays illuminate the windswept sand crests framing a freshwater lake filled with pink lotus blossoms, feel the thrill of quad biking or sandboarding down massive golden slopes.\n\n**Canyons & Harbours:** Wade barefoot through the cool, ankle-deep waters of the Fairy Stream (Suối Tiên) winding through a miniature red canyon of fiery clay and white limestone pillars, and photograph hundreds of colorful traditional wooden boats and round coracles bobbing in the morning swell at Mui Ne's bustling fishing harbour.",
    "duration": "Half day (5 hours, early sunrise departure)",
    "groupSize": "8 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy (Fun jeep safari & barefoot stream walk)",
    "price": 0,
    "region": "south",
    "experienceType": "4x4 Desert Jeep Safari",
    "bookingAdvance": "Cut off: 12 hours",
    "bestSeason": "November to April (sunny, dry, breezy with minimal rain)",
    "startEndLocation": "Mui Ne Resort – White Dunes – Red Dunes – Fairy Stream – Fishing Harbour – Return",
    "categories": [
      "Desert Dunes",
      "4x4 Jeep Safari",
      "Sunrise Adventure",
      "Coastal Harbor"
    ],
    "highlights": [
      "Sunrise safari in an open-top vintage 4x4 Jeep along the scenic coastal highway",
      "Watch dawn break over the colossal White Sand Dunes (Bau Trang) and Lotus Lake",
      "Thrill ride: 4x4 quad biking and sandboarding down massive golden dunes",
      "Walk barefoot through the cool waters of the Fairy Stream (Suoi Tien) red rock canyon",
      "Panoramic overlook of Mui Ne Fishing Village filled with hundreds of colorful round coracles",
      "Explore the amber curves of the Red Sand Dunes overlooking the ocean"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Vintage Jeep Sunrise Safari, Sand Dunes & Fairy Stream",
        "desc": "04:30 open Jeep pickup, witness sunrise over the White Sand Dunes, sandboard, visit the fishing harbour, walk barefoot along the Fairy Stream canyon, and return for breakfast.",
        "morning": "04:30 early morning pickup from your Mui Ne resort in an open-top vintage 4x4 Jeep. Cruise along the dark coastal highway to the White Sand Dunes (Bau Trang). Watch the spectacular sunrise illuminate the rolling dunes and Lotus Lake. Enjoy optional ATV quad biking across the dunes or slide down on sandboards.",
        "afternoon": "06:30 drive to the Red Sand Dunes for sweeping ocean views and amber sand photography. Stop at the Mui Ne Fishing Harbour overlook, watching fishermen unload their nocturnal catch of squid, crabs, and fish from round woven coracle boats. Next, take off your shoes to walk barefoot 1.5 km along the cool sandy bed of the Fairy Stream (Suoi Tien), flanked by red clay cliffs and green palms.",
        "evening": "Return to your resort by 09:30 in time for morning resort breakfast and beach relaxation.",
        "meals": "Fresh Coconut Water & Snacks",
        "accommodation": "None (Half-day safari concludes in Mui Ne)",
        "highlights": [
          "White Sand Dunes sunrise",
          "4x4 quad biking",
          "Mui Ne fishing harbour overlook",
          "Fairy Stream barefoot walk"
        ]
      }
    ],
    "included": [
      "Private or small-group open-top vintage 4x4 Jeep transportation throughout",
      "English-speaking Jeep driver and safari guide",
      "All entrance admissions to White Sand Dunes, Red Sand Dunes, and Fairy Stream canyon",
      "Sandboarding sliding boards and safety instruction",
      "Fresh cold coconut water and bottled drinking water",
      "Resort pickup and drop-off in Mui Ne / Phan Thiet"
    ],
    "excluded": [
      "ATV Quad Bike rental fee at White Dunes (optional on site, ~300k VND)",
      "Tips for Jeep driver",
      "Personal expenses"
    ],
    "pleaseNote": [
      "The 04:30 departure is essential to arrive at the White Dunes before sunrise and beat the midday desert heat.",
      "Sand can easily get into closed shoes; sandals or flip-flops that are easy to take off are best."
    ],
    "importantNotes": [
      {
        "category": "weather",
        "title": "Early Morning Breeze & Sand",
        "detail": "The open Jeep ride before dawn is breezy; bring a light windbreaker or wrap. Sunglasses are crucial to protect eyes against blowing sand."
      },
      {
        "category": "fitness",
        "title": "Barefoot Stream Walk",
        "detail": "The Fairy Stream has ankle-deep, slow-moving clean water with a soft sandy bed. Walking barefoot is soothing and safe."
      }
    ],
    "whatToBring": "Sunglasses (crucial for wind/sand), slip-on sandals or flip-flops, light windbreaker for dawn ride, sunscreen, sun hat, and camera/phone with lens protector.",
    "whatToBringList": [
      "UV sunglasses (essential against blowing desert sand)",
      "Easy slip-on sandals or flip-flops",
      "Light windbreaker or hoodie for the pre-dawn open Jeep ride",
      "High-SPF sunscreen and wide-brim hat",
      "Camera or smartphone with secure wrist strap"
    ],
    "whatToBringGroups": [
      {
        "category": "Desert Apparel",
        "items": [
          "Light windbreaker for early dawn",
          "Slip-on sandals / flip-flops",
          "Comfortable shorts"
        ]
      },
      {
        "category": "Sun & Sand Protection",
        "items": [
          "UV sunglasses (mandatory for sand)",
          "Sun hat",
          "Sunscreen (SPF 50+)"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "12 hours"
      },
      {
        "percent": 50,
        "days": "1 day"
      },
      {
        "percent": 0,
        "days": "2 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Alex & Maria S.",
        "country": "Russia",
        "rating": 5,
        "text": "Riding the open Jeep at dawn was an adrenaline rush! The white dunes look like the Sahara. The Fairy Stream was surprisingly beautiful and refreshing.",
        "date": "Sep 2026"
      },
      {
        "name": "Chloe L.",
        "country": "United States",
        "rating": 5,
        "text": "Our Jeep driver was so friendly and took amazing photos of us on the dunes. A highlight of Mui Ne!",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 23,
    "title": "Can Tho Authentic Mekong Orchard Homestay — 2 Days",
    "subtitle": "Live with a welcoming river family, cook giant sizzling Banh Xeo & visit Cai Rang at sunrise",
    "image": "/images/tours/can-tho-mekong.jpg",
    "gallery": [
      "/images/tours/can-tho-mekong.jpg",
      "/images/tours/cai-rang-floating-market.jpg",
      "/images/tours/mekong-delta-boat.jpg",
      "/images/food/banh-xeo-mien-tay.jpg"
    ],
    "rating": 4.9,
    "reviews": 284,
    "description": "Immerse in genuine Mekong river life: stay in a traditional fruit-farmer family compound in Can Tho, cycle along motor-free canal paths, cook giant crispy Banh Xeo pancakes, and board private wooden boats to Cai Rang Floating Market at sunrise.",
    "longDescription": "Step away from commercial tourist routes and immerse yourself in the warm, generous rhythm of authentic Mekong Delta river life. Traveling deep into the rural canal networks of Can Tho, this 2-day homestay journey welcomes you into a family fruit-farming compound shaded by jackfruit, mango, and durian trees.\n\n**Authentic Rural Life:** Cycle along quiet village pathways without motor traffic, cross footbridges made of single bamboo trunks (cầu khỉ), learn how to harvest tropical fruits, and participate in an evening family kitchen cooking giant Mekong-style sizzling pancakes (Bánh Xèo).\n\n**The Sunrise River:** The next morning, experience Cai Rang floating market before tourist buses arrive, watching hundreds of wooden boats trade fruits in a colorful dawn symphony.",
    "duration": "2 days 1 night",
    "groupSize": "8 max",
    "language": "English, Vietnamese",
    "difficulty": "Easy",
    "price": 0,
    "region": "south",
    "experienceType": "Authentic Rural Homestay",
    "bookingAdvance": "Cut off: 48 hours",
    "bestSeason": "Year-round; fruit ripening season is June to September",
    "startEndLocation": "Ho Chi Minh City / Can Tho – Phong Dien Canals – Cai Rang – Return",
    "categories": [
      "Rural Homestay",
      "Village Cycling",
      "Cooking with Locals",
      "Floating Market"
    ],
    "highlights": [
      "Overnight in an authentic family fruit orchard eco-homestay along rural Can Tho canals",
      "Bicycle along car-free village paths past coconut groves, lotus ponds, and fruit farms",
      "Hands-on evening cooking session making giant crispy Mekong Banh Xeo pancakes",
      "Private wooden boat departure directly from the homestay dock to Cai Rang Floating Market at dawn",
      "Taste fresh rambutan, mangosteen, and durian picked straight from orchard trees",
      "Communal home-cooked dinner with host family sharing stories and warm rice wine"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Saigon to Can Tho — Orchard Homestay, Cycling & Banh Xeo Cooking",
        "desc": "Morning drive to Can Tho, transfer by wooden boat to your orchard homestay, afternoon village cycling, fruit harvesting, and evening Banh Xeo cooking dinner with the host family.",
        "morning": "08:00 pickup from Ho Chi Minh City (or meet in Can Tho). Travel through scenic rice paddies. Transfer onto a small wooden boat navigating peaceful canals to your family-run orchard homestay in Phong Dien.",
        "afternoon": "Welcome home-cooked lunch featuring braised claypot fish (Ca Kho To) and sweet and sour fish soup. Leisurely bicycle ride along car-free shaded village paths, visiting local cottage workshops making tofu skin and hand-rolled incense.",
        "evening": "Return to the homestay to help the host family prepare dinner: pour and fry giant crispy Mekong Banh Xeo pancakes on wood-fired clay stoves. Dine under fruit trees with your hosts, sipping warm rice wine.",
        "meals": "Lunch & Family Homestay Dinner",
        "accommodation": "Private Riverside Room in Authentic Orchard Homestay (En-suite bath, hot shower & mosquito net)",
        "highlights": [
          "Canal boat arrival",
          "Village bicycle ride",
          "Banh Xeo cooking masterclass",
          "Orchard dinner"
        ]
      },
      {
        "day": 2,
        "title": "Cai Rang Dawn Floating Market & Return to Saigon",
        "desc": "Sunrise boat departure directly from the homestay dock to Cai Rang Floating Market, floating breakfast, visit noodle workshop and organic cocoa farm, and return to Saigon.",
        "morning": "05:45 board the host's wooden boat directly from the dock. Cruise into Cai Rang Floating Market at peak trading hour. Pull alongside a floating vendor boat for hot Hu Tiu noodle soup and fresh coconut water. Visit an artisanal rice noodle factory and stroll through an organic cocoa farm to taste raw chocolate.",
        "afternoon": "Return to the homestay for a farewell lunch. Pack up and board private transport for the comfortable drive back to Ho Chi Minh City.",
        "evening": "Arrive in Saigon around 17:30. Drop-off at your hotel.",
        "meals": "Floating Market Breakfast & Lunch",
        "accommodation": "None (Tour concludes in Saigon / Can Tho)",
        "highlights": [
          "Sunrise dock departure",
          "Cai Rang floating market",
          "Cocoa plantation visit",
          "Saigon return"
        ]
      }
    ],
    "included": [
      "Round-trip private air-conditioned transport between Ho Chi Minh City and Can Tho",
      "1 night accommodation in a private riverside room in an authentic orchard homestay",
      "All meals: 1 breakfast, 2 lunches, 1 dinner with the host family",
      "Bicycle rental for village exploring and wooden boat canal transfers",
      "Private wooden boat for Cai Rang Floating Market dawn safari and breakfast",
      "All entrance permits, fruit tastings, and workshop fees",
      "Dedicated English-speaking guide throughout"
    ],
    "excluded": [
      "Beverages outside complimentary tea and water",
      "Personal purchases of fruits or cocoa",
      "Tips for tour guide, driver, and homestay hosts"
    ],
    "pleaseNote": [
      "Homestay rooms are clean, private, comfortable, and fan-cooled with en-suite modern bathrooms, hot water showers, and mosquito nets.",
      "Village cycling is on flat, quiet paved trails suitable for any basic rider."
    ],
    "importantNotes": [
      {
        "category": "health",
        "title": "Mosquito Protection",
        "detail": "Lush tropical fruit gardens attract mosquitoes around dusk. We provide mosquito nets, and personal repellent is strongly recommended for evenings."
      },
      {
        "category": "etiquette",
        "title": "Rural Vietnamese Hospitality",
        "detail": "Your hosts treat you like visiting family. Removing shoes before entering rooms is customary."
      }
    ],
    "whatToBring": "Light breathable clothing, slip-on sandals, comfortable sneakers for cycling, insect repellent (essential), sun hat, sunscreen, and camera.",
    "whatToBringList": [
      "Lightweight breathable cotton or linen clothing",
      "Comfortable sneakers for cycling and slip-on sandals",
      "DEET insect repellent (crucial for orchard evenings)",
      "Sun hat, UV sunglasses, and sunscreen",
      "Camera or smartphone with charger"
    ],
    "whatToBringGroups": [
      {
        "category": "Apparel & Shoes",
        "items": [
          "Breathable cotton clothes",
          "Cycling sneakers",
          "Slip-on sandals"
        ]
      },
      {
        "category": "Protection & Personal",
        "items": [
          "DEET insect repellent (essential)",
          "Sun hat & sunscreen",
          "Camera / phone"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "24 hours"
      },
      {
        "percent": 50,
        "days": "2 days"
      },
      {
        "percent": 25,
        "days": "3 days"
      },
      {
        "percent": 0,
        "days": "7 days"
      }
    ],
    "reviewsList": [
      {
        "name": "Paul & Claire M.",
        "country": "France",
        "rating": 5,
        "text": "This was the true Vietnam we were looking for. The family was incredibly kind, making Banh Xeo with them was a blast, and seeing the floating market at sunrise was magical.",
        "date": "Sep 2026"
      },
      {
        "name": "Rachel K.",
        "country": "United States",
        "rating": 5,
        "text": "Best experience of our trip. Beautiful orchard, comfortable rooms, delicious food, and wonderful hosts.",
        "date": "Aug 2026"
      }
    ]
  },
  {
    "id": 24,
    "title": "Vietnam Grand Odyssey — North to South Heritage Expedition — 7 Days",
    "subtitle": "The definitive trans-Vietnam journey linking Hanoi, Ha Long, Hue, Hoi An, Saigon & the Mekong",
    "image": "/images/tours/halong-bay-cruise.jpg",
    "gallery": [
      "/images/tours/halong-bay-cruise.jpg",
      "/images/tours/ninh-binh-trang-an.jpg",
      "/images/tours/hue-imperial-city.jpg",
      "/images/tours/hoi-an-ancient-town.jpg",
      "/images/tours/cu-chi-tunnels.jpg",
      "/images/tours/cai-rang-floating-market.jpg"
    ],
    "rating": 5.0,
    "reviews": 648,
    "description": "The definitive 7-day journey across Vietnam: sleep aboard a luxury cruise in Ha Long Bay, walk the imperial palaces of Hue and lantern streets of Hoi An, explore Cu Chi Tunnels, and cruise the Mekong Delta.",
    "longDescription": "The definitive grand journey across Vietnam. Spanning 1,800 kilometers from the thousand-year-old French-colonial avenues of Hanoi and the mystical limestone karsts of Ha Long Bay, across the royal imperial citadels and lantern-lit ancient trading ports of Central Vietnam, to the gleaming modern skyline of Saigon and the life-giving waterways of the Mekong Delta.\n\n**Seamless Trans-Vietnam Odyssey:** Curated for discerning travelers who want to experience the complete soul, geography, history, and cuisine of Vietnam in a single seamless, luxurious week. Includes two efficient domestic flights to eliminate road fatigue, boutique heritage hotels, private guides, and handpicked local dining.\n\n**Unforgettable Highlights:** Sleep aboard a luxury boutique cruise ship among thousands of karst towers in Ha Long Bay, taste imperial banquet dishes in Hue, drift on candlelit waters in Hoi An, crawl into history at Cu Chi, and row beneath water coconut canopies in the Mekong.",
    "duration": "7 days 6 nights",
    "groupSize": "10 max",
    "language": "English, French, Vietnamese",
    "difficulty": "Easy to Moderate",
    "price": 0,
    "region": "all",
    "experienceType": "Nationwide Grand Expedition",
    "bookingAdvance": "Cut off: 72 hours",
    "bestSeason": "September to April (ideal conditions across all three regions)",
    "startEndLocation": "Hanoi (HAN) – Ha Long – Hue – Hoi An – Ho Chi Minh City (SGN) – Mekong",
    "categories": [
      "Grand Tour",
      "UNESCO Heritage",
      "Luxury Cruise",
      "Trans-Vietnam"
    ],
    "highlights": [
      "Overnight luxury boutique cruise among the limestone karsts and caves of Ha Long Bay",
      "Guided walking food tour through the 36 guild streets of Hanoi Old Quarter",
      "Explore the UNESCO Imperial Citadel and Khai Dinh's porcelain mosaic tomb in Hue",
      "Scenic drive across the legendary Hai Van Pass into Hoi An Ancient Town",
      "Twilight lantern boat cruise on the Thu Bon River and My Son Sanctuary Cham ruins",
      "Historical exploration of Cu Chi underground tunnels and full-day Mekong Delta river safari"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi Arrival & Old Quarter Heritage Walking Safari",
        "desc": "Arrive in Hanoi. Check into your boutique Old Quarter hotel. Afternoon guided heritage walking tour of Sword Lake, ancient guild streets, and legendary egg coffee tasting. Welcome dinner.",
        "morning": "Private airport transfer from Noi Bai International Airport (HAN) to your 4-star boutique hotel in Hanoi Old Quarter. Refresh and settle in.",
        "afternoon": "Meet your guide for a walking tour of the Old Quarter: visit Hoan Kiem Lake, Ngoc Son Temple, and narrow artisan alleys. Stop at a vintage cafe for authentic Hanoi Egg Coffee (Ca Phe Trung).",
        "evening": "Welcome dinner featuring northern specialties: Bun Cha, crispy crab spring rolls, and banana blossom salad. Evening stroll around the Old Quarter.",
        "meals": "Welcome Dinner",
        "accommodation": "Boutique 4-Star Hotel in Hanoi Old Quarter (e.g. La Siesta Classic)",
        "highlights": [
          "Hanoi arrival",
          "Hoan Kiem Lake",
          "Egg coffee tasting",
          "Welcome banquet"
        ]
      },
      {
        "day": 2,
        "title": "Hanoi to Ha Long Bay Luxury Boutique Cruise",
        "desc": "Express limousine transfer to Ha Long Bay. Embark on a luxury boutique wooden cruiser, sail past thousands of karst islands, kayak in hidden lagoons, and enjoy a seafood banquet under the stars.",
        "morning": "08:30 private limousine transfer from Hanoi to Tuan Chau Pier. Board the luxury cruiser with a welcome drink. Cruise past Fighting Cock Islet and Incense Burner.",
        "afternoon": "Multi-course fresh seafood lunch while gliding into the bay. Afternoon sea kayaking through Luon Cave into a secluded lagoon. Ascend to Sung Sot (Surprise) Cave to marvel at giant stalactites.",
        "evening": "Sunset cocktails on the open deck. Chef-guided cooking demonstration followed by a candlelit seafood dinner. Evening squid fishing or stargazing.",
        "meals": "Breakfast, Seafood Lunch & Dinner",
        "accommodation": "Deluxe Balcony Ocean-View Cabin on Cruise Vessel",
        "highlights": [
          "Ha Long Bay sailing",
          "Luon Cave kayaking",
          "Sung Sot Cave",
          "Sunset deck dinner"
        ]
      },
      {
        "day": 3,
        "title": "Ha Long Sunrise to Flight to Hue Imperial City",
        "desc": "Sunrise Tai Chi on deck, summit hike on Ti Top Island, brunch buffet, transfer to Hanoi Airport for a 1-hour flight to Hue, and evening Perfume River dragon boat cruise.",
        "morning": "06:15 Tai Chi on the sundeck. Visit Ti Top Island for 360-degree panoramic bay views or a beach swim. Farewell brunch buffet while cruising back to harbour.",
        "afternoon": "Disembark at 11:30. Private transfer directly to Hanoi Airport for a short domestic flight to Hue. Arrive in Hue and transfer to your riverside boutique hotel.",
        "evening": "Evening royal dragon boat cruise along the Perfume River to Thien Mu Pagoda. Royal Hue specialty dinner.",
        "meals": "Light Breakfast, Cruise Brunch & Hue Dinner",
        "accommodation": "Boutique Riverside Hotel in Hue (e.g. Pilgrimage Village)",
        "highlights": [
          "Sunrise Tai Chi",
          "Ti Top Island summit",
          "Flight to Hue",
          "Perfume River dragon boat"
        ]
      },
      {
        "day": 4,
        "title": "Hue Imperial Citadel to Hai Van Pass & Hoi An Lanterns",
        "desc": "Morning exploration of the Imperial Citadel and Khai Dinh's mosaic tomb, scenic coastal drive over the Hai Van Pass into Hoi An, and evening lantern boat release.",
        "morning": "08:00 guided tour of the UNESCO Imperial Citadel (Dai Noi), Noon Gate, and Forbidden Purple City. Visit the extraordinary mountaintop mosaic tomb of Emperor Khai Dinh.",
        "afternoon": "Drive south over the legendary Hai Van Pass, stopping at the summit for sweeping ocean views over Lang Co Bay. Descend into Da Nang and arrive in Hoi An. Check into boutique resort.",
        "evening": "Walking tour through Hoi An Ancient Town: Japanese Covered Bridge and Chinese assembly halls. Board a wooden riverboat on the Thu Bon River to release a floating lantern. Riverside dinner.",
        "meals": "Breakfast, Lunch & Dinner",
        "accommodation": "Boutique Garden Resort in Hoi An (e.g. Mulberry Collection)",
        "highlights": [
          "Imperial Citadel",
          "Khai Dinh mosaic tomb",
          "Hai Van Pass summit",
          "Hoi An lantern boat"
        ]
      },
      {
        "day": 5,
        "title": "My Son Sanctuary & Cam Thanh Coconut Basket Boats",
        "desc": "Morning excursion to ancient Cham temples at My Son Sanctuary, afternoon basket boat ride in Cam Thanh coconut forest, and free evening in Hoi An.",
        "morning": "08:00 morning trip to the 8th-century Hindu red-brick ruins of My Son Sanctuary in a lush jungle valley. Watch a live Cham Apsara cultural dance performance. Return to Hoi An for lunch.",
        "afternoon": "Experience the spinning bamboo basket boats in Bay Mau water coconut forest. Free late afternoon to explore tailor shops, relax by the resort pool, or visit An Bang Beach.",
        "evening": "Dinner at leisure to explore Hoi An's culinary scene.",
        "meals": "Breakfast & Lunch",
        "accommodation": "Boutique Garden Resort in Hoi An",
        "highlights": [
          "My Son Sanctuary",
          "Cham dance show",
          "Coconut basket boat ride"
        ]
      },
      {
        "day": 6,
        "title": "Flight to Ho Chi Minh City & Cu Chi Tunnels Exploration",
        "desc": "Morning flight from Da Nang to Saigon. Afternoon exploration of the historic Cu Chi underground guerrilla tunnels, and evening landmark city tour.",
        "morning": "Breakfast at the resort. Transfer to Da Nang Airport for a 1-hour flight to Ho Chi Minh City. Arrive in Saigon, meet your southern guide, and enjoy a traditional lunch.",
        "afternoon": "Drive to Cu Chi Tunnels. Explore underground kitchens, trapdoors, and crawl through authentic widened tunnel sections. Return to Saigon; view the Central Post Office and Notre-Dame Cathedral.",
        "evening": "Farewell rooftop dinner overlooking the illuminated skyline of Ho Chi Minh City.",
        "meals": "Breakfast, Lunch & Rooftop Farewell Dinner",
        "accommodation": "4-Star Boutique Hotel in District 1, Ho Chi Minh City",
        "highlights": [
          "Flight to Saigon",
          "Cu Chi Tunnels underground",
          "French colonial landmarks",
          "Rooftop dinner"
        ]
      },
      {
        "day": 7,
        "title": "Mekong Delta River Safari & Departure",
        "desc": "Full-day Mekong Delta river excursion: cruise past island orchards, row through coconut palm canals, taste honey and fruits, and transfer to Tan Son Nhat Airport.",
        "morning": "08:00 depart Saigon for My Tho in the Mekong Delta. Private motorized boat cruise on the Tien River past floating fish farms. Visit a honeybee orchard for warm honey tea.",
        "afternoon": "Row through lush palm-shaded tributary canals in traditional wooden sampans. Enjoy a traditional lunch featuring deep-fried Elephant Ear Fish. Return to Ho Chi Minh City.",
        "evening": "Transfer directly to Tan Son Nhat International Airport (SGN) for your departure flight. Tour concludes.",
        "meals": "Breakfast & Mekong Garden Lunch",
        "accommodation": "None (Grand expedition concludes in Saigon)",
        "highlights": [
          "Mekong River boat cruise",
          "Palm canal rowboat",
          "Elephant Ear fish lunch",
          "Airport farewell"
        ]
      }
    ],
    "included": [
      "6 nights luxury accommodation: 1 night Hanoi, 1 night Ha Long Bay Cruise, 1 night Hue, 2 nights Hoi An, 1 night Saigon",
      "2 domestic flights: Hanoi to Hue & Da Nang to Ho Chi Minh City (including 20kg checked luggage)",
      "All private ground transfers in modern air-conditioned luxury vehicles",
      "All-inclusive Ha Long Bay luxury cruise stateroom with private balcony and kayaking",
      "All heritage entrance tickets and national park admissions throughout",
      "Private boat excursions: Ha Long, Perfume River, Thu Bon lantern boat, Cam Thanh, and Mekong",
      "All meals specified: 6 breakfasts, 6 lunches, 5 dinners (including welcome & farewell banquets)",
      "Dedicated professional English-speaking guides in each region"
    ],
    "excluded": [
      "International flights to Hanoi and from Ho Chi Minh City",
      "Day 5 dinner at leisure in Hoi An",
      "Personal bar drinks, spa treatments, and laundry",
      "Tips for tour guides, drivers, and boat crews"
    ],
    "pleaseNote": [
      "Includes 2 short, efficient domestic flights with checked luggage, minimizing transit fatigue.",
      "Travelers will experience temperate northern weather, central coastal sunshine, and southern tropical warmth; layered packing is recommended.",
      "Modest clothing covering shoulders and knees is required for temples and tombs."
    ],
    "importantNotes": [
      {
        "category": "general",
        "title": "Multi-Region Luggage Transfer",
        "detail": "Domestic flight baggage allowance of 20 kg checked + 7 kg carry-on is included for all travelers. Luggage is handled smoothly by private drivers at every destination."
      },
      {
        "category": "weather",
        "title": "Climate Across 3 Regions",
        "detail": "Northern Vietnam can be cool in autumn/winter (15–22°C), while Central and Southern Vietnam are consistently warm (26–32°C). Layered clothing covers all regions."
      }
    ],
    "whatToBring": "Mix of light breathable clothes and a light jacket/sweater for northern season, comfortable walking sneakers and sandals, modest temple attire, swimwear, sunscreen, sunglasses, and camera.",
    "whatToBringList": [
      "Mix of lightweight clothes and a light jacket/fleece for northern breezes",
      "Modest clothing covering shoulders and knees for temples and citadels",
      "Comfortable broken-in walking sneakers and casual sandals",
      "Swimwear for Ha Long Bay and resort pools",
      "Sun hat, UV sunglasses, and sunscreen (SPF 50+)",
      "Insect repellent for Mekong Delta",
      "Original passport valid for at least 6 months"
    ],
    "whatToBringGroups": [
      {
        "category": "Multi-Region Wardrobe",
        "items": [
          "Light jacket / fleece for North",
          "Breathable tropical clothes for South",
          "Modest temple outfit",
          "Walking sneakers & sandals",
          "Swimwear"
        ]
      },
      {
        "category": "Sun & Health",
        "items": [
          "Sun hat & UV sunglasses",
          "Sunscreen (SPF 50+)",
          "Insect repellent",
          "Personal medications"
        ]
      },
      {
        "category": "Documents & Tech",
        "items": [
          "Passport valid > 6 months",
          "Phone & camera chargers",
          "Power bank",
          "VND cash"
        ]
      }
    ],
    "cancellation": [
      {
        "percent": 75,
        "days": "7 days"
      },
      {
        "percent": 50,
        "days": "14 days"
      },
      {
        "percent": 25,
        "days": "21 days"
      },
      {
        "percent": 0,
        "days": "30 days"
      }
    ],
    "reviewsList": [
      {
        "name": "David & Catherine H.",
        "country": "Australia",
        "rating": 5,
        "text": "The single best holiday we have ever had. In one week we saw everything from Ha Long Bay to Hoi An and the Mekong. Every detail was seamless.",
        "date": "Sep 2026"
      },
      {
        "name": "Elena M.",
        "country": "Spain",
        "rating": 5,
        "text": "Flawless organization, incredible hotels, wonderful local food, and amazing guides. Highly recommend to anyone visiting Vietnam for the first time!",
        "date": "Aug 2026"
      }
    ]
  }
];

export const getTourById = (id: number): Tour | undefined => tours.find((t) => t.id === id);
