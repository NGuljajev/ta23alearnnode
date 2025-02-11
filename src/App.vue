<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
let titles = ref(['item1', 'item2', 'item3', 'item4']);
let contents = ['content1', 'content2', 'content3', 'content4'];
let activeTab = ref(0);
function change(key) {
    console.log(key);
    activeTab.value = key;
}
</script>

<template>
    <Tabs :items="titles" @change="change"></Tabs>
    <div class="container">
        <h1>{{ contents[activeTab] }}</h1>
    </div>

</template>

<style></style>