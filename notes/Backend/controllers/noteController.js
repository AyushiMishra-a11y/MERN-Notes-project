const Note = require('../models/Note');

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const note = new Note({
      user: req.user,
      title: req.body.title,
      content: req.body.content
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all notes for the logged-in user
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      { title: req.body.title, content: req.body.content },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    console.log('Delete Note:', req.params.id, req.user); // Add this line
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note deleted' });
  } catch (err) {
    console.error('Delete error:', err); // Add this line
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};