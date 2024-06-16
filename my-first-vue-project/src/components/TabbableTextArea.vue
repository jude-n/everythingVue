<script setup>
defineProps({
  modelValue: String
})

let emit = defineEmits(['update:modelValue']);
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

function update(e) {
// this.$emit('update:modelValue', e.target.value) // - first way of doing it
  emit('update:modelValue', e.target.value);

}
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="update"
    v-text="modelValue"/>
</template>
