# BoBoiBoy Elemental Battle API 🎮⚡

Comprehensive REST API for BoBoiBoy game featuring turn-based RPG combat, elemental transformation system, and split power mechanics. Built for Flutter mobile game development.

## 🚀 Base URL

**Production**: `https://api-boboiboy.vercel.app`  
**Repository**: `https://github.com/i7i7s/API-BOBOIBOY`

## 🎮 Game Concept

### Core Mechanics:
1. **Transform System**: BoBoiBoy dapat berubah menjadi 7 elemen berbeda
2. **Tier Progression**: Setiap elemen punya 3 tier (Basic → Advanced → Ultimate)
3. **Split Power**: BoBoiBoy bisa pecah menjadi 3 karakter dengan elemen berbeda
4. **Turn-Based Combat**: Strategic RPG gameplay melawan berbagai musuh
5. **Gacha System**: Unlock tier 3 forms melalui gacha atau special missions

### Transformation Rules:
- Player bisa transform ke elemen apapun yang sudah unlock
- Otomatis menggunakan **tier tertinggi** yang sudah dipelajari
- Contoh: Jika Tier 2 Halilintar sudah unlock, transform ⚡ = langsung jadi Halilintar (skip Petir)

### Split Power Rules:
- Split hanya bisa dilakukan setelah transform
- Player bebas pilih 3 elemen untuk split
- Setiap split menggunakan tier tertinggi dari elemen tersebut
- HP total dibagi 3 untuk ketiga karakter

---

## 📚 API Endpoints

### 1. Elements API
Get all elemental forms (21 total: 7 elements × 3 tiers) with complete skills data.

```http
GET /api/elements
```

**Response Example:**
```json
[
  {
    "id": 1,
    "code": "PETIR",
    "element_name": "Petir",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Petir",
        "image_url": "https://ui-avatars.com/api/?name=BoBoiBoy+Petir&background=FFD700...",
        "skills": [
          {
            "id": 1101,
            "name": "Keris Petir",
            "description": "Menciptakan dua bilah keris dari elektrik...",
            "power": 30,
            "target": "single",
            "canon": true
          }
        ]
      },
      {
        "tier": 2,
        "form_name": "BoBoiBoy Halilintar",
        "image_url": "https://...",
        "skills": [...]
      },
      {
        "tier": 3,
        "form_name": "BoBoiBoy Voltra",
        "image_url": "https://...",
        "skills": [...]
      }
    ]
  }
]
```

**Available Elements:**
- ⚡ PETIR (Petir → Halilintar → Voltra)
- 🌪️ ANGIN (Angin → Taufan → Beliung)
- 🪨 TANAH (Tanah → Gempa → Kristal)
- 🔥 API (Api → Blaze → Nova)
- 💧 AIR (Air → Ais → Blizzard)
- 🌿 DAUN (Daun → Duri → Rimba)
- ☀️ CAHAYA (Cahaya → Solar → Gamma)

### 2. Enemies API
Mendapatkan data musuh dalam game.

```
GET /api/enemies
GET /api/enemies?type=boss
GET /api/enemies?type=elite
GET /api/enemies?type=minion
GET /api/enemies?weakness=PETIR
```

**Query Parameters:**
- `type`: Filter berdasarkan tipe musuh (boss, elite, minion)
- `weakness`: Filter berdasarkan kelemahan elemen

**Response:**
```json
[
  {
    "id": 1,
    "name": "Adu Du",
    "description": "Alien hijau dari Planet Ata Ta Tiga...",
    "image_url": "https://...",
    "type": "boss",
    "hp": 500,
    "attack_power": 45,
    "defense": 30,
    "element_weakness": ["PETIR", "CAHAYA"],
    "element_resistance": ["TANAH"],
    "special_ability": {...},
    "drops": [...]
  }
]
```

### 3. Missions API
Get mission data with objectives, recommended elements, and rewards.

```http
GET /api/missions
GET /api/missions?difficulty=easy
GET /api/missions?element=PETIR
GET /api/missions?min_level=5&max_level=10
```

**Query Parameters:**
- `difficulty`: easy | medium | hard | very_hard
- `element`: Recommended element code (PETIR, API, etc.)
- `min_level`: Minimum level requirement
- `max_level`: Maximum level requirement

**Response Example:**
```json
[
  {
    "id": 1,
    "title": "Pertahanan Pulau Rintis",
    "description": "Adu Du menyerang Pulau Rintis dengan robot-robotnya...",
    "image_url": "https://ui-avatars.com/api/?name=Pulau+Rintis...",
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
      }
    ],
    "rewards": {
      "exp": 100,
      "coins": 500,
      "items": [...]
    },
    "enemies": [
      { "id": 2, "name": "Probe", "count": 10 }
    ]
  }
]
```

**15 Total Missions** ranging from easy training to final boss battles.

### 4. Items API ✨ NEW
Get consumables, buffs, and materials for gameplay.

```http
GET /api/items
GET /api/items?type=consumable
GET /api/items?rarity=rare
```

**Query Parameters:**
- `type`: consumable | buff | material | throwable | utility
- `rarity`: common | uncommon | rare

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Health Potion",
    "description": "Memulihkan 50 HP untuk satu karakter.",
    "type": "consumable",
    "effect": "heal",
    "value": 50,
    "price": 100,
    "image_url": "https://...",
    "rarity": "common"
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
    "rarity": "uncommon"
  }
]
```

**15 Total Items** including potions, buffs, and special items.

### 5. Tier Requirements API ✨ NEW
Get unlock requirements for tier 2 and tier 3 forms.

```http
GET /api/tier-requirements
GET /api/tier-requirements?element=PETIR
```

**Response Example:**
```json
[
  {
    "element_code": "PETIR",
    "element_name": "Petir",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Petir",
        "unlock_requirement": {
          "type": "default",
          "description": "Unlocked by default",
          "level_required": 1,
          "cost": 0,
          "mission_required": null
        }
      },
      {
        "tier": 2,
        "form_name": "BoBoiBoy Halilintar",
        "unlock_requirement": {
          "type": "purchase",
          "description": "Belajar di Training Center",
          "level_required": 5,
          "cost": 500,
          "mission_required": 3
        }
      },
      {
        "tier": 3,
        "form_name": "BoBoiBoy Voltra",
        "unlock_requirement": {
          "type": "gacha_or_quest",
          "description": "Gacha (5% rate) atau complete Thunder Mastery Quest",
          "level_required": 10,
          "cost": 0,
          "mission_required": 10,
          "gacha_rate": 0.05
        }
      }
    ]
  }
]
```

## 🛠️ Development

### Prerequisites
- Node.js >= 18.x
- npm atau yarn

### Local Development

1. Clone repository:
```bash
git clone https://github.com/username/bbb-api.git
cd bbb-api
```

2. Install dependencies:
```bash
npm install -g vercel
```

3. Run development server:
```bash
vercel dev
```

Server akan berjalan di `http://localhost:3000`

## 🚀 Deployment ke Vercel

### Via Vercel CLI

1. Login ke Vercel:
```bash
vercel login
```

2. Deploy:
```bash
vercel --prod
```

### Via Vercel Dashboard

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository GitHub
4. Deploy otomatis!

## 📱 Integrasi dengan Flutter

### Example Usage

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class BoBoiBoyAPI {
  static const String baseUrl = 'https://your-project-name.vercel.app';

  // Get all elements
  static Future<List<dynamic>> getElements() async {
    final response = await http.get(Uri.parse('$baseUrl/api/elements'));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    }
    throw Exception('Failed to load elements');
  }

  // Get enemies by type
  static Future<List<dynamic>> getEnemies({String? type}) async {
    String url = '$baseUrl/api/enemies';
    if (type != null) url += '?type=$type';
    
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    }
    throw Exception('Failed to load enemies');
  }

  // Get missions
  static Future<List<dynamic>> getMissions({String? difficulty}) async {
    String url = '$baseUrl/api/missions';
    if (difficulty != null) url += '?difficulty=$difficulty';
    
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    }
    throw Exception('Failed to load missions');
  }
}
```

## 📊 Complete Data Structure

### 📁 Elements (21 Forms Total)
**7 Elements × 3 Tiers each:**

| Element | Tier 1 | Tier 2 | Tier 3 |
|---------|--------|---------|---------|
| ⚡ PETIR | Petir | Halilintar | Voltra |
| 🌪️ ANGIN | Angin | Taufan | Beliung |
| 🪨 TANAH | Tanah | Gempa | Kristal |
| 🔥 API | Api | Blaze | Nova |
| 💧 AIR | Air | Ais | Blizzard |
| 🌿 DAUN | Daun | Duri | Rimba |
| ☀️ CAHAYA | Cahaya | Solar | Gamma |

Each form has 3 unique skills with different power levels and targets.

### 👾 Enemies (20 Total)
- **Boss (7)**: Adu Du, Bora Ra, Retakka, Ejo Jo, Captain Vargoba, Grakakus, Jugglenaut
  - HP: 500-1000
  - Strong special abilities
  - Valuable drops
  
- **Elite (9)**: MultiBot, Petir Bot, Golem Batu, Raksasa Api, Monster Angin, Bayangan Gelap, Monster Tanaman, Retak'ka Clone, Monster Es
  - HP: 280-500
  - Element-specific weaknesses
  - Medium rewards
  
- **Minion (4)**: Probe, Robot Penjaga, Drone Pengintai, Adu Du Bot Army
  - HP: 100-180
  - Easy to defeat
  - Common drops

### 🎯 Missions (15 Total)
| Difficulty | Count | Level Range |
|------------|-------|-------------|
| Easy | 3 | 1-4 |
| Medium | 6 | 5-9 |
| Hard | 3 | 10-13 |
| Very Hard | 3 | 15+ |

Each mission includes objectives, recommended elements, rewards (coins, EXP, items), and enemy composition.

### 🎒 Items (15 Total)
- **Consumables (5)**: Health potions, energy drinks, revive tokens
- **Buffs (6)**: Attack/defense/speed boosts, elemental shields
- **Materials (2)**: Power sphere fragments, elemental crystals
- **Throwables (2)**: Cocoa bombs, smoke bombs
- **Utility (1)**: Escape rope

## 🎨 Image Assets

All images use **UI Avatars API** for auto-generated avatars with element-themed colors:
- ⚡ Yellow/Gold for Petir
- 🌪️ Sky Blue for Angin
- 🪨 Brown for Tanah
- 🔥 Red/Orange for Api
- 💧 Blue for Air
- 🌿 Green for Daun
- ☀️ Yellow/Orange for Cahaya

**Customization**: Replace `image_url` fields with your own image URLs or local asset paths for production.

---

## 🎮 Game Implementation Guide

### Player Progression Data Structure (Hive/Local Storage)

```dart
// Save game structure
{
  "player_level": 5,
  "total_exp": 1250,
  "coins": 1500,
  "unlocked_tiers": {
    "PETIR": [1, 2],      // Tier 1 & 2 unlocked
    "ANGIN": [1],         // Only Tier 1
    "TANAH": [1, 2],
    "API": [1],
    "AIR": [1],
    "DAUN": [1],
    "CAHAYA": [1]
  },
  "completed_missions": [1, 2, 3],
  "inventory": {
    "health_potion": 5,
    "energy_drink": 3,
    "attack_boost": 2
  },
  "current_selected_elements": ["PETIR", "API", "AIR"]  // For split
}
```

### Battle Flow Implementation

```
1. Pre-Battle: Select 3 elements for potential split
   └─ Save to currentSelectedElements

2. Battle Start: BoBoiBoy Normal (no transform)
   └─ Player can choose: Transform, Attack, Defend, Item

3. Transform Action:
   └─ Show element selector (7 elements)
   └─ On select: Transform to HIGHEST unlocked tier
   └─ Example: Select PETIR with [1,2] unlocked → Transform to Halilintar

4. Split Action (after transform):
   └─ Use currentSelectedElements or let player choose new 3
   └─ Create 3 characters with highest tiers
   └─ Divide HP equally (HP/3 each)
   └─ Enable turn rotation system

5. Turn-Based Combat:
   └─ Player turn → Enemy turn → Repeat
   └─ If split: Rotate through 3 characters
   └─ Check win/lose conditions each turn
```

### Tier Unlock Logic

```dart
// Tier 2 Unlock (Training Center)
bool canUnlockTier2(String element) {
  return playerLevel >= 5 &&
         completedMissions.contains(3) &&
         coins >= 500;
}

// Tier 3 Unlock (Gacha or Quest)
bool canUnlockTier3(String element) {
  return playerLevel >= 10 &&
         completedMissions.contains(10) &&
         (gachaResult == element || questCompleted);
}

// Auto-use highest tier on transform
int getHighestUnlockedTier(String element) {
  var tiers = unlockedTiers[element];
  return tiers.reduce(max); // Returns 1, 2, or 3
}
```

## 📄 License

MIT License - Bebas digunakan untuk project pribadi maupun komersial.

## 👨‍💻 Author

**Daffa Alwafi**

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

---

**Happy Coding! Kuasa Elemental! ⚡🌪️🔥💧🌿⚡**
