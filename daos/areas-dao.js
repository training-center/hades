const models = require('../models/');

module.exports = {
  lista: () => models.Area
    .findAll()
    .then(rtn => ({
      areas: rtn.map(area => ({
        id: area.id, name: area.name,
      })),
    })),

  adiciona: name => models.Area.create({
    name,
  }),

  atualiza: (id, newname) => models.Area
    .update({
      name: newname,
    }, {
      where: {
        id,
      },
    }),
};
