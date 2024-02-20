<script setup>
import { todoListStore } from '@/stores/todo-list';
const props = defineProps(['item']);
const todoList = todoListStore();

function removeTodo(id) {
    todoList.remove(id);
}
</script>

<template>
    <span>
        {{ item.description }}
    </span>
    <span class="remove" @click="removeTodo(item.id)">X</span>
</template>

<style scoped>
.remove {
    cursor: pointer;
}
</style>
