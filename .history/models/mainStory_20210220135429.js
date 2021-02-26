module.exports = function(sequelize, DataTypes) {
    const MainStory = sequelize.define("MainStory", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice: {
            type: DataTypes.STRING
        }
    })
    return MainStory;
};