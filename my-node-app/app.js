const express = require('express');
const app = express();

app.use(express.json());

//Json data
let students = [
    { id: 1, name: "Khushboo" },
    { id: 2, name: "Kanishka" }
];

app.get('/students', (req, res) => {
    res.json(students);
});


// POST API (Add new student)
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(newStudent);
    res.json(newStudent);
});
//PUT API (Update student)
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (student) {
        student.name = req.body.name;
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});