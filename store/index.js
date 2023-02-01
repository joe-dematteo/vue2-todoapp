import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
    todos: [],
    // TODO: STILL WORKING ON THIS
    selectedTodo: {
        completed: '',
        id: '',
        title: '',
        userId: '',
    },
    newTodo: {
        completed: '',
        id: '',
        title: '',
        userId: '',
    },
    activeTab: 'Open',
    activeSearch: '',
    toggleAddToDoForm: false,
    toggleEditToDoForm: false
})

export const getters = {
    getField,
    getFilteredTodos: state => {
        console.log('getFilteredTodos getter')
        // if the search is empty and the activeTab is Open then filter the todos by the search and completed = false
        if (state.activeSearch === '' && state.activeTab === 'Open') {
            return state.todos.filter((todo) => todo.completed === false)
        } 
        // if the search is empty and the activeTab is Closed then filter the todos by the search and completed = true
        else if (state.activeSearch === '' && state.activeTab === 'Closed') {
            return state.todos.filter((todo) => todo.completed === true)
        } 
        // if the search is not empty and the activeTab is Open then filter the todos by the search and completed = false
        else if (state.activeSearch !== '' && state.activeTab === 'Open') {
            return state.todos.filter((todo) => todo.title.toLowerCase().includes(state.activeSearch.toLowerCase()) && todo.completed === false)
        } 
        // if the search is not empty and the activeTab is Closed then filter the todos by the search and completed = true
        else if (state.activeSearch !== '' && state.activeTab === 'Closed') {
            return state.todos.filter((todo) => todo.title.toLowerCase().includes(state.activeSearch.toLowerCase()) && todo.completed === true)
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
}

export const mutations = {
    updateField,
    addToDos(state, todos) {
        console.log('addToDos mutation started')
        state.todos.push(...todos)
        console.log('addToDos mutation finished')
    },
    selectToDoItem(state, todo) {
        console.log('selectToDoItem mutation started')
        state.selectedTodo = todo
        console.log('selectToDoItem mutation finished', state.selectedTodo)
    },
    addNewToDo(state, todo) {
        console.log('addNewToDoItem mutation started')
        state.newTodo = todo
        state.todos.unshift(state.newTodo)
        // reset the newTodo object state
        state.newTodo = {
            completed: '',
            id: '',
            title: '',
            userId: '',
        }
        console.log('addNewToDoItem mutation finished', state.newTodo)
    },
    updateToDoItem(state, todo) {
        console.log('updateToDoItem mutation started')
        state.selectedTodo = todo
        state.todos.splice(state.todos.findIndex((item) => item.id === state.selectedTodo.id), 1, state.selectedTodo)
        // reset the selectedTodo object state
        state.selectedTodo = {
            completed: '',
            id: '',
            title: '',
            userId: '',
        }
        console.log('updateToDoItem mutation finished', state.selectedTodo)
    },
    updateActiveTab(state, tab) {
        console.log('updateActiveTab mutation started')
        state.activeTab = tab
        console.log('updateActiveTab mutation finished', state.activeTab)
    },
    updateActiveSearch(state, search) {
        console.log('updateActiveSearch mutation started')
        state.activeSearch = search
        console.log('updateActiveSearch mutation finished', state.activeSearch)
    },
    TOGGLE_ADDTODO_FORM(state) {
        console.log('TOGGLE_ADDTODO_FORM mutation started')
        state.toggleAddToDoForm = !state.toggleAddToDoForm
        console.log('TOGGLE_ADDTODO_FORM mutation finished', state.toggleAddToDoForm)
    },
    TOGGLE_EDITTODO_FORM(state, todo) {
        console.log('TOGGLE_EDITTODO_FORM mutation started')
        state.selectedTodo = todo
        state.toggleEditToDoForm = !state.toggleEditToDoForm
        console.log('TOGGLE_EDITTODO_FORM mutation finished', state.toggleEditToDoForm)
    }
}