<template>
  <div id="terminal">
    <div id="activeTerminal" v-if="active">
      <font-awesome-icon id="closeTerminal" icon="times" @click="setActive(false)"></font-awesome-icon>
      <p v-for="message in messages">{{ message }}</p>
      <div id="textbar" contenteditable></div>
    </div>
    <p id="inactiveTerminal" @click="setActive(true)" v-else>Terminal</p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import store from '../store'
  import { EventBus } from '../assets/scripts/EventBus'

  export default {
    name: 'Terminal',
    computed: {
      active () {
        console.log(this.$store)
        return this.$store.state.Terminal.active
      },
      messages () {
        return this.$store.state.Terminal.messages
      }
    },
    methods: {
      ...mapActions({
        setActive: 'SET_ACTIVE',
        addMessage: 'ADD_MESSAGE'
      })
    }
  }

  // console.log(store)

  EventBus.$on('StartTerminal', (subprocess) => {
    store.dispatch('SET_ACTIVE', true)
    subprocess.stdout.on('data', (data) => {
      store.dispatch('SET_ACTIVE', true)
    })
  })
</script>

<style lang="scss" scoped>
@import '../assets/styles/globals.scss';
#terminal {
  background-color: $terminal;
  color: $terminal-color;
  position: relative;
  overflow-y: scroll;
  display: flex;

  #activeTerminal {
    height: 6em;
    width: 100%;

    #closeTerminal {
      position: absolute;
      top: 0.5em;
      right: 0.5em;

      &:hover {
        cursor: pointer;
      }
    }

    #textbar {
      padding-left: 1em;
      position: absolute;
      bottom: 0;
      height: 1.4em;
      width: 100%;
      background-color: $navbar-hover;
    }

    p {
      margin: 0.2em 0 0.2em 0;
    }
  }

  #inactiveTerminal {
    height: 1em;
    width: 100%;

    margin: 0;
    padding: 0;
    background-color: azure;
    color: black;
    font-size: 0.8em;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>