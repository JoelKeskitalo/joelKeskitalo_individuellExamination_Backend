const Datastore = require('nedb')

let db = {}

db.notes = new Datastore( {filename: '/.database/notes.db', autoload: true} )

module.exports = db