<script setup>
import { ref } from 'vue';

let message = ref('Hello ta23a')

setTimeout(()=>{
    message.value = 'Goodbye ta23a';
},5000);



</script>

<template>
    <div class="container">
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <button class="button is-primary is-dark" @click="message='We are back'">Click</button>
    <input class="input" v-model="message">
</div>
</template>

<style></style>