const models = require("../models/");

module.exports = {
  lista: () =>
  { 
    return models.Area.findAll()
      .then((rtn) => {
        return {
          areas: rtn.map((area) => {
            return {
              id: area.id,
              name: area.name
            }
          })
        }
      })
  },

  adiciona: (name) => {
    return models.Area.create({
      name: name
    })
  },

  atualiza: (id, newname) => {
    return models.Area.update({
      name: newname
    }, {
      where: {
        id:id
      }
    })
  }
}
