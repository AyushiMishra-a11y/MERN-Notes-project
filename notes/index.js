console.log("This is the correct index.js file!");
const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/assignmentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post('/test', (req, res) => {
  res.send('Test route working!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});