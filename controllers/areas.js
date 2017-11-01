
const areaDAO = require('../daos/areasDAO');

module.exports = {
  get:  (req, res) =>
  {
    areaDAO.lista()
      .then((areas) => res.send(areas))
  },

  post: (req, res) =>
  {
    areaDAO.adiciona(req.body.name)
      .then(() => areaDAO.lista())
      .then((areas) => res.send(areas))
  },

  put: (req, res) =>
  {
    areaDAO.atualiza(req.params.id, req.body.name)
      .then(([rows]) => {
        if (rows > 0)
        {
          return areaDAO.lista();
        } 
        else
        {
          res.status(403).send({msg: "Resource not found"});
        }
      })
      .then((areas) => res.send(areas))
  }
}
