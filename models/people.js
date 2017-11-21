'use strict'
module.exports = (sequelize, DataTypes) => {
  let People = sequelize.define('Person', {
    name: DataTypes.STRING
  }, 
  {
    classMethods: {
      associate: function(models) {
      }
    }
  })
  return People
}
