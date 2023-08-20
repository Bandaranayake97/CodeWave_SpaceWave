const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Planet = sequelize.define("Planet", {
  Planet_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  PlanetName: {
    type: DataTypes.STRING(100),
  },
  Temperature: {
    type: DataTypes.INTEGER,
  },
  PlanetDescription: {
    type: DataTypes.STRING(1000),
  },
});

module.exports = Planet;
