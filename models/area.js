'use strict';
module.exports = (sequelize, DataTypes) => {
  var Area = sequelize.define('Area', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Area;
};
