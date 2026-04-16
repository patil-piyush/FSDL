const Student = require('../models/Student');

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.render('index', { students });
    } catch (err) {
        res.status(500).send('Error fetching students');
    }
};

// Create student
const createStudent = async (req, res) => {
    try {
        const { name, rollNo, branch } = req.body;

        const newStudent = new Student({
            name,
            rollNo,
            branch
        });

        await newStudent.save();

        res.redirect('/'); // 👈 important fix
    } catch (err) {
        res.status(500).send('Error creating student');
    }
};

module.exports = {
    getAllStudents,
    createStudent
};