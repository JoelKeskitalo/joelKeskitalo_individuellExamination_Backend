// importera modellen
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.registerUser = async (req, res) => {

    try {

        const { username, password } = req.body
        const user = await User.findUserByUsername(username) // modell-delen, tbc...
        
        if (user) {
            return res.status(409).send({ error: 'Username already exists'})
        }

        const newUser = await User.createUser(username, password) // modell-delen, tbc...

        res.status(200).json({ 
            message: 'User created successfully',
            user: 
            {
                id: newUser._id,
                username: newUser.username
            }
        })


    } catch (error) {

        if (error.message) {
            return res.status(400).json({ error: error.message})
        }
        res.status(500).send({ message: 'Internal server error'})
    }

}



exports.loginUser = async (req, res) => {
    try {

        const { username, password } = req.body

        const user = await User.findUserByUsername(username)
        if (!user) {
            return res.status(404).json({ error: 'User not found'})
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(401).json({ error: 'Invalid credentials'})
        }

        res.status(200).json({ message: 'Login successful' })

    } catch (error) {

        if (error.message) {
            return res.status(400).json({ error: error.message})
        }

        res.status(500).json({ message: 'Internal server error'})
    }
}