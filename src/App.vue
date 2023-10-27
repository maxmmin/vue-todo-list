<template>
  <TodoCore/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoCore from "@/components/TodoCore.vue";

export default defineComponent({
  name: 'App',
  title: 'Todo App',
  components: {
    TodoCore
  }
});
</script>

<style>
@import "assets/css/roboto.css";

html, body {
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
