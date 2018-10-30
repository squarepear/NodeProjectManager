<template>
  <div id="navbar">
    <nav-bar-item href="/">Home</nav-bar-item>
    <nav-bar-item href="/projects">Projects</nav-bar-item>
  </div>
</template>

<script>
  import NavBarItem from './NavBar/NavBarItem'

  export default {
    name: 'NavBar',
    components: { NavBarItem }
    // data() {
    //   return {
    //     key: value
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/globals.scss';
#navbar {
  background-color: $navbar;
  height: 100%;
}
</style>