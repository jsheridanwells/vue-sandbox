<script setup>
import { ref } from 'vue';

let newTodoDescription = '';

const todoList = [
    { id: 1, description: 'Learn Vue', isDone: false },
    { id: 2, description: '???', isDone: false },
    { id: 3, description: 'Profit!', isDone: false },
];

const todoListRef = ref(todoList);

function addTodo() {
    const lastTodo = todoListRef.value[todoListRef.value.length - 1];
    const newTodo = {
        id: lastTodo ? lastTodo.id + 1 : 1,
        description: newTodoDescription,
        isDone: false,
    };

    todoListRef.value.push(newTodo);
    newTodoDescription = '';
}

function removeTodo(id) {
    todoListRef.value = todoListRef.value.filter(item => item.id !== id);
}

</script>

<template>
    <header>
        <h1>
            Jeremy's First Todo
        </h1>
    </header>
    <section class="todo-list">
        <ul>
            <li v-for="item in todoListRef" :key="item.id" class="todo-list-item">
                {{ item.description }} 
                <span class="remove" @click="removeTodo(item.id)">x</span>
            </li>
        </ul>
    </section>
    <section class="new-todo-form">
        <form @submit.prevent="addTodo">
            <label for="new-todo">New Item: </label>
            <input type="text" name="new-todo" id="new-todo" v-model="newTodoDescription" />
            <button type="submit">
                Add Todo
            </button>
        </form>
    </section>
</template>

<style scoped>
section {
    margin: 0;
}

.todo-list ul {
    margin: 0;
    padding: 0;
}

.todo-list ul li,
.new-todo-form {
    border: 1px solid red;
    margin: 1rem 3rem;
    padding: 1rem;
    display: block;
}

.todo-list ul li,
.new-todo-form form {
    display: flex;
    gap: 10px;
    padding: 0.5rem;
}

.todo-list ul li {
    justify-content: space-between;
    padding: 1rem 1rem 2rem 1rem;
}

.remove {
    cursor: pointer;
}
</style>
