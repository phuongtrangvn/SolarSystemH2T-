var db = require('./db.js');
var models = require('./models.js')(db);

module.exports = {
    db: db,
    models: models
}
