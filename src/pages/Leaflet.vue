<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';
 
let center = ref([59.4269, 24.7435]);
let zoom = ref(19);
</script>
 
<template>
    <button class="button is-primary" @click="center=[59.43020351222699, 24.4566105274667]">Go To Home</button>
    <input type="range" min="1" max="19" v-model="zoom">
    <LeafletMap :center="center" :zoom="zoom"></LeafletMap>
    <LeafletMap :center="[24.4566105274667, 59.43020351222699]" :zoom="19"></LeafletMap>
</template>