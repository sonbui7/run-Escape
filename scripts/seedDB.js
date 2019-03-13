const db = require('../models');

const seedMonster = [
    {
        'monster_name': "goblin",
        'stats': {
            attack: 1,
            hp: 10,
            speed: 1
        },
        'item': "gobble berry",
        'gold': 1,

    },
    {
        'monster_name': "kobold",
        'stats': {
            attack: 1,
            hp: 8,
            speed: 2
        },
        'item': "old meat",
        'gold': 1,

    }
]

const seedLoc = [
    {

        "locationName": 'forest',
    }
]

const seedChar = [
    {
        username: "Bob",
        password: "pass",
        location: "town",
        stats: {
            attack: 2,
            hp: 10,
            speed: 1,
            currentHp: 10
        },
        inventory: [
            {
                amount: 1,
                itemName: "Lucky Underwear",
                itemType: "Trinket",
                itemProperties: {
                    description: "Family Heirloom Undies",
                    effect: 1
                }
            },
            {
                amount: 1,
                itemName: "Grandma's Flip-Flop",
                itemType: "Weapon",
                itemProperties: {
                    description: "The mirror'd twin of this mythical weapon has long since been lost. The world has never seen a more brutal close combat weapon.",
                    effect: 50
                }
            },
            {
                amount: 1,
                itemName: "Grandma's Other Flip-Flop",
                itemType: "Trinket",
                itemProperties: {
                    description: "Ever wonder how granma was moving about so fluidly and effortlessly while dishing out a beating with the other flip flop? I wonder how you managed to find this.",
                    effect: 5
                }
            },
            {
                amount: 1,
                itemName: "SunnyDemise",
                itemType: "Potion",
                itemProperties: {
                    description: "Whatever this is, it's not orange juice.",
                    effect: 5
                }
            },
            {
                amount: 1,
                itemName: "Grandma's Mysterious Concoction",
                itemType: "Potion",
                itemProperties: {
                    description: "You have no idea what's in it, but was told that it cures all illnesses.",
                    effect: 60
                }
            },
            {
                amount: 1,
                itemName: "Goblin Underwear",
                itemType: "Misc",
                itemProperties: {
                    description: "Why are you collecting these?",
                    effect: 0
                }
            },
            {
                amount: 1,
                itemName: "Treasure Chest",
                itemType: "Misc",
                itemProperties: {
                    description: "Empty inside, just like you.",
                    effect: 0
                }
            },
            {
                amount: 1,
                itemName: "Pet Rock",
                itemType: "Misc",
                itemProperties: {
                    description: "Your best friend in this dangerous world. You named it Frank.",
                    effect: 0
                }
            },
            {
                amount: 1,
                itemName: "Cloudburst Techwear Set",
                itemType: "Armor",
                itemProperties: {
                    description: "Somehow allows you to carry your entire house with you while simultaneously weighing less than 5 micro-grams. Doesn't stop bullets.",
                    effect: 20
                }
            },
            {
                amount: 1,
                itemName: "Socks N' Crocs",
                itemType: "Armor",
                itemProperties: {
                    description: "Enemies shudder at the sight of this heinous combination, making their attacks significantly weaker.",
                    effect: 35
                }
            },
            {
                amount: 1,
                itemName: "Ketchup Stained Wife Beater",
                itemType: "Armor",
                itemProperties: {
                    description: "This game does not support domestic violence, neither does this shirt.",
                    effect: 30
                }
            }
        ],
        equipped: {
            Weapon: {
                "amount" : 1,
                "itemName": "Stick",
                "itemType": "Weapon",
                "itemProperties": {
                    "effect": 1,
                    "description": "It's just a stick."
                }

            },
            Armor: {
                "amount" : 1,
                "itemName": "Coat",
                "itemType": "Armor",
                "itemProperties": {
                    "effect": 5,
                    "description": "It's just a coat."
                }
            },
            Trinket: {
                "amount" : 1,
                "itemName": "Roller Skates",
                "itemType": "Trinket",
                "itemProperties": {
                    "effect": 2,
                    "description": "It's just a stick."
                }
            }
        }
    }
]

const items = [
    //new items
    {
        itemName: "Stick",
        itemType: "Weapon",
        itemProperties: {
            description: "It's just a stick.",
            effect: 0
        }
    },
    {
        itemName: "Tree Branch",
        itemType: "Weapon",
        itemProperties: {
            description: "Taken from your neighbor's lawn waste pile, better than a stick.",
            effect: 5
        }
    },
    {
        itemName: "Potato Peeler",
        itemType: "Weapon",
        itemProperties: {
            description: "Short reaching kitchen tool, looks like it would hurt a lot though.",
            effect: 10
        }
    },
    {
        itemName: "Kitchen Knife",
        itemType: "Weapon",
        itemProperties: {
            description: "Mass-produced kitchen knife with a half decent grip, not the worst choice as a weapon.",
            effect: 15
        }
    },
    {
        itemName: "Grandma's Flip-Flop",
        itemType: "Weapon",
        itemProperties: {
            description: "The mirror'd twin of this mythical weapon has long since been lost. The world has never seen a more brutal close combat weapon.",
            effect: 50
        }
    },
    {
        itemName: "Holy Water",
        itemType: "Weapon",
        itemProperties: {
            description: "It's actually just a jug of hydrochloric acid. Very effective against fleshy enemies.",
            effect: 30
        }
    },
    {
        itemName: "Ex-Wife's Photo",
        itemType: "Trinket",
        itemProperties: {
            description: "It just makes you sad",
            effect: 0
        }
    },
    {
        itemName: "Roller Skates",
        itemType: "Trinket",
        itemProperties: {
            description: "Really makes you wonder which genius invented these, human legs don't bent that way.",
            effect: 1
        }
    },
    {
        itemName: "Roller Blades",
        itemType: "Trinket",
        itemProperties: {
            description: "Now THIS is the correct way to do it.",
            effect: 2
        }
    },
    {
        itemName: "Segway",
        itemType: "Trinket",
        itemProperties: {
            description: "An invention that revolutionized the way we move about, or so it was claimed. You feel like a manatee riding this thing.",
            effect: 3
        }
    },
    {
        itemName: "Grandma's Other Flip-Flop",
        itemType: "Trinket",
        itemProperties: {
            description: "Ever wonder how granma was moving about so fluidly and effortlessly while dishing out a beating with the other flip flop? I wonder how you managed to find this.",
            effect: 5
        }
    },
    {
        itemName: "Mob Energy Drink",
        itemType: "Potion",
        itemProperties: {
            description: "It's really bad for you.",
            effect: 1
        }
    },
    {
        itemName: "SunnyDemise",
        itemType: "Potion",
        itemProperties: {
            description: "Whatever this is, it's not orange juice.",
            effect: 5
        }
    },
    {
        itemName: "Coco Cola",
        itemType: "Potion",
        itemProperties: {
            description: "No wonder it's so dark.",
            effect: 10
        }
    },
    {
        itemName: "Water",
        itemType: "Potion",
        itemProperties: {
            description: "Truly a gift from the gods.",
            effect: 20
        }
    },
    {
        itemName: "Grandma's Mysterious Concoction",
        itemType: "Potion",
        itemProperties: {
            description: "You have no idea what's in it, but was told that it cures all illnesses.",
            effect: 60
        }
    },
    {
        itemName: "Goblin Underwear",
        itemType: "Misc",
        itemProperties: {
            description: "Why are you collecting these?",
            effect: 0
        }
    },
    {
        itemName: "Treasure Chest",
        itemType: "Misc",
        itemProperties: {
            description: "Empty inside, just like you.",
            effect: 0
        }
    },
    {
        itemName: "A Penny",
        itemType: "Misc",
        itemProperties: {
            description: "The only purpose these serve is taking up space.",
            effect: 0
        }
    },
    {
        itemName: "Bottle Cap",
        itemType: "Misc",
        itemProperties: {
            description: "Part of your doomsday prep kit.",
            effect: 0
        }
    },
    {
        itemName: "Pet Rock",
        itemType: "Misc",
        itemProperties: {
            description: "Your best friend in this dangerous world. You named it Frank.",
            effect: 0
        }
    },
    //new iteam


    {
        itemName: "Padded Coat",
        itemType: "Armor",
        itemProperties: {
            description: "It's a coat, padded with some extra fabric. Offers slightly better protection against cold and attacks",
            effect: 10
        }
    },
    {
        itemName: "Burberry Trench Coat",
        itemType: "Armor",
        itemProperties: {
            description: "An overpriced piece of fabric. You feel slightly more fashionable wearing it. Offers decent protection against cold and attacks",
            effect: 15
        }
    },
    {
        itemName: "Cloudburst Techwear Set",
        itemType: "Armor",
        itemProperties: {
            description: "Somehow allows you to carry your entire house with you while simultaneously weighing less than 5 micro-grams. Doesn't stop bullets.",
            effect: 20
        }
    },
    {
        itemName: "Socks N' Crocs",
        itemType: "Armor",
        itemProperties: {
            description: "Enemies shudder at the sight of this heinous combination, making their attacks significantly weaker.",
            effect: 35
        }
    },
    {
        itemName: "Ketchup Stained Wife Beater",
        itemType: "Armor",
        itemProperties: {
            description: "This game does not support domestic violence, neither does this shirt.",
            effect: 30
        }
    },
    {
        itemName: "Mithril Plated Business Suit",
        itemType: "Armor",
        itemProperties: {
            description: "Created by the fusion of Middle Earth engineering and Italian craftsmanship. Deflects orc bolts and moving mushrooms alike.",
            effect: 50
        }
    },

    {
        itemName: "Stick",
        itemProperties: {
            description: "It's just a stick.",
            effect: 1
        }
    },
    {
        itemName: "Coat",
        itemProperties: {
            description: "It's just a coat.",
            effect: 5
        }
    },
    {
        itemName: "Coffee",
        itemProperties: {
            description: "It's Starbucks.",
            effect: 10
        }
    }
];

/*
const seedItem = [
    {
        "id": "id",
        "name": "name",
        "cost": "cost",
        "damage": "dmg" //(null),

    }
]

const seedNPC = [
    {
        id: id,
        name: name,
        event1: shop, //null
        event2: talk,
    }
]

const seedEvent = [
    {
        //events have options while encouters do not
        //players: eg monster or npc
        //path: pick a script
    }
]

const seedEncounters = [  //maybe not needed
    {
        //events have options while encouters do not
        //players: eg monster or npc
        //path: thing happens
    }
]

const seedShop =[{
    id,
    name,
    inventory, //string of item ids //think array
    stock, //sting of amounts //think array
    markup
}]

const seedAchieve = [{
    trigger,
    reward
}]
*/

db.sequelize.sync({ force: true }).then(function () {
    db.Item.bulkCreate(items)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        }).catch(function (err) {
            console.log({ err: err });
        });
});

db.sequelize.sync({ force: true }).then(function () {
    db.Monster.bulkCreate(seedMonster)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})

db.sequelize.sync({ force: true }).then(function () {
    db.Player.bulkCreate(seedChar)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})

db.sequelize.sync({ force: true }).then(function () {
    db.Location.bulkCreate(seedLoc)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})