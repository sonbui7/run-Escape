module.exports = function(connection, Sequelize) {
    const Location = connection.define("Location", {
        locationName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlphanumeric: true
            }
        }
    });


    Location.associate = function(models) {

        Location.hasMany(models.Trap, {
            foreignKey: {
                allowNull: true
            }
        });

        Location.hasMany(models.Monster, {
            foreingnKey: {
                allowNull: true
            }
        })
    };

    return Location;
};