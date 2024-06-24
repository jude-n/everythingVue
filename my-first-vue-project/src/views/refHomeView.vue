<script setup>
import TabbableTextArea from '@/components/TabbableTextArea.vue';
import { ref } from 'vue'


let comment = ref("Test Value");
</script>

<template>
  <main>
    <form>
      <!--      passing attributes that arent props to a custom component sends it straight to the root element. in this case the text area-->
      <TabbableTextArea v-model="comment" style="width: 100%; height: 300px" />
    </form>
  </main>
</template>
