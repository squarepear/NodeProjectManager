<template>
  <div>
    <div id=titlebar>
      <h1>{{ project.name }}</h1>
      <button @click="start()">Start</button>
    </div>
    <p>{{ node.isInstalled }}</p>
  </div>
</template>

<script>
  import path from 'path'
  
  import { EventBus } from '../assets/scripts/EventBus'
  import ProjectManager from '../assets/scripts/ProjectManager'
  import NodeManager from '../assets/scripts/NodeManager'

  export default {
    name: 'ProjectPage',
    data () {
      return {
        project: ProjectManager.getProjectData(path.join(this.$config.get('projectDirectoryPath'), this.$route.params.name)),
        start: () => {
          let subprocess = NodeManager.runUsingVersion(path.join(this.$config.get('projectDirectoryPath'), this.$route.params.name, this.project.main), this.project.nodeversion || 'v11.0.0')
          EventBus.$emit('StartTerminal', subprocess)
        }
      }
    },
    computed: {
      node: function () {
        let data = {}

        data.isInstalled = NodeManager.checkInstalled(this.project.nodeversion || 'v11.0.0')
        data.version = this.project.nodeversion || 'v11.0.0'

        return data
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/globals.scss';
#titlebar {
  position: relative;
  height: 8em;
  background-color: $titlebar;
  > h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0.4em;
  }
  > button {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 4em;
    width: 10em;
    margin: 0.4em;
  }
}
</style>
