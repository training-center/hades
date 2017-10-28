const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const expressValidator = require('express-validator');

const index = require('./routes/index');
const users = require('./routes/users');
const mentors = require('./routes/mentors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/', index);
app.use('/users', users);
app.use('/mentors', mentors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
