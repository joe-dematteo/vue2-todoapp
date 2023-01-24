import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
    todos: [
        {
            Title: 'Buy milk',
            User: 1,
            Status: false,
        }
    ]
})

export const getters = {
    getField,
    getTodos: (state) => {
        return state.todos
    }
}

export const actions = {
    async addTodo({ commit }, todo) {
        commit('addTodo', todo)
    },
}

export const mutations = {
    updateField,
    addTodo: (state, todo) => {
        state.todos.push(todo)
    }
}