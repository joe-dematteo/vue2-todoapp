<template>
  <header>
    <h1>ToDo's</h1>
      <div class="tabs">
        <button v-for="tab in tabs" :key="tab" 
        :class="['tabsBtn', { active: currentTab === tab }]"
        @click="$store.commit('updateActiveTab', currentTab = tab)">
          {{ tab }}
        </button>
      </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';


  export default {
    data() {
      return {
        currentTab: 'Open',
        tabs: ['Open', 'Closed'],
      }
    },
    computed: {
      ...mapMutations(['updateActiveTab']),
    }
  }
</script>

<style scoped>
header {
  background: #292639;
  box-shadow: 0px 2px 10px rgba(117, 109, 156, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  top: 0;
  left:0;
  width: 100%;
  padding-top: 18px;
}

h1 {
  color: white;
  font-size: 32px;
  margin: 0;
  padding-left: 0.5em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}

.tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-top: 1em;
  background: #292639;
}

.tabsBtn {
  font-size: 18px;
  color: white;
  background: #292639;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid #292639;
  padding: .5em;
}

.tabsBtn:hover {
  border-bottom: 1;
  border-color: rgb(255, 255, 255);
  cursor: pointer;
}

.tabsBtn.active {
  border-bottom: 1;
  border-color: rgb(255, 255, 255);
  cursor: pointer;
}

.closedTabBtn {
  font-size: 18px;
  color: white;
  background: #292639;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid #292639;
  padding: .5em;

}

.closedTabBtn:hover {
  border-bottom: 1;
  border-color: rgb(255, 255, 255);
  cursor: pointer;
}

.closedTabBtn:active {
  border-bottom: 1;
  border-color: rgb(255, 255, 255);
  cursor: pointer;
}
</style>