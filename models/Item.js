module.exports = function (connection, Sequelize) {
    const Item = connection.define("Item", {
        itemName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        //weapon/ armor/  potion/ misc <----important, for client side logic
        itemType: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        //contains 2 properties, description: text for display.  effect: for simplicity's sake, just INT for now. we'll let item type determine the logic, and use this number as needed. Null for misc
        itemProperties: {
            type: Sequelize.JSON,
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


const test = {
    test1 : 2,
    test2 : 3,
    test3 : "{"
}