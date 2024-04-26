// importera modellen
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findUserByUsername(username) // modell-delen, tbc...

        if (user) {
            return res.status(409).send({ error: 'Username already exists'})
        }

        const newUser = await User.createUser(username, password) // modell-delen, tbc...
        res.status(200).send({ message: 'User created successfully'})
        
    } catch (error) {
        res.status(500).send({ message: 'Internal server error'})
    }

    
}



exports.loginUser = (req, res) => {
    res.status(200).send({ message: 'User logged in successfully'})
}