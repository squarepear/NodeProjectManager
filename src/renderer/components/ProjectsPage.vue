<template>
  <div>
    <div id="nav"></div>
    <div id="content">
      <project-item v-for="project in projects" :project="project"></project-item>
    </div>
  </div>
</template>

<script>
  import ProjectManager from '../assets/scripts/ProjectManager'
  import ProjectItem from './ProjectsPage/ProjectItem'

  export default {
    name: 'ProjectsPage',
    components: { ProjectItem },
    data () {
      return {
        projects: ProjectManager.getAllProjectsData(this.$config.get('projectDirectoryPath'))
      }
    }
  }
</script>

<style scoped>
@import '../assets/styles/globals.scss';
#nav {
  position: sticky;
  height: 6em;
  width: 100%;
}
</style>