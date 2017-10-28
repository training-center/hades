
module.exports = (req, res, next) => {
  req.checkBody('name', 'A name is required.').notEmpty()
  req.checkBody('area', 'Choose an area of mentorship').notEmpty()
  req.checkBody('link', 'Social Personas').notEmpty()
  req.checkBody('email', 'E-mail contacts required').notEmpty()
  req.checkBody('pupils', 'Links to alumini').notEmpty()
  req.checkBod('cacceptance', 'Conde of Conduct Acceptance is mandatory').notEmpty()
  req.getValidationResult().then(result => {
      console.log("Até aqui!");
    if (!result.isEmpty()) {
      res.status(400).send({error: result});
      return;

    }
    next();
  }).catch((error) => console.log(error));
}
