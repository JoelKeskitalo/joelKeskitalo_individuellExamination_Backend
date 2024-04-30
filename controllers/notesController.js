const Note = require('../models/notesModel')

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.getAllNotes()
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({ message: 'Unable to retrieve notes,', error: error.message}) 
    }
}



exports.createNote = async (req, res) => {
    try {
        const note = await Note.createNote(req.body) 
        res.status(201).json(note)
    } catch(error) {
        res.status(500).json({message: 'Failed to create note', error: error.message})
    }
}





exports.updateNote = (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: 'Failed to update note', error: error.message})
    }
}

exports.deleteNote = (req, res) => {
    try {

    } catch(error) {
        res.status(500).json({ message: 'Failed to delete note', error: error.message})
    }
}

exports.searchNotes = (req, res) => {
    try {

    } catch(error) {
        res.status(500).json({ message: 'Could not find note', error: error.message})
    }
}