const { addTask } = require('../backend/task');

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