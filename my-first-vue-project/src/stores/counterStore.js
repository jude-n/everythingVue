import { reactive } from "vue";

export let counter = reactive({
  // aka state
  count:0,

//   Method exclusively for incrementing count
//   aka actions
  increment() {
    this.count++;
  }

});