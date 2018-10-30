<template>
  <div id="projectitem" @click="open()">
    <div id="projectname">
      <h3>{{ project.name }} v{{ project.version }}</h3>
    </div>
    <div id="nodeversion">
      <p v-if="project.nodeversion">Node v{{ node.version }}</p>
      <p v-else>Node v11.0.0</p>
    </div>
    <div id="projectpath">
      <p>{{ project.path }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    props: [
      'project'
    ],
    methods: {
      open () {
        this.$router.push(`project/${this.project.name}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/globals.scss';
#projectitem {
  height: 5em;
  width: 100%;
  position: relative;
  color: #bbbbbb;

  > * {
    position: absolute;
    margin: 0.2em;
    > * {
      margin: 0;
      padding: 0;
    }
  }
  &:hover {
    background-color: lighten($color: $background, $amount: 4);
  }
}
#projectname {
  left: 0;
  top: 0;
}
#nodeversion {
  left: 0;
  bottom: 0;
}
#projectpath {
  right: 0;
  bottom: 0;
}
</style>
