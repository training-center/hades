const peopleDAO = require('../daos/peopleDAO')

module.exports = {
  get:  (req, res) =>
  {
    peopleDAO.lista()
      .then((people) => res.send(people))
  },

  post: (req, res) =>
  {
    peopleDAO.adiciona(req.body)
      .then((people) => res.send({id: people.id, name: people.name}))
  },

  put: (req, res) =>
  {
    peopleDAO.atualiza(req.params.id, req.body)
      .then((rows) => {
        if (rows > 0)
        {
          return peopleDAO.lista()
        } 
        else
        {
          res.status(404).send({msg: "Person not found"})
        }
      })
      .then((people) => res.send(people))
  }
}
