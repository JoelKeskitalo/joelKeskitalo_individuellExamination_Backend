const Datastore = require('nedb');
const path = require('path');

let db = new Datastore({
  filename: path.join(__dirname, 'notes.db'),
  autoload: true
});

module.exports = db;
