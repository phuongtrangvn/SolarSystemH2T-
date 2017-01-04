var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

const colors = require('./modules/additions/colors');
// var dal = require("./modules/dal");

var app = express();

//dev log
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'lol', resave: false, saveUninitialized: true, cookie: {} }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(express.static(path.join(__dirname, 'client')));

app.use('/public', express.static(path.join(__dirname, 'public')));

// app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).json({message: err.message, error: err});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({ message: err.message, error: err });
});

app.set('port', 8088);

var server = app.listen({ port: app.get('port')}, function() {
  console.log(colors.fg.Black, colors.bg.White, "Server opening at port: " ,colors.fg.Green, colors.bg.Red, app.get('port'), colors.Reset);
})

module.exports = app;
