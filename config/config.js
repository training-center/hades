const fs = require('fs');

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: null,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres',
        seederStorage: 'sequelize'
	},
	test: {
		username: process.env.DB_USERNAME,
		password: null,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres',
        seederStorage: 'sequelize'
	},
	production: {
		username: process.env.DB_USERNAME,
		password: null,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres',
        seederStorage: 'sequelize'
	}
};

