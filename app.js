const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);

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
  res.render('error');
});

module.exports = app;
