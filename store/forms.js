import { updateField } from 'vuex-map-fields';

export const state = () => ({
    toggleAddToDoForm: false,
    toggleEditToDoForm: false

})

export const actions = {
    async toggleAddToDoForm({ commit }) {
        commit('toggleAddToDoForm')
    },
    async toggleEditToDoForm({ commit }) {
        commit('toggleEditToDoForm')
    }
}

export const mutations = {
    updateField,
    toggleAddToDoForm: (state) => {
        state.toggleAddToDoForm = !state.toggleAddToDoForm
    },
    toggleEditToDoForm: (state) => {
        state.toggleEditToDoForm = !state.toggleEditToDoForm
    }
}