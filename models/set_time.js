'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( {Band, SetTime, Stage}) {
      // define association here

      SetTime.belongsTo (Band, {
        foreignKey: "band_id",
        as: "band",
      })

      SetTime.belongsTo (Event, {
        foreignKey: "event_id",
        as: "event",
      })

      SetTime.belongsTo (Stage, {
        foreignKey: "stage_id",
        as: "stage",
      })
    }
  }
  set_time.init({
    event_id: DataTypes.SMALLINT,
    stage_id: DataTypes.SMALLINT,
    band_id: DataTypes.SMALLINT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    set_time_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'set_time',
  });
  return set_time;
};