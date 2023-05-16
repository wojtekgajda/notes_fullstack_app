const express = require('express');
const router = express.Router();
const apiActions= require('../actions/noteActions')


//endpoints
router.get('/notes', apiActions.getAllNotes)
router.get('/notes/:id',apiActions.getNote)
router.post('/notes', apiActions.saveNote)
router.put('/notes/:id', apiActions.updateNote)
router.delete('/notes/:id', apiActions.deleteNote)


module.exports = router