'use strict';
const {
  Model
} = require('sequelize');
const set_time = require('./set_time');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate({ Event, StageEvent, SetTime }) {
      // define association here
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })

      Stage.hasMany (SetTime, {
        foreignKey: "stage_id",
        as: "set_time",
      })
    }
  }
  Stage.init({
    stage_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};