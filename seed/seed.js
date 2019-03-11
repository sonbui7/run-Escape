const db = require("../models");

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


db.sequelize.sync({ force: true}).then(function(){
    db.Item.bulkCreate(items)
        .then(function(rows){
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        }).catch(function(err){
            console.log({ err: err});
        });
});