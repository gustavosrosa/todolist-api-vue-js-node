import { createRouter, createWebHashHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import FormView from '@/views/FormView.vue'
import { useRouteStore } from '@/stores/taskStore'
import LoginView from '@/views/LoginView.vue'

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
  {
    path: '/login',
    name: 'login',
    component: LoginView,
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
