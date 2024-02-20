<script setup>
import { ref } from 'vue';
import { todoListStore } from '../stores/todo-list';

const newTodoRef = ref('');
const todoList = todoListStore();

function addTodo(newTodoDescription) {
    todoList.add(newTodoDescription);
    newTodoRef.value = '';
}
</script>

<template>
    <form class="new-todo-form" @submit.prevent="addTodo(newTodoRef)">
        <label for="new-todo">New item: </label>
        <input type="text" name="new-todo" id="new-todo" v-model="newTodoRef" />
        <button type="submit">
            Add Todo
        </button>
    </form>
</template>

<style scoped>
.new-todo-form {
    display: flex;
    gap: 10px;
    margin: 1rem 3rem;
    padding: 1rem;
    border: 1px solid gray;
}
</style>
