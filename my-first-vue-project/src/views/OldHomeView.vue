<!--<script setup>-->
<!--import TheWelcome from '../components/TheWelcome.vue'-->
<!--</script>-->

<!--Mixins is the traits equivalent in php-->
<!--<script>-->
<!--// import flash from "@/mixins/flash";-->
<!--import {useFlash} from '@/composables/useFlash.js'-->

<!--export default {-->
<!--  // mixins: [flash]-->
<!--  setup() {-->
<!--    let { flash } = useFlash();-->

<!--    return { flash };-->
<!--  }-->
<!--};-->
<!--</script>-->
<script setup>
// import flash from "@/mixins/flash";
import {useFlash} from '@/composables/useFlash.js'

let { flash } = useFlash();
</script>



<template>
  <main>
    <p>
      <button @click="flash('Test','It Works!')">Click Me</button>
    </p>
  </main>
</template>
<!--<template>-->
<!--  <main>-->
<!--&lt;!&ndash;   Common convention to precede a word with 'the' when its going to be used exactly one time throughout the entire project &ndash;&gt;-->
<!--    <TheWelcome />-->
<!--  </main>-->
<!--</template>-->


