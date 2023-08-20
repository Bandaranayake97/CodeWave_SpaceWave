const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Passenger = sequelize.define("Passenger", {
  Passenger_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  FirstName: {
    type: DataTypes.STRING(100),
  },
  LastName: {
    type: DataTypes.STRING(100),
  },
  PhoneNumber: {
    type: DataTypes.BIGINT,
    defaultValue: null,
  },
  Address: {
    type: DataTypes.STRING(100),
  },
  City: {
    type: DataTypes.STRING(100),
  },
  State: {
    type: DataTypes.STRING(100),
  },
  Zipcode: {
    type: DataTypes.STRING(100),
  },
  Country: {
    type: DataTypes.STRING(100),
  },
});

module.exports = Passenger;
