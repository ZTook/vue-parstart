import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Particles from '@/components/Particles'
import Mdlnav from '@/components/Mdlnav'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Hello
    },

    {
      path: '/particles',
      component: Particles
    },

    {
      path: '/mdlnav',
      component: Mdlnav
    }
  ]
})
