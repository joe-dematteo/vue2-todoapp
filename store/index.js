// import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
    todos: [],
    activeTab: 'Open',
    activeSearch: '',
    toggleAddToDoForm: false,
    toggleEditToDoForm: false
})

export const getters = {
    // getField,
    getFilteredTodos(state) {
        console.log('getFilteredTodos getter started')
        if (state.activeTab === 'Open') {
            return state.todos.filter((todo) => !todo.completed)
        } else if (state.activeTab === 'Completed') {
            return state.todos.filter((todo) => todo.completed)
        } else {
            return state.todos
        }
    }
}

export const actions = {
    async getToDos(context) {
        console.log('getTodos action')
        const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/users/1/todos')
        context.commit('addToDos', todos)
        return todos
    },
    toggleAddToDoForm({ commit }) {
        commit('TOGGLE_ADDTODO_FORM')
    },
    toggleEditToDoForm({ commit }) {
        commit('TOGGLE_EDITTODO_FORM')
    }
}

export const mutations = {
    // updateField,
    addToDos(state, todos) {
        console.log('addToDos mutation started')
        state.todos.push(...todos)
        console.log('addToDos mutation finished')
    },
    completeToDoItem(state, todo) {
        console.log('completeToDoItem mutation started')
        const index = state.todos.findIndex((item) => item.id === todo.id)
        state.todos[index].completed = !state.todos[index].completed
        console.log('completeToDoItem mutation finished', state.todos[index].completed)
    },
    updateActiveTab(state, tab) {
        console.log('updateActiveTab mutation started')
        state.activeTab = tab
        console.log('updateActiveTab mutation finished', state.activeTab)
    },
    TOGGLE_ADDTODO_FORM(state) {
        console.log('TOGGLE_ADDTODO_FORM mutation started')
        state.toggleAddToDoForm = !state.toggleAddToDoForm
        console.log('TOGGLE_ADDTODO_FORM mutation finished', state.toggleAddToDoForm)
    },
    TOGGLE_EDITTODO_FORM(state) {
        console.log('TOGGLE_EDITTODO_FORM mutation started')
        state.toggleEditToDoForm = !state.toggleEditToDoForm
        console.log('TOGGLE_EDITTODO_FORM mutation finished', state.toggleEditToDoForm)
    }
}