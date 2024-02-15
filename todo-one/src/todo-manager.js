import { ref, provide } from 'vue';

const todoListKey = Symbol();

const _defaultTodoList = [
    { id: 1, description: 'Learn Vue', isDone: false },
    { id: 2, description: '???', isDone: false },
    { id: 3, description: 'Profit!', isDone: false },
];

const _todoList = ref(_defaultTodoList);

function provideTodoList() {
    provide('todo list key', _todoList);
}

function addTodo(todo) {
    console.log('todo?', todo);
    if (!todo || !todo?.id || !todo?.description) {
        throw new Error('invalid argument: ', todo);
    }

    todo['isDone'] = false;

    _todoList.value = _defaultTodoList.push(todo) //.sort((a, b) => a.id < b.id);
}

function removeTodoById(id) {
    _todoList.value = _defaultTodoList.value.filter(i => i.id !== id);
}

export {
    todoListKey,
    provideTodoList,
    addTodo,
    removeTodoById
}
