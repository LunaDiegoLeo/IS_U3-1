const express = require('express');
const {
    addTask,
    completeTask,
    editTask,
    deleteTask,
    filterTasks,
    setPriority
} = require('./task');

const app = express();
app.use(express.json());

let tasks = [];

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

// ===============================
// Editar tarea
// ===============================
app.put('/tasks/:id', (req, res) => {
    try {
        const { title, description } = req.body;
        res.json(editTask(tasks, req.params.id, title, description));
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// ===============================
// Eliminar tarea
// ===============================
app.delete('/tasks/:id', (req, res) => {
    try {
        res.json(deleteTask(tasks, req.params.id));
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
});

// ===============================
// Filtrar
// ===============================
app.get('/tasks/filter/:status', (req, res) => {
    const status = req.params.status === 'true';
    res.json(filterTasks(tasks, status));
});