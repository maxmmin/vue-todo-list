<template>
  <div class="todo-component">
      <div class="todo-component__todo-creation">
        <form class="todo-component__todo-creation-form">
          <input class="todo-creation-form__input">
          <button class="todo-creation-form__submit-btn"></button>
        </form>
      </div>
  </div>
</template>

<script lang="ts">


import {ComponentData, TodoItem} from "@/types/todoTypes";
import {defineComponent} from "vue";

  export default defineComponent({
    name: 'TodoCore',
    data (): ComponentData {
      return {
        toDoList: [],
        currentInput: '',
        lastId: -1
      }
    },
    methods: {
      addTodoItem () {
        const item = this.currentInput;
        const todo: TodoItem = {
          id: ++this.lastId,
          message: item,
          done: false
        }
        this.toDoList.push(todo);
        this.currentInput = ''
      },
      removeTodoItem (id: number) {
        const index = this.toDoList.findIndex(toDo=>toDo.id===id);
        if (index>-1) {
          this.toDoList.splice(index, 1);
        } else throw new Error("trying to remove non-existent todo")
      },
      toggleTodoItemStatus (id: number) {
        const todo = this.toDoList.find(t=>t.id===id);
        if (todo) {
          todo.done = !todo.done;
        } else throw new Error("trying to toggle status of non-existent todo")
      }
    }
  })
</script>

<style scoped>

</style>