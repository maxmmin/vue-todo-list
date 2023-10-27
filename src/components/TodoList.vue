<template>
  <div class="todo-list">
      <div v-for="(todo,i) in todoList" :key="i" :class="{'todo': true, 'done': todo.done}">
        <span @click="()=>toggleStatus(todo.id)" class="todo__done-marker"></span>
        <span class="todo__message">{{todo.message}}</span>
        <span @click="()=>remove(todo.id)" class='todo__remove-btn'><RemoveIcon css-anchor="todo__remove-icon"/></span>
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
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "TodoList",
    methods: {
      toggleStatus (id: number) {
        this.$emit('toggleTodoStatus', id);
      },
      remove (id: number) {
        this.$emit('removeTodo', id);
      }
    }
  })
</script>

<style scoped>
  .todo {
    display: flex;
    column-gap: 15px;
    max-width: 100%;
    &.done {
      & .todo__done-marker {
        border: 2px solid rgb(133, 255, 189);
        background: radial-gradient(circle closest-side, rgb(133, 255, 189) 80%, white 20%);
      }

      & .todo__message {
        text-decoration: line-through;
      }
    }
  }

  .todo + .todo {
    margin-top: 20px;
  }

  .todo__message {
    flex-grow: 1;
    width: 0;
    white-space: pre-line;
    word-break: break-all;
    vertical-align: middle;
    line-height: 1.2;
  }

  .todo__done-marker {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgb(255, 251, 125);
    cursor: pointer;
  }

  .todo__remove-icon {
    width: 23px;
    height: 23px;
    cursor: pointer;
    &:hover {
      background: rgba(0,0,0, 0.1);
      border-radius: 50%;
    }
  }
</style>