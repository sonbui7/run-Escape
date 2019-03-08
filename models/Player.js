module.exports = function(connection, Sequelize) {
    const Player = connection.define("Player", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
            default: "Town",
            validate: {
                notEmpty: true,
                isIn: [["Town", "Forest", "Cave"]]
            }
        },
        encounterCount: {
            type: Sequelize.INTEGER,
            Default: 0,
            validate: {
                isInt: true
            }
        },
        //hp, atk, equipped items, maybe def
        stats: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        //what's in the bag
        inventory: {
            type: Sequelize.TEXT,
            allowNull: false,
            default: "{}",
            validate: {
                notEmpty: true
            }
        }
    });

    return Player;
};