<script setup>
import { inject } from 'vue';

const { todoList, updateTodoList } = inject('todoList');
const props = defineProps(['item']);

function removeTodo(id) {
    const newList = todoList.value.filter(item => item.id !== id);
    updateTodoList(newList);
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
