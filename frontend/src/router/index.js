import { createRouter, createWebHashHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import FormView from '@/views/FormView.vue'
import { useRouteStore } from '@/stores/taskStore'
import LoginView from '@/views/LoginView.vue'
import CreateNewUserView from '@/views/user-views/CreateNewUserView.vue'
import ChangePasswordView from '@/views/user-views/ChangePasswordView.vue'

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
  {
    path: '/login/new-user',
    name: 'newUser',
    component: CreateNewUserView,
  },
  {
    path: '/login/change-password',
    name: 'changePassword',
    component: ChangePasswordView,
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
