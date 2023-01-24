<template>
    <div>
        <hr />
        <div class="taskCard">
            <div class="statusContainer">
                <div class="status"></div>
            </div>
            <div class="column">
                <div class="title">{{ toDoTitle }}</div>
                <div class="description"> User: 1</div>
            </div>
            <img src="fab.svg" />
        </div>
    </div>
        

</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields([
        'toDoTitle',
        'toDoUser',
        'toDoStatus'
    ]),
    toDoStatusClass() {
        if (this.toDoStatus === 'TODO') {
            return 'todo';
        } else (this.toDoStatus === 'DONE') 
            {
            return 'done';
            }
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.taskCard {
    background: #292639;
    padding: 15px;
    border-radius: 10px;
    margin: 12px;
    margin-top: 10px;
    width: auto;
    display: flex;
    align-items: center;
}

.taskCard:hover {
    cursor: pointer;
    background: #3C3850;
}

.taskCard:hover .status {
    cursor: pointer;
    background: #292639;
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
    height: 75px;
    width: 100%;
}
.title {
    font-size: 16px;
    font-weight: bold;
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

img {
    float: right !important;
    height: 100%;
    width: 20.5px;
}

hr {
    width: 20%;
    border: 2px solid #292639;
}
</style>