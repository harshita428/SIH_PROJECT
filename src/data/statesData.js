/**
 * Detailed Cultural, Architectural & Gameplay Data for Selectable States
 * Designed for Kalachakra EdTech Portal with NEP 2020 alignment.
 */

export const statesData = {
  'rajasthan': {
    id: 'rajasthan',
    mapId: 'INRJ',
    name: 'Rajasthan',
    nativeName: 'राजस्थान',
    capital: 'Jaipur',
    region: 'North-West',
    tagline: 'The Land of Kings, Golden Fortresses & Vibrant Folklore',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'A desert realm of chivalrous Rajput warrior clans, magnificent hill forts, subterranean stepwells, and radiant folk arts.',
    fullIntro: 'Rajasthan is synonymous with royal heritage, desert romanticism, and architectural grandeur. From the pink sandstone facades of Hawa Mahal to the impenetrable bastions of Mehrangarh and Kumbhalgarh, every stone echoes tales of courage, artistic mastery, and ingenious desert hydrology.',
    stats: {
      heritageSites: '6 UNESCO Hill Forts',
      folkDances: 'Ghoomar & Kalbelia',
      famousCraft: 'Blue Pottery & Bandhani',
      climateZone: 'Thar Desert & Aravalli Hills'
    },
    culturalHub: {
      introduction: 'Rajasthan is synonymous with royal heritage, desert romanticism, and architectural grandeur. From the pink sandstone facades of Hawa Mahal to the impenetrable bastions of Mehrangarh and Kumbhalgarh, every stone echoes tales of courage, artistic mastery, and ingenious desert hydrology.',
      culture: {
        title: 'Culture & Traditions',
        summary: 'Rajasthani culture celebrates chivalry, vibrant folk arts, and desert hospitality through music, dance, and colorful festivals.',
        highlights: [
          'Ghoomar and Kalbelia — UNESCO-inscribed folk dances of the desert',
          'Pushkar Fair and Desert Festival — iconic cultural gatherings',
          'Rajput warrior ethos of honor, poetry, and courtly traditions',
          'Marwari and Mewari folk music with Kamayacha and Ravanahatha instruments'
        ]
      },
      history: {
        title: 'History',
        summary: 'From Rajput kingdoms to Mughal alliances, Rajasthan\'s history is etched in hill forts, stepwells, and royal chronicles spanning over a millennium.',
        highlights: [
          'Six UNESCO Hill Forts of the Rajput clans (Chittorgarh, Kumbhalgarh, Amer, and more)',
          'Medieval Rajput resistance and alliances with Mughal emperors',
          'Sawai Jai Singh II\'s 18th-century astronomical observatories at Jantar Mantar',
          'Desert hydrology innovations — baolis, johads, and tankas for water conservation'
        ]
      },
      food: {
        title: 'Cuisine',
        summary: 'Rajasthani cuisine adapts to the arid Thar Desert with rich, spice-laden dishes, dried lentils, and ghee-based sweets.',
        highlights: [
          'Dal Baati Churma — the iconic desert meal of lentils, baked wheat balls, and sweet crumble',
          'Laal Maas — fiery mutton curry with Mathania red chilies',
          'Ghevar and Mawa Kachori — festive sweets from Jaipur and Jodhpur',
          'Ker Sangri — a unique desert vegetable pickle native to Marwar'
        ]
      },
      artCrafts: {
        title: 'Art & Crafts',
        summary: 'Rajasthan\'s artisans are masters of miniature painting, block printing, pottery, and intricate jewelry craftsmanship.',
        highlights: [
          'Blue Pottery of Jaipur — Persian-influenced glazed ceramic art',
          'Bandhani and Leheriya — tie-dye textile traditions of Sanganer',
          'Miniature paintings of the Mewar and Marwar schools',
          'Meenakari enamel jewelry and Kundan stone-setting from Jaipur'
        ]
      },
      famousPlaces: {
        title: 'Famous Places',
        summary: 'Rajasthan\'s landscape is dotted with legendary forts, palaces, and desert dunes that draw millions of heritage seekers.',
        places: [
          { name: 'Amer Fort, Jaipur', description: 'A magnificent hilltop palace with mirror halls, jali screens, and elephant-procession gateways.', tag: 'UNESCO', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80' },
          { name: 'Mehrangarh Fort, Jodhpur', description: 'One of India\'s largest forts, towering 125 meters above the Blue City with panoramic desert views.', tag: 'Fortress', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80' },
          { name: 'Jaisalmer Golden Fort', description: 'A living fort city rising from the Thar sands, built from honey-colored sandstone in 1156 CE.', tag: 'Desert', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80' }
        ]
      }
    },
    culturalHighlights: [
      {
        title: 'UNESCO Hill Forts',
        desc: 'Six monumental forts (Chittorgarh, Kumbhalgarh, Sawai Madhopur, Jhalawar, Amer, and Jaisalmer) showcasing Rajput military architecture and ingenious water harvesting.',
        icon: 'Castle'
      },
      {
        title: 'Stepwells (Baolis)',
        desc: 'Architectural hydraulic masterpieces like Chand Baori with 3,500 narrow steps arranged in flawless geometric symmetry down to the groundwater table.',
        icon: 'Layers'
      },
      {
        title: 'Folk Music & Kalbelia Dance',
        desc: 'Enchanting desert melodies driven by the Kamayacha and Ravanahatha, accompanying UNESCO-inscribed Kalbelia swirling serpent dance.',
        icon: 'Music'
      },
      {
        title: 'Astronomy at Jantar Mantar',
        desc: 'Sawai Jai Singh II’s 18th-century stone observatory containing the world’s largest stone sundial, measuring time to 2 seconds accuracy.',
        icon: 'Compass'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        caption: 'Hawa Mahal (Palace of Winds), Jaipur',
        tag: 'Architecture'
      },
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        caption: 'Mehrangarh Citadel, Jodhpur',
        tag: 'Fortress'
      },
      {
        url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
        caption: 'Desert Caravans in Thar Dunes',
        tag: 'Culture'
      }
    ],
    games: {
      explore: {
        title: 'Explore Now',
        subtitle: 'Interactive Heritage Expedition',
        badge: 'Free Exploration',
        desc: 'Immerse yourself in high-definition 360° panoramas, interactive audio narratives, architectural blueprints of Amer Fort, and desert caravan chronicles.',
        features: [
          'Virtual walkthrough of Jaipur royal courtyards & jali screens',
          'Acoustic resonance recordings of Thar folk instruments',
          'Interactive architectural anatomy of Chand Baori stepwell',
          'Curriculum quest: Medieval Rajput governance & water science'
        ],
        ctaText: 'Start State Expedition',
        readyStatus: 'Exploration Modules Active'
      },
      puzzle: {
        title: 'Puzzle Game',
        subtitle: 'Jali & Fort Mosaic Reconstruction',
        badge: 'Logic & Spatial Quest',
        desc: 'Reassemble the geometric jali lattices of Amber Palace and the interlocking masonry of Mehrangarh Fort. Test your spatial reasoning against royal builders!',
        difficulty: ['Cadet (3x3)', 'Architect (4x4)', 'Master Builder (5x5)'],
        objectives: [
          'Piece together the 3,500-step symmetry of Chand Baori',
          'Restore the celestial dial of Vrihat Samrat Yantra',
          'Earn the Royal Shilpi (Architect) Golden Seal'
        ],
        ctaText: 'Launch Puzzle Challenge',
        readyStatus: 'Ready for Gameplay Implementation'
      },
      quiz: {
        title: 'Quiz Game',
        subtitle: 'Chronicles of Rajputana Trivia',
        badge: 'Curriculum Quiz (NEP Aligned)',
        desc: 'Test your knowledge on desert hydrology, Mughal-Rajput alliances, astronomical instruments of Jantar Mantar, and vibrant miniature painting styles.',
        rounds: '3 Rounds • 10 Questions • 500 Max XP',
        topics: [
          'Ingenious Rainwater Harvesting: Johads, Baolis & Tankas',
          'Chivalric Epochs of Rana Pratap & Mirabai',
          'Geographical Marvels of the Great Indian Thar'
        ],
        ctaText: 'Start Knowledge Quest',
        readyStatus: 'Question Banks Ready'
      },
      mystery: {
        title: 'Mystery Game',
        subtitle: 'The Secret Vault of Bhangarh & Amber',
        badge: 'Narrative Adventure',
        desc: 'An ancient scroll discovered beneath Jaigarh Fort hints at a forgotten astronomical secret buried before the siege of Chittor. Decipher royal riddles to uncover the lost compass.',
        caseFile: 'Case File #RJ-1727: "The Shadow of the Solar Needle"',
        cluesCount: '4 Relic Clues to Uncover',
        ctaText: 'Begin Mystery Investigation',
        readyStatus: 'Detective Dossier Loaded'
      }
    }
  },

  'tamil-nadu': {
    id: 'tamil-nadu',
    mapId: 'INTN',
    name: 'Tamil Nadu',
    nativeName: 'தமிழ்நாடு',
    capital: 'Chennai',
    region: 'South',
    tagline: 'Cradle of Dravidian Civilization, Monolithic Temples & Classical Arts',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1609766418204-94aae0ecfddc?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'Home to 2,000-year-old living Sangam literary traditions, monolithic granite vimanas, and timeless Carnatic rhythms.',
    fullIntro: 'Tamil Nadu represents one of humanity’s continuous classical civilizations. From the monumental interlocking granite tower of Thanjavur’s Brihadisvara Temple to the sea-kissed shore temples of Mamallapuram, Tamil culture seamlessly blends spiritual architectural precision with classical Bharatanatyam dance and deep maritime history.',
    stats: {
      heritageSites: 'Great Living Chola Temples',
      folkDances: 'Bharatanatyam & Karakattam',
      famousCraft: 'Tanjore Paintings & Kanchipuram Silk',
      climateZone: 'Coromandel Coast & Western Ghats'
    },
    culturalHub: {
      introduction: 'Tamil Nadu represents one of humanity\'s continuous classical civilizations. From the monumental interlocking granite tower of Thanjavur\'s Brihadisvara Temple to the sea-kissed shore temples of Mamallapuram, Tamil culture seamlessly blends spiritual architectural precision with classical Bharatanatyam dance and deep maritime history.',
      culture: {
        title: 'Culture & Traditions',
        summary: 'Tamil culture is one of the world\'s oldest living traditions, rooted in classical language, temple arts, and Dravidian aesthetics.',
        highlights: [
          'Bharatanatyam — ancient temple dance codifying mudras, adavus, and bhavas',
          'Pongal harvest festival and Tamil New Year (Puthandu) celebrations',
          'Karakattam folk dance and Therukoothu street theatre traditions',
          'Two millennia of Sangam Tamil literature and the moral aphorisms of Thirukkural'
        ]
      },
      history: {
        title: 'History',
        summary: 'From the Sangam age to the mighty Chola, Pallava, and Pandya dynasties, Tamil Nadu shaped South Indian civilization for over 2,000 years.',
        highlights: [
          'Sangam period (300 BCE–300 CE) — classical Tamil poetry and maritime trade',
          'Chola Empire — naval expeditions across Southeast Asia and Brihadisvara Temple (1010 CE)',
          'Pallava dynasty — monolithic rock-cut architecture at Mamallapuram',
          'Living Chola Temples inscribed as UNESCO World Heritage Sites'
        ]
      },
      food: {
        title: 'Cuisine',
        summary: 'Tamil cuisine balances rice, lentils, and coconut with distinctive spice blends, served on traditional banana leaves.',
        highlights: [
          'Chettinad cuisine — fiery pepper-based curries from the Karaikudi region',
          'Idli, Dosa, and Sambar — iconic breakfast staples of South India',
          'Filter Kaapi — strong decoction coffee served in steel tumbler and davara',
          'Pongal — sweet and savory rice-lentil dishes for the harvest festival'
        ]
      },
      artCrafts: {
        title: 'Art & Crafts',
        summary: 'Tamil Nadu\'s artisans excel in bronze casting, silk weaving, Tanjore painting, and temple sculpture.',
        highlights: [
          'Tanjore (Thanjavur) Paintings — gold-leaf devotional art on wooden panels',
          'Kanchipuram Silk Sarees — handwoven with temple-border motifs',
          'Chola Bronze Nataraja sculptures — lost-wax casting masterpieces',
          'Veena-making tradition of Thanjavur and stone carving at Mahabalipuram'
        ]
      },
      famousPlaces: {
        title: 'Famous Places',
        summary: 'Tamil Nadu\'s temples, beaches, and hill stations form a tapestry of spiritual and natural wonders.',
        places: [
          { name: 'Brihadisvara Temple, Thanjavur', description: 'A 1,000-year-old Chola granite vimana with an 80-tonne monolithic cupola — a UNESCO World Heritage Site.', tag: 'UNESCO', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80' },
          { name: 'Meenakshi Temple, Madurai', description: 'A sprawling Dravidian temple complex with 14 towering gopurams adorned with thousands of sculpted figures.', tag: 'Dravidian', image: 'https://images.unsplash.com/photo-1609766418204-94aae0ecfddc?auto=format&fit=crop&w=600&q=80' },
          { name: 'Mamallapuram Shore Temple', description: '7th-century Pallava rock-cut shrines carved from coastal granite cliffs overlooking the Bay of Bengal.', tag: 'Monolithic', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80' }
        ]
      }
    },
    culturalHighlights: [
      {
        title: 'Brihadisvara & Chola Architecture',
        desc: 'Built in 1010 CE without binding mortar; its 80-tonne granite monolithic cupola was elevated using a 4-mile inclined earthen ramp.',
        icon: 'Landmark'
      },
      {
        title: 'Mamallapuram Shore Sculptures',
        desc: '7th-century monolithic rock-cut shrines carved straight out of coastal cliffs under the maritime Pallava dynasty.',
        icon: 'Gem'
      },
      {
        title: 'Classical Bharatanatyam',
        desc: 'Ancient temple dance tradition codifying precise mudras (hand gestures), rhythmic footwork (adavus), and emotional bhavas.',
        icon: 'Sparkles'
      },
      {
        title: 'Sangam Tamil Literature',
        desc: 'Over two millennia of continuous linguistic heritage celebrating love, ethics (Thirukkural), astronomy, and maritime commerce across Southeast Asia.',
        icon: 'BookOpen'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        caption: 'Brihadisvara Vimana, Thanjavur',
        tag: 'UNESCO'
      },
      {
        url: 'https://images.unsplash.com/photo-1609766418204-94aae0ecfddc?auto=format&fit=crop&w=800&q=80',
        caption: 'Meenakshi Temple Gopurams, Madurai',
        tag: 'Dravidian'
      },
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        caption: 'Pancha Rathas, Mamallapuram',
        tag: 'Monolithic'
      }
    ],
    games: {
      explore: {
        title: 'Explore Now',
        subtitle: 'Living Temple & Maritime Odyssey',
        badge: 'Free Exploration',
        desc: 'Delve into the engineering genius of Rajaraja Chola, explore the acoustic halls of Madurai Meenakshi, and trace maritime spice routes to Sumatra.',
        features: [
          'Granite interlocking masonry 3D breakdown',
          'Nataraja cosmic dance symbolic visual decode',
          'Interactive Sangam poetry verses with English translations',
          'Curriculum quest: Pallava & Chola maritime trade networks'
        ],
        ctaText: 'Start State Expedition',
        readyStatus: 'Exploration Modules Active'
      },
      puzzle: {
        title: 'Puzzle Game',
        subtitle: 'The Monolithic Vimana Assembly',
        badge: 'Logic & Spatial Quest',
        desc: 'Fit together the zero-mortar interlocking granite blocks of Thanjavur Big Temple. Discover why this 1,000-year-old marvel survived multiple major earthquakes!',
        difficulty: ['Apprentice (3x3)', 'Sculptor (4x4)', 'Chola Sthapati (5x5)'],
        objectives: [
          'Align the interlocking tongue-and-groove granite slabs',
          'Position the 80-tonne crown cupola on the pinnacle',
          'Earn the Master Sthapati Architectural Badge'
        ],
        ctaText: 'Launch Puzzle Challenge',
        readyStatus: 'Ready for Gameplay Implementation'
      },
      quiz: {
        title: 'Quiz Game',
        subtitle: 'Sangam & Chola Navy Trivia Challenge',
        badge: 'Curriculum Quiz (NEP Aligned)',
        desc: 'Challenge your mastery of classical Tamil literature, temple hydraulic tanks, Rajendra Chola’s naval armada, and Dravidian gopuram sculptures.',
        rounds: '3 Rounds • 10 Questions • 500 Max XP',
        topics: [
          'Thirukkural moral aphorisms & scientific metaphors',
          'Chola naval expedition across the Bay of Bengal',
          'Dravidian granite sculpting techniques & iconography'
        ],
        ctaText: 'Start Knowledge Quest',
        readyStatus: 'Question Banks Ready'
      },
      mystery: {
        title: 'Mystery Game',
        subtitle: 'The Lost Bronze of Gangaikonda Cholapuram',
        badge: 'Narrative Adventure',
        desc: 'A secret cipher etched in Vatteluttu script on a granite column reveals clues to an unbroken Chola bronze lost during an ancient sea voyage. Solve the riddle!',
        caseFile: 'Case File #TN-1025: "The Riddle of the Tiger Flag"',
        cluesCount: '5 Relic Clues to Uncover',
        ctaText: 'Begin Mystery Investigation',
        readyStatus: 'Detective Dossier Loaded'
      }
    }
  },

  'telangana': {
    id: 'telangana',
    mapId: 'INTG',
    name: 'Telangana',
    nativeName: 'తెలంగాణ',
    capital: 'Hyderabad',
    region: 'South-Central',
    tagline: 'Heart of the Deccan, Acoustic Citadels & Kakatiya Splendor',
    heroImage: '/charminar-hero.jpg',
    bannerImage: '/charminar-hero.jpg',
    shortIntro: 'The legendary jewel of the Deccan plateau, famous for the acoustic engineering of Golconda and the UNESCO floating bricks of Ramappa.',
    fullIntro: 'Telangana connects northern and southern peninsular traditions with a vibrant syncretic culture. Birthplace of the world’s most celebrated diamonds including the Koh-i-Noor and Hope Diamond, Telangana mesmerizes visitors through the four-minaret symmetry of Charminar, the whispering galleries of Golconda, and the intricate geometric weaves of Pochampally.',
    stats: {
      heritageSites: 'Ramappa Temple (UNESCO)',
      folkDances: 'Perini Shiva Tandavam',
      famousCraft: 'Pochampally Ikat & Bidriware',
      climateZone: 'Deccan Semi-Arid Plateau'
    },
    culturalHub: {
      introduction: 'Telangana connects northern and southern peninsular traditions with a vibrant syncretic culture. Birthplace of the world\'s most celebrated diamonds including the Koh-i-Noor and Hope Diamond, Telangana mesmerizes visitors through the four-minaret symmetry of Charminar, the whispering galleries of Golconda, and the intricate geometric weaves of Pochampally.',
      culture: {
        title: 'Culture & Traditions',
        summary: 'Telangana blends Deccan Muslim and Telugu Hindu traditions into a unique syncretic cultural identity.',
        highlights: [
          'Perini Shiva Tandavam — ancient warrior dance revived from Kakatiya temple sculptures',
          'Bathukamma — floral festival celebrating womanhood with geometric flower stacks',
          'Bonalu — folk festival honoring Goddess Mahakali with processions and offerings',
          'Qutb Shahi and Nizami cultural legacy in Hyderabad\'s architecture and cuisine'
        ]
      },
      history: {
        title: 'History',
        summary: 'Telangana\'s history spans Kakatiya warrior queens, diamond-trading Deccan sultanates, and the princely state of Hyderabad.',
        highlights: [
          'Kakatiya dynasty (1163–1323 CE) — Ramappa Temple and Queen Rudrama Devi\'s reign',
          'Golconda Fort — diamond capital where Koh-i-Noor and Hope Diamond were mined',
          'Qutb Shahi dynasty — Charminar and Hyderabad\'s founding in 1591 CE',
          'Ramappa Temple inscribed as UNESCO World Heritage Site in 2021'
        ]
      },
      food: {
        title: 'Cuisine',
        summary: 'Hyderabadi cuisine is famed for its Nizami biryanis, slow-cooked gravies, and Deccan spice blends.',
        highlights: [
          'Hyderabadi Biryani — layered basmati rice and marinated meat in dum pukht style',
          'Haleem — slow-cooked wheat and meat stew, a Ramadan specialty',
          'Mirchi ka Salan and Bagara Baingan — iconic biryani accompaniments',
          'Double ka Meetha and Qubani ka Meetha — royal Hyderabadi desserts'
        ]
      },
      artCrafts: {
        title: 'Art & Crafts',
        summary: 'Telangana\'s craftspeople create geometric ikat textiles, bidri metalware, and Cheriyal scroll paintings.',
        highlights: [
          'Pochampally Ikat — UNESCO-recognized resist-dye geometric textile weaving',
          'Bidriware — zinc-copper alloy inlaid with pure silver from Bidar tradition',
          'Cheriyal Scroll Paintings — narrative folk art scrolls from Warangal district',
          'Dokra bell metal casting — tribal lost-wax brass sculpture technique'
        ]
      },
      famousPlaces: {
        title: 'Famous Places',
        summary: 'From Deccan citadels to Kakatiya temples, Telangana\'s landmarks tell stories of power, faith, and innovation.',
        places: [
          { name: 'Charminar, Hyderabad', description: 'The iconic 1591 CE granite monument with four grand arches facing cardinal roads and a mosque on the top floor.', tag: 'Monument', image: '/charminar.png' },
          { name: 'Golconda Fort', description: 'A citadel with acoustic engineering where a handclap at the gate travels over 1 km to the highest pavilion.', tag: 'Citadel', image: '/golconda.png' },
          { name: 'Ramappa Temple, Warangal', description: 'A 1213 CE Kakatiya temple built with lightweight floating bricks, UNESCO World Heritage Site.', tag: 'UNESCO', image: '/ramappa.png' }
        ]
      }
    },
    culturalHighlights: [
      {
        title: 'Ramappa Floating Brick Temple',
        desc: 'Constructed in 1213 CE by the Kakatiya dynasty using porous lightweight bricks that float on water, rendering the shrine earthquake-resistant.',
        icon: 'Anchor'
      },
      {
        title: 'Golconda Acoustic Fort',
        desc: 'A citadel where a handclap at the entrance gate travels more than 1 kilometer to the highest pavilion (Bala Hissar) through ingenious sound conduction.',
        icon: 'Volume2'
      },
      {
        title: 'Charminar & Qutb Shahi Architecture',
        desc: 'Built in 1591 CE, the iconic granite monument boasts four grand arches facing cardinal roads with an ancient open-air mosque on the top floor.',
        icon: 'Columns'
      },
      {
        title: 'Pochampally Ikat & Dokra Crafts',
        desc: 'Centuries-old resist-dyeing mathematical textile weaves (Ikat) and lost-wax brass bell metal metallurgy of tribal artisans.',
        icon: 'Palette'
      }
    ],
    gallery: [
      {
        url: '/charminar.png',
        caption: 'Charminar Archway, Hyderabad',
        tag: 'Monument'
      },
      {
        url: '/golconda.png',
        caption: 'Golconda Fortress Ramparts',
        tag: 'Citadel'
      },
      {
        url: '/ramappa.png',
        caption: 'Ramappa Temple, Warangal',
        tag: 'UNESCO Temple'
      }
    ],
    games: {
      explore: {
        title: 'Explore Now',
        subtitle: 'Deccan Citadel & Diamond Trail',
        badge: 'Free Exploration',
        desc: 'Explore the whispering acoustic galleries of Golconda, inspect the microscopic lightness of Kakatiya floating bricks, and explore the diamond mines of Kollur.',
        features: [
          'Interactive acoustic map of Golconda fortress sound pathways',
          'The material science of Ramappa’s floating lightweight bricks',
          'Pochampally Ikat geometric tie-and-dye weaving simulator',
          'Curriculum quest: Kakatiya irrigation chain tanks (Cheruvulu)'
        ],
        ctaText: 'Start State Expedition',
        readyStatus: 'Exploration Modules Active'
      },
      puzzle: {
        title: 'Puzzle Game',
        subtitle: 'Charminar Heritage Reconstruction',
        badge: 'Logic & Spatial Quest',
        desc: 'Reconstruct the iconic 1591 CE Charminar of Hyderabad. Assemble the four grand minarets, monumental arches, and historic architectural symmetry.',
        difficulty: ['Cadet (3x3)', 'Engineer (4x4)', 'Architect (5x5)'],
        objectives: [
          'Align the four grand minarets with the cardinal roads',
          'Restore the iconic central arches and upper gallery',
          'Complete the Charminar Heritage Puzzle'
        ],
        ctaText: 'Launch Charminar Puzzle',
        readyStatus: 'Ready for Gameplay'
      },
      quiz: {
        title: 'Quiz Game',
        subtitle: 'Diamonds & Dynasties Trivia',
        badge: 'Curriculum Quiz (NEP Aligned)',
        desc: 'Answer questions on the Kakatiya warrior queen Rudrama Devi, the acoustic secrets of Qutb Shahi bastions, and the UNESCO heritage of Ramappa.',
        rounds: '3 Rounds • 10 Questions • 500 Max XP',
        topics: [
          'Reign of Queen Rudrama Devi and Marco Polo’s travelogues',
          'The Kollur Diamond Mines: Birthplace of Koh-i-Noor & Hope Diamond',
          'Bathukamma floral geometry & ecological festivals'
        ],
        ctaText: 'Start Knowledge Quest',
        readyStatus: 'Question Banks Ready'
      },
      mystery: {
        title: 'Mystery Game',
        subtitle: 'The Whispers of Golconda Citadel',
        badge: 'Narrative Adventure',
        desc: 'Intercepted sound waves echoing through the subterranean aqueducts of Golconda speak of a concealed diamond repository. Unravel the acoustic code.',
        caseFile: 'Case File #TG-1591: "The Resonant Sound of the Bala Hissar"',
        cluesCount: '4 Relic Clues to Uncover',
        ctaText: 'Begin Mystery Investigation',
        readyStatus: 'Detective Dossier Loaded'
      }
    }
  },

  'meghalaya': {
    id: 'meghalaya',
    mapId: 'INML',
    name: 'Meghalaya',
    nativeName: 'মেঘালয়',
    capital: 'Shillong',
    region: 'North-East',
    tagline: 'Abode of Clouds, Living Root Bio-Engineering & Sacred Groves',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'A misty paradise of living root bridges woven from fig trees, sacred ancient groves, thunderous waterfalls, and matrilineal hill tribes.',
    fullIntro: 'Perched in the misty clouds of Northeast India, Meghalaya ("Abode of Clouds") is an ecological and cultural wonder. Here, indigenous Khasi and Jaintia tribes practice botanical architecture, guiding the aerial roots of Ficus elastica trees across roaring mountain rivers to grow bridges that strengthen with time. With sacred ancient forests and crystal waterways like Dawki, Meghalaya represents nature in sublime harmony with humanity.',
    stats: {
      heritageSites: 'Living Root Bridges (Tentative UNESCO)',
      folkDances: 'Shad Suk Mynsiem & Wangala',
      famousCraft: 'Cane & Bamboo Weaving',
      climateZone: 'Sub-tropical Pine & Wettest on Earth'
    },
    culturalHub: {
      introduction: 'Perched in the misty clouds of Northeast India, Meghalaya ("Abode of Clouds") is an ecological and cultural wonder. Here, indigenous Khasi and Jaintia tribes practice botanical architecture, guiding the aerial roots of Ficus elastica trees across roaring mountain rivers to grow bridges that strengthen with time.',
      culture: {
        title: 'Culture & Traditions',
        summary: 'Meghalaya\'s three major tribes — Khasi, Garo, and Jaintia — preserve unique matrilineal customs and nature-centric festivals.',
        highlights: [
          'Matrilineal society — lineage and property inherited through the youngest daughter',
          'Shad Suk Mynsiem — spring dance festival of the Khasi people in Shillong',
          'Wangala (100 Drums Festival) — Garo harvest celebration with rhythmic drumming',
          'Dorbar Shnong — traditional village councils governing community life'
        ]
      },
      history: {
        title: 'History',
        summary: 'Meghalaya\'s history is shaped by indigenous tribal governance, British colonial administration, and ecological stewardship.',
        highlights: [
          'Ancient Khasi and Jaintia kingdoms with oral histories spanning centuries',
          'Living root bridges (Jingkieng Jri) — centuries-old botanical bio-engineering',
          'Mawphlang Sacred Groves — 800-year-old forests preserved under indigenous law',
          'Statehood in 1972, carved from Assam as an autonomous hill state'
        ]
      },
      food: {
        title: 'Cuisine',
        summary: 'Meghalayan cuisine features smoked meats, fermented flavors, and minimal spice — shaped by hill agriculture and forest foraging.',
        highlights: [
          'Jadoh — red rice cooked with pork blood and aromatic spices, a Khasi staple',
          'Tungrymbai — fermented soybean chutney, a Garo delicacy',
          'Doh Neiiong — pork cooked in black sesame paste',
          'Pumaloi — steamed powdered rice cake served with tea'
        ]
      },
      artCrafts: {
        title: 'Art & Crafts',
        summary: 'Meghalaya\'s artisans weave cane and bamboo into functional art, preserving forest-based craft traditions.',
        highlights: [
          'Cane and bamboo weaving — baskets, mats, and furniture from forest materials',
          'Traditional Khasi jewelry — silver and coral bead ornaments',
          'Garo textile weaving with natural dyes from forest plants',
          'Wood carving for tribal masks and ceremonial objects'
        ]
      },
      famousPlaces: {
        title: 'Famous Places',
        summary: 'Meghalaya\'s misty hills, crystal rivers, and bio-engineered bridges create an otherworldly landscape.',
        places: [
          { name: 'Double Decker Living Root Bridge, Nongriat', description: 'Two stacked Ficus elastica root bridges woven over centuries by Khasi villagers across a jungle gorge.', tag: 'Bio-Engineering', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80' },
          { name: 'Umngot River, Dawki', description: 'Crystal-clear waters so transparent that boats appear to float on glass, on the India-Bangladesh border.', tag: 'Nature', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
          { name: 'Nohkalikai Falls, Sohra', description: 'India\'s tallest plunge waterfall at 340 meters, cascading from the wettest plateau on Earth.', tag: 'Waterfalls', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' }
        ]
      }
    },
    culturalHighlights: [
      {
        title: 'Living Root Bridges (Jingkieng Jri)',
        desc: 'Centuries-old botanical bio-engineering where aerial roots of Rubber Trees are trained through hollow betel trunks across turbulent monsoon streams.',
        icon: 'Trees'
      },
      {
        title: 'Mawphlang Sacred Groves',
        desc: 'Untouched ancient forests preserved by Khasi clans for over 800 years under strict indigenous ecological laws where not a single leaf is removed.',
        icon: 'Shield'
      },
      {
        title: 'Cherrapunji (Sohra) & Mawsynram',
        desc: 'The wettest inhabited plateaus on planet Earth, where monsoonal clouds from the Bay of Bengal create dramatic waterfalls like Nohkalikai.',
        icon: 'CloudRain'
      },
      {
        title: 'Matrilineal Khasi Society',
        desc: 'One of the world’s rare and enduring matrilineal systems where family lineage, ancestral property, and traditions are inherited through daughters.',
        icon: 'Users'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        caption: 'Double Decker Living Root Bridge, Nongriat',
        tag: 'Bio-Engineering'
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        caption: 'Crystal Waters of Umngot River, Dawki',
        tag: 'Nature'
      },
      {
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        caption: 'Nohkalikai Falls, Sohra',
        tag: 'Waterfalls'
      }
    ],
    games: {
      explore: {
        title: 'Explore Now',
        subtitle: 'Canopy Walkway & Sacred Forest Journey',
        badge: 'Free Exploration',
        desc: 'Step onto the aerial living bridges of Nongriat, explore the prehistoric limestone labyrinth of Krem Liat Prah, and study medicinal herbs of the sacred groves.',
        features: [
          'Interactive botanical growth cycle of Ficus elastica root bridges',
          'Biodiversity atlas of Mawphlang’s 800-year sacred grove',
          'Monsoon cloud formation & geography of the Khasi Hills',
          'Curriculum quest: Indigenous ecological conservation (NEP Bio & Geo)'
        ],
        ctaText: 'Start State Expedition',
        readyStatus: 'Exploration Modules Active'
      },
      puzzle: {
        title: 'Puzzle Game',
        subtitle: 'Living Root Bridge Weaver',
        badge: 'Logic & Spatial Quest',
        desc: 'Guide aerial fig roots across turbulent jungle canyons. Connect living anchor points before the monsoon floods arrive in this botanical strategy puzzle.',
        difficulty: ['Seedling (3x3)', 'Canopy Weaver (4x4)', 'Forest Elder (5x5)'],
        objectives: [
          'Weave root strands across the river chasm using bamboo guides',
          'Strengthen root tensile capacity with stone interlocking ballast',
          'Earn the Guardian of the Cloud Forest Crest'
        ],
        ctaText: 'Launch Puzzle Challenge',
        readyStatus: 'Ready for Gameplay Implementation'
      },
      quiz: {
        title: 'Quiz Game',
        subtitle: 'Tribes, Clouds & Ecosystems Quiz',
        badge: 'Curriculum Quiz (NEP Aligned)',
        desc: 'Test your grasp of Meghalaya’s tripartite tribes (Khasi, Garo, Jaintia), karst limestone cave formations, rainfall records, and the Wangala drum harvest.',
        rounds: '3 Rounds • 10 Questions • 500 Max XP',
        topics: [
          'Botanical principles behind living root bridge tensile strength',
          'Meteorological dynamics behind Sohra’s heavy precipitation',
          'Traditional governance of Khasi Dorbar Shnong village councils'
        ],
        ctaText: 'Start Knowledge Quest',
        readyStatus: 'Question Banks Ready'
      },
      mystery: {
        title: 'Mystery Game',
        subtitle: 'Secrets of Mawphlang Sacred Grove',
        badge: 'Narrative Adventure',
        desc: 'Ancient folklore forbids taking any item from the Sacred Grove. When an ancient monolith shows glowing phosphorescent moss, follow clan clues to restore equilibrium.',
        caseFile: 'Case File #ML-1850: "The Spirit of the Monolith"',
        cluesCount: '4 Relic Clues to Uncover',
        ctaText: 'Begin Mystery Investigation',
        readyStatus: 'Detective Dossier Loaded'
      }
    }
  },

  'odisha': {
    id: 'odisha',
    mapId: 'INOR',
    name: 'Odisha',
    nativeName: 'ଓଡ଼ିଶା',
    capital: 'Bhubaneswar',
    region: 'East',
    tagline: 'Soul of India, Cosmic Sun Chariots & Sacred Maritime Heritage',
    heroImage: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'A sacred coastal realm celebrated for the 24 astronomical sundial wheels of Konark, classical Odissi, and ancient Kalinga seafaring voyages.',
    fullIntro: 'Odisha boasts a timeless artistic, spiritual, and maritime tradition. From the colossal 13th-century stone chariot of Konark Sun Temple with its 24 functioning sundial wheels to the monumental Jagannath Temple in Puri and Asia’s largest brackish lagoon at Chilika, Odisha captivates with Pattachitra palm-leaf scrolls, silver filigree craftsmanship, and Kalinga stone artistry.',
    stats: {
      heritageSites: 'Konark Sun Temple (UNESCO)',
      folkDances: 'Classical Odissi & Chhau',
      famousCraft: 'Pattachitra & Silver Tarakasi',
      climateZone: 'Bay of Bengal Coast & Mahanadi Basin'
    },
    culturalHub: {
      introduction: 'Odisha boasts a timeless artistic, spiritual, and maritime tradition. From the colossal 13th-century stone chariot of Konark Sun Temple with its 24 functioning sundial wheels to the monumental Jagannath Temple in Puri and Asia\'s largest brackish lagoon at Chilika, Odisha captivates with Pattachitra palm-leaf scrolls, silver filigree craftsmanship, and Kalinga stone artistry.',
      culture: {
        title: 'Culture & Traditions',
        summary: 'Odisha\'s culture revolves around temple rituals, classical dance, and coastal folk traditions tied to the Jagannath cult.',
        highlights: [
          'Classical Odissi dance — temple-origin dance with Tribhanga and Chauka postures',
          'Rath Yatra of Puri — world\'s oldest chariot festival drawing millions of pilgrims',
          'Chhau masked folk dance from Mayurbhanj with martial and mythological themes',
          'Boita Bandana — maritime festival honoring ancient Kalinga sea voyages'
        ]
      },
      history: {
        title: 'History',
        summary: 'Odisha\'s Kalinga kingdom shaped Indian history through maritime trade, temple architecture, and the transformative Kalinga War.',
        highlights: [
          'Kalinga War (261 BCE) — Ashoka\'s conversion to Buddhism after the bloody battle',
          'Konark Sun Temple (1250 CE) — cosmic chariot with 24 precision sundial wheels',
          'Kalinga Sadhavas — ancient mariners who sailed to Java, Sumatra, and Sri Lanka',
          'Jagannath Temple tradition spanning over 800 years in Puri'
        ]
      },
      food: {
        title: 'Cuisine',
        summary: 'Odia cuisine emphasizes temple prasad, mustard-based curries, and sweets offered to Lord Jagannath.',
        highlights: [
          'Mahaprasad of Puri — 56 sacred dishes offered at the Jagannath Temple',
          'Dalma — lentil and vegetable stew with raw banana and papaya',
          'Chhena Poda — baked cottage cheese dessert, Odisha\'s signature sweet',
          'Pakhala Bhata — fermented rice with water, a summer staple across Odisha'
        ]
      },
      artCrafts: {
        title: 'Art & Crafts',
        summary: 'Odisha\'s artisans create intricate Pattachitra scrolls, silver filigree, stone carvings, and palm-leaf etchings.',
        highlights: [
          'Pattachitra — cloth scroll paintings depicting Jagannath lore with mineral pigments',
          'Tarakasi — Cuttack\'s world-famous delicate silver wire filigree jewelry',
          'Applique work of Pipili — colorful fabric temple-canopy and umbrella craft',
          'Stone carving tradition of Bhubaneswar\'s temple spires and Konark sculptures'
        ]
      },
      famousPlaces: {
        title: 'Famous Places',
        summary: 'Odisha\'s coast, temples, and lagoons offer a blend of spiritual pilgrimage and natural beauty.',
        places: [
          { name: 'Konark Sun Temple', description: 'A 13th-century stone chariot of Surya with 24 carved sundial wheels — a UNESCO World Heritage Site.', tag: 'UNESCO', image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80' },
          { name: 'Jagannath Temple, Puri', description: 'One of Hinduism\'s Char Dham pilgrimage sites, home to the annual Rath Yatra chariot festival.', tag: 'Spiritual', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80' },
          { name: 'Chilika Lake', description: 'Asia\'s largest brackish water lagoon, a Ramsar wetland sanctuary for migratory birds and Irrawaddy dolphins.', tag: 'Ecosystem', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' }
        ]
      }
    },
    culturalHighlights: [
      {
        title: 'Konark Sun Temple (Cosmic Chariot)',
        desc: 'Conceived as the cosmic chariot of Surya pulled by seven horses; its 24 elaborately carved wheels function as precision solar sundials.',
        icon: 'Sun'
      },
      {
        title: 'Puri Jagannath & Rath Yatra',
        desc: 'Ancient spiritual festival featuring monumental hand-carved wooden chariots drawn by hundreds of thousands of pilgrims along the Grand Road.',
        icon: 'Compass'
      },
      {
        title: 'Pattachitra & Tarakasi Filigree',
        desc: 'Intricate cloth scroll paintings depicting epic lore using organic mineral pigments, alongside world-famous delicate silver wire filigree from Cuttack.',
        icon: 'Feather'
      },
      {
        title: 'Kalinga Maritime Sadhavas',
        desc: 'Ancient mariners who set sail on Bali Jatra voyages to Java, Sumatra, and Sri Lanka, establishing profound commercial and cultural exchanges.',
        icon: 'Navigation'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
        caption: 'Konark Sundial Wheel, Konark',
        tag: 'UNESCO'
      },
      {
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        caption: 'Kalinga Temple Spire, Bhubaneswar',
        tag: 'Architecture'
      },
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        caption: 'Chilika Coastal Lagoon',
        tag: 'Ecosystem'
      }
    ],
    games: {
      explore: {
        title: 'Explore Now',
        subtitle: 'Solar Sundials & Maritime Legacy',
        badge: 'Free Exploration',
        desc: 'Decode how the 24 spoke shadows of Konark read time to the exact minute. Discover Pattachitra master art and set sail on the ancient Boita Bandana sea routes.',
        features: [
          'Interactive Konark wheel shadow time calculator (real-time simulation)',
          'High-resolution Pattachitra scroll viewer with visual storytelling',
          '3D reconstruction of the ancient magnetic floating idol chamber',
          'Curriculum quest: Kalinga trade routes across the Indian Ocean'
        ],
        ctaText: 'Start State Expedition',
        readyStatus: 'Exploration Modules Active'
      },
      puzzle: {
        title: 'Puzzle Game',
        subtitle: 'The Konark Sundial Alignment',
        badge: 'Logic & Spatial Quest',
        desc: 'Assemble the 8 major and 8 minor spokes of the Konark stone wheel. Align the beads, celestial dancers, and shadow cast to calculate the exact solar hour.',
        difficulty: ['Apprentice (3x3)', 'Astronomer (4x4)', 'Master Suryavanshi (5x5)'],
        objectives: [
          'Align the 24 fortnight wheels according to the solar calendar',
          'Position the shadow-casting central axle correctly',
          'Earn the Solar Astrolabe Golden Honor'
        ],
        ctaText: 'Launch Puzzle Challenge',
        readyStatus: 'Ready for Gameplay Implementation'
      },
      quiz: {
        title: 'Quiz Game',
        subtitle: 'Kalinga Navy & Temple Arts Quiz',
        badge: 'Curriculum Quiz (NEP Aligned)',
        desc: 'Test your knowledge on Ashoka’s transformation after the Kalinga War, the dance postures of Odissi, Chilika lake ecology, and Jagannath culinary traditions.',
        rounds: '3 Rounds • 10 Questions • 500 Max XP',
        topics: [
          'Historical turning point of the Kalinga War and Ashokan Edicts',
          'Odissi classical dance mudras: Tribhanga and Chauka postures',
          'Boita Bandana maritime festivals and traditional naval ship craft'
        ],
        ctaText: 'Start Knowledge Quest',
        readyStatus: 'Question Banks Ready'
      },
      mystery: {
        title: 'Mystery Game',
        subtitle: 'The Legend of the Magnetic Floating Idol',
        badge: 'Narrative Adventure',
        desc: 'Legend says the central deity in Konark was suspended mid-air between two lodestones until European sailors removed them. Track the lost lodestones!',
        caseFile: 'Case File #OD-1250: "The Lodestone of the Black Pagoda"',
        cluesCount: '4 Relic Clues to Uncover',
        ctaText: 'Begin Mystery Investigation',
        readyStatus: 'Detective Dossier Loaded'
      }
    }
  }
};

export const statesList = Object.values(statesData);
