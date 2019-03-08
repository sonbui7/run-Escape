module.exports = function(connection, Sequelize) {
    const Trap = connection.define("Trap", {
        trapName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        trapEffect: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Trap.associate = function(models) {
        Trap.belongsTo(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Trap;
};