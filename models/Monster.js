module.exports = function (connection, Sequelize) {
    const Monster = connection.define('Monster', {
        monster_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        attack: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        speed: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        hp: {
            type: Sequelize.INTEGER,
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
        },
        xp: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Monster.associate = function(models) {
        Monster.belongsTo(models.Location);
    };

    return Monster;
}