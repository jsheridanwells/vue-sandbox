<script setup>
const props = defineProps(['item']);
</script>

<template>
    <span>
        {{ item.description }}
    </span>
</template>