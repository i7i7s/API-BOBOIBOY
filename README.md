# BoBoiBoy Game API 🎮⚡

API untuk game BoBoiBoy yang menyediakan data elemen, musuh, dan misi. Dibangun untuk digunakan dengan aplikasi Flutter.

## 🚀 Base URL

**Production**: `https://your-project-name.vercel.app`

## 📚 Endpoints

### 1. Elements API
Mendapatkan data elemen dan form BoBoiBoy beserta skill-skillnya.

```
GET /api/elements
```

**Response:**
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
        "image_url": "https://...",
        "skills": [...]
      }
    ]
  }
]
```

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
Mendapatkan data misi dalam game.

```
GET /api/missions
GET /api/missions?difficulty=easy
GET /api/missions?element=PETIR
GET /api/missions?min_level=5&max_level=10
```

**Query Parameters:**
- `difficulty`: Filter berdasarkan kesulitan (easy, medium, hard, very_hard)
- `element`: Filter berdasarkan elemen yang direkomendasikan
- `min_level`: Level minimum
- `max_level`: Level maximum

**Response:**
```json
[
  {
    "id": 1,
    "title": "Pertahanan Pulau Rintis",
    "description": "Adu Du menyerang Pulau Rintis...",
    "image_url": "https://...",
    "difficulty": "easy",
    "recommended_level": 1,
    "recommended_elements": ["PETIR", "API"],
    "location": "Pulau Rintis",
    "objectives": [...],
    "rewards": {...},
    "enemies": [...]
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

## 📊 Data Structure

### Elements (7 Elemen × 3 Tiers = 21 Forms)
- Petir → Halilintar → Voltra
- Angin → Taufan → Beliung
- Tanah → Gempa → Kristal
- Api → Blaze → Nova
- Air → Ais → Blizzard
- Daun → Duri → Rimba
- Cahaya → Solar → Gamma

### Enemies (20 Musuh)
- **Boss**: Adu Du, Bora Ra, Retakka, Ejo Jo, Captain Vargoba, Grakakus, Jugglenaut
- **Elite**: MultiBot, Petir Bot, Golem Batu, Raksasa Api, Monster Angin, dll.
- **Minion**: Probe, Robot Penjaga, Drone Pengintai, Adu Du Bot Army

### Missions (15 Misi)
Berbagai misi dari easy hingga very_hard dengan objectives dan rewards yang berbeda.

## 🎨 Image Assets

Semua image menggunakan **UI Avatars API** yang otomatis generate gambar berdasarkan nama. Gambar akan muncul dengan warna yang sesuai dengan karakter/elemen masing-masing.

Untuk custom images, ganti `image_url` dengan URL gambar Anda sendiri.

## 📄 License

MIT License - Bebas digunakan untuk project pribadi maupun komersial.

## 👨‍💻 Author

**Daffa Alwafi**

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

---

**Happy Coding! Kuasa Elemental! ⚡🌪️🔥💧🌿⚡**
