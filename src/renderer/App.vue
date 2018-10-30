<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="rightSide">
      <router-view id="main"></router-view>
      <terminal ref="terminal"></terminal>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Terminal from './components/Terminal.vue'

  export default {
    name: 'nodeprojectmanager',
    components: { NavBar, Terminal }
  }
</script>

<style lang="scss">
@import './assets/styles/globals.scss';
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

#app {
  display: grid;
  grid-template-areas: 'nav-bar right';
  grid-template-columns: 8em 1fr;
  height: 100%;
  width: 100%;

  > #nav-bar {
    grid-area: nav-bar;
  }

  > #rightSide {
    grid-area: right;
    display: flex;
    flex-direction: column;
    min-height: 100%;

    > #main {
      background-color: $background;
      overflow-y: scroll;
      flex: 1;
    }
  }
}
</style>
