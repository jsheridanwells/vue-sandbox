<script setup>
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';

// TODO : how to create service to separate list BL from component?
const todoList = [
    { id: 1, description: 'Learn Vue', isDone: false },
    { id: 2, description: '???', isDone: false },
    { id: 3, description: 'Profit!', isDone: false },
];

const todoListRef = ref(todoList);

function onAddTodo(newTodoDescription) {
    const lastTodo = todoListRef.value[todoListRef.value.length - 1];
    const newTodo = {
        id: lastTodo ? lastTodo.id + 1 : 1,
        description: newTodoDescription,
        isDone: false,
    };

    todoListRef.value.push(newTodo);
}

function onRemoveTodo(id) {
    todoListRef.value = todoListRef.value.filter(item => item.id !== id);
}

</script>

<template>
    <header>
        <h1>
            Jeremy's First Todo
        </h1>
    </header>
    <section class="todo-list-section">
        <TodoList :todoList="todoListRef" @remove-todo="onRemoveTodo" />
    </section>
    <section class="new-todo-form-section">
        <AddTodo @add-todo="onAddTodo" />
    </section>
</template>

<style scoped>
section {
    margin: 0;
}
</style>