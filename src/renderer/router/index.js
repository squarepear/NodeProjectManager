import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/HomePage').default
    },
    {
      path: '/projects',
      name: 'projects-page',
      component: require('@/components/ProjectsPage').default
    },
    {
      path: '/project/:name',
      name: 'project-page',
      component: require('@/components/ProjectPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
