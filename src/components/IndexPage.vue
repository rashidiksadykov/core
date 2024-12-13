<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const numOfCores = navigator.hardwareConcurrency;



</script>

<template>
  <div class="card">
<p>
Cores {{numOfCores}}
</p>
<p>
Altyn: {{numOfCores}}
</p>

    <button type="button">Start</button>
    
  </div>

  
</template>

<style scoped>
</style>
