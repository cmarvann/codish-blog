const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cherry extends Model {}

Cherry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photographer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taken_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    displayname_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  cherry_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'cherry',
      key: 'id',
    },
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'cherry',
}
);

module.exports = Cherry;
