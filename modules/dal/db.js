var config = require('./config.json');
var db = require('mongoose');

db.connect(config.connectionString, function(err) {
  if(err) {
    console.log(err);
    throw err;
  } else {
    console.log('Connect to database: ' + config.dbName);
  }
});

module.exports = db;
