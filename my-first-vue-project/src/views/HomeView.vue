<script setup>

import { onMounted, ref } from 'vue'; // like the key attribute

// Linked to the whole textarea
let textarea = ref(null);

function onTabPress(e) {

    let t = e.target;
      //   tab was pressed
      //   get caret postion/selection
      //   caret indicates where the user can enter text
      let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

      //   set textarea value to: text before caret + tab + text after caret
      t.value = val.substring(0, start) + "\t" + val.substring(end);

      //   put caret at right position again
      t.selectionStart = t.selectionEnd = start + 1;
}
</script>

<template>
  <main>
    <form>
      <textarea @keydown.tab.prevent="onTabPress" style="width: 100%; height: 300px;">Hi there</textarea>
    </form>
  </main>
</template>