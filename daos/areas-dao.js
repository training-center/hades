const models = require('../models/');

module.exports = {
	lista: () => {
		return models.Area
			.findAll()
      .then(rtn => ({
				areas: rtn.map(area => ({
					id: area.id, name: area.name
				}))
			}));
	},

	adiciona: name => {
		return models.Area.create({
			name
		});
	},

	atualiza: (id, newname) => {
		return models.Area
			.update({
				name: newname
			}, {
				where: {
					id
				}
			});
	}
};
