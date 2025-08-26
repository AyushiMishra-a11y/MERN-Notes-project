const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

// Create a note
router.post('/', auth, createNote);

// Get all notes for user
router.get('/', auth, getNotes);

// Update a note
router.put('/:id', auth, updateNote);

// Delete a note
router.delete('/:id', auth, deleteNote);

module.exports = router;