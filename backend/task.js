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

module.exports = { addTask };