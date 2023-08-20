const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Agency = require("./Agency");

const Shuttle_Details = sequelize.define("Shuttle_Details", {
  Shuttle_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Shuttle_Name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Source_Agency_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Destination_Agency_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  RoundTrip: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  Intermediate_Agency_ID: {
    type: DataTypes.INTEGER,
  },
  Departure_Date_Time: {
    type: DataTypes.DATE,
  },
  Arrival_Date_time: {
    type: DataTypes.DATE,
  },
  Shuttle_Type: {
    type: DataTypes.STRING(100),
  },
});

Shuttle_Details.belongsTo(Agency, {
  foreignKey: "Source_Agency_ID",
  as: "SourceAgency",
});
Shuttle_Details.belongsTo(Agency, {
  foreignKey: "Destination_Agency_ID",
  as: "DestinationAgency",
});

module.exports = Shuttle_Details;
