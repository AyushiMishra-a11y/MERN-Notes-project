const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Registration route
router.post('/register', register);

// Login route
router.post('/login', login);

 module.exports = router;

 //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODZkNDBlNzJjYTRjMzZlM2NjZDE3YjUiLCJpYXQiOjE3NTE5OTQyNzAsImV4cCI6MTc1MTk5Nzg3MH0.Rhv_Kq7LdgoZF2zYhyLnrR3bX-rbyVcPKKsILd9tOqQ