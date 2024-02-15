<script setup>
import { inject } from 'vue';
import TodoListItem from './TodoListItem.vue';
const { todoList } = inject('todoList');
</script>

<template>
    <div class="todo-list-container">
        <ul class="todo-list">
            <li class="todo-list-item" v-for="item in todoList">
                <TodoListItem :item="item" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.todo-list {
    gap: 10px;
    margin: 0;
    padding: 0.5rem;
}

.todo-list-item {
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    margin: 1rem 3rem;
    padding: 1rem 1rem 2rem 1rem;
}
</style>
