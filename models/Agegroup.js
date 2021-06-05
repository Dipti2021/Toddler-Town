const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Agegroup extends Model {}
Agegroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    daycare_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "daycare",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Agegroup',
  }
);
module.exports = Agegroup;