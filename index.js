const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const userRoutes = require('./routes/userRoutes')
const notesRoutes = require('./routes/notesRoutes')

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes, baseURL: http://localhost:5000
app.use('/api/user', userRoutes)
app.use('/api/notes', notesRoutes)







app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`)
})