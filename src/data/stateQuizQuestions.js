/**
 * Quiz question banks for all 5 selectable states.
 * Each state has 5 questions derived from its cultural heritage data.
 */

export const stateQuizQuestions = {
  rajasthan: [
    {
      question: 'What is the capital of Rajasthan?',
      options: ['Jodhpur', 'Jaipur', 'Udaipur', 'Jaisalmer'],
      correctIndex: 1,
      explanation: 'Jaipur, the Pink City, is the capital of Rajasthan and home to Amer Fort and Hawa Mahal.',
      points: 100
    },
    {
      question: 'Which UNESCO-inscribed folk dance originates from the desert communities of Rajasthan?',
      options: ['Bharatanatyam', 'Ghoomar', 'Odissi', 'Perini'],
      correctIndex: 1,
      explanation: 'Ghoomar is a traditional Rajasthani folk dance; Kalbelia is also UNESCO-inscribed from the region.',
      points: 100
    },
    {
      question: 'Chand Baori stepwell is famous for its geometric symmetry featuring approximately how many steps?',
      options: ['500', '1,500', '3,500', '7,000'],
      correctIndex: 2,
      explanation: 'Chand Baori near Abhaneri has about 3,500 narrow steps arranged in perfect geometric symmetry.',
      points: 100
    },
    {
      question: 'Which iconic Rajasthani dish consists of lentils, baked wheat balls, and sweet crumble?',
      options: ['Laal Maas', 'Dal Baati Churma', 'Ker Sangri', 'Ghevar'],
      correctIndex: 1,
      explanation: 'Dal Baati Churma is the quintessential desert meal of Rajasthan.',
      points: 100
    },
    {
      question: 'Sawai Jai Singh II built astronomical observatories known as Jantar Mantar. What do they primarily measure?',
      options: ['Earthquake intensity', 'Celestial positions and time', 'Monsoon rainfall', 'Soil fertility'],
      correctIndex: 1,
      explanation: 'Jantar Mantar observatories contain massive stone instruments for tracking celestial bodies and measuring time.',
      points: 100
    }
  ],

  'tamil-nadu': [
    {
      question: 'The Brihadisvara Temple in Thanjavur was built by which dynasty around 1010 CE?',
      options: ['Pallava', 'Chola', 'Pandya', 'Chera'],
      correctIndex: 1,
      explanation: 'The Chola emperor Rajaraja I commissioned the Brihadisvara Temple, a UNESCO World Heritage Site.',
      points: 100
    },
    {
      question: 'Which classical dance form originated in the temples of Tamil Nadu?',
      options: ['Kathak', 'Bharatanatyam', 'Kathakali', 'Manipuri'],
      correctIndex: 1,
      explanation: 'Bharatanatyam is an ancient temple dance tradition codifying mudras, adavus, and bhavas.',
      points: 100
    },
    {
      question: 'The ancient moral text Thirukkural contains how many aphorisms (kurals)?',
      options: ['108', '333', '1,330', '3,000'],
      correctIndex: 2,
      explanation: 'Thirukkural by Thiruvalluvar contains 1,330 couplets covering ethics, politics, and love.',
      points: 100
    },
    {
      question: 'Mamallapuram (Mahabalipuram) is renowned for what type of architecture?',
      options: ['Mughal domes', 'Monolithic rock-cut shrines', 'Wooden pagodas', 'Glass facades'],
      correctIndex: 1,
      explanation: 'The Pallava dynasty carved monolithic rock-cut temples and sculptures from coastal granite cliffs.',
      points: 100
    },
    {
      question: 'Kanchipuram is world-famous for producing which handcrafted textile?',
      options: ['Pochampally Ikat', 'Kanchipuram Silk Sarees', 'Bandhani', 'Pattachitra'],
      correctIndex: 1,
      explanation: 'Kanchipuram silk sarees are handwoven with distinctive temple-border motifs.',
      points: 100
    }
  ],

  telangana: [
    {
      question: 'The Charminar monument was built in which year?',
      options: ['1450 CE', '1591 CE', '1720 CE', '1857 CE'],
      correctIndex: 1,
      explanation: 'Charminar was built in 1591 CE by Muhammad Quli Qutb Shah, founder of Hyderabad.',
      points: 100
    },
    {
      question: 'What unique engineering feature makes Golconda Fort famous?',
      options: ['Floating bricks', 'Acoustic sound conduction', 'Magnetic suspension', 'Underwater tunnels'],
      correctIndex: 1,
      explanation: 'A handclap at the entrance gate travels over 1 km to the highest pavilion through ingenious acoustic design.',
      points: 100
    },
    {
      question: 'Ramappa Temple is built with special bricks that have what unusual property?',
      options: ['They glow at night', 'They float on water', 'They repel insects', 'They change color'],
      correctIndex: 1,
      explanation: 'Kakatiya-era porous lightweight bricks float on water, contributing to earthquake resistance.',
      points: 100
    },
    {
      question: 'Which famous diamonds were mined from the Kollur mines in this region?',
      options: ['Cullinan only', 'Koh-i-Noor and Hope Diamond', 'Orlov and Regent', 'None — all from Africa'],
      correctIndex: 1,
      explanation: 'The Kollur Diamond Mines produced legendary gems including the Koh-i-Noor and Hope Diamond.',
      points: 100
    },
    {
      question: 'Pochampally Ikat is a UNESCO-recognized craft involving which technique?',
      options: ['Silver filigree', 'Resist-dye geometric weaving', 'Bronze casting', 'Stone carving'],
      correctIndex: 1,
      explanation: 'Pochampally Ikat uses resist-dyeing to create intricate geometric patterns in handwoven textiles.',
      points: 100
    }
  ],

  meghalaya: [
    {
      question: 'What does "Meghalaya" mean in Sanskrit?',
      options: ['Land of Rivers', 'Abode of Clouds', 'Green Mountains', 'Sacred Forest'],
      correctIndex: 1,
      explanation: 'Meghalaya translates to "Abode of Clouds," reflecting its misty, rain-soaked hill landscapes.',
      points: 100
    },
    {
      question: 'Living root bridges (Jingkieng Jri) are woven from the aerial roots of which tree?',
      options: ['Banyan', 'Ficus elastica (Rubber Tree)', 'Teak', 'Sal'],
      correctIndex: 1,
      explanation: 'Khasi villagers guide Ficus elastica aerial roots across rivers using hollow betel nut trunks as guides.',
      points: 100
    },
    {
      question: 'Which social system is distinctive to the Khasi tribe of Meghalaya?',
      options: ['Patrilineal descent', 'Matrilineal inheritance', 'Caste hierarchy', 'Nomadic pastoralism'],
      correctIndex: 1,
      explanation: 'Khasi society follows matrilineal customs where lineage and property pass through the youngest daughter.',
      points: 100
    },
    {
      question: 'Cherrapunji (Sohra) and Mawsynram hold records for being among the:',
      options: ['Driest places on Earth', 'Wettest inhabited places on Earth', 'Coldest hill stations', 'Highest altitude towns'],
      correctIndex: 1,
      explanation: 'These plateaus receive extreme monsoonal rainfall from Bay of Bengal clouds.',
      points: 100
    },
    {
      question: 'Jadoh, a staple Khasi dish, is primarily made with:',
      options: ['Fish and coconut', 'Red rice and pork', 'Millet and chicken', 'Wheat and lentils'],
      correctIndex: 1,
      explanation: 'Jadoh is red rice cooked with pork blood and aromatic spices, a beloved Khasi comfort food.',
      points: 100
    }
  ],

  odisha: [
    {
      question: 'The Konark Sun Temple is designed as a colossal chariot pulled by how many horses?',
      options: ['Four', 'Seven', 'Twelve', 'Twenty-four'],
      correctIndex: 1,
      explanation: 'Konark represents Surya\'s cosmic chariot drawn by seven horses, with 24 carved sundial wheels.',
      points: 100
    },
    {
      question: 'Which emperor embraced Buddhism after the bloody Kalinga War fought in Odisha?',
      options: ['Chandragupta Maurya', 'Ashoka', 'Harsha', 'Akbar'],
      correctIndex: 1,
      explanation: 'The Kalinga War (261 BCE) transformed Emperor Ashoka from a conqueror to a patron of Buddhism.',
      points: 100
    },
    {
      question: 'The annual Rath Yatra chariot festival is associated with which temple?',
      options: ['Konark Sun Temple', 'Lingaraj Temple', 'Jagannath Temple, Puri', 'Mukteshwar Temple'],
      correctIndex: 2,
      explanation: 'Puri\'s Jagannath Temple hosts the world-famous Rath Yatra, drawing millions of pilgrims.',
      points: 100
    },
    {
      question: 'Pattachitra is a traditional art form of Odisha involving:',
      options: ['Silver wire jewelry', 'Cloth scroll paintings', 'Cane basket weaving', 'Terracotta pottery'],
      correctIndex: 1,
      explanation: 'Pattachitra artists paint epic lore on cloth using organic mineral pigments.',
      points: 100
    },
    {
      question: 'Chilika Lake in Odisha is notable for being:',
      options: ['India\'s deepest lake', 'Asia\'s largest brackish water lagoon', 'A man-made reservoir', 'The source of the Ganga'],
      correctIndex: 1,
      explanation: 'Chilika is a Ramsar wetland sanctuary and Asia\'s largest brackish water lagoon.',
      points: 100
    }
  ]
};

export function getQuizQuestions(stateId) {
  return stateQuizQuestions[stateId] || stateQuizQuestions['rajasthan'];
}
