module.exports = function (connection, Sequelize) {
    const Item = connection.define("Item", {
        itemname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        //equipment/ potion/ misc <----important, for client side logic
        itemType: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        //contains 2 properties, description: text for display.  effect: for simplicity's sake, just INT for now. we'll let item type determine the logic, and use this number as needed. Null for misc
        itemProperties: {
            type: Sequelize.TEXT,
            allowNull: false,
            default: "",
            validate: {
                notEmpty: true
            }
        }
        //possible feature with resources
    });

    return Item;
};