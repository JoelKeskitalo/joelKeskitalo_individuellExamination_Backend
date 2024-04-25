const express = require('express')
const app = express()

// Middleware for parsing JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 6000






app.listen(PORT, () => {
    console.log(`Server running at: ${PORT}`)
})