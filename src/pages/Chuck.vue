<script setup>
import { ref } from 'vue';
import axios from 'axios';

let joke = ref('');

axios.get('https://api.chucknorris.io/jokes/random').then(res => {
    joke.value = res.data.value;
}).catch(err => {
    console.log(err);
});

//1 way
//try{
//let response = await axios.get('https://api.chucknorris.io/jokes/random');
//joke.value = response.data.value;
//} catch (err) {
//console.log(err);


//2 way
//fetch('https://api.chucknorris.io/jokes/random').then(response => {
   // return response.json();
//}).then(data => {
   // console.log(data);
  //  joke.value = data.value;
//});
</script>

<template>
 {{ joke }}
</template>