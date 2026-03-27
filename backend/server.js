const express = require('express');
const { addTask } = require('./task');

const app = express();
app.use(express.json());

let tasks = [];

// Crear tarea
app.post('/tasks', (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = addTask(tasks, title, description);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});