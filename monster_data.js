const monsterList = [
    {
        name: 'Goblin',
        attack: 2,
        health: 15,
        drops: [
            { type: 'Gold', amount: 3, description: '3 Gold' },
            { type: 'Amulet', magicHeal: 5, description: 'Goblin Amulet' },
            { type: 'Health Potion', heal: 8, description: 'Small Health Potion' },
            { type: 'Useless Item', description: 'Rotten egg' },
            { type: 'Weapon', boostAttack: 1, description: 'Goblin Fang' }
        ]
    },
    {
        name: 'Zombie',
        attack: 3,
        health: 20,
        drops: [
            { type: 'Gold', amount: 5, description: '5 Gold' },
            { type: 'Amulet', magicHeal: 10, description: 'Zombie Amulet' },
            { type: 'Health Potion', heal: 10, description: 'Rotten Health Potion' },
            { type: 'Useless Item', description: 'Old Shoe' },
            { type: 'Weapon', boostAttack: 2, description: 'Zombie Arm' }
        ]
    },
    {
        name: 'Skeleton',
        attack: 4,
        health: 25,
        drops: [
            { type: 'Gold', amount: 6, description: '6 Gold' },
            { type: 'Amulet', magicHeal: 12, description: 'Bone Amulet' },
            { type: 'Health Potion', heal: 10, description: 'Minor Health Potion' },
            { type: 'Useless Item', description: 'Broken Sword' },
            { type: 'Weapon', boostAttack: 2, description: 'Skeleton Bow' }
        ]
    },
    {
        name: 'Orc',
        attack: 6,
        health: 30,
        drops: [
            { type: 'Gold', amount: 8, description: '8 Gold' },
            { type: 'Amulet', magicHeal: 15, description: 'Orc Pendant' },
            { type: 'Health Potion', heal: 12, description: 'Health Potion' },
            { type: 'Useless Item', description: 'Talkative chicken head' },
            { type: 'Weapon', boostAttack: 3, description: 'Orc Axe' }
        ]
    },
    {
        name: 'Giant Spider',
        attack: 7,
        health: 35,
        drops: [
            { type: 'Gold', amount: 10, description: '10 Gold' },
            { type: 'Amulet', magicHeal: 18, description: 'Spider Silk Amulet' },
            { type: 'Health Potion', heal: 15, description: 'Healing Nectar' },
            { type: 'Useless Item', description: 'Webbing' },
            { type: 'Weapon', boostAttack: 4, description: 'Spider Fang Dagger' }
        ]
    },
    {
        name: 'Troll',
        attack: 9,
        health: 50,
        drops: [
            { type: 'Gold', amount: 15, description: '15 Gold' },
            { type: 'Amulet', magicHeal: 25, description: 'Troll Amulet' },
            { type: 'Health Potion', heal: 20, description: 'Large Health Potion' },
            { type: 'Useless Item', description: 'Slimy "potion"' },
            { type: 'Weapon', boostAttack: 5, description: 'Troll Hammer' }
        ]
    },
    {
        name: 'Vampire',
        attack: 10,
        health: 45,
        drops: [
            { type: 'Gold', amount: 20, description: '20 Gold' },
            { type: 'Amulet', magicHeal: 30, description: 'Vampire Ring' },
            { type: 'Health Potion', heal: 25, description: 'Blood Health Potion' },
            { type: 'Useless Item', description: 'Bat Wings' },
            { type: 'Weapon', boostAttack: 6, description: 'Vampire Fangs' }
        ]
    },
    {
        name: 'Banshee',
        attack: 12,
        health: 50,
        drops: [
            { type: 'Gold', amount: 18, description: '18 Gold' },
            { type: 'Amulet', magicHeal: 32, description: 'Wailing Amulet' },
            { type: 'Health Potion', heal: 20, description: 'Eerie Health Potion' },
            { type: 'Useless Item', description: 'Banshee\'s Wail' },
            { type: 'Weapon', boostAttack: 6, description: 'Banshee Scythe' }
        ]
    },
    {
        name: 'Mummy',
        attack: 12,
        health: 55,
        drops: [
            { type: 'Gold', amount: 15, description: '15 Gold' },
            { type: 'Amulet', magicHeal: 35, description: 'Mummy Wraps' },
            { type: 'Health Potion', heal: 20, description: 'Scented Health Potion' },
            { type: 'Useless Item', description: 'Ancient Scroll' },
            { type: 'Weapon', boostAttack: 7, description: 'Mummy\'s Curse' }
        ]
    },
    {
        name: 'Minotaur',
        attack: 14,
        health: 60,
        drops: [
            { type: 'Gold', amount: 25, description: '25 Gold' },
            { type: 'Amulet', magicHeal: 40, description: 'Minotaur Horns' },
            { type: 'Health Potion', heal: 30, description: 'Greater Health Potion' },
            { type: 'Useless Item', description: 'Labyrinth Stone' },
            { type: 'Weapon', boostAttack: 8, description: 'Minotaur Axe' }
        ]
    },
    {
        name: 'Werewolf',
        attack: 14,
        health: 55,
        drops: [
            { type: 'Gold', amount: 20, description: '20 Gold' },
            { type: 'Amulet', magicHeal: 38, description: 'Wolf Fur Amulet' },
            { type: 'Health Potion', heal: 25, description: 'Howl Health Potion' },
            { type: 'Useless Item', description: 'Wolf Claw' },
            { type: 'Weapon', boostAttack: 7, description: 'Werewolf Claws' }
        ]
    },
    {
        name: 'Golem',
        attack: 16,
        health: 75,
        drops: [
            { type: 'Gold', amount: 30, description: '30 Gold' },
            { type: 'Amulet', magicHeal: 50, description: 'Golem Heart' },
            { type: 'Health Potion', heal: 35, description: 'Healing Crystal' },
            { type: 'Useless Item', description: 'Chunk of Stone' },
            { type: 'Weapon', boostAttack: 9, description: 'Golem\'s Fist' }
        ]
    },
    {
        name: 'Hydra',
        attack: 20,
        health: 90,
        drops: [
            { type: 'Gold', amount: 50, description: '50 Gold' },
            { type: 'Amulet', magicHeal: 60, description: 'Hydra Scale Amulet' },
            { type: 'Health Potion', heal: 50, description: 'Legendary Health Potion' },
            { type: 'Useless Item', description: 'Hydra Tooth' },
            { type: 'Weapon', boostAttack: 12, description: 'Hydra Sword' }
        ]
    },
    {
        name: 'Dragon',
        attack: 22,
        health: 100,
        drops: [
            { type: 'Gold', amount: 60, description: '60 Gold' },
            { type: 'Amulet', magicHeal: 70, description: 'Dragon Scale Amulet' },
            { type: 'Health Potion', heal: 45, description: 'Elder Health Potion' },
            { type: 'Useless Item', description: 'Dragon Scale' },
            { type: 'Weapon', boostAttack: 10, description: 'Dragon Claw' }
        ]
    },
    {
        name: 'Phoenix',
        attack: 20,
        health: 85,
        drops: [
            { type: 'Gold', amount: 55, description: '55 Gold' },
            { type: 'Amulet', magicHeal: 65, description: 'Phoenix Feather' },
            { type: 'Health Potion', heal: 45, description: 'Revival Potion' },
            { type: 'Useless Item', description: 'Ashes of the Past' },
            { type: 'Weapon', boostAttack: 10, description: 'Flame Sword' }
        ]
    }
]

export default monsterList
