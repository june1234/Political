import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index/index.vue'),
    },
    {
      path: '/Remarks',
      name: 'Remarks',
      component: () => import('@/components/Remarks')
    },
    {
      path: '/Issues',
      name: 'Issues',
      component: () => import('@/components/Issues')
    },
    {
      path: '/Issues/detail',
      name: 'IssuesDetail',
      component: () => import('@/components/Issues/Details.vue')
    },
    {
      path: '/person/list',
      name: 'list',
      component: () => import('@/components/person/list.vue')
    },
    {
      path: '/person/detail',
      name: 'detail',
      params: { name: '特朗普' },
      component: () => import('@/components/person/detail.vue')
    }
  ]
})
