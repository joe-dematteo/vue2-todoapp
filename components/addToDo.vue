<template>
    <div class="panel">
        <hr />
        <div class="panelHeadingContainer">
            <div class="backArrow" @click="handleAddToDoForm"><img src="arrow back.svg" /></div>
            <div class="heading">Add ToDo</div>
        </div>
        <div class="titleCard">
            <div class="column">
                <input class="title" placeholder="New ToDo"/>
            </div>
        </div>
        <div class="userCard">
            <div class="column">
                <select class="title" />
            </div>
        </div>
        <div class="statusCard">
            <div class="column">
                <select class="title" />
            </div>
        </div>
        <div class="buttons">
            <button class="finishBtn">Finish</button>
            <button class="quitBtn">Quit</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  methods: {
    ...mapMutations(['TOGGLE_ADDTODO_FORM']),
    ...mapState(['todos']),
    // when the user clicks the add todo button, the form will toggle on/off
    handleAddToDoForm() {
        this.$store.commit('TOGGLE_ADDTODO_FORM')
    }
  }
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
    padding: 10px;
    color: white;
    font-size: 20px;
    width: 100%;

}

.heading {
    display: flex;
    justify-content: center;
    margin-right: 30px;
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
}
</style>