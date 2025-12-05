const express = require('express')
const db = require('./config/db')
const Movie = require('./Model/MovieModel')
const M_router = require('./Routes/MovieRouter')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('./Movie', M_router)

app.listen(8000, () => {
    console.log('Server listen')
})