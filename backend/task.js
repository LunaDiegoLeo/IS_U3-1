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
module.exports = { addTask, completeTask };