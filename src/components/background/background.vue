<template>
    <canvas id="gradient-canvas" data-transition-in />
</template>

<script setup>
import { Gradient } from './gradient.js';
import { onMounted } from 'vue';

onMounted(() => {
// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')
});

</script>

<style scoped>
#gradient-canvas {
  width:100%;
  height:100%;
  --gradient-color-1: #dff1ff; 
  --gradient-color-2: #6dbff5; 
  --gradient-color-3: #5292ad;  
  --gradient-color-4: #9fa7ff;
  z-index: -1;
}
</style>