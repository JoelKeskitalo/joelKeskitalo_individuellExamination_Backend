const db = require('../database/database')
const bcrypt = require('bcrypt')

class User {

    static async createUser (username, password) {

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = {
            type: 'user',
            username: username,
            password: hashedPassword
        }

        return db.insert(user)
    }

    static async findUserByUsername (username) {
        return db.findOne({type: 'user', username})
    }
}

module.exports = User