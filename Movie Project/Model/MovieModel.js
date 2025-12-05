const mongoos = require('mongoose')

const MovieSchema = mongoos.Schema({
    Moviename: {
        type: String
    },
    Genre: {
        type: String
    }
})

const movieModel = mongoos.model('MOvie', MovieSchema)

module.exports = movieModel