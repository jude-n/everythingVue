<!--Mixins is the traits equivalent in php-->
<!--<script>-->
<!--  import flash from "@/mixins/flash";-->

<!--  export default {-->
<!--    mixins: [flash]-->
<!--  };-->
<!--</script>-->

<script setup>
// import flash from "@/mixins/flash";
import {useFlash} from '@/composables/useFlash.js'

let { flash } = useFlash();
</script>
<template>
<!--  <div class="about">-->
<!--    <h1>This is an about page</h1>-->
<!--  </div>-->
  <p>
    <button @click="flash('Yay!', 'It Works ON the About Page!', 'info')">Click Me</button>
  </p>
</template>

<!--<style>-->
<!--@media (min-width: 1024px) {-->
<!--  .about {-->
<!--    min-height: 100vh;-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--  }-->
<!--}-->
<!--</style>-->
<!--<script setup lang="ts">-->
<!--</script>-->