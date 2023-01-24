<template>
    <div class="panel">
        <hr />
        <div class="panelHeading">
            <div class="backArrow"><img src="arrow back.svg" /></div>
            <div class="heading">Edit ToDo</div>
        </div>
        <div class="taskCard">
            <div class="column">
                <div class="title">Title</div>
            </div>
        </div>
        <div class="userCard">
            <div class="column">
                <div class="title">Title</div>
            </div>
            <div class="fab"><img src="Vector.svg" /></div>
        </div>
        <div class="statusCard">
            <div class="column">
                <div class="title">Title</div>
            </div>
            <div class="fab"><img src="Vector.svg" /></div>
        </div>
        <div class="buttons">
            <button class="finishBtn">Finish</button>
            <button class="quitBtn">Quit</button>
        </div>
    </div>
</template>

<script>
    export default {
        
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
    margin-top: 20px;
    border-radius: 24px 24px 0px 0px;
    height: 100%;
    padding-top: 10px;
}

.panelHeading {
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
}

.taskCard {
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
.taskCard:hover {
    cursor: pointer;
    background: #3C3850;
}

.taskCard div {
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
}

.column {
    height: auto;
    width: 100%;
}
.title {
    font-size: 16px;
    color: #fff;
    height: 20px;
    width: 100%;
    line-height: 20px;
    padding: 10px;
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