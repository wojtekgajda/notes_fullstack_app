const Note = require('../db/mongoose')

class apiActions {
    // Get all notes
    getAllNotes =  (req, res) => {
         Note.find()
            .then((notes) => {
                res.status(200).json(notes);
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({message: error.message})
            })
    };

    // Get single note
    getNote =  (req, res) => {
        const noteId = req.params.id
         Note.findById({_id: noteId}).then((note) => {
            res.status(200).json(note)
            console.log(note)
        }).catch((error) => {
            console.log(error)
            res.status(500).json({message: error.message})
        })
    };

    // Save note
    saveNote =  (req, res) => {
        let title = req.body.title
        let content = req.body.content
        const newNote = new Note({
            title: title,
            content: content,
        })
         newNote.save().then((note) => {
            console.log(note)
            res.status(201).json(note)
        }).catch((error) => {
            console.log(error)
            res.status(500).json({message: error.message})
        })
    };

    // Update note
    updateNote =  (req, res) => {
        const noteId = req.params.id
        const {title, content} = req.body
         Note.findOneAndUpdate({_id: noteId}, {title: title, content: content}, {new: true})
            .then((updatedNote) => {
                res.status(201).json(updatedNote)
                console.log('Note Updated')
            }).catch((error)=>{
                res.status(500).json({message: error.message})
            })
    };

    // Delete Note
    deleteNote =  (req, res) => {
        const noteId = req.params.id
         Note.deleteOne({_id: noteId})
            .then(() => {
                res.sendStatus(204)
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({message: error.message})
            })

    }

}

module.exports = new apiActions()

