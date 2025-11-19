const enemies = [
  {
    "id": 1,
    "name": "Adu Du",
    "description": "Alien hijau dari Planet Ata Ta Tiga yang ingin mencuri Kuasa Elemental BoBoiBoy.",
    "image_url": "https://ui-avatars.com/api/?name=Adu+Du&background=00FF00&color=000&size=256&bold=true",
    "type": "boss",
    "hp": 500,
    "attack_power": 45,
    "defense": 30,
    "element_weakness": ["PETIR", "CAHAYA"],
    "element_resistance": ["TANAH"],
    "special_ability": {
      "name": "Serangan Robot",
      "description": "Memanggil robot untuk menyerang.",
      "power": 60
    },
    "drops": [
      { "item": "Power Sphere Fragment", "chance": 0.3 },
      { "item": "Alien Technology", "chance": 0.5 }
    ]
  },
  {
    "id": 2,
    "name": "Probe",
    "description": "Robot pelayan Adu Du yang sering jadi korban kesialan.",
    "image_url": "https://ui-avatars.com/api/?name=Probe&background=808080&color=FFF&size=256&bold=true",
    "type": "minion",
    "hp": 150,
    "attack_power": 20,
    "defense": 15,
    "element_weakness": ["PETIR"],
    "element_resistance": [],
    "special_ability": {
      "name": "Serangan Laser",
      "description": "Menembak laser lemah.",
      "power": 25
    },
    "drops": [
      { "item": "Scrap Metal", "chance": 0.7 },
      { "item": "Battery", "chance": 0.4 }
    ]
  },
  {
    "id": 3,
    "name": "Bora Ra",
    "description": "Pedagang Power Sphere yang licik dan berbahaya.",
    "image_url": "https://ui-avatars.com/api/?name=Bora+Ra&background=8B008B&color=FFF&size=256&bold=true",
    "type": "boss",
    "hp": 700,
    "attack_power": 55,
    "defense": 40,
    "element_weakness": ["API", "CAHAYA"],
    "element_resistance": ["ANGIN", "AIR"],
    "special_ability": {
      "name": "Serangan Gelombang Energi",
      "description": "Mengirim gelombang energi kuat ke semua arah.",
      "power": 70
    },
    "drops": [
      { "item": "Power Sphere", "chance": 0.2 },
      { "item": "Ancient Artifact", "chance": 0.4 }
    ]
  },
  {
    "id": 4,
    "name": "Retakka",
    "description": "Penguasa Kuasa Elemental Tingkat Ketiga yang haus akan kekuasaan.",
    "image_url": "https://ui-avatars.com/api/?name=Retakka&background=8B0000&color=FFF&size=256&bold=true",
    "type": "boss",
    "hp": 1000,
    "attack_power": 75,
    "defense": 60,
    "element_weakness": ["CAHAYA"],
    "element_resistance": ["PETIR", "API", "TANAH"],
    "special_ability": {
      "name": "Serangan Gamma Multi-Elemen",
      "description": "Menggabungkan beberapa elemen untuk serangan dahsyat.",
      "power": 100
    },
    "drops": [
      { "item": "Elemental Core", "chance": 0.5 },
      { "item": "Legendary Crystal", "chance": 0.3 }
    ]
  },
  {
    "id": 5,
    "name": "Ejo Jo",
    "description": "Alien licik yang ahli dalam mencuri dan memanipulasi Power Sphere.",
    "image_url": "https://ui-avatars.com/api/?name=Ejo+Jo&background=4B0082&color=FFF&size=256&bold=true",
    "type": "boss",
    "hp": 600,
    "attack_power": 50,
    "defense": 35,
    "element_weakness": ["TANAH", "DAUN"],
    "element_resistance": ["CAHAYA"],
    "special_ability": {
      "name": "Manipulasi Power Sphere",
      "description": "Menggunakan kekuatan Power Sphere untuk menyerang.",
      "power": 65
    },
    "drops": [
      { "item": "Stolen Power Sphere", "chance": 0.35 },
      { "item": "Dark Energy", "chance": 0.45 }
    ]
  },
  {
    "id": 6,
    "name": "Captain Vargoba",
    "description": "Kapten bajak luar angkasa yang brutal dan kuat.",
    "image_url": "https://ui-avatars.com/api/?name=Captain+Vargoba&background=B22222&color=FFF&size=256&bold=true",
    "type": "boss",
    "hp": 800,
    "attack_power": 65,
    "defense": 50,
    "element_weakness": ["PETIR", "ANGIN"],
    "element_resistance": ["TANAH", "API"],
    "special_ability": {
      "name": "Serangan Meriam Plasma",
      "description": "Tembakan meriam plasma yang menghancurkan.",
      "power": 85
    },
    "drops": [
      { "item": "Space Pirate Treasure", "chance": 0.4 },
      { "item": "Plasma Core", "chance": 0.35 }
    ]
  },
  {
    "id": 7,
    "name": "MultiBot",
    "description": "Robot yang dapat menggandakan diri menjadi banyak.",
    "image_url": "https://ui-avatars.com/api/?name=MultiBot&background=696969&color=FFF&size=256&bold=true",
    "type": "elite",
    "hp": 300,
    "attack_power": 35,
    "defense": 25,
    "element_weakness": ["API", "CAHAYA"],
    "element_resistance": ["AIR"],
    "special_ability": {
      "name": "Duplikasi Diri",
      "description": "Membuat klon diri untuk menyerang bersamaan.",
      "power": 40
    },
    "drops": [
      { "item": "Robot Parts", "chance": 0.6 },
      { "item": "Duplication Chip", "chance": 0.3 }
    ]
  },
  {
    "id": 8,
    "name": "Petir Bot",
    "description": "Robot dengan kemampuan listrik yang kuat.",
    "image_url": "https://ui-avatars.com/api/?name=Petir+Bot&background=FFD700&color=000&size=256&bold=true",
    "type": "elite",
    "hp": 350,
    "attack_power": 40,
    "defense": 30,
    "element_weakness": ["TANAH"],
    "element_resistance": ["PETIR", "AIR"],
    "special_ability": {
      "name": "Muatan Listrik",
      "description": "Melepaskan muatan listrik ke area sekitar.",
      "power": 50
    },
    "drops": [
      { "item": "Electric Circuit", "chance": 0.55 },
      { "item": "Thunder Core", "chance": 0.35 }
    ]
  },
  {
    "id": 9,
    "name": "Golem Batu",
    "description": "Makhluk batu raksasa yang sangat kuat dan lambat.",
    "image_url": "https://ui-avatars.com/api/?name=Golem+Batu&background=A0522D&color=FFF&size=256&bold=true",
    "type": "elite",
    "hp": 450,
    "attack_power": 50,
    "defense": 55,
    "element_weakness": ["ANGIN", "AIR"],
    "element_resistance": ["TANAH", "API"],
    "special_ability": {
      "name": "Hantaman Batu Raksasa",
      "description": "Menghantam tanah dengan kekuatan besar.",
      "power": 60
    },
    "drops": [
      { "item": "Stone Fragment", "chance": 0.7 },
      { "item": "Earth Core", "chance": 0.4 }
    ]
  },
  {
    "id": 10,
    "name": "Raksasa Api",
    "description": "Monster api yang memancarkan panas ekstrem.",
    "image_url": "https://ui-avatars.com/api/?name=Raksasa+Api&background=FF4500&color=FFF&size=256&bold=true",
    "type": "elite",
    "hp": 400,
    "attack_power": 55,
    "defense": 35,
    "element_weakness": ["AIR"],
    "element_resistance": ["API", "DAUN"],
    "special_ability": {
      "name": "Ledakan Api",
      "description": "Meledakkan api ke semua arah.",
      "power": 65
    },
    "drops": [
      { "item": "Fire Crystal", "chance": 0.6 },
      { "item": "Flame Essence", "chance": 0.45 }
    ]
  },
  {
    "id": 11,
    "name": "Monster Angin",
    "description": "Makhluk angin yang bergerak sangat cepat.",
    "image_url": "https://ui-avatars.com/api/?name=Monster+Angin&background=87CEEB&color=000&size=256&bold=true",
    "type": "elite",
    "hp": 280,
    "attack_power": 45,
    "defense": 20,
    "element_weakness": ["TANAH", "DAUN"],
    "element_resistance": ["ANGIN"],
    "special_ability": {
      "name": "Pusaran Badai",
      "description": "Menciptakan pusaran badai yang menghisap musuh.",
      "power": 55
    },
    "drops": [
      { "item": "Wind Essence", "chance": 0.65 },
      { "item": "Storm Crystal", "chance": 0.35 }
    ]
  },
  {
    "id": 12,
    "name": "Bayangan Gelap",
    "description": "Entitas bayangan yang sulit ditangkap dan misterius.",
    "image_url": "https://ui-avatars.com/api/?name=Bayangan+Gelap&background=2F4F4F&color=FFF&size=256&bold=true",
    "type": "elite",
    "hp": 320,
    "attack_power": 48,
    "defense": 25,
    "element_weakness": ["CAHAYA"],
    "element_resistance": ["TANAH", "DAUN"],
    "special_ability": {
      "name": "Serangan Bayangan",
      "description": "Menyerang dari bayangan dengan cepat.",
      "power": 52
    },
    "drops": [
      { "item": "Shadow Fragment", "chance": 0.5 },
      { "item": "Dark Crystal", "chance": 0.4 }
    ]
  },
  {
    "id": 13,
    "name": "Robot Penjaga",
    "description": "Robot penjaga standar yang sering dijumpai.",
    "image_url": "https://ui-avatars.com/api/?name=Robot+Penjaga&background=708090&color=FFF&size=256&bold=true",
    "type": "minion",
    "hp": 180,
    "attack_power": 25,
    "defense": 20,
    "element_weakness": ["PETIR", "API"],
    "element_resistance": [],
    "special_ability": {
      "name": "Mode Bertahan",
      "description": "Meningkatkan pertahanan sementara.",
      "power": 0
    },
    "drops": [
      { "item": "Metal Scrap", "chance": 0.8 },
      { "item": "Robot Core", "chance": 0.3 }
    ]
  },
  {
    "id": 14,
    "name": "Drone Pengintai",
    "description": "Drone kecil yang bergerak cepat untuk pengintaian.",
    "image_url": "https://ui-avatars.com/api/?name=Drone+Pengintai&background=C0C0C0&color=000&size=256&bold=true",
    "type": "minion",
    "hp": 100,
    "attack_power": 15,
    "defense": 10,
    "element_weakness": ["PETIR", "ANGIN"],
    "element_resistance": [],
    "special_ability": {
      "name": "Scan Target",
      "description": "Memindai target untuk mengurangi pertahanan.",
      "power": 0
    },
    "drops": [
      { "item": "Drone Parts", "chance": 0.75 },
      { "item": "Scanner Chip", "chance": 0.25 }
    ]
  },
  {
    "id": 15,
    "name": "Monster Tanaman",
    "description": "Tanaman raksasa yang dapat menyerang dengan sulur.",
    "image_url": "https://ui-avatars.com/api/?name=Monster+Tanaman&background=228B22&color=FFF&size=256&bold=true",
    "type": "elite",
    "hp": 380,
    "attack_power": 42,
    "defense": 40,
    "element_weakness": ["API", "CAHAYA"],
    "element_resistance": ["DAUN", "AIR", "TANAH"],
    "special_ability": {
      "name": "Jerat Sulur",
      "description": "Mengikat musuh dengan sulur kuat.",
      "power": 45
    },
    "drops": [
      { "item": "Plant Fiber", "chance": 0.7 },
      { "item": "Nature Essence", "chance": 0.4 }
    ]
  },
  {
    "id": 16,
    "name": "Retak'ka Clone",
    "description": "Klon lemah dari Retak'ka yang diciptakan untuk pertempuran.",
    "image_url": "https://ui-avatars.com/api/?name=Retakka+Clone&background=CD5C5C&color=FFF&size=256&bold=true",
    "type": "elite",
    "hp": 500,
    "attack_power": 50,
    "defense": 40,
    "element_weakness": ["CAHAYA"],
    "element_resistance": ["PETIR", "API"],
    "special_ability": {
      "name": "Serangan Gamma Minor",
      "description": "Versi lebih lemah dari serangan Gamma Retak'ka.",
      "power": 60
    },
    "drops": [
      { "item": "Clone Fragment", "chance": 0.5 },
      { "item": "Gamma Shard", "chance": 0.35 }
    ]
  },
  {
    "id": 17,
    "name": "Adu Du Bot Army",
    "description": "Pasukan robot buatan Adu Du yang menyerang secara bergerombol.",
    "image_url": "https://ui-avatars.com/api/?name=Adu+Du+Bot&background=90EE90&color=000&size=256&bold=true",
    "type": "minion",
    "hp": 120,
    "attack_power": 18,
    "defense": 12,
    "element_weakness": ["PETIR", "API"],
    "element_resistance": [],
    "special_ability": {
      "name": "Serangan Bergerombol",
      "description": "Menyerang bersama dengan robot lain.",
      "power": 30
    },
    "drops": [
      { "item": "Bot Component", "chance": 0.65 },
      { "item": "Energy Cell", "chance": 0.35 }
    ]
  },
  {
    "id": 18,
    "name": "Monster Es",
    "description": "Makhluk es yang dapat membekukan lawan.",
    "image_url": "https://ui-avatars.com/api/?name=Monster+Es&background=ADD8E6&color=000&size=256&bold=true",
    "type": "elite",
    "hp": 360,
    "attack_power": 44,
    "defense": 38,
    "element_weakness": ["API"],
    "element_resistance": ["AIR", "ANGIN"],
    "special_ability": {
      "name": "Pembekuan",
      "description": "Membekukan target untuk melambatkan gerakan.",
      "power": 48
    },
    "drops": [
      { "item": "Ice Crystal", "chance": 0.6 },
      { "item": "Frozen Core", "chance": 0.4 }
    ]
  },
  {
    "id": 19,
    "name": "Grakakus",
    "description": "Monster alien dengan tentakel yang berbahaya.",
    "image_url": "https://ui-avatars.com/api/?name=Grakakus&background=483D8B&color=FFF&size=256&bold=true",
    "type": "boss",
    "hp": 650,
    "attack_power": 58,
    "defense": 45,
    "element_weakness": ["PETIR", "CAHAYA"],
    "element_resistance": ["AIR", "DAUN"],
    "special_ability": {
      "name": "Serangan Tentakel",
      "description": "Menyerang dengan banyak tentakel sekaligus.",
      "power": 70
    },
    "drops": [
      { "item": "Tentacle Fragment", "chance": 0.5 },
      { "item": "Alien DNA", "chance": 0.35 }
    ]
  },
  {
    "id": 20,
    "name": "Jugglenaut",
    "description": "Robot raksasa dengan daya tahan luar biasa.",
    "image_url": "https://ui-avatars.com/api/?name=Jugglenaut&background=2F4F4F&color=FFF&size=256&bold=true",
    "type": "boss",
    "hp": 900,
    "attack_power": 70,
    "defense": 65,
    "element_weakness": ["PETIR"],
    "element_resistance": ["TANAH", "API", "ANGIN"],
    "special_ability": {
      "name": "Charge Attack",
      "description": "Menyerbu dengan kecepatan tinggi dan kekuatan besar.",
      "power": 90
    },
    "drops": [
      { "item": "Heavy Armor Plate", "chance": 0.55 },
      { "item": "Power Core", "chance": 0.4 }
    ]
  }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { type, weakness } = req.query;
    
    let filteredEnemies = enemies;
    
    // Filter by type (boss, elite, minion)
    if (type) {
      filteredEnemies = filteredEnemies.filter(enemy => 
        enemy.type.toLowerCase() === type.toLowerCase()
      );
    }
    
    // Filter by element weakness
    if (weakness) {
      filteredEnemies = filteredEnemies.filter(enemy =>
        enemy.element_weakness.includes(weakness.toUpperCase())
      );
    }
    
    res.status(200).json(filteredEnemies);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
