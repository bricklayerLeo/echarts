import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/a'
import onmousewhee from '@/components/onmousewhee/onmousewhee.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '/onmousewhee',
      name: 'onmousewhee',
      component: onmousewhee
    }
  ]
})
