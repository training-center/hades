const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize
 .authenticate()
    .then(() => {
      process.exit(0);
    })
    .catch(err => {
      process.exit(1);
    });
