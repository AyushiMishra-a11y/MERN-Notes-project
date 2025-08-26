import React, { useEffect, useState } from 'react';

function Notes({ token }) {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ title: '', content: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', content: '' });

  // Fetch notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/notes', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setNotes(data);
        } else {
          setMessage(data.message || 'Failed to fetch notes');
        }
      } catch (err) {
        setMessage('Error connecting to server');
      }
    };
    fetchNotes();
  }, [token]);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle add note
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setNotes([...notes, data]);
        setForm({ title: '', content: '' });
        setMessage('Note added!');
      } else {
        setMessage(data.message || 'Failed to add note');
      }
    } catch (err) {
      setMessage('Error connecting to server');
    }
  };

  // Handle delete note
  const handleDelete = async (id) => {
    setMessage('');
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setNotes(notes.filter(note => note._id !== id));
        setMessage('Note deleted!');
      } else {
        setMessage(data.message || 'Failed to delete note');
      }
    } catch (err) {
      setMessage('Error connecting to server');
    }
  };

  // Handle edit button click
  const startEdit = (note) => {
    setEditingId(note._id);
    setEditForm({ title: note.title, content: note.content });
  };

  // Handle edit form input
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Handle edit form submit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (res.ok) {
        setNotes(notes.map(note => note._id === editingId ? data : note));
        setEditingId(null);
        setMessage('Note updated!');
      } else {
        setMessage(data.message || 'Failed to update note');
      }
    } catch (err) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div>
      <h2>Your Notes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Note</button>
      </form>
      {message && <p className="message">{message}</p>}
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <ul className="note-list">
          {notes.map(note => (
            <li key={note._id}>
              {editingId === note._id ? (
                <form onSubmit={handleEditSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="text"
                    name="title"
                    value={editForm.title}
                    onChange={handleEditChange}
                    required
                  />
                  <input
                    type="text"
                    name="content"
                    value={editForm.content}
                    onChange={handleEditChange}
                    required
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
                </form>
              ) : (
                <>
                  <div className="note-content">
                    <strong>{note.title}</strong>: {note.content}
                  </div>
                  <div>
                    <button onClick={() => startEdit(note)}>Edit</button>
                    <button onClick={() => handleDelete(note._id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notes;