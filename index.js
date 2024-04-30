const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()
const PORT = process.env.PORT || 5000

const userRoutes = require('./routes/userRoutes')
const notesRoutes = require('./routes/notesRoutes')

// Swagger definition
const swaggerOptions = {
    definition: {
      openapi: '3.0.0', 
      info: {
        title: 'Notes API',
        version: '1.0.0',
        description: 'A simple API for managing notes',
      },
      servers: [
        {
          url: 'http://localhost:5000/notesapi/', 
        },
      ],
    },
    apis: ['./routes/*.js'], // Sökvägar till route-filerna
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)
  
// Använd swagger-ui-express för att "tjäna" Swagger-dokumentationen
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Middleware för JSON parsing
app.use(express.json())

// Routes, baseURL: http://localhost:5000
app.use('/notesapi/user', userRoutes)
app.use('/notesapi/notes', notesRoutes)

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`)
})