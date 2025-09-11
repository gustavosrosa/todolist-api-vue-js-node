import { createRouter, createWebHashHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import FormView from '@/views/FormView.vue'
import { useRouteStore } from '@/stores/taskStore'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TaskView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  useRouteStore().route = to.fullPath;
  next()
})

export default router
