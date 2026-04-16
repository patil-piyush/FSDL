const express = require('express');
const router = express.Router();
const { getAllStudents, createStudent } = require('../controllers/controller');

// Main page (shows students)
router.get('/', getAllStudents);

// Add student
router.post('/students', createStudent);

module.exports = router;