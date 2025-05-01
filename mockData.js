// Полные данные чемпионов (Static Data API-like)
const champions = [
  { 
    id: "Aatrox", 
    name: "Aatrox", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png",
    roles: ["Top"],
    stats: {
      winRate: 50.8,
      pickRate: 5.2,
      banRate: 10.1,
      kda: 2.1
    }
  },
  { 
    id: "Ahri", 
    name: "Ahri", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ahri.png",
    roles: ["Mid"],
    stats: {
      winRate: 49.1,
      pickRate: 8.7,
      banRate: 5.3,
      kda: 3.2
    }
  },
  { 
    id: "Jinx", 
    name: "Jinx", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jinx.png",
    roles: ["ADC"],
    stats: {
      winRate: 51.3,
      pickRate: 12.4,
      banRate: 3.8,
      kda: 2.8
    }
  },
  { 
    id: "Lulu", 
    name: "Lulu", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png",
    roles: ["Support"],
    stats: {
      winRate: 52.6,
      pickRate: 7.9,
      banRate: 8.5,
      kda: 3.5
    }
  },
  { 
    id: "Zed", 
    name: "Zed", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zed.png",
    roles: ["Mid"],
    stats: {
      winRate: 48.7,
      pickRate: 9.3,
      banRate: 25.4,
      kda: 2.4
    }
  }
];

// Данные матчапов (Match API-like)
const matchups = [
  {
    champion1: "Aatrox",
    champion2: "Ahri",
    winRate: 47.3,
    gamesAnalyzed: 1250,
    synergyScore: 68,
    description: "Ahri имеет преимущество против Aatrox благодаря своей мобильности и способности уклоняться от его навыков."
  },
  {
    champion1: "Jinx",
    champion2: "Lulu",
    winRate: 54.1,
    gamesAnalyzed: 3200,
    synergyScore: 82,
    description: "Lulu отлично защищает Jinx и усиливает ее атаки, делая их смертоносной комбинацией."
  },
  {
    champion1: "Zed",
    champion2: "Lulu",
    winRate: 41.2,
    gamesAnalyzed: 980,
    synergyScore: 35,
    description: "Lulu может нейтрализовать Zed'а с помощью своих защитных способностей."
  }
];

// Экспорт данных
export { champions, matchups };