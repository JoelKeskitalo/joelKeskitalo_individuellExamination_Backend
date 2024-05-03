const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // Hämta token från Authorization header
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        return res.status(403).json({ error: 'A token is required for authentication' })
    }

    // Splitta Authorization header med mellanslag och hämta det tredje elementet
    const token = authHeader.split(' ')[2]
    console.log('Authorization Header:', authHeader);  // Logga hela headern
    console.log('Extracted Token:', token)  // Logga extraherad token

    // Försök verifiera token
    try {
        const decoded = jwt.verify(token, 'secret_key')
        req.user = decoded
    } catch (err) {
        console.log('JWT Verification Error:', err)  // Logga fel som uppstår vid verifiering
        return res.status(401).json({ error: 'Invalid Token', details: err.message })
    }

    return next()
};

module.exports = verifyToken
