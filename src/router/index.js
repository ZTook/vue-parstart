import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Particles from '@/components/Particles'
import Mdlnav from '@/components/Mdlnav'
import Douban from '@/components/Douban.vue'

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
      path: '/login',
      component: Login
    },


    {
      path: '/particles',
      component: Particles
    },

    {
      path: '/mdlnav',
      component: Mdlnav
    },

    {
      path: '/douban',
      component: Douban
    }
  ]
})
