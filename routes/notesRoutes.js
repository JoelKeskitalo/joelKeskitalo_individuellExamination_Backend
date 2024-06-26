const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
const verifyToken = require('../middleware/auth')

// base: notesapi/notes

/**
 * @openapi
 * /notes:
 *   get:
 *     summary: Retrieves all notes.
 *     description: This endpoint retrieves all notes for the logged-in user.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all notes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   text:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   modifiedAt:
 *                     type: string
 */
router.get('/', verifyToken, notesController.getAllNotes)

/**
 * @openapi
 * /notes:
 *   post:
 *     summary: Create a new note.
 *     description: This endpoint allows the user to create a new note.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note created successfully.
 */
router.post('/', verifyToken, notesController.createNote)

/**
 * @openapi
 * /notes/{id}:
 *   put:
 *     summary: Update an existing note.
 *     description: This endpoint allows the user to update an existing note by ID.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the note to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note updated successfully.
 */
router.put('/:id', verifyToken, notesController.updateNote)

/**
 * @openapi
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note.
 *     description: This endpoint allows the user to delete a note by ID.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the note to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note deleted successfully.
 */
router.delete('/:id', verifyToken, notesController.deleteNote)

/**
 * @openapi
 * /notes/search:
 *   get:
 *     summary: Search among notes.
 *     description: This endpoint allows users to search notes by title.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         description: Title to search for in notes.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved list of matching notes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   text:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   modifiedAt:
 *                     type: string
 *       400:
 *         description: Bad request, e.g., missing or invalid title parameter.
 */
router.get('/search', verifyToken, notesController.searchNotes)

module.exports = router
