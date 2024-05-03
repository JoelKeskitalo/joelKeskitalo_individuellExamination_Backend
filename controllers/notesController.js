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


exports.updateNote = async (req, res) => {
    try {
        const note = await Note.updateNote(req.params.id, req.body)
        if (note) {
            res.status(200).json(note)
        } else {
            res.status(404).json({ message: 'Note not found'})
        }

    } catch (error) {
        res.status(500).json({ message: 'Failed to update note', error: error.message})
    }
}



exports.deleteNote = async (req,res) => {
    try {
        const numRemoved = await Note.deleteNote(req.params.id)
        if(numRemoved > 0) {
            res.status(200).json({ message: 'Note deleted successfully'})
        } else {
            res.status(404).json({ message: 'Note not found'})
        }

    } catch(error) {
        res.status(500).json({ message: 'Failed to delete note', error: error.message})
    }
}



exports.searchNotes = async (req, res) => {
    try {
        const title = req.query.title
        if (!title) {
            return res.status(400).json({ message: 'Search term is required'})
        }
        const notes = await Note.searchNotes(title)
        res.status(200).json(notes)

    } catch(error) {
        res.status(500).json({ message: 'Error searching for notes', error: error.message})
    }
}