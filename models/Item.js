module.exports = function (connection, Sequelize) {
    const Item = connection.define("Item", {
        itemname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        itemType: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        itemProperties: {
            type: Sequelize.TEXT,
            allowNull: false,
            default: "{}",
            validate: {
                notEmpty: true
            }
        }
    });

    return Item;
};