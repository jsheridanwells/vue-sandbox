<script setup>
import { todoListStore } from '@/stores/todo-list';
import { ref } from 'vue';
const props = defineProps(['item']);
const item = ref(props.item);
const todoList = todoListStore();

function removeTodo(id) {
    todoList.remove(id);
}

function toggleDone(id) {
    todoList.markDone(id);
}
</script>

<template>
    <div class="todo-list-item" :class="{ 'done': item.isDone }">
        <input type="checkbox" name="" id="" v-model="item.isDone" @change="toggleDone(item.id)">
        <span>
            {{ item.description }}
        </span>
        <span class="remove" @click="removeTodo(item.id)">X</span>
    </div>
</template>

<style scoped>
.todo-list-item {
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    margin: 1rem 3rem;
    padding: 1rem 1rem 2rem 1rem;
}

.remove {
    cursor: pointer;
}

.done {
    text-decoration: line-through;
    color: red;
}
</style>
