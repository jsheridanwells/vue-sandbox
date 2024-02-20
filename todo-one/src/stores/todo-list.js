import { defineStore } from 'pinia';

const _defaultTodoList = [
    { id: 1, description: 'Learn Vue', isDone: false },
    { id: 2, description: '???', isDone: false },
    { id: 3, description: 'Profit!', isDone: false },
];

function add(description) {
    let id = (this.todoList.reduce((max, x) => x.id > max.id ? x : max))?.id;
    id ?? 0;
    id++;
    this.todoList.push({
        id,
        description,
        idDone: false
    });
}

function remove(id) {
    this.todoList = this.todoList.filter(x => x.id !== id);
}

export const todoListStore = defineStore('todoListStore', {
    state: () => {
        return {
            todoList: _defaultTodoList,
        }
    },
    actions: {
        add,
        remove
    }
});