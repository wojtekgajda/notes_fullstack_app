const mongoose = require('mongoose')
const {database} = require('../config')

mongoose.connect(database)


const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    }
})

const Note = mongoose.model('Note', noteSchema)


module.exports = Note