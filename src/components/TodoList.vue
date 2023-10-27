<template>
  <div class="todo-list">
      <div v-for="(todo,i) in todoList" :key="i" :class="{'todo': true, 'done': todo.done}">
        <span class="todo__done-marker"></span>
        <span class="todo__message">{{todo.message}}</span>
        <span class='todo__remove-btn'><RemoveIcon css-anchor="todo__remove-icon"/></span>
      </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import {TodoListComponentProps} from "@/types/todoTypes";
  import RemoveIcon from "@/components/icons/RemoveIcon.vue";
  defineProps<TodoListComponentProps>();
</script>

<script lang="ts">
  export default {
    name: "TodoList"
  }
</script>

<style scoped>
  .todo {
    display: flex;
    column-gap: 15px;
    max-width: 100%;
  }

  .todo + .todo {
    margin-top: 20px;
  }

  .todo__message {
    flex-grow: 1;
    width: 0;
    white-space: pre-line;
    word-break: break-all;
  }

  .todo__done-marker {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgb(255, 251, 125);
  }

  .todo__remove-icon {
    width: 23px;
    height: 23px;
  }
</style>