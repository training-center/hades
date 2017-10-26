'use strict';
module.exports = (sequelize, DataTypes) => {
  var areas = sequelize.define('areas', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return areas;
};