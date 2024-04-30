const db = require('../database/database')

class Note {

    static getAllNotes() {

        return new Promise((resolve, reject) => {
            db.find({ type: 'note' }, (err, docs) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(docs)
                }
            })
        })
    }
}

module.exports = Note