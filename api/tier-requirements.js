const tierRequirements = [
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
  },
  {
    "element_code": "ANGIN",
    "element_name": "Angin",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Angin",
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
        "form_name": "BoBoiBoy Taufan",
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
        "form_name": "BoBoiBoy Beliung",
        "unlock_requirement": {
          "type": "gacha_or_quest",
          "description": "Gacha (5% rate) atau complete Wind Mastery Quest",
          "level_required": 10,
          "cost": 0,
          "mission_required": 10,
          "gacha_rate": 0.05
        }
      }
    ]
  },
  {
    "element_code": "TANAH",
    "element_name": "Tanah",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Tanah",
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
        "form_name": "BoBoiBoy Gempa",
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
        "form_name": "BoBoiBoy Kristal",
        "unlock_requirement": {
          "type": "gacha_or_quest",
          "description": "Gacha (5% rate) atau complete Earth Mastery Quest",
          "level_required": 10,
          "cost": 0,
          "mission_required": 10,
          "gacha_rate": 0.05
        }
      }
    ]
  },
  {
    "element_code": "API",
    "element_name": "Api",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Api",
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
        "form_name": "BoBoiBoy Blaze",
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
        "form_name": "BoBoiBoy Nova",
        "unlock_requirement": {
          "type": "gacha_or_quest",
          "description": "Gacha (5% rate) atau complete Fire Mastery Quest",
          "level_required": 10,
          "cost": 0,
          "mission_required": 10,
          "gacha_rate": 0.05
        }
      }
    ]
  },
  {
    "element_code": "AIR",
    "element_name": "Air",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Air",
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
        "form_name": "BoBoiBoy Ais",
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
        "form_name": "BoBoiBoy Blizzard",
        "unlock_requirement": {
          "type": "gacha_or_quest",
          "description": "Gacha (5% rate) atau complete Ice Mastery Quest",
          "level_required": 10,
          "cost": 0,
          "mission_required": 10,
          "gacha_rate": 0.05
        }
      }
    ]
  },
  {
    "element_code": "DAUN",
    "element_name": "Daun",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Daun",
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
        "form_name": "BoBoiBoy Duri",
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
        "form_name": "BoBoiBoy Rimba",
        "unlock_requirement": {
          "type": "gacha_or_quest",
          "description": "Gacha (5% rate) atau complete Nature Mastery Quest",
          "level_required": 10,
          "cost": 0,
          "mission_required": 10,
          "gacha_rate": 0.05
        }
      }
    ]
  },
  {
    "element_code": "CAHAYA",
    "element_name": "Cahaya",
    "tiers": [
      {
        "tier": 1,
        "form_name": "BoBoiBoy Cahaya",
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
        "form_name": "BoBoiBoy Solar",
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
        "form_name": "BoBoiBoy Gamma",
        "unlock_requirement": {
          "type": "gacha_or_quest",
          "description": "Gacha (5% rate) atau complete Light Mastery Quest",
          "level_required": 10,
          "cost": 0,
          "mission_required": 10,
          "gacha_rate": 0.05
        }
      }
    ]
  }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { element } = req.query;
    
    if (element) {
      const elementReq = tierRequirements.find(req => 
        req.element_code.toLowerCase() === element.toLowerCase()
      );
      
      if (elementReq) {
        res.status(200).json(elementReq);
      } else {
        res.status(404).json({ message: "Element not found" });
      }
    } else {
      res.status(200).json(tierRequirements);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
