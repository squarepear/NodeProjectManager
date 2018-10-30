<template>
  <div id="navbaritem" @click="open()">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NavBarItem',
    props: [ 'href' ],
    methods: {
      open () {
        this.$router.push(this.href)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/globals.scss';
#navbaritem {
  background-color: $navbar;
  color: snow;
  height: 4em;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: $navbar-hover;
    cursor: pointer;
  }
}
</style>
