const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log('database initiated');
  })
  .catch(() => {
    console.log('database failed to iniciate');
  });
