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


    static createNote(noteData) {
        return new Promise((resolve, reject) => {
            const note = {
                type: 'note',
                title: noteData.title,
                text: noteData.text,
                createdAt: new Date(),
                modifiedAt: new Date()
            }
            db.insert(note, (err, newDoc) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(newDoc)
                }
            })
        })
    }
}

module.exports = Note