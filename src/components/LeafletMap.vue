<script setup>
// import * as L from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { onMounted, useId, watch } from 'vue';
 
const { center, zoom } = defineProps(['center', 'zoom']);
const id = 'map-' + useId();
let map;
 
onMounted(() => {
    map = L.map(id).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.4269, 24.7435]).addTo(map);
    var houseMarker = L.marker([59.43020351222699, 24.4566105274667]).addTo(map);

    var housePolygon = L.polygon([
        [59.43030351222699, 24.4565105274667], 
        [59.43030351222699, 24.4567105274667],
        [59.43010351222699, 24.4567105274667], 
        [59.43010351222699, 24.4565105274667]  
    ], {color: 'red'}).addTo(map);
    housePolygon.bindPopup("Around my house");

    var polygon = L.polygon([
        [59.4270, 24.7430],
        [59.4275, 24.7440],
        [59.4265, 24.7445],
        [59.4260, 24.7435]
    ], {color: 'blue'}).addTo(map);
    polygon.bindPopup("Umber area");
});

 
watch(() => center, (center, oldCenter) => {
    console.log(center, oldCenter);
    map.panTo(center);
});
 
watch(() => zoom, (zoom) => {
    map.setZoom(zoom);
});
</script>
 
 
<template>
    <div :id="id"></div>
</template>
 
 
<style scoped>
div {
    height: 90vh;
}
</style>
