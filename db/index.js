const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;
