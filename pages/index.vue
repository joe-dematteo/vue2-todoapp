<template>
  <div>
    <mainHeader />
    <searchBar />

    <todoCard />
    <transition name="slide-up">
      <addToDo v-if="toggleAddToDoForm"/>
      <editToDo v-if="toggleEditToDoForm"/>
    </transition>
    <button class="add-todo-button" @click="handleAddToDoForm">+</button>
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

<style style="scss">

.slide-up-enter-active, .slide-up-leave-active {
  transition: opacity .5s;
}
.slide-up-enter, .slide-up-leave-to {
  opacity: 0;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  background-color: #070417;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

input, button, textarea {
  font: inherit;
}

*, *::before, *::after {
  box-sizing: border-box;
}

select {
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}

.add-todo-button {
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
</style>