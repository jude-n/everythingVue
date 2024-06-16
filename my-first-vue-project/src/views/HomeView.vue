<script setup>
import TabbableTextArea from '@/components/TabbableTextArea.vue';
</script>

<template>
  <main>
    <form>
<!--      passing attributes that arent props to a custom component sends it straight to the root element. in this case the text area-->
      <TabbableTextArea style="width: 100%; height: 300px" />
    </form>
  </main>
</template>