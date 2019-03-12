const db = require('../models');

const seedMonster = [
    {
        'monster_name': "goblin",
        'stats': {
            attack : 1,
            hp : 10,
            speed : 1
        },
        'item': "gobble berry",
        'gold': 1,

    },
    {
        'monster_name': "kobold",
        'stats': {
            attack : 1,
            hp : 8,
            speed : 2
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
            attack : 2,
            hp : 10,
            speed: 1,
            chp: 10
        },
        inventory: [
            {
                itemName: "Lucky Underwear",
                itemType: "Trinket",
                itemProperties: {
                    description: "Family Heirloom Undies",
                    effect: 1
                }
            }
        ],
        equipped: {}
    }
]

const items = [
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

db.sequelize.sync({ force: true}).then(function(){
    db.Item.bulkCreate(items)
        .then(function(rows){
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        }).catch(function(err){
            console.log({ err: err});
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