function addTask(tasks, title, description) {

    if (!title || !description) {
        throw new Error('Datos inválidos');
    }

    const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false
    };

    tasks.push(newTask);
    return newTask;
}
function completeTask(tasks, id) {
    const task = tasks.find(t => t.id == id);
    if (!task) throw new Error('Tarea no encontrada');

    task.completed = true;
    return task;
}


function editTask(tasks, id, title, description) {
    const task = tasks.find(t => t.id == id);
    if (!task) throw new Error('Tarea no encontrada');

    if (!title || !description) {
        throw new Error('Datos inválidos');
    }

    task.title = title;
    task.description = description;

    return task;
}


function deleteTask(tasks, id) {
    const index = tasks.findIndex(t => t.id == id);
    if (index === -1) throw new Error('Tarea no encontrada');

    return tasks.splice(index, 1)[0];
}


function filterTasks(tasks, completed) {
    return tasks.filter(t => t.completed == completed);
}

module.exports = {
    addTask,
    completeTask,
    editTask,
    deleteTask,
    filterTasks,
    setPriority
};