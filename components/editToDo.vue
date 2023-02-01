<template>
    <div class="panel">
        <hr />
        <div class="panelHeadingContainer">
            <div class="backArrow" @click="handleEditToDoFormClose"><img src="arrow back.svg" /></div>
            <div class="heading">Edit ToDo</div>
        </div>
        <form action="" @submit.prevent="handleEditToDoFormSubmit" method="post">
            <div class="titleCard">
                <div class="column">
                    <input class="title" placeholder="New ToDo" v-model="selectedTodoTitle"/>
                </div>
            </div>
            <div class="userCard">
                <div class="column">
                    <select class="title" v-model="selectedTodoUserId">
                        <option disabled value="">User Id</option>
                        <option v-for="todo in todos" :key="todo.id">User: {{ todo.userId }}</option>
                    </select>
                </div>
            </div>
            <div class="statusCard">
                <div class="column">
                    <select class="title" v-model="selectedTodoCompleted">
                            <option disabled value="">Status</option>
                            <option>Open</option>
                            <option>Closed</option>
                        </select>
                </div>
            </div>
            <div class="buttons">
                <input
                    class="finishBtn"
                    type="submit"
                    value="Finish">
                <button class="quitBtn"
                @click="handleEditToDoFormClose">Quit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
    computed: {
        ...mapState(['todos']),
        ...mapFields({
            selectedTodoCompleted: 'selectedTodo.completed',
            // selectedTodoId: 'selectedTodo.id',
            selectedTodoTitle: 'selectedTodo.title',
            selectedTodoUserId: 'selectedTodo.userId'
        }),
        ...mapMutations(['TOGGLE_EDITTODO_FORM'], ['updateToDoItem']),
    },
    methods: {
        // when the user clicks the edit todo button, the form will toggle on/off
        handleEditToDoFormClose() {
            this.$store.commit('TOGGLE_EDITTODO_FORM')
        },
        handleEditToDoFormSubmit() {
            console.log('handleEditToDoFormSubmit')
            this.$store.commit('updateToDoItem', {
                completed: this.selectedTodoCompleted.includes('Closed') ? true : false,
                // id: this.todo.id,
                title: this.selectedTodoTitle,
                userId: this.selectedTodoUserId,
            })
            this.$store.commit('TOGGLE_EDITTODO_FORM')
        }
    },
}
</script>

<style scoped>
.panel {
    background: #070417;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 5;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    border-radius: 24px 24px 0px 0px;
    height: 100%;
    padding-top: 10px;
}

.panelHeadingContainer {
    padding: 5px;
    color: white;
    font-size: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.heading {
    display: flex;
    justify-content: center;
}

hr {
    width: 10%;
    border: 2px solid #292639;
    margin-bottom: 15px;
}

.backArrow {
    display: flex;
    float: left;
    padding-left: 15px;
    cursor: pointer;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
}

.titleCard {
    background: #292639;
    padding: 5px;
    border-radius: 10px;
    margin: 12px;
    margin-top: 20px;
    width: 90%;
    display: flex;
    align-items: center;
    height: auto;
}

.userCard {
    background: #292639;
    padding: 5px;
    border-radius: 10px;
    margin: 12px;
    margin-top: 5px;
    width: 90%;
    display: flex;
    align-items: center;
    height: auto;
}

.statusCard {
    background: #292639;
    padding: 5px;
    border-radius: 10px;
    margin: 12px;
    margin-top: 5px;
    width: 90%;
    display: flex;
    align-items: center;
    height: auto;
}
.titleCard:hover {
    cursor: pointer;
    background: #3C3850;
}

.column {
    height: auto;
    width: 100%;
    color: white;
}
.column input {
    height: 100%;
    width: 98%;
    border: none;
    background: transparent;
    color: white;
    font-size: 16px;
    padding: 10px;
}

.column select {
    height: 100%;
    width: 100%;
    border: none;
    background: transparent;
    color: white;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
}

.column select option {
    background: #292639;
    color: white;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
}

.description {
    font-size: 14px;
    color: #fff;
    background: #3F3C4E;
    border-radius: 6px;
    padding: 5px 8px;
    height: auto;
    width: auto;
    margin-left: 10px;
}

.fab {
    float: right !important;
    width: 20.5px;
    display: flex;
}

.buttons {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 15px;
}
.finishBtn {
    width: 100%;
    background: #6ADD8A;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
}

.quitBtn {
    width: 100%;
    background: transparent;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 10px;
    cursor: pointer;
}
</style>