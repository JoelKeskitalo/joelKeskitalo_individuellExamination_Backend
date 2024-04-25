const express = require('express')
const router = express.Router()

const notesController = require('../controllers/notesController')

// base: api/notes

router.get('/', notesController.getAllNotes)
router.post('/', notesController.createNote)
router.put('/:id', notesController.updateNote)
router.delete('/:id', notesController.deleteNote)
router.get('/search', notesController.searchNotes)

module.exports = router