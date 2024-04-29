const db = require('../database/database')
const bcrypt = require('bcrypt')

class User {

    static async createUser (username, password) {

        if (!username || !password) {
            throw new Error('Username and password required')
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long')
        }

        if(!username.trim() || username.indexOf('') >= 0) {
            throw new Error('Username cannot contain spaces')
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = {
            type: 'user',
            username: username,
            password: hashedPassword
        }

        return db.insert(user)
    }

    static async findUserByUsername (username) {

        if (!username) {
            throw new Error('Username is required')
        }

        return db.findOne({type: 'user', username})
    }
}

module.exports = User