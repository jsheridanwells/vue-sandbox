<script setup>
import { ref, provide } from 'vue';
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';

// TODO : App.vue should just be a layout parent, but now it has to be the 
// repo for all the data for its descendants :(
const defaultTodoList = [
    { id: 1, description: 'Learn Vue', isDone: false },
    { id: 2, description: '???', isDone: false },
    { id: 3, description: 'Profit!', isDone: false },
];

const todoList = ref(defaultTodoList);

provide('todoList', { todoList, updateTodoList });

function updateTodoList(newList) {
    console.log('update todo?', newList);
    todoList.value = newList;
}
</script>

<template>
    <header>
        <h1>
            Jeremy's First Todo
        </h1>
    </header>
    <section class="todo-list-section">
        <TodoList />
    </section>
    <section class="new-todo-form-section">
        <AddTodo />
    </section>
</template>

<style scoped>
section {
    margin: 0;
}
</style>
