//front-end js mockup

//local user data (global)
let userChar = {};
let userInv = {};
let userLocation;
let userECount = 0;

//login and setup local data ajax
const login = function () {
    $.post("/api/users", {
        username: username,
        password: password
    }).then(function (user) {
        sessionStorage("token", user.id);
        userInv = JSON.parse(user.inventory);
        userChar = JSON.parse(user.stats);
        userLocation = user.location;
        userECount = user.encounterCount;
    })
}



//monster encounter function inc ajax

const mobEncounter = function (userLocation) {
    let mob;

    $.get("/api/location", {
        locationname: "Forest"
    }).then(function (location) {
        const randomNum = Math.floor(Math.random() * location.Mobs.length());
        mob = location.Mobs[randomNum];
    }).then(function () {
        //combat logic using userChar and mob.mobStats
        //save result to userChar
    }).catch(function(err){
        res.json(err);
    });
}



//inventory module

const invModule = {
    display: function (userInv) {
        for (let key in userInv) {
            const itemName = key;
            const itemAmount = userInv[key];

            //display here
        }
    },
    equipSwap: function (equipped, swappingTo) {

        if (userInv[`${equipped}`]) {
            if (userInv[`${equipped}`].quantity >= 1) {
                userInv[`${equipped}`].quantity++;
                //change userChar.equipped to swappingTo
                userInv[`${swappingTo}`].quantity--;

            } else {
                userInv[`${equipped}`].quantity = 1;
                //change userChar.equipped to swappingTo 
                userInv[`${swappingTo}`].quantity--;
            };
        } else {
            userInv[`${equipped}`].quantity = 1;
            //change userChar.equipped to swappingTo 
            userInv[`${swappingTo}`].quantity--;
        };

        if (userInv[`${swappingTo}`].quantity == 0) {
            delete userInv[`${swappingTo}`];
        };
    },
    acquire: function (name, amount) {

        if (userInv[`${name}`]) {
            if (userInv[`${name}`].quantity >= 0) {
                userInv[`${name}`].quantity + amount;
            } else {
                userInv[`${name}`].quantity = amount;
            }
        } else {
            userInv[`${name}`].quantity = amount;
        }
    },
    remove: function (name, amount) {

        if (userInv[`${name}`] >= amount) {
            userInv[`${name}`] - amount;
        }
        if (userInv[`${name}`] == 0) {
            delete userInv[`${name}`];
        }
    },
    sell: function (name, amount) {

        if (userInv[`${name}`] >= amount) {
            userInv[`${name}`] - amount;
            if (userInv[`${name}`] == 0) {
                delete userInv[`${name}`];
            }
        }
        //add gold
    },
    buy: function (name, amount, cost) {

        if (userInv.gold >= cost) {
            if (userInv[`${name}`]) {
                userInv[`${name}`] + amount;
            } else {
                userInv[`${name}`] = amount;
            }
        } else {
            //give error of insufficient gold
        }
    }

};


//location module (may not need)
const locationModule = {
    changeLocation: function(name) {
        userLocation = name;
    },
    encounterCounter: function() {
        encounterCount++;
    }
}



// data details:

// item table

// itemPropertiesCol >

// example

// {
//     damage: int,
//     defense/hp: int,
//     price: int
// }









