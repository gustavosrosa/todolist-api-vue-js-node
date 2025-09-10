import { createRouter, createWebHashHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import FormView from '@/views/FormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TaskView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
