<template>
  <div class="todo-list">
      <div v-for="(todo,i) in todoList" :key="i" @class="'todo '+todo.done?'done':''">
        <span class="todo__done-marker"></span>
        <span class="todo__message">{{todo.message}}</span>
        <span class='todo__remove-btn'></span>
      </div>
  </div>
</template>

<script setup lang="ts">
  import {TodoListComponentProps} from "@/types/todoTypes";

  defineProps<TodoListComponentProps>();
</script>

<script>
  export default {
    name: "TodoList"
  }
</script>

<style scoped>

</style>