const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const index = require('./routes/index');
const users = require('./routes/users');
const areas = require('./routes/areas');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/', index);
app.use('/users', users);
app.use('/areas', areas);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;

  // Render the error page
  res.status(err.status || 500);
  // Res.render('error');
});

module.exports = app;
