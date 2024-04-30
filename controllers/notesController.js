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
    res.status(200).send({ message: 'Note updated successfully'})
}

exports.deleteNote = (req, res) => {
    res.status(200).send({ message: 'Note deleted successfully'})
}

exports.searchNotes = (req, res) => {
    res.status(200).json([{ id: '1', title: 'Sample Note', text: 'This is a sample note.', createdAt: new Date(), modifiedAt: new Date() }])
}