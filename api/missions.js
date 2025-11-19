const missions = [
  {
    "id": 1,
    "title": "Pertahanan Pulau Rintis",
    "description": "Adu Du menyerang Pulau Rintis dengan robot-robotnya. Hentikan serangan mereka!",
    "image_url": "https://ui-avatars.com/api/?name=Pulau+Rintis&background=00BFFF&color=FFF&size=256&bold=true",
    "difficulty": "easy",
    "recommended_level": 1,
    "recommended_elements": ["PETIR", "API"],
    "location": "Pulau Rintis",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan 10 Probe",
        "target": "Probe",
        "count": 10
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan Adu Du",
        "target": "Adu Du",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 100,
      "coins": 500,
      "items": [
        { "name": "Health Potion", "quantity": 3 },
        { "name": "Power Sphere Fragment", "quantity": 1 }
      ]
    },
    "enemies": [
      { "id": 2, "name": "Probe", "count": 10 },
      { "id": 1, "name": "Adu Du", "count": 1 }
    ]
  },
  {
    "id": 2,
    "title": "Pencurian Power Sphere",
    "description": "Ejo Jo mencoba mencuri Power Sphere! Kejar dan hentikan dia sebelum terlambat.",
    "image_url": "https://ui-avatars.com/api/?name=Power+Sphere&background=9370DB&color=FFF&size=256&bold=true",
    "difficulty": "medium",
    "recommended_level": 5,
    "recommended_elements": ["TANAH", "DAUN"],
    "location": "Hutan Belantara",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Robot Penjaga",
        "target": "Robot Penjaga",
        "count": 8
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Monster Tanaman",
        "target": "Monster Tanaman",
        "count": 3
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan Ejo Jo",
        "target": "Ejo Jo",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 250,
      "coins": 1000,
      "items": [
        { "name": "Energy Potion", "quantity": 2 },
        { "name": "Dark Energy", "quantity": 1 },
        { "name": "Elemental Fragment", "quantity": 2 }
      ]
    },
    "enemies": [
      { "id": 13, "name": "Robot Penjaga", "count": 8 },
      { "id": 15, "name": "Monster Tanaman", "count": 3 },
      { "id": 5, "name": "Ejo Jo", "count": 1 }
    ]
  },
  {
    "id": 3,
    "title": "Serangan Bora Ra",
    "description": "Pedagang Power Sphere licik, Bora Ra, menyerang untuk merebut kuasa elemental!",
    "image_url": "https://ui-avatars.com/api/?name=Bora+Ra&background=8B008B&color=FFF&size=256&bold=true",
    "difficulty": "medium",
    "recommended_level": 7,
    "recommended_elements": ["API", "CAHAYA"],
    "location": "Gurun Pasir",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Drone Pengintai",
        "target": "Drone Pengintai",
        "count": 12
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Robot Penjaga",
        "target": "Robot Penjaga",
        "count": 6
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan Bora Ra",
        "target": "Bora Ra",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 350,
      "coins": 1500,
      "items": [
        { "name": "Ancient Artifact", "quantity": 1 },
        { "name": "Power Sphere Fragment", "quantity": 2 },
        { "name": "Health Potion", "quantity": 5 }
      ]
    },
    "enemies": [
      { "id": 14, "name": "Drone Pengintai", "count": 12 },
      { "id": 13, "name": "Robot Penjaga", "count": 6 },
      { "id": 3, "name": "Bora Ra", "count": 1 }
    ]
  },
  {
    "id": 4,
    "title": "Pertempuran Elemental",
    "description": "Monster elemental muncul di berbagai lokasi. Kalahkan mereka untuk menjaga keseimbangan!",
    "image_url": "https://ui-avatars.com/api/?name=Elemental+Battle&background=FF6347&color=FFF&size=256&bold=true",
    "difficulty": "medium",
    "recommended_level": 8,
    "recommended_elements": ["AIR", "ANGIN", "TANAH"],
    "location": "Multi-Lokasi",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Raksasa Api",
        "target": "Raksasa Api",
        "count": 2
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Monster Angin",
        "target": "Monster Angin",
        "count": 3
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Golem Batu",
        "target": "Golem Batu",
        "count": 2
      }
    ],
    "rewards": {
      "exp": 400,
      "coins": 1800,
      "items": [
        { "name": "Fire Crystal", "quantity": 1 },
        { "name": "Wind Essence", "quantity": 1 },
        { "name": "Earth Core", "quantity": 1 },
        { "name": "Energy Potion", "quantity": 3 }
      ]
    },
    "enemies": [
      { "id": 10, "name": "Raksasa Api", "count": 2 },
      { "id": 11, "name": "Monster Angin", "count": 3 },
      { "id": 9, "name": "Golem Batu", "count": 2 }
    ]
  },
  {
    "id": 5,
    "title": "Invasi Bajak Luar Angkasa",
    "description": "Captain Vargoba dan awaknya menyerang stasiun luar angkasa TAPOPS!",
    "image_url": "https://ui-avatars.com/api/?name=Space+Pirates&background=B22222&color=FFF&size=256&bold=true",
    "difficulty": "hard",
    "recommended_level": 10,
    "recommended_elements": ["PETIR", "ANGIN"],
    "location": "Stasiun TAPOPS",
    "objectives": [
      {
        "type": "defend_location",
        "description": "Pertahankan stasiun dari robot penjaga",
        "target": "Robot Penjaga",
        "count": 15
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Petir Bot",
        "target": "Petir Bot",
        "count": 4
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan Captain Vargoba",
        "target": "Captain Vargoba",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 600,
      "coins": 2500,
      "items": [
        { "name": "Space Pirate Treasure", "quantity": 1 },
        { "name": "Plasma Core", "quantity": 1 },
        { "name": "Legendary Crystal", "quantity": 1 },
        { "name": "Health Potion", "quantity": 5 }
      ]
    },
    "enemies": [
      { "id": 13, "name": "Robot Penjaga", "count": 15 },
      { "id": 8, "name": "Petir Bot", "count": 4 },
      { "id": 6, "name": "Captain Vargoba", "count": 1 }
    ]
  },
  {
    "id": 6,
    "title": "Bayangan Gelap",
    "description": "Entitas bayangan misterius muncul di malam hari. Selidiki dan kalahkan mereka!",
    "image_url": "https://ui-avatars.com/api/?name=Dark+Shadow&background=2F4F4F&color=FFF&size=256&bold=true",
    "difficulty": "medium",
    "recommended_level": 9,
    "recommended_elements": ["CAHAYA", "API"],
    "location": "Kota Malam",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Bayangan Gelap",
        "target": "Bayangan Gelap",
        "count": 8
      },
      {
        "type": "collect_items",
        "description": "Kumpulkan Shadow Fragment",
        "target": "Shadow Fragment",
        "count": 5
      }
    ],
    "rewards": {
      "exp": 450,
      "coins": 2000,
      "items": [
        { "name": "Dark Crystal", "quantity": 2 },
        { "name": "Light Essence", "quantity": 1 },
        { "name": "Energy Potion", "quantity": 4 }
      ]
    },
    "enemies": [
      { "id": 12, "name": "Bayangan Gelap", "count": 8 }
    ]
  },
  {
    "id": 7,
    "title": "Serangan Robot Massal",
    "description": "Adu Du mengirim pasukan robot dalam jumlah besar untuk menyerang!",
    "image_url": "https://ui-avatars.com/api/?name=Robot+Army&background=696969&color=FFF&size=256&bold=true",
    "difficulty": "easy",
    "recommended_level": 3,
    "recommended_elements": ["PETIR", "API", "CAHAYA"],
    "location": "Kota Rintis",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Adu Du Bot Army",
        "target": "Adu Du Bot Army",
        "count": 20
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan MultiBot",
        "target": "MultiBot",
        "count": 5
      }
    ],
    "rewards": {
      "exp": 200,
      "coins": 800,
      "items": [
        { "name": "Bot Component", "quantity": 5 },
        { "name": "Energy Cell", "quantity": 3 },
        { "name": "Health Potion", "quantity": 3 }
      ]
    },
    "enemies": [
      { "id": 17, "name": "Adu Du Bot Army", "count": 20 },
      { "id": 7, "name": "MultiBot", "count": 5 }
    ]
  },
  {
    "id": 8,
    "title": "Pertempuran Es",
    "description": "Monster es mengancam membeku seluruh wilayah! Hentikan mereka dengan elemen api!",
    "image_url": "https://ui-avatars.com/api/?name=Ice+Battle&background=ADD8E6&color=000&size=256&bold=true",
    "difficulty": "medium",
    "recommended_level": 6,
    "recommended_elements": ["API"],
    "location": "Tundra Beku",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Monster Es",
        "target": "Monster Es",
        "count": 6
      },
      {
        "type": "collect_items",
        "description": "Kumpulkan Ice Crystal",
        "target": "Ice Crystal",
        "count": 4
      }
    ],
    "rewards": {
      "exp": 320,
      "coins": 1400,
      "items": [
        { "name": "Frozen Core", "quantity": 2 },
        { "name": "Fire Crystal", "quantity": 1 },
        { "name": "Energy Potion", "quantity": 3 }
      ]
    },
    "enemies": [
      { "id": 18, "name": "Monster Es", "count": 6 }
    ]
  },
  {
    "id": 9,
    "title": "Ancaman Grakakus",
    "description": "Monster alien Grakakus muncul dari laut dalam dengan tentakel berbahaya!",
    "image_url": "https://ui-avatars.com/api/?name=Grakakus&background=483D8B&color=FFF&size=256&bold=true",
    "difficulty": "hard",
    "recommended_level": 11,
    "recommended_elements": ["PETIR", "CAHAYA"],
    "location": "Laut Dalam",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Monster Es (pendamping)",
        "target": "Monster Es",
        "count": 4
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan Grakakus",
        "target": "Grakakus",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 650,
      "coins": 2800,
      "items": [
        { "name": "Tentacle Fragment", "quantity": 2 },
        { "name": "Alien DNA", "quantity": 1 },
        { "name": "Power Sphere Fragment", "quantity": 3 },
        { "name": "Health Potion", "quantity": 6 }
      ]
    },
    "enemies": [
      { "id": 18, "name": "Monster Es", "count": 4 },
      { "id": 19, "name": "Grakakus", "count": 1 }
    ]
  },
  {
    "id": 10,
    "title": "Kemarahan Retak'ka",
    "description": "Retak'ka, penguasa kuasa elemental tier 3, datang untuk merebut semua kekuatan!",
    "image_url": "https://ui-avatars.com/api/?name=Retakka&background=8B0000&color=FFF&size=256&bold=true",
    "difficulty": "very_hard",
    "recommended_level": 15,
    "recommended_elements": ["CAHAYA"],
    "location": "Arena Dimensi",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Retak'ka Clone",
        "target": "Retak'ka Clone",
        "count": 4
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan Retak'ka",
        "target": "Retak'ka",
        "count": 1
      },
      {
        "type": "survive",
        "description": "Bertahan dari Serangan Gamma",
        "target": "survival",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 1200,
      "coins": 5000,
      "items": [
        { "name": "Elemental Core", "quantity": 2 },
        { "name": "Legendary Crystal", "quantity": 2 },
        { "name": "Ultimate Power Sphere", "quantity": 1 },
        { "name": "Health Potion", "quantity": 10 },
        { "name": "Energy Potion", "quantity": 10 }
      ]
    },
    "enemies": [
      { "id": 16, "name": "Retak'ka Clone", "count": 4 },
      { "id": 4, "name": "Retak'ka", "count": 1 }
    ]
  },
  {
    "id": 11,
    "title": "Juggernaut Raksasa",
    "description": "Robot raksasa Juggernaut mengamuk di pabrik robot! Hentikan sebelum menghancurkan semuanya!",
    "image_url": "https://ui-avatars.com/api/?name=Juggernaut&background=2F4F4F&color=FFF&size=256&bold=true",
    "difficulty": "very_hard",
    "recommended_level": 13,
    "recommended_elements": ["PETIR"],
    "location": "Pabrik Robot",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Nonaktifkan Robot Penjaga",
        "target": "Robot Penjaga",
        "count": 10
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Petir Bot",
        "target": "Petir Bot",
        "count": 3
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan Juggernaut",
        "target": "Jugglenaut",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 900,
      "coins": 4000,
      "items": [
        { "name": "Heavy Armor Plate", "quantity": 2 },
        { "name": "Power Core", "quantity": 1 },
        { "name": "Legendary Crystal", "quantity": 1 },
        { "name": "Health Potion", "quantity": 8 }
      ]
    },
    "enemies": [
      { "id": 13, "name": "Robot Penjaga", "count": 10 },
      { "id": 8, "name": "Petir Bot", "count": 3 },
      { "id": 20, "name": "Jugglenaut", "count": 1 }
    ]
  },
  {
    "id": 12,
    "title": "Misi Penyelamatan Power Sphere",
    "description": "Beberapa Power Sphere dicuri dan dijaga ketat. Selamatkan mereka!",
    "image_url": "https://ui-avatars.com/api/?name=Rescue+Mission&background=FFA500&color=000&size=256&bold=true",
    "difficulty": "medium",
    "recommended_level": 7,
    "recommended_elements": ["ANGIN", "CAHAYA"],
    "location": "Benteng Musuh",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Robot Penjaga",
        "target": "Robot Penjaga",
        "count": 12
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan MultiBot",
        "target": "MultiBot",
        "count": 3
      },
      {
        "type": "rescue",
        "description": "Selamatkan Power Sphere",
        "target": "Power Sphere",
        "count": 3
      }
    ],
    "rewards": {
      "exp": 380,
      "coins": 1700,
      "items": [
        { "name": "Power Sphere Fragment", "quantity": 3 },
        { "name": "Robot Core", "quantity": 2 },
        { "name": "Energy Potion", "quantity": 4 }
      ]
    },
    "enemies": [
      { "id": 13, "name": "Robot Penjaga", "count": 12 },
      { "id": 7, "name": "MultiBot", "count": 3 }
    ]
  },
  {
    "id": 13,
    "title": "Latihan Tingkat Lanjut",
    "description": "Latihan untuk mengasah kemampuan melawan berbagai jenis musuh.",
    "image_url": "https://ui-avatars.com/api/?name=Training&background=32CD32&color=FFF&size=256&bold=true",
    "difficulty": "easy",
    "recommended_level": 4,
    "recommended_elements": ["PETIR", "TANAH", "API"],
    "location": "Arena Latihan",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Drone Pengintai",
        "target": "Drone Pengintai",
        "count": 8
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Robot Penjaga",
        "target": "Robot Penjaga",
        "count": 5
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Golem Batu",
        "target": "Golem Batu",
        "count": 2
      }
    ],
    "rewards": {
      "exp": 220,
      "coins": 900,
      "items": [
        { "name": "Training Certificate", "quantity": 1 },
        { "name": "Health Potion", "quantity": 4 },
        { "name": "Energy Potion", "quantity": 2 }
      ]
    },
    "enemies": [
      { "id": 14, "name": "Drone Pengintai", "count": 8 },
      { "id": 13, "name": "Robot Penjaga", "count": 5 },
      { "id": 9, "name": "Golem Batu", "count": 2 }
    ]
  },
  {
    "id": 14,
    "title": "Ekspedisi Hutan Rahasia",
    "description": "Jelajahi hutan rahasia yang dipenuhi monster tanaman dan bayangan gelap.",
    "image_url": "https://ui-avatars.com/api/?name=Secret+Forest&background=228B22&color=FFF&size=256&bold=true",
    "difficulty": "medium",
    "recommended_level": 8,
    "recommended_elements": ["API", "CAHAYA"],
    "location": "Hutan Rahasia",
    "objectives": [
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Monster Tanaman",
        "target": "Monster Tanaman",
        "count": 5
      },
      {
        "type": "defeat_enemies",
        "description": "Kalahkan Bayangan Gelap",
        "target": "Bayangan Gelap",
        "count": 4
      },
      {
        "type": "explore",
        "description": "Temukan artefak kuno",
        "target": "Ancient Artifact",
        "count": 1
      }
    ],
    "rewards": {
      "exp": 420,
      "coins": 1900,
      "items": [
        { "name": "Ancient Artifact", "quantity": 1 },
        { "name": "Nature Essence", "quantity": 2 },
        { "name": "Dark Crystal", "quantity": 1 },
        { "name": "Health Potion", "quantity": 5 }
      ]
    },
    "enemies": [
      { "id": 15, "name": "Monster Tanaman", "count": 5 },
      { "id": 12, "name": "Bayangan Gelap", "count": 4 }
    ]
  },
  {
    "id": 15,
    "title": "Pertahanan Terakhir",
    "description": "Semua musuh bersatu untuk serangan besar-besaran! Pertahankan dengan semua kekuatan!",
    "image_url": "https://ui-avatars.com/api/?name=Final+Defense&background=FF0000&color=FFF&size=256&bold=true",
    "difficulty": "very_hard",
    "recommended_level": 16,
    "recommended_elements": ["PETIR", "API", "CAHAYA", "ANGIN"],
    "location": "Pulau Rintis - Pertahanan Akhir",
    "objectives": [
      {
        "type": "defend_location",
        "description": "Pertahankan dari gelombang pertama",
        "target": "Wave 1",
        "count": 1
      },
      {
        "type": "defend_location",
        "description": "Pertahankan dari gelombang kedua",
        "target": "Wave 2",
        "count": 1
      },
      {
        "type": "defeat_boss",
        "description": "Kalahkan semua boss",
        "target": "All Bosses",
        "count": 3
      }
    ],
    "rewards": {
      "exp": 1500,
      "coins": 6000,
      "items": [
        { "name": "Ultimate Power Sphere", "quantity": 2 },
        { "name": "Legendary Crystal", "quantity": 3 },
        { "name": "Master Badge", "quantity": 1 },
        { "name": "Health Potion", "quantity": 15 },
        { "name": "Energy Potion", "quantity": 15 }
      ]
    },
    "enemies": [
      { "id": 17, "name": "Adu Du Bot Army", "count": 25 },
      { "id": 13, "name": "Robot Penjaga", "count": 15 },
      { "id": 7, "name": "MultiBot", "count": 6 },
      { "id": 1, "name": "Adu Du", "count": 1 },
      { "id": 5, "name": "Ejo Jo", "count": 1 },
      { "id": 6, "name": "Captain Vargoba", "count": 1 }
    ]
  }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { difficulty, element, min_level, max_level } = req.query;
    
    let filteredMissions = missions;
    
    // Filter by difficulty
    if (difficulty) {
      filteredMissions = filteredMissions.filter(mission => 
        mission.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }
    
    // Filter by recommended element
    if (element) {
      filteredMissions = filteredMissions.filter(mission =>
        mission.recommended_elements.includes(element.toUpperCase())
      );
    }
    
    // Filter by level range
    if (min_level) {
      filteredMissions = filteredMissions.filter(mission =>
        mission.recommended_level >= parseInt(min_level)
      );
    }
    
    if (max_level) {
      filteredMissions = filteredMissions.filter(mission =>
        mission.recommended_level <= parseInt(max_level)
      );
    }
    
    res.status(200).json(filteredMissions);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
