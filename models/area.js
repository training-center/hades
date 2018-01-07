module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate() { },
    },
  });

  return Area;
};
