module.exports = function (connection, Sequelize) {
    const Monster = connection.define('Monster', {
        monster_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        stats: {
            type: Sequelize.JSON,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        item: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        gold: {
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    });

    Monster.associate = function(models) {
        Monster.belongsTo(models.Location);
    };

    return Monster;
}