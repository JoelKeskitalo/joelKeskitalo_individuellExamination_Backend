const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// base: notesapi/user

/**
 * @openapi
 * /user/signup:
 *   post:
 *     summary: Register a new user.
 *     description: This endpoint allows you to register a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully.
 */
router.post('/signup', userController.registerUser)

/**
 * @openapi
 * /user/login:
 *   post:
 *     summary: Login a user.
 *     description: This endpoint allows users to log in.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully.
 */
router.post('/login', userController.loginUser);

module.exports = router