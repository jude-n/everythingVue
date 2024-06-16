<script setup>
defineProps({
  modelValue: String
})
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
  <textarea @keydown.tab.prevent="onTabPress" v-text="modelValue"/>
</template>
