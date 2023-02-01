<template>
    <div>
        <div 
        v-for="todo in getFilteredTodos" :key="todo.id"
        :class="!todo.completed ? 'todoCard' : 'todoCardCompleted'">
            <div class="statusTooltip">
                <span class="tooltiptext">Change Status</span>
                <div class="statusContainer">
                    <div class="status" 
                    @click="$store.commit('completeToDoItem', todo)"
                    :class="{ active: todo.completed }"></div>
                </div>
            </div>
            <div class="column">
                <div class="title">{{ todo.title }}</div>
                <div class="userId">User: {{ todo.userId }}</div>
            </div>
            <div class="tooltip">
                <span class="tooltiptext">Edit ToDo</span>
                <img src="fab.svg" @click="handleEditToDoForm(todo)"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['todos']),
        getFilteredTodos(){
            return this.$store.getters.getFilteredTodos
        },
    },
    methods: {
        ...mapActions(['getToDos']),
        // when the user clicks the edit todo button, the form will toggle on/off
        handleEditToDoForm(todo) {
            this.$store.commit('TOGGLE_EDITTODO_FORM', todo)
        },
    },
    created() {
        this.getToDos()
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.todoCard {
    background: #292639;
    padding: 15px;
    border-radius: 10px;
    margin: 12px;
    margin-top: 10px;
    width: auto;
    display: flex;
    align-items: center;
}

.todoCardCompleted {
    background: #292639;
    padding: 15px;
    border-radius: 10px;
    margin: 12px;
    margin-top: 10px;
    width: auto;
    display: flex;
    align-items: center;
}

.todoCardCompleted:hover .status {
    cursor: pointer;
}
.todoCardCompleted:hover {
    background: #3C3850;
}

.todoCard:hover {
    background: #3C3850;
}

.todoCard:hover .status {
    cursor: pointer;
    background: #292639;
}

.todoCardCompleted div {
    float: left;
}

statusContainer {
    width: 20%;
}
.status {
    background: #3B3753;
    border-radius: 50px;
    margin-right: 10px;
    height: 50px;
    width: 50px;
    cursor: pointer;
}

.active {
    background: #6BDD8A;
    background-image: url('/check.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.column {
    height: 75px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    height: auto;
    width: 100%;
    line-height: 20px;
    padding: 10px;
    padding-right: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.userId {
    font-size: 14px;
    color: #fff;
    background: #3F3C4E;
    border-radius: 6px;
    padding: 5px 8px;
    height: auto;
    width: auto;
    margin-left: 10px;
}

img {
    float: right !important;
    height: 100%;
    width: 20.5px;
    cursor: pointer;
}

.tooltip {
    position: absolute;
    right: 40px;
}

.statusTooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: #6a169352;
    backdrop-filter: blur(50px);
    color: rgba(255, 255, 255, 0.919);
    text-align: center;
    border-radius: 6px;
    padding: 5px 4px;
    position: absolute;
    z-index: 1;
    bottom: 200%;
    left: 50%;
    margin-left: -60px;
    font-size: small;

}

.statusTooltip .tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: #6a169352;
    backdrop-filter: blur(50px);
    color: rgba(255, 255, 255, 0.919);
    text-align: center;
    border-radius: 6px;
    padding: 5px 4px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -30px;
    font-size: small;

}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

.statusTooltip:hover .tooltiptext {
    visibility: visible;
}
</style>