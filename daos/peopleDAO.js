const models = require("../models/")

module.exports = {
  lista: () =>
  { 
    return models.People.findAll()
      .then((people) => { people })
  },
  adiciona: (people) => {
    return models.People.create(people)
  },
  atualiza: (id, people) => {
    return models.People.update({
      people
    }, {
      where: {
        id:id
      }
    })
  }
}
