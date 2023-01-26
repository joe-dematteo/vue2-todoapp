<template>
    <div>
        <div class="todoCard" 
        v-for="todo in todos" :key="todo.id">
            <div class="statusContainer">
                <div class="status" @click="$store.commit('completeToDoItem', todo)"></div>
            </div>
            <div class="column">
                <div class="title">{{ todo.title }}</div>
                <div class="userId">User: {{ todo.userId }}</div>
            </div>
            <img src="fab.svg" @click="handleEditToDoForm"/>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['todos'], ['activeTab'])
    },
    methods: {
        ...mapActions(['getToDos']),
        // when the user clicks the edit todo button, the form will toggle on/off
        handleEditToDoForm() {
            this.$store.commit('TOGGLE_EDITTODO_FORM')
        },
    },
    mounted() {
        this.getToDos();
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

.todoCard:hover {
    background: #3C3850;
}

.todoCard:hover .status {
    cursor: pointer;
    background: #292639;
}

.todoCard div {
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

.column {
    height: 75px;
    width: 100%;
}
.title {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    height: auto;
    width: 100%;
    line-height: 20px;
    padding: 10px;
    overflow: visible;
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
</style>