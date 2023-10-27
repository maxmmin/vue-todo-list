<template>
  <div class="todo-window">
    <div class="todo-component">
      <div class="todo-component__inner">
        <h2 class="todo-component__title">My first Vue.js todo app</h2>
        <div class="todo-component__todo-creation">
          <form class="todo-component__todo-creation-form" @submit="onSubmit">
            <input class="todo-creation-form__input" v-model="currentInput">
            <button class="todo-creation-form__submit-btn"><AddIcon css-anchor="todo-creation-form__add-icon" fill="white"/></button>
          </form>
        </div>
        <div class="todo-component__todo-list-wrapper">
          <TodoList @toggleTodoStatus="toggleTodoItemStatus"
                    @removeTodo="removeTodoItem"
                    :todo-list="todoList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import {CoreTodoComponentData, TodoItem} from "@/types/todoTypes";
import {defineComponent} from "vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
    name: 'TodoCore',
    components: {
      TodoList,
      AddIcon
    },
    data (): CoreTodoComponentData {
      return {
        todoList: [],
        currentInput: '',
        lastId: -1
      }
    },
    methods: {
      addTodoItem (message: string) {
        if (!message) throw new Error("cannot add empty todo");
        const item = this.currentInput;
        const todo: TodoItem = {
          id: ++this.lastId,
          message: item,
          done: false
        }
        this.todoList.unshift(todo);
      },
      removeTodoItem (id: number) {
        const index = this.todoList.findIndex(toDo=>toDo.id===id);
        if (index>-1) {
          this.todoList.splice(index, 1);
        } else throw new Error("trying to remove non-existent todo")
      },
      toggleTodoItemStatus (id: number) {
        const todo = this.todoList.find(t=>t.id===id);
        if (todo) {
          todo.done = !todo.done;
        } else throw new Error("trying to toggle status of non-existent todo")
      },
      onSubmit (e: Event) {
        e.preventDefault();
        const message = this.currentInput.trim();
        if (message) {
          this.addTodoItem(message);
          this.currentInput = "";
        } else alert("Can't add empty todo")
      }
    }
  })
</script>

<style scoped>
  .todo-window {
    min-height: 100vh;
    background-image: linear-gradient(45deg, rgb(133, 255, 189) 0%, rgb(255, 251, 125) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .todo-component {
    max-width: 500px;
    width: 100%;
    background: white;
    min-height: 400px;
    border-radius: 25px;
    padding: 40px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .todo-component__title {
    text-align: left;
    color: #424242;
  }

  .todo-component__todo-creation-form {
    width: 100%;
    display: flex;
    padding: 0;
    height: 45px;
    border-radius: 15px;
    background: #e0e0e0;
  }

  .todo-creation-form__submit-btn {
    padding: 5px 15px;
    height: 100%;
    border-radius: 15px;
    margin: 0;
    background-image: linear-gradient(45deg, rgb(133, 255, 189) 0%, rgb(255, 251, 125) 100%);
    flex-shrink: 0;
    flex-grow: 0;
    display: inline-block;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .todo-creation-form__input {
    background: transparent;
    border: none;
    padding: 10px;
    font-size: 17px;
    width: 0;
    outline: none;
    flex-grow: 1;
  }

  .todo-creation-form__add-icon {
    width: 30px;
    height: 30px;
  }

  .todo-component__todo-list-wrapper {
    margin-top: 30px;
  }

  @media all and (max-width: 576px) {
    .todo-component__title {
      text-align: center;
    }
  }

</style>