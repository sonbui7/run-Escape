const db = require('./models');

console.log("Copy?")

const seedMonster = [
    {
        "id": 1,
        'monster_name': "goblin",
        'attack': 1,
        'speed': 1,
        'hp': 10,
        'item': "gobble berry",
        'gold': 1,
        'xp': 1
    }
]

const seedLoc = [
    {
        "id": 1,
        "location_name": 'forest',
        "monsters": "goblin kobold sprite TA",
        "encounters": "battle trap treasure npc tba"
    }
]
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

const seedChar = [
    {
        id: id,
        name: name,
        attack: 1,
        speed: 1,
        hp: 1,
        luck: 1,
        toHit: 1,
        dodge: 1, 
        inventory: 1,//string to parse
        stock: 1
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
    db.Location.bulkCreate(seedLoc)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})