// Full champion data (Static Data API-like)
const  champions = [
  // ... (ваши существующие чемпионы)
  { 
    id: "Malphite", 
    name: "Malphite", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malphite.png",
    roles: ["Top", "Support"],
    stats: {
      winRate: 52.1,
      pickRate: 4.2,
      banRate: 3.1,
      kda: 2.9
    }
  },
  { 
    id: "Malzahar", 
    name: "Malzahar", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malzahar.png",
    roles: ["Mid"],
    stats: {
      winRate: 51.4,
      pickRate: 3.8,
      banRate: 2.7,
      kda: 2.8
    }
  },
  { 
    id: "Maokai", 
    name: "Maokai", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Maokai.png",
    roles: ["Support", "Top", "Jungle"],
    stats: {
      winRate: 52.6,
      pickRate: 5.1,
      banRate: 3.9,
      kda: 3.1
    }
  },
  { 
    id: "MasterYi", 
    name: "Master Yi", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/MasterYi.png",
    roles: ["Jungle"],
    stats: {
      winRate: 50.2,
      pickRate: 6.3,
      banRate: 8.4,
      kda: 2.4
    }
  },
  { 
    id: "MissFortune", 
    name: "Miss Fortune", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/MissFortune.png",
    roles: ["ADC"],
    stats: {
      winRate: 51.8,
      pickRate: 9.2,
      banRate: 3.5,
      kda: 2.9
    }
  },
  { 
    id: "MonkeyKing", 
    name: "Wukong", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/MonkeyKing.png",
    roles: ["Jungle", "Top"],
    stats: {
      winRate: 49.5,
      pickRate: 3.7,
      banRate: 1.2,
      kda: 2.5
    }
  },
  { 
    id: "Mordekaiser", 
    name: "Mordekaiser", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Mordekaiser.png",
    roles: ["Top"],
    stats: {
      winRate: 50.9,
      pickRate: 5.6,
      banRate: 6.3,
      kda: 2.2
    }
  },
  { 
    id: "Morgana", 
    name: "Morgana", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Morgana.png",
    roles: ["Support", "Jungle"],
    stats: {
      winRate: 50.1,
      pickRate: 6.8,
      banRate: 5.7,
      kda: 3.0
    }
  },
  { 
    id: "Nami", 
    name: "Nami", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png",
    roles: ["Support"],
    stats: {
      winRate: 51.3,
      pickRate: 7.5,
      banRate: 2.3,
      kda: 3.3
    }
  },
  { 
    id: "Nasus", 
    name: "Nasus", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nasus.png",
    roles: ["Top"],
    stats: {
      winRate: 51.7,
      pickRate: 4.9,
      banRate: 2.8,
      kda: 2.1
    }
  },
  { 
    id: "Nautilus", 
    name: "Nautilus", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nautilus.png",
    roles: ["Support"],
    stats: {
      winRate: 50.8,
      pickRate: 8.2,
      banRate: 4.6,
      kda: 2.7
    }
  },
  { 
    id: "Neeko", 
    name: "Neeko", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Neeko.png",
    roles: ["Mid", "Support"],
    stats: {
      winRate: 51.2,
      pickRate: 3.4,
      banRate: 1.9,
      kda: 2.6
    }
  },
  { 
    id: "Nidalee", 
    name: "Nidalee", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nidalee.png",
    roles: ["Jungle"],
    stats: {
      winRate: 48.9,
      pickRate: 5.1,
      banRate: 3.2,
      kda: 2.8
    }
  },
  { 
    id: "Nocturne", 
    name: "Nocturne", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nocturne.png",
    roles: ["Jungle"],
    stats: {
      winRate: 51.5,
      pickRate: 4.7,
      banRate: 2.1,
      kda: 2.5
    }
  },
  { 
    id: "Nunu", 
    name: "Nunu & Willump", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nunu.png",
    roles: ["Jungle"],
    stats: {
      winRate: 51.9,
      pickRate: 3.8,
      banRate: 1.4,
      kda: 2.9
    }
  },
  { 
    id: "Olaf", 
    name: "Olaf", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Olaf.png",
    roles: ["Jungle", "Top"],
    stats: {
      winRate: 50.3,
      pickRate: 4.2,
      banRate: 1.7,
      kda: 2.4
    }
  },
  { 
    id: "Orianna", 
    name: "Orianna", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Orianna.png",
    roles: ["Mid"],
    stats: {
      winRate: 49.7,
      pickRate: 5.6,
      banRate: 1.2,
      kda: 3.1
    }
  },
  { 
    id: "Ornn", 
    name: "Ornn", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ornn.png",
    roles: ["Top"],
    stats: {
      winRate: 52.3,
      pickRate: 4.1,
      banRate: 2.9,
      kda: 2.7
    }
  },
  { 
    id: "Pantheon", 
    name: "Pantheon", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Pantheon.png",
    roles: ["Top", "Mid", "Support"],
    stats: {
      winRate: 51.0,
      pickRate: 5.3,
      banRate: 2.4,
      kda: 2.6
    }
  },
  { 
    id: "Poppy", 
    name: "Poppy", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Poppy.png",
    roles: ["Jungle", "Top", "Support"],
    stats: {
      winRate: 51.5,
      pickRate: 3.2,
      banRate: 1.1,
      kda: 2.9
    }
  },
  { 
    id: "Pyke", 
    name: "Pyke", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Pyke.png",
    roles: ["Support"],
    stats: {
      winRate: 49.8,
      pickRate: 6.7,
      banRate: 8.3,
      kda: 2.5
    }
  },
  { 
    id: "Qiyana", 
    name: "Qiyana", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Qiyana.png",
    roles: ["Mid"],
    stats: {
      winRate: 50.2,
      pickRate: 4.9,
      banRate: 7.1,
      kda: 2.4
    }
  },
  { 
    id: "Quinn", 
    name: "Quinn", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Quinn.png",
    roles: ["Top"],
    stats: {
      winRate: 51.6,
      pickRate: 2.7,
      banRate: 1.3,
      kda: 2.5
    }
  },
  { 
    id: "Rakan", 
    name: "Rakan", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Rakan.png",
    roles: ["Support"],
    stats: {
      winRate: 50.7,
      pickRate: 7.3,
      banRate: 3.5,
      kda: 3.2
    }
  },
  { 
    id: "Rammus", 
    name: "Rammus", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Rammus.png",
    roles: ["Jungle"],
    stats: {
      winRate: 52.8,
      pickRate: 3.5,
      banRate: 4.2,
      kda: 2.9
    }
  },
  { 
    id: "RekSai", 
    name: "Rek'Sai", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/RekSai.png",
    roles: ["Jungle"],
    stats: {
      winRate: 50.1,
      pickRate: 2.9,
      banRate: 1.3,
      kda: 2.6
    }
  },
  { 
    id: "Rell", 
    name: "Rell", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Rell.png",
    roles: ["Support"],
    stats: {
      winRate: 50.4,
      pickRate: 3.1,
      banRate: 1.2,
      kda: 2.8
    }
  },
  { 
    id: "Renata", 
    name: "Renata Glasc", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Renata.png",
    roles: ["Support"],
    stats: {
      winRate: 50.9,
      pickRate: 2.8,
      banRate: 1.7,
      kda: 3.3
    }
  },
  { 
    id: "Renekton", 
    name: "Renekton", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Renekton.png",
    roles: ["Top"],
    stats: {
      winRate: 49.6,
      pickRate: 6.2,
      banRate: 3.8,
      kda: 2.3
    }
  },
  { 
    id: "Rengar", 
    name: "Rengar", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Rengar.png",
    roles: ["Jungle", "Top"],
    stats: {
      winRate: 50.4,
      pickRate: 5.1,
      banRate: 5.3,
      kda: 2.5
    }
  },
  { 
    id: "Riven", 
    name: "Riven", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Riven.png",
    roles: ["Top"],
    stats: {
      winRate: 49.9,
      pickRate: 7.8,
      banRate: 6.7,
      kda: 2.2
    }
  },
  { 
    id: "Rumble", 
    name: "Rumble", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Rumble.png",
    roles: ["Top", "Mid"],
    stats: {
      winRate: 51.2,
      pickRate: 3.5,
      banRate: 2.4,
      kda: 2.4
    }
  },
  { 
    id: "Ryze", 
    name: "Ryze", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ryze.png",
    roles: ["Mid"],
    stats: {
      winRate: 48.7,
      pickRate: 2.9,
      banRate: 0.9,
      kda: 2.5
    }
  },
  { 
    id: "Samira", 
    name: "Samira", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Samira.png",
    roles: ["ADC"],
    stats: {
      winRate: 50.5,
      pickRate: 6.8,
      banRate: 7.2,
      kda: 2.6
    }
  },
  { 
    id: "Sejuani", 
    name: "Sejuani", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sejuani.png",
    roles: ["Jungle"],
    stats: {
      winRate: 51.1,
      pickRate: 4.3,
      banRate: 1.8,
      kda: 3.0
    }
  },
  { 
    id: "Senna", 
    name: "Senna", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Senna.png",
    roles: ["Support", "ADC"],
    stats: {
      winRate: 50.7,
      pickRate: 8.4,
      banRate: 3.9,
      kda: 3.1
    }
  },
  { 
    id: "Seraphine", 
    name: "Seraphine", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Seraphine.png",
    roles: ["Support", "Mid"],
    stats: {
      winRate: 51.8,
      pickRate: 4.7,
      banRate: 2.3,
      kda: 3.4
    }
  },
  { 
    id: "Sett", 
    name: "Sett", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sett.png",
    roles: ["Top", "Support"],
    stats: {
      winRate: 50.3,
      pickRate: 5.9,
      banRate: 3.5,
      kda: 2.4
    }
  },
  { 
    id: "Shaco", 
    name: "Shaco", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Shaco.png",
    roles: ["Jungle"],
    stats: {
      winRate: 50.6,
      pickRate: 6.2,
      banRate: 9.1,
      kda: 2.7
    }
  },
  { 
    id: "Shen", 
    name: "Shen", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Shen.png",
    roles: ["Top", "Support"],
    stats: {
      winRate: 51.4,
      pickRate: 4.8,
      banRate: 3.2,
      kda: 2.8
    }
  },
  { 
    id: "Shyvana", 
    name: "Shyvana", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Shyvana.png",
    roles: ["Jungle"],
    stats: {
      winRate: 50.9,
      pickRate: 3.4,
      banRate: 1.5,
      kda: 2.5
    }
  },
  { 
    id: "Singed", 
    name: "Singed", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Singed.png",
    roles: ["Top"],
    stats: {
      winRate: 51.7,
      pickRate: 2.1,
      banRate: 1.3,
      kda: 2.3
    }
  },
  { 
    id: "Sion", 
    name: "Sion", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sion.png",
    roles: ["Top"],
    stats: {
      winRate: 50.2,
      pickRate: 4.5,
      banRate: 2.7,
      kda: 2.2
    }
  },
  { 
    id: "Sivir", 
    name: "Sivir", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sivir.png",
    roles: ["ADC"],
    stats: {
      winRate: 50.8,
      pickRate: 3.9,
      banRate: 1.2,
      kda: 2.9
    }
  },
  { 
    id: "Skarner", 
    name: "Skarner", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Skarner.png",
    roles: ["Jungle"],
    stats: {
      winRate: 49.5,
      pickRate: 2.8,
      banRate: 1.1,
      kda: 2.6
    }
  },
  { 
    id: "Sona", 
    name: "Sona", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sona.png",
    roles: ["Support"],
    stats: {
      winRate: 52.3,
      pickRate: 4.2,
      banRate: 1.8,
      kda: 3.6
    }
  },
  { 
    id: "Soraka", 
    name: "Soraka", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Soraka.png",
    roles: ["Support"],
    stats: {
      winRate: 52.1,
      pickRate: 6.7,
      banRate: 4.5,
      kda: 3.5
    }
  },
  { 
    id: "Swain", 
    name: "Swain", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Swain.png",
    roles: ["Support", "Mid", "Top"],
    stats: {
      winRate: 51.5,
      pickRate: 5.3,
      banRate: 2.7,
      kda: 2.7
    }
  },
  { 
    id: "Sylas", 
    name: "Sylas", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sylas.png",
    roles: ["Mid"],
    stats: {
      winRate: 49.8,
      pickRate: 8.2,
      banRate: 11.3,
      kda: 2.5
    }
  },
  { 
    id: "Syndra", 
    name: "Syndra", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Syndra.png",
    roles: ["Mid"],
    stats: {
      winRate: 50.4,
      pickRate: 6.7,
      banRate: 4.2,
      kda: 2.8
    }
  },
  { 
    id: "TahmKench", 
    name: "Tahm Kench", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/TahmKench.png",
    roles: ["Support", "Top"],
    stats: {
      winRate: 50.7,
      pickRate: 3.5,
      banRate: 2.1,
      kda: 2.9
    }
  },
  { 
    id: "Taliyah", 
    name: "Taliyah", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Taliyah.png",
    roles: ["Jungle", "Mid"],
    stats: {
      winRate: 51.2,
      pickRate: 3.8,
      banRate: 1.7,
      kda: 2.7
    }
  },
  { 
    id: "Talon", 
    name: "Talon", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Talon.png",
    roles: ["Mid", "Jungle"],
    stats: {
      winRate: 50.1,
      pickRate: 5.4,
      banRate: 3.2,
      kda: 2.5
    }
  },
  { 
    id: "Taric", 
    name: "Taric", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Taric.png",
    roles: ["Support"],
    stats: {
      winRate: 52.4,
      pickRate: 2.9,
      banRate: 1.3,
      kda: 3.3
    }
  },
  { 
    id: "Teemo", 
    name: "Teemo", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Teemo.png",
    roles: ["Top"],
    stats: {
      winRate: 50.5,
      pickRate: 6.2,
      banRate: 7.8,
      kda: 2.4
    }
  },
  { 
    id: "Thresh", 
    name: "Thresh", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Thresh.png",
    roles: ["Support"],
    stats: {
      winRate: 50.3,
      pickRate: 11.5,
      banRate: 9.7,
      kda: 3.0
    }
  },
  { 
    id: "Tristana", 
    name: "Tristana", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Tristana.png",
    roles: ["ADC", "Mid"],
    stats: {
      winRate: 51.0,
      pickRate: 7.3,
      banRate: 2.9,
      kda: 2.6
    }
  },
  { 
    id: "Trundle", 
    name: "Trundle", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Trundle.png",
    roles: ["Jungle", "Top"],
    stats: {
      winRate: 51.4,
      pickRate: 4.2,
      banRate: 1.8,
      kda: 2.5
    }
  },
  { 
    id: "Tryndamere", 
    name: "Tryndamere", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Tryndamere.png",
    roles: ["Top"],
    stats: {
      winRate: 50.8,
      pickRate: 5.7,
      banRate: 6.3,
      kda: 2.2
    }
  },
  { 
    id: "TwistedFate", 
    name: "Twisted Fate", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/TwistedFate.png",
    roles: ["Mid"],
    stats: {
      winRate: 50.1,
      pickRate: 4.9,
      banRate: 2.4,
      kda: 2.7
    }
  },
  { 
    id: "Twitch", 
    name: "Twitch", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Twitch.png",
    roles: ["ADC", "Jungle"],
    stats: {
      winRate: 51.3,
      pickRate: 6.8,
      banRate: 5.2,
      kda: 2.7
    }
  },
  { 
    id: "Udyr", 
    name: "Udyr", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Udyr.png",
    roles: ["Jungle", "Top"],
    stats: {
      winRate: 51.7,
      pickRate: 5.2,
      banRate: 3.1,
      kda: 2.6
    }
  },
  { 
    id: "Urgot", 
    name: "Urgot", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Urgot.png",
    roles: ["Top"],
    stats: {
      winRate: 51.5,
      pickRate: 4.3,
      banRate: 2.7,
      kda: 2.3
    }
  },
  { 
    id: "Varus", 
    name: "Varus", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Varus.png",
    roles: ["ADC", "Mid"],
    stats: {
      winRate: 50.6,
      pickRate: 7.1,
      banRate: 3.5,
      kda: 2.8
    }
  },
  { 
    id: "Vayne", 
    name: "Vayne", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Vayne.png",
    roles: ["ADC", "Top"],
    stats: {
      winRate: 50.2,
      pickRate: 10.3,
      banRate: 8.9,
      kda: 2.5
    }
  },
  { 
    id: "Veigar", 
    name: "Veigar", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Veigar.png",
    roles: ["Mid"],
    stats: {
      winRate: 51.8,
      pickRate: 5.7,
      banRate: 2.3,
      kda: 2.6
    }
  },
  { 
    id: "Velkoz", 
    name: "Vel'Koz", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Velkoz.png",
    roles: ["Support", "Mid"],
    stats: {
      winRate: 50.4,
      pickRate: 3.2,
      banRate: 1.1,
      kda: 2.5
    }
  },
  { 
    id: "Vex", 
    name: "Vex", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Vex.png",
    roles: ["Mid"],
    stats: {
      winRate: 51.1,
      pickRate: 4.8,
      banRate: 3.7,
      kda: 2.7
    }
  },
  { 
    id: "Vi", 
    name: "Vi", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Vi.png",
    roles: ["Jungle"],
    stats: {
      winRate: 50.7,
      pickRate: 6.3,
      banRate: 2.9,
      kda: 2.6
    }
  },
  { 
    id: "Viego", 
    name: "Viego", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Viego.png",
    roles: ["Jungle"],
    stats: {
      winRate: 49.8,
      pickRate: 7.5,
      banRate: 5.6,
      kda: 2.5
    }
  },
  { 
    id: "Viktor", 
    name: "Viktor", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Viktor.png",
    roles: ["Mid"],
    stats: {
      winRate: 50.3,
      pickRate: 5.9,
      banRate: 2.1,
      kda: 2.7
    }
  },
  { 
    id: "Vladimir", 
    name: "Vladimir", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Vladimir.png",
    roles: ["Mid", "Top"],
    stats: {
      winRate: 49.7,
      pickRate: 4.5,
      banRate: 3.2,
      kda: 2.4
    }
  },
  { 
    id: "Volibear", 
    name: "Volibear", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Volibear.png",
    roles: ["Top", "Jungle"],
    stats: {
      winRate: 50.9,
      pickRate: 4.2,
      banRate: 2.7,
      kda: 2.3
    }
  },
  { 
    id: "Warwick", 
    name: "Warwick", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Warwick.png",
    roles: ["Jungle", "Top"],
    stats: {
      winRate: 51.6,
      pickRate: 5.8,
      banRate: 3.4,
      kda: 2.5
    }
  },
  { 
    id: "Xayah", 
    name: "Xayah", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Xayah.png",
    roles: ["ADC"],
    stats: {
      winRate: 50.5,
      pickRate: 8.7,
      banRate: 4.3,
      kda: 2.8
    }
  },
  { 
    id: "Xerath", 
    name: "Xerath", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Xerath.png",
    roles: ["Support", "Mid"],
    stats: {
      winRate: 50.8,
      pickRate: 5.3,
      banRate: 3.7,
      kda: 2.6
    }
  },
  { 
    id: "XinZhao", 
    name: "Xin Zhao", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/XinZhao.png",
    roles: ["Jungle"],
    stats: {
      winRate: 50.2,
      pickRate: 4.7,
      banRate: 1.5,
      kda: 2.5
    }
  },
  { 
    id: "Yasuo", 
    name: "Yasuo", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Yasuo.png",
    roles: ["Mid", "Top"],
    stats: {
      winRate: 48.9,
      pickRate: 11.3,
      banRate: 15.7,
      kda: 2.4
    }
  },
  { 
    id: "Yone", 
    name: "Yone", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Yone.png",
    roles: ["Mid", "Top"],
    stats: {
      winRate: 49.5,
      pickRate: 10.8,
      banRate: 12.4,
      kda: 2.5
    }
  },
  { 
    id: "Yorick", 
    name: "Yorick", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Yorick.png",
    roles: ["Top"],
    stats: {
      winRate: 51.7,
      pickRate: 3.2,
      banRate: 2.9,
      kda: 2.2
    }
  },
  { 
    id: "Yuumi", 
    name: "Yuumi", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Yuumi.png",
    roles: ["Support"],
    stats: {
      winRate: 49.8,
      pickRate: 6.7,
      banRate: 14.3,
      kda: 3.2
    }
  },
  { 
    id: "Zac", 
    name: "Zac", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zac.png",
    roles: ["Jungle"],
    stats: {
      winRate: 52.3,
      pickRate: 4.1,
      banRate: 2.7,
      kda: 2.9
    }
  },
  { 
    id: "Zed", 
    name: "Zed", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zed.png",
    roles: ["Mid"],
    stats: {
      winRate: 48.7,
      pickRate: 12.5,
      banRate: 18.3,
      kda: 2.5
    }
  },
  { 
    id: "Zeri", 
    name: "Zeri", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zeri.png",
    roles: ["ADC"],
    stats: {
      winRate: 50.1,
      pickRate: 7.9,
      banRate: 6.5,
      kda: 2.7
    }
  },
  { 
    id: "Ziggs", 
    name: "Ziggs", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ziggs.png",
    roles: ["ADC", "Mid"],
    stats: {
      winRate: 51.4,
      pickRate: 3.5,
      banRate: 1.2,
      kda: 2.6
    }
  },
  { 
    id: "Zilean", 
    name: "Zilean", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zilean.png",
    roles: ["Support"],
    stats: {
      winRate: 52.7,
      pickRate: 2.8,
      banRate: 1.1,
      kda: 3.4
    }
  },
  { 
    id: "Zoe", 
    name: "Zoe", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zoe.png",
    roles: ["Mid"],
    stats: {
      winRate: 49.8,
      pickRate: 4.2,
      banRate: 5.7,
      kda: 2.7
    }
  },
  { 
    id: "Zyra", 
    name: "Zyra", 
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zyra.png",
    roles: ["Support"],
    stats: {
      winRate: 51.2,
      pickRate: 5.3,
      banRate: 2.9,
      kda: 2.5
    }
  }
];

// Matchup data with synergy and counter scores
const matchups = [
  // Примеры матчапов с синергией и контрпиками
  {
    champion1: "Aatrox",
    champion2: "Darius",
    winRate: 48.2,
    synergyScore: 65,
    description: "Darius has a strong early game advantage against Aatrox with his bleed passive and ultimate execute.",
    counters: [
      { id: "Fiora", name: "Fiora", winRate: 62.1, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Fiora.png" },
      { id: "Irelia", name: "Irelia", winRate: 59.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Irelia.png" },
      { id: "Jax", name: "Jax", winRate: 58.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jax.png" }
    ],
    synergies: [
      { id: "JarvanIV", name: "Jarvan IV", winRate: 68.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png" },
      { id: "Leona", name: "Leona", winRate: 66.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png" },
      { id: "Nautilus", name: "Nautilus", winRate: 65.7, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nautilus.png" }
    ]
  },
  {
    champion1: "Ahri",
    champion2: "Zed",
    winRate: 52.3,
    synergyScore: 72,
    description: "Ahri can outplay Zed with her charm and mobility, making it a skill matchup favoring Ahri.",
    counters: [
      { id: "Malzahar", name: "Malzahar", winRate: 61.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malzahar.png" },
      { id: "Lissandra", name: "Lissandra", winRate: 59.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lissandra.png" },
      { id: "Galio", name: "Galio", winRate: 57.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Galio.png" }
    ],
    synergies: [
      { id: "Elise", name: "Elise", winRate: 70.1, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Elise.png" },
      { id: "LeeSin", name: "Lee Sin", winRate: 68.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/LeeSin.png" },
      { id: "JarvanIV", name: "Jarvan IV", winRate: 67.9, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png" }
    ]
  },
  // Добавьте больше матчапов по аналогии
  {
    champion1: "Jhin",
    champion2: "Lux",
    winRate: 53.7,
    synergyScore: 78,
    description: "Jhin and Lux have strong poke and burst potential together, with Lux's root setting up Jhin's W.",
    counters: [
      { id: "Blitzcrank", name: "Blitzcrank", winRate: 58.6, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png" },
      { id: "Leona", name: "Leona", winRate: 56.9, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png" },
      { id: "Pyke", name: "Pyke", winRate: 55.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Pyke.png" }
    ],
    synergies: [
      { id: "Morgana", name: "Morgana", winRate: 72.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Morgana.png" },
      { id: "Thresh", name: "Thresh", winRate: 70.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Thresh.png" },
      { id: "Nami", name: "Nami", winRate: 69.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png" }
    ]
  },
  {
    champion1: "Yasuo",
    champion2: "Malphite",
    winRate: 56.2,
    synergyScore: 85,
    description: "Malphite's ultimate perfectly sets up Yasuo's ultimate, creating a devastating wombo-combo.",
    counters: [
      { id: "Janna", name: "Janna", winRate: 60.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png" },
      { id: "Lulu", name: "Lulu", winRate: 58.7, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png" },
      { id: "Poppy", name: "Poppy", winRate: 57.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Poppy.png" }
    ],
    synergies: [
      { id: "Zac", name: "Zac", winRate: 75.6, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zac.png" },
      { id: "Wukong", name: "Wukong", winRate: 73.9, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/MonkeyKing.png" },
      { id: "Alistar", name: "Alistar", winRate: 72.1, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Alistar.png" }
    ]
  },
  // Добавьте еще 10-15 матчапов для демонстрации
  {
    champion1: "Ezreal",
    champion2: "Yuumi",
    winRate: 54.8,
    synergyScore: 80,
    description: "Ezreal's mobility pairs well with Yuumi's attach mechanic, making them hard to catch and kill.",
    counters: [
      { id: "Blitzcrank", name: "Blitzcrank", winRate: 59.1, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png" },
      { id: "Nautilus", name: "Nautilus", winRate: 57.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nautilus.png" },
      { id: "Leona", name: "Leona", winRate: 56.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png" }
    ],
    synergies: [
      { id: "Janna", name: "Janna", winRate: 74.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png" },
      { id: "Lulu", name: "Lulu", winRate: 72.6, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png" },
      { id: "Soraka", name: "Soraka", winRate: 71.9, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Soraka.png" }
    ]
  },
  {
    champion1: "Darius",
    champion2: "Garen",
    winRate: 49.5,
    synergyScore: 58,
    description: "Classic juggernaut matchup where Darius has the edge with his bleed and reset potential.",
    counters: [
      { id: "Vayne", name: "Vayne", winRate: 63.7, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Vayne.png" },
      { id: "Quinn", name: "Quinn", winRate: 61.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Quinn.png" },
      { id: "Teemo", name: "Teemo", winRate: 59.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Teemo.png" }
    ],
    synergies: [
      { id: "JarvanIV", name: "Jarvan IV", winRate: 69.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png" },
      { id: "Sejuani", name: "Sejuani", winRate: 67.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sejuani.png" },
      { id: "Amumu", name: "Amumu", winRate: 66.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Amumu.png" }
    ]
  },
  {
    champion1: "Katarina",
    champion2: "Malzahar",
    winRate: 42.7,
    synergyScore: 35,
    description: "Malzahar's suppression completely shuts down Katarina's mobility and resets.",
    counters: [
      { id: "Fizz", name: "Fizz", winRate: 64.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Fizz.png" },
      { id: "Kassadin", name: "Kassadin", winRate: 62.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kassadin.png" },
      { id: "Anivia", name: "Anivia", winRate: 60.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Anivia.png" }
    ],
    synergies: [
      { id: "Ivern", name: "Ivern", winRate: 73.1, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ivern.png" },
      { id: "Lulu", name: "Lulu", winRate: 71.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png" },
      { id: "Janna", name: "Janna", winRate: 70.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png" }
    ]
  },
  {
    champion1: "Ashe",
    champion2: "Thresh",
    winRate: 55.1,
    synergyScore: 82,
    description: "Thresh's lantern provides Ashe with additional safety, while her slows set up his hooks.",
    counters: [
      { id: "Blitzcrank", name: "Blitzcrank", winRate: 57.9, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png" },
      { id: "Leona", name: "Leona", winRate: 56.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png" },
      { id: "Pyke", name: "Pyke", winRate: 55.7, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Pyke.png" }
    ],
    synergies: [
      { id: "Nami", name: "Nami", winRate: 76.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png" },
      { id: "Lulu", name: "Lulu", winRate: 74.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png" },
      { id: "Janna", name: "Janna", winRate: 73.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png" }
    ]
  },
  {
    champion1: "Zed",
    champion2: "Lulu",
    winRate: 45.3,
    synergyScore: 40,
    description: "Lulu's polymorph and ultimate completely negate Zed's assassination potential.",
    counters: [
      { id: "Malzahar", name: "Malzahar", winRate: 63.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malzahar.png" },
      { id: "Lissandra", name: "Lissandra", winRate: 61.7, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lissandra.png" },
      { id: "Anivia", name: "Anivia", winRate: 59.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Anivia.png" }
    ],
    synergies: [
      { id: "JarvanIV", name: "Jarvan IV", winRate: 72.6, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png" },
      { id: "LeeSin", name: "Lee Sin", winRate: 71.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/LeeSin.png" },
      { id: "Elise", name: "Elise", winRate: 70.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Elise.png" }
    ]
  },
  {
    champion1: "Vayne",
    champion2: "Lulu",
    winRate: 57.6,
    synergyScore: 88,
    description: "Lulu's shields and buffs make Vayne nearly unstoppable in late game teamfights.",
    counters: [
      { id: "Caitlyn", name: "Caitlyn", winRate: 58.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Caitlyn.png" },
      { id: "Draven", name: "Draven", winRate: 56.9, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Draven.png" },
      { id: "Jhin", name: "Jhin", winRate: 55.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jhin.png" }
    ],
    synergies: [
      { id: "Janna", name: "Janna", winRate: 79.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png" },
      { id: "Nami", name: "Nami", winRate: 77.6, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png" },
      { id: "Soraka", name: "Soraka", winRate: 76.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Soraka.png" }
    ]
  },
  {
    champion1: "Yone",
    champion2: "Yasuo",
    winRate: 51.2,
    synergyScore: 75,
    description: "Brothers in arms with similar playstyles, but team composition needs to be built around them.",
    counters: [
      { id: "Malphite", name: "Malphite", winRate: 62.7, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malphite.png" },
      { id: "Rammus", name: "Rammus", winRate: 61.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Rammus.png" },
      { id: "Poppy", name: "Poppy", winRate: 59.8, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Poppy.png" }
    ],
    synergies: [
      { id: "Zac", name: "Zac", winRate: 76.5, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zac.png" },
      { id: "Wukong", name: "Wukong", winRate: 75.2, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/MonkeyKing.png" },
      { id: "Alistar", name: "Alistar", winRate: 74.6, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Alistar.png" }
    ]
  },
  {
    champion1: "Kai'Sa",
    champion2: "Nautilus",
    winRate: 56.3,
    synergyScore: 83,
    description: "Nautilus' CC chains perfectly set up Kai'Sa's passive and burst damage.",
    counters: [
      { id: "Morgana", name: "Morgana", winRate: 57.6, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Morgana.png" },
      { id: "Janna", name: "Janna", winRate: 55.9, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png" },
      { id: "Lulu", name: "Lulu", winRate: 54.7, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png" }
    ],
    synergies: [
      { id: "Thresh", name: "Thresh", winRate: 78.4, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Thresh.png" },
      { id: "Leona", name: "Leona", winRate: 77.1, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png" },
      { id: "Blitzcrank", name: "Blitzcrank", winRate: 76.3, image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png" }
    ]
  }
];

window.championsData = champions;
window.matchupsData = matchups;