<script setup>
import { reactive } from 'vue';
import TodoListItem from './TodoListItem.vue';
import { todoListStore } from '@/stores/todo-list';

const store = todoListStore();
let list = reactive({ todoList: store.todoList });

store.$subscribe((mut, state) => {
    list.todoList = state.todoList;
});
</script>

<template>
    <div class="todo-list-container">
        <ul class="todo-list">
            <li class="todo-list-item" v-for="item in list.todoList" :key="item.id">
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
    list-style-type: none;
}
</style>
