<template>
  <div>
    <mainHeader />
    <searchBar />

    <todoCard />
    <addToDo v-if="toggleAddToDoForm"/>
    <editToDo v-if="toggleEditToDoForm"/>
    <button class="addTodoBtn" @click="handleAddToDoForm">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['todos', 'toggleAddToDoForm', 'toggleEditToDoForm', 'activeTab']),
    ...mapActions(['getToDos']),
  },
  methods: {
    ...mapMutations(['TOGGLE_ADDTODO_FORM']),
    // when the user clicks the add todo button, the form will toggle on/off
    handleAddToDoForm() {
        this.$store.commit('TOGGLE_ADDTODO_FORM')
    },
    // when the user clicks the edit todo button, the form will toggle on/off
    handleEditToDoForm() {
        this.$store.commit('toggleEditToDoForm')
    }
  },
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
  margin-right: 20px;
  border-radius: 50%;
  border: none;
  font-size: 30px;
  cursor: pointer;
}

.addToDoForm {
  display: none;
}
</style>