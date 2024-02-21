import { defineStore } from 'pinia';

const _defaultTodoList = [
    { id: 1, description: 'Learn Vue', isDone: false },
    { id: 2, description: '???', isDone: false },
    { id: 3, description: 'Profit!', isDone: true },
];

function add(description) {
    if (!description.length) {
        throw new Error('Invalid argument');
    }

    let id = (this.todoList.reduce((max, x) => x.id > max.id ? x : max))?.id;
    id ?? 0;
    id++;

    this.todoList.push({
        id,
        description,
        isDone: false
    });
}

function remove(id) {
    if (isNaN(id) || id < 1) {
        throw new Error('Invalid argument');
    }

    this.todoList = this.todoList.filter(x => x.id !== id);
}

function markDone(id) {
    if (isNaN(id) || id < 1) {
        throw new Error('Invalid argument');
    }

    this.todoList = this.todoList.map(i => {
        if (i.id === id) {
            return { ...i, isDone: !i.isDone };
        }
        return i;
    });
}

export const todoListStore = defineStore('todoListStore', {
    state: () => {
        return {
            todoList: _defaultTodoList,
        }
    },
    actions: {
        add,
        remove,
        markDone
    }
});
