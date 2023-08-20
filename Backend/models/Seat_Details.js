const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Travel_Class = require("./Travel_Class");
const Shuttle_Details = require("./Shuttle_Details");

const Seat_Details = sequelize.define("Seat_Details", {
  Seat_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Travel_Class_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shuttle_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Seat_Details.belongsTo(Travel_Class, { foreignKey: "Travel_Class_ID" });
Seat_Details.belongsTo(Shuttle_Details, { foreignKey: "shuttle_ID" });

module.exports = Seat_Details;
