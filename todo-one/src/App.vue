<script setup>
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
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
