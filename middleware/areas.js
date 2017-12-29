module.exports = (req, res, next) => {
	req.checkBody('name', 'É necessário passar propriedade: name').notEmpty();

	req.getValidationResult().then(result => {
		if (!result.isEmpty()) {
			res.status(400).send(result.mapped());
			return;
		}
		next();
	});
};
