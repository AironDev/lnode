const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Require file system module
const fs = require('file-system');



const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/mongo_test_queries', function() {
console.log('\n \t Database connection has been established successfully');
})
.catch(err => {
console.error('App starting error:', err.stack);
process.exit(1);
});


/*
    |||  I can choose to use controller method to handle request and response circle  |||
*/


// Include models
fs.readdirSync('models').forEach(function (file) {
	if(file.substr(-3) == '.js') {
      file = require('./models/' + file)
	}
})

/*
    |||  I'll use route method to handle request and response circle  |||
*/
// setup app routes
fs.readdirSync('./routes/').forEach(file => {
  if(file.substr(-3) == '.js') {
    // len = file.length;
    // filename = file.substr(0, len-3);
    file = require('./routes/' + file);
    app.use('/', file);
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function() {
  console.log('\n \t server running at 127.0.0.1 & listening on 3000'); 
  console.log("\n \t Server Time: " + Date())
})

module.exports = app;
