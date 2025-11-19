const items = [
  {
    "id": 1,
    "name": "Health Potion",
    "description": "Memulihkan 50 HP untuk satu karakter.",
    "type": "consumable",
    "effect": "heal",
    "value": 50,
    "price": 100,
    "image_url": "https://ui-avatars.com/api/?name=Health+Potion&background=FF6B6B&color=FFF&size=256&bold=true",
    "rarity": "common"
  },
  {
    "id": 2,
    "name": "Super Health Potion",
    "description": "Memulihkan 100 HP untuk satu karakter.",
    "type": "consumable",
    "effect": "heal",
    "value": 100,
    "price": 200,
    "image_url": "https://ui-avatars.com/api/?name=Super+Potion&background=FF0000&color=FFF&size=256&bold=true",
    "rarity": "rare"
  },
  {
    "id": 3,
    "name": "Energy Drink",
    "description": "Memulihkan 30 energy untuk skill special.",
    "type": "consumable",
    "effect": "restore_energy",
    "value": 30,
    "price": 80,
    "image_url": "https://ui-avatars.com/api/?name=Energy+Drink&background=4ECDC4&color=FFF&size=256&bold=true",
    "rarity": "common"
  },
  {
    "id": 4,
    "name": "Full Restore",
    "description": "Memulihkan HP dan energy penuh untuk satu karakter.",
    "type": "consumable",
    "effect": "full_restore",
    "value": 100,
    "price": 300,
    "image_url": "https://ui-avatars.com/api/?name=Full+Restore&background=9B59B6&color=FFF&size=256&bold=true",
    "rarity": "rare"
  },
  {
    "id": 5,
    "name": "Revive Token",
    "description": "Menghidupkan kembali karakter yang fainted dengan 50% HP.",
    "type": "consumable",
    "effect": "revive",
    "value": 50,
    "price": 250,
    "image_url": "https://ui-avatars.com/api/?name=Revive&background=F39C12&color=FFF&size=256&bold=true",
    "rarity": "rare"
  },
  {
    "id": 6,
    "name": "Attack Boost",
    "description": "Meningkatkan attack power 50% untuk 3 turn.",
    "type": "buff",
    "effect": "attack_boost",
    "value": 50,
    "duration": 3,
    "price": 150,
    "image_url": "https://ui-avatars.com/api/?name=Attack+Boost&background=E74C3C&color=FFF&size=256&bold=true",
    "rarity": "uncommon"
  },
  {
    "id": 7,
    "name": "Defense Boost",
    "description": "Meningkatkan defense 50% untuk 3 turn.",
    "type": "buff",
    "effect": "defense_boost",
    "value": 50,
    "duration": 3,
    "price": 150,
    "image_url": "https://ui-avatars.com/api/?name=Defense+Boost&background=3498DB&color=FFF&size=256&bold=true",
    "rarity": "uncommon"
  },
  {
    "id": 8,
    "name": "Speed Boost",
    "description": "Meningkatkan kecepatan turn untuk 3 turn.",
    "type": "buff",
    "effect": "speed_boost",
    "value": 1,
    "duration": 3,
    "price": 120,
    "image_url": "https://ui-avatars.com/api/?name=Speed+Boost&background=1ABC9C&color=FFF&size=256&bold=true",
    "rarity": "uncommon"
  },
  {
    "id": 9,
    "name": "Elemental Shield",
    "description": "Mengurangi damage elemental 75% untuk 2 turn.",
    "type": "buff",
    "effect": "elemental_shield",
    "value": 75,
    "duration": 2,
    "price": 200,
    "image_url": "https://ui-avatars.com/api/?name=Elemental+Shield&background=95A5A6&color=FFF&size=256&bold=true",
    "rarity": "rare"
  },
  {
    "id": 10,
    "name": "Power Sphere Fragment",
    "description": "Fragment dari Power Sphere yang bisa dijual atau digunakan untuk upgrade.",
    "type": "material",
    "effect": "none",
    "value": 0,
    "price": 50,
    "image_url": "https://ui-avatars.com/api/?name=Power+Fragment&background=FFD700&color=000&size=256&bold=true",
    "rarity": "uncommon"
  },
  {
    "id": 11,
    "name": "Elemental Crystal",
    "description": "Crystal elemental untuk unlock tier forms.",
    "type": "material",
    "effect": "unlock_material",
    "value": 0,
    "price": 500,
    "image_url": "https://ui-avatars.com/api/?name=Elemental+Crystal&background=E91E63&color=FFF&size=256&bold=true",
    "rarity": "rare"
  },
  {
    "id": 12,
    "name": "Cocoa Bomb",
    "description": "Bom coklat buatan Gopal yang memberikan damage medium ke semua musuh.",
    "type": "throwable",
    "effect": "aoe_damage",
    "value": 40,
    "price": 180,
    "image_url": "https://ui-avatars.com/api/?name=Cocoa+Bomb&background=8B4513&color=FFF&size=256&bold=true",
    "rarity": "uncommon"
  },
  {
    "id": 13,
    "name": "Smoke Bomb",
    "description": "Asap yang membuat musuh skip 1 turn.",
    "type": "throwable",
    "effect": "stun",
    "value": 1,
    "price": 150,
    "image_url": "https://ui-avatars.com/api/?name=Smoke+Bomb&background=708090&color=FFF&size=256&bold=true",
    "rarity": "uncommon"
  },
  {
    "id": 14,
    "name": "Lucky Charm",
    "description": "Meningkatkan critical hit rate 25% untuk 5 turn.",
    "type": "buff",
    "effect": "critical_boost",
    "value": 25,
    "duration": 5,
    "price": 220,
    "image_url": "https://ui-avatars.com/api/?name=Lucky+Charm&background=FFD700&color=000&size=256&bold=true",
    "rarity": "rare"
  },
  {
    "id": 15,
    "name": "Escape Rope",
    "description": "Kabur dari battle (tidak bisa dipakai di boss fight).",
    "type": "utility",
    "effect": "escape",
    "value": 1,
    "price": 50,
    "image_url": "https://ui-avatars.com/api/?name=Escape+Rope&background=CD853F&color=FFF&size=256&bold=true",
    "rarity": "common"
  }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { type, rarity } = req.query;
    
    let filteredItems = items;
    
    // Filter by type (consumable, buff, material, throwable, utility)
    if (type) {
      filteredItems = filteredItems.filter(item => 
        item.type.toLowerCase() === type.toLowerCase()
      );
    }
    
    // Filter by rarity (common, uncommon, rare)
    if (rarity) {
      filteredItems = filteredItems.filter(item =>
        item.rarity.toLowerCase() === rarity.toLowerCase()
      );
    }
    
    res.status(200).json(filteredItems);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
