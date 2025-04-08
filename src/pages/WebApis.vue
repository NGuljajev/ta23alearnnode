<script setup>



    function vibrate() {
            navigator.vibrate(200); 
    }

    function starwars() {
            navigator.vibrate([200, 100, 200, 100, 200, 100, 200]); 
    }

    function location() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }
</script>

<template>

    <button @click="vibrate" class="button is-primary">Vibrate</button>
    <button @click="starwars" class="button is-secondary">Starwars</button>
    <button @click="location" class="button is-primaryn  ">location</button>
</template>