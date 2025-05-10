// Full champion data with extended stats
const champions = [
  {
    id: "Aatrox",
    name: "Aatrox",
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Aatrox.png",
    roles: ["Top"],
    stats: {
      winRate: 50.8,
      pickRate: 8.2,
      banRate: 12.5,
      kda: 2.3,
      tier: "S",
      damage: 8,
      toughness: 6,
      crowdControl: 4,
      mobility: 3,
      difficulty: 7
    },
    abilities: [
      { name: "The Darkin Blade", description: "Aatrox slams his greatsword down." },
      { name: "Infernal Chains", description: "Aatrox pulls in enemies with chains." },
      { name: "Umbral Dash", description: "Aatrox dashes in a direction." },
      { name: "World Ender", description: "Aatrox reveals his true form." }
    ]
  },
  {
    id: "Ahri",
    name: "Ahri",
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ahri.png",
    roles: ["Mid"],
    stats: {
      winRate: 51.2,
      pickRate: 9.8,
      banRate: 5.3,
      kda: 3.1,
      tier: "A",
      damage: 7,
      toughness: 3,
      crowdControl: 5,
      mobility: 8,
      difficulty: 6
    },
    abilities: [
      { name: "Orb of Deception", description: "Ahri sends out an orb that returns." },
      { name: "Fox-Fire", description: "Ahri releases fox-fires that target enemies." },
      { name: "Charm", description: "Ahri blows a kiss that charms enemies." },
      { name: "Spirit Rush", description: "Ahri dashes forward and fires essence bolts." }
    ]
  },
  {
    id: "Akali",
    name: "Akali",
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Akali.png",
    roles: ["Mid", "Top"],
    stats: {
      winRate: 49.7,
      pickRate: 7.5,
      banRate: 15.2,
      kda: 2.5,
      tier: "A",
      damage: 9,
      toughness: 4,
      crowdControl: 2,
      mobility: 8,
      difficulty: 8
    },
    abilities: [
      { name: "Five Point Strike", description: "Akali throws kunais in a cone." },
      { name: "Twilight Shroud", description: "Akali creates a smoke cloud." },
      { name: "Shuriken Flip", description: "Akali flips and throws a shuriken." },
      { name: "Perfect Execution", description: "Akali dashes through enemies." }
    ]
  },
  {
    id: "Malphite",
    name: "Malphite",
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malphite.png",
    roles: ["Top", "Support"],
    stats: {
      winRate: 52.1,
      pickRate: 4.2,
      banRate: 3.1,
      kda: 2.9,
      tier: "B",
      damage: 5,
      toughness: 8,
      crowdControl: 7,
      mobility: 2,
      difficulty: 2
    },
    abilities: [
      { name: "Seismic Shard", description: "Malphite sends a shard of earth at an enemy." },
      { name: "Brutal Strikes", description: "Malphite's attacks deal extra damage." },
      { name: "Ground Slam", description: "Malphite slams the ground, reducing attack speed." },
      { name: "Unstoppable Force", description: "Malphite charges to a location, knocking up enemies." }
    ]
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
      kda: 2.8,
      tier: "B",
      damage: 7,
      toughness: 4,
      crowdControl: 6,
      mobility: 1,
      difficulty: 4
    },
    abilities: [
      { name: "Call of the Void", description: "Malzahar opens a portal to the void." },
      { name: "Null Zone", description: "Malzahar creates a zone that damages enemies." },
      { name: "Malefic Visions", description: "Malzahar infects an enemy with visions." },
      { name: "Nether Grasp", description: "Malzahar suppresses an enemy champion." }
    ]
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
      kda: 3.1,
      tier: "A",
      damage: 4,
      toughness: 7,
      crowdControl: 8,
      mobility: 2,
      difficulty: 3
    },
    abilities: [
      { name: "Bramble Smash", description: "Maokai smashes the ground with his fist." },
      { name: "Twisted Advance", description: "Maokai roots himself to an enemy." },
      { name: "Sap Magic", description: "Maokai's abilities heal him." },
      { name: "Nature's Grasp", description: "Maokai summons a wall of brambles." }
    ]
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
      kda: 2.4,
      tier: "B",
      damage: 9,
      toughness: 4,
      crowdControl: 1,
      mobility: 6,
      difficulty: 4
    },
    abilities: [
      { name: "Alpha Strike", description: "Master Yi strikes multiple enemies." },
      { name: "Meditate", description: "Master Yi channels to heal himself." },
      { name: "Wuju Style", description: "Master Yi's attacks deal bonus true damage." },
      { name: "Highlander", description: "Master Yi becomes immune to slows and gains attack speed." }
    ]
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
      kda: 2.9,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 2,
      mobility: 3,
      difficulty: 5
    },
    abilities: [
      { name: "Double Up", description: "Miss Fortune fires a bullet that bounces." },
      { name: "Strut", description: "Miss Fortune gains movement speed when not attacked." },
      { name: "Make It Rain", description: "Miss Fortune rains bullets in an area." },
      { name: "Bullet Time", description: "Miss Fortune channels a barrage of bullets." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 7,
      toughness: 6,
      crowdControl: 5,
      mobility: 5,
      difficulty: 5
    },
    abilities: [
      { name: "Crushing Blow", description: "Wukong's next attack deals bonus damage." },
      { name: "Warrior Trickster", description: "Wukong becomes invisible and leaves a decoy." },
      { name: "Nimbus Strike", description: "Wukong dashes to enemies and creates clones." },
      { name: "Cyclone", description: "Wukong spins his staff, knocking up enemies." }
    ]
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
      kda: 2.2,
      tier: "A",
      damage: 8,
      toughness: 7,
      crowdControl: 3,
      mobility: 1,
      difficulty: 4
    },
    abilities: [
      { name: "Obliterate", description: "Mordekaiser smashes the ground with his mace." },
      { name: "Indestructible", description: "Mordekaiser gains a shield from damage dealt." },
      { name: "Death's Grasp", description: "Mordekaiser pulls enemies toward him." },
      { name: "Realm of Death", description: "Mordekaiser banishes an enemy to the Death Realm." }
    ]
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
      kda: 3.0,
      tier: "B",
      damage: 6,
      toughness: 4,
      crowdControl: 7,
      mobility: 1,
      difficulty: 3
    },
    abilities: [
      { name: "Dark Binding", description: "Morgana binds an enemy with dark magic." },
      { name: "Tormented Shadow", description: "Morgana corrupts an area with dark magic." },
      { name: "Black Shield", description: "Morgana shields an ally from magic damage and CC." },
      { name: "Soul Shackles", description: "Morgana latches chains onto nearby enemies." }
    ]
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
      kda: 3.3,
      tier: "A",
      damage: 5,
      toughness: 3,
      crowdControl: 6,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Aqua Prison", description: "Nami encases an enemy in a bubble." },
      { name: "Ebb and Flow", description: "Nami bounces a stream of water between allies and enemies." },
      { name: "Tidecaller's Blessing", description: "Nami empowers an ally's attacks." },
      { name: "Tidal Wave", description: "Nami summons a massive tidal wave." }
    ]
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
      kda: 2.1,
      tier: "B",
      damage: 7,
      toughness: 6,
      crowdControl: 3,
      mobility: 2,
      difficulty: 3
    },
    abilities: [
      { name: "Siphoning Strike", description: "Nasus's next attack deals bonus damage." },
      { name: "Wither", description: "Nasus slows an enemy's movement and attack speed." },
      { name: "Spirit Fire", description: "Nasus scorches the ground, reducing armor." },
      { name: "Fury of the Sands", description: "Nasus transforms, gaining bonus health and range." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 4,
      toughness: 7,
      crowdControl: 8,
      mobility: 2,
      difficulty: 4
    },
    abilities: [
      { name: "Dredge Line", description: "Nautilus throws his anchor, pulling himself or enemies." },
      { name: "Titan's Wrath", description: "Nautilus gains a shield and his attacks deal bonus damage." },
      { name: "Riptide", description: "Nautilus creates exploding waves around him." },
      { name: "Depth Charge", description: "Nautilus sends a shockwave that knocks up an enemy." }
    ]
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
      kda: 2.6,
      tier: "B",
      damage: 7,
      toughness: 3,
      crowdControl: 5,
      mobility: 4,
      difficulty: 6
    },
    abilities: [
      { name: "Blooming Burst", description: "Neeko throws a seed that blooms." },
      { name: "Shapesplitter", description: "Neeko becomes a copy of an ally." },
      { name: "Tangle-Barbs", description: "Neeko sends out vines that root enemies." },
      { name: "Pop Blossom", description: "Neeko leaps into the air, stunning nearby enemies." }
    ]
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
      kda: 2.8,
      tier: "C",
      damage: 8,
      toughness: 3,
      crowdControl: 2,
      mobility: 7,
      difficulty: 9
    },
    abilities: [
      { name: "Javelin Toss", description: "Nidalee throws a spear that deals more damage at range." },
      { name: "Bushwhack", description: "Nidalee sets a trap that reveals and damages enemies." },
      { name: "Primal Surge", description: "Nidalee heals an ally and grants attack speed." },
      { name: "Aspect of the Cougar", description: "Nidalee transforms into a cougar with new abilities." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 8,
      toughness: 5,
      crowdControl: 3,
      mobility: 6,
      difficulty: 4
    },
    abilities: [
      { name: "Duskbringer", description: "Nocturne throws a shadow blade that leaves a trail." },
      { name: "Shroud of Darkness", description: "Nocturne gains a spell shield." },
      { name: "Unspeakable Horror", description: "Nocturne tethers to an enemy, fearing them." },
      { name: "Paranoia", description: "Nocturne reduces vision and dashes to an enemy." }
    ]
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
      kda: 2.9,
      tier: "A",
      damage: 5,
      toughness: 6,
      crowdControl: 6,
      mobility: 4,
      difficulty: 4
    },
    abilities: [
      { name: "Consume", description: "Willump takes a bite out of a minion or monster." },
      { name: "Biggest Snowball Ever!", description: "Nunu rolls a snowball that grows in size." },
      { name: "Snowball Barrage", description: "Nunu throws multiple snowballs at enemies." },
      { name: "Absolute Zero", description: "Nunu and Willump channel an icy storm around them." }
    ]
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
      kda: 2.4,
      tier: "B",
      damage: 8,
      toughness: 6,
      crowdControl: 2,
      mobility: 3,
      difficulty: 3
    },
    abilities: [
      { name: "Undertow", description: "Olaf throws an axe that slows enemies." },
      { name: "Vicious Strikes", description: "Olaf gains attack speed and lifesteal." },
      { name: "Reckless Swing", description: "Olaf attacks with such force that it damages himself." },
      { name: "Ragnarok", description: "Olaf becomes immune to disables and gains bonus stats." }
    ]
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
      kda: 3.1,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 5,
      mobility: 2,
      difficulty: 7
    },
    abilities: [
      { name: "Command: Attack", description: "Orianna commands her ball to attack a location." },
      { name: "Command: Dissonance", description: "Orianna commands her ball to release a shockwave." },
      { name: "Command: Protect", description: "Orianna commands her ball to attach to an ally." },
      { name: "Command: Shockwave", description: "Orianna commands her ball to unleash a shockwave." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 6,
      toughness: 8,
      crowdControl: 6,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Volcanic Rupture", description: "Ornn slams the ground, creating a fissure." },
      { name: "Bellows Breath", description: "Ornn becomes unstoppable and breathes fire." },
      { name: "Searing Charge", description: "Ornn charges, stopping at the first enemy champion hit." },
      { name: "Call of the Forge God", description: "Ornn summons a massive elemental." }
    ]
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
      kda: 2.6,
      tier: "B",
      damage: 8,
      toughness: 5,
      crowdControl: 4,
      mobility: 4,
      difficulty: 4
    },
    abilities: [
      { name: "Comet Spear", description: "Pantheon hurls his spear at an enemy." },
      { name: "Shield Vault", description: "Pantheon dashes to an enemy, stunning them." },
      { name: "Aegis Assault", description: "Pantheon braces his shield, blocking attacks." },
      { name: "Grand Starfall", description: "Pantheon leaps into the air and crashes down at a location." }
    ]
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
      kda: 2.9,
      tier: "B",
      damage: 6,
      toughness: 7,
      crowdControl: 7,
      mobility: 3,
      difficulty: 5
    },
    abilities: [
      { name: "Hammer Shock", description: "Poppy smashes the ground, damaging enemies." },
      { name: "Steadfast Presence", description: "Poppy gains movement speed and stops enemy dashes." },
      { name: "Heroic Charge", description: "Poppy dashes to an enemy, pushing them back." },
      { name: "Keeper's Verdict", description: "Poppy channels and then smashes the ground." }
    ]
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
      kda: 2.5,
      tier: "A",
      damage: 7,
      toughness: 3,
      crowdControl: 5,
      mobility: 6,
      difficulty: 7
    },
    abilities: [
      { name: "Bone Skewer", description: "Pyke stabs an enemy, pulling them toward him." },
      { name: "Ghostwater Dive", description: "Pyke becomes camouflaged and gains movement speed." },
      { name: "Phantom Undertow", description: "Pyke dashes forward, leaving behind a phantom." },
      { name: "Death From Below", description: "Pyke executes low-health enemies." }
    ]
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
      kda: 2.4,
      tier: "A",
      damage: 9,
      toughness: 3,
      crowdControl: 4,
      mobility: 7,
      difficulty: 8
    },
    abilities: [
      { name: "Edge of Ixtal", description: "Qiyana slashes with her weapon, dealing bonus damage." },
      { name: "Terrashape", description: "Qiyana gathers an element from the terrain." },
      { name: "Audacity", description: "Qiyana dashes to an enemy, dealing damage." },
      { name: "Supreme Display of Talent", description: "Qiyana creates a shockwave that stuns enemies." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 8,
      toughness: 3,
      crowdControl: 3,
      mobility: 7,
      difficulty: 5
    },
    abilities: [
      { name: "Blinding Assault", description: "Quinn commands Valor to blind an enemy." },
      { name: "Heightened Senses", description: "Quinn passively gains attack speed after attacking." },
      { name: "Vault", description: "Quinn dashes to an enemy, knocking them back." },
      { name: "Behind Enemy Lines", description: "Quinn and Valor unite, gaining massive movement speed." }
    ]
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
      kda: 3.2,
      tier: "A",
      damage: 4,
      toughness: 4,
      crowdControl: 7,
      mobility: 8,
      difficulty: 6
    },
    abilities: [
      { name: "Gleaming Quill", description: "Rakan flings a feather that heals allies." },
      { name: "Grand Entrance", description: "Rakan dashes to a location, charming enemies." },
      { name: "Battle Dance", description: "Rakan dashes to an ally, shielding them." },
      { name: "The Quickness", description: "Rakan gains movement speed and charms enemies." }
    ]
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
      kda: 2.9,
      tier: "A",
      damage: 5,
      toughness: 9,
      crowdControl: 5,
      mobility: 5,
      difficulty: 3
    },
    abilities: [
      { name: "Powerball", description: "Rammus rolls into a ball, gaining movement speed." },
      { name: "Defensive Ball Curl", description: "Rammus enters a defensive stance." },
      { name: "Frenzying Taunt", description: "Rammus taunts an enemy, forcing them to attack him." },
      { name: "Soaring Slam", description: "Rammus leaps into the air and slams down." }
    ]
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
      kda: 2.6,
      tier: "B",
      damage: 7,
      toughness: 6,
      crowdControl: 4,
      mobility: 5,
      difficulty: 5
    },
    abilities: [
      { name: "Queen's Wrath", description: "Rek'Sai's attacks cleave nearby enemies." },
      { name: "Burrow", description: "Rek'Sai burrows underground, gaining new abilities." },
      { name: "Furious Bite", description: "Rek'Sai bites an enemy, dealing true damage." },
      { name: "Void Rush", description: "Rek'Sai tunnels to a marked enemy." }
    ]
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
      kda: 2.8,
      tier: "B",
      damage: 4,
      toughness: 7,
      crowdControl: 8,
      mobility: 3,
      difficulty: 6
    },
    abilities: [
      { name: "Shattering Strike", description: "Rell stabs with her lance, breaking shields." },
      { name: "Ferromancy: Crash Down", description: "Rell leaps onto her mount, gaining movement speed." },
      { name: "Attract and Repel", description: "Rell magnetically binds to an ally." },
      { name: "Magnet Storm", description: "Rell creates a gravitational field around her." }
    ]
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
      kda: 3.3,
      tier: "B",
      damage: 5,
      toughness: 4,
      crowdControl: 6,
      mobility: 2,
      difficulty: 7
    },
    abilities: [
      { name: "Handshake", description: "Renata sends out a missile that roots enemies." },
      { name: "Bailout", description: "Renata grants an ally bonus attack speed and movement speed." },
      { name: "Loyalty Program", description: "Renata shields an ally and damages nearby enemies." },
      { name: "Hostile Takeover", description: "Renata sends out a cloud of chemicals that berserks enemies." }
    ]
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
      kda: 2.3,
      tier: "B",
      damage: 8,
      toughness: 6,
      crowdControl: 3,
      mobility: 4,
      difficulty: 4
    },
    abilities: [
      { name: "Cull the Meek", description: "Renekton swings his blade, healing for each enemy hit." },
      { name: "Ruthless Predator", description: "Renekton slashes an enemy multiple times, stunning them." },
      { name: "Slice and Dice", description: "Renekton dashes, dealing damage to enemies." },
      { name: "Dominus", description: "Renekton transforms into a more powerful form." }
    ]
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
      kda: 2.5,
      tier: "A",
      damage: 9,
      toughness: 4,
      crowdControl: 3,
      mobility: 6,
      difficulty: 7
    },
    abilities: [
      { name: "Savagery", description: "Rengar's next attack deals bonus damage." },
      { name: "Battle Roar", description: "Rengar lets out a roar, damaging nearby enemies." },
      { name: "Bola Strike", description: "Rengar throws a bola that slows enemies." },
      { name: "Thrill of the Hunt", description: "Rengar becomes camouflaged and senses nearby enemies." }
    ]
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
      kda: 2.2,
      tier: "A",
      damage: 8,
      toughness: 5,
      crowdControl: 4,
      mobility: 7,
      difficulty: 8
    },
    abilities: [
      { name: "Broken Wings", description: "Riven dashes and slashes in a direction." },
      { name: "Ki Burst", description: "Riven emits a ki burst, stunning nearby enemies." },
      { name: "Valor", description: "Riven dashes in a direction and gains a shield." },
      { name: "Blade of the Exile", description: "Riven empowers her sword, gaining bonus damage." }
    ]
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
      kda: 2.4,
      tier: "B",
      damage: 8,
      toughness: 5,
      crowdControl: 4,
      mobility: 2,
      difficulty: 6
    },
    abilities: [
      { name: "Flamespitter", description: "Rumble torches enemies in a cone in front of him." },
      { name: "Scrap Shield", description: "Rumble gains a shield and brief speed boost." },
      { name: "Electro Harpoon", description: "Rumble fires a harpoon that slows enemies." },
      { name: "The Equalizer", description: "Rumble fires a line of rockets that create a burning zone." }
    ]
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
      kda: 2.5,
      tier: "C",
      damage: 8,
      toughness: 4,
      crowdControl: 3,
      mobility: 3,
      difficulty: 9
    },
    abilities: [
      { name: "Overload", description: "Ryze hurls an energy orb that deals magic damage." },
      { name: "Rune Prison", description: "Ryze roots an enemy in place." },
      { name: "Spell Flux", description: "Ryze unleashes a rune that bounces between enemies." },
      { name: "Realm Warp", description: "Ryze opens a portal to teleport nearby allies." }
    ]
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
      kda: 2.6,
      tier: "A",
      damage: 9,
      toughness: 3,
      crowdControl: 2,
      mobility: 6,
      difficulty: 7
    },
    abilities: [
      { name: "Flair", description: "Samira attacks enemies in melee range or at range." },
      { name: "Blade Whirl", description: "Samira slashes around her, damaging enemies." },
      { name: "Wild Rush", description: "Samira dashes through an enemy or ally." },
      { name: "Inferno Trigger", description: "Samira unleashes a torrent of shots at nearby enemies." }
    ]
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
      kda: 3.0,
      tier: "A",
      damage: 5,
      toughness: 8,
      crowdControl: 7,
      mobility: 3,
      difficulty: 4
    },
    abilities: [
      { name: "Arctic Assault", description: "Sejuani charges forward, knocking up enemies." },
      { name: "Winter's Wrath", description: "Sejuani swings her flail, damaging and slowing enemies." },
      { name: "Permafrost", description: "Sejuani freezes stunned enemies." },
      { name: "Glacial Prison", description: "Sejuani throws her weapon, stunning the first enemy hit." }
    ]
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
      kda: 3.1,
      tier: "A",
      damage: 7,
      toughness: 3,
      crowdControl: 4,
      mobility: 2,
      difficulty: 6
    },
    abilities: [
      { name: "Piercing Darkness", description: "Senna fires a beam that heals allies and damages enemies." },
      { name: "Last Embrace", description: "Senna sends out a wave of Black Mist that roots enemies." },
      { name: "Curse of the Black Mist", description: "Senna becomes a wraith, hiding nearby allies." },
      { name: "Dawning Shadow", description: "Senna fires a global beam that shields allies and damages enemies." }
    ]
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
      kda: 3.4,
      tier: "A",
      damage: 7,
      toughness: 3,
      crowdControl: 6,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "High Note", description: "Seraphine projects a pure note, dealing magic damage." },
      { name: "Surround Sound", description: "Seraphine surrounds her nearby allies with a song." },
      { name: "Beat Drop", description: "Seraphine unleashes a heavy soundwave that slows enemies." },
      { name: "Encore", description: "Seraphine takes the stage, charming enemies." }
    ]
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
      kda: 2.4,
      tier: "B",
      damage: 8,
      toughness: 7,
      crowdControl: 5,
      mobility: 3,
      difficulty: 4
    },
    abilities: [
      { name: "Knuckle Down", description: "Sett's next two attacks deal bonus damage." },
      { name: "Haymaker", description: "Sett stores damage taken as Grit." },
      { name: "Facebreaker", description: "Sett pulls in enemies on both sides, stunning them." },
      { name: "The Show Stopper", description: "Sett grabs an enemy and slams them into the ground." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 3,
      mobility: 6,
      difficulty: 7
    },
    abilities: [
      { name: "Deceive", description: "Shaco becomes invisible and teleports a short distance." },
      { name: "Jack in the Box", description: "Shaco creates a hidden trap that fears enemies." },
      { name: "Two-Shiv Poison", description: "Shaco throws a dagger that slows enemies." },
      { name: "Hallucinate", description: "Shaco creates an illusion of himself." }
    ]
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
      kda: 2.8,
      tier: "A",
      damage: 5,
      toughness: 7,
      crowdControl: 5,
      mobility: 3,
      difficulty: 5
    },
    abilities: [
      { name: "Twilight Assault", description: "Shen's next attacks deal bonus damage." },
      { name: "Spirit's Refuge", description: "Shen creates a protective zone that blocks attacks." },
      { name: "Shadow Dash", description: "Shen dashes through enemies, taunting them." },
      { name: "Stand United", description: "Shen shields an ally and teleports to their location." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 7,
      toughness: 6,
      crowdControl: 3,
      mobility: 4,
      difficulty: 4
    },
    abilities: [
      { name: "Twin Bite", description: "Shyvana's next attack strikes twice." },
      { name: "Burnout", description: "Shyvana surrounds herself with fire." },
      { name: "Flame Breath", description: "Shyvana unleashes a fireball that marks enemies." },
      { name: "Dragon's Descent", description: "Shyvana transforms into a dragon." }
    ]
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
      kda: 2.3,
      tier: "B",
      damage: 6,
      toughness: 7,
      crowdControl: 4,
      mobility: 5,
      difficulty: 5
    },
    abilities: [
      { name: "Poison Trail", description: "Singed leaves a trail of poison behind him." },
      { name: "Mega Adhesive", description: "Singed creates a pool of adhesive that slows enemies." },
      { name: "Fling", description: "Singed tosses an enemy over his shoulder." },
      { name: "Insanity Potion", description: "Singed drinks a potent brew, gaining bonus stats." }
    ]
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
      kda: 2.2,
      tier: "B",
      damage: 6,
      toughness: 8,
      crowdControl: 6,
      mobility: 2,
      difficulty: 4
    },
    abilities: [
      { name: "Decimating Smash", description: "Sion charges a powerful swing that knocks up enemies." },
      { name: "Soul Furnace", description: "Sion shields himself and can explode the shield." },
      { name: "Roar of the Slayer", description: "Sion shouts, slowing and reducing armor." },
      { name: "Unstoppable Onslaught", description: "Sion charges forward, knocking aside enemies." }
    ]
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
      kda: 2.9,
      tier: "B",
      damage: 7,
      toughness: 3,
      crowdControl: 2,
      mobility: 4,
      difficulty: 4
    },
    abilities: [
      { name: "Boomerang Blade", description: "Sivir hurls her crossblade like a boomerang." },
      { name: "Ricochet", description: "Sivir's next attack bounces to nearby enemies." },
      { name: "Spell Shield", description: "Sivir creates a magical barrier that blocks a spell." },
      { name: "On The Hunt", description: "Sivir grants herself and nearby allies movement speed." }
    ]
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
      kda: 2.6,
      tier: "C",
      damage: 6,
      toughness: 7,
      crowdControl: 6,
      mobility: 4,
      difficulty: 4
    },
    abilities: [
      { name: "Crystal Slash", description: "Skarner slashes with his claws, dealing damage." },
      { name: "Crystalline Exoskeleton", description: "Skarner gains a shield and movement speed." },
      { name: "Fracture", description: "Skarner stuns an enemy with his tail." },
      { name: "Impale", description: "Skarner suppresses an enemy and drags them." }
    ]
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
      kda: 3.6,
      tier: "A",
      damage: 5,
      toughness: 3,
      crowdControl: 5,
      mobility: 3,
      difficulty: 3
    },
    abilities: [
      { name: "Hymn of Valor", description: "Sona plays an aura that damages enemies." },
      { name: "Aria of Perseverance", description: "Sona plays an aura that heals allies." },
      { name: "Song of Celerity", description: "Sona plays an aura that grants movement speed." },
      { name: "Crescendo", description: "Sona plays a powerful chord that stuns enemies." }
    ]
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
      kda: 3.5,
      tier: "A",
      damage: 4,
      toughness: 3,
      crowdControl: 4,
      mobility: 2,
      difficulty: 3
    },
    abilities: [
      { name: "Starcall", description: "Soraka calls down a star, damaging enemies." },
      { name: "Astral Infusion", description: "Soraka heals an ally at the cost of her own health." },
      { name: "Equinox", description: "Soraka creates a zone that silences enemies." },
      { name: "Wish", description: "Soraka heals all allied champions." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 7,
      toughness: 6,
      crowdControl: 5,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Death's Hand", description: "Swain unleashes demonic bolts that pierce enemies." },
      { name: "Vision of Empire", description: "Swain summons a demon eye that damages and reveals enemies." },
      { name: "Nevermove", description: "Swain marks the ground, rooting enemies after a delay." },
      { name: "Demonic Ascension", description: "Swain transforms into a demon, draining health from nearby enemies." }
    ]
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
      kda: 2.5,
      tier: "A",
      damage: 8,
      toughness: 5,
      crowdControl: 4,
      mobility: 5,
      difficulty: 8
    },
    abilities: [
      { name: "Chain Lash", description: "Sylas lashes out with his chains, damaging enemies." },
      { name: "Kingslayer", description: "Sylas swings his chains, dealing damage and healing himself." },
      { name: "Abscond", description: "Sylas dashes to a location and shields himself." },
      { name: "Hijack", description: "Sylas steals an enemy's ultimate ability." }
    ]
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
      kda: 2.8,
      tier: "A",
      damage: 9,
      toughness: 3,
      crowdControl: 4,
      mobility: 2,
      difficulty: 7
    },
    abilities: [
      { name: "Dark Sphere", description: "Syndra conjures a dark sphere that damages enemies." },
      { name: "Force of Will", description: "Syndra picks up and throws a dark sphere or minion." },
      { name: "Scatter the Weak", description: "Syndra knocks back enemies and dark spheres." },
      { name: "Unleashed Power", description: "Syndra hurls all dark spheres at an enemy." }
    ]
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
      kda: 2.9,
      tier: "B",
      damage: 5,
      toughness: 8,
      crowdControl: 6,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Tongue Lash", description: "Tahm Kench lashes out with his tongue, damaging and slowing enemies." },
      { name: "Abyssal Dive", description: "Tahm Kench dives underground and resurfaces at a target location." },
      { name: "Thick Skin", description: "Tahm Kench converts damage taken into grey health." },
      { name: "Devour", description: "Tahm Kench swallows an enemy or ally." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 5,
      mobility: 5,
      difficulty: 7
    },
    abilities: [
      { name: "Threaded Volley", description: "Taliyah hurls a volley of stones at enemies." },
      { name: "Seismic Shove", description: "Taliyah creates a fault line that knocks back enemies." },
      { name: "Unraveled Earth", description: "Taliyah creates a zone of exploding stones." },
      { name: "Weaver's Wall", description: "Taliyah summons a long wall of stone." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 9,
      toughness: 4,
      crowdControl: 2,
      mobility: 8,
      difficulty: 6
    },
    abilities: [
      { name: "Noxian Diplomacy", description: "Talon stabs an enemy, applying a bleed effect." },
      { name: "Rake", description: "Talon sends out a wave of blades that return to him." },
      { name: "Assassin's Path", description: "Talon vaults over terrain." },
      { name: "Shadow Assault", description: "Talon becomes invisible and dashes to an enemy." }
    ]
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
      kda: 3.3,
      tier: "A",
      damage: 4,
      toughness: 7,
      crowdControl: 6,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Starlight's Touch", description: "Taric heals nearby allies based on charges stored." },
      { name: "Bastion", description: "Taric links to an ally, protecting them." },
      { name: "Dazzle", description: "Taric sends out a wave of light that stuns enemies." },
      { name: "Cosmic Radiance", description: "Taric makes nearby allies invulnerable after a delay." }
    ]
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
      kda: 2.4,
      tier: "B",
      damage: 7,
      toughness: 3,
      crowdControl: 2,
      mobility: 3,
      difficulty: 4
    },
    abilities: [
      { name: "Blinding Dart", description: "Teemo shoots a dart that blinds an enemy." },
      { name: "Move Quick", description: "Teemo gains bonus movement speed when not attacked." },
      { name: "Toxic Shot", description: "Teemo's attacks poison enemies." },
      { name: "Noxious Trap", description: "Teemo places explosive mushroom traps." }
    ]
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
      kda: 3.0,
      tier: "S",
      damage: 5,
      toughness: 5,
      crowdControl: 8,
      mobility: 3,
      difficulty: 7
    },
    abilities: [
      { name: "Death Sentence", description: "Thresh throws his scythe, pulling an enemy toward him." },
      { name: "Dark Passage", description: "Thresh throws a lantern that shields allies." },
      { name: "Flay", description: "Thresh sweeps his chain, knocking enemies in a direction." },
      { name: "The Box", description: "Thresh creates walls of spectral energy that slow enemies." }
    ]
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
      kda: 2.6,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 2,
      mobility: 5,
      difficulty: 5
    },
    abilities: [
      { name: "Rapid Fire", description: "Tristana gains bonus attack speed." },
      { name: "Rocket Jump", description: "Tristana leaps to a location, resetting on kills." },
      { name: "Explosive Charge", description: "Tristana places a bomb on an enemy that explodes." },
      { name: "Buster Shot", description: "Tristana fires a massive cannonball that knocks back an enemy." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 7,
      toughness: 7,
      crowdControl: 3,
      mobility: 3,
      difficulty: 3
    },
    abilities: [
      { name: "Chomp", description: "Trundle bites an enemy, dealing damage and stealing stats." },
      { name: "Frozen Domain", description: "Trundle creates a zone that grants him bonus stats." },
      { name: "Pillar of Ice", description: "Trundle creates an icy pillar that blocks movement." },
      { name: "Subjugate", description: "Trundle drains an enemy's stats and heals himself." }
    ]
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
      kda: 2.2,
      tier: "B",
      damage: 9,
      toughness: 5,
      crowdControl: 1,
      mobility: 4,
      difficulty: 4
    },
    abilities: [
      { name: "Bloodlust", description: "Tryndamere gains fury with each attack." },
      { name: "Mocking Shout", description: "Tryndamere reduces nearby enemies' attack damage." },
      { name: "Spinning Slash", description: "Tryndamere spins through enemies, dealing damage." },
      { name: "Undying Rage", description: "Tryndamere becomes immune to death for a short time." }
    ]
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
      kda: 2.7,
      tier: "B",
      damage: 7,
      toughness: 3,
      crowdControl: 4,
      mobility: 5,
      difficulty: 7
    },
    abilities: [
      { name: "Wild Cards", description: "Twisted Fate throws three cards in a cone." },
      { name: "Pick A Card", description: "Twisted Fate cycles through cards with different effects." },
      { name: "Stacked Deck", description: "Twisted Fate gains bonus attack speed and damage." },
      { name: "Destiny", description: "Twisted Fate reveals all enemies and can teleport." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 9,
      toughness: 2,
      crowdControl: 2,
      mobility: 4,
      difficulty: 6
    },
    abilities: [
      { name: "Ambush", description: "Twitch becomes invisible and gains movement speed." },
      { name: "Venom Cask", description: "Twitch throws a cask that applies poison to enemies." },
      { name: "Contaminate", description: "Twitch detonates poison stacks on enemies." },
      { name: "Spray and Pray", description: "Twitch gains bonus attack range and damage." }
    ]
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
      kda: 2.6,
      tier: "A",
      damage: 7,
      toughness: 7,
      crowdControl: 4,
      mobility: 4,
      difficulty: 5
    },
    abilities: [
      { name: "Wilding Claw", description: "Udyr's next attacks strike with lightning." },
      { name: "Iron Mantle", description: "Udyr gains a shield and his next attacks heal him." },
      { name: "Blazing Stampede", description: "Udyr gains movement speed and his next attack stuns." },
      { name: "Wingborne Storm", description: "Udyr surrounds himself with a storm that damages enemies." }
    ]
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
      kda: 2.3,
      tier: "B",
      damage: 8,
      toughness: 6,
      crowdControl: 4,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Corrosive Charge", description: "Urgot fires a corrosive charge that slows enemies." },
      { name: "Purge", description: "Urgot rapidly fires his leg-mounted guns." },
      { name: "Disdain", description: "Urgot dashes forward, flipping an enemy over him." },
      { name: "Fear Beyond Death", description: "Urgot fires a drill that executes low-health enemies." }
    ]
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
      kda: 2.8,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 5,
      mobility: 2,
      difficulty: 6
    },
    abilities: [
      { name: "Piercing Arrow", description: "Varus charges and fires a powerful arrow." },
      { name: "Blighted Quiver", description: "Varus's attacks deal bonus magic damage." },
      { name: "Hail of Arrows", description: "Varus rains arrows that slow and grievously wound enemies." },
      { name: "Chain of Corruption", description: "Varus flings out a tendril that roots enemies." }
    ]
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
      kda: 2.5,
      tier: "S",
      damage: 9,
      toughness: 3,
      crowdControl: 1,
      mobility: 5,
      difficulty: 7
    },
    abilities: [
      { name: "Tumble", description: "Vayne rolls and her next attack deals bonus damage." },
      { name: "Silver Bolts", description: "Vayne's attacks apply stacks that deal true damage." },
      { name: "Condemn", description: "Vayne fires a bolt that knocks back an enemy." },
      { name: "Final Hour", description: "Vayne gains stealth and bonus attack damage." }
    ]
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
      kda: 2.6,
      tier: "A",
      damage: 9,
      toughness: 2,
      crowdControl: 5,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Baleful Strike", description: "Veigar unleashes dark energy that grants ability power." },
      { name: "Dark Matter", description: "Veigar calls a meteor to strike at a location." },
      { name: "Event Horizon", description: "Veigar creates a cage that stuns enemies." },
      { name: "Primordial Burst", description: "Veigar blasts an enemy with primordial energy." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 8,
      toughness: 2,
      crowdControl: 4,
      mobility: 1,
      difficulty: 6
    },
    abilities: [
      { name: "Plasma Fission", description: "Vel'Koz fires a bolt that splits in two." },
      { name: "Void Rift", description: "Vel'Koz opens a rift that damages enemies." },
      { name: "Tectonic Disruption", description: "Vel'Koz knocks up enemies in a line." },
      { name: "Life Form Disintegration Ray", description: "Vel'Koz channels a deadly beam." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 5,
      mobility: 3,
      difficulty: 6
    },
    abilities: [
      { name: "Mistral Bolt", description: "Vex fires a bolt that damages and slows enemies." },
      { name: "Personal Space", description: "Vex gains a shield and fears nearby enemies." },
      { name: "Looming Darkness", description: "Vex commands Shadow to dash to a location." },
      { name: "Shadow Surge", description: "Vex marks an enemy and can dash to them." }
    ]
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
      kda: 2.6,
      tier: "B",
      damage: 7,
      toughness: 6,
      crowdControl: 7,
      mobility: 5,
      difficulty: 4
    },
    abilities: [
      { name: "Vault Breaker", description: "Vi charges her punch." },
      { name: "Denting Blows", description: "Vi's punches break armor." },
      { name: "Relentless Force", description: "Vi's next punch knocks back enemies." },
      { name: "Cease and Desist", description: "Vi locks onto and pummels an enemy." }
    ]
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
      kda: 2.5,
      tier: "A",
      damage: 8,
      toughness: 5,
      crowdControl: 3,
      mobility: 5,
      difficulty: 7
    },
    abilities: [
      { name: "Blade of the Ruined King", description: "Viego's attacks deal bonus damage." },
      { name: "Spectral Maw", description: "Viego dashes and attacks an enemy." },
      { name: "Harrowed Path", description: "Viego creates a misty trail." },
      { name: "Heartbreaker", description: "Viego possesses defeated enemies." }
    ]
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
      kda: 2.7,
      tier: "B",
      damage: 8,
      toughness: 3,
      crowdControl: 3,
      mobility: 2,
      difficulty: 7
    },
    abilities: [
      { name: "Siphon Power", description: "Viktor blasts an enemy with energy." },
      { name: "Gravity Field", description: "Viktor creates a gravity field that stuns enemies." },
      { name: "Death Ray", description: "Viktor fires a laser beam that damages enemies." },
      { name: "Chaos Storm", description: "Viktor summons a storm that damages enemies." }
    ]
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
      kda: 2.4,
      tier: "B",
      damage: 8,
      toughness: 5,
      crowdControl: 2,
      mobility: 2,
      difficulty: 6
    },
    abilities: [
      { name: "Transfusion", description: "Vladimir drains an enemy's health." },
      { name: "Sanguine Pool", description: "Vladimir sinks into a pool of blood." },
      { name: "Tides of Blood", description: "Vladimir charges up a blood nova." },
      { name: "Hemoplague", description: "Vladimir infects enemies with a plague." }
    ]
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
      kda: 2.3,
      tier: "B",
      damage: 7,
      toughness: 7,
      crowdControl: 4,
      mobility: 3,
      difficulty: 4
    },
    abilities: [
      { name: "Thundering Smash", description: "Volibear gains movement speed and his next attack stuns." },
      { name: "Frenzied Maul", description: "Volibear mauls an enemy, healing himself." },
      { name: "Sky Splitter", description: "Volibear summons lightning that damages enemies." },
      { name: "Stormbringer", description: "Volibear summons a storm that damages enemies." }
    ]
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
      kda: 2.5,
      tier: "A",
      damage: 7,
      toughness: 6,
      crowdControl: 4,
      mobility: 5,
      difficulty: 4
    },
    abilities: [
      { name: "Jaws of the Beast", description: "Warwick lunges at an enemy, dealing damage and healing." },
      { name: "Blood Hunt", description: "Warwick senses low-health enemies and gains movement speed." },
      { name: "Primal Howl", description: "Warwick reduces damage taken and fears enemies." },
      { name: "Infinite Duress", description: "Warwick leaps to an enemy, suppressing them." }
    ]
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
      kda: 2.8,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 4,
      mobility: 3,
      difficulty: 6
    },
    abilities: [
      { name: "Double Daggers", description: "Xayah throws two daggers that return to her." },
      { name: "Deadly Plumage", description: "Xayah gains attack speed and movement speed." },
      { name: "Bladecaller", description: "Xayah recalls all her feathers, damaging enemies." },
      { name: "Featherstorm", description: "Xayah becomes untargetable and fires a wave of feathers." }
    ]
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
      kda: 2.6,
      tier: "B",
      damage: 8,
      toughness: 2,
      crowdControl: 4,
      mobility: 1,
      difficulty: 7
    },
    abilities: [
      { name: "Arcanopulse", description: "Xerath fires a long-range beam of energy." },
      { name: "Eye of Destruction", description: "Xerath calls down a blast of energy." },
      { name: "Shocking Orb", description: "Xerath fires an orb that stuns enemies." },
      { name: "Rite of the Arcane", description: "Xerath fires multiple long-range artillery shots." }
    ]
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
      kda: 2.5,
      tier: "B",
      damage: 7,
      toughness: 6,
      crowdControl: 4,
      mobility: 4,
      difficulty: 3
    },
    abilities: [
      { name: "Three Talon Strike", description: "Xin Zhao's next three attacks deal bonus damage." },
      { name: "Wind Becomes Lightning", description: "Xin Zhao thrusts his spear, slowing enemies." },
      { name: "Audacious Charge", description: "Xin Zhao charges to an enemy, dealing damage." },
      { name: "Crescent Guard", description: "Xin Zhao sweeps his spear around him." }
    ]
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
      kda: 2.4,
      tier: "B",
      damage: 8,
      toughness: 4,
      crowdControl: 4,
      mobility: 7,
      difficulty: 8
    },
    abilities: [
      { name: "Steel Tempest", description: "Yasuo thrusts his sword, damaging enemies." },
      { name: "Wind Wall", description: "Yasuo creates a wall that blocks projectiles." },
      { name: "Sweeping Blade", description: "Yasuo dashes through an enemy." },
      { name: "Last Breath", description: "Yasuo teleports to a knocked-up enemy." }
    ]
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
      kda: 2.5,
      tier: "A",
      damage: 8,
      toughness: 4,
      crowdControl: 4,
      mobility: 6,
      difficulty: 7
    },
    abilities: [
      { name: "Mortal Steel", description: "Yone slashes forward with his sword." },
      { name: "Spirit Cleave", description: "Yone cleaves enemies in a cone." },
      { name: "Soul Unbound", description: "Yone dashes forward in spirit form." },
      { name: "Fate Sealed", description: "Yone marks enemies and can dash to them." }
    ]
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
      kda: 2.2,
      tier: "B",
      damage: 7,
      toughness: 6,
      crowdControl: 3,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Last Rites", description: "Yorick's next attack deals bonus damage." },
      { name: "Dark Procession", description: "Yorick summons a wall of corpses." },
      { name: "Mourning Mist", description: "Yorick hurls a glob of mist that damages enemies." },
      { name: "Eulogy of the Isles", description: "Yorick summons the Maiden of the Mist." }
    ]
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
      kda: 3.2,
      tier: "B",
      damage: 4,
      toughness: 2,
      crowdControl: 4,
      mobility: 5,
      difficulty: 2
    },
    abilities: [
      { name: "Prowling Projectile", description: "Yuumi fires a missile that homes in on enemies." },
      { name: "You and Me!", description: "Yuumi attaches to an ally champion." },
      { name: "Zoomies", description: "Yuumi heals and grants movement speed." },
      { name: "Final Chapter", description: "Yuumi channels waves of damage." }
    ]
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
      kda: 2.9,
      tier: "A",
      damage: 5,
      toughness: 8,
      crowdControl: 7,
      mobility: 5,
      difficulty: 5
    },
    abilities: [
      { name: "Stretching Strikes", description: "Zac's next attack stretches to hit another enemy." },
      { name: "Unstable Matter", description: "Zac's body explodes, damaging nearby enemies." },
      { name: "Elastic Slingshot", description: "Zac launches himself to a location." },
      { name: "Let's Bounce!", description: "Zac bounces into the air multiple times." }
    ]
  },
  {
    id: "Zed",
    name: "Zed",
    image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zed.png",
    roles: ["Mid"],
    stats: {
      winRate: 49.2,
      pickRate: 13.5,
      banRate: 22.3,
      kda: 2.6,
      tier: "A",
      damage: 9,
      toughness: 3,
      crowdControl: 2,
      mobility: 8,
      difficulty: 8
    },
    abilities: [
      { name: "Razor Shuriken", description: "Zed throws a shuriken that damages enemies." },
      { name: "Living Shadow", description: "Zed creates a shadow that mimics his abilities." },
      { name: "Shadow Slash", description: "Zed slashes nearby enemies with his blades." },
      { name: "Death Mark", description: "Zed marks an enemy, then dashes to them." }
    ]
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
      kda: 2.7,
      tier: "A",
      damage: 8,
      toughness: 3,
      crowdControl: 2,
      mobility: 7,
      difficulty: 7
    },
    abilities: [
      { name: "Burst Fire", description: "Zeri fires a burst of electricity." },
      { name: "Ultrashock Laser", description: "Zeri fires a laser that slows enemies." },
      { name: "Spark Surge", description: "Zeri dashes a short distance." },
      { name: "Lightning Crash", description: "Zeri discharges electricity around her." }
    ]
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
      kda: 2.6,
      tier: "B",
      damage: 8,
      toughness: 2,
      crowdControl: 3,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Bouncing Bomb", description: "Ziggs throws a bomb that bounces." },
      { name: "Satchel Charge", description: "Ziggs throws an explosive charge." },
      { name: "Hexplosive Minefield", description: "Ziggs scatters proximity mines." },
      { name: "Mega Inferno Bomb", description: "Ziggs throws a massive bomb." }
    ]
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
      kda: 3.4,
      tier: "A",
      damage: 5,
      toughness: 3,
      crowdControl: 6,
      mobility: 2,
      difficulty: 6
    },
    abilities: [
      { name: "Time Bomb", description: "Zilean places a bomb on an enemy that explodes." },
      { name: "Rewind", description: "Zilean reduces the cooldowns of his other abilities." },
      { name: "Time Warp", description: "Zilean slows an enemy or speeds up an ally." },
      { name: "Chronoshift", description: "Zilean places a protective time rune on an ally." }
    ]
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
      kda: 2.7,
      tier: "B",
      damage: 8,
      toughness: 2,
      crowdControl: 5,
      mobility: 4,
      difficulty: 8
    },
    abilities: [
      { name: "Paddle Star", description: "Zoe fires a star that deals more damage the farther it travels." },
      { name: "Spell Thief", description: "Zoe picks up spell shards dropped by enemies." },
      { name: "Sleepy Trouble Bubble", description: "Zoe fires a bubble that puts enemies to sleep." },
      { name: "Portal Jump", description: "Zoe blinks to a nearby location." }
    ]
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
      kda: 2.5,
      tier: "A",
      damage: 7,
      toughness: 3,
      crowdControl: 6,
      mobility: 2,
      difficulty: 5
    },
    abilities: [
      { name: "Deadly Spines", description: "Zyra sends forth vines that damage enemies." },
      { name: "Rampant Growth", description: "Zyra plants a seed that grows into a plant." },
      { name: "Grasping Roots", description: "Zyra sends forth roots that damage and root enemies." },
      { name: "Stranglethorns", description: "Zyra summons a massive thicket that knocks up enemies." }
    ]
  }
];

// Extended matchup data with more details
const matchups = [
  {
    champion1: "Aatrox",
    champion2: "Darius",
    winRate: 48.2,
    gamesPlayed: 12500,
    synergyScore: 65,
    description: "Darius has a strong early game advantage against Aatrox with his bleed passive and ultimate execute. Aatrox needs to play safe until level 6 and look for jungle assistance.",
    lanePhase: {
      early: "Darius favored",
      mid: "Even",
      late: "Aatrox favored"
    },
    counters: [
      { 
        id: "Fiora", 
        name: "Fiora", 
        winRate: 62.1, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Fiora.png",
        reason: "Fiora can parry Aatrox's Q and outduel him"
      },
      { 
        id: "Irelia", 
        name: "Irelia", 
        winRate: 59.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Irelia.png",
        reason: "Irelia can dodge Aatrox's skills with her Q"
      },
      { 
        id: "Jax", 
        name: "Jax", 
        winRate: 58.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jax.png",
        reason: "Jax can counter Aatrox's auto-attacks with his E"
      }
    ],
    synergies: [
      { 
        id: "JarvanIV", 
        name: "Jarvan IV", 
        winRate: 68.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png",
        reason: "Jarvan's ult traps enemies for Aatrox's Q"
      },
      { 
        id: "Leona", 
        name: "Leona", 
        winRate: 66.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png",
        reason: "Leona's CC chains well with Aatrox's damage"
      },
      { 
        id: "Nautilus", 
        name: "Nautilus", 
        winRate: 65.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nautilus.png",
        reason: "Nautilus provides reliable CC for Aatrox"
      }
    ],
    tips: [
      "Darius should look to punish Aatrox's Q cooldowns early",
      "Aatrox should build Plated Steelcaps first",
      "Darius wins extended trades due to his passive",
      "Aatrox has better teamfight presence with his ultimate"
    ]
  },
  {
    champion1: "Ahri",
    champion2: "Zed",
    winRate: 52.3,
    gamesPlayed: 14300,
    synergyScore: 72,
    description: "Ahri can outplay Zed with her charm and mobility, making it a skill matchup favoring Ahri. Zed needs to bait out her charm before going all-in.",
    lanePhase: {
      early: "Zed favored",
      mid: "Skill matchup",
      late: "Ahri favored"
    },
    counters: [
      { 
        id: "Malzahar", 
        name: "Malzahar", 
        winRate: 61.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malzahar.png",
        reason: "Malzahar's suppression counters Zed's mobility"
      },
      { 
        id: "Lissandra", 
        name: "Lissandra", 
        winRate: 59.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lissandra.png",
        reason: "Lissandra's CC and ult counter Zed's all-in"
      },
      { 
        id: "Galio", 
        name: "Galio", 
        winRate: 57.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Galio.png",
        reason: "Galio's tankiness and CC make him strong against Zed"
      }
    ],
    synergies: [
      { 
        id: "Elise", 
        name: "Elise", 
        winRate: 70.1, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Elise.png",
        reason: "Elise's early ganks help Ahri snowball"
      },
      { 
        id: "LeeSin", 
        name: "Lee Sin", 
        winRate: 68.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/LeeSin.png",
        reason: "Lee Sin's early pressure complements Ahri's playstyle"
      },
      { 
        id: "JarvanIV", 
        name: "Jarvan IV", 
        winRate: 67.9, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png",
        reason: "Jarvan's ult sets up Ahri's charm"
      }
    ],
    tips: [
      "Ahri should save charm for when Zed ults onto her",
      "Zed can rush Hexdrinker against Ahri",
      "Ahri's ult charges allow her to dodge Zed's shurikens",
      "Zed should look to roam if lane is difficult"
    ]
  },
  {
    champion1: "Jhin",
    champion2: "Lux",
    winRate: 53.7,
    gamesPlayed: 11200,
    synergyScore: 78,
    description: "Jhin and Lux have strong poke and burst potential together, with Lux's root setting up Jhin's W for easy follow-up damage.",
    lanePhase: {
      early: "Jhin/Lux favored",
      mid: "Jhin/Lux favored",
      late: "Even"
    },
    counters: [
      { 
        id: "Blitzcrank", 
        name: "Blitzcrank", 
        winRate: 58.6, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png",
        reason: "Blitzcrank can hook and burst either Jhin or Lux"
      },
      { 
        id: "Leona", 
        name: "Leona", 
        winRate: 56.9, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png",
        reason: "Leona's all-in counters their poke"
      },
      { 
        id: "Pyke", 
        name: "Pyke", 
        winRate: 55.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Pyke.png",
        reason: "Pyke's mobility and execute are strong against them"
      }
    ],
    synergies: [
      { 
        id: "Morgana", 
        name: "Morgana", 
        winRate: 72.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Morgana.png",
        reason: "Morgana's black shield protects Jhin from CC"
      },
      { 
        id: "Thresh", 
        name: "Thresh", 
        winRate: 70.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Thresh.png",
        reason: "Thresh's lantern provides Jhin with safety"
      },
      { 
        id: "Nami", 
        name: "Nami", 
        winRate: 69.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png",
        reason: "Nami's heal and CC complement Jhin well"
      }
    ],
    tips: [
      "Jhin should follow up Lux's roots with his W",
      "Lux can poke with E while Jhin farms safely",
      "Against engage supports, Jhin should position carefully",
      "Post-6, their burst combo can kill most bot lanes"
    ]
  },
  {
    champion1: "Yasuo",
    champion2: "Malphite",
    winRate: 56.2,
    gamesPlayed: 9800,
    synergyScore: 85,
    description: "Malphite's ultimate perfectly sets up Yasuo's ultimate, creating a devastating wombo-combo in teamfights. Their synergy is one of the strongest in the game.",
    lanePhase: {
      early: "Yasuo favored",
      mid: "Even",
      late: "Malphite/Yasuo combo favored"
    },
    counters: [
      { 
        id: "Janna", 
        name: "Janna", 
        winRate: 60.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png",
        reason: "Janna can disrupt their combo with her ult"
      },
      { 
        id: "Lulu", 
        name: "Lulu", 
        winRate: 58.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png",
        reason: "Lulu can polymorph Yasuo after Malphite ult"
      },
      { 
        id: "Poppy", 
        name: "Poppy", 
        winRate: 57.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Poppy.png",
        reason: "Poppy can stop Yasuo's dash with her W"
      }
    ],
    synergies: [
      { 
        id: "Zac", 
        name: "Zac", 
        winRate: 75.6, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zac.png",
        reason: "Zac's engage complements their combo"
      },
      { 
        id: "Wukong", 
        name: "Wukong", 
        winRate: 73.9, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/MonkeyKing.png",
        reason: "Wukong's ult synergizes with Yasuo's"
      },
      { 
        id: "Alistar", 
        name: "Alistar", 
        winRate: 72.1, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Alistar.png",
        reason: "Alistar provides additional CC for Yasuo"
      }
    ],
    tips: [
      "Malphite should communicate when his ult is ready",
      "Yasuo can windwall to protect Malphite as he engages",
      "They should look for teamfights around objectives",
      "Against disengage comps, they need to split up the enemy team"
    ]
  },
  {
    champion1: "Ezreal",
    champion2: "Yuumi",
    winRate: 54.8,
    gamesPlayed: 15600,
    synergyScore: 80,
    description: "Ezreal's mobility pairs well with Yuumi's attach mechanic, making them hard to catch and kill. Yuumi's poke and sustain complement Ezreal's safe playstyle.",
    lanePhase: {
      early: "Even",
      mid: "Ezreal/Yuumi favored",
      late: "Ezreal/Yuumi favored"
    },
    counters: [
      { 
        id: "Blitzcrank", 
        name: "Blitzcrank", 
        winRate: 59.1, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png",
        reason: "Blitz can hook Ezreal when Yuumi is detached"
      },
      { 
        id: "Nautilus", 
        name: "Nautilus", 
        winRate: 57.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nautilus.png",
        reason: "Nautilus can lock down Ezreal through his mobility"
      },
      { 
        id: "Leona", 
        name: "Leona", 
        winRate: 56.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png",
        reason: "Leona's all-in is strong against their poke"
      }
    ],
    synergies: [
      { 
        id: "Janna", 
        name: "Janna", 
        winRate: 74.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png",
        reason: "Janna provides additional peel for Ezreal"
      },
      { 
        id: "Lulu", 
        name: "Lulu", 
        winRate: 72.6, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png",
        reason: "Lulu's shields and buffs make Ezreal stronger"
      },
      { 
        id: "Soraka", 
        name: "Soraka", 
        winRate: 71.9, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Soraka.png",
        reason: "Soraka's global heal complements their playstyle"
      }
    ],
    tips: [
      "Ezreal should focus on farming until he gets his items",
      "Yuumi can poke with Q while attached to Ezreal",
      "Against engage supports, Ezreal should save E for disengage",
      "Late game they become a strong poke/sustain duo"
    ]
  },
  {
    champion1: "Darius",
    champion2: "Garen",
    winRate: 49.5,
    gamesPlayed: 8700,
    synergyScore: 58,
    description: "Classic juggernaut matchup where Darius has the edge with his bleed passive and ultimate reset potential. Garen needs to play safe early and look for short trades.",
    lanePhase: {
      early: "Darius favored",
      mid: "Darius favored",
      late: "Garen favored"
    },
    counters: [
      { 
        id: "Vayne", 
        name: "Vayne", 
        winRate: 63.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Vayne.png",
        reason: "Vayne can kite both Darius and Garen"
      },
      { 
        id: "Quinn", 
        name: "Quinn", 
        winRate: 61.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Quinn.png",
        reason: "Quinn's range and mobility counter them"
      },
      { 
        id: "Teemo", 
        name: "Teemo", 
        winRate: 59.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Teemo.png",
        reason: "Teemo's blind and poke are strong against them"
      }
    ],
    synergies: [
      { 
        id: "JarvanIV", 
        name: "Jarvan IV", 
        winRate: 69.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png",
        reason: "Jarvan's ult traps enemies for Darius"
      },
      { 
        id: "Sejuani", 
        name: "Sejuani", 
        winRate: 67.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Sejuani.png",
        reason: "Sejuani's CC helps them stick to targets"
      },
      { 
        id: "Amumu", 
        name: "Amumu", 
        winRate: 66.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Amumu.png",
        reason: "Amumu's ult sets up their damage"
      }
    ],
    tips: [
      "Darius should look to stack his passive on Garen",
      "Garen can use his W to mitigate Darius' damage",
      "Darius wins extended trades due to his bleed",
      "Garen should build armor and look for short trades"
    ]
  },
  {
    champion1: "Katarina",
    champion2: "Malzahar",
    winRate: 42.7,
    gamesPlayed: 10200,
    synergyScore: 35,
    description: "Malzahar's suppression completely shuts down Katarina's mobility and resets. This is one of Katarina's hardest matchups in mid lane.",
    lanePhase: {
      early: "Malzahar favored",
      mid: "Malzahar favored",
      late: "Malzahar favored"
    },
    counters: [
      { 
        id: "Fizz", 
        name: "Fizz", 
        winRate: 64.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Fizz.png",
        reason: "Fizz can dodge Malzahar's ult with his E"
      },
      { 
        id: "Kassadin", 
        name: "Kassadin", 
        winRate: 62.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Kassadin.png",
        reason: "Kassadin's magic resist and mobility counter Malz"
      },
      { 
        id: "Anivia", 
        name: "Anivia", 
        winRate: 60.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Anivia.png",
        reason: "Anivia's waveclear and CC are strong against Malz"
      }
    ],
    synergies: [
      { 
        id: "Ivern", 
        name: "Ivern", 
        winRate: 73.1, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Ivern.png",
        reason: "Ivern can shield Katarina during engages"
      },
      { 
        id: "Lulu", 
        name: "Lulu", 
        winRate: 71.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png",
        reason: "Lulu can polymorph threats to Katarina"
      },
      { 
        id: "Janna", 
        name: "Janna", 
        winRate: 70.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png",
        reason: "Janna can disrupt enemies chasing Katarina"
      }
    ],
    tips: [
      "Katarina should rush QSS against Malzahar",
      "Malzahar should save ult for when Katarina goes in",
      "Katarina can roam to other lanes if mid is difficult",
      "Malzahar should push waves to keep Katarina in lane"
    ]
  },
  {
    champion1: "Ashe",
    champion2: "Thresh",
    winRate: 55.1,
    gamesPlayed: 13400,
    synergyScore: 82,
    description: "Thresh's lantern provides Ashe with additional safety, while her slows set up his hooks. Their combined CC makes them deadly in lane and teamfights.",
    lanePhase: {
      early: "Ashe/Thresh favored",
      mid: "Ashe/Thresh favored",
      late: "Ashe/Thresh favored"
    },
    counters: [
      { 
        id: "Blitzcrank", 
        name: "Blitzcrank", 
        winRate: 57.9, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png",
        reason: "Blitz can hook Ashe when Thresh is out of position"
      },
      { 
        id: "Leona", 
        name: "Leona", 
        winRate: 56.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png",
        reason: "Leona's all-in can bypass Thresh's peel"
      },
      { 
        id: "Pyke", 
        name: "Pyke", 
        winRate: 55.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Pyke.png",
        reason: "Pyke's mobility makes him hard to pin down"
      }
    ],
    synergies: [
      { 
        id: "Nami", 
        name: "Nami", 
        winRate: 76.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png",
        reason: "Nami's heal and CC complement Ashe well"
      },
      { 
        id: "Lulu", 
        name: "Lulu", 
        winRate: 74.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png",
        reason: "Lulu's shields and buffs make Ashe stronger"
      },
      { 
        id: "Janna", 
        name: "Janna", 
        winRate: 73.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png",
        reason: "Janna provides additional peel for Ashe"
      }
    ],
    tips: [
      "Ashe should follow up Thresh's hooks with her W",
      "Thresh can lantern Ashe out of dangerous situations",
      "Against engage supports, Ashe should save her ult for disengage",
      "They should look to poke and whittle down enemies in lane"
    ]
  },
  {
    champion1: "Zed",
    champion2: "Lulu",
    winRate: 45.3,
    gamesPlayed: 9200,
    synergyScore: 40,
    description: "Lulu's polymorph and ultimate completely negate Zed's assassination potential. This is one of the hardest support matchups for Zed to deal with.",
    lanePhase: {
      early: "Zed favored",
      mid: "Lulu counters Zed",
      late: "Lulu counters Zed"
    },
    counters: [
      { 
        id: "Malzahar", 
        name: "Malzahar", 
        winRate: 63.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malzahar.png",
        reason: "Malzahar's suppression counters Zed"
      },
      { 
        id: "Lissandra", 
        name: "Lissandra", 
        winRate: 61.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lissandra.png",
        reason: "Lissandra's CC and ult counter Zed's all-in"
      },
      { 
        id: "Anivia", 
        name: "Anivia", 
        winRate: 59.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Anivia.png",
        reason: "Anivia's egg and waveclear make her strong against Zed"
      }
    ],
    synergies: [
      { 
        id: "JarvanIV", 
        name: "Jarvan IV", 
        winRate: 72.6, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png",
        reason: "Jarvan's early ganks help Zed snowball"
      },
      { 
        id: "LeeSin", 
        name: "Lee Sin", 
        winRate: 71.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/LeeSin.png",
        reason: "Lee Sin's early pressure complements Zed"
      },
      { 
        id: "Elise", 
        name: "Elise", 
        winRate: 70.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Elise.png",
        reason: "Elise's cocoon sets up Zed's damage"
      }
    ],
    tips: [
      "Zed should look to roam if Lulu is protecting her ADC",
      "Lulu should save polymorph for when Zed ults",
      "Zed can try to bait out Lulu's abilities before going in",
      "Lulu's ult can save allies from Zed's burst"
    ]
  },
  {
    champion1: "Vayne",
    champion2: "Lulu",
    winRate: 57.6,
    gamesPlayed: 17800,
    synergyScore: 88,
    description: "Lulu's shields and buffs make Vayne nearly unstoppable in late game teamfights. This is one of the strongest hypercarry/support pairings in the game.",
    lanePhase: {
      early: "Even",
      mid: "Vayne/Lulu favored",
      late: "Vayne/Lulu favored"
    },
    counters: [
      { 
        id: "Caitlyn", 
        name: "Caitlyn", 
        winRate: 58.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Caitlyn.png",
        reason: "Caitlyn can poke and outrange Vayne"
      },
      { 
        id: "Draven", 
        name: "Draven", 
        winRate: 56.9, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Draven.png",
        reason: "Draven's early damage can overwhelm them"
      },
      { 
        id: "Jhin", 
        name: "Jhin", 
        winRate: 55.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Jhin.png",
        reason: "Jhin's root and burst can catch Vayne"
      }
    ],
    synergies: [
      { 
        id: "Janna", 
        name: "Janna", 
        winRate: 79.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png",
        reason: "Janna provides additional peel for Vayne"
      },
      { 
        id: "Nami", 
        name: "Nami", 
        winRate: 77.6, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png",
        reason: "Nami's heal and CC complement Vayne"
      },
      { 
        id: "Soraka", 
        name: "Soraka", 
        winRate: 76.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Soraka.png",
        reason: "Soraka's global heal keeps Vayne alive"
      }
    ],
    tips: [
      "Vayne should focus on farming until she gets her items",
      "Lulu can use her polymorph on divers targeting Vayne",
      "Against poke lanes, they should play safe and sustain",
      "Late game they become an unstoppable duo"
    ]
  },
  {
    champion1: "Yone",
    champion2: "Yasuo",
    winRate: 51.2,
    gamesPlayed: 12300,
    synergyScore: 75,
    description: "Brothers in arms with similar playstyles, but team composition needs to be built around them. They both bring high damage and mobility but lack tankiness.",
    lanePhase: {
      early: "Yone favored",
      mid: "Yasuo favored",
      late: "Depends on team comp"
    },
    counters: [
      { 
        id: "Malphite", 
        name: "Malphite", 
        winRate: 62.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Malphite.png",
        reason: "Malphite's armor and ult counter them"
      },
      { 
        id: "Rammus", 
        name: "Rammus", 
        winRate: 61.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Rammus.png",
        reason: "Rammus' taunt and armor make him strong against them"
      },
      { 
        id: "Poppy", 
        name: "Poppy", 
        winRate: 59.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Poppy.png",
        reason: "Poppy can stop their dashes with her W"
      }
    ],
    synergies: [
      { 
        id: "Zac", 
        name: "Zac", 
        winRate: 76.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Zac.png",
        reason: "Zac's engage complements their damage"
      },
      { 
        id: "Wukong", 
        name: "Wukong", 
        winRate: 75.2, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/MonkeyKing.png",
        reason: "Wukong's ult synergizes with Yasuo's"
      },
      { 
        id: "Alistar", 
        name: "Alistar", 
        winRate: 74.6, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Alistar.png",
        reason: "Alistar provides CC to set up their damage"
      }
    ],
    tips: [
      "They should avoid picking both into heavy CC comps",
      "Yasuo can windwall to protect Yone during engages",
      "Yone's E allows him to safely poke before committing",
      "They excel in teamfights with knockup allies"
    ]
  },
  {
    champion1: "Kai'Sa",
    champion2: "Nautilus",
    winRate: 56.3,
    gamesPlayed: 14200,
    synergyScore: 83,
    description: "Nautilus' CC chains perfectly set up Kai'Sa's passive and burst damage. This is one of Kai'Sa's strongest support pairings for all-ins.",
    lanePhase: {
      early: "Nautilus/Kai'Sa favored",
      mid: "Nautilus/Kai'Sa favored",
      late: "Kai'Sa favored"
    },
    counters: [
      { 
        id: "Morgana", 
        name: "Morgana", 
        winRate: 57.6, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Morgana.png",
        reason: "Morgana's black shield counters Nautilus' CC"
      },
      { 
        id: "Janna", 
        name: "Janna", 
        winRate: 55.9, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Janna.png",
        reason: "Janna can disrupt their engages"
      },
      { 
        id: "Lulu", 
        name: "Lulu", 
        winRate: 54.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png",
        reason: "Lulu can polymorph Kai'Sa during fights"
      }
    ],
    synergies: [
      { 
        id: "Thresh", 
        name: "Thresh", 
        winRate: 78.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Thresh.png",
        reason: "Thresh's lantern provides Kai'Sa with safety"
      },
      { 
        id: "Leona", 
        name: "Leona", 
        winRate: 77.1, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Leona.png",
        reason: "Leona's CC chains well with Kai'Sa"
      },
      { 
        id: "Blitzcrank", 
        name: "Blitzcrank", 
        winRate: 76.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Blitzcrank.png",
        reason: "Blitz's hooks set up easy kills for Kai'Sa"
      }
    ],
    tips: [
      "Nautilus should look for hooks when Kai'Sa has her W up",
      "Kai'Sa can follow up Nautilus' CC with her full combo",
      "Against poke lanes, they should play safe until level 6",
      "Post-6 their all-in potential is extremely strong"
    ]
  },
  {
    champion1: "Viego",
    champion2: "Vi",
    winRate: 47.5,
    gamesPlayed: 8700,
    synergyScore: 68,
    description: "Vi has strong early game pressure against Viego with her point-and-click ultimate and armor shred. Viego needs to avoid early duels and scale into mid-game where he can outplay with his possession mechanic.",
    lanePhase: {
      early: "Vi favored",
      mid: "Even",
      late: "Viego favored"
    },
    counters: [
      { 
        id: "XinZhao", 
        name: "Xin Zhao", 
        winRate: 58.3, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/XinZhao.png",
        reason: "Xin Zhao can duel Viego early and out-sustain"
      },
      { 
        id: "LeeSin", 
        name: "Lee Sin", 
        winRate: 56.7, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/LeeSin.png",
        reason: "Lee Sin can outplay Viego with mobility"
      },
      { 
        id: "JarvanIV", 
        name: "Jarvan IV", 
        winRate: 55.1, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/JarvanIV.png",
        reason: "Jarvan's early game pressure is strong"
      }
    ],
    synergies: [
      { 
        id: "Yuumi", 
        name: "Yuumi", 
        winRate: 72.4, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Yuumi.png",
        reason: "Yuumi provides sustain and damage for Viego"
      },
      { 
        id: "Lulu", 
        name: "Lulu", 
        winRate: 70.8, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Lulu.png",
        reason: "Lulu's shields and buffs help Viego survive"
      },
      { 
        id: "Nami", 
        name: "Nami", 
        winRate: 69.5, 
        image: "https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/Nami.png",
        reason: "Nami's heal and CC complement Viego well"
      }
    ],
    tips: [
      "Vi should look to invade Viego's jungle early",
      "Viego should prioritize farming until level 6",
      "Vi's ultimate is great for shutting down Viego in teamfights",
      "Viego can turn fights around by possessing Vi after she dies"
    ]
  }
];

window.championsData = champions;
window.matchupsData = matchups;