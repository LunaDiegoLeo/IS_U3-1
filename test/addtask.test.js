const {
    addTask,
    completeTask,
    editTask,
    deleteTask,
    filterTasks,
    setPriority
} = require('../backend/task');


// ===============================
// --H2 Agregar tarea
// ===============================
test('Agrega tarea correctamente', () => {
    const tasks = [];
    const result = addTask(tasks, 'Tarea 1', 'Descripción');

    expect(tasks.length).toBe(1);
    expect(result.completed).toBe(false);
});

test('Falla si título está vacío', () => {
    const tasks = [];

    expect(() => {
        addTask(tasks, '', 'desc');
    }).toThrow();
});


// ===============================
// --H2 Completar tarea
// ===============================
test('Marca tarea como completada', () => {
    const tasks = [];
    const task = addTask(tasks, 'Test', 'Desc');

    const result = completeTask(tasks, task.id);

    expect(result.completed).toBe(true);
});

test('Falla si no existe tarea al completar', () => {
    const tasks = [];

    expect(() => {
        completeTask(tasks, 123);
    }).toThrow();
});


// ===============================
// --H2 Editar tarea
// ===============================
test('Edita tarea correctamente', () => {
    const tasks = [];
    const task = addTask(tasks, 'Viejo', 'Desc');

    const updated = editTask(tasks, task.id, 'Nuevo', 'Nueva desc');

    expect(updated.title).toBe('Nuevo');
    expect(updated.description).toBe('Nueva desc');
});

test('Falla al editar si no existe', () => {
    const tasks = [];

    expect(() => {
        editTask(tasks, 999, 'x', 'y');
    }).toThrow();
});


// ===============================
// --H2 Eliminar tarea
// ===============================
test('Elimina tarea correctamente', () => {
    const tasks = [];
    const task = addTask(tasks, 'Test', 'Desc');

    deleteTask(tasks, task.id);

    expect(tasks.length).toBe(0);
});