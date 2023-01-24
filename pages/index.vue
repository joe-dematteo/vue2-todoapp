<template>
  <div>
    <mainHeader />
    <searchBar />
    <task v-for="todo in todos" :key="todo.text"/>
    <addToDo v-if="handleAddToDoBtn"/>
    <!-- <editToDo /> -->
    <button class="addTodoBtn" @click="handleAddToDoBtn = true">+</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    ...mapMutations({
    }),
    handleAddToDoBtn () {
      this.handleAddToDoBtn = true
        this.$store.commit('forms/toggleAddToDoForm', true)
      
    }
  }
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  background-color: #070417;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

/* .addTodoBtnDiv {
  background-color: #b5b5b565;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;
  width: auto;
  z-index: 1;
} */

.addTodoBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 15px;
  border-radius: 50%;
  border: none;
  font-size: 30px;
  cursor: pointer;
}
</style>